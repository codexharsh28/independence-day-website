"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface IndianFlag3DProps {
  mouse: { x: number; y: number };
  scrollY: number;
}

/**
 * Procedurally generates a mathematically exact 2048x1365 (3:2) Indian National Flag texture.
 * - Top: India Saffron (Kesari #FF9933)
 * - Middle: Pure White (#FFFFFF)
 * - Bottom: India Green (#138808)
 * - Center: Navy Blue (#000080) Ashoka Chakra with EXACTLY 24 spokes & 24 rim beads.
 */
function createFullIndianFlagTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1365; // 3:2 ratio
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const bandHeight = height / 3;

  // 1. Top Band: India Saffron (Kesari)
  ctx.fillStyle = "#FF9933";
  ctx.fillRect(0, 0, width, bandHeight);

  // 2. Middle Band: Pure White
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, bandHeight, width, bandHeight);

  // 3. Bottom Band: India Green
  ctx.fillStyle = "#138808";
  ctx.fillRect(0, bandHeight * 2, width, bandHeight);

  // 4. Center Ashoka Chakra printed on White Band
  const centerX = width / 2;
  const centerY = height / 2;
  // Chakra diameter is ~78% of the white band height
  const outerRadius = (bandHeight * 0.78) / 2;
  const innerRadius = outerRadius * 0.91;
  const hubOuterRadius = outerRadius * 0.22;
  const hubCoreRadius = outerRadius * 0.1;

  ctx.strokeStyle = "#000080"; // Navy Blue
  ctx.fillStyle = "#000080";

  // Outermost rim ring
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
  ctx.lineWidth = 6;
  ctx.stroke();

  // Intermediate inner rim line
  ctx.beginPath();
  ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
  ctx.lineWidth = 3.5;
  ctx.stroke();

  // Central hub outer ring
  ctx.beginPath();
  ctx.arc(centerX, centerY, hubOuterRadius, 0, Math.PI * 2);
  ctx.lineWidth = 4.5;
  ctx.stroke();

  // Central hub solid center pin
  ctx.beginPath();
  ctx.arc(centerX, centerY, hubCoreRadius, 0, Math.PI * 2);
  ctx.fill();

  // Exactly 24 Spokes & 24 Outer Rim Beads
  const SPOKE_COUNT = 24;
  for (let i = 0; i < SPOKE_COUNT; i++) {
    const angle = (i * 2 * Math.PI) / SPOKE_COUNT;

    // Tapered spoke line
    const x1 = centerX + hubOuterRadius * Math.cos(angle);
    const y1 = centerY + hubOuterRadius * Math.sin(angle);
    const x2 = centerX + innerRadius * Math.cos(angle);
    const y2 = centerY + innerRadius * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.stroke();

    // 24 Decorative beads on the rim halfway between spokes
    const beadAngle = angle + Math.PI / SPOKE_COUNT;
    const bx = centerX + ((innerRadius + outerRadius) / 2) * Math.cos(beadAngle);
    const by = centerY + ((innerRadius + outerRadius) / 2) * Math.sin(beadAngle);

    ctx.beginPath();
    ctx.arc(bx, by, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Micro-texture fabric grain
  ctx.fillStyle = "rgba(0, 0, 0, 0.015)";
  for (let y = 0; y < height; y += 4) {
    ctx.fillRect(0, y, width, 1.5);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  return texture;
}

export function IndianFlag3D({ mouse, scrollY }: IndianFlag3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  // Procedural 3:2 Indian national flag texture with embedded 24-spoke Chakra
  const flagTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return createFullIndianFlagTexture();
  }, []);

  // Large plane geometry that overshoots camera frustum to cover 100vw × 100vh edge-to-edge
  const width = isMobile ? 18 : 25;
  const height = isMobile ? 12 : 16.5;
  const segmentsX = isMobile ? 44 : 76;
  const segmentsY = isMobile ? 30 : 50;

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);
  }, [width, height, segmentsX, segmentsY]);

  // Cache base rest positions for zero-garbage performance
  const basePositions = useMemo(() => {
    const pos = geometry.getAttribute("position");
    return pos ? (pos.array.slice() as Float32Array) : new Float32Array();
  }, [geometry]);

  useEffect(() => {
    return () => {
      flagTexture?.dispose();
      geometry.dispose();
    };
  }, [flagTexture, geometry]);

  // Real-time 3D cloth wave animation (deforms flag fabric and printed Chakra together)
  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const posAttr = geometry.getAttribute("position");
    if (!posAttr || basePositions.length === 0) return;

    const array = posAttr.array as Float32Array;
    const count = posAttr.count;

    if (!reducedMotion) {
      // Natural slow-motion ceremonial cloth waves
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = basePositions[i3] ?? 0;
        const y = basePositions[i3 + 1] ?? 0;

        // Wave 1: Sweeping horizontal wave traveling left-to-right
        const w1 = Math.sin(x * 0.38 - time * 1.15 + y * 0.12) * 0.65;
        // Wave 2: Harmonic diagonal ripple creating realistic cloth fold curvature
        const w2 = Math.cos(x * 0.72 + y * 0.45 - time * 1.4) * 0.32;
        // Wave 3: Subtle vertical billow
        const w3 = Math.sin(y * 0.55 - time * 0.85) * 0.18;

        // Combined Z-displacement: curves the entire cloth and the printed Chakra with it
        array[i3 + 2] = w1 + w2 + w3;
      }

      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Mouse Parallax (smoothly tilts and pans the fabric with cursor)
      const targetRotX = mouse.y * 0.08;
      const targetRotY = mouse.x * 0.08;
      const targetPosX = mouse.x * 0.35;
      const targetPosY = mouse.y * 0.25;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotX,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotY,
        0.05
      );
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetPosX,
        0.05
      );

      // Scroll Dynamics: smooth backward drift and zoom transition down into 1947 Story
      const targetPosZ = -scrollY * 4.5;
      const targetScale = 1 + scrollY * 0.15;
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z,
        targetPosZ,
        0.08
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetPosY + scrollY * 0.8,
        0.08
      );
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.08)
      );
    } else {
      // Static gentle ceremonial drape for reduced motion
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = basePositions[i3] ?? 0;
        const y = basePositions[i3 + 1] ?? 0;
        array[i3 + 2] = Math.sin(x * 0.35 + y * 0.2) * 0.35;
      }
      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0, 0, 0]}
      castShadow={false}
      receiveShadow={true}
    >
      <meshStandardMaterial
        map={flagTexture || undefined}
        roughness={0.82}
        metalness={0.04}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
