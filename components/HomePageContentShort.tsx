"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { CheckCircle, MessageCircle, BookOpen, ShieldCheck } from "lucide-react";
import ZoeSVG from "./ZoeSVG";
import { usePhoneFormatter } from "../app/hooks/usePhoneFormatter";

interface ShortProps {
  variant?: "default" | "jesus-red" | "emerald-uni";
}

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
      const payload = {
        name,
        phone,
        type: "individual",
        source: `short-landing-${variant}`,
        submittedAt: new Date().toISOString()
      };
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.details || data?.error || "Unable to submit");
      setStatus("sent");
    } catch (err: any) {
      setStatus("idle");
      setSubmitError(err.message || "We couldn't submit your request right now.");
    }
  };

  const isJR = variant === "jesus-red";
  const isEM = variant === "emerald-uni";

  // Theme values Let's keep the focus ring conditional on the actual variant color
  const primaryColor = isJR ? "text-[#7a2332]" : isEM ? "text-[#009f52]" : "text-brand-jade";
  const primaryBg = isJR ? "bg-[#7a2332]" : isEM ? "bg-[#009f52]" : "bg-brand-jade";
  const primaryBgLight = isJR ? "bg-[#7a2332]/10" : isEM ? "bg-[#009f52]/10" : "bg-brand-jade/10";
  const focusRing = isJR ? "focus:ring-[#7a2332]/30" : isEM ? "focus:ring-[#009f52]/30" : "focus:ring-brand-jade/30";

  const mainBg = isJR ? "bg-[#f5efe6]" : isEM ? "bg-white" : "bg-[#F8FBFA]";
  const cardBg = isJR ? "bg-[#f5efe6]" : "bg-white"; // Bottom sheet on mobile matches theme
  const headlineFont = (isJR || isEM) ? "font-serif" : "font-sans tracking-tight";

  const proofPoints = [
    { icon: MessageCircle, title: "Meets you where you are", desc: "No new apps or logins. Just a daily text message in your natural rhythm." },
    { icon: BookOpen, title: "Profoundly deep", desc: "Uncover the richness of original Greek and Hebrew context in under 90 seconds." },
    { icon: ShieldCheck, title: "Radically accessible", desc: "Smartphone or flip phone, if it receives texts, it receives Zoe." },
  ];

  return (
    <main className={clsx("h-[100dvh] w-full overflow-hidden relative flex flex-col md:flex-row", mainBg)}>

      {/* Mobile Visual (Background) */}
      <div className="md:hidden absolute inset-0 z-0 bg-slate-900 pointer-events-none">
        {variant === "default" && (
          <>
            <img src="/assets/hero/sky.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <img src="/assets/hero/hills-man.png" className="absolute inset-x-0 bottom-[15%] w-full object-cover object-[70%_bottom] opacity-95" alt="" />
          </>
        )}
        {variant === "jesus-red" && (
          <img src="/assets/hero/parchment-bg.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
        )}
        {variant === "emerald-uni" && (
          <img src="/assets/hero/emerald-campus.jpg" className="absolute inset-0 w-full h-full object-cover" alt="" />
        )}
        {/* Subtle dark gradient fade so the top looks cinematic behind the overlapping card */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      {/* Left Column (Desktop Visual) */}
      <div className="hidden md:flex w-full md:w-[50%] lg:w-[55%] relative h-full bg-slate-900 z-0 flex-col items-center justify-center p-12">
        {variant === "default" && (
          <div className="absolute inset-0 overflow-hidden">
            <img src="/assets/hero/sky.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <img src="/assets/hero/hills-man.png" className="absolute inset-0 w-full h-full object-cover object-[70%_bottom] opacity-95" alt="" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        )}
        {variant === "jesus-red" && (
          <div className="absolute inset-0 flex items-center justify-center p-16">
            <img src="/assets/hero/parchment-bg.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="relative w-full h-full max-w-lg max-h-[800px] border-[1px] border-[#3c2a21]/20 rounded-[2rem] overflow-hidden shadow-2xl">
              <img src="/assets/hero/parchment-bg.png" className="absolute inset-0 w-full h-full object-cover scale-110" alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <img src="/jesus-red/apple-touch-icon.png" className="w-56 h-56 opacity-15 grayscale sepia mix-blend-multiply drop-shadow-sm" alt="" />
              </div>
            </div>
          </div>
        )}
        {variant === "emerald-uni" && (
          <div className="absolute inset-0 overflow-hidden">
            <img src="/assets/hero/emerald-campus-wide.jpg" className="absolute inset-0 w-full h-full object-cover object-center" alt="" />
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-900/40 to-emerald-950/80" />
          </div>
        )}

        {/* Overlay Content on Visual */}
        <div className="relative z-10 flex flex-col items-center text-center mt-[-10%]">
          <div className="mb-8 w-64 md:w-80 lg:w-96 drop-shadow-2xl">
            <ZoeSVG variant={variant} color={isJR ? "#3c2a21" : "white"} />
          </div>
          <h1 className={clsx("text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight drop-shadow-md", headlineFont, isJR ? "text-[#3c2a21]" : "text-white")}>
            Walk with Jesus.
          </h1>
        </div>
      </div>

      {/* Mobile Overlay Content (Only visible on small screens before the bottom sheet covers it) */}
      <div className="md:hidden absolute inset-x-0 top-0 pt-16 flex flex-col items-center z-0 px-6">
        <div className="mb-4 w-48 drop-shadow-2xl">
          <ZoeSVG variant={variant} color={isJR ? "#3c2a21" : "white"} />
        </div>
        <h1 className={clsx("text-3xl font-medium tracking-tight drop-shadow-md text-center", headlineFont, isJR ? "text-[#3c2a21]" : "text-white")}>
          Walk with Jesus.
        </h1>
      </div>

      {/* Right Column (Desktop Content) / Bottom Sheet (Mobile Form) */}
      <div className={clsx(
        "absolute inset-x-0 bottom-0 z-10 h-[65dvh] rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.15)]", // Mobile bottom sheet - slightly shorter since headline moved
        "md:static md:h-full md:flex-1 md:w-[50%] lg:w-[45%] md:rounded-none md:shadow-[-20px_0_40px_rgba(0,0,0,0.05)] md:border-l md:border-black/5", // Desktop split
        cardBg,
        "overflow-y-auto"
      )}>
        <div className="flex flex-col justify-center min-h-full px-6 md:px-12 lg:px-20 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md w-full mx-auto md:mx-0"
          >
            {/* Logo */}
            {/* <div className="mb-6 w-36 md:w-44">
              <ZoeSVG variant={variant} color={!isJR ? "#1e293b" : undefined} />
            </div> */}

            {/* Warm, Winsome Copy */}
            {/* <h1 className={clsx("text-3xl md:text-4xl font-semibold mb-3 text-slate-900", headlineFont)}>
              Walk with Jesus.
            </h1> */}
            <p className="text-slate-600 text-[16px] md:text-lg font-medium mb-8 leading-relaxed">
              Join a community building daily rhythms of discipleship. Profound, original-language insights delivered straight to your texts.
            </p>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start gap-5 py-6"
                >
                  <div className={clsx("w-14 h-14 rounded-full flex items-center justify-center shadow-inner", primaryBgLight)}>
                    <CheckCircle className={clsx("w-7 h-7", primaryColor)} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re on the list.</h2>
                    <p className="text-slate-600 font-medium leading-relaxed max-w-xs">
                      We&apos;re preparing something special. We&apos;ll text you as soon as your spot opens up.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, x: -20 }}>
                  {/* Compelling Opt-in */}
                  <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-3 mb-10 w-full">
                    <input
                      type="text"
                      placeholder="Your First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={clsx(
                        "w-full rounded-xl px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-medium transition-shadow",
                        "focus:outline-none focus:ring-2 focus:border-transparent",
                        focusRing
                      )}
                    />
                    <input
                      type="tel"
                      placeholder="(555) 555-5555"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className={clsx(
                        "w-full rounded-xl px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-medium transition-shadow",
                        "focus:outline-none focus:ring-2 focus:border-transparent",
                        focusRing
                      )}
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={clsx(
                        "w-full rounded-xl px-6 py-4 font-bold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-1 shadow-lg shadow-black/5",
                        primaryBg
                      )}
                    >
                      {status === "submitting" ? "Joining..." : "Join the Waitlist"}
                    </button>
                    {submitError && <p className="text-red-500 text-sm font-medium mt-1 pl-1">{submitError}</p>}
                  </form>

                  {/* Styled Proof Points */}
                  <div className="grid grid-cols-1 gap-6">
                    {proofPoints.map((point, idx) => (
                      <motion.div
                        key={point.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                        className="flex items-start gap-4"
                      >
                        <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm mt-0.5", primaryBgLight)}>
                          <point.icon className={clsx("w-5 h-5", primaryColor)} />
                        </div>
                        <div>
                          <h3 className="text-slate-900 font-bold text-sm tracking-tight mb-1">{point.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

    </main>
  );
}
