"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { CinematicBackgroundVideo } from "@/components/ui/CinematicBackgroundVideo";
import { cinematicEase } from "@/lib/animation/variants";
import { theMomentOfFreedomContent } from "@/lib/content/livingHistory";

export function TheMomentOfFreedom() {
  return (
    <section
      id="moment-of-freedom"
      aria-label="The Moment of Freedom — 15 August 1947"
      className="relative isolate min-h-[95vh] py-32 md:py-44 flex items-center justify-center overflow-hidden bg-[#020306]"
    >
      {/* 0. Full-Bleed Cinematic Background Video (Modern India & ISRO Journey) */}
      <CinematicBackgroundVideo
        src="/videos/isro-launch.webm"
        posterSrc="/images/modern/isro-space.jpg"
        posterAlt="ISRO space mission and rocket liftoff into the cosmos"
        overlayOpacity={0.70}
        accentGlow="tricolor"
      />

      {/* 1. Climax Radiant Tricolor Emergence from Deep Void */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        {/* Soft Saffron Light (Top) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: cinematicEase }}
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1000px] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.9)_0%,transparent_70%)] blur-[110px]"
        />

        {/* Central Luminous White Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: cinematicEase, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(96,165,250,0.4)_40%,transparent_75%)] blur-3xl"
        />

        {/* Soft India Green Light (Bottom) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: cinematicEase, delay: 0.4 }}
          className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1000px] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.9)_0%,transparent_70%)] blur-[110px]"
        />

        {/* Fine horizontal partition line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Date Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: cinematicEase }}
          className="flex items-center gap-3 select-none mb-6"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-saffron" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.45em] text-saffron uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {theMomentOfFreedomContent.date}
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-flag-green" />
        </motion.div>

        {/* Monumental Climax: FREEDOM */}
        <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-ivory drop-shadow-[0_4px_40px_rgba(0,0,0,0.95)]">
          <CinematicText text={theMomentOfFreedomContent.climax} as="span" delay={0.2} />
        </h2>

        {/* Accent Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: cinematicEase, delay: 0.45 }}
          className="my-8"
        >
          <Divider size="lg" className="h-[2px] w-32 opacity-90 shadow-md" />
        </motion.div>

        {/* Tryst With Destiny Speech */}
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: cinematicEase, delay: 0.6 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-ivory/95 max-w-3xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
        >
          &ldquo;{theMomentOfFreedomContent.quote}&rdquo;
        </motion.blockquote>

        {/* Speaker Citation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-6 font-mono text-xs tracking-widest text-muted/80 uppercase"
        >
          {theMomentOfFreedomContent.speaker}
        </motion.div>

        {/* Impact Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-sm sm:text-base text-muted/90 font-light max-w-xl"
        >
          {theMomentOfFreedomContent.significance}
        </motion.p>
      </Container>
    </section>
  );
}
