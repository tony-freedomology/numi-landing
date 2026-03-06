import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Users, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Zoe checks in with you three times a day — dawn, noon, and dusk — with two simple questions that build a real discipleship practice.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen text-slate-900">
      {/* Hero */}
      <section className="relative w-full aspect-video overflow-hidden bg-slate-100" style={{ marginTop: '72px' }}>
        <Image src="/images/features-hero.webp" alt="Features" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-slate-400 text-xs">Features Hero</span>
        </div>
      </section>

      {/* Feature 1: Dawn/Noon/Dusk Rhythms */}
      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">
                Daily Rhythms
              </div>
              <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-6">
                Dawn. Noon. Dusk.
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Three times a day, at moments you choose, Zoe sends a short check-in. Not a broadcast. A conversation.
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 text-sm font-bold">🌅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dawn</p>
                    <p className="text-slate-600 text-sm leading-relaxed">What are you bringing into today? Set an intention before the noise starts.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-500 text-sm font-bold">☀️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Noon</p>
                    <p className="text-slate-600 text-sm leading-relaxed">How&apos;s it actually going? A mid-day anchor to the morning&apos;s intention.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-500 text-sm font-bold">🌙</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dusk</p>
                    <p className="text-slate-600 text-sm leading-relaxed">What happened today? What are you carrying forward?</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-slate-100">
              <div className="flex flex-col gap-4">
                <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p className="text-sm text-slate-700 font-medium">Good morning. What&apos;s one thing you want to bring before God today?</p>
                  <p className="text-xs text-slate-400 mt-1">Zoe · 7:02 AM</p>
                </div>
                <div className="bg-brand-jade/10 rounded-2xl rounded-tr-none px-4 py-3 max-w-xs self-end">
                  <p className="text-sm text-slate-700 font-medium">I want to actually listen today instead of just reacting.</p>
                  <p className="text-xs text-slate-400 mt-1">You · 7:14 AM</p>
                </div>
                <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p className="text-sm text-slate-700 font-medium">That&apos;s a real posture. Checking in at noon to see how it&apos;s going. 🙏</p>
                  <p className="text-xs text-slate-400 mt-1">Zoe · 7:15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Memory & Follow-Through */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-slate-900 rounded-3xl p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">Two questions. Every time.</p>
              <div className="flex flex-col gap-6">
                <div className="border-l-2 border-brand-jade/50 pl-6">
                  <p className="text-2xl font-bold tracking-tight leading-snug">What is God saying to you?</p>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Forces you to pay attention. Articulating it makes it real.</p>
                </div>
                <div className="border-l-2 border-brand-cyan/50 pl-6">
                  <p className="text-2xl font-bold tracking-tight leading-snug">What are you going to do about it?</p>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Closes the gap between knowing and doing.</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-6">
                Memory &amp; Follow-Through
              </div>
              <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-6">
                It remembers what you said.
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
                When you tell Zoe on Monday that you&apos;re going to have that hard conversation — Zoe brings it back on Thursday.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                When you tell Zoe something on Monday, it can bring it back on Thursday. That continuity across days is what actually changes people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: For Churches */}
      <section className="py-24 px-6 bg-[#FCFAF8]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">
              For Churches
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] max-w-2xl mx-auto">
              Extends the pulpit throughout the week.
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
              Church leaders can align Zoe with sermon content, so what lands on Sunday doesn&apos;t evaporate by Tuesday.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-brand-jade" />,
                title: "Sermon Alignment",
                body: "Align Zoe's weekly prompts with your sermon series, so mid-week check-ins reinforce what your congregation heard on Sunday.",
              },
              {
                icon: <Users className="h-6 w-6 text-brand-cyan" />,
                title: "Aggregate Insights",
                body: "Pastors see congregation-level trends — not personal messages. Know how your church is doing spiritually, not just who showed up.",
              },
              {
                icon: <MessageCircle className="h-6 w-6 text-amber-400" />,
                title: "No New Platform",
                body: "It all happens in SMS. Your congregation doesn't need to download anything. Zoe meets them where they already are.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 4: Trust & Privacy */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">
              Trust &amp; Privacy
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1]">
              Private by default.
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
              Your conversations are yours. We never share them with your church leaders. Consent controls are yours to set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <ShieldCheck className="h-6 w-6 text-brand-jade" />,
                title: "Just between you and God",
                body: "Your one-to-one conversations are not visible to church leaders by default. Ever.",
              },
              {
                icon: <Users className="h-6 w-6 text-brand-cyan" />,
                title: "Aggregate trends only",
                body: "Church dashboards show trend-level health — not personal confessions or journal content.",
              },
              {
                icon: <MessageCircle className="h-6 w-6 text-amber-400" />,
                title: "Consent controls",
                body: "You control memory depth, support access, and optional data-sharing settings.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-slate-400" />,
                title: "Delete and export rights",
                body: "Export your full spiritual history or delete everything. No hard feelings, no questions asked.",
              },
            ].map((card) => (
              <div key={card.title} className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex-shrink-0 mt-1">{card.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">
            See what it feels like.
          </h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">
            Zoe is in early access. Join the waitlist and see what it feels like to close the loop between Sunday and Monday.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200"
          >
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
