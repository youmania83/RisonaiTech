import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://risonaitech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const appDir = path.join(process.cwd(), "app");

  function scanDirectory(dirPath: string, routePath = "") {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      if (item.startsWith("_") || item.startsWith(".") || item === "api" || item === "locations") {
        continue; // Skip layout groups, next internal, API routes, and legacy locations wrapper
      }

      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const currentRoute = routePath ? `${routePath}/${item}` : `/${item}`;
        const pagePath = path.join(fullPath, "page.tsx");

        if (fs.existsSync(pagePath)) {
          const pageContent = fs.readFileSync(pagePath, "utf-8");
          // Skip pages that are just permanent redirects (legacy redirect pages)
          if (pageContent.includes("permanentRedirect") || pageContent.includes("redirect(")) {
            continue;
          }

          const pageStat = fs.statSync(pagePath);
          let priority = 0.5;
          let changeFrequency = "monthly";

          if (currentRoute === "/") {
            priority = 1.0;
            changeFrequency = "weekly";
          } else if (currentRoute.startsWith("/services")) {
            priority = currentRoute === "/services" ? 0.9 : 0.95;
            changeFrequency = "weekly";
          } else if (currentRoute.startsWith("/blog")) {
            priority = currentRoute === "/blog" ? 0.85 : 0.85;
            changeFrequency = currentRoute === "/blog" ? "weekly" : "monthly";
          } else if (currentRoute.startsWith("/tools")) {
            priority = 0.9;
            changeFrequency = "weekly";
          } else if (["/delhi", "/gurgaon", "/panipat", "/jaipur", "/ahmedabad", "/indore", "/chandigarh", "/london", "/new-york", "/new-jersey"].includes(currentRoute)) {
            priority = 0.8;
            changeFrequency = "monthly";
          } else if (currentRoute === "/about" || currentRoute === "/products") {
            priority = 0.8;
            changeFrequency = "monthly";
          } else if (currentRoute === "/contact") {
            priority = 0.7;
            changeFrequency = "monthly";
          } else if (currentRoute === "/privacy" || currentRoute === "/terms") {
            priority = 0.3;
            changeFrequency = "yearly";
          }

          sitemapEntries.push({
            url: `${BASE_URL}${currentRoute}`,
            lastModified: pageStat.mtime,
            changeFrequency: changeFrequency as any,
            priority,
          });
        }
        scanDirectory(fullPath, currentRoute);
      }
    }
  }

  // Scan root level app/
  scanDirectory(appDir);

  // Add homepage explicitly (app/page.tsx matches currentRoute = "")
  const rootPagePath = path.join(appDir, "page.tsx");
  if (fs.existsSync(rootPagePath)) {
    sitemapEntries.push({
      url: `${BASE_URL}/`,
      lastModified: fs.statSync(rootPagePath).mtime,
      changeFrequency: "weekly",
      priority: 1.0,
    });
  }

  // Add locations/india explicitly (as locations/ is skipped in scanDirectory)
  const indiaPath = path.join(appDir, "locations", "india", "page.tsx");
  if (fs.existsSync(indiaPath)) {
    sitemapEntries.push({
      url: `${BASE_URL}/locations/india`,
      lastModified: fs.statSync(indiaPath).mtime,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Sort entries for deterministic output
  return sitemapEntries.sort((a, b) => (b.priority ?? 0.5) - (a.priority ?? 0.5) || a.url.localeCompare(b.url));
}
