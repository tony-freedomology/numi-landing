
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface ZoeTextProps {
  parallaxFactor: number;
}

export default function ZoeText({ parallaxFactor }: ZoeTextProps) {
    const textRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const parallaxMultiplier = isTouchDevice ? 0.2 : 1;

        const targetX = (state.pointer.x * parallaxFactor * parallaxMultiplier) / 2;
        const targetY = (state.pointer.y * parallaxFactor * parallaxMultiplier) / 2;

        textRef.current.position.x = THREE.MathUtils.lerp(textRef.current.position.x, targetX, 0.05);
        textRef.current.position.y = THREE.MathUtils.lerp(textRef.current.position.y, targetY, 0.05);
    });

    return (
        <Text
            ref={textRef}
            position={[0, 1, -2]}
            fontSize={1.5}
            color="white"
            font="/fonts/PlayfairDisplay-Regular.ttf" // Assuming a font file is available
            anchorX="center"
            anchorY="middle"
        >
            Zoe
        </Text>
    );
}
