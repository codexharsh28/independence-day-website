"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { theSacrificeFigures, type SacrificeFigure } from "@/lib/content/livingHistory";

function SacrificeFigureCard({ figure, index }: { figure: SacrificeFigure; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: cinematicEase, delay: 0.05 * index }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#080C16]/85 p-6 md:p-8 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.9)]"
    >
      {/* Portrait Graphic Header */}
      <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl bg-[#04060B] border border-white/10">
        <Image
          src={figure.image.src}
          alt={figure.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-115"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-transparent to-transparent opacity-80" />
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-semibold tracking-wider text-saffron uppercase">
          {figure.title}
        </span>
        <span className="font-mono text-[11px] text-muted/75">{figure.era}</span>
      </div>

      {/* Name */}
      <h3 className="font-display text-2xl font-semibold tracking-tight text-ivory">
        {figure.name}
      </h3>

      {/* Role / Contribution */}
      <p className="mt-2 font-serif text-sm italic text-ivory/85 font-light">
        {figure.contribution}
      </p>

      {/* Description */}
      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted/90 font-light flex-1">
        {figure.description}
      </p>

      {/* Source Footer */}
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-muted/60">
        <span>{figure.image.source}</span>
        <span className="text-saffron">Honor</span>
      </div>
    </motion.div>
  );
}

export function TheSacrificeSection() {
  return (
    <section
      id="the-sacrifice"
      aria-label="The Sacrifice — The Martyrs and Visionaries of Freedom"
      className="relative isolate min-h-screen py-28 md:py-36 overflow-hidden bg-[#04060C]"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[5%] -left-[10%] w-[80vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.065)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[5%] -right-[10%] w-[80vw] max-w-[850px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.055)_0%,transparent_70%)] blur-[100px]" />
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
              IMMORTAL SOULS
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
          </motion.div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ivory drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
            <CinematicText text="THE SACRIFICE" as="span" delay={0.1} />
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
            &ldquo;They chose the gallows, solitary confinement, and the battlefield so that India might breathe free.&rdquo;
          </motion.p>
        </div>

        {/* 4-Column Grid of 8 Freedom Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {theSacrificeFigures.map((figure, index) => (
            <SacrificeFigureCard key={figure.id} figure={figure} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
