import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Case-insensitivity enforcement for SEO (exclude internal Next.js assets/API routes)
  if (
    !pathname.startsWith('/_next') && 
    !pathname.startsWith('/api') && 
    !pathname.includes('.')
  ) {
    if (pathname !== pathname.toLowerCase()) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.toLowerCase();
      return NextResponse.redirect(url, 301);
    }
  }

  const token = request.cookies.get("token")?.value

  const isProtectedAdminPath =
    pathname.startsWith("/admin") && pathname !== "/admin"
  const isProtectedAdminApi =
    pathname.startsWith("/api/admin") &&
    pathname !== "/api/admin/login" &&
    pathname !== "/api/test-upload"

  if (isProtectedAdminPath || isProtectedAdminApi) {
    if (!token) {
      if (isProtectedAdminApi) {
        return NextResponse.json(
          { success: false, message: "Unauthorized" },
          { status: 401 }
        )
      }
      return NextResponse.redirect(new URL("/admin", request.url))
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      await jwtVerify(token, secret)
    } catch (error) {
      console.error("Middleware Auth Error:", error)
      if (isProtectedAdminApi) {
        return NextResponse.json(
          { success: false, message: "Unauthorized or Session Expired" },
          { status: 401 }
        )
      }

      const response = NextResponse.redirect(new URL("/admin", request.url))
      response.cookies.delete("token")
      return response
    }
  }

  if (pathname === "/admin" && token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      await jwtVerify(token, secret)
      return NextResponse.redirect(new URL("/admin/dashboard", request.url))
    } catch (error) {
      console.error("Middleware Auth Error:", error)
    }
  }

  return NextResponse.next()
}
