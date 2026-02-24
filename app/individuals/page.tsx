"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import {
    ArrowRight,
    ChevronDown,
    CheckCircle,
    Heart,
    Star,
    BookOpen,
    Lock,
    Sparkles,
    Zap,
    Smartphone,
    Quote,
} from "lucide-react";
import SmsAnimation from "../../components/SmsAnimation";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
    show: { transition: { staggerChildren: 0.1 } },
};

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */
const objections = [
    {
        iconName: "sparkles" as const,
        question: "Is this just an AI chat bot?",
        answer:
            "No. Numi is a discipleship companion with relational memory. It doesn\u2019t just answer questions; it remembers your prayer requests, your struggles, and your growth edges to follow up with you specifically.",
    },
    {
        iconName: "heart" as const,
        question: "Will this replace my church community?",
        answer:
            "Never. Numi is designed to push you TOWARD community. It will often nudge you to reach out to a friend, bring something up in your small group, or talk to your pastor about what you\u2019re learning.",
    },
    {
        iconName: "lock" as const,
        question: "Is my personal data safe?",
        answer:
            "Yes. Your conversations with Numi are private and encrypted. We don\u2019t sell your data, and we don\u2019t share your individual prayers or struggles with anyone else.",
    },
    {
        iconName: "zap" as const,
        question: "Do I have to download an app?",
        answer:
            "No. Numi lives entirely in your native text messaging app. No new passwords to remember, no notifications to manage. Just simple, life-giving connection where you already are.",
    },
];

const faqs = [
    {
        question: "How much does Numi cost?",
        answer:
            "You can try Numi for free for 7 days. After that, it\u2019s a simple $7/month subscription to help you maintain your daily walk with God. No hidden fees, cancel anytime.",
    },
    {
        question: "How does the memory feature work?",
        answer:
            "Numi uses secure, persistent memory to track what you\u2019ve shared. If you mention a big meeting on Monday, Numi might ask how it went on Tuesday. It turns your spiritual intentions into a consistent journey.",
    },
    {
        question: "Is Numi aligned with my denomination?",
        answer:
            "Numi is built on the foundation of historic Christian orthodoxy. It focuses on the primary spiritual disciplines common across the global Church. It aims to support your growth, not settle theological debates.",
    },
    {
        question: "Can I use Numi with my small group?",
        answer:
            "Absolutely! Numi works best when it helps you show up more fully in your real-life relationships. We\u2019re currently developing features for groups to walk through series together.",
    },
];

