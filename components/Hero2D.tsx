"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import ZoeSVG from "./ZoeSVG";

// Shared style to force each layer onto its own stable GPU compositing layer,
// preventing the browser from dynamically creating / destroying textures mid-animation.
const gpuLayer: React.CSSProperties = {
    willChange: "transform",
    backfaceVisibility: "hidden",
};

export default function Hero2D() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use raw motion values instead of React state to prevent DOM re-rendering
    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);

    // Update mouse position for parallax directly in the motion tree
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 200;
            const y = (e.clientY / window.innerHeight - 0.5) * 200;
            rawMouseX.set(x);
            rawMouseY.set(y);
        };

        // Delay until entrance animations finish (~3.5s)
        const timer = setTimeout(() => {
            window.addEventListener("mousemove", handleMouseMove);
        }, 3500);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [rawMouseX, rawMouseY]);

    // Spring-damped mouse parallax
    const springConfig = { damping: 25, stiffness: 100 };
    const mouseX = useSpring(rawMouseX, springConfig);
    const mouseY = useSpring(rawMouseY, springConfig);

    // Parallax intensity multipliers (negative = standard parallax direction)
    const bgX = useTransform(mouseX, (v) => v * -0.05);
    const bgY = useTransform(mouseY, (v) => v * -0.05);

    const midX = useTransform(mouseX, (v) => v * -0.15);
    const midY = useTransform(mouseY, (v) => v * -0.15);

    const fgX = useTransform(mouseX, (v) => v * -0.3);
    const fgY = useTransform(mouseY, (v) => v * -0.3);

    // ── Animation Variants ──────────────────────────────────────────────
    const staggerContainer = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const popUpVariant = {
        hidden: { y: "100%", opacity: 0 },
        show: {
            y: "0%",
            opacity: 1,
            transition: { type: "spring", bounce: 0.02, duration: 1.4 },
        },
    };

    const slideInLeftSpringVariant = {
        hidden: { x: "-50%", opacity: 0 },
        show: {
            x: "0%",
            opacity: 1,
            transition: { type: "spring", bounce: 0.02, duration: 1.4 },
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#e0f2fe]"
        >
            {/* 1. Base Sky — static, loads instantly */}
            <div className="absolute inset-0 z-0" style={gpuLayer}>
                <Image
                    src="/assets/hero/sky.webp"
                    alt="Sky Background"
                    fill
                    priority
                    className="object-cover object-top"
                    quality={90}
                />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="absolute inset-0 w-full h-full"
                style={gpuLayer}
            >
                {/* 2. Clouds ───────────────────────────────────────────── */}
                <div className="absolute inset-0 z-10 select-none pointer-events-none overflow-hidden" style={gpuLayer}>
                    {/* Cloud 1 */}
                    <motion.div
                        initial={{ x: "10%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 2.2, ease: "easeOut", delay: 0.1 }}
                        className="absolute inset-0"
                        style={gpuLayer}
                    >
                        <motion.div
                            style={{ x: bgX, y: bgY, scale: 1.15, ...gpuLayer }}
                            className="absolute inset-0"
                            animate={{ x: ["-1%", "1.5%"] }}
                            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        >
                            <Image src="/assets/hero/cloud-1.webp" alt="Cloud 1" fill priority className="object-cover object-top" />
                        </motion.div>
                    </motion.div>

                    {/* Cloud 2 */}
                    <motion.div
                        initial={{ x: "15%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
                        className="absolute inset-0"
                        style={gpuLayer}
                    >
                        <motion.div
                            style={{ x: bgX, y: bgY, scale: 1.15, ...gpuLayer }}
                            className="absolute inset-0"
                            animate={{ x: ["-1.5%", "1%"] }}
                            transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
                        >
                            <Image src="/assets/hero/cloud-2.webp" alt="Cloud 2" fill priority className="object-cover object-top" />
                        </motion.div>
                    </motion.div>

                    {/* Cloud 3 */}
                    <motion.div
                        initial={{ x: "15%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 0 }}
                        className="absolute inset-0"
                        style={gpuLayer}
                    >
                        <motion.div
                            style={{ x: bgX, y: bgY, scale: 1.15, ...gpuLayer }}
                            className="absolute inset-0"
                            animate={{ x: ["-2%", "2%"] }}
                            transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                        >
                            <Image src="/assets/hero/cloud-3.webp" alt="Cloud 3" fill priority className="object-cover object-top" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* 3. Midground: Hills, Man, and Cross ─────────────────── */}
                <motion.div variants={popUpVariant} className="absolute inset-0 z-20 select-none pointer-events-none" style={gpuLayer}>
                    <motion.div style={{ x: midX, y: midY, scale: 1.15, ...gpuLayer }} className="absolute inset-0">
                        <Image
                            src="/assets/hero/hills-man.webp"
                            alt="Midground Hills"
                            fill
                            priority
                            className="object-cover object-bottom"
                        />
                    </motion.div>
                </motion.div>

                {/* 4. Foreground Left: Tree ─────────────────────────────── */}
                <motion.div variants={slideInLeftSpringVariant} className="absolute inset-0 z-30 select-none pointer-events-none" style={gpuLayer}>
                    <motion.div
                        style={{ x: fgX, y: fgY, scale: 1.15, ...gpuLayer }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/assets/hero/tree-left.webp"
                            alt="Foreground Tree"
                            fill
                            priority
                            className="object-cover object-bottom"
                        />
                    </motion.div>
                </motion.div>

                {/* 5. Foreground Right: Ferns ───────────────────────────── */}
                <motion.div variants={popUpVariant} className="absolute inset-0 z-40 select-none pointer-events-none" style={gpuLayer}>
                    <motion.div
                        style={{ x: fgX, y: fgY, scale: 1.15, ...gpuLayer }}
                        className="absolute inset-0"
                        animate={{ rotate: [-1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                        <Image
                            src="/assets/hero/ferns-right.webp"
                            alt="Foreground Ferns"
                            fill
                            priority
                            className="object-cover object-bottom"
                        />
                    </motion.div>
                </motion.div>

                {/* 6. Zoe Text (SVG Handwriting Animation) & Interactive CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute inset-0 z-50 flex flex-col items-center justify-center select-none pb-12 md:pb-24 lg:pb-32"
                    style={gpuLayer}
                >
                    <motion.div style={{ x: midX, y: midY, ...gpuLayer }} className="w-full max-w-[280px] md:max-w-[450px] px-4 md:px-6 flex flex-col items-center pointer-events-none drop-shadow-xl mt-12 md:mt-0">
                        <ZoeSVG />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="mt-6 flex flex-col items-center pointer-events-auto text-center px-4"
                        style={{ x: midX, y: midY, ...gpuLayer }}
                    >
                        <p className="mb-5 text-xl md:text-2xl font-medium tracking-tighter-editorial text-slate-800 drop-shadow-sm max-w-sm md:max-w-xl leading-snug">
                            A partner in your walk with Jesus.
                        </p>
                        <a
                            href="#start"
                            className="rounded-full bg-white px-8 py-4 md:px-10 md:py-4 text-sm md:text-base font-bold text-slate-900 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-transform hover:scale-105"
                        >
                            Text to start
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Gradient fade into the dark ThesisSection */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-misty-green-950 to-transparent z-[60] pointer-events-none" style={gpuLayer} />
        </section>
    );
}
