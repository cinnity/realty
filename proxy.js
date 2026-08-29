import { NextResponse } from "next/server";

// HTTP Basic Auth for the whole app — a browser-native username/password
// prompt. Credentials come from environment variables, never hardcoded.
// This protects both the pages and the /api/portfolio route, so the data
// itself can't be read or written without the password either.
//
// Next.js 16 renamed the "middleware" file convention to "proxy" — this file
// (and its exported `proxy` function) is that new convention, not the old
// middleware.js / export function middleware(). A leftover middleware.js is
// silently ignored on Next.js 16+, so don't keep both files around.

function isAuthorized(request) {
  const header = request.headers.get("authorization");
  if (!header || !header.startsWith("Basic ")) return false;

  const decoded = atob(header.split(" ")[1]);
  const separatorIndex = decoded.indexOf(":");
  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);

  return user === process.env.AUTH_USERNAME && pass === process.env.AUTH_PASSWORD;
}

export function proxy(request) {
  if (isAuthorized(request)) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Cinnity Realty", charset="UTF-8"',
    },
  });
}

// Applies to everything except static assets (which don't need protecting
// and would otherwise break favicon/font loading before login).
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
