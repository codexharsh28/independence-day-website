"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { timelineIntroContent, timelineMilestones, type TimelineMilestone } from "@/lib/content/timeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

function getAccentClasses(accent: TimelineMilestone["accent"]) {
  switch (accent) {
    case "saffron":
      return {
        badge: "text-saffron border-saffron/30 bg-saffron/10",
        node: "border-saffron bg-saffron/20 shadow-[0_0_20px_rgba(255,153,51,0.5)]",
        nodeCore: "bg-saffron",
        year: "from-saffron via-ivory to-saffron/70",
        glow: "from-saffron/15 to-transparent",
      };
    case "green":
      return {
        badge: "text-flag-green border-flag-green/30 bg-flag-green/10",
        node: "border-flag-green bg-flag-green/20 shadow-[0_0_20px_rgba(19,136,8,0.5)]",
        nodeCore: "bg-flag-green",
        year: "from-flag-green via-ivory to-flag-green/70",
        glow: "from-flag-green/15 to-transparent",
      };
    case "sapphire":
      return {
        badge: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        node: "border-blue-400 bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
        nodeCore: "bg-blue-400",
        year: "from-blue-300 via-ivory to-blue-500/70",
        glow: "from-blue-500/15 to-transparent",
      };
    case "white":
    default:
      return {
        badge: "text-ivory border-white/30 bg-white/10",
        node: "border-white bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.5)]",
        nodeCore: "bg-white",
        year: "from-white via-ivory to-white/70",
        glow: "from-white/15 to-transparent",
      };
  }
}

function MilestoneCard({ milestone, index }: { milestone: TimelineMilestone; index: number }) {
  const isEven = index % 2 === 0;
  const accents = getAccentClasses(milestone.accent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: cinematicEase, delay: 0.05 }}
      className={cn(
        "relative flex flex-col md:flex-row items-center w-full my-12 md:my-20",
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* 1. Milestone Content Card */}
      <div className={cn("w-full md:w-[45%] pl-12 md:pl-0", isEven ? "md:text-left" : "md:text-right")}>
        <div className="group relative rounded-2xl border border-white/10 bg-[#080C14]/85 p-6 md:p-8 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          {/* Subtle Accent Glow on Hover */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              accents.glow
            )}
            aria-hidden="true"
          />

          {/* Top Tag & Year on Mobile */}
          <div
            className={cn(
              "flex items-center gap-3 mb-4",
              isEven ? "justify-start" : "md:justify-end justify-start"
            )}
          >
            <span
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] uppercase",
                accents.badge
              )}
            >
              {milestone.tag}
            </span>
            <span className="font-mono text-xs text-muted/80">{milestone.year}</span>
          </div>

          {/* Milestone Title */}
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ivory">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm md:text-base leading-relaxed text-muted/90 font-light">
            {milestone.description}
          </p>

          {/* Historical Quote (if present) */}
          {milestone.quote && (
            <div className="mt-4 border-l-2 border-saffron/60 pl-3.5 py-1 text-xs md:text-sm font-serif italic text-ivory/85">
              &ldquo;{milestone.quote}&rdquo;
            </div>
          )}

          {/* Significance Footer */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-start gap-2.5">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron shrink-0" />
            <span className="text-xs text-muted/80 leading-normal">
              <strong className="text-ivory/90 font-medium">Impact:</strong> {milestone.significance}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Central Timeline Track Node */}
      <div className="absolute left-3 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: cinematicEase }}
          className={cn(
            "relative flex h-8 w-8 items-center justify-center rounded-full border-2 bg-[#04070E] transition-transform duration-300 group-hover:scale-110",
            accents.node
          )}
        >
          {/* Central Pulsing Core */}
          <div className={cn("h-2.5 w-2.5 rounded-full animate-pulse", accents.nodeCore)} />
          {/* Subtle Outer Ring Bead */}
          <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30 pointer-events-none" />
        </motion.div>
      </div>

      {/* 3. Monumental Year Display on Desktop Opposite Side */}
      <div
        className={cn(
          "hidden md:flex md:w-[45%] items-center select-none",
          isEven ? "justify-end pr-8" : "justify-start pl-8"
        )}
      >
        <span
          className={cn(
            "font-display text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter bg-gradient-to-b bg-clip-text text-transparent opacity-40 transition-opacity duration-500 hover:opacity-85",
            accents.year
          )}
        >
          {milestone.year}
        </span>
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  // Scroll Progress tracking for the illuminated vertical timeline spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  const beamTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="journey-of-freedom"
      aria-label="The Journey of Freedom — Historical Timeline"
      className="relative isolate min-h-screen py-28 md:py-40 overflow-hidden bg-[#03060B]"
    >
      {/* 1. Background Cinematic Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        {/* Saffron Ambient Light (Top Spine) */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[900px] h-[45vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.06)_0%,transparent_70%)] blur-[100px]" />

        {/* Sapphire Central Depth */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_75%)] blur-[95px]" />

        {/* India Green Ambient Light (Bottom Spine) */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[900px] h-[45vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.055)_0%,transparent_70%)] blur-[100px]" />

        {/* Fine horizontal partition line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* 2. Story Intro Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28">
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
              {timelineIntroContent.eyebrow}
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
          </motion.div>

          {/* Monumental Headline: THE JOURNEY OF FREEDOM */}
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-tight tracking-tight text-ivory drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <CinematicText
              text={timelineIntroContent.title}
              as="span"
              className="inline-block text-balance"
              delay={0.15}
            />
          </h2>

          {/* Signature Accent Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: cinematicEase, delay: 0.3 }}
            className="mt-6"
          >
            <Divider size="md" className="h-[2px] w-24 opacity-80" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: cinematicEase, delay: 0.4 }}
            className="mt-5 font-serif text-lg md:text-xl font-light italic tracking-wide text-ivory/85 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {timelineIntroContent.subtitle}
          </motion.p>
        </div>

        {/* 3. Vertical Timeline Track Container */}
        <div className="relative mt-8">
          {/* Base Unlit Track Line */}
          <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-white/10" />

          {/* Scroll-Illuminated Tricolor Progress Track */}
          {!reducedMotion && (
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-3 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-saffron via-ivory to-flag-green shadow-[0_0_12px_rgba(255,153,51,0.6)]"
            />
          )}

          {/* Traveling Light Beam */}
          {!reducedMotion && (
            <motion.div
              style={{ top: beamTop }}
              className="absolute left-3 md:left-1/2 -translate-x-1/2 h-8 w-8 -mt-4 rounded-full bg-gradient-to-r from-saffron to-flag-green blur-md opacity-75 pointer-events-none"
            />
          )}

          {/* 4. Sequential Milestone Cards */}
          <div className="relative z-10 flex flex-col items-center">
            {timelineMilestones.map((milestone, index) => (
              <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
