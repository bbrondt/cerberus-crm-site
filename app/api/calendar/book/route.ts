import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE_URL = "https://services.leadconnectorhq.com";

async function findOrCreateContact(
  name: string,
  email: string,
  phone: string,
  company: string
): Promise<string> {
  // Try to find existing contact by email
  const searchRes = await fetch(
    `${GHL_BASE_URL}/contacts/search/duplicate?email=${encodeURIComponent(email)}&locationId=${GHL_LOCATION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
    }
  );

  if (searchRes.ok) {
    const searchData = await searchRes.json();
    if (searchData.contact?.id) {
      return searchData.contact.id;
    }
  }

  // Create new contact
  const nameParts = name.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const createRes = await fetch(`${GHL_BASE_URL}/contacts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      companyName: company || undefined,
      source: "cerberus-crm-website",
      tags: ["demo-registration", "vortex-interest"],
    }),
  });

  if (!createRes.ok) {
    const errorText = await createRes.text();
    console.error("GHL create contact error:", createRes.status, errorText);

    // If duplicate contact error, GHL returns the existing contact ID in meta
    try {
      const errorData = JSON.parse(errorText);
      if (errorData.meta?.contactId) {
        console.log("Using existing contact:", errorData.meta.contactId);
        return errorData.meta.contactId;
      }
    } catch {
      // Not JSON, fall through
    }

    throw new Error("Failed to create contact");
  }

  const createData = await createRes.json();
  return createData.contact.id;
}

export async function POST(req: NextRequest) {
  try {
    if (!GHL_API_KEY || !GHL_CALENDAR_ID || !GHL_LOCATION_ID) {
      console.error("Missing GHL env vars");
      return NextResponse.json(
        { error: "Calendar not configured" },
        { status: 500 }
      );
    }

    const { name, email, phone, company, selectedSlot, timezone } =
      await req.json();

    if (!name || !email || !selectedSlot) {
      return NextResponse.json(
        { error: "Name, email, and time slot are required" },
        { status: 400 }
      );
    }

    // Step 1: Find or create contact
    const contactId = await findOrCreateContact(
      name,
      email,
      phone || "",
      company || ""
    );

    // Step 2: Create appointment
    const appointmentRes = await fetch(
      `${GHL_BASE_URL}/calendars/events/appointments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-04-15",
        },
        body: JSON.stringify({
          calendarId: GHL_CALENDAR_ID,
          locationId: GHL_LOCATION_ID,
          contactId,
          selectedSlot,
          selectedTimezone: timezone || "America/New_York",
          title: `Cerberus Demo — ${name}`,
          appointmentStatus: "confirmed",
        }),
      }
    );

    if (!appointmentRes.ok) {
      const errorText = await appointmentRes.text();
      console.error(
        "GHL create appointment error:",
        appointmentRes.status,
        errorText
      );
      return NextResponse.json(
        { error: "Failed to book appointment" },
        { status: appointmentRes.status }
      );
    }

    const appointmentData = await appointmentRes.json();

    return NextResponse.json({
      booked: true,
      appointmentId: appointmentData.id || appointmentData.appointment?.id,
      contactId,
    });
  } catch (err) {
    console.error("Calendar booking error:", err);
    return NextResponse.json(
      { error: "Failed to book demo" },
      { status: 500 }
    );
  }
}
