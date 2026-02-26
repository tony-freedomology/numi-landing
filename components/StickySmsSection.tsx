"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SmsAnimation from "./SmsAnimation";

export default function StickySmsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate opacity for the 3 distinct narrative steps
    // Make sure they overlap seamlessly so there is NEVER a void.
    // Step 1 should be fully visible from the very start (0) so there is no dead zone as it scrolls into view.
    const step1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
    const step1Y = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -30]);

    const step2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [0, 1, 1, 0]);
    const step2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [30, 0, 0, -30]);

    const step3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 1]);
    const step3Y = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [30, 0, 0, 0]);


    return (
        <section ref={containerRef} className="relative w-full h-[300vh] z-10" style={{ pointerEvents: 'none' }}>

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ pointerEvents: 'auto' }}>
                <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Side: The Narrative Text */}
                    <div className="relative h-[400px] w-full flex flex-col justify-center">

                        <motion.div
                            style={{ opacity: step1Opacity, y: step1Y }}
                            className="absolute inset-0 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter-editorial text-slate-900 mb-6 drop-shadow-md">No App Required.</h2>
                            <p className="text-xl text-slate-800 leading-relaxed font-medium drop-shadow-sm">
                                Zoe lives right in your messages. No accounts to create, no passwords to remember, no new habits to build. Just text Zoe when you need a companion.
                            </p>
                        </motion.div>

                        <motion.div
                            style={{ opacity: step2Opacity, y: step2Y }}
                            className="absolute inset-0 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter-editorial text-slate-900 mb-6 drop-shadow-md">Memory-Driven.</h2>
                            <p className="text-xl text-slate-800 leading-relaxed font-medium drop-shadow-sm">
                                Zoe remembers your prayers, your struggles, and your journey. Every conversation builds upon the last, creating a deeply personal and continuous walk of faith.
                            </p>
                        </motion.div>

                        <motion.div
                            style={{ opacity: step3Opacity, y: step3Y }}
                            className="absolute inset-0 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter-editorial text-slate-900 mb-6 drop-shadow-md">A Community of Believers.</h2>
                            <p className="text-xl text-slate-800 leading-relaxed font-medium drop-shadow-sm">
                                You are never alone. Join a growing community sharing their testimonies, praises, and prayer requests.
                            </p>
                        </motion.div>

                    </div>

                    {/* Right Side: The Phone UI Graphic */}
                    <div className="relative h-[720px] w-full max-w-[400px] mx-auto hidden lg:flex items-center justify-center">
                        <SmsAnimation />
                    </div>

                </div>
            </div>
        </section>
    );
}
