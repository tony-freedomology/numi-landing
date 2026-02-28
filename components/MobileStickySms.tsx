"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

// ─────────────────────────────────────────────────────────────────────────────
// iOS SAFARI SCROLL JUDDER — FINAL FIX:
// `position: sticky` on iOS Safari judders during momentum scroll deceleration.
// The compositor briefly drags the sticky element with the scroll before
// snapping it back — creating visible micro-rubberbanding.
//
// THE FIX: Use `position: fixed` instead. Fixed elements are ALWAYS anchored
// to the viewport — the compositor never repositions them relative to scroll.
// We control visibility via scrollYProgress so the fixed overlay only appears
// while the user is scrolling through the 1200vh container.
// ─────────────────────────────────────────────────────────────────────────────

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
    const opacity = useTransform(scrollYProgress, fadeInRange, [0, 1]);

    return (
        <motion.div
            style={{ opacity }}
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
        offset: ["start start", "end end"]
    });

    // Master visibility: show the fixed overlay only while scrolling through
    // the 1200vh container. Tiny fade at edges prevents hard pop-in/out.
    const masterOpacity = useTransform(scrollYProgress, [0, 0.005, 0.995, 1], [0, 1, 1, 0]);

    // --- PHASE 1 TEXT (focus-pull in, then dissolve) ---
    const t1TitleOpacity = useTransform(scrollYProgress, [0.00, 0.08, 0.16, 0.20], [0, 1, 1, 0]);
    const t1TitleBlur = useTransform(scrollYProgress, [0.00, 0.08, 0.16, 0.20], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t1TitleScale = useTransform(scrollYProgress, [0.00, 0.08, 0.16, 0.20], [0.9, 1, 1, 1.05]);

    const t1BodyOpacity = useTransform(scrollYProgress, [0.04, 0.12, 0.16, 0.20], [0, 1, 1, 0]);
    const t1BodyBlur = useTransform(scrollYProgress, [0.04, 0.12, 0.16, 0.20], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);

    // --- PHASE 1 CHAT (fade in sequentially, then fade out as a group) ---
    const c1Opacity = useTransform(scrollYProgress, [0.20, 0.21, 0.30, 0.33], [0, 1, 1, 0]);

    // --- PHASE 2 TEXT ---
    const t2TitleOpacity = useTransform(scrollYProgress, [0.34, 0.40, 0.48, 0.52], [0, 1, 1, 0]);
    const t2TitleBlur = useTransform(scrollYProgress, [0.34, 0.40, 0.48, 0.52], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t2TitleScale = useTransform(scrollYProgress, [0.34, 0.40, 0.48, 0.52], [0.9, 1, 1, 1.05]);

    const t2BodyOpacity = useTransform(scrollYProgress, [0.38, 0.44, 0.48, 0.52], [0, 1, 1, 0]);
    const t2BodyBlur = useTransform(scrollYProgress, [0.38, 0.44, 0.48, 0.52], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);

    // --- PHASE 2 CHAT ---
    const c2Opacity = useTransform(scrollYProgress, [0.52, 0.53, 0.63, 0.66], [0, 1, 1, 0]);

    // --- PHASE 3 TEXT ---
    const t3TitleOpacity = useTransform(scrollYProgress, [0.67, 0.73, 0.81, 0.85], [0, 1, 1, 0]);
    const t3TitleBlur = useTransform(scrollYProgress, [0.67, 0.73, 0.81, 0.85], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const t3TitleScale = useTransform(scrollYProgress, [0.67, 0.73, 0.81, 0.85], [0.9, 1, 1, 1.05]);

    const t3BodyOpacity = useTransform(scrollYProgress, [0.71, 0.77, 0.81, 0.85], [0, 1, 1, 0]);
    const t3BodyBlur = useTransform(scrollYProgress, [0.71, 0.77, 0.81, 0.85], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);

    // --- PHASE 3 CHAT (fade in and stay — final state) ---
    const c3Opacity = useTransform(scrollYProgress, [0.85, 0.86, 0.995, 1], [0, 1, 1, 0]);

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

            {/* FIXED overlay — NOT sticky. Fixed elements never judder on iOS because
                the compositor doesn't reposition them relative to scroll. */}
            <motion.div
                style={{ opacity: masterOpacity }}
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none z-20"
            >

                {/* ── PHASE 1 TEXT ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-[400px] mx-auto">
                    <motion.h2
                        style={{ opacity: t1TitleOpacity, filter: t1TitleBlur, scale: t1TitleScale }}
                        className="text-[42px] tracking-tighter-editorial text-slate-900 font-bold leading-[1.05]"
                    >
                        {t1.title}
                    </motion.h2>
                    <motion.div style={{ opacity: t1BodyOpacity, filter: t1BodyBlur }}>
                        {t1.body}
                    </motion.div>
                </div>

                {/* ── PHASE 1 CHAT ── */}
                <motion.div style={{ opacity: c1Opacity }} className="absolute top-[8vh] left-0 w-full px-4 flex flex-col gap-[6px] z-20 pointer-events-auto">
                    <ScrollTimestamp text="Yesterday, 9:14 PM" scrollYProgress={scrollYProgress} fadeInRange={[0.20, 0.21]} />
                    <ScrollBubble sender="user" text="hey i want to read through james. can we do it over the next 2 weeks?" scrollYProgress={scrollYProgress} fadeInRange={[0.22, 0.23]} />
                    <ScrollBubble sender="zoe" text="great pick. james is 5 chapters but it's dense — i'll break it into digestible sections with some context on the original language and who james was writing to. what time do you want your morning reading?" scrollYProgress={scrollYProgress} fadeInRange={[0.24, 0.26]} />
                    <ScrollBubble sender="user" text="7am" scrollYProgress={scrollYProgress} fadeInRange={[0.27, 0.28]} />
                    <ScrollBubble sender="zoe" text="done. starting tomorrow 👋" scrollYProgress={scrollYProgress} fadeInRange={[0.29, 0.30]} />
                </motion.div>

                {/* ── PHASE 2 TEXT ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-[400px] mx-auto">
                    <motion.h2
                        style={{ opacity: t2TitleOpacity, filter: t2TitleBlur, scale: t2TitleScale }}
                        className="text-[42px] tracking-tighter-editorial text-slate-900 font-bold leading-[1.05]"
                    >
                        {t2.title}
                    </motion.h2>
                    <motion.div style={{ opacity: t2BodyOpacity, filter: t2BodyBlur }}>
                        {t2.body}
                    </motion.div>
                </div>

                {/* ── PHASE 2 CHAT ── */}
                <motion.div style={{ opacity: c2Opacity }} className="absolute top-[8vh] left-0 w-full px-4 flex flex-col gap-[6px] z-20 pointer-events-auto">
                    <ScrollTimestamp text="Today, 7:02 AM" scrollYProgress={scrollYProgress} fadeInRange={[0.52, 0.53]} />
                    <ScrollBubble sender="zoe" text="morning Tony! james 1:2-8. quick context — james is writing to jewish believers scattered across the roman empire who are losing everything. so when he opens with 'consider it pure joy when you face trials' he's not being flippant. the word for perseverance here is 'hypomone' — it means endurance under pressure, not passive waiting. read it slow. what stands out?" scrollYProgress={scrollYProgress} fadeInRange={[0.54, 0.56]} />
                    <ScrollBubble sender="user" text="the part about asking for wisdom without doubting. i feel like i doubt a lot" scrollYProgress={scrollYProgress} fadeInRange={[0.57, 0.59]} />
                    <ScrollBubble sender="zoe" text="interesting — 'doubt' there is 'diakrino' in greek. it literally means divided in yourself. james isn't saying don't have questions. he's saying don't be split between trusting God and trusting your own anxiety. sit with that today" scrollYProgress={scrollYProgress} fadeInRange={[0.60, 0.63]} />
                </motion.div>

                {/* ── PHASE 3 TEXT ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-[400px] mx-auto">
                    <motion.h2
                        style={{ opacity: t3TitleOpacity, filter: t3TitleBlur, scale: t3TitleScale }}
                        className="text-[42px] tracking-tighter-editorial text-slate-900 font-bold leading-[1.05]"
                    >
                        {t3.title}
                    </motion.h2>
                    <motion.div style={{ opacity: t3BodyOpacity, filter: t3BodyBlur }}>
                        {t3.body}
                    </motion.div>
                </div>

                {/* ── PHASE 3 CHAT ── */}
                <motion.div style={{ opacity: c3Opacity }} className="absolute top-[8vh] left-0 w-full px-4 flex flex-col gap-[6px] z-20 pointer-events-auto">
                    <ScrollTimestamp text="1:24 PM" scrollYProgress={scrollYProgress} fadeInRange={[0.85, 0.86]} />
                    <ScrollBubble sender="zoe" text="hey — that thing from james this morning about not being divided? whatever's pulling at your attention right now, you don't have to resolve it all. just stay undivided for the next hour" scrollYProgress={scrollYProgress} fadeInRange={[0.87, 0.88]} />

                    <ScrollTimestamp text="8:30 PM" scrollYProgress={scrollYProgress} fadeInRange={[0.89, 0.90]} />
                    <ScrollBubble sender="zoe" text="evening. where did you notice God today?" scrollYProgress={scrollYProgress} fadeInRange={[0.91, 0.92]} />
                    <ScrollBubble sender="user" text="honestly during a tough conversation at work. i stayed patient when i normally wouldn't have. felt like that james reading was in my head all day" scrollYProgress={scrollYProgress} fadeInRange={[0.93, 0.94]} />
                    <ScrollBubble sender="zoe" text="that's hypomone — endurance under pressure. you literally lived the passage. tomorrow we're in james 1:19, 'quick to listen, slow to speak' — connects right to what you noticed about patience today" scrollYProgress={scrollYProgress} fadeInRange={[0.95, 0.97]} />
                </motion.div>

            </motion.div>

            {/* Seamless Gradient blending into the next section (rose-200 / pinkish dawn) */}
            <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-[#F9FAFB]/0 to-rose-200 pointer-events-none z-10" />
            <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-rose-200 pointer-events-none z-10" />
        </section>
    );
}
