"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const SunSVG = () => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_60px_rgba(253,224,71,0.8)]">
        <circle cx="100" cy="100" r="40" fill="url(#sunGradient)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path key={angle} d="M100 20 L100 40 M100 160 L100 180" stroke="url(#sunRayGradient)" strokeWidth="4" strokeLinecap="round" transform={`rotate(${angle} 100 100)`} />
        ))}
        <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#fbbf24" />
            </radialGradient>
            <linearGradient id="sunRayGradient" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0" />
                <stop offset="20%" stopColor="#fde047" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#fde047" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

const MoonSVG = () => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_40px_rgba(226,232,240,0.5)]">
        <path d="M130 40 C 130 90, 90 130, 40 130 C 60 160, 100 170, 140 150 C 170 130, 180 90, 160 50 C 150 40, 140 35, 130 40 Z" fill="url(#moonGradient)" />
        <defs>
            <linearGradient id="moonGradient" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
        </defs>
    </svg>
);

const StarsSVG = () => (
    <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-[60vh] object-cover pointer-events-none">
        <circle cx="10%" cy="20%" r="2" fill="#fff" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <circle cx="25%" cy="10%" r="2.5" fill="#fff" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <circle cx="40%" cy="30%" r="1.5" fill="#fff" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <circle cx="60%" cy="15%" r="3" fill="#fff" opacity="0.7" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }} />
        <circle cx="75%" cy="25%" r="2" fill="#fff" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '3.5s' }} />
        <circle cx="85%" cy="10%" r="2.5" fill="#fff" opacity="0.5" className="animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }} />
        <circle cx="95%" cy="35%" r="1.5" fill="#fff" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '2s' }} />
        <circle cx="15%" cy="40%" r="2.5" fill="#fff" opacity="0.4" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <circle cx="50%" cy="45%" r="2" fill="#fff" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '3s' }} />
        <circle cx="80%" cy="40%" r="1.5" fill="#fff" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1.7s', animationDuration: '5s' }} />
    </svg>
);

