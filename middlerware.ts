import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware() {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({token, req}) => {
                const {pathname} = req.nextUrl;

                // Allow requests to /api/auth, /login, and /register
                if (
                    pathname.startsWith("/api/auth") || pathname === "/login" || pathname === "/register"
                ) {
                    return true;
                }

                // Redirect authenticated users to the homepage
                if (pathname === "/dashboard") {
                    return true;
                }

                return !!token;
            }
        }
    }
)

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};