
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { gsap } from 'gsap';
import ZoeText from './ZoeText';

interface ParallaxLayerProps {
  textureUrl: string;
  position: [number, number, number];
  scale: [number, number, number];
  parallaxFactor: number;
}

const ParallaxLayer = ({ textureUrl, position, scale, parallaxFactor }: ParallaxLayerProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(textureUrl);

  // Ensure texture filtering is set for a crisp look
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame((state) => {
    // Check for touch devices and reduce motion
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const parallaxMultiplier = isTouchDevice ? 0.2 : 1;

    const targetX = (state.pointer.x * parallaxFactor * parallaxMultiplier) / 2;
    const targetY = (state.pointer.y * parallaxFactor * parallaxMultiplier) / 2;

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
    const canvasRef = useRef<HTMLDivElement>(null!);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

    React.useEffect(() => {
        if (canvasRef.current) {
            gsap.fromTo(canvasRef.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.5 });
        }
        if (cameraRef.current) {
            gsap.fromTo(cameraRef.current.position, { z: 15 }, { z: 10, duration: 2.5, ease: 'power2.out' });
        }
    }, []);

  return (
    <div ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0a1d0a', zIndex: -1 }}>
        <Suspense fallback={<div>Loading...</div>}>
            <Canvas camera={{ ref: cameraRef, position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <ParallaxLayer textureUrl="/assets/bg-gradient.jpg" position={[0, 0, -10]} scale={[2, 2, 1]} parallaxFactor={0.5} />
                <ParallaxLayer textureUrl="/assets/hill-back-cross.png" position={[0, -1, -5]} scale={[1.5, 1.5, 1]} parallaxFactor={1.5} />
                <ZoeText parallaxFactor={2.5} />
                <ParallaxLayer textureUrl="/assets/hill-front.png" position={[0, -2, 1]} scale={[1.8, 1.8, 1]} parallaxFactor={4.0} />
                <ParallaxLayer textureUrl="/assets/walking-man.png" position={[0, -1.5, 3]} scale={[0.8, 0.8, 1]} parallaxFactor={6.0} />
                <Environment preset="forest" />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={300} />
                </EffectComposer>
            </Canvas>
        </Suspense>
    </div>
  );
}
