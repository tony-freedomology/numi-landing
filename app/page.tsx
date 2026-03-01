"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, type FormEvent } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, ChevronDown, CheckCircle, MessageCircle, Users, BookOpen, MessageSquareHeart, ShieldCheck } from "lucide-react";
import dynamic from 'next/dynamic';
import ParallaxBackgrounds from '../components/ParallaxBackgrounds';
import StickySmsSection from '../components/StickySmsSection';
import StickyRhythmsSection from '../components/StickyRhythmsSection';
import ThesisSection from '../components/ThesisSection';
import { Highlight } from '../components/Highlight';

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
    answer: "No. ChatGPT requires you to initiate everything — it waits for you to prompt it. Zoe is proactive. Zoe reaches out to you unprompted, checks in on what you're praying about, and initiates conversations so you don't have to remember to log into a tool.",
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
    question: "Will this cause people to form unhealthy relationships with AI?",
    answer: "This is a great question and we take it seriously. Think of Zoe like a really good journal that talks back — or a study partner. Nobody anthropomorphizes their journal, but they do feel connected to the practice of journaling. That's the energy. Zoe is an interactive, proactive prayer journal — not a simulated person. It helps you process, reflect, and stay consistent in your walk with God. The goal is always to nudge you toward real people — your pastor, your small group, your spouse, your friend. More human connection, not less.",
  },
  {
    question: "What about privacy?",
    answer: "Private by default. Your church does not see your individual messages unless you explicitly share something. Church leaders see aggregated trends only. Human access is restricted and audited, and AI training on your content is opt-in only.",
  },
  {
    question: "Do humans at Zoe read my messages?",
    answer: "Not by default. Internal access is role-restricted, logged, and limited to specific support or safety workflows.",
  },
  {
    question: "Is my data used to train AI models?",
    answer: "Not by default. Optional AI improvement/data sharing is opt-in.",
  },
  {
    question: "What does it cost?",
    answer: "After a 14-day free trial, it's $7 a month. Cancel anytime. No contracts, no guilt trips.",
  },
];