/* ------------------------------------------------------------------ */
/*  Helper: render the right icon from a plain string key              */
/* ------------------------------------------------------------------ */
function ObjectionIcon({ name }: { name: string }) {
    const base = "h-6 w-6";
    switch (name) {
        case "sparkles":
            return <Sparkles className={`${base} text-vibrant-cyan`} />;
        case "heart":
            return <Heart className={`${base} text-vibrant-jade`} />;
        case "lock":
            return <Lock className={`${base} text-rose-500`} />;
        case "zap":
            return <Zap className={`${base} text-indigo-500`} />;
        default:
            return null;
    }
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function IndividualsPage() {
    const [status, setStatus] = useState<"idle" | "sent">("idle");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/20">
            <main className="relative z-10 font-sans">
                {/* ── Header ─────────────────────────────────────────────── */}
                <header className="absolute top-0 left-0 right-0 z-50">
                    <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
                        <div className="text-2xl font-bold tracking-tighter text-slate-900">
                            Numi
                        </div>
                        <a
                            href="#waitlist"
                            className="rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-6 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_20px_-5px_rgba(0,210,255,0.4)] transition-transform hover:scale-105"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </header>

                {/* ── Hero ───────────────────────────────────────────────── */}
                <section className="relative flex min-h-[90vh] flex-col items-center justify-between px-6 pt-32 pb-16 lg:flex-row lg:gap-16 lg:pt-24 lg:pb-0 mx-auto max-w-[1400px]">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="show"
                            className="max-w-xl"
                        >
                            <motion.div variants={fadeUp}>
                                <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-gradient-to-r from-vibrant-cyan/5 to-vibrant-jade/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#008ba3]">
                                    A Closer Walk, Every Single Day
                                </div>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="mt-8 text-[3.5rem] font-extrabold leading-[1.05] tracking-tighter text-slate-900 md:text-[5.5rem] lg:text-[6rem]"
                            >
                                A closer walk <br />
                                with God, <br />
                                one{" "}
                                <span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">
                                    text
                                </span>{" "}
                                at a time.
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="mt-6 max-w-xl text-lg text-slate-500 md:text-xl leading-relaxed font-medium"
                            >
                                Real life is busy. Staying connected to God shouldn&apos;t be
                                hard. Numi is your daily SMS companion that turns spiritual
                                intentions into daily habits, meeting you exactly where you are.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="mt-10 flex flex-col gap-4 sm:flex-row"
                            >
                                <a
                                    href="#waitlist"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-8 py-4 text-sm font-bold text-slate-900 shadow-[0_0_40px_-10px_rgba(0,210,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(0,240,181,0.8)]"
                                >
                                    Try Numi Free <ArrowRight className="h-4 w-4" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Hero image */}
                    <div className="mt-16 w-full lg:mt-0 lg:w-1/2 relative flex justify-center lg:justify-end lg:h-[700px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-vibrant-cyan/20 to-vibrant-jade/20 blur-[100px] -z-10 rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.8, ease: "easeOut" },
                            }}
                            className="relative w-full aspect-square lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,210,255,0.3)]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: "url(/numi-landing/images/hero-monday.png)",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-cyan/15 to-transparent mix-blend-overlay" />
                        </motion.div>
                    </div>
                </section>

                {/* ── Problem ────────────────────────────────────────────── */}
                <section className="py-32 px-6 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-vibrant-cyan/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-vibrant-jade/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Quote className="h-16 w-16 text-slate-700 mx-auto mb-10 rotate-180 opacity-50" />
                            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                                Spiritually hungry.
                                <br />
                                <span className="text-slate-400">
                                    Practically overwhelmed.
                                </span>
                            </h2>
                            <div className="mt-10 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto space-y-6">
                                <p>
                                    You want to follow Jesus more closely. You want more prayer,
                                    more Scripture, and more awareness of His presence. But then
                                    Monday hits.
                                </p>
                                <p>
                                    <strong className="text-white font-semibold">
                                        The commute, the emails, and the household to-do lists crowd
                                        out the things that matter most.
                                    </strong>
                                </p>
                                <p>
                                    Numi is your daily mechanism for faithfulness. It&apos;s a
                                    proactive companion that helps you bridge the gap between your
                                    Sunday intentions and your Monday reality.{" "}
                                    <span className="text-vibrant-cyan font-semibold">
                                        Discipleship for the rest of your week.
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Relational Memory + SMS ────────────────────────────── */}
                <section className="py-24 px-4 bg-slate-50 relative">
                    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                                A companion who truly knows you.
                            </h2>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
                                Numi isn&apos;t just a bot; it&apos;s a relationship engine. It
                                remembers your journey, follows up on your prayer requests, and
                                learns how you specifically want to grow.
                            </p>

                            <div className="mt-10 space-y-6">
                                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-vibrant-cyan/10 text-brand-cyan">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Relational Memory
                                        </h3>
                                        <p className="mt-2 text-slate-500 font-medium">
                                            If you mention a big interview or a difficult
                                            conversation, Numi will proactively text you later to ask
                                            how it went.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-vibrant-jade/10 text-vibrant-jade">
                                        <Smartphone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Zero App Fatigue
                                        </h3>
                                        <p className="mt-2 text-slate-500 font-medium">
                                            No new app to download. Numi lives entirely in your native
                                            text messages, where you already are.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/5 text-slate-900">
                                        <Star className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Personalized Coaching
                                        </h3>
                                        <p className="mt-2 text-slate-500 font-medium">
                                            Numi adapts its tone and content to what you
                                            need&mdash;whether it&apos;s encouragement, challenge, or
                                            practical next steps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-cyan/20 to-vibrant-jade/20 rounded-[3rem] transform rotate-3" />
                            <SmsAnimation />
                        </motion.div>
                    </div>
                </section>

                {/* ── Daily Rhythm ───────────────────────────────────────── */}
                <section className="py-32 px-6 bg-white">
                    <div className="mx-auto max-w-6xl text-center">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
                        >
                            Your Walk. Your Rhythm.
                        </motion.h2>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-20 grid gap-8 md:grid-cols-3"
                        >
                            {[
                                {
                                    label: "Morning (2 Min)",
                                    color: "text-brand-cyan",
                                    title: "The Anchor",
                                    desc: "One Scripture, one prayer, and one micro-habit to set the trajectory of your day toward Jesus.",
                                },
                                {
                                    label: "Midday (15 Sec)",
                                    color: "text-slate-400",
                                    title: "The Nudge",
                                    desc: "A quick, gentle nudge to pause, breathe, and remember God\u2019s presence in the middle of the work day.",
                                },
                                {
                                    label: "Evening (2 Min)",
                                    color: "text-brand-jade",
                                    title: "The Recap",
                                    desc: "Reflect on where you drifted and where you obeyed. Numi builds your personal discipleship journal over time.",
                                },
                            ].map((r) => (
                                <motion.div
                                    key={r.title}
                                    variants={fadeUp}
                                    className="bg-slate-50 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2"
                                >
                                    <div
                                        className={`${r.color} font-bold mb-6 text-xs tracking-[0.2em] uppercase`}
                                    >
                                        {r.label}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {r.title}
                                    </h3>
                                    <p className="mt-5 text-slate-500 leading-relaxed font-medium">
                                        {r.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── Growth Journey ─────────────────────────────────────── */}
                <section className="py-32 px-6 bg-gradient-to-br from-vibrant-jade to-vibrant-cyan text-slate-900 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                                Your Growth Journey
                            </div>
                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                Watch your walk with God transform.
                            </h2>
                            <p className="mt-6 text-lg text-slate-800 font-medium leading-relaxed">
                                Numi tracks your rhythms and progress, helping you see patterns
                                in your spiritual life that you might have missed.
                            </p>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-4">
                                    <Star className="text-slate-900 mt-1 h-6 w-6 shrink-0" />
                                    <div>
                                        <span className="text-slate-900 font-bold block mb-1">
                                            Track Your Disciplines
                                        </span>
                                        <span className="text-slate-700 block max-w-md">
                                            See your consistency with Scripture, prayer, and
                                            micro-habits over weeks and months.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <BookOpen className="text-slate-900 mt-1 h-6 w-6 shrink-0" />
                                    <div>
                                        <span className="text-slate-900 font-bold block mb-1">
                                            Look Back on Your Prayers
                                        </span>
                                        <span className="text-slate-700 block max-w-md">
                                            Search through your reflections and see how God has been
                                            answering prayers in your life.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Dashboard mock */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[2rem] border border-slate-200/50 bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] text-slate-900">
                                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                                    <div className="font-bold text-slate-900 text-lg">
                                        My Spiritual Health
                                    </div>
                                    <div className="text-sm text-slate-400">Past 30 Days</div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: "Daily Rhythms", pct: 85, color: "bg-brand-cyan", textColor: "text-brand-cyan" },
                                        { label: "Habit Completion", pct: 72, color: "bg-brand-jade", textColor: "text-brand-jade" },
                                        { label: "Prayer Streak", pct: 40, color: "bg-indigo-500", textColor: "text-indigo-500", extra: "12 Days" },
                                    ].map((m) => (
                                        <div key={m.label}>
                                            <div className="flex justify-between text-sm font-bold mb-2">
                                                <span>{m.label}</span>
                                                <span className={m.textColor}>
                                                    {m.extra ?? `${m.pct}%`}
                                                </span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                                <div
                                                    className={`${m.color} h-full`}
                                                    style={{ width: `${m.pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="text-xs font-bold uppercase text-slate-400 mb-2">
                                        Growth Edge This Month
                                    </div>
                                    <div className="text-sm font-semibold italic text-slate-600">
                                        &ldquo;Practicing silence and slowing down in the middle of
                                        your work week.&rdquo;
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Theology & Guardrails ─────────────────────────────── */}
                <section className="py-32 px-6 bg-slate-50 border-t border-slate-100">
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-vibrant-cyan/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">
                                Personal Discipleship
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                Theology &amp; Guardrails.
                            </h2>
                            <p className="mt-6 max-w-xl mx-auto text-xl text-slate-500 font-medium">
                                Safe, secure, and focused on your personal spiritual growth.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-20 grid gap-8 md:grid-cols-2"
                        >
                            {objections.map((obj, i) => (
                                <motion.div
                                    variants={fadeUp}
                                    key={i}
                                    className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] flex flex-col sm:flex-row gap-6 items-start"
                                >
                                    <div className="flex-shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                                        <ObjectionIcon name={obj.iconName} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-xl">
                                            {obj.question}
                                        </h3>
                                        <p className="mt-3 text-slate-500 leading-relaxed font-medium">
                                            {obj.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── FAQ Accordion ──────────────────────────────────────── */}
                <section className="py-32 px-6 bg-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-vibrant-cyan/10 via-transparent to-transparent pointer-events-none" />
                    <div className="mx-auto max-w-4xl relative z-10">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow-sm mb-6">
                                Common Questions
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                Your Walk with God.{" "}
                                <span className="text-slate-400">Supported by Numi.</span>
                            </h2>
                            <p className="mt-6 text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                                Everything you need to know about starting your journey with
                                Numi.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            {faqs.map((faq, i) => (
                                <motion.div
                                    variants={fadeUp}
                                    key={i}
                                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                                >
                                    <button
                                        className="flex w-full items-center justify-between p-8 text-left bg-white hover:bg-slate-50 transition-colors group"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span className="font-bold text-slate-900 text-lg pr-8 group-hover:text-vibrant-cyan transition-colors">
                                            {faq.question}
                                        </span>
                                        <div
                                            className={clsx(
                                                "h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 transition-transform duration-300 flex-shrink-0 group-hover:bg-vibrant-cyan/10 group-hover:border-vibrant-cyan/20",
                                                {
                                                    "rotate-180 bg-vibrant-cyan/10 border-vibrant-cyan/20":
                                                        openFaq === i,
                                                }
                                            )}
                                        >
                                            <ChevronDown
                                                className={clsx(
                                                    "h-5 w-5 text-slate-400 transition-colors",
                                                    {
                                                        "text-vibrant-cyan": openFaq === i,
                                                        "group-hover:text-vibrant-cyan": openFaq !== i,
                                                    }
                                                )}
                                            />
                                        </div>
                                    </button>

                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="px-8 pb-8 pt-0 bg-white"
                                        >
                                            <p className="text-slate-600 leading-relaxed font-medium">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── Waitlist Form ──────────────────────────────────────── */}
                <section
                    id="waitlist"
                    className="py-32 px-4 bg-gradient-to-br from-white to-slate-50 border-t border-slate-100"
                >
                    <div className="mx-auto max-w-xl text-center">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">
                                Personal Access
                            </div>
                            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter leading-tight text-slate-900 md:text-[3.5rem]">
                                Ready for a <br />
                                <span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">
                                    closer walk
                                </span>{" "}
                                with Jesus?
                            </h2>
                            <p className="mt-6 text-xl text-slate-500 font-medium">
                                Join our early access program for individuals wanting to deepen
                                their spiritual rhythms.
                            </p>

                            <form
                                className="mt-8 flex flex-col gap-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setStatus("sent");
                                }}
                            >
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Email address"
                                    className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                />
                                <button
                                    className={clsx(
                                        "rounded-xl px-4 py-4 text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2",
                                        status === "sent"
                                            ? "bg-vibrant-jade text-slate-900 border border-vibrant-jade shadow-lg shadow-vibrant-jade/30"
                                            : "bg-vibrant-cyan text-slate-900 shadow-xl shadow-vibrant-cyan/20 hover:scale-105"
                                    )}
                                    type="submit"
                                >
                                    {status === "sent" ? (
                                        <>
                                            <CheckCircle className="h-5 w-5" /> You&apos;re on the
                                            list!
                                        </>
                                    ) : (
                                        "Get Early Access"
                                    )}
                                </button>
                            </form>
                            <p className="mt-6 text-xs text-slate-400">
                                We&apos;ll text you as soon as a spot opens up.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ── Footer ─────────────────────────────────────────────── */}
                <footer className="bg-slate-50 text-slate-500 py-12 px-4 text-sm">
                    <div className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="font-medium">
                            &copy; 2026 Numi by Freedomology. All rights reserved.
                        </div>
                        <div className="flex gap-6 font-medium">
                            <a
                                href="#"
                                className="hover:text-slate-900 transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-900 transition-colors"
                            >
                                Terms
                            </a>
                            <a
                                href="/numi-landing/"
                                className="hover:text-slate-900 transition-colors"
                            >
                                For Churches
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
