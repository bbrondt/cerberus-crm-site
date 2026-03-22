import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
const GHL_BASE_URL = "https://services.leadconnectorhq.com";

export async function GET(req: NextRequest) {
  try {
    if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
      console.error("Missing GHL_API_KEY or GHL_CALENDAR_ID");
      return NextResponse.json(
        { error: "Calendar not configured", detail: "Missing API key or Calendar ID" },
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

    // GHL expects startDate/endDate as epoch milliseconds
    const startMs = new Date(`${startDate}T00:00:00`).getTime();
    const endMs = new Date(`${endDate}T23:59:59`).getTime();

    const url = new URL(
      `${GHL_BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots`
    );
    url.searchParams.set("startDate", startMs.toString());
    url.searchParams.set("endDate", endMs.toString());
    url.searchParams.set("timezone", timezone);

    console.log("GHL free-slots request:", url.toString());

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-04-15",
      },
    });

    const responseText = await res.text();
    console.log("GHL free-slots response:", res.status, responseText.substring(0, 500));

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch availability",
          status: res.status,
          ghlError: responseText.substring(0, 500),
        },
        { status: res.status }
      );
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      return NextResponse.json(
        { error: "Invalid response from calendar API", raw: responseText.substring(0, 200) },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Calendar slots error:", err);
    return NextResponse.json(
      { error: "Internal server error", detail: String(err) },
      { status: 500 }
    );
  }
}
