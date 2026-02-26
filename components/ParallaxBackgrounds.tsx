"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ParallaxBackgrounds() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress across the entirety of the long page
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fade in the misty forest as we leave the hero section
    const forestOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8]);
    // Slowly scale down the background over the whole page scroll
    const forestScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none -z-10 h-full w-full">
            {/* Sticky container that holds the background image in place while scrolling */}
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-sky-50 to-white">
                <motion.div
                    style={{ opacity: forestOpacity, scale: forestScale }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Soft haze overlay matching the hero */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-sky-50/20 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
