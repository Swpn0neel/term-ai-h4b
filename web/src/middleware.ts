// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//     '/projects(.*)',
// ]);

// export default clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) auth().protect();
// });

import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
	clockSkewInMs: 100_000,
	clockSkewInSeconds: 100,
  ignoredRoutes: ["/api(.*)"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};