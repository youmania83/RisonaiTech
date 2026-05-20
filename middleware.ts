import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Vercel automatically injects x-vercel-ip-country on their Edge Network.
  // Falls back to "IN" (India) for local dev / unknown.
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.cookies.get("visitor-country")?.value ??
    "IN";

  const response = NextResponse.next();

  // Set a long-lived cookie so the client component can read it instantly.
  // SameSite=Lax so it works with cross-site navigations (social, email).
  response.cookies.set("visitor-country", country, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: "lax",
    httpOnly: false, // must be readable by client-side JS
  });

  return response;
}

export const config = {
  // Run on all pages but skip static assets, API routes, and Next.js internals
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|otf|css|js)).*)",
  ],
};
