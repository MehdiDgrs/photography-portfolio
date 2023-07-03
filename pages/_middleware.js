import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; connect-src 'self' vitals.vercel-insights.com;`
  );
  return response;
}
