import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    
    // If we're hitting an /admin route
    if (req.nextUrl.pathname.startsWith("/admin")) {
      // Must be logged in
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url))
      }
      
      // Must have an admin role
      const adminRoles = ["SUPER_ADMIN", "CONTENT_ADMIN", "MODERATOR", "ANALYST", "SUPPORT_ADMIN"]
      if (!adminRoles.includes(token.role as string)) {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
)

export const config = {
  matcher: ["/admin/:path*"],
}
