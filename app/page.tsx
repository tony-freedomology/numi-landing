"use client";

import { motion } from "framer-motion"

// @ts-ignore - framer-motion v12 className compat;
import { useState } from "react";
import clsx from "clsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const featureList = [
  {
    title: "Guided discipleship, not generic advice",
    body: "NuMi learns your rhythms, your questions, and your growth plan to surface Scripture, practices, and challenges that fit the season you are in."
  },
  {
    title: "Daily nudges that protect your attention",
    body: "Short, focused prompts and check-ins that keep formation in view without adding noise."
  },
  {
    title: "Always-on companion with human escalation",
    body: "When a topic needs pastoral care, NuMi can route you to a real human leader or community support."
  }
];

const guardrails = [
  "NuMi is not your pastor and does not replace your local church.",
  "NuMi does not claim divine authority or revelation.",
  "High-risk or sensitive conversations are escalated to human care.",
  "You are always in control of your data and opt-in settings."
];

const steps = [
  {
    title: "Discern",
    body: "Clarify your discipleship goals, rhythms, and the people walking with you."
  },
  {
    title: "Practice",
    body: "Receive daily micro-practices, Scripture prompts, and reflective check-ins."
  },
  {
    title: "Integrate",
    body: "Track what is working, celebrate growth, and surface next steps."
  }
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <div className="min-h-screen bg-hero-radial">
      <div className="absolute inset-0 bg-halo opacity-60" />

      <main className="relative z-10 px-6 py-12 md:px-12 lg:px-20">
        <section className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              AI Discipleship Companion
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Meet NuMi, your AI companion for modern spiritual formation.
            </h1>
            <p className="max-w-2xl text-lg text-white/70 md:text-xl">
              NuMi helps you build daily rhythms, engage Scripture, and stay connected to real people who care about your growth.
              Not a replacement for the Church. A companion to keep you moving.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-soft">
                Join the waitlist
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80">
                See how it works
              </button>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">
          {featureList.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass gradient-border rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{feature.body}</p>
            </motion.div>
          ))}
        </section>

        <section className="mx-auto mt-20 max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass gradient-border rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold">A formation journey that stays human</h2>
                <p className="mt-3 text-base text-white/70">
                  NuMi pairs AI insights with real discipleship pathways. You decide who your community is, how often NuMi checks in,
                  and when to loop in human support.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {steps.map((step) => (
                    <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm uppercase tracking-widest text-white/40">{step.title}</div>
                      <div className="mt-2 text-sm text-white/75">{step.body}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
                <div className="text-sm uppercase tracking-[0.3em] text-white/60">Waitlist</div>
                <h3 className="mt-3 text-2xl font-semibold">Be the first to experience NuMi</h3>
                <form
                  className="mt-6 flex flex-col gap-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setStatus("sent");
                  }}
                >
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  />
                  <input
                    type="text"
                    placeholder="Mobile (optional for SMS updates)"
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40"
                  />
                  <label className="flex items-start gap-2 text-xs text-white/60">
                    <input type="checkbox" className="mt-1" required />
                    I agree to receive updates about NuMi. Reply STOP to opt out. Msg & data rates may apply.
                  </label>
                  <button
                    className={clsx(
                      "rounded-xl px-4 py-3 text-sm font-semibold",
                      status === "sent"
                        ? "bg-white/20 text-white/60"
                        : "bg-white text-ink shadow-soft"
                    )}
                    type="submit"
                  >
                    {status === "sent" ? "You are on the list" : "Join waitlist"}
                  </button>
                </form>
                <p className="mt-4 text-xs text-white/40">
                  We will only send essentials. No spam.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-[1.2fr_1fr]"
          >
            <div>
              <h2 className="text-3xl font-semibold">Integrity guardrails</h2>
              <p className="mt-3 text-base text-white/70">
                NuMi is designed for humility and clarity. It honors spiritual authority structures and protects users from over-reliance on AI.
              </p>
              <ul className="mt-6 grid gap-3">
                {guardrails.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Proof of care</div>
              <p className="mt-4 text-sm text-white/70">
                NuMi is built with escalation paths, opt-in safeguards, and clear disclaimers. It complements pastoral care and invites
                accountability, never isolation.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                Example: If a user shares a crisis, NuMi pauses and routes the conversation to a trusted leader or approved support line.
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass gradient-border rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold">Design for depth</h2>
                <p className="mt-3 text-base text-white/70">
                  The NuMi experience blends contemplative design, rich visuals, and short-form audio to keep hearts engaged.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">Nano Banana image prompts</div>
                    <p className="mt-2 text-xs text-white/60">Placeholder prompt: “Moody devotional scene, soft candlelight, gentle gradients, modern worship aesthetic.”</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">Gemini video prompts</div>
                    <p className="mt-2 text-xs text-white/60">Placeholder prompt: “Slow cinematic b-roll of journaling, hands on Bible, sunrise light, subtle lens flare.”</p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/65">
                Add mockups, screenshots, or short demo clips here once the product build is ready.
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="mx-auto mt-20 max-w-6xl border-t border-white/10 py-10 text-sm text-white/50">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>NuMi by Freedomology</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
