import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();

  if (isProtectedRoute(req)) auth().protect();

  // Redirect signed in users to organization selection page if they are not active in an organization

  if (
    userId &&
    !orgId &&
    req.nextUrl.pathname.startsWith("/dashboard") &&
    req.nextUrl.pathname !== "/organization"
  ) {
    const orgSelection = new URL("/organization", req.url);

    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
