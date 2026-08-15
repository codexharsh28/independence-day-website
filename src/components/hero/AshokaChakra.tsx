"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

interface AshokaChakraProps {
  className?: string;
}

const SPOKE_COUNT = 24;
const CENTER = 200;
const HUB_OUTER = 44;
const HUB_MIDDLE = 26;
const HUB_INNER = 15;
const RIM_INNER = 160;
const RIM_MIDDLE = 172;
const RIM_OUTER = 184;

export function AshokaChakra({ className }: AshokaChakraProps) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // 3D Parallax with spring physics
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 100, mass: 0.6 };
  const smoothMouseX = useSpring(rawMouseX, springConfig);
  const smoothMouseY = useSpring(rawMouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [-1, 1], [-24, 24]);
  const parallaxY = useTransform(smoothMouseY, [-1, 1], [-24, 24]);
  const rotateX = useTransform(smoothMouseY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-8, 8]);

  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
      rawMouseX.set(x);
      rawMouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, isMobile, rawMouseX, rawMouseY]);

  // Geometric spoke polygons and rim ornaments
  const { spokes, spokeRidges, rimArches, hubPins } = useMemo(() => {
    const spokePolys = [];
    const ridges = [];
    const arches = [];
    const pins = [];

    const spokeAngleStep = (2 * Math.PI) / SPOKE_COUNT;

    for (let i = 0; i < SPOKE_COUNT; i++) {
      const angle = i * spokeAngleStep - Math.PI / 2;
      const halfWidthHub = 0.038; // Angular half-width at hub
      const halfWidthRim = 0.022; // Angular half-width at rim

      // 4-point tapered spoke polygon
      const p1x = CENTER + HUB_OUTER * Math.cos(angle - halfWidthHub);
      const p1y = CENTER + HUB_OUTER * Math.sin(angle - halfWidthHub);
      const p2x = CENTER + RIM_INNER * Math.cos(angle - halfWidthRim);
      const p2y = CENTER + RIM_INNER * Math.sin(angle - halfWidthRim);
      const p3x = CENTER + RIM_INNER * Math.cos(angle + halfWidthRim);
      const p3y = CENTER + RIM_INNER * Math.sin(angle + halfWidthRim);
      const p4x = CENTER + HUB_OUTER * Math.cos(angle + halfWidthHub);
      const p4y = CENTER + HUB_OUTER * Math.sin(angle + halfWidthHub);

      spokePolys.push({
        points: `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`,
        key: `spoke-body-${i}`,
      });

      // Central ridge line for 3D metallic feel
      const rx1 = CENTER + HUB_OUTER * Math.cos(angle);
      const ry1 = CENTER + HUB_OUTER * Math.sin(angle);
      const rx2 = CENTER + RIM_INNER * Math.cos(angle);
      const ry2 = CENTER + RIM_INNER * Math.sin(angle);
      ridges.push({ x1: rx1, y1: ry1, x2: rx2, y2: ry2, key: `spoke-ridge-${i}` });

      // Hub junction pin
      const hpx = CENTER + (HUB_OUTER - 2) * Math.cos(angle);
      const hpy = CENTER + (HUB_OUTER - 2) * Math.sin(angle);
      pins.push({ cx: hpx, cy: hpy, key: `hub-pin-${i}` });

      // 24 decorative rim arch beads/teeth between spokes
      const archAngle = angle + spokeAngleStep / 2;
      const ax = CENTER + ((RIM_INNER + RIM_MIDDLE) / 2) * Math.cos(archAngle);
      const ay = CENTER + ((RIM_INNER + RIM_MIDDLE) / 2) * Math.sin(archAngle);
      arches.push({ cx: ax, cy: ay, key: `rim-arch-${i}` });
    }

    return {
      spokes: spokePolys,
      spokeRidges: ridges,
      rimArches: arches,
      hubPins: pins,
    };
  }, []);

  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={
        reducedMotion || isMobile
          ? undefined
          : {
              x: parallaxX,
              y: parallaxY,
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
      }
      aria-hidden="true"
    >
      {/* Volumetric sapphire atmospheric back-glow */}
      <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.28)_0%,rgba(30,58,138,0.18)_40%,rgba(15,23,42,0)_72%)] blur-3xl pointer-events-none" />

      {/* Rotating Chakra body */}
      <motion.div
        className="h-full w-full"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 200, ease: "linear", repeat: Infinity }
        }
      >
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full filter drop-shadow-[0_0_32px_rgba(59,130,246,0.35)]"
          fill="none"
        >
          <defs>
            {/* Luminous sapphire rim gradient */}
            <linearGradient id="chakraRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#60A5FA" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#2563EB" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.85" />
            </linearGradient>

            {/* Spoke metallic fill gradient */}
            <linearGradient id="chakraSpokeFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>

            {/* Central hub radiant glow */}
            <radialGradient id="chakraHubRadial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#93C5FD" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.3" />
            </radialGradient>

            {/* Outer halo gradient */}
            <radialGradient id="chakraCoreAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#1E3A8A" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central diffuse aura */}
          <circle cx={CENTER} cy={CENTER} r={RIM_OUTER} fill="url(#chakraCoreAura)" />

          {/* Outermost Rim */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RIM_OUTER}
            stroke="url(#chakraRimGrad)"
            strokeWidth={2.4}
            opacity={0.85}
          />

          {/* Middle Rim Ring */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RIM_MIDDLE}
            stroke="url(#chakraRimGrad)"
            strokeWidth={1.4}
            opacity={0.65}
          />

          {/* 24 Decorative Rim Arches / Beads */}
          {rimArches.map(({ cx, cy, key }) => (
            <circle
              key={key}
              cx={cx}
              cy={cy}
              r={3.2}
              fill="url(#chakraRimGrad)"
              opacity={0.8}
            />
          ))}

          {/* Inner Rim Band */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RIM_INNER}
            stroke="url(#chakraRimGrad)"
            strokeWidth={2}
            opacity={0.9}
          />

          {/* 24 Precision Tapered Spokes */}
          {spokes.map(({ points, key }) => (
            <polygon
              key={key}
              points={points}
              fill="url(#chakraSpokeFill)"
              stroke="url(#chakraRimGrad)"
              strokeWidth={0.7}
              opacity={0.85}
            />
          ))}

          {/* 24 Spoke Highlight Ridges */}
          {spokeRidges.map(({ x1, y1, x2, y2, key }) => (
            <line
              key={key}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#BFDBFE"
              strokeWidth={0.8}
              strokeLinecap="round"
              opacity={0.6}
            />
          ))}

          {/* Outer Hub Ring */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={HUB_OUTER}
            stroke="url(#chakraRimGrad)"
            strokeWidth={2.2}
            opacity={0.9}
          />

          {/* 24 Hub Junction Pins */}
          {hubPins.map(({ cx, cy, key }) => (
            <circle
              key={key}
              cx={cx}
              cy={cy}
              r={1.8}
              fill="#BFDBFE"
              opacity={0.9}
            />
          ))}

          {/* Middle Hub Track */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={HUB_MIDDLE}
            stroke="url(#chakraRimGrad)"
            strokeWidth={1.5}
            opacity={0.85}
          />

          {/* Radiant Core Hub */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={HUB_INNER}
            fill="url(#chakraHubRadial)"
            stroke="url(#chakraRimGrad)"
            strokeWidth={1.2}
          />

          {/* Central Bright Axis Pin */}
          <circle cx={CENTER} cy={CENTER} r={3.5} fill="#FFFFFF" opacity={0.95} />
        </svg>
      </motion.div>
    </motion.div>
  );
}
