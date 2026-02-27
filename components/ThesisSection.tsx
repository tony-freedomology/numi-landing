"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

function Highlight({ children, type = "underline", color = "text-brand-jade", delay = 0.5 }: { children: React.ReactNode, type?: "underline" | "circle" | "scratch", color?: string, delay?: number }) {
    return (
        <span className="relative inline-block whitespace-nowrap px-1">
            <span className="relative z-10">{children}</span>
            <svg className={`absolute inset-0 w-full h-full pointer-events-none ${color} overflow-visible`} preserveAspectRatio="none" viewBox="0 0 100 100" style={{ zIndex: 0 }}>
                {type === "underline" && (
                    <motion.path
                        d="M -2 90 Q 50 105 102 90"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay, ease: "easeOut" }}
                    />
                )}
                {type === "circle" && (
                    <motion.path
                        d="M 50 0 C 90 -5 105 30 95 70 C 80 110 20 105 5 70 C -10 30 15 -5 60 5"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.0, delay, ease: "easeOut" }}
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
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay, ease: "easeOut" }}
                    />
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
                        "I have come that they may have life and have it <Highlight type="underline" color="text-brand-jade" delay={0.8}>to the full.</Highlight>"
                    </h2>
                    <p className="text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium">
                        The Greek word Jesus uses for life here is <Highlight type="circle" color="text-amber-400" delay={1.2}><span className="italic text-white">Zoe</span></Highlight>. <span className="text-white">Zoe</span> means an abundant, flourishing, fully integrated life. And he's not talking about prosperity gospel. And he's not talking about just getting into heaven someday. He's talking about a kind of life that begins right now.
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
                            So we try to set up a practice. We set aside 15 minutes for a "quiet time"—our morning devotional. We mean well, but after a while it becomes like a <Highlight type="scratch" color="text-rose-500" delay={0.8}>checkbox.</Highlight> A faith-related task we try to knock out early in the day so we can reassure ourselves we're "good Christians," before we close the book and let the noise of the world take over the rest of our day.
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
                        We don't need a daily devotional. We need <Highlight type="underline" color="text-brand-cyan" delay={0.8}>day-long devotion.</Highlight>
                    </h3>
                    <p className="text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium mb-12">
                        What we actually want is a <Highlight type="circle" color="text-brand-cyan" delay={1.4}>fully integrated life.</Highlight> We want to notice where God is actively working, to remember Him often, and to actually walk the path Jesus invited us to walk.
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
