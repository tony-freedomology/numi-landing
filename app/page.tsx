"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle,
  MessageCircle,
  BookOpen,
  MessageSquareHeart,
  ShieldCheck,
} from "lucide-react";
import SmsAnimation from "../components/SmsAnimation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const faqs = [
  {
    question: "is this replacing my pastor or my church?",
    answer:
      "no. numi is a companion, not a replacement. it’s designed to push you toward real community — small group, prayer partners, and your pastor when needed.",
  },
  {
    question: "is this just chatgpt with a bible?",
    answer:
      "no. numi is built around simple daily rhythms and memory-driven follow-ups, so it remembers what you’re working on and closes loops (intention → action → reflection).",
  },
  {
    question: "what about privacy?",
    answer:
      "your conversations are private. if your church provides numi, leaders see only aggregated themes (not your individual messages) by default.",
  },
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      name,
      phone,
      email,
      source: "consumer-waitlist",
      submittedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("numi_waitlist_consumer", JSON.stringify(payload));
    } catch (error) {
      console.warn("Unable to store waitlist submission", error);
    }
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/20">
      <main className="relative z-10 font-sans">
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
            <div className="text-2xl font-bold tracking-tighter text-slate-900">
              Numi
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/numi-landing/churches"
                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:inline-flex"
              >
                For churches
              </a>
              <a
                href="#start"
                className="rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-6 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_20px_-5px_rgba(0,210,255,0.4)] transition-transform hover:scale-105"
              >
                Text START
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
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
                  Your Personal Faith Companion
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-8 text-[3.25rem] font-extrabold leading-[1.05] tracking-tighter text-slate-900 md:text-[5rem] lg:text-[5.5rem]"
              >
                A companion
                <br />
                for your walk
                <br />
                with{" "}
                <span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">
                  Jesus.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg text-slate-500 md:text-xl leading-relaxed font-medium"
              >
                Sunday inspires you — then Monday hits. Numi keeps the conversation going with
                Scripture, prayer prompts, and simple daily rhythms that actually turn into
                action.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
                id="start"
              >
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-8 py-4 text-sm font-bold text-slate-900 shadow-[0_0_40px_-10px_rgba(0,210,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(0,240,181,0.8)]"
                >
                  Text START to +1 833 283 1080 <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
                >
                  See how it works <ChevronDown className="h-5 w-5" />
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-500 sm:grid-cols-3">
                {["14-day free trial", "$7/month after", "Cancel anytime"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-jade" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="relative mt-16 w-full lg:mt-0 lg:w-1/2">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-halo opacity-80" />
            <div className="relative rounded-[2.5rem] border border-slate-200 bg-white/70 p-4 shadow-soft-cyan backdrop-blur-xl">
              <SmsAnimation />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-vibrant-cyan" />,
                title: "daily scripture + prayer",
                body: "short, practical prompts that help you slow down, listen, and respond.",
              },
              {
                icon: <MessageSquareHeart className="h-6 w-6 text-vibrant-jade" />,
                title: "memory-driven follow ups",
                body: "numi remembers what you said yesterday and checks in so you don’t drift.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-indigo-500" />,
                title: "guardrails + humility",
                body: "numi doesn’t do “god told me.” it points you back to scripture and your church.",
              },
            ].map((card) => (
              <div key={card.title} className="glass gradient-border rounded-3xl p-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900/5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-slate-500 leading-relaxed font-medium">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">simple pricing</h2>
                <p className="mt-2 text-slate-500 font-medium">
                  start with a free trial. keep it if it helps.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900 px-6 py-4 text-white">
                <div className="text-sm text-white/70">numi for individuals</div>
                <div className="mt-1 text-3xl font-extrabold">$7/mo</div>
                <div className="mt-1 text-xs text-white/70">after 14-day trial</div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="glass gradient-border rounded-3xl p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Want early access?
                </h2>
                <p className="mt-3 text-slate-500 font-medium leading-relaxed">
                  Drop your info and we’ll pull you in as we open up the beta.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                  <MessageCircle className="h-5 w-5 text-vibrant-cyan" />
                  <span className="font-semibold">
                    Or just text START to +1 833 283 1080
                  </span>
                </div>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold outline-none ring-0 placeholder:text-slate-400 focus:border-vibrant-cyan/60"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="phone"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold outline-none ring-0 placeholder:text-slate-400 focus:border-vibrant-cyan/60"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold outline-none ring-0 placeholder:text-slate-400 focus:border-vibrant-cyan/60"
                />
                <button
                  type="submit"
                  disabled={status === "sent"}
                  className={clsx(
                    "w-full rounded-2xl px-6 py-4 text-sm font-extrabold transition-all",
                    status === "sent"
                      ? "bg-slate-200 text-slate-500"
                      : "bg-gradient-to-r from-vibrant-cyan to-vibrant-jade text-slate-900 hover:scale-[1.01]"
                  )}
                >
                  {status === "sent" ? "Got it" : "Join the waitlist"}
                </button>
                <p className="text-xs text-slate-500">
                  msg & data rates may apply. reply STOP to opt out. reply HELP for help.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full rounded-3xl border border-slate-200 bg-white p-6 text-left"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="text-lg font-extrabold tracking-tight">
                      {faq.question}
                    </div>
                    <ChevronDown
                      className={clsx(
                        "h-5 w-5 text-slate-500 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>
                  {isOpen && (
                    <p className="mt-4 text-slate-500 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
            <div className="text-sm font-semibold text-slate-600">
              © {new Date().getFullYear()} freedomology
            </div>
            <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
              <a className="hover:text-slate-900" href="https://numi-production.up.railway.app/terms" target="_blank" rel="noreferrer">
                terms
              </a>
              <a className="hover:text-slate-900" href="https://numi-production.up.railway.app/privacy" target="_blank" rel="noreferrer">
                privacy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
