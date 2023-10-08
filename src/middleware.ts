import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin"))
    return NextResponse.redirect(new URL("/dashboard", request.url));
}
