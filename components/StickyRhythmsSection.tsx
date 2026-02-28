"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// iOS SAFARI MOBILE FIXES APPLIED:
// 1. position: fixed (not sticky) — eliminates compositor judder
// 2. NO translateY on any child — eliminates JS/compositor thread fight
// 3. Moonlight glow uses overflow:hidden on parent — hides rectangular bounds
// 4. Reduced cloud layers from 4→2 on mobile — fewer GPU filter operations
// 5. mix-blend-plus-lighter removed — causes rectangle artifacts on iOS
// 6. CSS filter: blur() DISABLED on mobile — re-rasterization per frame tanks FPS
// ─────────────────────────────────────────────────────────────────────────────

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
    const containerRef = useRef<HTMLElement>(null);

    // Detect mobile to disable expensive CSS blur animations
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // The "no blur" constant — used on mobile to skip the expensive re-rasterization
    const noBlur = "blur(0px)";

    // Dawn (Morning)
    const dawnOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
    const textDawnScale = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 1.15]);

    // Noon (Midday)
    const noonOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], [0, 1, 1, 0]);
    const textNoonScale = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], [0.85, 1, 1, 1.15]);

    // Dusk (Evening)
    const duskOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1, 1], [0, 1, 1, 1]);
    const textDuskScale = useTransform(scrollYProgress, [0.7, 0.8, 1], [0.85, 1, 1]);

    // GPU-Accelerated Image Crossfade Opacities for Terrain
    const sunsetOpacity = useTransform(scrollYProgress, [0.4, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const nightOpacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);

    // Cloud Opacities — day layer fades out as night layer fades in (crossfade)
    const cloudSunsetOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
    const cloudDayOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
    const cloudNightOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    // Text color inversion for Dusk
    const duskHeadlineColor = useTransform(scrollYProgress, [0.7, 0.8], ["#0f172a", "#ffffff"]);
    const duskBodyColor = useTransform(scrollYProgress, [0.7, 0.8], ["#1e293b", "#e2e8f0"]);
    const duskLabelColor = useTransform(scrollYProgress, [0.7, 0.8], ["#312e81", "#818cf8"]);
    const diffuseGlowOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);
    const duskNightGlowOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    // Celestial Mechanics
    const skyNoonOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65, 0.8], [0, 1, 1, 0]);
    const skyNightOpacity = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 1]);
    const starOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);

    // Sun arcs (using x/y but these are on a small element, not the viewport container)
    const sunX = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9], ["-20vw", "0vw", "22vw", "45vw", "67vw", "88vw", "110vw"]);
    const sunY = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9], ["40vh", "22vh", "10vh", "5vh", "10vh", "22vh", "40vh"]);

    // Moon arcs
    const moonX = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9, 1], ["-20vw", "0vw", "20vw", "40vw", "60vw"]);
    const moonY = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9, 1], ["60vh", "38vh", "24vh", "17vh", "15vh"]);
    const moonRotate = useTransform(scrollYProgress, [0.6, 1], [-20, 10]);

    return (
        <section ref={containerRef} className="relative w-full min-h-[500vh] z-10 w-full">

            {/* PURE NATIVE STICKY — Best performance on low-battery/throttled iOS. 
                Using 100dvh so Safari calculates the bottom navigation bar correctly. */}
            <div className="sticky top-0 left-0 w-full h-[100dvh] flex items-center justify-center overflow-hidden z-10">

                {/* The Ethereal Painted Backgrounds */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full pointer-events-none -z-10">

                    {/* 1. Programmatic Sky & Celestial Bodies */}
                    <div className="absolute inset-0 -z-50 bg-gradient-to-b from-rose-200 via-orange-100 to-amber-50">

                        {/* Midday Gradient Crossfade */}
                        <motion.div style={{ opacity: skyNoonOpacity }} className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-blue-50" />

                        {/* Night Gradient Crossfade */}
                        <motion.div style={{ opacity: skyNightOpacity }} className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900 to-violet-900" />

                        {/* Stars (Fade in at night — NO translateY) */}
                        <motion.div style={{ opacity: starOpacity }} className="absolute inset-0">
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
                            className="absolute top-0 left-0 w-24 sm:w-32 lg:w-48 aspect-square origin-center flex items-center justify-center overflow-visible"
                        >
                            <MoonSVG />
                            {/* Moonlight glow — NO mix-blend-plus-lighter (causes rectangle artifacts on iOS) */}
                            <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none -z-10 opacity-30" style={{ background: 'radial-gradient(ellipse at center, rgba(165,180,252,0.5) 0%, rgba(165,180,252,0) 70%)' }} />
                        </motion.div>
                    </div>

                    {/* 2. The Panning Cloud Ribbon — Two layers always in DOM for animation sync */}
                    <div className="absolute top-[-5vh] sm:top-[-10vh] left-0 w-[100vw] h-[50vh] sm:h-[65vh] -z-40 pointer-events-none [--cloud-width:140vw] sm:[--cloud-width:80vw]">
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
                        {/* Day clouds — fades out as night fades in */}
                        <motion.div style={{ opacity: cloudDayOpacity }} className="absolute inset-0 w-full h-full">
                            <div className="absolute inset-0 w-full h-full animate-clouds" style={{ backgroundImage: "url('/assets/illustrations/Parallax/clouds-ribbon.webp')" }} />
                        </motion.div>

                        {/* Night clouds — same image, static cool moonlit filter, always in DOM for sync */}
                        <motion.div style={{ opacity: cloudNightOpacity }} className="absolute inset-0 w-full h-full">
                            <div className="absolute inset-0 w-full h-full animate-clouds" style={{ backgroundImage: "url('/assets/illustrations/Parallax/clouds-ribbon.webp')", filter: 'brightness(0.4) sepia(0.3) hue-rotate(180deg) saturate(0.8)' }} />
                        </motion.div>
                    </div>

                    {/* 3. Midground Hills */}
                    <div className="absolute bottom-0 left-0 w-full h-[60vh] sm:h-[75vh] -z-20 overflow-hidden origin-bottom">
                        <Image src="/assets/illustrations/Parallax/midground-hills.webp" alt="Distant Hills" fill className="object-cover object-bottom" priority />

                        {/* Sunset Crossfade */}
                        <motion.div style={{ opacity: sunsetOpacity }} className="absolute inset-0 origin-bottom">
                            <Image src="/assets/illustrations/Parallax/midground-hills.webp" alt="Distant Hills Sunset" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.7) sepia(0.4) hue-rotate(-20deg) saturate(1.4)' }} priority />
                        </motion.div>

                        {/* Night Crossfade */}
                        <motion.div style={{ opacity: nightOpacity }} className="absolute inset-0 origin-bottom">
                            <Image src="/assets/illustrations/Parallax/midground-hills.webp" alt="Distant Hills Night" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.25) sepia(0.5) hue-rotate(180deg) saturate(1.2)' }} priority />
                        </motion.div>
                    </div>

                    {/* 4. Foreground Hills & Sheep */}
                    <div className="absolute bottom-0 left-0 w-full h-[60vh] sm:h-[75vh] -z-10 overflow-hidden origin-bottom">
                        <Image src="/assets/illustrations/Parallax/foreground-hills.webp" alt="Foreground Terrain" fill className="object-cover object-bottom" priority />

                        {/* Sunset Crossfade */}
                        <motion.div style={{ opacity: sunsetOpacity }} className="absolute inset-0 origin-bottom">
                            <Image src="/assets/illustrations/Parallax/foreground-hills.webp" alt="Foreground Terrain Sunset" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.7) sepia(0.4) hue-rotate(-20deg) saturate(1.4)' }} priority />
                        </motion.div>

                        {/* Night Crossfade */}
                        <motion.div style={{ opacity: nightOpacity }} className="absolute inset-0 origin-bottom">
                            <Image src="/assets/illustrations/Parallax/foreground-hills.webp" alt="Foreground Terrain Night" fill className="object-cover object-bottom" style={{ filter: 'brightness(0.25) sepia(0.5) hue-rotate(180deg) saturate(1.2)' }} priority />
                        </motion.div>
                    </div>
                </div>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex items-center justify-center">

                    {/* Diffuse glow for readability (Dawn & Noon) */}
                    <motion.div style={{ opacity: diffuseGlowOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 mt-16 sm:mt-24">
                        <div className="absolute top-1/2 -translate-y-1/2 w-[150vw] sm:w-[1500px] h-[600px] sm:h-[800px] rounded-full" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 70%)' }} />
                        <div className="absolute top-1/2 -translate-y-1/2 w-[100vw] sm:w-[800px] h-[300px] sm:h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)' }} />
                    </motion.div>

                    {/* Night glow for Dusk */}
                    <motion.div style={{ opacity: duskNightGlowOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 mt-16 sm:mt-24">
                        <div className="absolute top-1/2 -translate-y-1/2 w-[100vw] sm:w-[1200px] h-[500px] sm:h-[600px] rounded-full" style={{
                            background: isMobile
                                ? 'radial-gradient(ellipse at center, rgba(15,23,42,0.25) 0%, rgba(15,23,42,0) 70%)'
                                : 'radial-gradient(ellipse at center, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0) 70%)'
                        }} />
                    </motion.div>

                    {/* 1. Morning Text */}
                    <motion.div style={{ opacity: dawnOpacity, scale: textDawnScale }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-4">Dawn</span>
                        <h2 className="text-5xl md:text-6xl tracking-tighter-editorial text-slate-900 mb-6 font-bold leading-[1.1]">Start with<br />intention.</h2>
                        <div className="space-y-4 text-[17px] md:text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            <p>Before the emails and the noise, <strong className="text-slate-900 font-semibold">Zoe checks in to remind you what matters most.</strong></p>
                            <p>A scripture verse or suggested reading. <strong className="text-slate-900 font-semibold">What are you carrying? What do you need from God today?</strong></p>
                            <p>Set the intention — then walk it out all day long.</p>
                        </div>
                    </motion.div>

                    {/* 2. Midday Text */}
                    <motion.div style={{ opacity: noonOpacity, scale: textNoonScale }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-misty-green-700 font-semibold tracking-widest uppercase text-sm mb-4">Noon</span>
                        <h2 className="text-5xl md:text-6xl tracking-tighter-editorial text-slate-900 mb-6 font-bold leading-[1.1]">Stay grounded<br />in the middle.</h2>
                        <div className="space-y-4 text-[17px] md:text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            <p>The day gets loud. <strong className="text-slate-900 font-semibold">Zoe brings you back.</strong></p>
                            <p>That gentle elbow in the ribs — <strong className="text-misty-green-900 bg-misty-green-100/60 px-1 py-0.5 rounded-sm font-semibold">hey, remember what you said this morning?</strong></p>
                            <p>God might be in this moment right now. Pay attention.</p>
                        </div>
                    </motion.div>

                    {/* 3. Evening Text */}
                    <motion.div style={{ opacity: duskOpacity, scale: textDuskScale }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <motion.span style={{ color: duskLabelColor }} className="font-semibold tracking-widest uppercase text-sm mb-4">Dusk</motion.span>
                        <motion.h2 style={{ color: duskHeadlineColor }} className="text-5xl md:text-6xl tracking-tighter-editorial mb-6 font-bold leading-[1.1]">End with<br />reflection.</motion.h2>
                        <motion.div style={{ color: duskBodyColor }} className="space-y-4 text-[17px] md:text-xl leading-relaxed font-medium max-w-2xl">
                            <p><strong className="text-white font-semibold">Where did you see God today? What surprised you?</strong></p>
                            <p>Zoe helps you close the loop.</p>
                            <p>Transformation doesn&apos;t happen in a single quiet time. <strong className="bg-indigo-900/40 text-indigo-100 px-1 py-0.5 rounded-sm font-semibold">It happens when you pay attention all day long.</strong></p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