const trustPillars = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-jade" />,
    title: "Private by default",
    body: "Your one-to-one conversations are not visible to church leaders by default."
  },
  {
    icon: <Users className="h-6 w-6 text-brand-cyan" />,
    title: "Aggregated insights only",
    body: "Church dashboards show trend-level health, not personal confessions or journal content."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-amber-400" />,
    title: "Consent controls",
    body: "You control memory depth, support access, and optional data-sharing settings."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    title: "Delete and export rights",
    body: "You can request export and deletion, including full account deletion."
  }
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const trustRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: trustScroll } = useScroll({
    target: trustRef,
    offset: ["start 80%", "end 60%"]
  });
  const trustLineHeight = useTransform(trustScroll, [0, 1], ["0%", "100%"]);

  const waitlistRef = useRef<HTMLElement>(null);
  const { scrollYProgress: waitlistScroll } = useScroll({
    target: waitlistRef,
    offset: ["end 70%", "end 20%"]
  });

  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });
      setStatus("sent");
    } catch (error) {
      console.warn("Waitlist submission error:", error);
      setStatus("idle");
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
        <section ref={waitlistRef} id="waitlist" className="min-h-[150vh] bg-[#F8FBFA] relative">
          <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden py-24 md:py-40 px-4">
            {/* Subtle Bright Glowing Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,194,146,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#f4f7f5] to-transparent pointer-events-none" />

            <div className="mx-auto max-w-5xl relative z-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative rounded-[3rem] p-6 md:p-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.02)] border border-white" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-jade/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8 shadow-sm">
                    Early Access Open
                  </div>

                  <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 leading-[1.1] pb-4 font-bold">
                    Wanna <Highlight type="underline" color="text-brand-jade" scrollOffset={["start 90%", "start 40%"]}>try it?</Highlight>
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

                  <div className="max-w-md mx-auto bg-slate-50/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                    {status === "sent" ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-8 px-4 text-center">
                        <div className="w-16 h-16 bg-brand-jade/10 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-8 h-8 text-brand-jade" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">You're on the list!</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          We've received your request. We'll be in touch as soon as early access opens up.
                        </p>
                      </motion.div>
                    ) : (
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
                          className="mt-2 rounded-xl px-4 py-4 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5"
                          type="submit"
                          disabled={status === "submitting"}
                        >
                          {status === "submitting" ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : "Request Early Access"}
                        </button>
                      </form>
                    )}
                    {status !== "sent" && (
                      <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                        <MessageCircle className="h-4 w-4" />
                        <span>Or text START to <span className="text-slate-900 font-semibold">+1 833 283 1080</span></span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust & Privacy */}
        <section className="py-20 md:py-32 px-6 bg-[#FCFAF8] relative overflow-hidden">
          {/* Soft, warm, organic backgrounds to match the top of the page */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,211,77,0.05),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,194,146,0.05),transparent_50%)] pointer-events-none" />

          <div className="mx-auto max-w-3xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8 shadow-sm">
                Trust & Privacy
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter-editorial text-slate-900 leading-[1.1] font-bold">
                How private is <Highlight type="underline" color="text-brand-jade" scrollOffset={["start 90%", "start 40%"]}>this?</Highlight>
              </h2>
              <p className="mt-8 text-xl text-slate-600 font-medium leading-relaxed">
                By default, completely private. We offer congregations the ability to anonymously share their data so church leaders can see broad trends but NEVER personal messages. Any kind of data sharing is opt-in and we are completely transparent about how your data gets processed to tailor your experience of Zoe.
              </p>
            </motion.div>

            <div ref={trustRef} className="relative flex flex-col gap-12 md:gap-16">
              {/* Continuous background track line */}
              <div className="absolute left-[1px] top-0 bottom-0 w-[2px] bg-brand-jade/10 hidden md:block" />
              {/* Animated drawn line */}
              <motion.div style={{ height: trustLineHeight }} className="absolute left-[1px] top-0 w-[2px] bg-brand-jade hidden md:block" />

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative md:pl-12">
                <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">Just between you and God.</h3>
                <p className="text-lg text-slate-600 leading-relaxed">Your conversations are yours alone. We never, ever share them with your church leaders. They just get to see how the community is doing as a whole.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative md:pl-12">
                <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">We share trends, not secrets.</h3>
                <p className="text-lg text-slate-600 leading-relaxed">We give pastors the big picture so they know how to support and preach to their congregation better, without ever sharing your personal confessions.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative md:pl-12">
                <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">You hold the keys.</h3>
                <p className="text-lg text-slate-600 leading-relaxed">You're always in the driver's seat. If you ever want Zoe to forget a specific prayer or change who can support you, just let us know.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative md:pl-12">
                <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">Your data, your rules.</h3>
                <p className="text-lg text-slate-600 leading-relaxed">You can take your entire spiritual history with you if you ever decide to leave, or ask us to erase it completely. No hard feelings, and no questions asked.</p>
              </motion.div>

            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 text-center border-t border-slate-200/60 pt-10">
              <p className="text-slate-500 font-medium mb-6">Zoe is a closed, secure loop. We never sell your data, and we never use your personal moments to train public AI models.</p>
              <a href="/privacy" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-6 py-3 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all duration-300">
                Read Full Privacy Policy
              </a>
            </motion.div>
          </div>
        </section >

        {/* FAQ - Matches the bright optimistic vibe */}
        < section className="py-20 md:py-32 px-6 bg-[#F8FBFA] relative overflow-hidden" >
          <div className="mx-auto max-w-4xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-6 shadow-sm">
                FAQs
              </div>
              <h2 className="text-4xl tracking-tighter-editorial text-slate-900 md:text-5xl font-bold">You've got questions. <br className="md:hidden" />We get it.</h2>
              <p className="mt-6 text-lg text-slate-600 font-medium max-w-2xl mx-auto italic">(We'd be worried if you didn't have any.)</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300">
                  <button
                    className="flex w-full items-center justify-between p-8 text-left transition-colors group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-slate-900 text-lg pr-8 group-hover:text-brand-cyan transition-colors">{faq.question}</span>
                    <div className={clsx("h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 transition-all duration-300 flex-shrink-0 group-hover:bg-brand-cyan/5", { "rotate-180 bg-brand-cyan": openFaq === i })}>
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
        </section >

        <footer className="bg-white text-slate-500 py-12 px-6 border-t border-slate-100 text-sm">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="font-medium text-slate-400">© {new Date().getFullYear()} Zoe by Freedomology. All rights reserved.</div>
            <div className="flex gap-8 font-medium">
              <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="https://zoe.live" className="hover:text-slate-900 transition-colors">Zoe.live</a>
            </div>
          </div>
        </footer>

        {/* Sticky Global CTA (appears after scrolling past the waitlist) */}
        <motion.div
          style={{
            opacity: waitlistScroll,
            y: useTransform(waitlistScroll, [0, 1], [50, 0]),
            pointerEvents: useTransform(waitlistScroll, v => v > 0.1 ? 'auto' : 'none')
          }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none"
        >
          <button
            onClick={() => window.scrollTo({ top: waitlistRef.current?.offsetTop, behavior: 'smooth' })}
            className="rounded-full px-6 py-4 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-0.5"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </main >
    </div >
  );
}
