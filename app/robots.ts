import type { MetadataRoute } from "next";

const BASE_URL = "https://risonaitech.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default: allow all search engines and AI crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
