"use client";

import { motion, type MotionValue } from "framer-motion";

interface HeroBackgroundProps {
  overlayOpacity: MotionValue<number>;
}

export function HeroBackground({ overlayOpacity }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Midnight Base */}
      <div className="absolute inset-0 bg-[#030508]" />

      {/* 2. Top-Left Saffron Dawn Atmosphere (Volumetric warm glow) */}
      <div className="absolute -top-[15%] -left-[10%] w-[80vw] max-w-[900px] h-[65vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.11)_0%,rgba(245,158,11,0.05)_45%,transparent_75%)] blur-[100px] pointer-events-none" />

      {/* 3. Central Celestial White/Ivory Luminous Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[70vw] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,241,233,0.045)_0%,rgba(96,165,250,0.06)_40%,transparent_72%)] blur-[90px] pointer-events-none" />

      {/* 4. Bottom-Right India Green Ambient Mist */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[85vw] max-w-[950px] h-[65vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,rgba(5,150,105,0.035)_45%,transparent_75%)] blur-[110px] pointer-events-none" />

      {/* 5. Deep Sapphire Cosmic Depth behind Chakra */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18)_0%,rgba(30,58,138,0.08)_50%,transparent_80%)] blur-2xl pointer-events-none" />

      {/* 6. Scroll-Driven Deepening Vignette & Dimming */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#030508]/10 via-[#030508]/50 to-[#030508]"
        style={{ opacity: overlayOpacity }}
      />

      {/* 7. Film Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_50%,transparent_45%,rgba(2,4,7,0.85)_100%)] pointer-events-none" />
    </div>
  );
}
