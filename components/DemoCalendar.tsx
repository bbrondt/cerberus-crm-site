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
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  });
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
  const [slots, setSlots] = useState<SlotsMap>({});
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [step, setStep] = useState<"calendar" | "form" | "confirmed">("calendar");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [booking, setBooking] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const fetchSlots = useCallback(async (year: number, month: number) => {
    setLoadingSlots(true);
    try {
      const startDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;
      const lastDay = new Date(year, month + 1, 0).getDate();
      const endDate = `${year}-${String(month + 1).padStart(2, "0")}-${lastDay}`;

      const res = await fetch(
        `/api/calendar/slots?startDate=${startDate}&endDate=${endDate}&timezone=America/New_York`
      );

      if (res.ok) {
        const data = await res.json();
        setSlots(data.slots || data || {});
      } else {
        console.error("Failed to fetch slots");
        setSlots({});
      }
    } catch {
      console.error("Error fetching slots");
      setSlots({});
    }
    setLoadingSlots(false);
  }, []);

  useEffect(() => {
    fetchSlots(currentYear, currentMonth);
  }, [currentYear, currentMonth, fetchSlots]);

  const goToPrevMonth = () => {
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
    const todayStr = toDateString(today.getFullYear(), today.getMonth(), today.getDate());
    if (dateStr < todayStr) return;

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
  const todayStr = toDateString(today.getFullYear(), today.getMonth(), today.getDate());
  const selectedDateSlots = selectedDate ? (slots[selectedDate] || []) : [];

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
        <div className="flex-1">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={goToPrevMonth}
              className="w-8 h-8 rounded-lg bg-dark-600 border border-dark-400 flex items-center justify-center text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <h3 className="font-display font-semibold text-white">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={goToNextMonth}
              className="w-8 h-8 rounded-lg bg-dark-600 border border-dark-400 flex items-center justify-center text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-cerberus-steel-dark py-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => {
              if (day === null) {
                return <div key={`empty-${i}`} className="aspect-square" />;
              }

              const dateStr = toDateString(currentYear, currentMonth, day);
              const isPast = dateStr < todayStr;
              const isToday = dateStr === todayStr;
              const isSelected = dateStr === selectedDate;
              const hasSlots =
                slots[dateStr] && slots[dateStr].length > 0;

              return (
                <button
                  key={dateStr}
                  onClick={() => !isPast && handleDateClick(day)}
                  disabled={isPast}
                  className={`aspect-square rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-150 relative ${
                    isSelected
                      ? "gradient-red text-white glow-red"
                      : isPast
                      ? "text-cerberus-steel-dark/40 cursor-not-allowed"
                      : hasSlots
                      ? "text-white bg-dark-600 border border-dark-400 hover:border-cerberus-red/40 hover:bg-dark-500 cursor-pointer"
                      : "text-cerberus-steel-dark bg-dark-800/50 cursor-not-allowed"
                  } ${isToday && !isSelected ? "ring-1 ring-cerberus-red/30" : ""}`}
                >
                  {day}
                  {hasSlots && !isSelected && !isPast && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cerberus-red" />
                  )}
                </button>
              );
            })}
          </div>

          {loadingSlots && (
            <div className="flex items-center justify-center gap-2 mt-4 py-3">
              <Loader2 size={14} className="text-cerberus-red animate-spin" />
              <span className="text-xs text-cerberus-steel">
                Loading availability...
              </span>
            </div>
          )}
        </div>

        {/* Time slots panel */}
        <div className="lg:w-48 lg:border-l lg:border-dark-400 lg:pl-6">
          {selectedDate ? (
            <>
              <p className="text-xs font-medium text-cerberus-steel-dark uppercase tracking-wider mb-3">
                {formatDateDisplay(selectedDate)}
              </p>

              {selectedDateSlots.length === 0 ? (
                <p className="text-sm text-cerberus-steel-dark">
                  No availability
                </p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                  {selectedDateSlots.map((s) => (
                    <button
                      key={s.slot}
                      onClick={() => setSelectedSlot(s.slot)}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-150 ${
                        selectedSlot === s.slot
                          ? "gradient-red text-white"
                          : "bg-dark-600 border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-red/30"
                      }`}
                    >
                      <Clock size={13} />
                      {formatTime(s.slot)}
                    </button>
                  ))}
                </div>
              )}

              {selectedSlot && (
                <button
                  onClick={() => setStep("form")}
                  className="w-full mt-4 py-2.5 rounded-lg gradient-red text-white font-display font-semibold text-sm hover:opacity-90 transition-all duration-200"
                >
                  Continue
                </button>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <Calendar
                size={20}
                className="text-cerberus-steel-dark mb-2"
              />
              <p className="text-sm text-cerberus-steel-dark">
                Select a date to see available times
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
