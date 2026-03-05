"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { CheckCircle, MessageCircle, BookOpen, ShieldCheck } from "lucide-react";
import Hero2D from "./Hero2D";
import Footer from "./Footer";
import { usePhoneFormatter } from "../app/hooks/usePhoneFormatter";

interface ShortProps {
  variant?: "default" | "jesus-red" | "emerald-uni";
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomePageContentShort({ variant = "default" }: ShortProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = usePhoneFormatter("");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setSubmitError(null);
    try {
      const payload = { name, phone, type: "individual", source: "short-landing-waitlist", submittedAt: new Date().toISOString() };
      const response = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.details || data?.error || "Unable to submit");
      setStatus("sent");
    } catch {
      setStatus("idle");
      setSubmitError("We couldn't submit your request right now. Please try again in a moment.");
    }
  };

  const isJR = variant === "jesus-red";
  const isEM = variant === "emerald-uni";
  const bgMain = isJR ? "bg-[#f5efe6]" : isEM ? "bg-white" : "bg-[#F8FBFA]";
  const accentColor = isJR ? "text-[#7a2332]" : isEM ? "text-[#009f52]" : "text-brand-jade";
  const accentBg = isJR ? "bg-[#7a2332]" : isEM ? "bg-[#009f52]" : "bg-brand-jade";
  const accentBgLight = isJR ? "bg-[#7a2332]/10" : isEM ? "bg-[#009f52]/10" : "bg-brand-jade/10";
  const cardBg = isJR ? "bg-[#ebe3d5]" : isEM ? "bg-white" : "bg-white";
  const cardBorder = isJR ? "border-[#d4c4a8]" : isEM ? "border-slate-100" : "border-slate-100";
  const headlineFont = isJR ? "font-serif" : isEM ? "font-serif" : "";

  const proofPoints = [
    { icon: MessageCircle, title: "Arrives via text", desc: "No app to download. No login. Just open your texts." },
    { icon: BookOpen, title: "Original language depth", desc: "Greek and Hebrew context in every message. Seminary depth in 90 seconds." },
    { icon: ShieldCheck, title: "Works on any phone", desc: "Smartphone or flip phone. If it gets texts, it gets Zoe." },
  ];

  return (
    <div className={clsx("min-h-screen", bgMain)}>
      <Hero2D variant={variant} />

      {/* Proof Points */}
      <motion.section className={clsx("py-16 md:py-24 px-6", bgMain)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {proofPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className={clsx("rounded-2xl p-6 md:p-8 border", cardBg, cardBorder)}>
                <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center mb-4", accentBgLight)}>
                  <point.icon className={clsx("w-5 h-5", accentColor)} />
                </div>
                <h3 className={clsx("text-lg font-bold tracking-tight mb-2", headlineFont, isJR ? "text-[#2a1810]" : "text-slate-900")}>{point.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tagline */}
      <section className={clsx("py-8 px-6", bgMain)}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-slate-500 font-medium text-sm tracking-wide uppercase">Daily discipleship. Zero friction. Just scripture in your texts.</p>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className={clsx("py-16 md:py-24 px-6", isJR ? "bg-[#2a1810]" : "bg-slate-900")}>
        <div className="mx-auto max-w-lg text-center">
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4">
                <div className={clsx("w-16 h-16 rounded-full flex items-center justify-center", accentBgLight)}>
                  <CheckCircle className={clsx("w-8 h-8", accentColor)} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">You&apos;re on the list.</h2>
                <p className="text-slate-300 font-medium">We&apos;ll text you when spots open up.</p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h2 className={clsx("text-3xl md:text-4xl font-bold text-white tracking-tight mb-4", headlineFont)}>Ready to start?</h2>
                <p className="text-slate-300 font-medium mb-8 leading-relaxed">Join the waitlist. We&apos;ll text you when spots open — from the same number that&apos;ll deliver your daily scripture.</p>
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
                  <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-medium focus:outline-none focus:ring-2 focus:ring-white/30" />
                  <input type="tel" placeholder="(555) 555-5555" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-medium focus:outline-none focus:ring-2 focus:ring-white/30" />
                  <button type="submit" disabled={status === "submitting"} className={clsx("w-full rounded-xl px-6 py-3 font-bold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50", accentBg)}>
                    {status === "submitting" ? "Joining..." : "Join the Waitlist"}
                  </button>
                  {submitError && <p className="text-red-400 text-sm font-medium mt-1">{submitError}</p>}
                </form>
                <p className="text-slate-500 text-xs mt-4 font-medium">No spam. Just a heads-up when it&apos;s your turn.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
