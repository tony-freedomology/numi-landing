'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const ZoeHeroScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;

    // Entrance Animation
    gsap.fromTo(
      sceneRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 2.5, ease: 'power3.out' }
    );

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || !sceneRef.current) return;

      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = sceneRef.current;
      const xPercent = (clientX / offsetWidth - 0.5) * 2;
      const yPercent = (clientY / offsetHeight - 0.5) * 2;

      // Apply parallax effect to each layer
      gsap.to('[data-depth]', {
        x: (i) => {
          const depth = parseFloat(sceneRef.current?.children[i].getAttribute('data-depth') || '0');
          return -xPercent * depth * 8; // Multiplier for visual intensity
        },
        y: (i) => {
          const depth = parseFloat(sceneRef.current?.children[i].getAttribute('data-depth') || '0');
          return -yPercent * depth * 8;
        },
        ease: 'power1.out',
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sceneRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#1a5c35] to-[#2B8B57]"
      style={{ opacity: 0 }} // Initial state for GSAP
    >
      {/* Layer 1: Background Gradient Image (subtle parallax) */}
      <div
        data-depth="0.5"
        className="absolute inset-0"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <Image
          src="/assets/bg-gradient.png"
          alt="Green gradient background"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Layer 2: Back Hill & Cross */}
      <div
        data-depth="1.5"
        className="absolute inset-0"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <Image
          src="/assets/hill-back-cross.png"
          alt="Distant hill with a glowing cross"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Layer 3: "Zoe" Text */}
      <div
        data-depth="2.5"
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <h1
          className="text-white text-[280px] italic leading-none"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            textShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          Zoe
        </h1>
      </div>

      {/* Layer 4: Front Hill */}
      <div
        data-depth="4.0"
        className="absolute inset-0"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <Image
          src="/assets/hill-front.png"
          alt="Closer hill in the foreground"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Layer 5: Walking Man */}
      <div
        data-depth="6.0"
        className="absolute inset-0"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <Image
          src="/assets/walking-man.png"
          alt="Silhouette of a person walking"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Overlay: Tagline + CTA */}
      <div className="absolute bottom-16 left-0 right-0 text-center z-10 pointer-events-none">
        <h2
          className="text-white text-2xl md:text-3xl font-light tracking-wide mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Walking Towards Purpose
        </h2>
        <a
          href="#get-started"
          className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
        >
          Get Started
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ZoeHeroScene;
