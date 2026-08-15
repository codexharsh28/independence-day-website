"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { theRedFortContent } from "@/lib/content/livingHistory";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TheRedFortSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 1 : 1.12, 1]);
  const photoY = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 0 : -40, reducedMotion ? 0 : 40]);

  return (
    <section
      ref={sectionRef}
      id="red-fort-moment"
      aria-label="The Red Fort — Symbol of a Free India"
      className="relative isolate min-h-screen py-28 md:py-40 flex items-center justify-center overflow-hidden bg-[#04060C]"
    >
      {/* 1. Large Archival Red Fort Visual with Scroll Scaling */}
      <div className="absolute inset-0 -z-10 select-none overflow-hidden" aria-hidden="true">
        <motion.div style={{ scale: photoScale, y: photoY }} className="relative h-full w-full">
          <Image
            src={theRedFortContent.image.src}
            alt={theRedFortContent.image.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-30 filter contrast-125"
            priority={false}
          />
        </motion.div>

        {/* Cinematic Atmospheric Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060C] via-transparent to-[#04060C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_30%,rgba(4,6,12,0.92)_100%)]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Eyebrow Date Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: cinematicEase }}
          className="flex items-center gap-3 select-none mb-6"
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-saffron" />
          <span className="font-mono text-xs font-semibold tracking-[0.45em] text-saffron uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {theRedFortContent.date}
          </span>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
        </motion.div>

        {/* Section Headline */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-ivory drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
          <CinematicText text={theRedFortContent.heading} as="span" delay={0.1} />
        </h2>

        {/* Accent Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: 0.25 }}
          className="my-6"
        >
          <Divider size="md" className="h-[2px] w-24 opacity-80" />
        </motion.div>

        {/* Landmark Statement */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: 0.35 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic text-ivory/95 leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
        >
          &ldquo;{theRedFortContent.statement}&rdquo;
        </motion.h3>

        {/* Historical Context Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted/95 font-light text-balance"
        >
          {theRedFortContent.description}
        </motion.p>

        {/* Archival Metadata Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 rounded-full border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-md text-[11px] font-mono text-muted/80 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
          <span>{theRedFortContent.image.title}</span>
          <span>·</span>
          <span>{theRedFortContent.image.source}</span>
        </motion.div>
      </Container>
    </section>
  );
}
