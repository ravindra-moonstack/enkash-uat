import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/resources/:path*",
};

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const responseHeader = new Headers({
    Host: "blogs.enkash.com",
    "X-Forwarded-Proto": "https",
    "X-Forwarded-Port": "443",
    Proxy: "",
  });

  if (request.nextUrl.pathname === "/resources") {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname, "https://blogs.enkash.com/blog"),
      { headers: responseHeader }
    );
  }

  if (request.nextUrl.pathname.startsWith("/resources/")) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname, "https://blogs.enkash.com/"),
      { headers: responseHeader }
    );
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Host", "blogs.enkash.com");
  return response;
}
