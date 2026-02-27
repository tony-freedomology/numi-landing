"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Highlight } from './Highlight';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

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
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="text-brand-jade font-semibold tracking-widest uppercase text-sm mb-6">The Promise</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter-editorial text-white mb-8 font-bold leading-[1.1]">
                        "I have come that they may have life and have it to the <Highlight type="underline" color="text-brand-jade">full."</Highlight>
                    </h2>
                    <div className="space-y-6 text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium">
                        <p>
                            The Greek word Jesus uses for life here is <Highlight type="circle" color="text-amber-400" scrollOffset={["start 65%", "start 35%"]}><span className="italic text-white">Zoe</span></Highlight>. <span className="text-white">Zoe</span> means an abundant life. Vibrant. Active. Eternal.
                        </p>
                        <p>
                            When Jesus uses this word, He’s not talking about prosperity gospel, and he's not talking about just getting into heaven someday.
                        </p>
                        <p>
                            He’s talking about life the way it was meant to be - flourishing and fully integrated. He's talking about life <span className="italic text-white">with</span> God. It's what you were made for and it’s something that can start right now.
                        </p>
                    </div>
                </motion.div>

                {/* 2. The Problem / Agitation */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-6">The Reality</p>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter-editorial text-white mb-6 leading-tight">
                        Good intentions aren't enough when the world is this loud.
                    </h3>
                    <div className="space-y-6 text-lg md:text-[22px] text-misty-green-200 leading-relaxed">
                        <p>
                            I'm sure you've felt this. Most of us desperately want to walk the path that Jesus invites us to. We genuinely intend to follow God, but the <Highlight type="spiky" color="text-rose-500" scrollOffset={["start 50%", "start 25%"]}>busyness and noise</Highlight> of life in 2026—the endless emails, the social media scroll, and the pace of our days—all work together to make it incredibly hard to hear him in the distraction.
                        </p>
                        <p>
                            So we try to set up a practice. We set aside 15 minutes for a "quiet time"—our morning devotional. We mean well, but after a while it becomes like a <Highlight type="checkbox" color="text-rose-500" scrollOffset={["start 55%", "start 15%"]}>checkbox.</Highlight> A faith-related task we try to knock out early in the day so we can reassure ourselves we're "good Christians," before we close the book and let the noise of the world take over the rest of our day.
                        </p>
                    </div>
                </motion.div>

                {/* 3. The Solution */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="max-w-3xl mx-auto mt-4 text-center"
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
