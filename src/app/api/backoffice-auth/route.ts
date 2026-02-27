import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

const COOKIE_NAME = "backoffice_auth";
const SALT = "sourire-backoffice";

function getExpectedToken(): string {
  const password = process.env.BACKOFFICE_PASSWORD;
  if (!password) {
    throw new Error("BACKOFFICE_PASSWORD is not set");
  }
  return createHash("sha256")
    .update(password + SALT)
    .digest("base64url");
}

export async function POST(request: NextRequest) {
  try {
    const { password } = (await request.json()) as { password?: string };
    const expected = getExpectedToken();
    const actual = password
      ? createHash("sha256").update(password + SALT).digest("base64url")
      : "";

    if (actual !== expected) {
      return NextResponse.json(
        { error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, expected, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });
    return res;
  } catch (e) {
    return NextResponse.json(
      { error: "Configuration serveur manquante" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const logout = request.nextUrl.searchParams.get("logout");
  if (logout === "1") {
    const res = NextResponse.redirect(new URL("/backoffice/login", request.url));
    res.cookies.delete(COOKIE_NAME);
    return res;
  }
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
