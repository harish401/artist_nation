import { NextResponse, type NextRequest } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname === "/") {
    response.headers.set("Link", `<${SITE_CONFIG.url}>; rel="canonical"`);
    response.headers.set(
      "X-Robots-Tag",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
