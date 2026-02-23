"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

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

const objections = [
  {
    question: "Is Numi trying to replace my pastor?",
    answer: "No. Numi is a daily companion that pushes you TOWARD your church community, not away from it.",
  },
  {
    question: "Is this just ChatGPT with a Bible?",
    answer: "No. Numi has persistent memory of YOUR journey, follows up on YOUR commitments, and is aligned with YOUR church's teaching.",
  },
  {
    question: "Will AI handle sensitive conversations?",
    answer: "Numi has strict guardrails. Crisis situations are immediately routed to real human support.",
  },
  {
    question: "Is my data safe?",
    answer: "Your conversations are private. Pastors only see aggregated, anonymous themes — never individual confessions or prayers.",
  },
];

const testimonials = [
    {
        quote: "Numi has been a game-changer for my daily spiritual practices. It feels like a friend who knows me.",
        author: "Jordan Smith",
        role: "Early Access User"
    },
    {
        quote: "As a pastor, I'm excited to see how Numi can help our congregation stay engaged with Scripture throughout the week.",
        author: "Rev. Michael Johnson",
        role: "Ministry Partner"
    },
    {
        quote: "The design is beautiful and calming. It helps me focus and reflect.",
        author: "Alex Green",
        role: "Beta Tester"
    }
]

const faqs = [
    {
        question: "How much will Numi cost?",
        answer: "We are still finalizing pricing, but we are committed to making Numi accessible for individuals and churches. We will offer a free trial period for all users."
    },
    {
        question: "What translations of the Bible does Numi use?",
        answer: "Numi will support a wide range of popular Bible translations, including the NIV, ESV, KJV, and NLT. You will be able to choose your preferred translation in the app settings."
    },
    {
        question: "Is Numi available on both iOS and Android?",
        answer: "Yes, Numi will be available on both iOS and Android devices at launch."
    }
]


export default function Home() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500/20">
      <div className="absolute inset-0 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { duration: 2, ease: "easeOut" } }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-image.png)" }}
        />
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-halo" />
      </div>
      
      <main className="relative z-10 font-sans">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                <div className="text-2xl font-bold tracking-tighter">Numi</div>
                <button className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-black shadow-soft-gold transition-transform hover:scale-105">
                    Join Waitlist
                </button>
            </div>
        </header>

        <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center gap-6">
            <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
                    Spiritual Formation AI
                </div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-semibold leading-tight md:text-7xl">
              A companion for your walk with God.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg text-white/70 md:text-xl">
              Numi is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-black shadow-soft-gold transition-transform hover:scale-105">
                Join the waitlist <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/40">
                How it Works
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4">
            <div className="mx-auto max-w-5xl text-center">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl font-semibold">How it works</motion.h2>
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 max-w-xl mx-auto text-lg text-white/70">Three simple steps to a more intentional spiritual journey.</motion.p>
                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 grid gap-8 md:grid-cols-3">
                    <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">1</div>
                        <h3 className="text-xl font-semibold">Sign Up</h3>
                        <p className="text-white/60">Join the waitlist and create your Numi profile.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">2</div>
                        <h3 className="text-xl font-semibold">Set your rhythm</h3>
                        <p className="text-white/60">Choose your focus areas and how often Numi should check in.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">3</div>
                        <h3 className="text-xl font-semibold">Walk with Numi daily</h3>
                        <p className="text-white/60">Receive personalized prompts and guidance to help you grow.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>


        {/* Objections */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
              <h2 className="text-4xl font-semibold">Your questions, answered.</h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-white/70">We believe in transparency and honoring the role of the local church. Numi is a tool, not a replacement.</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 grid gap-6 md:grid-cols-2">
              {objections.map((obj, i) => (
                <motion.div variants={fadeUp} key={i} className="glass gradient-border rounded-2xl p-6">
                  <h3 className="font-semibold text-gold-400">{obj.question}</h3>
                  <p className="mt-2 text-white/80">{obj.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-20 px-4 bg-cover bg-center" style={{backgroundImage: "url(/images/community-image.png)"}}>
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl font-semibold">Loved by our early community</motion.h2>
                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map((t,i) => (
                        <motion.div variants={fadeUp} key={i} className="glass gradient-border rounded-2xl p-6 text-left">
                            <p className="text-white/90">"{t.quote}"</p>
                            <div className="mt-4">
                                <p className="font-semibold">{t.author}</p>
                                <p className="text-sm text-white/60">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>


        {/* For Churches */}
        <section className="py-20 px-4">
            <div className="mx-auto max-w-5xl">
                <motion.div 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true }} 
                    className="glass gradient-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8"
                >
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold">Bring Numi to your congregation</h2>
                        <p className="mt-4 text-white/70">Numi provides church leaders with tools to support their community's spiritual growth. Get anonymized insights, create custom discipleship tracks, and provide a modern tool for your people.</p>
                        <button className="mt-6 group inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-500/30 px-6 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500/20">
                            Learn more about Numi for Churches <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                    <div className="flex-1 h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url(/images/feature-image.png)"}}>
                        <p className="text-white/40 sr-only">Image of a phone in hand</p>
                    </div>
                </motion.div>
            </div>
        </section>


        {/* FAQ */}
        <section className="py-20 px-4">
            <div className="mx-auto max-w-3xl">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
                    <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
                </motion.div>
                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <motion.div variants={fadeUp} key={i} className="glass gradient-border rounded-xl p-1">
                            <button
                                className="flex w-full items-center justify-between p-5 text-left"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <span className="font-semibold">{faq.question}</span>
                                <ChevronDown className={clsx("h-5 w-5 transition-transform", { "rotate-180": openFaq === i })} />
                            </button>
                            {openFaq === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                    animate={{ height: 'auto', opacity: 1, marginTop: '0rem' }}
                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                    className="overflow-hidden px-5 pb-5"
                                >
                                    <p className="text-white/70">{faq.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Waitlist Form */}
        <section id="waitlist" className="py-20 px-4">
            <div className="mx-auto max-w-md text-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <div className="text-sm uppercase tracking-[0.3em] text-gold-400">Join the journey</div>
                    <h2 className="mt-4 text-4xl font-semibold">Be the first to experience Numi</h2>
                    <form
                        className="mt-8 flex flex-col gap-4"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setStatus("sent");
                        }}
                        >
                        <input
                            required
                            type="text"
                            placeholder="Full name"
                            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
                        />
                        <input
                            required
                            type="email"
                            placeholder="Email address"
                            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
                        />
                        <button
                            className={clsx(
                            "rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                            status === "sent"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-gold-500 text-black shadow-soft-gold hover:scale-105"
                            )}
                            type="submit"
                        >
                            {status === "sent" ? <><CheckCircle className="h-5 w-5" /> You're on the list!</> : "Join Waitlist"}
                        </button>
                    </form>
                    <p className="mt-4 text-xs text-white/40">We will only send essentials. No spam.</p>
                </motion.div>
            </div>
        </section>


        <footer className="mx-auto max-w-7xl border-t border-white/10 py-10 px-4 text-sm text-white/50">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>&copy; {new Date().getFullYear()} Numi by Freedomology. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
