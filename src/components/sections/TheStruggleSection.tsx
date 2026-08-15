"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { theStruggleEvents, type StruggleEvent } from "@/lib/content/livingHistory";
import { cn } from "@/lib/utils";

function StruggleCard({ event, index }: { event: StruggleEvent; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: cinematicEase }}
      className="relative my-16 md:my-28 overflow-hidden rounded-3xl border border-white/10 bg-[#070B14]/85 shadow-[0_16px_48px_rgba(0,0,0,0.8)] backdrop-blur-md"
    >
      <div className={cn("grid grid-cols-1 lg:grid-cols-12 items-stretch", isEven ? "" : "lg:flex-row-reverse")}>
        {/* 1. Large Archival Photograph Display */}
        <div className={cn("relative min-h-[300px] lg:min-h-[440px] lg:col-span-7 overflow-hidden", isEven ? "order-1" : "order-1 lg:order-2")}>
          <Image
            src={event.image.src}
            alt={event.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 hover:scale-105 opacity-80 filter contrast-110"
            priority={false}
          />
          {/* Duotone Edge Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent lg:hidden" />
          <div className={cn("hidden lg:block absolute inset-0 bg-gradient-to-r", isEven ? "from-transparent via-transparent to-[#070B14]" : "from-[#070B14] via-transparent to-transparent")} />
        </div>

        {/* 2. Historical Narrative & Context */}
        <div className={cn("p-8 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-center", isEven ? "order-2" : "order-2 lg:order-1")}>
          {/* Year & Tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full border border-saffron/40 bg-saffron/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-[0.3em] text-saffron uppercase">
              {event.year}
            </span>
            <span className="font-mono text-xs text-muted/75 uppercase tracking-wider">Historical Turning Point</span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ivory">
            {event.title}
          </h3>
          <p className="mt-2 font-serif text-base md:text-lg italic text-saffron/90 font-light">
            {event.subtitle}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted/90 font-light">
            {event.description}
          </p>

          {/* Significance */}
          <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-muted/80">
            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-saffron shrink-0" />
            <span>
              <strong className="text-ivory/90 font-medium">Impact:</strong> {event.significance}
            </span>
          </div>

          {/* Archival Citation */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-muted/60">
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>Archive: {event.image.source}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TheStruggleSection() {
  return (
    <section
      id="the-struggle"
      aria-label="The Struggle — Archival Sequence of India's Freedom Movement"
      className="relative isolate min-h-screen py-28 md:py-36 overflow-hidden bg-[#030509]"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.06)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.05)_0%,transparent_70%)] blur-[100px]" />
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
              DOCUMENTARY CHRONICLES
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
          </motion.div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ivory drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
            <CinematicText text="THE STRUGGLE" as="span" delay={0.1} />
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
            &ldquo;From the salt shores of Gujarat to the ramparts of Delhi, the defiance that broke an empire.&rdquo;
          </motion.p>
        </div>

        {/* Sequential Struggle Panels */}
        <div className="space-y-12 md:space-y-20">
          {theStruggleEvents.map((event, index) => (
            <StruggleCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
