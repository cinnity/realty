import { NextResponse } from "next/server";
import { getPortfolioData } from "@/lib/db";

// How many days out (or overdue) something has to be before it's worth a text.
// Keeps this from texting you every single day for a month before a renewal —
// the in-app Notifications page still shows the full 90/60/30-day view.
const SMS_WINDOW_DAYS = 7;

function daysUntil(dateStr, todayStr) {
  const due = new Date(dateStr);
  const today = new Date(todayStr);
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}

function todayISO() {
  // Vercel functions run in UTC, so this is unambiguous — no local/UTC
  // timezone mismatch to worry about here (unlike in the browser).
  return new Date().toISOString().slice(0, 10);
}

function buildDigest(data, today) {
  const properties = data.properties || [];
  const compliance = data.compliance || [];
  const lines = [];

  const propertyName = (id) => properties.find((p) => p.id === id)?.name || "Portfolio-wide";

  for (const p of properties) {
    if (p.leaseEnd) {
      const d = daysUntil(p.leaseEnd, today);
      if (d <= SMS_WINDOW_DAYS) {
        lines.push(d < 0 ? `Lease overdue ${Math.abs(d)}d — ${p.name}` : `Lease due in ${d}d — ${p.name}`);
      }
    }
    if (p.insuranceExpiration) {
      const d = daysUntil(p.insuranceExpiration, today);
      if (d <= SMS_WINDOW_DAYS) {
        lines.push(d < 0 ? `Insurance overdue ${Math.abs(d)}d — ${p.name}` : `Insurance due in ${d}d — ${p.name}`);
      }
    }
  }

  for (const c of compliance) {
    if (c.status === "completed") continue;
    const d = daysUntil(c.dueDate, today);
    if (d <= SMS_WINDOW_DAYS) {
      const amt = c.amount ? ` ($${c.amount})` : "";
      lines.push(d < 0 ? `${c.itemType} overdue ${Math.abs(d)}d — ${propertyName(c.propertyId)}${amt}` : `${c.itemType} due in ${d}d — ${propertyName(c.propertyId)}${amt}`);
    }
  }

  return lines;
}

async function sendSms(body) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.TWILIO_TO_NUMBER;
  if (!sid || !token || !from || !to) {
    throw new Error("Missing Twilio environment variables");
  }

  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${sid}:${token}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ From: from, To: to, Body: body }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Twilio send failed: ${res.status} ${errText}`);
  }
  return res.json();
}

export async function GET(request) {
  // verify this request actually came from Vercel's cron scheduler
  const authHeader = request.headers.get("authorization");
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const data = await getPortfolioData();
    const today = todayISO();
    const lines = buildDigest(data, today);

    if (lines.length === 0) {
      return NextResponse.json({ ok: true, sent: false, reason: "Nothing due within the reminder window" });
    }

    // cap message length so a bad month doesn't produce an enormous text
    const MAX_LINES = 8;
    const shown = lines.slice(0, MAX_LINES);
    const overflow = lines.length - shown.length;
    const body = `Cinnity Realty — ${lines.length} item${lines.length === 1 ? "" : "s"} need attention:\n` + shown.map((l) => `• ${l}`).join("\n") + (overflow > 0 ? `\n+${overflow} more` : "");

    await sendSms(body);
    return NextResponse.json({ ok: true, sent: true, itemCount: lines.length });
  } catch (err) {
    console.error("Reminder job failed:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
