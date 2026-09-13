import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  compress: true,
  poweredByHeader: false,

  // Enforce no trailing slashes — keeps canonical URLs clean and
  // avoids duplicate indexing of /page vs /page/
  trailingSlash: false,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80, 90],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "launchbuff.com" },
    ],
  },

  // Permanent redirects — consolidate all traffic to canonical non-www HTTPS
  async redirects() {
    return [
      // http → https (belt-and-suspenders; Vercel also enforces this at edge)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://risonaitech.com/:path*",
        permanent: true,
      },
      // www → non-www (301 permanent)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.risonaitech.com" }],
        destination: "https://risonaitech.com/:path*",
        permanent: true,
      },
      // legacy locations redirects
      {
        source: "/locations/delhi",
        destination: "/delhi",
        permanent: true,
      },
      {
        source: "/locations/gurgaon",
        destination: "/gurgaon",
        permanent: true,
      },
    ];
  },

  // Security + SEO HTTP response headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data: https://images.unsplash.com https://www.googletagmanager.com https://launchbuff.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.googletagmanager.com",
              "frame-src 'self' https://www.google.com https://calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // Cross-Origin Opener Policy
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // Prevents MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Blocks clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Controls referrer information
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Force HTTPS for 2 years (includeSubDomains)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Restrict browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      // Long-lived cache for static assets (Next.js hashes filenames)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Prevent search engine indexing of LLM metadata files
      {
        source: "/llms.txt",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
