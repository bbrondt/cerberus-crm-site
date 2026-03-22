import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
const GHL_BASE_URL = "https://services.leadconnectorhq.com";

export async function GET(req: NextRequest) {
  try {
    if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
      console.error("Missing GHL_API_KEY or GHL_CALENDAR_ID");
      return NextResponse.json(
        { error: "Calendar not configured" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const timezone = searchParams.get("timezone") || "America/New_York";

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: "startDate and endDate are required" },
        { status: 400 }
      );
    }

    const url = new URL(
      `${GHL_BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots`
    );
    url.searchParams.set("startDate", startDate);
    url.searchParams.set("endDate", endDate);
    url.searchParams.set("timezone", timezone);

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-04-15",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("GHL free-slots error:", res.status, errorText);
      return NextResponse.json(
        { error: "Failed to fetch availability" },
        { status: res.status }
      );
    }

    const data = await res.json();

    // data should have a structure like { calendarId, dateRange, slots: { "2026-03-23": [{ slot: "2026-03-23T12:00:00-04:00" }, ...] } }
    return NextResponse.json(data);
  } catch (err) {
    console.error("Calendar slots error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
