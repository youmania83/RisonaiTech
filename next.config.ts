import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  // Enforce no trailing slashes — keeps canonical URLs clean and
  // avoids duplicate indexing of /page vs /page/
  trailingSlash: false,

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80, 90],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Permanent redirects — consolidate all traffic to canonical non-www HTTPS
  async redirects() {
    return [
      // www → non-www (301 permanent)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.risonaitech.com" }],
        destination: "https://risonaitech.com/:path*",
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
    ];
  },
};

export default nextConfig;
