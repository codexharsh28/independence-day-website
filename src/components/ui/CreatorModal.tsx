"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Divider } from "@/components/ui/Divider";
import { cinematicEase } from "@/lib/animation/variants";

interface CreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatorModal({ isOpen, onClose }: CreatorModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="creator-modal-title"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: cinematicEase }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#080C16] p-8 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-muted hover:text-ivory hover:border-white/40 transition-all"
              aria-label="Close creator panel"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-saffron">
                THE MAKER
              </span>
            </div>

            <h2 id="creator-modal-title" className="font-display text-4xl font-semibold tracking-tight text-ivory">
              Harsh
            </h2>

            <p className="mt-1 font-mono text-xs text-muted tracking-wider">
              AI/ML • Creative Technology • Web Development
            </p>

            <Divider size="sm" className="my-6" />

            {/* Quote / Vision */}
            <blockquote className="font-serif text-lg italic font-light text-ivory/90 leading-relaxed">
              &ldquo;Built to remember where we came from.&rdquo;
            </blockquote>

            {/* Connect Links */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70 block">
                Connect with the Creator
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/codexharsh28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-saffron/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 text-muted group-hover:text-ivory transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span className="font-mono text-xs text-ivory">codexharsh28</span>
                  </div>
                  <span className="text-muted group-hover:text-saffron transition-colors text-xs">↗</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/imharsh.28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-saffron/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 text-muted group-hover:text-ivory transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="font-mono text-xs text-ivory">@imharsh.28</span>
                  </div>
                  <span className="text-muted group-hover:text-saffron transition-colors text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Footer Close */}
            <div className="mt-8 pt-4 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-widest text-ivory hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
