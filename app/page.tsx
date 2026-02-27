"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, ChevronDown, CheckCircle, MessageCircle, Users, BookOpen, MessageSquareHeart, ShieldCheck } from "lucide-react";
import SmsAnimation from "../components/SmsAnimation";
import dynamic from 'next/dynamic';
import ParallaxBackgrounds from '../components/ParallaxBackgrounds';
import StickySmsSection from '../components/StickySmsSection';
import StickyRhythmsSection from '../components/StickyRhythmsSection';
import ThesisSection from '../components/ThesisSection';

const Hero2D = dynamic(() => import('../components/Hero2D'), {
  ssr: false,
  loading: () => <div className="w-full h-[85vh] min-h-[600px] max-h-[900px] bg-[#e0f2fe]" />
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
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
    question: "Is Zoe replacing my pastor or my church?",
    answer: "Not even close. Zoe is a partner between Sundays — not a substitute for real community. Zoe will actually push you toward your small group, your pastor, and the people in your life. The goal is more human connection, not less.",
  },
  {
    question: "Is this just ChatGPT with a Bible?",
    answer: "No. ChatGPT requires you to initiate everything — it waits for you to prompt it. Zoe is proactive. Zoe reaches out to you unprompted, checks in on what you're praying about, and initiates conversations so you don't have to remember to log into a tool. It's a relationship, not a search engine.",
  },
  {
    question: "Is Zoe trying to replace the Holy Spirit?",
    answer: "No — Zoe reminds you to listen for Him. Think of Zoe as the friend who nudges you and says 'hey, have you thought about what God might be doing here?' Zoe points you back to Jesus, every time. The goal isn't more AI in your life — it's more awareness of God in your life.",
  },
  {
    question: "Is Zoe biblically accurate?",
    answer: "Zoe is rooted in Scripture and takes the Bible seriously — the history, the context, the original languages. Zoe isn't going to make stuff up or proof-text you with a verse ripped out of context. Think of it like a tool that's done the homework and can help you go deeper.",
  },
  {
    question: "What about privacy?",
    answer: "Your conversations are between you and Zoe. Period. If your church provides Zoe, leaders only see big-picture themes across the whole congregation — never your individual messages.",
  },
  {
    question: "What does it cost?",
    answer: "After a 14-day free trial, it's $7 a month. Cancel anytime. No contracts, no guilt trips.",
  },
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });
    } catch (error) {
      console.warn("Waitlist submission error:", error);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 selection:bg-cyan-500/20">
      <main className="relative z-10 font-sans">
        <Hero2D />
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-end p-6">
            <div className="flex items-center gap-3">
              <a
                href="/churches"
                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 sm:inline-flex"
              >
                For Churches
              </a>
            </div>
          </div>
        </header>

        {/* Global Parallax Environment */}
        <ParallaxBackgrounds />

        {/* The Thesis */}
        <ThesisSection />

        {/* Act 1: The SMS Narrative */}
        <StickySmsSection />

        {/* Act 2: The Daily Rhythm */}
        <StickyRhythmsSection />

        {/* Act 3: The Clearing (Unified CTA & Pricing) */}
        <section id="waitlist" className="py-40 px-4 bg-[#F8FBFA] relative overflow-hidden">
          {/* Subtle Bright Glowing Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,194,146,0.05),transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#f4f7f5] to-transparent pointer-events-none" />

          <div className="mx-auto max-w-5xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 md:p-16 text-center shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-jade/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
                  Early Access Open
                </div>

                <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 leading-[1.1]">
                  Ready to walk <span className="text-brand-jade font-semibold">with intention</span>?
                </h2>

                <p className="mt-6 text-lg text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
                  We're opening this up to a small group of early adopters. Try it free for 14 days. Keep it if it helps.
                </p>

                <div className="mt-10 mb-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-jade" />
                    <span>14-Day Free Trial</span>
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="flex items-center gap-2 text-slate-900">
                    <span className="font-bold border-b border-slate-300 pb-0.5">$7/Month After</span>
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <span>Cancel Anytime</span>
                  </div>
                </div>

                <div className="max-w-md mx-auto bg-slate-50/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <form className="flex flex-col gap-4" onSubmit={handleWaitlistSubmit}>
                    <input type="hidden" name="source" value="individuals-waitlist" />
                    <input
                      required
                      type="text"
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your Name"
                      className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-jade/50 focus:border-brand-jade/50 transition-all shadow-sm"
                    />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="Phone Number"
                      className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-jade/50 focus:border-brand-jade/50 transition-all shadow-sm"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Email Address"
                      className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-jade/50 focus:border-brand-jade/50 transition-all shadow-sm"
                    />
                    <button
                      className={clsx(
                        "mt-2 rounded-xl px-4 py-4 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                        status === "sent"
                          ? "bg-brand-jade text-white shadow-lg shadow-brand-jade/20"
                          : "bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5"
                      )}
                      type="submit"
                    >
                      {status === "sent" ? <><CheckCircle className="h-5 w-5" /> Request Received!</> : "Request Early Access"}
                    </button>
                  </form>
                  <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                    <MessageCircle className="h-4 w-4" />
                    <span>Or text START to <span className="text-slate-900 font-semibold">+1 833 283 1080</span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ - Matches the bright optimistic vibe */}
        <section className="py-32 px-6 bg-[#F8FBFA] relative overflow-hidden">
          <div className="mx-auto max-w-4xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
                FAQs
              </div>
              <h2 className="text-4xl tracking-tighter-editorial text-slate-900 md:text-5xl">Simple to start. <br className="md:hidden" /><span className="text-brand-jade">Easy to keep.</span></h2>
              <p className="mt-6 text-lg text-slate-600 font-medium max-w-2xl mx-auto">Everything you need to know about Zoe for individuals.</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                  <button
                    className="flex w-full items-center justify-between p-8 text-left transition-colors group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-slate-900 text-lg pr-8 group-hover:text-brand-cyan transition-colors">{faq.question}</span>
                    <div className={clsx("h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 flex-shrink-0 group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5", { "rotate-180 bg-brand-cyan border-brand-cyan": openFaq === i })}>
                      <ChevronDown className={clsx("h-5 w-5 text-slate-400 transition-colors", { "text-white": openFaq === i, "group-hover:text-brand-cyan": openFaq !== i })} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-0">
                          <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <footer className="bg-white text-slate-500 py-12 px-6 border-t border-slate-100 text-sm">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="font-medium text-slate-400">© {new Date().getFullYear()} Zoe by Freedomology. All rights reserved.</div>
            <div className="flex gap-8 font-medium">
              <a href="https://zoe.live/privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="https://zoe.live/terms" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="https://zoe.live" className="hover:text-slate-900 transition-colors">Zoe.live</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
