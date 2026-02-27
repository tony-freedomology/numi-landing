"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

export default function ThesisSection() {
    return (
        <section className="w-full bg-misty-green-950 text-white py-24 md:py-40 px-4 md:px-6 relative flex justify-center border-t border-misty-green-900 border-b">
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
                        "I have come that they may have life, and have it to the full."
                    </h2>
                    <p className="text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium">
                        The Greek word Jesus uses here is <span className="italic text-white">Zoe</span>. He's not talking about prosperity gospel, and he's not just talking about getting into heaven someday. <span className="text-white">Zoe</span> means an abundant, flourishing, fully integrated life that begins right now.
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
                            Most of us desperately want to walk that path. We genuinely intend to follow God. But the weight of modern life—the endless emails, the social media scroll, the sheer velocity of our days—makes it incredibly hard to hear Him amidst the distraction.
                        </p>
                        <p>
                            So we settle for a compromise. We carve out 15 minutes for a morning devotional. It becomes a segmented checkbox—a piece of faith we complete early in the day to reassure ourselves we're "good Christians," before we close the book and let the secular noise take over the remaining 23 hours.
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
                        We don't need a daily devotional. We need day-long devotion.
                    </h3>
                    <p className="text-xl md:text-2xl text-misty-green-100 leading-relaxed font-medium mb-12">
                        What we actually want is a fully integrated life. We want to notice where God is actively working, to remember Him often, and to actually walk the path Jesus invited us to walk.
                    </p>

                    <div className="p-8 md:p-12 bg-[#0E1513] border border-misty-green-800/60 rounded-[2rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-misty-green-800/10 to-transparent"></div>
                        <div className="relative z-10">
                            <p className="text-2xl md:text-4xl font-semibold tracking-tighter-editorial text-white mb-4">
                                That is exactly why Zoe exists.
                            </p>
                            <p className="text-lg md:text-[22px] text-misty-green-200 leading-relaxed">
                                Not another app to feed your distraction, but a simple, quiet tool designed specifically to bring you back to what matters, all day long.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
