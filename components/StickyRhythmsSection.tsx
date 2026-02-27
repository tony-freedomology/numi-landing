"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

    // Dynamic Time-of-Day Colors
    // Overall overlay color to simulate time of day
    const overlayColor = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.9], [
        "rgba(251, 146, 60, 0.15)",   // Dawn: soft orangey/warm tint, not fully transparent
        "rgba(255, 255, 255, 0)",     // Noon: fully transparent to let illustration shine
        "rgba(11, 12, 18, 0.3)",      // Late afternoon transition (starting to darken)
        "rgba(11, 12, 18, 0.85)"      // Dusk: dark navy overlay
    ]);

    // Top and bottom vignette gradients (adjust color based on time of day)
    const topGradient = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.9], [
        "linear-gradient(to top, rgba(254,240,138,0.2), transparent)",   // Dawn yellow tint
        "linear-gradient(to top, rgba(248,251,250,0.5), transparent)",   // Noon soft white fade
        "linear-gradient(to top, rgba(248,251,250,0.8), transparent)",
        "linear-gradient(to top, rgba(11,12,18,1), transparent)"
    ]);
    const bottomGradient = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.9], [
        "linear-gradient(to bottom, rgba(254,215,170,0.3), transparent)",// Dawn orange tint
        "linear-gradient(to bottom, rgba(224,242,254,0.5), transparent)",// Noon sky blue fade
        "linear-gradient(to bottom, rgba(224,242,254,0.8), transparent)",
        "linear-gradient(to bottom, rgba(11,12,18,1), transparent)"
    ]);

    // Text color inversion for Dusk
    const duskHeadlineColor = useTransform(scrollYProgress, [0.7, 0.8], ["#0f172a", "#ffffff"]); // slate-900 to white
    const duskBodyColor = useTransform(scrollYProgress, [0.7, 0.8], ["#1e293b", "#e2e8f0"]);     // slate-800 to slate-200
    const duskLabelColor = useTransform(scrollYProgress, [0.7, 0.8], ["#312e81", "#818cf8"]);     // indigo-900 to indigo-400
    const diffuseGlowOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]); // Fade out the white reading glow completely at night to prevent banding
    const duskNightGlowOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]); // Fade in an indigo moon glow
    // Sky Disc Rotation Physics
    // Dawn -> Noon -> Dusk -> Night
    // Dawn needs to start firmly in the bottom-left yellow/peach quadrant (+140deg).
    // Noon is at top center (0deg).
    // Dusk is in the right magenta quadrant (-90deg).
    // Night is at the bottom (-180deg).
    const skyRotation = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [140, 0, -90, -180]);

    // Cloud Ribbon Panning Physics (Animated via Tailwind/CSS now instead of scroll)
    // We will use an infinite Framer Motion animate loop on the element instead of scroll progress

    // Midground Hills Parallax
    // Starts slightly lower and rises into place, giving a subtle sense of moving forward/down into the valley.
    const midgroundY = useTransform(scrollYProgress, [0, 1], ["5%", "0%"]);

    // Terrain Lighting Filter
    // Because we can't put a black square over the whole screen without dimming the moon,
    // we directly apply a color grade filter to the terrain layers so they physically change color at night.
    // We rotate the grassy green hue towards blue/purple (+180deg) and heavily drop the brightness.
    const terrainFilter = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.9], [
        "brightness(0.85) sepia(0.3) hue-rotate(-15deg) saturate(1.1)", // Dawn: Dim and warm/yellow
        "brightness(1) sepia(0) hue-rotate(0deg) saturate(1)",          // Noon: Full natural color
        "brightness(0.4) sepia(0.3) hue-rotate(160deg) saturate(1.2)",  // Dusk: Dark, heavily blue/purple
        "brightness(0.15) sepia(0.5) hue-rotate(180deg) saturate(1.5)"  // Night: Near-silhouette deep midnight blue
    ]);


    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] z-10">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* The Ethereal Painted Backgrounds (Spot illustrations blown up) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full pointer-events-none -z-10 bg-slate-50">

                    {/* 1. The Rotating Sky Disc */}
                    {/* The center of the massive disc sits near the horizon line covered by mountains. */}
                    <motion.div
                        style={{ x: "-50%", y: "-50%", rotate: skyRotation }}
                        className="absolute top-[60%] left-1/2 w-[400vw] sm:w-[250vw] max-w-[5000px] aspect-square -z-50 origin-center"
                    >
                        <Image src="/assets/illustrations/Parallax/sky-disc.png" alt="Sky Gradient" fill className="object-cover rounded-full" priority />
                    </motion.div>

                    {/* 2. The Panning Cloud Ribbon */}
                    {/* Infinite horizontal drift via Framer Motion */}
                    {/* Using w-full h-auto ensures the image scales naturally by width without ever cropping its puffy bottom edge */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
                        className="absolute top-[5vh] left-0 w-[200vw] -z-40"
                    >
                        <Image src="/assets/illustrations/Parallax/clouds-ribbon.png" alt="Drifting Clouds" width={3840} height={1080} className="w-full h-auto" priority />
                    </motion.div>

                    {/* Darkening Overlay & Dynamic Gradients */}
                    {/* MOVED: Now sits BEHIND the terrain but IN FRONT of the Sky Disc & Clouds */}
                    {/* This ensures the mountains get dark at night, but the moon and stars stay bright and glowing! */}
                    <motion.div style={{ backgroundColor: overlayColor }} className="absolute inset-0 -z-30 pointer-events-none" />
                    <motion.div style={{ background: topGradient }} className="absolute inset-0 -z-30 pointer-events-none" />
                    <motion.div style={{ background: bottomGradient }} className="absolute inset-0 -z-30 pointer-events-none" />

                    {/* 3. Parallax Midground Hills */}
                    <motion.div
                        style={{ y: midgroundY, filter: terrainFilter }}
                        className="absolute bottom-0 left-0 w-full h-[80vh] -z-20"
                    >
                        <Image src="/assets/illustrations/Parallax/midground-hills.png" alt="Distant Hills" fill className="object-cover object-bottom" priority />
                    </motion.div>

                    {/* 4. Anchored Foreground Hills & Sheep */}
                    <motion.div
                        style={{ filter: terrainFilter }}
                        className="absolute bottom-0 left-0 w-full h-[60vh] -z-10"
                    >
                        <Image src="/assets/illustrations/Parallax/foreground-hills.png" alt="Foreground Terrain" fill className="object-cover object-bottom" priority />
                    </motion.div>
                </div>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex items-center justify-center">

                    {/* Diffuse glow to ensure readability against complex landscapes (Dawn & Noon) */}
                    <motion.div style={{ opacity: diffuseGlowOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        <div className="w-[800px] h-[400px] bg-white/60 blur-[100px] rounded-[100%]" />
                        <div className="absolute w-[400px] h-[200px] bg-white/80 blur-[60px] rounded-[100%]" />
                    </motion.div>

                    {/* Night Sky / Moon glow for Dusk (avoids banding from white blur) */}
                    <motion.div style={{ opacity: duskNightGlowOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        {/* Ambient moonlight cascading from top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-indigo-300/10 blur-[150px] rounded-[100%] mix-blend-plus-lighter" />

                        {/* Soft moonlight glow behind text */}
                        <div className="absolute top-1/4 w-[600px] h-[400px] bg-indigo-500/15 blur-[120px] rounded-[100%]" />

                        {/* Deep atmospheric night directly behind text for contrast */}
                        <div className="w-[800px] h-[400px] bg-slate-900/50 blur-[80px] rounded-[100%]" />
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
