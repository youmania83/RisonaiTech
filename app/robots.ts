import type { MetadataRoute } from "next";

const BASE_URL = "https://risonaitech.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default: allow all search engines
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly allow every major AI crawler
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      // Additional AI crawlers (2025-26)
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "Ai2Bot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "DuckAssistant", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Omgilibot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