export default function StickyRhythmsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Dawn (Morning) starts fully visible at 0 so there's no white gap
    const dawnOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
    const textDawnScale = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 1.15]);
    const textDawnBlur = useTransform(scrollYProgress, [0, 0.35, 0.45], ["blur(0px)", "blur(0px)", "blur(24px)"]);

    // Noon (Midday)
    const noonOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], [0, 1, 1, 0]);
    const textNoonScale = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], [0.85, 1, 1, 1.15]);
    const textNoonBlur = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], ["blur(24px)", "blur(0px)", "blur(0px)", "blur(24px)"]);

    // Dusk (Evening)
    const duskOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1, 1], [0, 1, 1, 1]);
    const textDuskScale = useTransform(scrollYProgress, [0.7, 0.8, 1], [0.85, 1, 1]);
    const textDuskBlur = useTransform(scrollYProgress, [0.7, 0.8, 1], ["blur(24px)", "blur(0px)", "blur(0px)"]);

    // GPU-Accelerated Image Crossfade Opacities for Terrain
    // We use duplicate layered images with static CSS filters and crossfade their opacities.
    // This entirely avoids GPU repaints caused by interpolating complex strings or `mix-blend-multiply` layers!
    const sunsetOpacity = useTransform(scrollYProgress, [0.4, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const nightOpacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);

    // Cloud Specific Opacities (Clouds catch the pink/orange light of sunset earlier and longer than the ground)
    const cloudSunsetOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
    const cloudNightOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);

    // Text color inversion for Dusk
    const duskHeadlineColor = useTransform(scrollYProgress, [0.7, 0.8], ["#0f172a", "#ffffff"]); // slate-900 to white
    const duskBodyColor = useTransform(scrollYProgress, [0.7, 0.8], ["#1e293b", "#e2e8f0"]);     // slate-800 to slate-200
    const duskLabelColor = useTransform(scrollYProgress, [0.7, 0.8], ["#312e81", "#818cf8"]);     // indigo-900 to indigo-400
    const diffuseGlowOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]); // Fade out the white reading glow completely at night to prevent banding
    const duskNightGlowOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]); // Fade in an indigo moon glow
    // Celestial Mechanics (Programmatic Crossfades and Arcs instead of Rotating Image)
    const skyNoonOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65, 0.8], [0, 1, 1, 0]);
    const skyNightOpacity = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 1]);
    const starOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
    const starY = useTransform(scrollYProgress, [0.7, 1], ["20%", "0%"]);

    // The Sun arcs from left to right
    const sunX = useTransform(scrollYProgress, [0, 0.5, 0.9], ["-20vw", "40vw", "110vw"]);
    const sunY = useTransform(scrollYProgress, [0, 0.5, 0.9], ["40vh", "5vh", "40vh"]);

    // The Moon follows from the left side
    const moonX = useTransform(scrollYProgress, [0.6, 1], ["-20vw", "60vw"]);
    const moonY = useTransform(scrollYProgress, [0.6, 1], ["60vh", "15vh"]);
    const moonRotate = useTransform(scrollYProgress, [0.6, 1], [-20, 10]);

    // Cloud Ribbon Panning Physics (Animated via Tailwind/CSS now instead of scroll)
    // We will use an infinite Framer Motion animate loop on the element instead of scroll progress

    // Midground Hills Parallax
    // Movement restricted to 2% to prevent pulling the bottom image transparency above the foreground hills.
    const midgroundY = useTransform(scrollYProgress, [0, 1], ["2%", "0%"]);

    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] z-10">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* The Ethereal Painted Backgrounds (Spot illustrations blown up) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full pointer-events-none -z-10 bg-slate-50">

                    {/* 1. Programmatic Sky & Celestial Bodies */}
                    <div className="absolute inset-0 -z-50 overflow-hidden bg-gradient-to-b from-rose-200 via-orange-100 to-amber-50">
                        {/* Midday Gradient Crossfade */}
                        <motion.div style={{ opacity: skyNoonOpacity }} className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-blue-50" />

                        {/* Night Gradient Crossfade */}
                        <motion.div style={{ opacity: skyNightOpacity }} className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900 to-violet-900" />

                        {/* Stars (Fade in at night) */}
                        <motion.div style={{ opacity: starOpacity, y: starY }} className="absolute inset-0">
                            <StarsSVG />
                        </motion.div>

                        {/* The Sun */}
                        <motion.div
                            style={{ x: sunX, y: sunY }}
                            className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 aspect-square origin-center"
                        >
                            <SunSVG />
                        </motion.div>

                        {/* The Moon */}
                        <motion.div
                            style={{ x: moonX, y: moonY, rotate: moonRotate }}
                            className="absolute top-0 left-0 w-24 sm:w-32 lg:w-48 aspect-square origin-center flex items-center justify-center"
                        >
                            <MoonSVG />
                            {/* The Ambient Moonlight Glow (Travels with the moon) */}
                            <div className="absolute w-[800px] sm:w-[1200px] h-[800px] sm:h-[1200px] rounded-[100%] mix-blend-plus-lighter pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse at center, rgba(165,180,252,0.15) 0%, rgba(165,180,252,0) 70%)' }} />
                            <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-[100%] pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 70%)' }} />
                        </motion.div>
                    </div>

                    {/* 2. The Panning Cloud Ribbon */}
                    {/* Pure CSS background-repeat physically eliminates all flexbox subpixel tearing and DOM bounding box gaps. */}
                    <div className="absolute top-[-5vh] sm:top-[-10vh] left-0 w-[100vw] h-[40vh] sm:h-[50vh] -z-40 pointer-events-none [--cloud-width:140vw] sm:[--cloud-width:80vw]">
                        <style>{`
                            @keyframes pan-clouds {
                                from { background-position-x: 0; }
                                to { background-position-x: calc(-1 * var(--cloud-width)); }
                            }
                            .animate-clouds {
                                animation: pan-clouds 120s linear infinite;
                                background-size: var(--cloud-width) auto;
                                background-repeat: repeat-x;
                                background-position-y: bottom;
                            }
                        `}</style>
                        {/* Base Day Clouds */}
                        <div className="absolute inset-0 w-full h-full animate-clouds" style={{ backgroundImage: "url('/assets/illustrations/Parallax/clouds-ribbon.webp')" }} />

                        {/* Sunset Crossfade */}
                        <motion.div style={{ opacity: cloudSunsetOpacity, backgroundImage: "url('/assets/illustrations/Parallax/clouds-ribbon.webp')", filter: 'sepia(1) hue-rotate(-50deg) saturate(3) brightness(1.1)' }} className="absolute inset-0 w-full h-full animate-clouds" />

                        {/* Night Crossfade */}
                        <motion.div style={{ opacity: cloudNightOpacity, backgroundImage: "url('/assets/illustrations/Parallax/clouds-ribbon.webp')", filter: 'brightness(0.15) sepia(0.5) hue-rotate(180deg) saturate(1.2)' }} className="absolute inset-0 w-full h-full animate-clouds" />
                    </div>

                    {/* 3. Parallax Midground Hills */}
                    <motion.div
                        style={{ y: midgroundY }}
                        className="absolute bottom-0 left-0 w-full h-[60vh] sm:h-[70vh] -z-20 overflow-hidden origin-bottom"
                    >
                        <Image src="/assets/illustrations/Parallax/midground-hills.webp" alt="Distant Hills" fill className="object-cover object-bottom" priority />

                        {/* Sunset Crossfade - uses static CSS filter for perfect color grade, zero CPU repaints! */}
                        <motion.div style={{ opacity: sunsetOpacity }} className="absolute inset-0">
                            <Image src="/assets/illustrations/Parallax/midground-hills.webp" alt="Distant Hills Sunset" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.7) sepia(0.4) hue-rotate(-20deg) saturate(1.4)' }} priority />
                        </motion.div>

                        {/* Night Crossfade */}
                        <motion.div style={{ opacity: nightOpacity }} className="absolute inset-0">
                            <Image src="/assets/illustrations/Parallax/midground-hills.webp" alt="Distant Hills Night" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.25) sepia(0.5) hue-rotate(180deg) saturate(1.2)' }} priority />
                        </motion.div>
                    </motion.div>

                    {/* 4. Anchored Foreground Hills & Sheep */}
                    {/* Scaled slightly to provide additional overlap bleed, covering any holes in the midground illustration during its 2% vertical parallax shift. */}
                    <div className="absolute bottom-0 left-0 w-full h-[40vh] sm:h-[50vh] -z-10 overflow-hidden origin-bottom" style={{ transform: 'scale(1.03)' }}>
                        <Image src="/assets/illustrations/Parallax/foreground-hills.webp" alt="Foreground Terrain" fill className="object-cover object-bottom" priority />

                        {/* Sunset Crossfade */}
                        <motion.div style={{ opacity: sunsetOpacity }} className="absolute inset-0">
                            <Image src="/assets/illustrations/Parallax/foreground-hills.webp" alt="Foreground Terrain Sunset" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.7) sepia(0.4) hue-rotate(-20deg) saturate(1.4)' }} priority />
                        </motion.div>

                        {/* Night Crossfade */}
                        <motion.div style={{ opacity: nightOpacity }} className="absolute inset-0">
                            <Image src="/assets/illustrations/Parallax/foreground-hills.webp" alt="Foreground Terrain Night" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.25) sepia(0.5) hue-rotate(180deg) saturate(1.2)' }} priority />
                        </motion.div>
                    </div>
                </div>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex items-center justify-center">

                    {/* Diffuse glow to ensure readability against complex landscapes (Dawn & Noon) */}
                    {/* (Using massive live CSS blurs crashes FPS, so we use lightweight radial-gradients instead) */}
                    <motion.div style={{ opacity: diffuseGlowOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        <div className="absolute w-[800px] h-[400px] rounded-[100%]" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)' }} />
                        <div className="absolute w-[400px] h-[200px] rounded-[100%]" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)' }} />
                    </motion.div>

                    {/* Night Sky / Moon glow for Dusk (avoids banding from white glow) */}
                    <motion.div style={{ opacity: duskNightGlowOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        {/* Deep atmospheric night directly behind text for contrast */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%]" style={{ background: 'radial-gradient(ellipse at center, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0) 70%)' }} />

                        {/* Subtle backdrop blur directly behind text to separate it from stars */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-[1000px] h-[500px]" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 15%, transparent 60%)' }} />
                    </motion.div>

                    {/* 1. Morning Text */}
                    <motion.div style={{ opacity: dawnOpacity, scale: textDawnScale, filter: textDawnBlur }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-4">Dawn</span>
                        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tighter-editorial text-slate-900 mb-6">Start with<br />intention.</h2>
                        <p className="text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            Before the emails and the noise, Zoe checks in to remind you what matters most and the path you're walking. A scripture verse or suggested reading and reflection. What are you carrying? What do you need from God today? Set the intention — then walk it out all day long.
                        </p>
                    </motion.div>

                    {/* 2. Midday Text */}
                    <motion.div style={{ opacity: noonOpacity, scale: textNoonScale, filter: textNoonBlur }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-misty-green-700 font-semibold tracking-widest uppercase text-sm mb-4">Noon</span>
                        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tighter-editorial text-slate-900 mb-6">Stay grounded<br />in the middle.</h2>
                        <p className="text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            The day gets loud. Zoe brings you back. That gentle elbow in the ribs — hey, remember what you said this morning? God might be in this moment right now. Pay attention.
                        </p>
                    </motion.div>

                    {/* 3. Evening Text */}
                    <motion.div style={{ opacity: duskOpacity, scale: textDuskScale, filter: textDuskBlur }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <motion.span style={{ color: duskLabelColor }} className="font-semibold tracking-widest uppercase text-sm mb-4">Dusk</motion.span>
                        <motion.h2 style={{ color: duskHeadlineColor }} className="text-5xl sm:text-6xl font-semibold tracking-tighter-editorial mb-6">End with<br />reflection.</motion.h2>
                        <motion.p style={{ color: duskBodyColor }} className="text-xl leading-relaxed font-medium max-w-2xl">
                            Where did you see God today? What surprised you? Zoe helps you close the loop — because transformation doesn't happen in a single quiet time. It happens when you pay attention all day long.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
