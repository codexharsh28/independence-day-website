"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AshokaChakra3DProps {
  mouse: { x: number; y: number };
  scrollY: number;
}

const SPOKE_COUNT = 24;
const HUB_RADIUS = 0.48;
const RIM_RADIUS = 2.05;
const OUTER_RIM_RADIUS = 2.22;

export function AshokaChakra3D({ mouse, scrollY }: AshokaChakra3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  // Rich navy & sapphire metallic PBR materials
  const { primaryMaterial, rimMaterial, hubCoreMaterial, beadMaterial } = useMemo(() => {
    const primary = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#162D68"),
      metalness: 0.82,
      roughness: 0.24,
      emissive: new THREE.Color("#1E3A8A"),
      emissiveIntensity: 0.35,
    });

    const rim = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1E3A8A"),
      metalness: 0.88,
      roughness: 0.2,
      emissive: new THREE.Color("#2563EB"),
      emissiveIntensity: 0.45,
    });

    const hubCore = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#BFDBFE"),
      metalness: 0.9,
      roughness: 0.15,
      emissive: new THREE.Color("#60A5FA"),
      emissiveIntensity: 0.75,
    });

    const bead = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#93C5FD"),
      metalness: 0.85,
      roughness: 0.2,
      emissive: new THREE.Color("#3B82F6"),
      emissiveIntensity: 0.5,
    });

    return {
      primaryMaterial: primary,
      rimMaterial: rim,
      hubCoreMaterial: hubCore,
      beadMaterial: bead,
    };
  }, []);

  // Compute 24 extruded spoke meshes and 24 perimeter beads
  const { spokeGeometry, spokeMeshes, beadPositions, pinPositions } = useMemo(() => {
    const spokeList = [];
    const beads = [];
    const pins = [];

    const spokeLength = RIM_RADIUS - HUB_RADIUS;
    const spokeShape = new THREE.Shape();
    // Tapered spoke cross-section
    spokeShape.moveTo(-0.038, 0);
    spokeShape.lineTo(0.038, 0);
    spokeShape.lineTo(0.02, spokeLength);
    spokeShape.lineTo(-0.02, spokeLength);
    spokeShape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.045,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.01,
      bevelThickness: 0.01,
    };

    const spokeGeo = new THREE.ExtrudeGeometry(spokeShape, extrudeSettings);
    spokeGeo.center();

    for (let i = 0; i < SPOKE_COUNT; i++) {
      const angle = (i * 2 * Math.PI) / SPOKE_COUNT;
      const rotationZ = angle - Math.PI / 2;

      const midR = (HUB_RADIUS + RIM_RADIUS) / 2;
      const posX = midR * Math.cos(angle);
      const posY = midR * Math.sin(angle);

      spokeList.push({
        position: [posX, posY, 0] as [number, number, number],
        rotation: [0, 0, rotationZ + Math.PI / 2] as [number, number, number],
        key: `spoke-3d-${i}`,
      });

      // 24 Outer rim beads halfway between spokes
      const beadAngle = angle + Math.PI / SPOKE_COUNT;
      const bx = ((RIM_RADIUS + OUTER_RIM_RADIUS) / 2) * Math.cos(beadAngle);
      const by = ((RIM_RADIUS + OUTER_RIM_RADIUS) / 2) * Math.sin(beadAngle);
      beads.push({ position: [bx, by, 0] as [number, number, number], key: `bead-3d-${i}` });

      // 24 Hub junction pins
      const px = (HUB_RADIUS - 0.035) * Math.cos(angle);
      const py = (HUB_RADIUS - 0.035) * Math.sin(angle);
      pins.push({ position: [px, py, 0.025] as [number, number, number], key: `pin-3d-${i}` });
    }

    return { spokeGeometry: spokeGeo, spokeMeshes: spokeList, beadPositions: beads, pinPositions: pins };
  }, []);

  // Procedural geometries for rings & hub
  const outerRimGeo = useMemo(() => new THREE.TorusGeometry(OUTER_RIM_RADIUS, 0.038, 16, 80), []);
  const middleRimGeo = useMemo(() => new THREE.TorusGeometry(RIM_RADIUS, 0.032, 16, 80), []);
  const hubOuterGeo = useMemo(() => new THREE.TorusGeometry(HUB_RADIUS, 0.035, 16, 60), []);
  const hubCenterGeo = useMemo(() => new THREE.CylinderGeometry(0.2, 0.2, 0.07, 32), []);
  const hubCoreGeo = useMemo(() => new THREE.CylinderGeometry(0.1, 0.1, 0.09, 32), []);
  const beadGeo = useMemo(() => new THREE.SphereGeometry(0.035, 12, 12), []);
  const pinGeo = useMemo(() => new THREE.CylinderGeometry(0.016, 0.016, 0.025, 8), []);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;

    const time = clock.getElapsedTime();

    if (!reducedMotion) {
      // Continuous slow rotation around Z
      const scrollSpeedBoost = 1 + scrollY * 2.2;
      groupRef.current.rotation.z -= delta * 0.04 * scrollSpeedBoost;

      // Subtle vertical floating levitation
      const floatOffset = Math.sin(time * 0.9) * 0.05;

      // Mouse Parallax (smooth slerp)
      const targetRotX = mouse.y * 0.12;
      const targetRotY = mouse.x * 0.12;
      const targetPosX = mouse.x * 0.3;
      const targetPosY = mouse.y * 0.2 + floatOffset;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.06
      );

      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetPosX,
        0.06
      );

      // Scroll Dynamics: smoothly drifts backward, lifts slightly, scales naturally
      const targetPosZ = -scrollY * 2.5;
      const targetScale = 1 + scrollY * 0.2;
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetPosZ,
        0.08
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetPosY + scrollY * 0.35,
        0.08
      );
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08)
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer Rim Ring */}
      <mesh geometry={outerRimGeo} material={rimMaterial} />

      {/* Inner Rim Ring */}
      <mesh geometry={middleRimGeo} material={primaryMaterial} />

      {/* 24 Outer Beads */}
      {beadPositions.map(({ position, key }) => (
        <mesh key={key} position={position} geometry={beadGeo} material={beadMaterial} />
      ))}

      {/* 24 Tapered 3D Spokes */}
      {spokeMeshes.map(({ position, rotation, key }) => (
        <mesh
          key={key}
          position={position}
          rotation={rotation}
          geometry={spokeGeometry}
          material={primaryMaterial}
        />
      ))}

      {/* Outer Hub Ring */}
      <mesh geometry={hubOuterGeo} material={primaryMaterial} />

      {/* 24 Hub Junction Pins */}
      {pinPositions.map(({ position, key }) => (
        <mesh key={key} position={position} geometry={pinGeo} material={beadMaterial} rotation={[Math.PI / 2, 0, 0]} />
      ))}

      {/* Central Tiered Hub Cylinder */}
      <mesh geometry={hubCenterGeo} material={primaryMaterial} rotation={[Math.PI / 2, 0, 0]} />

      {/* Glowing Luminous Hub Nave */}
      <mesh geometry={hubCoreGeo} material={hubCoreMaterial} rotation={[Math.PI / 2, 0, 0]} />

      {/* Center Axis Highlight Sphere */}
      <mesh position={[0, 0, 0.05]} material={hubCoreMaterial}>
        <sphereGeometry args={[0.04, 16, 16]} />
      </mesh>
    </group>
  );
}
