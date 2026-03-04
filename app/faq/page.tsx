"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import Footer from "../../components/Footer";

const faqs = [
  {
    question: "Is Zoe replacing my pastor or my church?",
    answer:
      "Not even close. Zoe is a partner between Sundays — not a substitute for real community. Zoe will actually push you toward your small group, your pastor, and the people in your life. The goal is more human connection, not less.",
  },
  {
    question: "Is this just ChatGPT with a Bible?",
    answer:
      "No. ChatGPT requires you to initiate everything — it waits for you to prompt it. Zoe is proactive. Zoe reaches out to you unprompted, checks in on what you're praying about, and initiates conversations so you don't have to remember to log into a tool.",
  },
  {
    question: "Is Zoe trying to replace the Holy Spirit?",
    answer:
      "No — Zoe reminds you to listen for Him. Think of Zoe as the friend who nudges you and says 'hey, have you thought about what God might be doing here?' Zoe points you back to Jesus, every time. The goal isn't more AI in your life — it's more awareness of God in your life.",
  },
  {
    question: "Is Zoe biblically accurate?",
    answer:
      "Zoe is rooted in Scripture and takes the Bible seriously — the history, the context, the original languages. Zoe isn't going to make stuff up or proof-text you with a verse ripped out of context. Think of it like a tool that's done the homework and can help you go deeper.",
  },
  {
    question: "Will this cause people to form unhealthy relationships with AI?",
    answer:
      "This is a great question and we take it seriously. Think of Zoe like a really good journal that talks back — or a study partner. Nobody anthropomorphizes their journal, but they do feel connected to the practice of journaling. That's the energy. Zoe is an interactive, proactive prayer journal — not a simulated person. It helps you process, reflect, and stay consistent in your walk with God. The goal is always to nudge you toward real people — your pastor, your small group, your spouse, your friend. More human connection, not less.",
  },
  {
    question: "What about privacy?",
    answer:
      "Private by default. Your church does not see your individual messages unless you explicitly share something. Church leaders see aggregated trends only. Human access is restricted and audited, and AI training on your content is opt-in only.",
  },
  {
    question: "Do humans at Zoe read my messages?",
    answer:
      "Not by default. Internal access is role-restricted, logged, and limited to specific support or safety workflows.",
  },
  {
    question: "Is my data used to train AI models?",
    answer: "Not by default. Optional AI improvement/data sharing is opt-in.",
  },
  {
    question: "What does it cost?",
    answer:
      "After a 30-day free trial, it's $99 a year. Cancel anytime. No contracts, no guilt trips.",
  },
  {
    question: "How does Zoe remember what I've said?",
    answer:
      "Zoe stores your responses across conversations so it can follow up on commitments you've made, notice patterns, and ask better questions over time. You control how much it remembers, and you can ask it to forget anything at any time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-slate-900">
      <section className="bg-gradient-to-b from-[#1a1308] to-[#141008] py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-8">
            FAQ
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">
            You&apos;ve got questions.
            <br />
            <span className="text-slate-400">We get it.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-400 font-medium leading-relaxed italic">
            (We&apos;d be worried if you didn&apos;t have any.)
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
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
                className="bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden"
              >
                <button
                  className="flex w-full items-center justify-between p-8 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 text-lg pr-8 group-hover:text-brand-cyan transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={clsx(
                      "h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 transition-all duration-300 flex-shrink-0 group-hover:bg-brand-cyan/5",
                      { "rotate-180 bg-brand-cyan": openFaq === i }
                    )}
                  >
                    <ChevronDown
                      className={clsx("h-5 w-5 text-slate-400 transition-colors", {
                        "text-white": openFaq === i,
                        "group-hover:text-brand-cyan": openFaq !== i,
                      })}
                    />
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

          <div className="mt-16 text-center">
            <p className="text-slate-600 font-medium mb-4">Still have questions?</p>
            <Link
              href="mailto:hello@zoe.live"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
            >
              Reach out to us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">Ready to try it?</h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Join the waitlist. No app, no login — just your phone and a daily text.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
