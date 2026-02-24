"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { ArrowRight, ChevronDown, CheckCircle, MessageCircle, BarChart3, Users, Settings, ShieldCheck, BookOpen, UserCheck, MessageSquareHeart, SlidersHorizontal, FileText, LayoutDashboard, Quote } from "lucide-react";
import SmsAnimation from "../../components/SmsAnimation";

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
    icon: <UserCheck className="h-6 w-6 text-vibrant-cyan" />,
    question: "Is Zoe trying to replace my pastor?",
    answer: "No. Zoe is a tool for pastors, not a replacement for them. It’s designed to strengthen real discipleship relationships and push people TOWARD community — small groups, prayer partners, and pastoral care when needed.",
  },
  {
    icon: <Users className="h-6 w-6 text-vibrant-jade" />,
    question: "Shouldn’t people just text a friend instead of an AI?",
    answer: "Yes — deep relationships are the goal. Zoe doesn’t compete with that; it reinforces it. It helps people take a first step (especially when they’re stuck or isolated), and then it nudges them toward real people with practical prompts like “reach out to someone,” “bring this to your small group,” or “talk to a pastor.”",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-vibrant-jade" />,
    question: "Is this just ChatGPT with a Bible?",
    answer: "No. Zoe has persistent relational memory. It remembers your people's journeys, follows up on their commitments, and turns Sunday inspiration into Monday application.",
  },
  {
    icon: <MessageSquareHeart className="h-6 w-6 text-rose-500" />,
    question: "Will AI handle sensitive conversations?",
    answer: "Zoe has strict theological and safety guardrails. Crisis situations are immediately routed to real human support and your church leaders.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-500" />,
    question: "Is my congregation's data safe?",
    answer: "Yes. Conversations are private. Pastors only see aggregated, anonymous themes to understand the health of the congregation — never individual confessions or prayers.",
  },
];

