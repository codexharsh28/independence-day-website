"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { CinematicBackgroundVideo } from "@/components/ui/CinematicBackgroundVideo";
import { cinematicEase } from "@/lib/animation/variants";
import {
  nationRemembersHeader,
  storyCardsData,
  type StoryCardItem,
} from "@/lib/content/nationRemembers";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

function getAccentDetails(accent: StoryCardItem["accent"]) {
  switch (accent) {
    case "saffron":
      return {
        badge: "text-saffron border-saffron/30 bg-saffron/10",
        glow: "from-saffron/15 via-saffron/5 to-transparent",
        borderHover: "group-hover:border-saffron/40",
        pill: "bg-saffron text-black font-semibold",
        bullet: "bg-saffron",
      };
    case "green":
      return {
        badge: "text-flag-green border-flag-green/30 bg-flag-green/10",
        glow: "from-flag-green/15 via-flag-green/5 to-transparent",
        borderHover: "group-hover:border-flag-green/40",
        pill: "bg-flag-green text-white font-semibold",
        bullet: "bg-flag-green",
      };
    case "sapphire":
      return {
        badge: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        glow: "from-blue-500/15 via-blue-500/5 to-transparent",
        borderHover: "group-hover:border-blue-500/40",
        pill: "bg-blue-400 text-black font-semibold",
        bullet: "bg-blue-400",
      };
    case "white":
    default:
      return {
        badge: "text-ivory border-white/30 bg-white/10",
        glow: "from-white/15 via-white/5 to-transparent",
        borderHover: "group-hover:border-white/40",
        pill: "bg-white text-black font-semibold",
        bullet: "bg-white",
      };
  }
}

