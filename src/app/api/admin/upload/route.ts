import { mkdir, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { isAdminRequest } from "@/lib/admin-auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
const EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: { name?: string; type?: string; dataBase64?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const ext = EXTENSIONS[body.type ?? ""];
  if (!ext || !body.dataBase64) {
    return NextResponse.json(
      { error: "Formato no soportado (usá JPG, PNG o WebP)." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(body.dataBase64, "base64");
  if (buffer.length === 0 || buffer.length > MAX_BYTES) {
    return NextResponse.json(
      { error: "La imagen debe pesar entre 1 byte y 6 MB." },
      { status: 400 }
    );
  }

  const base = (body.name ?? "producto")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40) || "producto";
  const filename = `${base}-${Date.now()}.${ext}`;

  if (!isSupabaseConfigured) {
    const dir = path.join(process.cwd(), "public", "uploads");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, filename), buffer);
    return NextResponse.json({ url: `/uploads/${filename}` });
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.storage
    .from("productos")
    .upload(filename, buffer, { contentType: body.type });
  if (error) {
    return NextResponse.json(
      { error: `No se pudo subir la imagen: ${error.message}` },
      { status: 400 }
    );
  }
  const { data } = supabase.storage.from("productos").getPublicUrl(filename);
  return NextResponse.json({ url: data.publicUrl });
}
