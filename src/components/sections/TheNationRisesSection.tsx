"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CinematicText } from "@/components/ui/CinematicText";
import { cinematicEase } from "@/lib/animation/variants";
import { modernNationPillars, type ModernNationPillar } from "@/lib/content/livingHistory";
import { cn } from "@/lib/utils";

function ModernPillarCard({ pillar, index }: { pillar: ModernNationPillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: cinematicEase, delay: 0.08 * index }}
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#070B16]/85 p-8 md:p-10 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
    >
      {/* Visual Image Header */}
      <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#04060C]">
        <Image
          src={pillar.image.src}
          alt={pillar.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-transparent to-transparent opacity-70" />
      </div>

      {/* Category & Year */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={cn(
            "rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] uppercase",
            pillar.accent === "saffron"
              ? "text-saffron border-saffron/30 bg-saffron/10"
              : pillar.accent === "green"
              ? "text-flag-green border-flag-green/30 bg-flag-green/10"
              : "text-blue-400 border-blue-500/30 bg-blue-500/10"
          )}
        >
          {pillar.category}
        </span>
        <span className="font-mono text-xs text-muted/80">{pillar.image.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ivory">
        {pillar.title}
      </h3>

      {/* Highlight Subtitle */}
      <p className="mt-2 font-serif text-sm italic text-saffron/90 font-light">
        {pillar.highlight}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-muted/90 font-light flex-1">
        {pillar.description}
      </p>

      {/* Key Metric Stats Footer */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-xs text-ivory/90">
        <div className="h-1.5 w-1.5 rounded-full bg-flag-green" />
        <span>{pillar.stats}</span>
      </div>
    </motion.div>
  );
}

export function TheNationRisesSection() {
  return (
    <section
      id="the-nation-rises"
      aria-label="The Nation Rises — Past to Present"
      className="relative isolate min-h-screen py-28 md:py-36 overflow-hidden bg-[#03060E]"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[900px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.065)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[900px] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(19,136,8,0.06)_0%,transparent_70%)] blur-[100px]" />
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
              PAST TO PRESENT
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-flag-green" />
          </motion.div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ivory drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
            <CinematicText text="THE NATION RISES" as="span" delay={0.1} />
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
            &ldquo;From a sovereign beginning to a global powerhouse in space, technology, and sustainable growth.&rdquo;
          </motion.p>
        </div>

        {/* 3-Column Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modernNationPillars.map((pillar, index) => (
            <ModernPillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
