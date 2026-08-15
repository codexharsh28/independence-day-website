"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { HeroCanvasLoader } from "@/components/hero/HeroCanvasLoader";
import { Container } from "@/components/ui/Container";
import { CinematicText } from "@/components/ui/CinematicText";
import { Divider } from "@/components/ui/Divider";
import { cinematicEase } from "@/lib/animation/variants";
import { heroContent } from "@/lib/content/hero";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Dynamically import full-screen 3D Canvas with SSR disabled
const HeroScene = dynamic(
  () => import("@/components/hero/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <HeroCanvasLoader />,
  }
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  // Scroll dynamics: typography floats upward and dissolves cleanly into 1947 Story
  const contentY = useTransform(scrollYProgress, [0, 0.8], [0, reducedMotion ? 0 : -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      aria-label="India Independence Day — Full-Screen 3D Flag Hero"
      className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* 1. Full-Screen 3D Indian Flag Canvas Environment */}
      <HeroScene scrollProgress={scrollProgress} />

      {/* 2. Soft Edge Vignette (Extremely subtle, preserving full-screen flag vibrancy) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_60%,rgba(3,5,8,0.45)_100%)]"
        aria-hidden="true"
      />

      {/* 3. Foreground Content & Dominant Typography */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full py-16"
      >
        <Container className="flex flex-col items-center text-center">
          {/* Subtle soft backdrop pill for ultra-crisp typography contrast */}
          <div className="flex flex-col items-center p-6 md:p-10 rounded-3xl bg-black/25 backdrop-blur-[2px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] max-w-5xl">
            {/* 15 AUGUST 1947 Date Stamp */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: cinematicEase, delay: 0.8 }}
              className="flex flex-col items-center gap-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-saffron" />
                <span className="font-mono text-xs font-bold tracking-[0.45em] text-saffron uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {heroContent.eyebrow}
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-flag-green" />
              </div>
            </motion.div>

            {/* Primary Dominant Headline: A JOURNEY OF FREEDOM */}
            <h1 className="mt-7 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-ivory sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
              <CinematicText
                text={heroContent.heading}
                as="span"
                className="inline-block text-balance"
                delay={1.1}
              />
            </h1>

            {/* Signature Accent Rule */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, ease: cinematicEase, delay: 1.55 }}
              className="mt-6"
            >
              <Divider size="md" className="h-[2px] w-24 opacity-90 shadow-sm" />
            </motion.div>

            {/* Subtitle: From freedom to the future. */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: cinematicEase, delay: 1.75 }}
              className="mt-5 max-w-xl font-serif text-lg font-light italic tracking-wide text-ivory sm:text-xl md:text-2xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
            >
              {heroContent.supporting}
            </motion.p>
          </div>
        </Container>
      </motion.div>

      {/* 4. Scroll Prompt Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 1, ease: cinematicEase }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-20"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-lg">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/90 font-medium">
            Scroll
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-saffron animate-ping" />
        </div>
        <div className="animate-scroll-cue flex h-6 w-4 items-start justify-center rounded-full border border-white/30 p-1">
          <div className="h-1 w-0.5 rounded-full bg-saffron" />
        </div>
      </motion.div>

      {/* 5. Subtle Creator Attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-6 hidden md:flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted/60 z-20 select-none"
      >
        <span>Crafted by</span>
        <a
          href="https://github.com/codexharsh28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-saffron hover:text-ivory transition-colors pointer-events-auto font-medium"
        >
          Harsh
        </a>
      </motion.div>
    </section>
  );
}