const faqs = [
  {
    question: "How do we roll this out?",
    answer: "We offer a white-glove onboarding process for your staff and volunteer teams. We'll set up your church profile, integrate your sermon series, and provide all the marketing materials you need to share Zoe with your church."
  },
  {
    question: "Does it require my congregation to download another app?",
    answer: "No. The magic of Zoe is that it happens entirely over text message (SMS). Your congregation wants to live differently, but app fatigue is real. Zoe meets your people where they already are."
  },
  {
    question: "What if some people in my church don’t want anything to do with AI?",
    answer: "That’s okay. This is opt-in, not a new requirement. The goal isn’t to replace real discipleship — it’s to give people an extra tool during the week. For many churches, even 10–20% adoption is enough to create meaningful fruit without dividing the room."
  }
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
      source: "churches-waitlist",
      submittedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("zoe_waitlist_church", JSON.stringify(payload));
    } catch (error) {
      console.warn("Unable to store waitlist submission", error);
    }
    // TODO: connect waitlist form to real backend (e.g. Supabase, HubSpot, ConvertKit)
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/20">

      <main className="relative z-10 font-sans">
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
            <div className="text-2xl font-bold tracking-tighter text-slate-900">Zoe</div>
            <a href="#waitlist" className="rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-6 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_20px_-5px_rgba(0,210,255,0.4)] transition-transform hover:scale-105">
              Partner With Us
            </a>
          </div>
        </header>

        {/* Hero Section - Split Layout */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-between px-6 pt-32 pb-16 lg:flex-row lg:gap-16 lg:pt-24 lg:pb-0 mx-auto max-w-[1400px]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-gradient-to-r from-vibrant-cyan/5 to-vibrant-jade/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#008ba3]">
                  A Church-Aligned Discipleship Companion
                </div>
              </motion.div>
              <motion.h1 variants={fadeUp} className="mt-8 text-[3.5rem] font-extrabold leading-[1.05] tracking-tighter text-slate-900 md:text-[5.5rem] lg:text-[6rem]">
                A Companion <br />For Your Walk <br />With <span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">Jesus.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-slate-500 md:text-xl leading-relaxed font-medium">
                Sunday mornings inspire people — then real life hits on Monday, and most people forget what you preached (or they just don’t know how to apply it). Zoe is an SMS-based companion that keeps the conversation going Monday through Saturday, in a way that’s aligned with what your church actually teaches.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#churches" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vibrant-cyan to-vibrant-jade px-8 py-4 text-sm font-bold text-slate-900 shadow-[0_0_40px_-10px_rgba(0,210,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(0,240,181,0.8)]">
                  For Church Leaders <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-700 border border-slate-200 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900">
                  For Individuals
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16 w-full lg:mt-0 lg:w-1/2 relative flex justify-center lg:justify-end lg:h-[700px]">
            {/* Soft Glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-vibrant-cyan/20 to-vibrant-jade/20 blur-[100px] -z-10 rounded-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              className="relative w-full aspect-square lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,210,255,0.3)]"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-monday.png)" }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-cyan/15 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Cross-link banner */}
        <section className="px-6 py-10 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/70 px-8 py-10 text-center md:flex-row md:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-cyan">For Individuals</div>
              <h3 className="mt-3 text-2xl font-bold">Looking for personal use? Try Zoe for Individuals →</h3>
              <p className="mt-2 text-slate-300">Explore daily texts and personal discipleship rhythms.</p>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition-transform hover:scale-105"
            >
              Explore Individuals
            </a>
          </div>
        </section>

        {/* SMS Magic / No App Required */}
        <section id="individuals" className="py-24 px-4 bg-slate-50 relative">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Discipleship Without The Friction.</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
                Your people are tired of downloading new apps that they forget to open. Zoe meets them exactly where they already are: their text messages. It remembers their prayer requests, checks in on them, and follows up on the things that matter.
              </p>

              <div className="mt-10 space-y-6">
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-vibrant-cyan/10 text-brand-cyan">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">No App Required</h3>
                    <p className="mt-2 text-slate-500 font-medium">Frictionless discipleship connection. Zoe lives entirely inside your phone's native text messaging app.</p>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-vibrant-jade/10 text-vibrant-jade">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Proactive Follow-Ups</h3>
                    <p className="mt-2 text-slate-500 font-medium">If they mention a big interview or a difficult conversation, Zoe will proactively text them later to ask how it went.</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/5 text-slate-900">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">It Pushes People Toward People</h3>
                    <p className="mt-2 text-slate-500 font-medium">Zoe doesn’t replace Christian community — it strengthens it. It nudges people to text a friend, talk to a leader, bring something to their small group, and actually stay connected between Sundays.</p>
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

        {/* How it works (Day-to-day Loop) */}
        <section className="py-32 px-6 bg-slate-50">
          <div className="mx-auto max-w-6xl text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Faith That Actually Shows Up On Monday.</motion.h2>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 grid gap-8 md:grid-cols-3">
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                <div className="text-vibrant-cyan font-bold mb-6 text-xs tracking-[0.2em] uppercase">Morning (2 Min)</div>
                <h3 className="text-2xl font-bold text-slate-900">The Anchor</h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-medium">Receive one Scripture from your church’s plan, a short reflection, and one simple “do this today” step that fits your real life — not a generic script.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                <div className="text-slate-400 font-bold mb-6 text-xs tracking-[0.2em] uppercase group-hover:text-slate-600 transition-colors">Midday (15 Sec)</div>
                <h3 className="text-2xl font-bold text-slate-900">The Nudge</h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-medium">A quick, optional text. &quot;Pause: breathe, pray one sentence, re-center.&quot; Or a reminder to surrender.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                <div className="text-vibrant-jade font-bold mb-6 text-xs tracking-[0.2em] uppercase">Evening (2 Min)</div>
                <h3 className="text-2xl font-bold text-slate-900">The Recap</h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-medium">&quot;Where did you actually walk with Jesus today?&quot; Zoe remembers what’s going on in your life and follows up in a way that’s genuinely personal.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* For Churches (Dashboard) */}
        <section id="churches" className="py-24 px-4 bg-gradient-to-br from-vibrant-jade to-vibrant-cyan text-slate-900 relative overflow-hidden">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              {/* Simulated Dashboard UI */}
              <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)] text-white">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-2"><BarChart3 className="text-vibrant-cyan" /> <span className="font-semibold">Church Health Overview</span></div>
                  <div className="text-sm text-slate-400">Last 30 Days</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 sm:p-6">
                    <div className="text-slate-400 text-sm mb-1">Active Members</div>
                    <div className="text-3xl font-bold text-white">412</div>
                  </div>
                  <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 sm:p-6">
                    <div className="text-slate-400 text-sm mb-1">Weekly Engagements</div>
                    <div className="text-3xl font-bold text-white">1,845</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-3">Trending Prayer Topics (Anonymized)</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden"><div className="bg-vibrant-cyan h-full w-[70%]"></div></div> <span className="text-sm w-20 text-right">Anxiety</span></div>
                    <div className="flex items-center gap-3"><div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden"><div className="bg-vibrant-jade h-full w-[45%]"></div></div> <span className="text-sm w-20 text-right">Marriage</span></div>
                    <div className="flex items-center gap-3"><div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden"><div className="bg-slate-500 h-full w-[30%]"></div></div> <span className="text-sm w-20 text-right">Finances</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                For Pastors & Leaders
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Shepherd Your Flock, Even When You Aren't In The Room.</h2>
              <p className="mt-6 text-lg text-slate-800 font-medium leading-relaxed">
                Zoe provides church leaders with tools to support their community's spiritual growth at scale, without losing the human element.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <BarChart3 className="text-slate-900 mt-1 h-6 w-6 shrink-0" />
                  <div>
                    <span className="text-slate-900 font-bold block mb-1">Take the theological pulse of your church.</span>
                    <span className="text-slate-700 block max-w-md">See anonymized trends on what your congregation is anxious about or praying for.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Settings className="text-slate-900 mt-1 h-6 w-6 shrink-0" />
                  <div>
                    <span className="text-slate-900 font-bold block mb-1">Reinforce your Sunday message (and help people go deeper).</span>
                    <span className="text-slate-700 block max-w-md">People who want to do extra Bible study during the week finally have a simple way to do it — in a way that stays aligned with your church’s theology, values, and the direction you’re already leading.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>


        {/* Bridging the Gap (The Problem) */}
        {/* Bridging the Gap (The Problem) */}
        <section className="py-32 px-6 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-vibrant-cyan/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-vibrant-jade/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-4xl text-center relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Quote className="h-16 w-16 text-slate-700 mx-auto mb-10 rotate-180 opacity-50" />
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                Sunday Sermons Are Powerful.<br />
                <span className="text-slate-400">Monday mornings are hard.</span>
              </h2>
              <div className="mt-10 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto space-y-6">
                <p>
                  As a pastor, you pour your heart into Sunday's message. But most churchgoers struggle to actually apply their faith Monday through Saturday.
                </p>
                <p>
                  <strong className="text-white font-semibold">What does life with God look like in the midst of Monday meetings, Tuesday commutes, and Wednesday stress?</strong>
                </p>
                <p>
                  Zoe is the bridge. It helps people walk and step with Jesus in the middle of real life — with dynamic, personalized coaching that’s shaped by your church’s teaching. <span className="text-vibrant-cyan font-semibold">Where the rubber meets the road.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pastoral Control Feature Block */}
        <section className="py-32 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-jade/20 bg-vibrant-jade/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-jade mb-6">
                Your Church. Your Voice.
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">You have complete control.</h2>
              <p className="mt-6 text-xl text-slate-600 font-medium">Zoe doesn't replace your pastoral vision; it amplifies it. You define the theological framing and the conversational boundaries.</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 grid gap-8 md:grid-cols-3">
              <motion.div variants={fadeUp} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-200 to-slate-200 group-hover:from-vibrant-cyan group-hover:to-vibrant-jade transition-all duration-500" />
                <SlidersHorizontal className="h-10 w-10 text-slate-700 mb-6 group-hover:text-vibrant-cyan transition-colors" />
                <h3 className="text-2xl font-bold text-slate-900">Set the Statement of Faith</h3>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed">While Zoe's baseline guardrails are built on historic Christian orthodoxy, you can configure the specific theological framing to perfectly match your church's denomination and unique beliefs.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-200 to-slate-200 group-hover:from-vibrant-cyan group-hover:to-vibrant-jade transition-all duration-500" />
                <LayoutDashboard className="h-10 w-10 text-slate-700 mb-6 group-hover:text-vibrant-jade transition-colors" />
                <h3 className="text-2xl font-bold text-slate-900">Set the Sermon Series</h3>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed">Don’t let Monday steal Sunday’s seed. Zoe turns your sermon series into simple, personalized prompts and follow-ups that help people actually live it out during the week.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-200 to-slate-200 group-hover:from-vibrant-cyan group-hover:to-vibrant-jade transition-all duration-500" />
                <FileText className="h-10 w-10 text-slate-700 mb-6 group-hover:text-brand-cyan transition-colors" />
                <h3 className="text-2xl font-bold text-slate-900">Upload Your Materials</h3>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed">Go deeper. Upload your sermon transcripts, study guides, or small group curriculum. Zoe uses your actual content to answer questions and guide members during the week.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How Setup Works */}
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-6xl text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              How Setup Works
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-lg text-slate-600 font-medium max-w-3xl mx-auto">
              Most churches are live within a week. We help your team connect Sunday’s message to weekday discipleship in three simple steps.
            </motion.p>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16 grid gap-8 md:grid-cols-3">
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm text-left">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-cyan">Step 1</div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Upload your sermon series</h3>
                <p className="mt-3 text-slate-500 font-medium">Share sermon notes, transcripts, or study guides so Zoe can echo what was preached on Sunday.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm text-left">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-jade">Step 2</div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Set your theology</h3>
                <p className="mt-3 text-slate-500 font-medium">Define your doctrinal guardrails, tone, and ministry priorities so Zoe speaks in your church’s voice.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm text-left">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Step 3</div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Invite your congregation</h3>
                <p className="mt-3 text-slate-500 font-medium">We provide invites and launch assets so members can opt in and start receiving texts right away.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Objections / Guardrails (The Solution/Safety) */}
        <section className="py-32 px-6 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-6xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-vibrant-cyan/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">
                Safety & Alignment
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Theology & Guardrails.</h2>
              <p className="mt-6 max-w-xl mx-auto text-xl text-slate-500 font-medium">Zoe is a tool for pastors, not a digital replacement for them.</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 grid gap-8 md:grid-cols-2">
              {objections.map((obj, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                    {obj.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">{obj.question}</h3>
                    <p className="mt-3 text-slate-500 leading-relaxed font-medium">{obj.answer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* B2B FAQ - Accordion */}
        <section className="py-32 px-6 bg-slate-100 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-vibrant-cyan/10 via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-4xl relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-vibrant-cyan/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow-sm mb-6">
                Rollout FAQs
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Simple to Launch. <span className="text-slate-400">Powerful to Complete.</span></h2>
              <p className="mt-6 text-xl text-slate-600 font-medium max-w-2xl mx-auto">Everything you need to know about partnering with Zoe and rolling it out to your congregation.</p>
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
                      animate={{ height: 'auto', opacity: 1 }}
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

        {/* Pricing */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Simple, Church-Sized Pricing
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-lg text-slate-600 font-medium">
              Pick the plan that matches your active members. Annual plans available (save ~2 months).
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-2 text-sm text-slate-500">
              An active member is anyone who texts Zoe at least once that month.
            </motion.p>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 grid gap-6 text-left md:grid-cols-3">
              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-cyan">Starter</div>
                <div className="mt-4 text-3xl font-bold text-slate-900">$149<span className="text-base font-semibold text-slate-500">/mo</span></div>
                <p className="mt-2 text-slate-600 font-medium">Up to 20 active members</p>
                <p className="mt-1 text-sm text-slate-500">$6 per additional active member</p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-jade">Growth</div>
                <div className="mt-4 text-3xl font-bold text-slate-900">$299<span className="text-base font-semibold text-slate-500">/mo</span></div>
                <p className="mt-2 text-slate-600 font-medium">Up to 60 active members</p>
                <p className="mt-1 text-sm text-slate-500">$5 per additional active member</p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Scale</div>
                <div className="mt-4 text-3xl font-bold text-slate-900">$499<span className="text-base font-semibold text-slate-500">/mo</span></div>
                <p className="mt-2 text-slate-600 font-medium">Up to 140 active members</p>
                <p className="mt-1 text-sm text-slate-500">$4.50 per additional active member</p>
              </motion.div>
            </motion.div>

            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-sm text-slate-500">
              Your congregation texts Zoe for free — the church provides it as a ministry tool.
            </motion.p>
          </div>
        </section>

        {/* Waitlist Form */}
        <section id="waitlist" className="py-32 px-4 bg-gradient-to-br from-white to-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">Fall Pilots Open</div>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tighter leading-tight text-slate-900 md:text-[3.5rem]">
                Ready to bridge the <br /><span className="bg-gradient-to-r from-vibrant-cyan to-vibrant-jade bg-clip-text text-transparent">Sunday-to-Monday</span> gap?
              </h2>
              <p className="mt-6 text-xl text-slate-500 font-medium">We are accepting a small cohort of early-adopter churches for our initial pilot program.</p>
              <form
                className="mt-8 flex flex-col gap-4"
                onSubmit={handleWaitlistSubmit}
              >
                <input type="hidden" name="source" value="churches-waitlist" />
                <input
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your Name / Church Name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone number"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  {status === "sent" ? <><CheckCircle className="h-5 w-5" /> Request Received!</> : "Request Early Access"}
                </button>
              </form>
              <p className="mt-6 text-xs text-slate-400">We will never share your information.</p>
            </motion.div>
          </div>
        </section>

        <footer className="bg-slate-50 text-slate-500 py-12 px-4 text-sm">
          <div className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="font-medium">&copy; {new Date().getFullYear()} Zoe by Freedomology. All rights reserved.</div>
            <div className="flex gap-6 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

