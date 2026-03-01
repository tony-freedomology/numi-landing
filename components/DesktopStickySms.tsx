"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

function ScrollBubble({
    sender,
    text,
    scrollYProgress,
    fadeInRange
}: {
    sender: "user" | "zoe",
    text: React.ReactNode,
    scrollYProgress: MotionValue<number>,
    fadeInRange: [number, number]
}) {
    const isUser = sender === "user";
    // Bubble fades in and slides up seamlessly precisely as the user scrubs through its designated scroll range
    const opacity = useTransform(scrollYProgress, fadeInRange, [0, 1]);
    const y = useTransform(scrollYProgress, fadeInRange, [30, 0]);

    return (
        <motion.div
            style={{ opacity, y }}
            className={clsx(
                "max-w-[80%] md:max-w-[85%] px-4 py-3 text-[15px] font-medium leading-[1.4] shadow-sm tracking-tight",
                isUser ? "bg-[#007AFF] text-white self-end rounded-[18px] rounded-br-[4px]"
                    : "bg-[#E9E9EB] text-[#111] self-start rounded-[18px] rounded-bl-[4px]"
            )}
        >
            {text}
        </motion.div>
    );
}

function ScrollTimestamp({
    text,
    scrollYProgress,
    fadeInRange
}: {
    text: string,
    scrollYProgress: MotionValue<number>,
    fadeInRange: [number, number]
}) {
    const opacity = useTransform(scrollYProgress, fadeInRange, [0, 1]);
    return (
        <motion.div
            style={{ opacity }}
            className="text-[11px] font-medium text-slate-500 text-center mt-6 mb-2"
        >
            {text}
        </motion.div>
    );
}

