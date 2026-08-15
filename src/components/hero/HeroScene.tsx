"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { IndianFlag3D } from "@/components/hero/IndianFlag3D";
import { ParticleField } from "@/components/hero/ParticleField";
import { SceneLighting } from "@/components/hero/SceneLighting";
import { HeroCanvasLoader } from "@/components/hero/HeroCanvasLoader";

interface HeroSceneProps {
  scrollProgress?: number;
}

export function HeroScene({ scrollProgress = 0 }: HeroSceneProps) {
  const isMobile = useIsMobile();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full select-none overflow-hidden" aria-hidden="true">
      <Suspense fallback={<HeroCanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, isMobile ? 8.2 : 7.0], fov: 45, near: 0.1, far: 50 }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="h-full w-full"
        >
          <SceneLighting />
          {/* Full-Screen Flowing 3D Indian National Flag with Embedded 24-Spoke Chakra */}
          <IndianFlag3D mouse={mouse} scrollY={scrollProgress} />
          {/* Subtle Floating Ambient Particles */}
          <ParticleField mouse={mouse} />
        </Canvas>
      </Suspense>
    </div>
  );
}
