"use client";

import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

function ScrollBubble({
    sender,
    text,
    scrollYProgress,
    fadeInRange
}: {
    sender: "user" | "zoe",
    text: string,
    scrollYProgress: MotionValue<number>,
    fadeInRange: [number, number]
}) {
    const isUser = sender === "user";
    // Bubble fades in and slides up seamlessly precisely as the user scrubs through its designated scroll range
    const opacity = useTransform(scrollYProgress, fadeInRange, [0, 1]);
    const y = useTransform(scrollYProgress, fadeInRange, [20, 0]);

    return (
        <motion.div
            style={{ opacity, y }}
            className={clsx(
                "max-w-[85%] px-4 py-3 text-[16px] font-medium leading-[1.4] shadow-sm tracking-tight",
                isUser ? "bg-[#007AFF] text-white self-end rounded-[20px] rounded-br-[4px]"
                    : "bg-[#E9E9EB] text-[#111] self-start rounded-[20px] rounded-bl-[4px]"
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
            className="text-[12px] font-medium text-slate-500 text-center mt-6 mb-2"
        >
            {text}
        </motion.div>
    );
}

export default function MobileStickySms() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Apply a stiff spring to completely absorb iOS Safari's asynchronous momentum scroll jitter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 600,
        damping: 60,
        restDelta: 0.001
    });

    // ─────────────────────────────────────────────────────────────────
    // 1200vh MOBILE TIMELINE:
    // Staggered Cinematic Blur Reveal for Narrative -> Followed by Chat.
    // Each phase takes 400vh to ensure absolute deliberate pacing.
    //
    // PHASE 1 (0.00 -> 0.33)
    // 0.00 -> 0.05: Headline Focus-Pulls In
    // 0.05 -> 0.10: Body Copy Focus-Pulls In
    // 0.10 -> 0.14: HANG (User reads both)
    // 0.14 -> 0.18: Both blur and dissolve out
    // 0.18 -> 0.30: Chat messages scroll in one by one based on scrub
    // 0.30 -> 0.33: Chat thread flings off top
    //
    // ─────────────────────────────────────────────────────────────────

    // --- PHASE 1 ---
    const t1TitleOpacity = useTransform(smoothProgress, [0.00, 0.08, 0.16, 0.20], [0, 1, 1, 0]);
    const t1TitleBlur = useTransform(smoothProgress, [0.00, 0.08, 0.16, 0.20], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t1TitleScale = useTransform(smoothProgress, [0.00, 0.08, 0.16, 0.20], [0.9, 1, 1, 1.05]);

    const t1BodyOpacity = useTransform(smoothProgress, [0.04, 0.12, 0.16, 0.20], [0, 1, 1, 0]);
    const t1BodyBlur = useTransform(smoothProgress, [0.04, 0.12, 0.16, 0.20], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t1BodyY = useTransform(smoothProgress, [0.04, 0.12, 0.16, 0.20], [20, 0, 0, -20]);

    const c1Y = useTransform(smoothProgress, [0.31, 0.34], ["0%", "-150%"]);

    // --- PHASE 2 ---
    const t2TitleOpacity = useTransform(smoothProgress, [0.34, 0.40, 0.48, 0.52], [0, 1, 1, 0]);
    const t2TitleBlur = useTransform(smoothProgress, [0.34, 0.40, 0.48, 0.52], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t2TitleScale = useTransform(smoothProgress, [0.34, 0.40, 0.48, 0.52], [0.9, 1, 1, 1.05]);

    const t2BodyOpacity = useTransform(smoothProgress, [0.38, 0.44, 0.48, 0.52], [0, 1, 1, 0]);
    const t2BodyBlur = useTransform(smoothProgress, [0.38, 0.44, 0.48, 0.52], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t2BodyY = useTransform(smoothProgress, [0.38, 0.44, 0.48, 0.52], [20, 0, 0, -20]);

    const c2Y = useTransform(smoothProgress, [0.64, 0.67], ["0%", "-150%"]);

    // --- PHASE 3 ---
    const t3TitleOpacity = useTransform(smoothProgress, [0.67, 0.73, 0.81, 0.85], [0, 1, 1, 0]);
    const t3TitleBlur = useTransform(smoothProgress, [0.67, 0.73, 0.81, 0.85], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t3TitleScale = useTransform(smoothProgress, [0.67, 0.73, 0.81, 0.85], [0.9, 1, 1, 1.05]);

    const t3BodyOpacity = useTransform(smoothProgress, [0.71, 0.77, 0.81, 0.85], [0, 1, 1, 0]);
    const t3BodyBlur = useTransform(smoothProgress, [0.71, 0.77, 0.81, 0.85], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t3BodyY = useTransform(smoothProgress, [0.71, 0.77, 0.81, 0.85], [20, 0, 0, -20]);

    const c3Y = useTransform(smoothProgress, [0.98, 1.00], ["0%", "-20%"]); // Small nudge up at the very end

    // Narrative Content Blocks
    const t1 = {
        title: "No App Required.",
        body: (
            <div className="space-y-4 text-[17px] leading-[1.6] text-slate-600 font-medium tracking-tight mt-6">
                <p><strong className="text-slate-900 font-semibold">Zoe lives in your texts.</strong> No downloads, no logins, no learning curve.</p>
                <p>Just open your messages — the same place you talk to everyone else.</p>
            </div>
        )
    };

    const t2 = {
        title: "Two Questions.",
        body: (
            <div className="space-y-4 text-[17px] leading-[1.6] text-slate-600 font-medium tracking-tight mt-6">
                <p><strong className="text-slate-900 font-semibold">Everything Zoe does points you back to two questions:</strong></p>
                <ul className="list-none space-y-2 text-slate-800">
                    <li className="bg-emerald-100/60 text-emerald-900 rounded-lg px-4 py-2 w-full mx-auto inline-block font-semibold">What is God saying to you?</li>
                    <li className="bg-emerald-100/60 text-emerald-900 rounded-lg px-4 py-2 w-full mx-auto inline-block font-semibold">What are you going to do about it?</li>
                </ul>
                <p>Pick a book, set your pace, and Zoe delivers a daily reading enriched with original language, cultural context, and reflection prompts.</p>
            </div>
        )
    };

    const t3 = {
        title: "Zoe Remembers.",
        body: (
            <div className="space-y-4 text-[17px] leading-[1.6] text-slate-600 font-medium tracking-tight mt-6">
                <p>
                    <strong className="text-teal-900 bg-teal-200/60 px-1 py-0.5 rounded-sm font-semibold">Zoe remembers</strong>
                    {' '}what you're reading, what you're wrestling with, and what God seems to be doing in your life.
                </p>
                <p>Every conversation picks up where the last one left off — because transformation happens when someone helps you connect the dots across days, not just moments.</p>
            </div>
        )
    };

    return (
        <section ref={containerRef} className="relative w-full h-[1200vh] z-20 bg-[#F9FAFB] block overflow-x-clip">

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-20">

                {/* ── PHASE 1 TEXT ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-[400px] mx-auto">
                    <motion.h2
                        style={{ opacity: t1TitleOpacity, filter: t1TitleBlur, scale: t1TitleScale }}
                        className="text-[42px] tracking-tighter-editorial text-slate-900 font-bold leading-[1.05] will-change-transform"
                    >
                        {t1.title}
                    </motion.h2>
                    <motion.div style={{ opacity: t1BodyOpacity, filter: t1BodyBlur, y: t1BodyY }} className="will-change-transform">
                        {t1.body}
                    </motion.div>
                </div>

                {/* ── PHASE 1 CHAT ── */}
                <motion.div style={{ y: c1Y }} className="absolute top-[8vh] left-0 w-full px-4 flex flex-col gap-[6px] z-20 pointer-events-auto will-change-transform">
                    {/* The chat bubbles use fadeInRange to animate in line-by-line exactly as you scroll, simulating "delivery" */}
                    <ScrollTimestamp text="Yesterday, 9:14 PM" scrollYProgress={smoothProgress} fadeInRange={[0.20, 0.21]} />
                    <ScrollBubble sender="user" text="hey i want to read through james. can we do it over the next 2 weeks?" scrollYProgress={smoothProgress} fadeInRange={[0.22, 0.23]} />
                    <ScrollBubble sender="zoe" text="great pick. james is 5 chapters but it's dense — i'll break it into digestible sections with some context on the original language and who james was writing to. what time do you want your morning reading?" scrollYProgress={smoothProgress} fadeInRange={[0.24, 0.26]} />
                    <ScrollBubble sender="user" text="7am" scrollYProgress={smoothProgress} fadeInRange={[0.27, 0.28]} />
                    <ScrollBubble sender="zoe" text="done. starting tomorrow 👋" scrollYProgress={smoothProgress} fadeInRange={[0.29, 0.30]} />
                </motion.div>

                {/* ── PHASE 2 TEXT ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-[400px] mx-auto">
                    <motion.h2
                        style={{ opacity: t2TitleOpacity, filter: t2TitleBlur, scale: t2TitleScale }}
                        className="text-[42px] tracking-tighter-editorial text-slate-900 font-bold leading-[1.05] will-change-transform"
                    >
                        {t2.title}
                    </motion.h2>
                    <motion.div style={{ opacity: t2BodyOpacity, filter: t2BodyBlur, y: t2BodyY }} className="will-change-transform">
                        {t2.body}
                    </motion.div>
                </div>

                {/* ── PHASE 2 CHAT ── */}
                <motion.div style={{ y: c2Y }} className="absolute top-[8vh] left-0 w-full px-4 flex flex-col gap-[6px] z-20 pointer-events-auto will-change-transform">
                    <ScrollTimestamp text="Today, 7:02 AM" scrollYProgress={smoothProgress} fadeInRange={[0.52, 0.53]} />
                    <ScrollBubble sender="zoe" text="morning Tony! james 1:2-8. quick context — james is writing to jewish believers scattered across the roman empire who are losing everything. so when he opens with 'consider it pure joy when you face trials' he's not being flippant. the word for perseverance here is 'hypomone' — it means endurance under pressure, not passive waiting. read it slow. what stands out?" scrollYProgress={smoothProgress} fadeInRange={[0.54, 0.56]} />
                    <ScrollBubble sender="user" text="the part about asking for wisdom without doubting. i feel like i doubt a lot" scrollYProgress={smoothProgress} fadeInRange={[0.57, 0.59]} />
                    <ScrollBubble sender="zoe" text="interesting — 'doubt' there is 'diakrino' in greek. it literally means divided in yourself. james isn't saying don't have questions. he's saying don't be split between trusting God and trusting your own anxiety. sit with that today" scrollYProgress={smoothProgress} fadeInRange={[0.60, 0.63]} />
                </motion.div>

                {/* ── PHASE 3 TEXT ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-[400px] mx-auto">
                    <motion.h2
                        style={{ opacity: t3TitleOpacity, filter: t3TitleBlur, scale: t3TitleScale }}
                        className="text-[42px] tracking-tighter-editorial text-slate-900 font-bold leading-[1.05] will-change-transform"
                    >
                        {t3.title}
                    </motion.h2>
                    <motion.div style={{ opacity: t3BodyOpacity, filter: t3BodyBlur, y: t3BodyY }} className="will-change-transform">
                        {t3.body}
                    </motion.div>
                </div>

                {/* ── PHASE 3 CHAT ── */}
                <motion.div style={{ y: c3Y }} className="absolute top-[8vh] left-0 w-full px-4 flex flex-col gap-[6px] z-20 pointer-events-auto will-change-transform">
                    <ScrollTimestamp text="1:24 PM" scrollYProgress={smoothProgress} fadeInRange={[0.85, 0.86]} />
                    <ScrollBubble sender="zoe" text="hey — that thing from james this morning about not being divided? whatever's pulling at your attention right now, you don't have to resolve it all. just stay undivided for the next hour" scrollYProgress={smoothProgress} fadeInRange={[0.87, 0.88]} />

                    <ScrollTimestamp text="8:30 PM" scrollYProgress={smoothProgress} fadeInRange={[0.89, 0.90]} />
                    <ScrollBubble sender="zoe" text="evening. where did you notice God today?" scrollYProgress={smoothProgress} fadeInRange={[0.91, 0.92]} />
                    <ScrollBubble sender="user" text="honestly during a tough conversation at work. i stayed patient when i normally wouldn't have. felt like that james reading was in my head all day" scrollYProgress={smoothProgress} fadeInRange={[0.93, 0.94]} />
                    <ScrollBubble sender="zoe" text="that's hypomone — endurance under pressure. you literally lived the passage. tomorrow we're in james 1:19, 'quick to listen, slow to speak' — connects right to what you noticed about patience today" scrollYProgress={smoothProgress} fadeInRange={[0.95, 0.97]} />
                </motion.div>

            </div>

            {/* Seamless Gradient blending into the next section (rose-200 / pinkish dawn) */}
            <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-[#F9FAFB]/0 to-rose-200 pointer-events-none z-10" />
            <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-rose-200 pointer-events-none z-10" />
        </section>
    );
}
