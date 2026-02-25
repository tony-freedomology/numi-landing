'use client';

import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

/* ── Parallax Layer ── */
interface LayerProps {
  textureUrl: string;
  position: [number, number, number];
  scale: [number, number, number];
  parallaxFactor: number;
  isMobile: boolean;
}

function ParallaxLayer({ textureUrl, position, scale, parallaxFactor, isMobile }: LayerProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(textureUrl);

  // Better texture filtering
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const factor = isMobile ? parallaxFactor * 0.15 : parallaxFactor;

  useFrame((state) => {
    if (!meshRef.current) return;
    const targetX = (state.pointer.x * factor) / 2;
    const targetY = (state.pointer.y * factor) / 4;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      position[0] + targetX,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      position[1] + targetY,
      0.05
    );
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[21, 9]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  );
}

/* ── Zoe SVG Text (not AI-generated) ── */
function ZoeText({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const factor = isMobile ? 0.4 : 2.5;

  useFrame((state) => {
    if (!meshRef.current) return;
    const targetX = (state.pointer.x * factor) / 2;
    const targetY = (state.pointer.y * factor) / 4;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, 1.5 + targetY, 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 1.5, -2]}>
      <planeGeometry args={[6, 3]} />
      <meshBasicMaterial transparent toneMapped={false}>
        <canvasTexture
          attach="map"
          image={(() => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 512;
            const ctx = canvas.getContext('2d')!;
            ctx.clearRect(0, 0, 1024, 512);

            // Drop shadow
            ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
            ctx.shadowBlur = 20;
            ctx.shadowOffsetY = 8;

            // Main text
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'italic 280px "Georgia", "Times New Roman", serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Zoe', 512, 240);

            return canvas;
          })()}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

/* ── Camera Animator (GSAP zoom-in) ── */
function CameraAnimation() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 15;
    gsap.to(camera.position, {
      z: 10,
      duration: 2.5,
      ease: 'power3.out',
    });
  }, [camera]);

  return null;
}

/* ── Main Scene ── */
function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <CameraAnimation />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />

      {/* Layer 1: Background (moves very little) */}
      <ParallaxLayer
        textureUrl="/assets/bg-gradient.png"
        position={[0, 0, -10]}
        scale={[2.2, 2.2, 1]}
        parallaxFactor={0.5}
        isMobile={isMobile}
      />

      {/* Layer 2: Back Hill & Cross */}
      <ParallaxLayer
        textureUrl="/assets/hill-back-cross.png"
        position={[0, -1.2, -5]}
        scale={[1.6, 1.6, 1]}
        parallaxFactor={1.5}
        isMobile={isMobile}
      />

      {/* Layer 3: Zoe Text */}
      <ZoeText isMobile={isMobile} />

      {/* Layer 4: Front Hill */}
      <ParallaxLayer
        textureUrl="/assets/hill-front.png"
        position={[0, -2.5, 1]}
        scale={[2, 2, 1]}
        parallaxFactor={4.0}
        isMobile={isMobile}
      />

      {/* Layer 5: Walking Man */}
      <ParallaxLayer
        textureUrl="/assets/walking-man.png"
        position={[0.5, -1.8, 3]}
        scale={[0.7, 0.7, 1]}
        parallaxFactor={6.0}
        isMobile={isMobile}
      />

      {/* Bloom for ethereal glow on cross */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.8}
          luminanceSmoothing={0.9}
          intensity={0.6}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

/* ── Fallback while loading ── */
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1a5c35] to-[#2B8B57]">
      <div className="text-white/60 text-lg font-light tracking-widest animate-pulse">
        Loading...
      </div>
    </div>
  );
}

/* ── Exported Component ── */
export default function ZoeHeroScene() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);

    // GSAP fade-in on the canvas container
    if (canvasRef.current) {
      gsap.fromTo(
        canvasRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={canvasRef} className="absolute inset-0" style={{ opacity: 0 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 15], fov: 50 }}
            gl={{ antialias: true, alpha: false }}
            dpr={[1, 2]}
          >
            <color attach="background" args={['#1a5c35']} />
            <Scene isMobile={isMobile} />
          </Canvas>
        </Suspense>
      </div>

      {/* Overlay: tagline + CTA */}
      <div className="absolute bottom-16 left-0 right-0 text-center z-10 pointer-events-none">
        <h2 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-6"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
          Walking Towards Purpose
        </h2>
        <a
          href="#get-started"
          className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
        >
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
