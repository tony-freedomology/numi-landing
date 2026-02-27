"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

function Highlight({ children, type = "underline", color = "text-brand-jade", scrollOffset = ["start 85%", "start 45%"] }: { children: React.ReactNode, type?: "underline" | "circle" | "scratch" | "checkbox", color?: string, scrollOffset?: [string, string] }) {
    const ref = useRef<HTMLSpanElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // Begin drawing when the element is 85% down the viewport, finish drawing when it reaches 45% (middle-ish)
        offset: scrollOffset as any
    });

    // Single path animations
    const dashoffset = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    // Checkbox multi-path animations (done sequentially as user scrolls)
    const boxDashoffset = useTransform(scrollYProgress, [0, 0.6], [100, 0]);
    const boxOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const cross1Dashoffset = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);
    const cross1Opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

    const cross2Dashoffset = useTransform(scrollYProgress, [0.8, 1.0], [100, 0]);
    const cross2Opacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);

    // Scale container differently for breathing room on circles and checkboxes
    let scaleClass = "";
    if (type === "circle") scaleClass = "scale-[1.25]";
    if (type === "checkbox") scaleClass = "scale-[1.15]";

    return (
        <span ref={ref} className="relative inline-block whitespace-nowrap px-1">
            <span className="relative z-10">{children}</span>
            <svg className={`absolute inset-0 w-full h-full pointer-events-none ${color} overflow-visible ${scaleClass}`} preserveAspectRatio="none" viewBox="0 0 100 100" style={{ zIndex: 0 }}>
                {type === "underline" && (
                    <motion.path
                        d="M -2 90 Q 50 105 102 90"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="100 100"
                        style={{ strokeDashoffset: dashoffset, opacity }}
                    />
                )}
                {type === "circle" && (
                    <motion.path
                        d="M 50 10 C 85 5 95 25 90 65 C 80 95 20 95 10 65 C 5 25 15 5 50 10"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="100 100"
                        style={{ strokeDashoffset: dashoffset, opacity }}
                    />
                )}
                {type === "scratch" && (
                    <motion.path
                        d="M -5 60 L 20 40 L 40 70 L 60 30 L 80 65 L 105 45"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="100"
                        strokeDasharray="100 100"
                        style={{ strokeDashoffset: dashoffset, opacity }}
                    />
                )}
                {type === "checkbox" && (
                    <>
                        {/* The Box */}
                        <motion.path
                            d="M 2 10 Q 50 2 98 10 Q 100 50 98 90 Q 50 98 2 90 Q 0 50 2 10"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            pathLength="100"
                            strokeDasharray="100 100"
                            style={{ strokeDashoffset: boxDashoffset, opacity: boxOpacity }}
                        />
                        {/* The Cross 1 */}
                        <motion.path
                            d="M 5 5 Q 50 50 95 95"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="100 100"
                            style={{ strokeDashoffset: cross1Dashoffset, opacity: cross1Opacity }}
                        />
                        {/* The Cross 2 */}
                        <motion.path
                            d="M 95 5 Q 50 50 5 95"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="100 100"
                            style={{ strokeDashoffset: cross2Dashoffset, opacity: cross2Opacity }}
                        />
                    </>
                )}
            </svg>
        </span>
    );
}

export default function ThesisSection() {
    return (
        <section className="w-full bg-misty-green-950 text-white py-24 md:py-40 px-4 md:px-6 relative flex justify-center border-b border-misty-green-900">
            <div className="max-w-[900px] w-full flex flex-col gap-24 md:gap-32">

                {/* 1. The Promise */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="max-w-3xl"
                >
                    <p className="text-brand-jade font-semibold tracking-widest uppercase text-sm mb-6">The Promise</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter-editorial text-white mb-8 leading-tight">
                        "I have come that they may have life and have it to the <Highlight type="underline" color="text-brand-jade">full."</Highlight>
                    </h2>
                    <p className="text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium">
                        The Greek word Jesus uses for life here is <Highlight type="circle" color="text-amber-400" scrollOffset={["start 65%", "start 35%"]}><span className="italic text-white">Zoe</span></Highlight>. <span className="text-white">Zoe</span> means an abundant, flourishing, fully integrated life. And he's not talking about prosperity gospel. And he's not talking about just getting into heaven someday. He's talking about life <span className="italic text-white">with</span> God. It's what you were made for and that's something that can start right now.
                    </p>
                </motion.div>

                {/* 2. The Problem / Agitation */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="max-w-3xl border-l-[3px] pl-6 md:pl-10 border-misty-green-800 ml-4 md:ml-12"
                >
                    <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-6">The Reality</p>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter-editorial text-white mb-6 leading-tight">
                        Good intentions aren't enough when the world is this loud.
                    </h3>
                    <div className="space-y-6 text-lg md:text-[22px] text-misty-green-200 leading-relaxed">
                        <p>
                            I'm sure you've felt this. Most of us desperately want to walk the path that Jesus invites us to. We genuinely intend to follow God, but the busyness and noise of life in 2026—the endless emails, the social media scroll, and the pace of our days—all work together to make it incredibly hard to hear him in the distraction.
                        </p>
                        <p>
                            So we try to set up a practice. We set aside 15 minutes for a "quiet time"—our morning devotional. We mean well, but after a while it becomes like a <Highlight type="checkbox" color="text-rose-500">checkbox.</Highlight> A faith-related task we try to knock out early in the day so we can reassure ourselves we're "good Christians," before we close the book and let the noise of the world take over the rest of our day.
                        </p>
                    </div>
                </motion.div>

                {/* 3. The Solution */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="max-w-3xl mr-auto mt-4"
                >
                    <p className="text-brand-cyan font-semibold tracking-widest uppercase text-sm mb-6">The Answer</p>
                    <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter-editorial text-white mb-8 leading-tight">
                        We don't need a daily devotional. We need <Highlight type="underline" color="text-brand-cyan">day-long</Highlight> devotion.
                    </h3>
                    <p className="text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium mb-12">
                        What we actually want is a <span className="-translate-x-2 inline-block"><Highlight type="circle" color="text-brand-cyan">fully integrated life.</Highlight></span> We want to notice where God is actively working, to remember Him often, and to actually walk the path Jesus invited us to walk.
                    </p>

                    <div className="p-8 md:p-12 bg-[#0E1513] border border-misty-green-800/60 rounded-[2rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-misty-green-800/10 to-transparent"></div>
                        <div className="relative z-10">
                            <p className="text-2xl md:text-4xl font-semibold tracking-tighter-editorial text-white mb-4">
                                That's exactly why we built Zoe.
                            </p>
                            <p className="text-lg md:text-[22px] text-misty-green-200 leading-relaxed">
                                It's not another app to feed your distraction, but a simple, quiet tool designed specifically to bring you back to what matters, all day long.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
