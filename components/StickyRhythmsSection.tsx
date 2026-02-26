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


    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] z-10">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* The Ethereal Painted Backgrounds (Spot illustrations blown up) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full pointer-events-none -z-10 bg-[#e0f2fe]/20">

                    {/* 1. Morning */}
                    <motion.div style={{ opacity: dawnOpacity }} className="absolute inset-0 flex items-center justify-center">
                        <Image src="/assets/illustrations/morning.webp" alt="Morning Dawn" fill className="object-cover opacity-60 mix-blend-multiply" />
                        {/* Soft vignette to blend edges */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FBFA] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] via-transparent to-transparent" />
                    </motion.div>

                    {/* 2. Midday */}
                    <motion.div style={{ opacity: noonOpacity }} className="absolute inset-0 flex items-center justify-center">
                        <Image src="/assets/illustrations/midday.webp" alt="Midday Sun" fill className="object-cover opacity-60 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FBFA] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] via-transparent to-transparent" />
                    </motion.div>

                    {/* 3. Evening */}
                    <motion.div style={{ opacity: duskOpacity }} className="absolute inset-0 flex items-center justify-center">
                        <Image src="/assets/illustrations/dusk.webp" alt="Evening Dusk" fill className="object-cover opacity-60 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FBFA] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] via-transparent to-transparent" />
                    </motion.div>

                </div>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex items-center justify-center">

                    {/* Diffuse glow to ensure readability against complex landscapes */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        <div className="w-[800px] h-[400px] bg-white/40 blur-[100px] rounded-[100%]" />
                        <div className="absolute w-[400px] h-[200px] bg-white/60 blur-[60px] rounded-[100%]" />
                    </div>

                    {/* 1. Morning Text */}
                    <motion.div style={{ opacity: dawnOpacity, scale: textDawnScale, filter: textDawnBlur }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-4">Dawn</span>
                        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tighter-editorial text-slate-900 mb-6 font-serif">Begin the day<br />in peace.</h2>
                        <p className="text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            A gentle reminder to pause and reflect before the noise of the world begins. Start your morning with a clear mind and a quiet heart.
                        </p>
                    </motion.div>

                    {/* 2. Midday Text */}
                    <motion.div style={{ opacity: noonOpacity, scale: textNoonScale, filter: textNoonBlur }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-misty-green-700 font-semibold tracking-widest uppercase text-sm mb-4">Noon</span>
                        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tighter-editorial text-slate-900 mb-6 font-serif">Find stillness<br />in the chaos.</h2>
                        <p className="text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            When the day gets overwhelming, a quick message from Zoe helps ground you, returning your focus to what truly matters.
                        </p>
                    </motion.div>

                    {/* 3. Evening Text */}
                    <motion.div style={{ opacity: duskOpacity, scale: textDuskScale, filter: textDuskBlur }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <span className="text-indigo-900 font-semibold tracking-widest uppercase text-sm mb-4">Dusk</span>
                        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tighter-editorial text-slate-900 mb-6 font-serif">Rest in His<br />presence.</h2>
                        <p className="text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
                            Release the burdens of the day. A closing prayer and reflection to help you sleep with a light and thankful spirit.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
