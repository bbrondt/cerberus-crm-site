"use client";

import { useState } from "react";
import { Play, Quote, ExternalLink } from "lucide-react";

/**
 * TESTIMONIALS CONFIG
 * ───────────────────
 * Add new testimonials here. Drop <Testimonials /> on any page.
 * Supports video (YouTube) and text-only testimonials.
 *
 * To add a new testimonial:
 *   1. Add an entry to the array below
 *   2. That's it — every page using <Testimonials /> updates automatically
 */

interface Testimonial {
  id: string;
  type: "video" | "text";
  /** YouTube video ID (for type: "video") */
  youtubeId?: string;
  /** Person's name */
  name: string;
  /** Their title / role */
  title: string;
  /** Company name */
  company: string;
  /** Location */
  location?: string;
  /** Short pull quote */
  quote: string;
  /** Optional longer description */
  bio?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "paul-dolan",
    type: "video",
    youtubeId: "qC98iU0-2zM",
    name: "Paul Dolan",
    title: "Founder & Mortgage Loan Officer",
    company: "Dolan Mortgage Team",
    location: "Round Rock, TX",
    quote:
      "Cerberus completely changed how we approach marketing. The automation alone saved us hours every single week.",
    bio: "Paul has been in the mortgage industry for nearly two decades, building one of the most recognized lending teams in Central Texas. Known as ThatMortgageGuy, he runs Dolan Mortgage Team through Primis Bank — serving thousands of families across the state.",
  },

  // ─── ADD MORE TESTIMONIALS BELOW ─────────────────────────
  // Example text-only testimonial:
  // {
  //   id: "jane-smith",
  //   type: "text",
  //   name: "Jane Smith",
  //   title: "Senior Loan Officer",
  //   company: "ABC Mortgage",
  //   location: "Phoenix, AZ",
  //   quote: "The Vortex content engine is insane. I went from posting once a week to having a month of content ready in 30 minutes.",
  // },
  //
  // Example video testimonial:
  // {
  //   id: "someone-else",
  //   type: "video",
  //   youtubeId: "YOUTUBE_VIDEO_ID_HERE",
  //   name: "Someone Else",
  //   title: "Branch Manager",
  //   company: "XYZ Lending",
  //   location: "Dallas, TX",
  //   quote: "Best investment I've made in my business this year.",
  // },
];

function VideoEmbed({ youtubeId, name }: { youtubeId: string; name: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={`${name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer"
    >
      {/* YouTube thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt={`${name} testimonial`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-cerberus-red/90 flex items-center justify-center group-hover:bg-cerberus-red group-hover:scale-110 transition-all duration-300 shadow-xl shadow-cerberus-red/30">
          <Play size={24} className="text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
}

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-32 relative border-t border-white/5">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
            Don&apos;t Take Our Word For It.
            <br />
            <span className="text-cerberus-steel">Hear It From Them.</span>
          </h2>
          <p className="text-cerberus-steel max-w-xl mx-auto">
            Real mortgage professionals using Cerberus to build real marketing
            systems.
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((t, index) => {
            const isEven = index % 2 === 0;

            if (t.type === "video") {
              return (
                <div
                  key={t.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12 items-center`}
                >
                  {/* Video */}
                  <div className="w-full lg:w-3/5">
                    <VideoEmbed youtubeId={t.youtubeId!} name={t.name} />
                  </div>

                  {/* Info */}
                  <div className="w-full lg:w-2/5">
                    <Quote
                      size={32}
                      className="text-cerberus-red/30 mb-4"
                    />
                    <p className="text-lg text-white font-medium leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mb-4">
                      <p className="font-display font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-sm text-cerberus-steel">
                        {t.title}
                      </p>
                      <p className="text-sm text-cerberus-steel-dark">
                        {t.company}
                        {t.location && ` · ${t.location}`}
                      </p>
                    </div>
                    {t.bio && (
                      <p className="text-sm text-cerberus-steel-dark leading-relaxed">
                        {t.bio}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            // Text-only testimonial
            return (
              <div
                key={t.id}
                className="max-w-3xl mx-auto card-hover p-8 md:p-10"
              >
                <Quote size={28} className="text-cerberus-red/30 mb-4" />
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-red flex items-center justify-center text-white font-display font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-cerberus-steel">
                      {t.title} · {t.company}
                      {t.location && ` · ${t.location}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
