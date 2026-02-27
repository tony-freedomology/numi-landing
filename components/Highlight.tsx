"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useId } from "react";

export function Highlight({ children, type = "underline", color = "text-brand-jade", scrollOffset = ["start 85%", "start 45%"] }: { children: React.ReactNode, type?: "underline" | "circle" | "scratch" | "checkbox" | "spiky", color?: string, scrollOffset?: [string, string] }) {
    const ref = useRef<HTMLSpanElement>(null);
    const id = useId();
    const { scrollYProgress } = useScroll({
        target: ref,
        // Begin drawing when the element is 85% down the viewport, finish drawing when it reaches 45% (middle-ish)
        offset: scrollOffset as any
    });

    // Single path animations
    const pathLengthValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
    const instantOpacity = useTransform(scrollYProgress, (v: number | string) => Number(v) > 0 ? 1 : 0);

    // Checkbox multi-path animations (done sequentially as user scrolls)
    const boxPathLengthValue = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
    const boxOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const cross1PathLengthValue = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const cross1Opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

    const cross2PathLengthValue = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);
    const cross2Opacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);

    // Scale container differently for breathing room on circles and checkboxes
    let scaleClass = "";
    if (type === "circle") scaleClass = "scale-[1.25]";
    if (type === "checkbox") scaleClass = "scale-[1.15]";
    if (type === "spiky") scaleClass = "scale-[1.35]";

    return (
        <span ref={ref} className="relative inline-block whitespace-nowrap px-1">
            <span className="relative z-10">{children}</span>
            <svg className={`absolute inset-0 w-full h-full pointer-events-none ${color} overflow-visible ${scaleClass}`} preserveAspectRatio="none" viewBox="0 0 100 100" style={{ zIndex: 0 }}>
                {type === "underline" && (
                    <motion.path
                        d="M -2 90 Q 50 105 102 90"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        style={{ pathLength: pathLengthValue, opacity }}
                    />
                )}
                {type === "circle" && (
                    <>
                        <defs>
                            <mask id={`mask-circle-${id.replace(/:/g, '')}`}>
                                <motion.path
                                    d="M 50 10 C 85 5 95 25 90 65 C 80 95 20 95 10 65 C 5 25 15 5 50 10"
                                    stroke="white"
                                    strokeWidth="40"
                                    fill="none"
                                    strokeLinecap="round"
                                    style={{ pathLength: pathLengthValue, opacity }}
                                />
                            </mask>
                        </defs>
                        <path
                            d="M 50 10 C 85 5 95 25 90 65 C 80 95 20 95 10 65 C 5 25 15 5 50 10"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            mask={`url(#mask-circle-${id.replace(/:/g, '')})`}
                        />
                    </>
                )}
                {type === "spiky" && (
                    <>
                        <defs>
                            <mask id={`mask-spiky-${id.replace(/:/g, '')}`}>
                                <motion.path
                                    d="M 20 30 L 30 15 L 40 25 L 55 5 L 65 25 L 75 10 L 80 35 L 90 50 L 85 65 L 85 85 L 70 75 L 55 95 L 40 80 L 25 100 L 20 80 L 5 70 L 15 50 L 5 35 Z"
                                    stroke="white"
                                    strokeWidth="40"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ pathLength: pathLengthValue }}
                                />
                            </mask>
                        </defs>
                        <motion.path
                            d="M 20 30 L 30 15 L 40 25 L 55 5 L 65 25 L 75 10 L 80 35 L 90 50 L 85 65 L 85 85 L 70 75 L 55 95 L 40 80 L 25 100 L 20 80 L 5 70 L 15 50 L 5 35 Z"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            mask={`url(#mask-spiky-${id.replace(/:/g, '')})`}
                            style={{ opacity: instantOpacity }}
                        />
                    </>
                )}
                {type === "scratch" && (
                    <motion.path
                        d="M -5 60 L 20 40 L 40 70 L 60 30 L 80 65 L 105 45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ pathLength: pathLengthValue, opacity }}
                    />
                )}
                {type === "checkbox" && (
                    <>
                        {/* The Box */}
                        <motion.path
                            d="M 12 10 Q 50 2 88 10 Q 90 50 88 90 Q 50 98 12 90 Q 10 50 12 10"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ pathLength: boxPathLengthValue, opacity: boxOpacity }}
                        />
                        {/* The Cross 1 */}
                        <motion.path
                            d="M 15 5 Q 50 50 85 95"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            style={{ pathLength: cross1PathLengthValue, opacity: cross1Opacity }}
                        />
                        {/* The Cross 2 */}
                        <motion.path
                            d="M 85 5 Q 50 50 15 95"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            style={{ pathLength: cross2PathLengthValue, opacity: cross2Opacity }}
                        />
                    </>
                )}
            </svg>
        </span>
    );
}