export function NationRemembers() {
  const [activeCard, setActiveCard] = useState<StoryCardItem | null>(null);
  const reducedMotion = useReducedMotion();

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCard(null);
      }
    };

    if (activeCard) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

  return (
    <section
      id="nation-remembers"
      aria-label="A Nation Remembers — Stories That Shaped India"
      className="relative isolate min-h-screen py-28 md:py-36 overflow-hidden bg-[#04070D]"
    >
      {/* 0. Full-Bleed Cinematic Archival Background (Red Fort & Indian Tricolour Celebration) */}
      <CinematicBackgroundVideo
        posterSrc="/images/history/red-fort-1947.jpg"
        posterAlt="Authentic 4K archival photograph of the Red Fort in New Delhi during Indian Independence Day celebrations with the Indian Tricolour"
        overlayOpacity={0.72}
        accentGlow="tricolor"
        enableSlowZoom={true}
      />

      {/* 1. Warm Atmospheric Background Meshes */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        {/* Saffron Dawn Ambient Glow (Top Left) */}
        <div className="absolute top-[5%] -left-[10%] w-[75vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.07)_0%,transparent_70%)] blur-[100px]" />

        {/* Central Luminous Celestial Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,241,233,0.035)_0%,rgba(37,99,235,0.05)_45%,transparent_75%)] blur-[100px]" />

        {/* India Green Ambient Glow (Bottom Right) */}
        <div className="absolute bottom-[5%] -right-[10%] w-[75vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.06)_0%,transparent_70%)] blur-[100px]" />

        {/* Top Partition Rule */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* 2. Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: cinematicEase }}
            className="flex items-center gap-3 select-none"
          >
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-saffron" />
            <span className="font-mono text-xs font-semibold tracking-[0.4em] text-saffron uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {nationRemembersHeader.eyebrow}
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
          </motion.div>

          {/* Headline */}
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ivory drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <CinematicText
              text={nationRemembersHeader.heading}
              as="span"
              className="inline-block text-balance"
              delay={0.15}
            />
          </h2>

          {/* Accent Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: cinematicEase, delay: 0.3 }}
            className="mt-6"
          >
            <Divider size="md" className="h-[2px] w-24 opacity-80" />
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: cinematicEase, delay: 0.4 }}
            className="mt-5 font-serif text-lg md:text-xl font-light italic tracking-wide text-ivory/85 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            &ldquo;{nationRemembersHeader.supporting}&rdquo;
          </motion.p>
        </div>

        {/* 3. Asymmetric Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {storyCardsData.map((card, index) => {
            const accents = getAccentDetails(card.accent);

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  ease: cinematicEase,
                  delay: reducedMotion ? 0 : 0.08 * index,
                }}
                onClick={() => setActiveCard(card)}
                className={cn(
                  "group relative cursor-pointer rounded-2xl border border-white/10 bg-[#070B14]/80 p-7 md:p-9 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)]",
                  card.gridSpan,
                  accents.borderHover
                )}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCard(card);
                  }
                }}
                aria-label={`Open story details for ${card.title}`}
              >
                {/* Subtle Hover Atmospheric Glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    accents.glow
                  )}
                  aria-hidden="true"
                />

                {/* Card Top Metadata */}
                <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors",
                      accents.badge
                    )}
                  >
                    {card.tag}
                  </span>
                  <span className="font-mono text-xs text-muted/80">{card.yearBadge}</span>
                </div>

                {/* Title & Subtitle */}
                <div className="relative z-10">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-ivory transition-transform duration-300 group-hover:translate-x-1">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-serif text-sm md:text-base italic text-saffron/90 font-light">
                    {card.subtitle}
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-muted/90 font-light">
                    {card.excerpt}
                  </p>
                </div>

                {/* Card Bottom Action Cue */}
                <div className="relative z-10 mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-muted group-hover:text-ivory transition-colors">
                  <span className="font-mono uppercase tracking-[0.2em]">Explore Story</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white/40">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* 4. Cinematic Expanded Modal */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-lg overflow-y-auto"
            onClick={() => setActiveCard(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
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
                onClick={() => setActiveCard(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-muted hover:text-ivory hover:border-white/40 hover:bg-white/10 transition-all"
                aria-label="Close story panel"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] uppercase",
                    getAccentDetails(activeCard.accent).badge
                  )}
                >
                  {activeCard.tag}
                </span>
                <span className="font-mono text-xs text-muted/80">{activeCard.yearBadge}</span>
              </div>

              <h2
                id="modal-title"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ivory"
              >
                {activeCard.title}
              </h2>
              <p className="mt-2 font-serif text-lg md:text-xl italic text-saffron/90 font-light">
                {activeCard.subtitle}
              </p>

              <Divider size="md" className="my-6" />

              {/* Narrative Story */}
              <p className="text-base sm:text-lg leading-relaxed text-muted/95 font-light">
                {activeCard.fullStory}
              </p>

              {/* Specific Content: Freedom Fighters Profiles */}
              {activeCard.profiles && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-saffron mb-6">
                    Featured Freedom Fighters & Revolutionaries
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {activeCard.profiles.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-display text-base font-semibold text-ivory">{p.name}</h4>
                        </div>
                        <span className="font-mono text-[10px] text-saffron/90 block mt-0.5">
                          {p.role} · {p.years}
                        </span>
                        <p className="mt-2 text-xs leading-relaxed text-muted font-light">
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specific Content: Proud Moments Timeline */}
              {activeCard.achievements && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-flag-green mb-6">
                    National Triumphs & Milestones
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCard.achievements.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-flag-green">
                            {item.category}
                          </span>
                          <span className="font-mono text-xs text-muted/70">{item.year}</span>
                        </div>
                        <h4 className="font-display text-base font-semibold text-ivory">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted font-light">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights Bullet List */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
                  Key Historical Highlights
                </h3>
                <ul className="space-y-3">
                  {activeCard.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted/90 font-light">
                      <div
                        className={cn(
                          "mt-1.5 h-1.5 w-1.5 rounded-full shrink-0",
                          getAccentDetails(activeCard.accent).bullet
                        )}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Button Footer */}
              <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveCard(null)}
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ivory hover:bg-white/20 transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
