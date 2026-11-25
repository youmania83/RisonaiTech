const fs = require("fs");
const path = require("path");

const APP_SERVER_DIR = path.join(process.cwd(), ".next/server/app");
const BASELINE_DIR = path.join(process.cwd(), "baseline");
const CURRENT_RENDER_DIR = path.join(process.cwd(), "current_render");

if (!fs.existsSync(CURRENT_RENDER_DIR)) {
  fs.mkdirSync(CURRENT_RENDER_DIR, { recursive: true });
}

function decodeHtmlEntities(str) {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/");
}

function htmlToPlainText(html) {
  let text = html;
  text = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ");
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ");
  text = text.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, " ");
  text = text.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, " ");
  text = text.replace(/<\/div>|<\/p>|<\/li>|<\/tr>|<\/h[1-6]>/gi, "\n");
  text = text.replace(/<[^>]+>/g, " ");
  text = decodeHtmlEntities(text);
  const lines = text
    .split("\n")
    .map(line => line.replace(/[ \t]+/g, " ").trim())
    .filter(line => line.length > 0);
  return lines.join("\n");
}

// 1. Render current text for the 5 pages
const pagesToRender = [
  { file: "index.html", output: "homepage.txt", route: "/" },
  { file: "services.html", output: "services.txt", route: "/services" },
  { file: "products.html", output: "products.txt", route: "/products" },
  { file: "case-studies.html", output: "case-studies.txt", route: "/case-studies" },
  { file: "about.html", output: "about.txt", route: "/about" },
];

console.log("=== 1. Text Diff Check ===");
for (const page of pagesToRender) {
  const htmlPath = path.join(APP_SERVER_DIR, page.file);
  if (!fs.existsSync(htmlPath)) {
    console.error(`HTML file not found: ${htmlPath}`);
    continue;
  }
  const html = fs.readFileSync(htmlPath, "utf8");
  const plainText = htmlToPlainText(html);
  const currentPath = path.join(CURRENT_RENDER_DIR, page.output);
  fs.writeFileSync(currentPath, plainText, "utf8");

  const baselinePath = path.join(BASELINE_DIR, page.output);
  if (fs.existsSync(baselinePath)) {
    const baselineText = fs.readFileSync(baselinePath, "utf8");
    if (baselineText === plainText) {
      console.log(`[PASS] ${page.output}: Identical to baseline.`);
    } else {
      console.log(`[MODIFIED - AS EXPECTED] ${page.output}: Differences found:`);
      const baseLines = baselineText.split("\n");
      const curLines = plainText.split("\n");
      // Print first 10 changed lines
      let diffCount = 0;
      for (let i = 0; i < Math.max(baseLines.length, curLines.length); i++) {
        if (baseLines[i] !== curLines[i]) {
          console.log(`  Line ${i + 1}:`);
          console.log(`    - BASELINE: ${baseLines[i] || "(EOF)"}`);
          console.log(`    + CURRENT : ${curLines[i] || "(EOF)"}`);
          diffCount++;
          if (diffCount >= 10) {
            console.log(`    ... (${Math.abs(baseLines.length - curLines.length)} more line differences)`);
            break;
          }
        }
      }
    }
  }
}

// 2. SEO Baseline Integrity Check
console.log("\n=== 2. SEO Baseline Integrity Check ===");
const baselineData = JSON.parse(fs.readFileSync("seo-baseline.json", "utf8"));
const baselineMap = new Map();
for (const p of (baselineData.pages || baselineData)) {
  baselineMap.set(p.route, p);
}

function findHtmlFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, fileList);
    } else if (item.endsWith(".html")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles(APP_SERVER_DIR);
let titleMismatches = 0;
let h1Mismatches = 0;
let canonicalMismatches = 0;
let metaKeywordsFound = 0;

for (const filePath of htmlFiles) {
  const relativeFromApp = path.relative(APP_SERVER_DIR, filePath);
  if (relativeFromApp.startsWith("_")) continue;

  let route = "/" + relativeFromApp.replace(/\.html$/, "");
  if (route.endsWith("/index")) {
    route = route.slice(0, -6) || "/";
  }
  if (route === "/index") {
    route = "/";
  }

  const content = fs.readFileSync(filePath, "utf8");

  // Check if <meta name="keywords"> exists in HTML output
  if (content.includes('name="keywords"') || content.includes("name='keywords'")) {
    console.error(`[FAIL] meta name="keywords" found in ${route}`);
    metaKeywordsFound++;
  }

  const titleMatch = content.match(/<title>([^<]*)<\/title>/);
  const currentTitle = titleMatch ? decodeHtmlEntities(titleMatch[1].trim()) : null;

  const canonicalMatch = content.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/);
  const currentCanonical = canonicalMatch ? canonicalMatch[1] : null;

  const currentH1s = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => {
    return decodeHtmlEntities(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
  });

  const basePage = baselineMap.get(route);
  if (!basePage) {
    if (route === "/blog/enterprise-ai-agent-evaluation-framework-2027") {
      console.log(`[NEW ROUTE - AS REQUESTED] ${route}`);
    } else {
      console.warn(`[UNKNOWN NEW ROUTE] ${route}`);
    }
    continue;
  }

  // Compare Title
  if (basePage.title !== currentTitle) {
    console.error(`[TITLE MISMATCH] on ${route}:\n  Base: ${basePage.title}\n  Curr: ${currentTitle}`);
    titleMismatches++;
  }

  // Compare Canonical
  if (basePage.canonical !== currentCanonical) {
    console.error(`[CANONICAL MISMATCH] on ${route}:\n  Base: ${basePage.canonical}\n  Curr: ${currentCanonical}`);
    canonicalMismatches++;
  }

  // Compare H1s
  const baseH1Str = JSON.stringify(basePage.h1 || basePage.h1s || []);
  const currH1Str = JSON.stringify(currentH1s);
  if (baseH1Str !== currH1Str) {
    console.error(`[H1 MISMATCH] on ${route}:\n  Base: ${baseH1Str}\n  Curr: ${currH1Str}`);
    h1Mismatches++;
  }
}

console.log("\n--- Audit Summary ---");
console.log(`Routes Audited: ${htmlFiles.length}`);
console.log(`Title Mismatches: ${titleMismatches}`);
console.log(`H1 Mismatches: ${h1Mismatches}`);
console.log(`Canonical Mismatches: ${canonicalMismatches}`);
console.log(`Meta Keywords Tags Found in HTML: ${metaKeywordsFound}`);
