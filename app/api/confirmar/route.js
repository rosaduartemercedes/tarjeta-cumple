import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { nombre } = await request.json();

    if (!nombre) {
      return NextResponse.json({ error: "El nombre es requerido" }, { status: 400 });
    }

    // Le pega a la URL del .env.local de forma segura
    const responseSheets = await fetch(process.env.GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!responseSheets.ok) {
      throw new Error("Error en la planilla");
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}