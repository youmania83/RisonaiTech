import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RisonAI Tech — AI Automation Agency India",
    short_name: "RisonAI Tech",
    description:
      "India's AI automation agency building agentic AI systems, autonomous AI agents, n8n workflows, and SaaS platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#090C18",
    theme_color: "#090C18",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-IN",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/brand/risonaitech-icon-64.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/risonaitech-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/risonaitech-icon-256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/risonaitech-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: "RisonAI Tech — AI Automation Agency India",
      },
    ],
  };
}
