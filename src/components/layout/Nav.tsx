"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { fadeIn } from "@/lib/animation/variants";

export function Nav() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 inset-x-0 z-50 border-b border-ivory/10 bg-[#030508]/60 backdrop-blur-lg"
    >
      <Container className="flex h-16 items-center justify-between">
        <div>
          <span className="font-display text-lg tracking-wide text-ivory">
            Bhārat
          </span>
          <Divider size="sm" className="mt-1" />
        </div>

        <span className="font-mono text-xs tracking-[0.2em] text-muted">
          15 · 08
        </span>
      </Container>
    </motion.header>
  );
}
