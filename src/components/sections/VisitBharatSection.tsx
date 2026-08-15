"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { visitBharatDestinations, type HeritageDestination } from "@/lib/content/livingHistory";

function HeritageCard({
  destination,
  index,
  onSelect,
}: {
  destination: HeritageDestination;
  index: number;
  onSelect: (dest: HeritageDestination) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: cinematicEase, delay: 0.06 * index }}
      onClick={() => onSelect(destination)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#060912]/90 shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(destination);
        }
      }}
      aria-label={`Explore heritage details for ${destination.name}`}
    >
      {/* Visual Image Banner with Smooth Hover Zoom */}
      <div className="relative h-60 w-full overflow-hidden bg-[#03050A]">
        <Image
          src={destination.image.src}
          alt={destination.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-115"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060912] via-transparent to-transparent opacity-85" />
        
        {/* Floating Tag */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[9px] font-semibold tracking-widest text-saffron uppercase backdrop-blur-md">
            {destination.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 font-mono text-xs text-muted/80 mb-2">
          <span>{destination.city}, {destination.state}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold tracking-tight text-ivory group-hover:text-saffron transition-colors">
          {destination.name}
        </h3>

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted/90 font-light line-clamp-3">
          {destination.whyItMatters}
        </p>

        {/* CTA Link */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-saffron group-hover:text-ivory transition-colors">
          <span>Explore Bharat →</span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-saffron/30 bg-saffron/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-saffron group-hover:text-black">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function VisitBharatSection() {
  const [activeDestination, setActiveDestination] = useState<HeritageDestination | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDestination(null);
      }
    };

    if (activeDestination) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDestination]);

  return (
    <section
      id="visit-bharat"
      aria-label="Visit Bharat — Sacred Heritage Destinations of India"
      className="relative isolate min-h-screen py-28 md:py-36 overflow-hidden bg-[#04060C]"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[8%] right-1/4 w-[80vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.065)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[8%] left-1/4 w-[80vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.055)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: cinematicEase }}
            className="flex items-center gap-3 select-none mb-6"
          >
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-saffron" />
            <span className="font-mono text-xs font-semibold tracking-[0.4em] text-saffron uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              HERITAGE & PILGRIMAGE
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
          </motion.div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ivory drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
            <CinematicText text="VISIT BHARAT" as="span" delay={0.1} />
          </h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: cinematicEase, delay: 0.25 }}
            className="my-6"
          >
            <Divider size="md" className="h-[2px] w-24 opacity-80" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: cinematicEase, delay: 0.35 }}
            className="font-serif text-lg md:text-xl font-light italic tracking-wide text-ivory/85 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            &ldquo;Explore the sacred grounds, ramparts, and memorials where freedom was written in blood and courage.&rdquo;
          </motion.p>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visitBharatDestinations.map((destination, index) => (
            <HeritageCard
              key={destination.id}
              destination={destination}
              index={index}
              onSelect={setActiveDestination}
            />
          ))}
        </div>
      </Container>

      {/* Cinematic Destination Modal */}
      <AnimatePresence>
        {activeDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-lg overflow-y-auto"
            onClick={() => setActiveDestination(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="heritage-modal-title"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: cinematicEase }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#070B14] p-6 sm:p-10 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveDestination(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-muted hover:text-ivory hover:border-white/40 hover:bg-white/10 transition-all"
                aria-label="Close destination details"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Banner Image */}
              <div className="relative mb-6 h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#03050A]">
                <Image
                  src={activeDestination.image.src}
                  alt={activeDestination.image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-mono text-xs text-saffron uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                    {activeDestination.city}, {activeDestination.state}
                  </span>
                </div>
              </div>

              {/* Title & Tag */}
              <span className="rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] text-saffron uppercase">
                {activeDestination.tag}
              </span>

              <h2
                id="heritage-modal-title"
                className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ivory"
              >
                {activeDestination.name}
              </h2>

              <Divider size="md" className="my-5" />

              {/* Why It Matters */}
              <p className="font-serif text-lg md:text-xl italic text-saffron/90 font-light">
                &ldquo;{activeDestination.whyItMatters}&rdquo;
              </p>

              {/* Narrative Description */}
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted/95 font-light">
                {activeDestination.description}
              </p>

              {/* Historical Context */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-2">
                  Historical Significance
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-ivory/85 font-light">
                  {activeDestination.historicalContext}
                </p>
              </div>

              {/* Visitor Information */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 font-mono text-xs text-flag-green">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{activeDestination.visitingInfo}</span>
              </div>

              {/* Footer Close */}
              <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveDestination(null)}
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ivory hover:bg-white/20 transition-colors"
                >
                  Close Destination
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
