const fs = require("fs");
const path = require("path");

const APP_SERVER_DIR = path.join(process.cwd(), ".next/server/app");
const BASELINE_DIR = path.join(process.cwd(), "baseline");

if (!fs.existsSync(BASELINE_DIR)) {
  fs.mkdirSync(BASELINE_DIR, { recursive: true });
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
  // Remove script, style, svg, noscript
  text = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ");
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ");
  text = text.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, " ");
  text = text.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, " ");
  // Replace tags with space or newline
  text = text.replace(/<\/div>|<\/p>|<\/li>|<\/tr>|<\/h[1-6]>/gi, "\n");
  text = text.replace(/<[^>]+>/g, " ");
  text = decodeHtmlEntities(text);
  // Normalize whitespace: collapse spaces, keep lines
  const lines = text
    .split("\n")
    .map(line => line.replace(/[ \t]+/g, " ").trim())
    .filter(line => line.length > 0);
  return lines.join("\n");
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
const pages = [];

for (const filePath of htmlFiles) {
  const relativeFromApp = path.relative(APP_SERVER_DIR, filePath);
  
  // Skip internal next files
  if (relativeFromApp.startsWith("_")) continue;
  
  let route = "/" + relativeFromApp.replace(/\.html$/, "");
  if (route.endsWith("/index")) {
    route = route.slice(0, -6) || "/";
  }
  if (route === "/index") {
    route = "/";
  }

  const content = fs.readFileSync(filePath, "utf8");

  // Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? decodeHtmlEntities(titleMatch[1].trim()) : null;

  // Canonical
  const canonicalMatch = content.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  // H1s
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => {
    return decodeHtmlEntities(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
  });

  // JSON-LD blocks
  const jsonLdBlocks = [];
  const scriptRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(content)) !== null) {
    try {
      jsonLdBlocks.push(JSON.parse(match[1]));
    } catch (e) {
      jsonLdBlocks.push(match[1].trim());
    }
  }

  pages.push({
    route,
    title,
    h1: h1Matches,
    canonical,
    jsonLd: jsonLdBlocks,
  });

  // Check if this is one of the 5 baseline rendered text targets
  if (route === "/") {
    fs.writeFileSync(path.join(BASELINE_DIR, "homepage.txt"), htmlToPlainText(content), "utf8");
  } else if (route === "/services") {
    fs.writeFileSync(path.join(BASELINE_DIR, "services.txt"), htmlToPlainText(content), "utf8");
  } else if (route === "/products") {
    fs.writeFileSync(path.join(BASELINE_DIR, "products.txt"), htmlToPlainText(content), "utf8");
  } else if (route === "/case-studies") {
    fs.writeFileSync(path.join(BASELINE_DIR, "case-studies.txt"), htmlToPlainText(content), "utf8");
  } else if (route === "/about") {
    fs.writeFileSync(path.join(BASELINE_DIR, "about.txt"), htmlToPlainText(content), "utf8");
  }
}

// Sort pages by route
pages.sort((a, b) => a.route.localeCompare(b.route));

const baselineData = {
  generatedAt: new Date().toISOString(),
  totalPages: pages.length,
  pages,
};

fs.writeFileSync(path.join(process.cwd(), "seo-baseline.json"), JSON.stringify(baselineData, null, 2), "utf8");
console.log(`Successfully generated seo-baseline.json with ${pages.length} pages.`);
console.log(`Successfully saved rendered text files to ${BASELINE_DIR}.`);
