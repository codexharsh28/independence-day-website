"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { cinematicEase } from "@/lib/animation/variants";
import { storyBeginsContent } from "@/lib/content/hero";

export function StoryBegins() {
  return (
    <section
      id="story-begins"
      aria-label="The Story Begins — 1947"
      className="relative isolate min-h-[90vh] py-28 md:py-36 overflow-hidden flex items-center justify-center bg-[#05070D]"
    >
      {/* Background ambient lighting connecting from Hero */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {/* Subtle saffron-to-blue atmospheric backlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,153,51,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(31,163,92,0.05),transparent_70%)] blur-3xl" />
        
        {/* Fine horizontal partition line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ivory/15 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: cinematicEase }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-5 bg-saffron/50" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-muted">
            {storyBeginsContent.eyebrow}
          </span>
          <span className="h-px w-5 bg-flag-green/50" />
        </motion.div>

        {/* Monumental Year Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: cinematicEase, delay: 0.1 }}
          className="mt-6"
        >
          <span className="font-display text-7xl font-semibold tracking-tight text-ivory sm:text-8xl md:text-9xl bg-gradient-to-b from-ivory via-ivory/90 to-ivory/40 bg-clip-text text-transparent select-none">
            {storyBeginsContent.year}
          </span>
        </motion.div>

        {/* Subtle tricolor divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: 0.25 }}
          className="mt-4"
        >
          <Divider size="md" className="opacity-60" />
        </motion.div>

        {/* Quote Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: cinematicEase, delay: 0.35 }}
          className="mt-8 font-display text-3xl font-light text-ivory sm:text-4xl md:text-5xl leading-tight text-balance"
        >
          &ldquo;{storyBeginsContent.quote}&rdquo;
        </motion.h2>

        {/* Prologue paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: cinematicEase, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted/90 text-balance"
        >
          {storyBeginsContent.prologue}
        </motion.p>
      </Container>
    </section>
  );
}
