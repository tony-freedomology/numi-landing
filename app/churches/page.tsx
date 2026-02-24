"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Users,
  LayoutDashboard,
  ShieldCheck,
  FileText,
  BarChart3,
} from "lucide-react";

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
    question: "Does this replace pastoral care?",
    answer:
      "No. It’s a force multiplier. Zoe handles daily nudges and follow-ups, and escalates to real humans when needed.",
  },
  {
    question: "What do leaders see?",
    answer:
      "Aggregated, anonymized themes only by default. No individual messages, confessions, or prayers.",
  },
  {
    question: "Can it follow our statement of faith?",
    answer:
      "Yes. Churches can upload a statement of faith and guardrails so Zoe stays aligned with your doctrine.",
  },
];

export default function Churches() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [church, setChurch] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      name,
      church,
      email,
      source: "church-demo",
      submittedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("zoe_demo_church", JSON.stringify(payload));
    } catch (error) {
      console.warn("Unable to store demo submission", error);
    }
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/20">
      <main className="relative z-10 font-sans">
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
            <a href="/numi-landing" className="text-2xl font-bold tracking-tighter text-slate-900">
              Zoe
            </a>
            <a
              href="#demo"
              className="rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-6 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_20px_-5px_rgba(0,210,255,0.4)] transition-transform hover:scale-105"
            >
              Schedule a Demo
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-between px-6 pt-32 pb-16 lg:flex-row lg:gap-16 lg:pt-24 lg:pb-0 mx-auto max-w-[1400px]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-gradient-to-r from-vibrant-cyan/5 to-vibrant-jade/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#008ba3]">
                  Church-Aligned Discipleship Companion
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="mt-8 text-[3.25rem] font-extrabold leading-[1.05] tracking-tighter text-slate-900 md:text-[5rem] lg:text-[5.5rem]">
                Give Every Member
                <br />
                a Personal
                <br />
                Discipleship
                <span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent"> Companion.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-slate-500 md:text-xl leading-relaxed font-medium">
                You can’t personally follow up with 200 people every day. Zoe keeps Sunday alive Monday through Saturday with SMS-based nudges, Scripture, and practical next steps — aligned with your church.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-8 py-4 text-sm font-bold text-slate-900 shadow-[0_0_40px_-10px_rgba(0,210,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(0,240,181,0.8)]">
                  Schedule a Demo <ArrowRight className="h-5 w-5" />
                </a>

                <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
                  Pricing <ChevronDown className="h-5 w-5" />
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-500 sm:grid-cols-3">
                {["SMS-First (No App)", "Church Guardrails", "Aggregated Insights Only"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-jade" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="relative mt-16 w-full lg:mt-0 lg:w-1/2">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-hero-radial opacity-80" />
            <div className="relative rounded-[2.5rem] border border-slate-200 bg-white/70 p-10 shadow-soft-jade backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900/5">
                    <LayoutDashboard className="h-6 w-6 text-vibrant-cyan" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold tracking-tight">Pastor Dashboard</div>
                    <div className="mt-1 text-slate-500 font-medium">See themes, trends, and engagement (without reading anyone’s texts).</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900/5">
                    <FileText className="h-6 w-6 text-vibrant-jade" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold tracking-tight">Statement of Faith</div>
                    <div className="mt-1 text-slate-500 font-medium">Upload doctrinal guardrails so Zoe stays aligned with your church.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900/5">
                    <ShieldCheck className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold tracking-tight">Crisis Escalation</div>
                    <div className="mt-1 text-slate-500 font-medium">Safe handoff flows and optional escalation policies.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900/5">
                    <BarChart3 className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold tracking-tight">Sermon Integration</div>
                    <div className="mt-1 text-slate-500 font-medium">Tie weekly prompts to your current series and application points.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-10">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Starter</div>
              <div className="mt-2 text-4xl font-extrabold tracking-tight">$149/mo</div>
              <div className="mt-1 text-slate-500 font-medium">Up to 250 Members</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {["SMS Discipleship Companion", "Statement of Faith + Guardrails", "Aggregated Trends Dashboard"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-jade" />
                    <span className="font-semibold">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-10">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Growth</div>
              <div className="mt-2 text-4xl font-extrabold tracking-tight">$349/mo</div>
              <div className="mt-1 text-slate-500 font-medium">Up to 1000 Members</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {["Everything in Starter", "Higher Throughput", "Priority Onboarding"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-cyan" />
                    <span className="font-semibold">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="glass gradient-border rounded-3xl p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Want to Pilot Zoe?</h2>
                <p className="mt-3 text-slate-500 font-medium leading-relaxed">
                  We’ll set up your church profile and help you roll out via a simple SMS invite (QR + text).
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                  <Users className="h-5 w-5 text-vibrant-cyan" />
                  <span className="font-semibold">First pilots are white-glove.</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold outline-none placeholder:text-slate-400 focus:border-vibrant-cyan/60" />
                <input value={church} onChange={(e) => setChurch(e.target.value)} placeholder="Church Name" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold outline-none placeholder:text-slate-400 focus:border-vibrant-cyan/60" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold outline-none placeholder:text-slate-400 focus:border-vibrant-cyan/60" />
                <button type="submit" disabled={status === "sent"} className={clsx("w-full rounded-2xl px-6 py-4 text-sm font-extrabold transition-all", status === "sent" ? "bg-slate-200 text-slate-500" : "bg-gradient-to-r from-vibrant-cyan to-vibrant-jade text-slate-900 hover:scale-[1.01]")}
                >
                  {status === "sent" ? "Got it" : "Request Demo"}
                </button>
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
                <button key={faq.question} type="button" onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full rounded-3xl border border-slate-200 bg-white p-6 text-left">
                  <div className="flex items-center justify-between gap-6">
                    <div className="text-lg font-extrabold tracking-tight">{faq.question}</div>
                    <ChevronDown className={clsx("h-5 w-5 text-slate-500 transition-transform", isOpen && "rotate-180")} />
                  </div>
                  {isOpen && <p className="mt-4 text-slate-500 font-medium leading-relaxed">{faq.answer}</p>}
                </button>
              );
            })}
          </div>
        </section>

        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
            <div className="text-sm font-semibold text-slate-600">© {new Date().getFullYear()} freedomology</div>
            <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
              <a className="hover:text-slate-900" href="https://zoe.live/terms" target="_blank" rel="noreferrer">Terms</a>
              <a className="hover:text-slate-900" href="https://zoe.live/privacy" target="_blank" rel="noreferrer">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
