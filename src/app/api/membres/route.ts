import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const MEMBERS_FILE = path.join(DATA_DIR, "membres.json");

export const dynamic = "force-dynamic";

async function readMembers() {
  try {
    const raw = await fs.readFile(MEMBERS_FILE, "utf8");
    return JSON.parse(raw) as unknown[];
  } catch {
    return [];
  }
}

async function writeMembers(data: unknown[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(MEMBERS_FILE, JSON.stringify(data, null, 2), "utf8");
}

export async function GET() {
  const membres = await readMembers();
  return NextResponse.json(membres);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.nom || !body.email) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 },
    );
  }

  const membres = await readMembers();
  const now = new Date().toISOString();

  const nouveauMembre = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: now,
    nom: body.nom,
    prenom: body.prenom ?? "",
    email: body.email,
    telephone: body.telephone ?? "",
    ville: body.ville ?? "",
    typeEngagement: body.typeEngagement ?? "",
    message: body.message ?? "",
  };

  membres.unshift(nouveauMembre);
  await writeMembers(membres);

  return NextResponse.json({ ok: true });
}

