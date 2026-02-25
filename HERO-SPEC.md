# Zoe 3D Parallax Hero Section - Build Spec

## Reference Image
See /tmp/zoe-hero-reference.png - a green landscape with rolling hills, white "Zoe" text, walking man silhouette, cross on distant hill, ethereal spiritual lighting.

## Repos
There are THREE Zoe/Numi landing pages that need this hero:
1. tony-freedomology/numi-landing (GitHub Pages) - the main one Tony likes best
2. tony-freedomology/numi-churches (in ~/clawd/numi-churches) - church version
3. tony-freedomology/numi-individual (in ~/clawd/numi-individual) - individual version

START with numi-landing first as the reference implementation.

## Task Overview
Build a 3D parallax hero section using React Three Fiber (R3F) and GSAP. Premium, atmospheric, depth-driven scene that reacts to mouse movement.

## Tech Stack
- React (Next.js)
- three + @react-three/fiber
- @react-three/drei (camera controls, environment, texture loading)
- gsap (initial load-in animation)
- @react-three/postprocessing (bloom on cross)

## Asset Generation Strategy
CRITICAL: Do NOT generate the "Zoe" text with AI. AI is bad at typography.
- Extract "Zoe" text from reference and create clean SVG vector
- Use Gemini API (nano-banana) to generate the wide landscape environment layers

### Assets Needed (all 21:9 ultrawide aspect ratio):
1. bg-gradient.jpg - deep green blurred atmospheric background
2. hill-back-cross.png - distant hill with small white cross (transparent PNG)
3. zoe-text.svg - clean vector of the Zoe typography (extracted, NOT AI-generated)
4. hill-front.png - foreground rolling green hills (transparent PNG)
5. walking-man.png - white silhouette of walking man (transparent PNG)

### Generation Prompts
Master scene: "A sweeping, ultra-wide landscape, aspect ratio 21:9. Layered rolling green hills bathed in soft, ethereal spiritual light. A small, simple white cross stands on a distant hill crest. A glowing white silhouette of a man is walking in the foreground. The style is minimalist, clean, and serene, using a monochromatic palette of various greens. No text, no logos. High resolution, highly detailed environment."

Background: "Ultra-wide aspect ratio 21:9. Distant, soft-focus rolling green hills against a deep green atmospheric sky. A small glowing white cross is positioned on the ridge of the main hill. Minimalist style, soft lighting."

Foreground: "Ultra-wide aspect ratio 21:9. A foreground layer of smooth, rolling light green hills. A crisp white silhouette of a man walking is positioned in the center-right. The background behind this layer is transparent."

## Scene Architecture (Z-axis depth)
- Background: z: -10 (parallaxFactor: 0.5)
- Back Hill & Cross: z: -5 (parallaxFactor: 1.5)
- Zoe Text: z: -2 (parallaxFactor: 2.5)
- Front Hill: z: 1 (parallaxFactor: 4.0)
- Walking Man: z: 3 (parallaxFactor: 6.0)

## R3F Code Structure
```jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ParallaxLayer = ({ textureUrl, position, scale, parallaxFactor }) => {
  const meshRef = useRef();
  const texture = useTexture(textureUrl);
  useFrame((state) => {
    const targetX = (state.pointer.x * parallaxFactor) / 2;
    const targetY = (state.pointer.y * parallaxFactor) / 2;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[16, 9]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
};

export default function ZoeHeroScene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#2B8B57' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ParallaxLayer textureUrl="/assets/bg-gradient.jpg" position={[0, 0, -10]} scale={[2, 2, 1]} parallaxFactor={0.5} />
        <ParallaxLayer textureUrl="/assets/hill-back-cross.png" position={[0, -1, -5]} scale={[1.5, 1.5, 1]} parallaxFactor={1.5} />
        <ParallaxLayer textureUrl="/assets/zoe-text.png" position={[0, 1, -2]} scale={[1.2, 1.2, 1]} parallaxFactor={2.5} />
        <ParallaxLayer textureUrl="/assets/hill-front.png" position={[0, -2, 1]} scale={[1.8, 1.8, 1]} parallaxFactor={4.0} />
        <ParallaxLayer textureUrl="/assets/walking-man.png" position={[0, -1.5, 3]} scale={[0.8, 0.8, 1]} parallaxFactor={6.0} />
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
}
```

## Polish Checklist
1. Texture Filtering: Set minFilter and magFilter to THREE.LinearFilter (no pixelation)
2. GSAP Entrance: Animate canvas opacity 0→1 + camera Z from 15→10 for cinematic zoom-in reveal
3. Bloom Post-processing: Add subtle Bloom pass via @react-three/postprocessing targeting the white cross for ethereal glow
4. Responsive: Must work on mobile (disable/reduce parallax on touch devices)
5. Performance: Lazy load the 3D scene, show a static fallback while loading

## Workflow
1. Clone numi-landing repo
2. Generate environment assets using Gemini/nano-banana API
3. Extract Zoe text as SVG (from reference image or recreate in code)
4. Build the R3F parallax hero component
5. Integrate into the existing landing page (replace current hero)
6. Test and push