export default function DesktopStickySms() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ─────────────────────────────────────────────────────────────────
    // 500vh MASTER TIMELINE:
    // Scroll distance is extended to make transitions 1:1 with natural swipe speed.
    // 
    // 0.00 -> 0.15 : Phase 1 read
    // 0.15 -> 0.35 : Transition 1: Slide up to Phase 2 (takes 0.20 = 100vh = perfect normal scrolling speed)
    // 0.35 -> 0.48 : Phase 2 read texts
    // 0.49 -> 0.54 : Text slides up to make room
    // 0.52 -> 0.56 : Mobile Card 2 fades & slides to exact 50% screen center
    // 0.56 -> 0.65 : Mobile Card 2 HANGS at center
    // 0.65 -> 0.85 : Transition 2: Fling off top (takes 0.20 = 100vh = perfect normal scrolling speed)
    // 0.85 -> 0.92 : Phase 3 read texts
    // 0.93 -> 0.97 : Text slides up, Card 3 moves to exact 50% screen center
    // 0.97 -> 1.00 : Card 3 HANGS at center
    // ─────────────────────────────────────────────────────────────────

    const mainY = useTransform(
        scrollYProgress,
        [0, 0.15, 0.35, 0.65, 0.85, 1],
        ["0%", "0%", "-33.3333%", "-33.3333%", "-66.6667%", "-66.6667%"]
    );

    // Fade Opacities & Transforms for the Desktop-Only Side Narrative Text
    const step1TitleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [1, 1, 1, 0]);
    const step1TitleY = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 0, 0, -50]);
    const step1BodyOpacity = useTransform(scrollYProgress, [0.10, 0.13, 0.15, 0.25], [0, 1, 1, 0]);
    const step1BodyY = useTransform(scrollYProgress, [0.10, 0.13, 0.15, 0.25], [15, 0, 0, -50]);

    const step2TitleOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.60, 0.70], [0, 1, 1, 0]);
    const step2TitleY = useTransform(scrollYProgress, [0.25, 0.35, 0.60, 0.70], [50, 0, 0, -50]);
    const step2BodyOpacity = useTransform(scrollYProgress, [0.52, 0.56, 0.60, 0.70], [0, 1, 1, 0]);
    const step2BodyY = useTransform(scrollYProgress, [0.52, 0.56, 0.60, 0.70], [15, 0, 0, -50]);

    const step3TitleOpacity = useTransform(scrollYProgress, [0.70, 0.85, 0.98, 1], [0, 1, 1, 1]);
    const step3TitleY = useTransform(scrollYProgress, [0.70, 0.85, 0.98, 1], [50, 0, 0, 0]);
    const step3BodyOpacity = useTransform(scrollYProgress, [0.93, 0.97, 0.98, 1], [0, 1, 1, 1]);
    const step3BodyY = useTransform(scrollYProgress, [0.93, 0.97, 0.98, 1], [15, 0, 0, 0]);

    // Narrative Content with formatting added to visually break up the text blocks
    const t1 = {
        title: "No App Required.",
        body: (
            <div className="space-y-4 text-[16px] md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-slate-600 font-medium tracking-tight">
                <p><strong className="text-slate-900 font-semibold">Zoe lives in your texts.</strong> No downloads, no logins, no learning curve.</p>
                <p>Just open your messages — the same place you talk to everyone else.</p>
            </div>
        )
    };

    const t2 = {
        title: "Two Questions.",
        body: (
            <div className="space-y-4 text-[16px] md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-slate-600 font-medium tracking-tight">
                <p><strong className="text-slate-900 font-semibold">Everything Zoe does points you back to two questions:</strong></p>
                <ul className="list-none space-y-2 text-slate-800 block md:-translate-y-1 md:my-0">
                    <li className="bg-emerald-100/60 text-emerald-900 rounded-lg px-4 py-1.5 w-fit font-semibold">What is God saying to you?</li>
                    <li className="bg-emerald-100/60 text-emerald-900 rounded-lg px-4 py-1.5 w-fit font-semibold">What are you going to do about it?</li>
                </ul>
                <p>Pick a book, set your pace, and Zoe delivers a daily reading enriched with original language, cultural context, and reflection prompts.</p>
                <p>Not a generic devotional, but a <strong className="text-slate-900 font-semibold">guided study built around you.</strong></p>
            </div>
        )
    };

    const t3 = {
        title: "Zoe Remembers.",
        body: (
            <div className="space-y-4 text-[16px] md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-slate-600 font-medium tracking-tight">
                <p>
                    <strong className="text-teal-900 bg-teal-200/60 px-1 py-0.5 rounded-sm font-semibold">Zoe remembers</strong>
                    {' '}what you're reading, what you're wrestling with, and what God seems to be doing in your life.
                </p>
                <p>Every conversation picks up where the last one left off — because transformation happens when someone helps you connect the dots across days, not just moments.</p>
            </div>
        )
    };

    return (
        <section ref={containerRef} className="relative w-full h-[500vh] z-20 bg-[#F9FAFB] block">

            {/* Sticky Container locks viewport to coordinate cinematic scroll physics for BOTH Desktop and Mobile */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-20 px-0 md:px-4">

                {/* DESKTOP NARRATIVE COPY (Left & Right of iPhone) */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-10 font-sans">
                    <div className="relative max-w-[1400px] mx-auto h-full w-full">

                        {/* PHASE 1 */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-auto">
                            {/* Left Side Title */}
                            <motion.div style={{ opacity: step1TitleOpacity, y: step1TitleY }} className="w-[50%] pr-[230px] lg:pr-[260px] flex justify-end">
                                <h2 className="text-4xl lg:text-6xl xl:text-7xl tracking-tighter-editorial text-right text-slate-900 font-bold leading-[1.05] drop-shadow-sm max-w-[450px]">
                                    {t1.title}
                                </h2>
                            </motion.div>
                            {/* Right Side Body */}
                            <motion.div style={{ opacity: step1BodyOpacity, y: step1BodyY }} className="w-[50%] pl-[230px] lg:pl-[260px] flex justify-start">
                                <div className="max-w-[480px]">
                                    {t1.body}
                                </div>
                            </motion.div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-auto">
                            <motion.div style={{ opacity: step2TitleOpacity, y: step2TitleY }} className="w-[50%] pr-[230px] lg:pr-[260px] flex justify-end">
                                <h2 className="text-4xl lg:text-6xl xl:text-7xl tracking-tighter-editorial text-right text-slate-900 font-bold leading-[1.05] drop-shadow-sm max-w-[450px]">
                                    {t2.title}
                                </h2>
                            </motion.div>
                            <motion.div style={{ opacity: step2BodyOpacity, y: step2BodyY }} className="w-[50%] pl-[230px] lg:pl-[260px] flex justify-start">
                                <div className="max-w-[480px]">
                                    {t2.body}
                                </div>
                            </motion.div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-auto">
                            <motion.div style={{ opacity: step3TitleOpacity, y: step3TitleY }} className="w-[50%] pr-[230px] lg:pr-[260px] flex justify-end">
                                <h2 className="text-4xl lg:text-6xl xl:text-7xl tracking-tighter-editorial text-right text-slate-900 font-bold leading-[1.05] drop-shadow-sm max-w-[480px]">
                                    {t3.title}
                                </h2>
                            </motion.div>
                            <motion.div style={{ opacity: step3BodyOpacity, y: step3BodyY }} className="w-[50%] pl-[230px] lg:pl-[260px] flex justify-start">
                                <div className="max-w-[480px]">
                                    {t3.body}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Simulated iPhone Device Frame on Desktop, Full Bleed on Mobile */}
                <div className="relative w-full h-full md:w-[400px] md:h-[80vh] md:max-h-[850px] md:rounded-[48px] md:border-[12px] border-slate-900 bg-[#F9FAFB] md:shadow-2xl overflow-hidden shrink-0 pointer-events-auto z-20">

                    {/* CONTINUOUS CHAT THREAD (Grouped into 3 fixed 1/3 height "Pages") */}
                    <motion.div
                        style={{ y: mainY }}
                        className="absolute top-0 inset-x-0 mx-auto w-full h-[300%] flex flex-col z-10 pointer-events-none"
                    >
                        {/* --- PAGE 1 --- */}
                        <div className="h-1/3 w-full flex flex-col justify-end pb-[4vh] md:pb-[8%] relative px-4 pointer-events-auto">
                            <div className="absolute top-[8vh] md:top-[10%] left-0 w-full px-4 flex flex-col gap-[6px]">
                                <ScrollTimestamp text="Yesterday, 9:14 PM" scrollYProgress={scrollYProgress} fadeInRange={[0.01, 0.03]} />
                                <ScrollBubble sender="user" text="hey can we go through one of the gospels together? i want to actually understand what jesus was like, not just the sunday school version" scrollYProgress={scrollYProgress} fadeInRange={[0.04, 0.06]} />
                                <ScrollBubble sender="zoe" text="mark. 100%. it reads like a documentary — no long speeches, just jesus doing things that blow people's minds. 16 chapters, we can do it in 2 weeks. what time works for morning readings?" scrollYProgress={scrollYProgress} fadeInRange={[0.07, 0.10]} />
                                <ScrollBubble sender="user" text="7am" scrollYProgress={scrollYProgress} fadeInRange={[0.11, 0.12]} />
                                <ScrollBubble sender="zoe" text="done. starting tomorrow 👋" scrollYProgress={scrollYProgress} fadeInRange={[0.13, 0.14]} />
                            </div>
                        </div>

                        {/* --- PAGE 2 --- */}
                        <div className="h-1/3 w-full flex flex-col justify-end pb-[8%] relative px-4 pointer-events-auto">
                            {/* Text Messages Wrapper shifted up to reclaim white space */}
                            <motion.div className="absolute top-[-2%] left-0 w-full px-4 flex flex-col gap-[6px]">
                                <ScrollTimestamp text="Today, 7:02 AM" scrollYProgress={scrollYProgress} fadeInRange={[0.35, 0.38]} />
                                <ScrollBubble sender="zoe" text="morning! mark 4:35-41 today. jesus and the disciples are crossing the sea of galilee when a massive storm hits. the disciples are losing it. jesus? asleep in the back of the boat. they wake him up and he just... tells the storm to stop. then turns to them: 'why are you so afraid?' read it. what hits you?"  scrollYProgress={scrollYProgress} fadeInRange={[0.40, 0.46]} />
                                <ScrollBubble sender="user" text="the part about him sleeping. i feel like i'm panicking about my business right now and he's just... asleep." scrollYProgress={scrollYProgress} fadeInRange={[0.48, 0.52]} />
                                <ScrollBubble sender="zoe" text="yeah that tension is the whole point of the story. he's not absent — he's so unbothered by the storm that he's napping. what does that say about what he thinks of the things you're panicking about? sit with that today." scrollYProgress={scrollYProgress} fadeInRange={[0.54, 0.60]} />
                            </motion.div>
                        </div>

                        {/* --- PAGE 3 --- */}
                        <div className="h-1/3 w-full flex flex-col justify-end pb-[8%] relative px-4 pointer-events-auto">
                            <motion.div className="absolute top-[-2%] left-0 w-full px-4 flex flex-col gap-[6px]">
                                <ScrollTimestamp text="1:24 PM" scrollYProgress={scrollYProgress} fadeInRange={[0.85, 0.86]} />
                                <ScrollBubble sender="zoe" text="hey — still thinking about that storm? sometimes the bravest thing is just not waking him up. he's got it." scrollYProgress={scrollYProgress} fadeInRange={[0.87, 0.89]} />

                                <ScrollTimestamp text="8:30 PM" scrollYProgress={scrollYProgress} fadeInRange={[0.90, 0.91]} />
                                <ScrollBubble sender="zoe" text="evening. where did you notice God today?" scrollYProgress={scrollYProgress} fadeInRange={[0.92, 0.93]} />
                                <ScrollBubble sender="user" text="i had a moment where i wanted to hit the panic button on a client project, but i just stopped and took a breath. actually felt some peace." scrollYProgress={scrollYProgress} fadeInRange={[0.94, 0.96]} />
                                <ScrollBubble sender="zoe" text="that IS the passage. you lived it today without even trying. tomorrow's mark 5 — jesus meets a guy everyone else gave up on. you'll love it." scrollYProgress={scrollYProgress} fadeInRange={[0.97, 0.99]} />
                            </motion.div>
                        </div>

                    </motion.div>
                </div>

            </div>

            {/* Seamless Gradient blending into the next section (rose-200 / pinkish dawn) */}
            <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-[#F9FAFB]/0 to-rose-200 pointer-events-none z-10" />
            <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-rose-200 pointer-events-none z-10" />
        </section>
    );
}
