import type { MetadataRoute } from "next";

const BASE_URL = "https://risonaitech.com";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "cohere-ai",
  "Applebot-Extended",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  const rules = [
    {
      userAgent: "*",
      allow: "/",
    },
    ...AI_CRAWLERS.map((crawler) => ({
      userAgent: crawler,
      allow: "/",
    })),
  ];

  return {
    rules,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
