"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { ArrowRight, ChevronDown, CheckCircle, MessageCircle, Users, BookOpen, MessageSquareHeart, ShieldCheck } from "lucide-react";
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
    question: "Is Zoe Replacing My Pastor Or My Church?",
    answer: "No. Zoe Is A Companion, Not A Replacement. It’s Designed To Push You Toward Real Community — Small Group, Prayer Partners, And Your Pastor When Needed.",
  },
  {
    question: "Is This Just ChatGPT With A Bible?",
    answer: "No. Zoe Is Built Around Simple Daily Rhythms And Memory-Driven Follow-Ups, So It Remembers What You’re Working On And Closes Loops (Intention → Action → Reflection).",
  },
  {
    question: "What About Privacy?",
    answer: "Your Conversations Are Private. If Your Church Provides Zoe, Leaders See Only Aggregated Themes (Not Your Individual Messages) By Default.",
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
      source: "individuals-waitlist",
      submittedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("zoe_waitlist_individual", JSON.stringify(payload));
    } catch (error) {
      console.warn("Unable To Store Waitlist Submission", error);
    }
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/20">
      <main className="relative z-10 font-sans">
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
            <div className="text-2xl font-bold tracking-tighter text-slate-900">Zoe</div>
            <div className="flex items-center gap-3">
              <a
                href="/numi-landing/churches"
                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:inline-flex"
              >
                For Churches
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

        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-between px-6 pt-32 pb-16 lg:flex-row lg:gap-16 lg:pt-24 lg:pb-0 mx-auto max-w-[1400px]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-gradient-to-r from-vibrant-cyan/5 to-vibrant-jade/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#008ba3]">
                  Your Personal Faith Companion
                </div>
              </motion.div>
              <motion.h1 variants={fadeUp} className="mt-8 text-[3.25rem] font-extrabold leading-[1.05] tracking-tighter text-slate-900 md:text-[5rem] lg:text-[5.5rem]">
                A Companion <br />For Your Walk <br />With <span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">Jesus.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-slate-500 md:text-xl leading-relaxed font-medium">
                Sunday Inspires You — Then Monday Hits. Zoe Keeps The Conversation Going With Scripture, Prayer Prompts, And Simple Daily Rhythms That Actually Turn Into Action.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row" id="start">
                <a href="#waitlist" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-8 py-4 text-sm font-bold text-slate-900 shadow-[0_0_40px_-10px_rgba(0,210,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(0,240,181,0.8)]">
                  Text START To +1 833 283 1080 <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/numi-landing/churches" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-700 border border-slate-200 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900">
                  For Churches
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-500 sm:grid-cols-3">
                {["14-Day Free Trial", "$7/Month After", "Cancel Anytime"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-vibrant-jade" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16 w-full lg:mt-0 lg:w-1/2 relative flex justify-center lg:justify-end lg:h-[700px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-vibrant-cyan/20 to-vibrant-jade/20 blur-[100px] -z-10 rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              className="relative w-full aspect-square lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,210,255,0.3)]"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/numi-landing/images/hero-monday.png)" }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-cyan/15 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Cross-Link Banner */}
        <section className="px-6 py-10 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/70 px-8 py-10 text-center md:flex-row md:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-cyan">For Churches</div>
              <h3 className="mt-3 text-2xl font-bold">Leading A Church? Zoe Helps You Shepherd All Week →</h3>
              <p className="mt-2 text-slate-300">Discover A Church-Aligned Discipleship Companion For Your Congregation.</p>
            </div>
            <a
              href="/numi-landing/churches"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition-transform hover:scale-105"
            >
              Explore Churches
            </a>
          </div>
        </section>

        {/* SMS Magic / No App Required */}
        <section id="sms" className="py-24 px-4 bg-slate-50 relative">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Discipleship Without The Friction.</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
                You’re Tired Of Apps You Forget To Open. Zoe Meets You Exactly Where You Already Are: Your Text Messages. It Remembers Your Prayers, Checks In, And Keeps The Conversation Going.
              </p>

              <div className="mt-10 space-y-6">
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-vibrant-cyan/10 text-brand-cyan">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">No App Required</h3>
                    <p className="mt-2 text-slate-500 font-medium">Frictionless Discipleship Connection. Zoe Lives Entirely Inside Your Phone’s Native Text Messaging App.</p>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-vibrant-jade/10 text-vibrant-jade">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Memory-Driven Follow-Ups</h3>
                    <p className="mt-2 text-slate-500 font-medium">If You Mention A Big Interview Or A Difficult Conversation, Zoe Will Proactively Text You Later To Ask How It Went.</p>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/5 text-slate-900">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Pushes You Toward Community</h3>
                    <p className="mt-2 text-slate-500 font-medium">Zoe Doesn’t Replace Christian Community — It Strengthens It. It Nudges You To Text A Friend, Talk To A Leader, Bring Something To Your Small Group, And Stay Connected Between Sundays.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-cyan/20 to-vibrant-jade/20 rounded-[3rem] transform rotate-3" />
              <SmsAnimation />
            </motion.div>
          </div>
        </section>

        {/* Daily Rhythm */}
        <section className="py-32 px-6 bg-slate-50">
          <div className="mx-auto max-w-6xl text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Faith That Actually Shows Up On Monday.</motion.h2>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 grid gap-8 md:grid-cols-3">
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                <div className="text-vibrant-cyan font-bold mb-6 text-xs tracking-[0.2em] uppercase">Morning (2 Min)</div>
                <h3 className="text-2xl font-bold text-slate-900">The Anchor</h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-medium">Receive One Scripture, A Short Reflection, And One Simple “Do This Today” Step That Fits Your Real Life — Not A Generic Script.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                <div className="text-slate-400 font-bold mb-6 text-xs tracking-[0.2em] uppercase group-hover:text-slate-600 transition-colors">Midday (15 Sec)</div>
                <h3 className="text-2xl font-bold text-slate-900">The Nudge</h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-medium">A Quick, Optional Text. “Pause: Breathe, Pray One Sentence, Re-Center.” Or A Reminder To Surrender.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                <div className="text-vibrant-jade font-bold mb-6 text-xs tracking-[0.2em] uppercase">Evening (2 Min)</div>
                <h3 className="text-2xl font-bold text-slate-900">The Recap</h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-medium">“Where Did You Actually Walk With Jesus Today?” Zoe Remembers What’s Going On In Your Life And Follows Up In A Way That’s Genuinely Personal.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Simple Pricing For Individuals
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-lg text-slate-600 font-medium">
              Start With A 14-Day Free Trial. Keep It If It Helps.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 inline-flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-10 py-8 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-cyan">Zoe For Individuals</div>
              <div className="mt-4 text-4xl font-bold text-slate-900">$7<span className="text-base font-semibold text-slate-500">/Month</span></div>
              <div className="mt-2 text-sm text-slate-500">After 14-Day Free Trial</div>
            </motion.div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-32 px-4 bg-gradient-to-br from-white to-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">Early Access Open</div>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tighter leading-tight text-slate-900 md:text-[3.5rem]">
                Ready For A <br /><span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">Daily Faith Rhythm</span>?
              </h2>
              <p className="mt-6 text-xl text-slate-500 font-medium">We Are Accepting A Small Cohort Of Early Adopters For The Zoe Beta.</p>
              <form className="mt-8 flex flex-col gap-4" onSubmit={handleWaitlistSubmit}>
                <input type="hidden" name="source" value="individuals-waitlist" />
                <input
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your Name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone Number"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
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
                  {status === "sent" ? <><CheckCircle className="h-5 w-5" /> Request Received!</> : "Request Early Access"}
                </button>
              </form>
              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-500">
                <MessageCircle className="h-5 w-5 text-vibrant-cyan" />
                <span className="font-semibold">Or Text START To +1 833 283 1080</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-6 bg-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-vibrant-cyan/10 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-4xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow-sm mb-6">
                FAQs
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Simple To Start. <span className="text-slate-400">Easy To Keep.</span></h2>
              <p className="mt-6 text-xl text-slate-600 font-medium max-w-2xl mx-auto">Everything You Need To Know About Zoe For Individuals.</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button
                    className="flex w-full items-center justify-between p-8 text-left bg-white hover:bg-slate-50 transition-colors group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-bold text-slate-900 text-lg pr-8 group-hover:text-vibrant-cyan transition-colors">{faq.question}</span>
                    <div className={clsx("h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 transition-transform duration-300 flex-shrink-0 group-hover:bg-vibrant-cyan/10 group-hover:border-vibrant-cyan/20", { "rotate-180 bg-vibrant-cyan/10 border-vibrant-cyan/20": openFaq === i })}>
                      <ChevronDown className={clsx("h-5 w-5 text-slate-400 transition-colors", { "text-vibrant-cyan": openFaq === i, "group-hover:text-vibrant-cyan": openFaq !== i })} />
                    </div>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 pt-0 bg-white"
                    >
                      <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <footer className="bg-slate-50 text-slate-500 py-12 px-4 text-sm">
          <div className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="font-medium">© {new Date().getFullYear()} Zoe By Freedomology. All Rights Reserved.</div>
            <div className="flex gap-6 font-medium">
              <a href="https://zoe.live/privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="https://zoe.live/terms" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="https://zoe.live" className="hover:text-slate-900 transition-colors">Zoe.Live</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
