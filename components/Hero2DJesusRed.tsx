"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import ZoeSVG from "./ZoeSVG";
import LeftHeroSvg from "./LeftHeroSvg";
import RightHeroSvg from "./RightHeroSvg";

// Shared style to force each layer onto its own stable GPU compositing layer,
// preventing the browser from dynamically creating / destroying textures mid-animation.
const gpuLayer: React.CSSProperties = {
    willChange: "transform",
    backfaceVisibility: "hidden",
};

export default function Hero2DJesusRed() {
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

        // Delay until entrance animations finish (~1s)
        const timer = setTimeout(() => {
            window.addEventListener("mousemove", handleMouseMove);
        }, 1000);

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
    const layer1X = useTransform(mouseX, (v) => v * -0.05); // Hills (Slowest)
    const layer1Y = useTransform(mouseY, (v) => v * -0.05);

    const layer2X = useTransform(mouseX, (v) => v * -0.10); // Figure Left
    const layer2Y = useTransform(mouseY, (v) => v * -0.10);

    const layer3X = useTransform(mouseX, (v) => v * -0.15); // Cross Right
    const layer3Y = useTransform(mouseY, (v) => v * -0.15);

    const layer4X = useTransform(mouseX, (v) => v * -0.25); // Splatters (Fastest)
    const layer4Y = useTransform(mouseY, (v) => v * -0.25);

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

    const slideInUpVariant = {
        hidden: { y: "20%", opacity: 0 },
        show: {
            y: "0%",
            opacity: 1,
            transition: { type: "spring", bounce: 0.02, duration: 1.4 },
        },
    };

    const fadeInVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1.5 } }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full overflow-hidden bg-[#f5efe6] h-[100vh] min-h-[600px]"
        >
            {/* 1. Elegant Parchment Background */}
            <div className="absolute inset-0 z-0 bg-[#f5efe6]" style={gpuLayer}>
                <Image
                    src="/assets/hero/parchment-bg.png"
                    alt="Vintage Parchment Background"
                    fill
                    priority
                    className="object-cover opacity-60 mix-blend-multiply"
                    quality={90}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_100%)]" />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="absolute inset-0 w-full h-full"
            >
                {/* Layer 1: Left Hill & Figure (Slow Parallax) */}
                <motion.div variants={fadeInVariant} className="absolute inset-0 z-10 select-none pointer-events-none" style={gpuLayer}>
                    <motion.div style={{ x: layer1X, y: layer1Y, ...gpuLayer }} className="absolute inset-0 will-change-transform">
                        <div className="absolute left-[-2vw] bottom-[2vh] md:bottom-[7vh] lg:bottom-[0vh] w-[60vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] min-w-[300px] max-w-[800px] h-[50vh] md:h-[65vh] lg:h-[75vh]">
                            <LeftHeroSvg className="w-full h-full object-contain object-bottom-left" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Layer 2: Right Hill & Cross (Medium Parallax) */}
                <motion.div variants={fadeInVariant} className="absolute inset-0 z-20 select-none pointer-events-none" style={gpuLayer}>
                    <motion.div style={{ x: layer2X, y: layer2Y, ...gpuLayer }} className="absolute inset-0 will-change-transform">
                        <div className="absolute right-[8vw] bottom-[2vh] md:bottom-[7vh] lg:bottom-[0vh] w-[60vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] min-w-[300px] max-w-[800px] h-[50vh] md:h-[65vh] lg:h-[75vh]">
                            <RightHeroSvg className="w-full h-full object-contain object-bottom-right" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* 6. Zoe Text (SVG Handwriting Animation) & Interactive CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute inset-0 z-50 flex flex-col items-center justify-center select-none pb-32 md:pb-8 lg:pb-12"
                >
                    <motion.div className="w-full max-w-[280px] md:max-w-[450px] px-4 md:px-6 flex flex-col items-center pointer-events-none drop-shadow-xl mt-[-10vh] md:mt-0">
                        <ZoeSVG variant="jesus-red" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-6 flex flex-col items-center pointer-events-auto text-center px-4"
                    >
                        <p className="mb-5 text-xl md:text-2xl font-medium tracking-tighter-editorial-relaxed text-[#3c2a21] drop-shadow-sm max-w-sm md:max-w-xl leading-snug">
                            Walk with Jesus.
                        </p>
                        <a
                            href="#waitlist"
                            className="rounded-full bg-[#7a2332] px-8 py-3 md:px-10 md:py-4 text-sm md:text-[15px] font-bold text-white shadow-xl transition-transform hover:scale-105"
                        >
                            Join the waitlist
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Gradient fade into the dark ThesisSection */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e1c1a] to-transparent z-[60] pointer-events-none" />
        </section>
    );
}
