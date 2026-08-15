"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { thePeopleContent } from "@/lib/content/livingHistory";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ThePeopleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 1 : 1.08, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 0 : -30, reducedMotion ? 0 : 30]);

  return (
    <section
      ref={sectionRef}
      id="the-people"
      aria-label="The People — This freedom belonged to millions"
      className="relative isolate min-h-screen py-28 md:py-36 flex items-center justify-center overflow-hidden bg-[#030509]"
    >
      {/* 1. Full-Width Archival Background with Ambient Duotone Mask */}
      <div className="absolute inset-0 -z-10 select-none overflow-hidden" aria-hidden="true">
        <motion.div style={{ scale: imgScale, y: imgY }} className="relative h-full w-full">
          <Image
            src={thePeopleContent.image.src}
            alt={thePeopleContent.image.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-25 filter contrast-125 grayscale"
            priority={false}
          />
        </motion.div>

        {/* Film Vignette & Saffron/Green Atmospheric Bleed */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030509] via-transparent to-[#030509]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,transparent_35%,rgba(3,5,9,0.92)_100%)]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: cinematicEase }}
          className="flex items-center gap-3 select-none mb-6"
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-saffron" />
          <span className="font-mono text-xs font-semibold tracking-[0.4em] text-saffron uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {thePeopleContent.eyebrow}
          </span>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
        </motion.div>

        {/* Monumental Headline */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-ivory drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
          <CinematicText text={thePeopleContent.heading} as="span" delay={0.1} />
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

        {/* Poetic 3-Line Copy */}
        <div className="flex flex-col items-center gap-1.5 my-4">
          {thePeopleContent.copyLines.map((line, idx) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                ease: cinematicEase,
                delay: 0.35 + idx * 0.15,
              }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-ivory/95 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            >
              {line}
            </motion.span>
          ))}
        </div>

        {/* Narrative Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted/95 font-light text-balance"
        >
          {thePeopleContent.narrative}
        </motion.p>

        {/* Archival Photo Metadata Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 rounded-full border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-md text-[11px] font-mono text-muted/80 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
          <span>{thePeopleContent.image.title}</span>
          <span>·</span>
          <span>{thePeopleContent.image.source}</span>
        </motion.div>
      </Container>
    </section>
  );
}
