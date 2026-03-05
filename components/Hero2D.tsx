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

interface Hero2DProps {
    variant?: "default" | "jesus-red" | "emerald-uni" | "emerald-uni";
    hideOverlayContent?: boolean;
    fullHeight?: boolean;
    layout?: "full" | "split";
}

export default function Hero2D({ variant = "default", hideOverlayContent = false, fullHeight = false, layout = "full" }: Hero2DProps = {}) {
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
            className={`relative w-full overflow-hidden ${variant === "emerald-uni" ? "bg-white min-h-[100vh]" : variant === "jesus-red" ? "bg-[#e0f2fe] min-h-[100vh]" : `bg-[#e0f2fe] ${fullHeight ? "h-full min-h-full max-h-none" : "h-[85vh] min-h-[600px] max-h-[900px]"}`}`}
        >
            {variant === "emerald-uni" ? (
                // 1. Photographic campus background for emerald-uni variant
                <div className="absolute inset-0 z-0" style={gpuLayer}>
                    {/* Mobile: portrait image */}
                    <Image
                        src="/assets/hero/emerald-campus.jpg"
                        alt="University Campus View"
                        fill
                        priority
                        className="object-cover object-center md:hidden"
                        quality={90}
                    />
                    {/* Desktop: wide cinematic image */}
                    <Image
                        src="/assets/hero/emerald-campus-desktop.jpg"
                        alt="University Campus View"
                        fill
                        priority
                        className="object-cover object-center hidden md:block"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
                    {/* Radial vignette to darken the center where text/SVG sit */}
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)' }} />
                </div>
            ) : variant === "jesus-red" ? (
                // 1. Elegant Parchment Background for jesus-red variant
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
            ) : (
                // 1. Base Sky — static, loads instantly
                <div className="absolute inset-0 z-0" style={gpuLayer}>
                    <Image
                        src="/assets/hero/sky.webp"
                        alt="Sky Background"
                        fill
                        priority
                        className="object-cover object-top saturate-[1.3] contrast-[1.1]"
                        quality={90}
                    />
                </div>
            )}

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="absolute inset-0 w-full h-full"
                style={variant === "jesus-red" || variant === "emerald-uni" ? undefined : gpuLayer}
            >
                {variant !== "jesus-red" && variant !== "emerald-uni" && (
                    <>
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
                                <div className={`absolute -inset-[15%] max-md:scale-[0.85] max-md:origin-[30%_top] transition-transform duration-1000 ${layout === "split" ? "translate-x-[10%]" : ""}`}>
                                    <motion.div
                                        style={{ x: bgX, y: bgY, ...gpuLayer }}
                                        className="absolute inset-0 will-change-transform"
                                        animate={{ x: ["-1%", "1.5%"] }}
                                        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    >
                                        <Image src="/assets/hero/cloud-1.webp" alt="Cloud 1" fill priority className={`object-cover saturate-[1.2] contrast-[1.1] ${layout === "split" ? "object-[30%_top]" : "object-top"}`} />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Cloud 2 */}
                            <motion.div
                                initial={{ x: "15%", opacity: 0 }}
                                animate={{ x: "0%", opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
                                className="absolute inset-0"
                                style={gpuLayer}
                            >
                                <div className={`absolute -inset-[15%] max-md:scale-[0.85] transition-transform duration-1000 ${layout === "split" ? "-translate-x-[10%]" : ""}`}>
                                    <motion.div
                                        style={{ x: bgX, y: bgY, ...gpuLayer }}
                                        className="absolute inset-0 will-change-transform"
                                        animate={{ x: ["-1.5%", "1%"] }}
                                        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
                                    >
                                        <Image src="/assets/hero/cloud-2.webp" alt="Cloud 2" fill priority className={`object-cover saturate-[1.2] contrast-[1.1] ${layout === "split" ? "object-[70%_top]" : "object-top"}`} />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Cloud 3 */}
                            <motion.div
                                initial={{ x: "15%", opacity: 0 }}
                                animate={{ x: "0%", opacity: 1 }}
                                transition={{ duration: 1.8, ease: "easeOut", delay: 0 }}
                                className="absolute inset-0"
                                style={gpuLayer}
                            >
                                <div className={`absolute -inset-[15%] max-md:scale-[0.85] transition-transform duration-1000 ${layout === "split" ? "translate-x-[5%]" : ""}`}>
                                    <motion.div
                                        style={{ x: bgX, y: bgY, ...gpuLayer }}
                                        className="absolute inset-0 will-change-transform"
                                        animate={{ x: ["-2%", "2%"] }}
                                        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                                    >
                                        <Image src="/assets/hero/cloud-3.webp" alt="Cloud 3" fill priority className={`object-cover saturate-[1.2] contrast-[1.1] ${layout === "split" ? "object-[40%_top]" : "object-top"}`} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. Midground: Hills, Man, and Cross ─────────────────── */}
                        <motion.div variants={popUpVariant} className="absolute inset-0 z-20 select-none pointer-events-none" style={gpuLayer}>
                            <div className="absolute -inset-[15%] max-md:scale-[0.85] max-md:origin-bottom">
                                <motion.div style={{ x: midX, y: midY, ...gpuLayer }} className="absolute inset-0 will-change-transform">
                                    <Image
                                        src="/assets/hero/hills-man.webp"
                                        alt="Midground Hills"
                                        fill
                                        priority
                                        className={`object-cover saturate-[1.3] contrast-[1.15] brightness-[1.05] ${layout === "split" ? "object-[70%_bottom]" : "object-bottom"}`}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* 4. Foreground Left: Tree ─────────────────────────────── */}
                        <motion.div variants={slideInLeftSpringVariant} className="absolute inset-0 z-30 select-none pointer-events-none" style={gpuLayer}>
                            <div className={`absolute -inset-[15%] max-md:scale-[0.85] max-md:-translate-x-[5%] max-md:origin-bottom-left transition-transform duration-1000 ${layout === "split" ? "translate-x-[15%]" : ""}`}>
                                <motion.div
                                    style={{ x: fgX, y: fgY, ...gpuLayer }}
                                    className="absolute inset-0 will-change-transform"
                                >
                                    <Image
                                        src="/assets/hero/tree-left.webp"
                                        alt="Foreground Tree"
                                        fill
                                        priority
                                        className={`object-cover saturate-[1.4] contrast-[1.1] ${layout === "split" ? "object-[20%_bottom]" : "object-bottom"}`}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* 5. Foreground Right: Ferns ───────────────────────────── */}
                        <motion.div variants={popUpVariant} className="absolute inset-0 z-40 select-none pointer-events-none" style={gpuLayer}>
                            <div className={`absolute -inset-[15%] max-md:scale-[0.85] max-md:translate-x-[5%] max-md:origin-bottom-right transition-transform duration-1000 ${layout === "split" ? "-translate-x-[15%]" : ""}`}>
                                <motion.div
                                    style={{ x: fgX, y: fgY, ...gpuLayer }}
                                    className="absolute inset-0 will-change-transform"
                                    animate={{ rotate: [-1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                >
                                    <Image
                                        src="/assets/hero/ferns-right.webp"
                                        alt="Foreground Ferns"
                                        fill
                                        priority
                                        className={`object-cover saturate-[1.4] contrast-[1.1] ${layout === "split" ? "object-[80%_bottom]" : "object-bottom"}`}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}

                {/* 6. Zoe Text (SVG Handwriting Animation) & Interactive CTA */}
                {!hideOverlayContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute inset-0 z-50 flex flex-col items-center justify-center select-none pb-0 md:pb-8 lg:pb-12"
                        style={variant === "jesus-red" || variant === "emerald-uni" ? undefined : gpuLayer}
                    >
                        <motion.div style={{ x: variant === "jesus-red" || variant === "emerald-uni" ? 0 : midX, y: variant === "jesus-red" || variant === "emerald-uni" ? 0 : midY, ...gpuLayer }} className="w-full max-w-[280px] md:max-w-[450px] px-4 md:px-6 flex flex-col items-center pointer-events-none drop-shadow-xl mt-12 md:mt-0">
                            <ZoeSVG variant={variant} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5, duration: 1 }}
                            className="mt-6 flex flex-col items-center pointer-events-auto text-center px-4"
                            style={{ x: variant === "jesus-red" ? 0 : midX, y: variant === "jesus-red" || variant === "emerald-uni" ? 0 : midY, ...gpuLayer }}
                        >
                            <h1 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter-editorial text-slate-900 drop-shadow-sm max-w-sm md:max-w-xl leading-snug">
                                Walk with Jesus.
                            </h1>
                            <p className="mb-6 text-xl md:text-2xl font-medium tracking-tight text-slate-800 drop-shadow-sm max-w-sm md:max-w-xl leading-snug opacity-90">
                                What if you quit living in two worlds?
                            </p>
                            <a
                                href="#waitlist"
                                className="rounded-full bg-white px-8 py-4 md:px-10 md:py-4 text-sm md:text-base font-bold text-slate-900 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-transform hover:scale-105"
                            >
                                Join The Walk
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>

            {/* Gradient fade into the dark ThesisSection */}
            {variant !== "jesus-red" && variant !== "emerald-uni" && (
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-misty-green-950 to-transparent z-[60] pointer-events-none" style={gpuLayer} />
            )}
            {variant === "jesus-red" && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e1c1a] to-transparent z-[60] pointer-events-none" />
            )}
            {variant === "emerald-uni" && (
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f1f1a] to-transparent z-[60] pointer-events-none" style={gpuLayer} />
            )}
        </section>
    );
}
