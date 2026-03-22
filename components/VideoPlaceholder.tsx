"use client";

import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  description?: string;
  aspect?: "video" | "square";
}

export default function VideoPlaceholder({
  title,
  description,
  aspect = "video",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative w-full ${
        aspect === "video" ? "aspect-video" : "aspect-square"
      } rounded-2xl overflow-hidden bg-dark-900 border border-dark-400 group`}
    >
      {/* ── Animated lava blobs ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 — large, slow drift */}
        <div
          className="absolute rounded-full blur-[80px] opacity-40"
          style={{
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle, rgba(189,30,0,0.7) 0%, rgba(212,42,10,0.3) 50%, transparent 70%)",
            animation: "lava1 12s ease-in-out infinite",
          }}
        />
        {/* Blob 2 — medium, opposite drift */}
        <div
          className="absolute rounded-full blur-[60px] opacity-35"
          style={{
            width: "45%",
            height: "50%",
            background:
              "radial-gradient(circle, rgba(212,42,10,0.6) 0%, rgba(154,24,0,0.3) 50%, transparent 70%)",
            animation: "lava2 10s ease-in-out infinite",
          }}
        />
        {/* Blob 3 — small accent, faster */}
        <div
          className="absolute rounded-full blur-[50px] opacity-30"
          style={{
            width: "35%",
            height: "35%",
            background:
              "radial-gradient(circle, rgba(255,80,40,0.5) 0%, rgba(189,30,0,0.2) 50%, transparent 70%)",
            animation: "lava3 8s ease-in-out infinite",
          }}
        />
        {/* Blob 4 — deep ember glow */}
        <div
          className="absolute rounded-full blur-[90px] opacity-25"
          style={{
            width: "50%",
            height: "40%",
            background:
              "radial-gradient(circle, rgba(180,60,20,0.5) 0%, rgba(120,20,0,0.2) 50%, transparent 70%)",
            animation: "lava4 14s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Dark overlay for contrast ── */}
      <div className="absolute inset-0 bg-dark-900/50" />

      {/* ── Noise texture ── */}
      <div className="absolute inset-0 noise pointer-events-none opacity-60" />

      {/* ── Content ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 z-10">
        {/* Play button with pulse ring */}
        <div className="relative">
          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-full bg-cerberus-red/20"
            style={{ animation: "playPulse 2s ease-in-out infinite" }}
          />
          {/* Button */}
          <div className="relative w-20 h-20 rounded-full bg-cerberus-red/30 border-2 border-cerberus-red/60 flex items-center justify-center backdrop-blur-sm">
            <Play size={32} className="text-white ml-1" fill="rgba(255,255,255,0.9)" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <p className="text-base font-display font-semibold text-white drop-shadow-lg">
            {title}
          </p>
          {description && (
            <p className="text-sm text-cerberus-steel mt-1 max-w-sm drop-shadow">
              {description}
            </p>
          )}
        </div>

        {/* Flashing "Video Coming Soon" badge */}
        <div
          className="px-4 py-1.5 rounded-full border border-cerberus-red/40 bg-dark-900/60 backdrop-blur-sm"
          style={{ animation: "comingSoon 2.5s ease-in-out infinite" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cerberus-red-light">
            Video Coming Soon
          </span>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style jsx>{`
        @keyframes lava1 {
          0%,
          100% {
            top: 10%;
            left: 5%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            top: 30%;
            left: 50%;
            transform: scale(1.2) rotate(45deg);
          }
          50% {
            top: 50%;
            left: 30%;
            transform: scale(0.9) rotate(90deg);
          }
          75% {
            top: 15%;
            left: 60%;
            transform: scale(1.1) rotate(135deg);
          }
        }
        @keyframes lava2 {
          0%,
          100% {
            top: 60%;
            left: 55%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            top: 20%;
            left: 10%;
            transform: scale(1.15) rotate(-30deg);
          }
          50% {
            top: 40%;
            left: 60%;
            transform: scale(0.85) rotate(-60deg);
          }
          75% {
            top: 55%;
            left: 25%;
            transform: scale(1.05) rotate(-90deg);
          }
        }
        @keyframes lava3 {
          0%,
          100% {
            top: 35%;
            left: 70%;
            transform: scale(1);
          }
          33% {
            top: 60%;
            left: 15%;
            transform: scale(1.3);
          }
          66% {
            top: 10%;
            left: 45%;
            transform: scale(0.8);
          }
        }
        @keyframes lava4 {
          0%,
          100% {
            top: 50%;
            left: 20%;
            transform: scale(1) rotate(0deg);
          }
          50% {
            top: 10%;
            left: 55%;
            transform: scale(1.2) rotate(60deg);
          }
        }
        @keyframes playPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes comingSoon {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
