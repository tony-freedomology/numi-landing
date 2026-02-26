import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE = "https://services.leadconnectorhq.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error("GHL credentials not configured");
      // Still return success to the user so they don't see an error
      return NextResponse.json({ ok: true, fallback: true });
    }

    // Split name into first/last
    const parts = name.trim().split(/\s+/);
    const firstName = parts[0] || "";
    const lastName = parts.slice(1).join(" ") || "";

    const ghlPayload = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      phone,
      email,
      tags: ["zoe-waitlist", "individuals"],
      source: "Zoe Landing Page",
    };

    const resp = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: "2021-07-28",
      },
      body: JSON.stringify(ghlPayload),
    });

    const data = await resp.json();

    if (!resp.ok) {
      console.error("GHL error:", resp.status, data);
      // If it's a duplicate, that's fine — they're already in GHL
      if (resp.status === 409 || data?.message?.includes("duplicate")) {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      // Return success to user anyway — don't leak GHL errors
      return NextResponse.json({ ok: true, fallback: true });
    }

    return NextResponse.json({ ok: true, contactId: data?.contact?.id });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ ok: true, fallback: true });
  }
}
