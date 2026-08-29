import { NextResponse } from "next/server";
import { getPortfolioData, savePortfolioData } from "@/lib/db";

export async function GET() {
  try {
    const data = await getPortfolioData();
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("Failed to load portfolio data:", err);
    return NextResponse.json({ ok: false, error: "Failed to load data" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    await savePortfolioData(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save portfolio data:", err);
    return NextResponse.json({ ok: false, error: "Failed to save data" }, { status: 500 });
  }
}
