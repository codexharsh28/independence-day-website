"use client";

export function SceneLighting() {
  return (
    <>
      {/* Soft Ambient Illumination */}
      <ambientLight color="#FFFFFF" intensity={1.5} />

      {/* Primary Key Sunlight (Upper-Left casting natural fabric fold shadows) */}
      <directionalLight
        position={[-8, 10, 9]}
        color="#FFF9F0"
        intensity={2.8}
        castShadow={false}
      />

      {/* Saffron Dawn Fill Light (Top) */}
      <directionalLight
        position={[0, 9, 6]}
        color="#FF9933"
        intensity={1.6}
        castShadow={false}
      />

      {/* Center Specular Highlight (Enhances White Stripe & Chakra details) */}
      <pointLight position={[0, 0, 8]} color="#FFFFFF" intensity={1.8} distance={25} />

      {/* India Green Ambient Fill Light (Bottom) */}
      <directionalLight
        position={[0, -9, 6]}
        color="#138808"
        intensity={1.4}
        castShadow={false}
      />
    </>
  );
}
