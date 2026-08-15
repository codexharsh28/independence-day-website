"use client";

export function HeroCanvasLoader() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none bg-[#030508]"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-saffron/20" />
          <div className="h-4 w-4 rounded-full border border-saffron/80 bg-saffron/30" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted/80">
          INITIALIZING EXPERIENCE
        </span>
      </div>
    </div>
  );
}
