"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Loader2,
  CheckCircle,
  Calendar,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

interface Slot {
  slot: string;
}

interface SlotsMap {
  [date: string]: Slot[];
}

interface DemoCalendarProps {
  onBooked?: () => void;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatTime(isoString: string): string {
  try {
    const date = new Date(isoString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York",
    });
  } catch {
    return isoString;
  }
}

function formatDateDisplay(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

function toDateString(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function DemoCalendar({ onBooked }: DemoCalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [allSlots, setAllSlots] = useState<SlotsMap>({});
  const [loadingMonth, setLoadingMonth] = useState(true);
  const [monthError, setMonthError] = useState<string | null>(null);
  const [step, setStep] = useState<"calendar" | "form" | "confirmed">("calendar");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [booking, setBooking] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const todayStr = toDateString(today.getFullYear(), today.getMonth(), today.getDate());

  // Load full month availability
  const fetchMonthSlots = useCallback(async (year: number, month: number) => {
    setLoadingMonth(true);
    setMonthError(null);
    setAllSlots({});

    try {
      const startDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;
      const lastDay = new Date(year, month + 1, 0).getDate();
      const endDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;

      const res = await fetch(
        `/api/calendar/slots?startDate=${startDate}&endDate=${endDate}&timezone=America/New_York`
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("Month slots error:", data);
        setMonthError(data.ghlError || data.error || "Failed to load availability");
        setLoadingMonth(false);
        return;
      }

      // GHL actual response format:
      // { "2026-03-23": { "slots": ["2026-03-23T11:00:00-04:00"] }, ... }
      // Normalize to our internal format: { "2026-03-23": [{ slot: "..." }], ... }
      const rawData = data.slots || data || {};
      const normalized: SlotsMap = {};

      for (const [dateKey, value] of Object.entries(rawData)) {
        if (value && typeof value === "object") {
          // Handle { slots: ["..."] } format
          const dateValue = value as Record<string, unknown>;
          if (Array.isArray(dateValue.slots)) {
            normalized[dateKey] = (dateValue.slots as string[]).map((s) => ({ slot: s }));
          } else if (Array.isArray(value)) {
            // Handle [{ slot: "..." }] format
            normalized[dateKey] = value as Slot[];
          }
        }
      }

      setAllSlots(normalized);
    } catch (err) {
      console.error("Fetch month error:", err);
      setMonthError("Failed to connect to calendar");
    }

    setLoadingMonth(false);
  }, []);

  useEffect(() => {
    fetchMonthSlots(currentYear, currentMonth);
  }, [currentYear, currentMonth, fetchMonthSlots]);

  const goToPrevMonth = () => {
    const prevIsBeforeCurrent =
      currentYear === today.getFullYear() && currentMonth <= today.getMonth();
    if (prevIsBeforeCurrent) return;

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleDateClick = (day: number) => {
    const dateStr = toDateString(currentYear, currentMonth, day);
    if (dateStr < todayStr) return;

    const hasSlots = allSlots[dateStr] && allSlots[dateStr].length > 0;
    if (!hasSlots) return;

    setSelectedDate(dateStr);
    setSelectedSlot(null);
  };

  const handleBook = async () => {
    if (!selectedSlot || !name.trim() || !email.trim()) return;

    setBooking(true);
    setBookingError(null);

    try {
      const res = await fetch("/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          selectedSlot,
          timezone: "America/New_York",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Booking failed");
      }

      setStep("confirmed");
      onBooked?.();
    } catch (err) {
      setBookingError(
        err instanceof Error ? err.message : "Failed to book. Please try again."
      );
    }
    setBooking(false);
  };

  const days = getMonthDays(currentYear, currentMonth);
  const selectedDateSlots = selectedDate ? (allSlots[selectedDate] || []) : [];

  // ─── Confirmed state ───
  if (step === "confirmed") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full gradient-red flex items-center justify-center mx-auto mb-6 glow-red">
          <CheckCircle size={28} className="text-white" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2">
          You&apos;re In.
        </h3>
        <p className="text-cerberus-steel mb-2">
          Your demo is booked for{" "}
          <span className="text-white font-medium">
            {selectedDate && formatDateDisplay(selectedDate)}
          </span>{" "}
          at{" "}
          <span className="text-white font-medium">
            {selectedSlot && formatTime(selectedSlot)}
          </span>{" "}
          ET.
        </p>
        <p className="text-sm text-cerberus-steel-dark">
          Check your email for confirmation and calendar invite.
        </p>
      </div>
    );
  }

  // ─── Registration form ───
  if (step === "form") {
    return (
      <div>
        <button
          onClick={() => setStep("calendar")}
          className="flex items-center gap-2 text-sm text-cerberus-steel hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Back to calendar
        </button>

        <div className="px-4 py-3 rounded-lg bg-dark-800 border border-dark-400 mb-6">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-cerberus-red" />
            <div>
              <p className="text-sm font-medium text-white">
                {selectedDate && formatDateDisplay(selectedDate)}
              </p>
              <p className="text-xs text-cerberus-steel">
                {selectedSlot && formatTime(selectedSlot)} ET
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-display font-semibold text-lg text-white mb-1">
          Reserve Your Spot
        </h3>
        <p className="text-sm text-cerberus-steel mb-6">
          Enter your details to register for the demo.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-1.5">
              Full Name <span className="text-cerberus-red">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-1.5">
              Email <span className="text-cerberus-red">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-1.5">
              Company / Brokerage
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="ABC Mortgage"
              className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
            />
          </div>
        </div>

        {bookingError && (
          <div className="mt-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-400">{bookingError}</p>
          </div>
        )}

        <button
          onClick={handleBook}
          disabled={!name.trim() || !email.trim() || booking}
          className="w-full mt-6 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-red text-white font-display font-semibold text-sm hover:opacity-90 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {booking ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Booking...
            </>
          ) : (
            "Confirm Registration"
          )}
        </button>
      </div>
    );
  }

  // ─── Calendar view ───
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar grid */}
        <div className="flex-1 min-w-0">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={goToPrevMonth}
              className="w-9 h-9 rounded-lg bg-dark-600 border border-dark-400 flex items-center justify-center text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <h3 className="font-display font-semibold text-white text-lg">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={goToNextMonth}
              className="w-9 h-9 rounded-lg bg-dark-600 border border-dark-400 flex items-center justify-center text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1.5 mb-2">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-cerberus-steel py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Loading state */}
          {loadingMonth ? (
            <div className="flex items-center justify-center gap-3 py-20">
              <Loader2 size={20} className="text-cerberus-red animate-spin" />
              <span className="text-sm text-cerberus-steel">Loading availability...</span>
            </div>
          ) : monthError ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <AlertCircle size={24} className="text-cerberus-steel-dark mb-3" />
              <p className="text-sm text-cerberus-steel-dark mb-3">
                Couldn&apos;t load calendar availability.
              </p>
              <button
                onClick={() => fetchMonthSlots(currentYear, currentMonth)}
                className="text-sm text-cerberus-red-light hover:text-white transition-colors"
              >
                Try again
              </button>
            </div>
          ) : (
            /* Day cells */
            <div className="grid grid-cols-7 gap-1.5">
              {days.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="aspect-square" />;
                }

                const dateStr = toDateString(currentYear, currentMonth, day);
                const isPast = dateStr < todayStr;
                const isToday = dateStr === todayStr;
                const isSelected = dateStr === selectedDate;
                const hasSlots = allSlots[dateStr] && allSlots[dateStr].length > 0;
                const slotCount = allSlots[dateStr]?.length || 0;

                return (
                  <button
                    key={dateStr}
                    onClick={() => hasSlots && !isPast && handleDateClick(day)}
                    disabled={isPast || !hasSlots}
                    className={`aspect-square rounded-xl text-sm font-semibold flex flex-col items-center justify-center transition-all duration-150 relative ${
                      isSelected
                        ? "gradient-red text-white shadow-lg shadow-cerberus-red/25 scale-105"
                        : isPast
                        ? "text-dark-400 cursor-not-allowed"
                        : hasSlots
                        ? "text-white bg-dark-500 border border-cerberus-steel/25 hover:border-cerberus-red/60 hover:bg-dark-400 hover:scale-105 cursor-pointer"
                        : "text-dark-400 cursor-not-allowed"
                    } ${isToday && !isSelected ? "ring-2 ring-cerberus-red/40" : ""}`}
                    title={hasSlots ? `${slotCount} time${slotCount > 1 ? "s" : ""} available` : undefined}
                  >
                    {day}
                    {hasSlots && !isSelected && !isPast && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cerberus-red" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Time slots panel */}
        <div className="lg:w-52 lg:border-l lg:border-dark-400 lg:pl-6">
          {selectedDate ? (
            <>
              <p className="text-xs font-semibold text-cerberus-steel uppercase tracking-wider mb-1">
                Available Times
              </p>
              <p className="text-sm text-white font-medium mb-4">
                {formatDateDisplay(selectedDate)}
              </p>

              {selectedDateSlots.length === 0 ? (
                <p className="text-sm text-cerberus-steel-dark py-6 text-center">
                  No availability on this date.
                </p>
              ) : (
                <div className="space-y-2 max-h-72 overflow-y-auto custom-scrollbar pr-1">
                  {selectedDateSlots.map((s) => (
                    <button
                      key={s.slot}
                      onClick={() => setSelectedSlot(s.slot)}
                      className={`w-full px-3 py-3 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-all duration-150 ${
                        selectedSlot === s.slot
                          ? "gradient-red text-white shadow-lg shadow-cerberus-red/20"
                          : "bg-dark-600 border border-dark-400 text-cerberus-steel-light hover:text-white hover:border-cerberus-red/40"
                      }`}
                    >
                      <Clock size={14} />
                      {formatTime(s.slot)}
                    </button>
                  ))}
                </div>
              )}

              {selectedSlot && (
                <button
                  onClick={() => setStep("form")}
                  className="w-full mt-4 py-3 rounded-xl gradient-red text-white font-display font-semibold text-sm hover:opacity-90 transition-all duration-200"
                >
                  Continue
                </button>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
              <Calendar size={24} className="text-cerberus-steel-dark mb-3" />
              <p className="text-sm text-cerberus-steel">
                Select a highlighted date
                <br />
                to see available times
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
