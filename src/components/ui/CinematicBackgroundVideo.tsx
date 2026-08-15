"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface CinematicBackgroundVideoProps {
  src?: string;
  posterSrc: string;
  posterAlt: string;
  overlayOpacity?: number; // e.g. 0.72 for 72% dark overlay
  accentGlow?: "saffron" | "green" | "sapphire" | "tricolor";
  enableSlowZoom?: boolean;
  className?: string;
}

export function CinematicBackgroundVideo({
  src,
  posterSrc,
  posterAlt,
  overlayOpacity = 0.72,
  accentGlow = "tricolor",
  enableSlowZoom = true,
  className,
}: CinematicBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    // Attempt autoplay with muted promise handling
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
        })
        .catch(() => {
          // Autoplay policy prevented playback, fall back to poster image
          setIsVideoLoaded(false);
        });
    }
  }, [reducedMotion]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-30 overflow-hidden select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Container with optional slow cinematic breathing zoom / parallax feel */}
      <motion.div
        animate={
          enableSlowZoom && !reducedMotion
            ? { scale: [1, 1.05, 1], y: [0, -8, 0] }
            : { scale: 1, y: 0 }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-full w-full"
      >
        {/* 1. High-Resolution Poster Image Fallback (Always rendered as solid base) */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={posterSrc}
            alt={posterAlt}
            fill
            sizes="100vw"
            className="object-cover filter contrast-115 brightness-95"
            priority={false}
          />
        </div>

        {/* 2. Full-Bleed HTML5 Video Element (Active when src provided, not reduced-motion and no error) */}
        {!reducedMotion && !hasError && src && (
          <video
            key={src}
            ref={videoRef}
            src={src}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              "absolute inset-0 h-full w-full object-cover filter contrast-115 brightness-95 transition-opacity duration-1000",
              isVideoLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        )}
      </motion.div>

      {/* 3. Dark Cinematic Readability Overlay (68-74% darkness for ultra-crisp typography) */}
      <div
        className="absolute inset-0 bg-[#030508]"
        style={{ opacity: overlayOpacity }}
      />

      {/* 4. Film Vignette & Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_50%,transparent_30%,rgba(3,5,8,0.95)_100%)]" />

      {/* 5. Subtle Saffron & Green Cinematic Ambient Glows */}
      {accentGlow === "tricolor" && (
        <>
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-saffron/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-flag-green/10 via-transparent to-transparent" />
        </>
      )}
    </div>
  );
}
