"use client";

import { useMemo, type CSSProperties } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  blur: number;
  color: string;
}

const DESKTOP_COUNT = 45;
const MOBILE_COUNT = 16;

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    // 70% cosmic ivory dust, 20% warm golden embers, 10% sapphire glints
    const rand = Math.random();
    let color = "rgba(244, 241, 233, 0.7)";
    let blur = 0;

    if (rand > 0.8) {
      color = "rgba(255, 179, 71, 0.75)";
      blur = 0.5;
    } else if (rand > 0.7) {
      color = "rgba(147, 197, 253, 0.65)";
    }

    return {
      id,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: Math.random() * 14 + 10,
      delay: Math.random() * -22,
      opacity: Math.random() * 0.4 + 0.15,
      blur,
      color,
    };
  });
}

export function HeroParticles() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  const particles = useMemo(
    () => createParticles(isMobile ? MOBILE_COUNT : DESKTOP_COUNT),
    [isMobile]
  );

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-particle-drift rounded-full"
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--particle-opacity": p.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
