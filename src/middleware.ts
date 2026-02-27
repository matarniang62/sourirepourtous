import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "backoffice_auth";
const SALT = "sourire-backoffice";

async function computeToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(password + SALT);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/backoffice")) {
    return NextResponse.next();
  }
  if (pathname === "/backoffice/login") {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const expected =
      process.env.BACKOFFICE_PASSWORD &&
      (await computeToken(process.env.BACKOFFICE_PASSWORD));
    if (token && token === expected) {
      return NextResponse.redirect(new URL("/backoffice/membres", request.url));
    }
    return NextResponse.next();
  }

  const expected =
    process.env.BACKOFFICE_PASSWORD &&
    (await computeToken(process.env.BACKOFFICE_PASSWORD));
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!expected || token !== expected) {
    return NextResponse.redirect(new URL("/backoffice/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/backoffice/:path*",
};
