"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { CreatorModal } from "@/components/ui/CreatorModal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="relative border-t border-white/10 bg-[#020408] py-12">
        <Container>
          <Divider size="full" className="mb-8 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between text-xs text-muted">
            {/* Left: Copyright & National Salutation */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                <p className="font-mono text-ivory/90">
                  © {year} Bhārat · 1947
                </p>
              </div>
              <p className="text-muted/70 text-[11px]">
                Built to honor the living history of Indian Independence.
              </p>
            </div>

            {/* Middle: The Maker & Interactive Easter Egg */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center gap-1.5">
              <p className="font-medium text-ivory/90">
                Designed & Developed by{" "}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-saffron hover:underline hover:text-ivory transition-colors font-semibold"
                  aria-label="View Creator Profile"
                >
                  Harsh
                </button>
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="font-mono text-[10px] text-muted/60 hover:text-saffron transition-colors cursor-pointer"
                aria-label="Open Easter Egg Modal"
              >
                Built with curiosity & code ✦
              </button>
            </div>

            {/* Right: Creator Socials & Patriotism */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-4 font-mono text-[11px]">
                <a
                  href="https://github.com/codexharsh28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-saffron transition-colors flex items-center gap-1"
                  aria-label="Harsh on GitHub"
                >
                  <span>GitHub</span>
                  <span className="text-muted/50">·</span>
                  <span className="text-ivory/80">codexharsh28</span>
                </a>

                <span className="text-white/20">|</span>

                <a
                  href="https://www.instagram.com/imharsh.28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-saffron transition-colors flex items-center gap-1"
                  aria-label="Harsh on Instagram"
                >
                  <span>Instagram</span>
                  <span className="text-muted/50">·</span>
                  <span className="text-ivory/80">@imharsh.28</span>
                </a>
              </div>

              <p className="font-mono text-xs tracking-widest text-saffron/90 font-semibold">
                जय हिन्द
              </p>
            </div>
          </div>
        </Container>
      </footer>

      {/* Creator Modal / Easter Egg */}
      <CreatorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
