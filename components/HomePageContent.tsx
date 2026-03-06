"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, type FormEvent } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, ChevronDown, CheckCircle, MessageCircle, Users, BookOpen, MessageSquareHeart, ShieldCheck } from "lucide-react";
import dynamic from 'next/dynamic';
import ParallaxBackgrounds from './ParallaxBackgrounds';
import Hero2D from './Hero2D';
import StickySmsSection from './StickySmsSection';
import StickyRhythmsSection from './StickyRhythmsSection';
import ThesisSection from './ThesisSection';
import { Highlight } from './Highlight';
import { usePhoneFormatter } from '../app/hooks/usePhoneFormatter';

interface HomeProps {
  variant?: "default" | "jesus-red" | "emerald-uni" | "emerald-uni";
}

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
    answer: "Not even close. Zoe is a companion for the space between Sundays — the Monday through Saturday when your pastor isn't available and your small group isn't meeting. It's designed to point you toward God, not away from community. Think of it as the thing that helps you show up to church more engaged, not less.",
  },
  {
    question: "Is this just ChatGPT with a Bible?",
    answer: "No. Zoe is purpose-built for spiritual accompaniment, which means it's trained specifically to ask the right questions, hold your history, and walk at your pace — not generate generic religious content. The goal is never to give you information. It's to help you hear God and act on what He's saying.",
  },
  {
    question: "Is Zoe trying to replace the Holy Spirit?",
    answer: "No tool can do that and we'd never claim otherwise. Zoe's entire job is to help you pay attention — to what you're reading, what God might be saying, and what you're going to do about it. The Holy Spirit does the real work. Zoe just helps you stay in the room.",
  },
  {
    question: "Is Zoe biblically accurate?",
    answer: "We take this seriously. Zoe draws on original language scholarship, historical context, and sound theology to enrich your reading. When there are areas of theological debate, Zoe acknowledges them rather than pretending certainty that doesn't exist.",
  },
  {
    question: "Can my church use this? How would that work?",
    answer: "Yes — and it works well at the church level. A pastor or church leader can bring Zoe in as a tool for their congregation. Members use it individually and privately. Leadership gets an anonymized view of how the community is doing — what themes are surfacing, where people seem to be struggling — so they can preach and pastor more responsively. No individual messages are ever shared. If you're a church leader interested in rolling this out, reach out to us directly. We'd love to talk.",
  },
  {
    question: "Will this cause people to form unhealthy relationships with the technology?",
    answer: "It's a fair concern and we think about it constantly. Zoe is designed to point outward — toward God, toward Scripture, toward community — not to create dependency on the tool itself. We measure success by whether people are engaging more with their faith, not more with their phones.",
  },
  {
    question: "What about privacy?",
    answer: "See the full breakdown above. Short version: your conversations are private by default, data sharing is always opt-in, and we never sell your data or use it to train public models.",
  },
  {
    question: "Do humans at Zoe read my messages?",
    answer: "No. Your conversations are processed automatically to deliver your experience. No one on our team reads your personal messages.",
  },
  {
    question: "Is my data used to train models?",
    answer: "Your personal conversations are never used to train public models. Full stop.",
  },
  {
    question: "What does it cost?",
    answer: "We'll share pricing details when we open the waitlist. Join now and you'll be among the first to know — and the first in line for early adopter rates.",
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

export default function HomePageContent({ variant = "default" }: HomeProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = usePhoneFormatter("");

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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setSubmitError(null);

    try {
      const payload = {
        name,
        phone,
        email,
        source: "individuals-waitlist",
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok) {
        throw new Error(data?.details || data?.error || "Unable to submit waitlist request");
      }

      setStatus("sent");
    } catch (error) {
      console.warn("Waitlist submission error:", error);
      setStatus("idle");
      setSubmitError("We couldn't submit your request right now. Please try again in a moment.");
    }
  };

  return (
    <div className="min-h-screen text-slate-900 selection:bg-cyan-500/20">
      <main className="relative z-10 font-sans">
        <Hero2D variant={variant} />

        {/* Global Parallax Environment */}
        <ParallaxBackgrounds variant={variant} />

        {/* The Thesis */}
        <ThesisSection variant={variant} />

        {/* Act 1: The SMS Narrative */}
        <StickySmsSection variant={variant} />

        {/* Act 2: The Daily Rhythm */}
        <StickyRhythmsSection />

        {/* Act 3: The Clearing (Unified CTA & Pricing) */}
        <section ref={waitlistRef} id="waitlist" className={clsx("min-h-[150vh] relative", variant === "jesus-red" ? "bg-[#f5efe6]" : "bg-[#F8FBFA]")}>
          <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden py-24 md:py-40 px-4">
            {variant !== "jesus-red" && (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,194,146,0.05),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#f4f7f5] to-transparent pointer-events-none" />
              </>
            )}

            <div className="mx-auto max-w-5xl relative z-10 w-full">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={clsx("relative p-6 md:p-16 text-center overflow-hidden", variant === "jesus-red" ? "rounded-xl" : "rounded-[3rem]")}>
                {variant !== "jesus-red" ? (
                  <>
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.02)] border border-white" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-jade/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#faf7f0] border border-[#e0d8cd] shadow-lg shadow-black/5" />
                )}

                <div className="relative z-10">
                  <div className={clsx("inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm",
                    variant === "jesus-red" ? "rounded-md border border-[#e0d8cd] bg-[#f5efe6] text-[#7a2332]" : variant === "emerald-uni" ? "rounded-full bg-[#00c292] text-white border-transparent" : "rounded-full border border-brand-jade/20 bg-brand-jade/5 text-brand-jade")}>
                    Pre-Alpha Waitlist
                  </div>

                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                    Be among the first.
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
                    We're opening Zoe to a small group of early adopters. Join the waitlist and we'll let you know when your spot is ready.
                  </p>

                  <div className={clsx("mt-12 max-w-md mx-auto p-6 relative overflow-hidden",
                    variant === "jesus-red" ? "bg-white border border-[#e0d8cd] shadow-sm rounded-lg" : "rounded-2xl bg-slate-50/80 backdrop-blur-xl border border-slate-100 shadow-sm")}>
                    {status === "sent" ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-8 px-4 text-center">
                        <div className="w-16 h-16 bg-brand-jade/10 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-8 h-8 text-brand-jade" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">You're on the list!</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          We've received your request. We'll be in touch as soon as spots open up.
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
                          className={clsx("border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all shadow-sm", variant === "jesus-red" ? "rounded-md focus:ring-2 focus:ring-[#7a2332]/50 focus:border-[#7a2332]/50" : "rounded-xl focus:ring-2 focus:ring-brand-jade/50 focus:border-brand-jade/50")}
                        />
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          placeholder="Phone Number"
                          className={clsx("border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all shadow-sm", variant === "jesus-red" ? "rounded-md focus:ring-2 focus:ring-[#7a2332]/50 focus:border-[#7a2332]/50" : "rounded-xl focus:ring-2 focus:ring-brand-jade/50 focus:border-brand-jade/50")}
                        />
                        <input
                          required
                          type="email"
                          name="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Email Address"
                          className={clsx("border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all shadow-sm", variant === "jesus-red" ? "rounded-md focus:ring-2 focus:ring-[#7a2332]/50 focus:border-[#7a2332]/50" : "rounded-xl focus:ring-2 focus:ring-brand-jade/50 focus:border-brand-jade/50")}
                        />
                        <button
                          className={clsx("mt-2 px-4 py-4 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white shadow-lg",
                            variant === "jesus-red" ? "rounded-md bg-[#7a2332] shadow-[#7a2332]/20 hover:bg-[#5c1624] hover:-translate-y-0.5" : "rounded-xl bg-slate-900 shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5")}
                          type="submit"
                          disabled={status === "submitting"}
                        >
                          {status === "submitting" ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : "Join The Walk"}
                        </button>
                        {submitError ? (
                          <p className="text-center text-xs font-medium text-rose-600">{submitError}</p>
                        ) : null}
                        <p className="mt-3 text-xs leading-relaxed text-slate-400 text-center">
                          By joining, you consent to receive recurring automated SMS messages from Zoe by Freedomology at the phone number provided. Msg frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out or HELP for help.{" "}
                          <a href="/privacy" className="underline hover:text-slate-600 transition-colors">Privacy Policy</a>{" · "}
                          <a href="/terms" className="underline hover:text-slate-600 transition-colors">Terms of Service</a>
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust & Privacy */}
        <section className="py-20 md:py-32 px-6 bg-[#FCFAF8] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,211,77,0.05),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,194,146,0.05),transparent_50%)] pointer-events-none" />

          <div className="mx-auto max-w-3xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
              <div className={clsx("inline-flex items-center gap-2 border px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm",
                variant === "jesus-red" ? "rounded-md border-[#7a2332]/20 bg-[rgba(122,35,50,0.06)] text-[#7a2332]" : variant === "emerald-uni" ? "rounded-full bg-[#009f52] text-white border-transparent" : "rounded-full border-brand-jade/20 bg-brand-jade/5 text-brand-jade")}>
                Trust & Privacy
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter-editorial-relaxed text-slate-900 leading-[1.1] font-bold">
                How private is <Highlight type="underline" color="text-brand-jade" scrollOffset={["start 90%", "start 40%"]}>this?</Highlight>
              </h2>
              <p className="mt-8 text-xl text-slate-600 font-medium leading-relaxed">
                By default, completely private. We offer congregations the ability to anonymously share their data so church leaders can see broad trends but NEVER personal messages. Any kind of data sharing is opt-in and we are completely transparent about how your data gets processed to tailor your experience of Zoe.
              </p>
            </motion.div>

            <div ref={trustRef} className="relative flex flex-col gap-16">
              <div className="absolute left-[1px] top-0 bottom-0 w-[2px] bg-brand-jade/10 hidden md:block" />
              <motion.div style={{ height: trustLineHeight }} className="absolute left-[1px] top-0 w-[2px] bg-brand-jade hidden md:block" />

              {/* Individuals Block */}
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative md:pl-12 mb-8">
                  <h3 className="text-xl uppercase tracking-widest font-bold text-brand-jade mb-6">For Individuals:</h3>
                </motion.div>

                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="relative md:pl-12">
                    <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                      <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">Just between you and God.</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">Your conversations are never shared with your church, your pastor, or anyone else. What you bring to Zoe stays with you.</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative md:pl-12">
                    <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                      <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">Your data, your rules.</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">You can take your full history with you if you ever leave, or ask us to erase it completely. No hard feelings, no questions asked.</p>
                  </motion.div>
                </div>
              </div>

              {/* Churches Block */}
              <div className="mt-8">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative md:pl-12 mb-6">
                  <h3 className="text-xl uppercase tracking-widest font-bold text-brand-jade mb-4">For Churches:</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">If your church or organization chooses to use Zoe collectively, here's what that looks like:</p>
                </motion.div>

                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="relative md:pl-12">
                    <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                      <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">We share trends, not secrets.</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">Pastors can see how their congregation is doing as a whole — themes that are surfacing, areas where people are struggling — but never individual messages or personal confessions.</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative md:pl-12">
                    <div className="hidden md:flex absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-[#FCFAF8] border-2 border-brand-jade/30 flex-col items-center justify-center z-10 transition-colors duration-500">
                      <div className="w-2 h-2 rounded-full bg-brand-jade/80" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">You hold the keys.</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">Any data sharing at the congregation level is always opt-in. We are fully transparent about what gets shared and what doesn't.</p>
                  </motion.div>
                </div>
              </div>

            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 text-center border-t border-slate-200/60 pt-10">
              <p className="text-slate-500 font-medium mb-6 text-lg">Zoe is a closed, secure loop. We never sell your data, and we never use your personal moments to train public models.</p>
              <a href="/privacy" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-6 py-3 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all duration-300">
                Read Full Privacy Policy
              </a>
            </motion.div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-20 md:py-32 px-6 bg-[#F8FBFA] relative overflow-hidden">
          <div className="mx-auto max-w-4xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
              <div className={clsx("inline-flex items-center gap-2 border px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm",
                variant === "jesus-red" ? "rounded-md border-[#7a2332]/20 bg-[rgba(122,35,50,0.06)] text-[#7a2332]" : variant === "emerald-uni" ? "rounded-full bg-[#009f52] text-white border-transparent" : "rounded-full border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan")}>
                FAQs
              </div>
              <h2 className="text-4xl tracking-tighter-editorial-relaxed text-slate-900 md:text-5xl font-bold">You've got questions. <br className="md:hidden" />We get it.</h2>
              <p className="mt-6 text-lg text-slate-600 font-medium max-w-2xl mx-auto italic">(We'd be worried if you didn't have any.)</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <motion.div variants={fadeUp} key={i} className={clsx("shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300", variant === "jesus-red" ? "rounded-lg bg-[#faf7f0] border border-[#e0d8cd]" : "rounded-3xl bg-white")}>
                  <div className="w-full text-left p-8 pb-4">
                    <span className={clsx("font-semibold text-xl pr-8", variant === "jesus-red" ? "text-slate-900" : "text-brand-cyan")}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="px-8 pb-8 pt-0">
                    <p className="text-slate-600 leading-relaxed font-medium md:text-lg">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <footer className="bg-white text-slate-500 py-12 px-6 border-t border-slate-100 text-sm">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="font-medium text-slate-400">&copy; {new Date().getFullYear()} Zoe by Freedomology. All rights reserved.</div>
            <div className="flex gap-8 font-medium">
              <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="https://zoe.live" className="hover:text-slate-900 transition-colors">Zoe.live</a>
            </div>
          </div>
        </footer>

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
            className={clsx("px-6 py-4 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white shadow-xl shadow-slate-900/20 hover:-translate-y-0.5",
              variant === "jesus-red" ? "rounded-md bg-[#7a2332] hover:bg-[#5c1624]" : "rounded-full bg-slate-900 hover:bg-slate-800")}
          >
            Join The Walk
          </button>
        </motion.div>
      </main>
    </div>
  );
}
