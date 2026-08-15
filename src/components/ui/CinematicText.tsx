"use client";

import { motion, type Variants } from "framer-motion";
import { cinematicEase } from "@/lib/animation/variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Explicit, typed map of supported wrapper tags. framer-motion's
 * `motion()` factory is meant for custom components, not raw tag
 * strings, so we resolve to a real `motion.span` / `motion.div` etc.
 * instead of casting a dynamic tag through `as never`.
 */
const tagMap = {
  span: motion.span,
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
} as const;

type CinematicTextTag = keyof typeof tagMap;

interface CinematicTextProps {
  /** Text is split on spaces; each word reveals with a masked upward slide. */
  text: string;
  as?: CinematicTextTag;
  className?: string;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: cinematicEase },
  },
};

/**
 * Word-by-word masked reveal. This is the single reusable primitive for
 * every animated headline on the site, so the reveal style stays
 * consistent instead of being reinvented per section.
 */
export function CinematicText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
}: CinematicTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = tagMap[Tag];

  if (reducedMotion) {
    return (
      <MotionTag
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay }}
      >
        {text}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
