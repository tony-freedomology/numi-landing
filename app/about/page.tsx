import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "We're building something we wish existed — daily discipleship that fits inside real life, built by people who actually believe this stuff matters.",
};

const principles = [
  {
    badge: "Church-Aligned",
    badgeColor: "text-brand-jade border-brand-jade/20 bg-brand-jade/5",
    title: "Built for the church, not around it.",
    body: "Zoe is designed to extend pastoral care, not replace it. Every feature is built to reinforce what's coming from the pulpit and the community around you.",
  },
  {
    badge: "Privacy-First",
    badgeColor: "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5",
    title: "Your conversations are yours.",
    body: "Private by default. Church leaders see aggregate trends, never your personal messages. You control what gets remembered and what gets erased.",
  },
  {
    badge: "Theologically Grounded",
    badgeColor: "text-amber-600 border-amber-200 bg-amber-50",
    title: "Scripture first. Always.",
    body: "Zoe doesn't give you the 'Christian answer.' It helps you sit with the real questions and engage the actual text. We'd rather help you go deeper than sound impressive.",
  },
  {
    badge: "Accessible",
    badgeColor: "text-slate-600 border-slate-200 bg-slate-50",
    title: "No app. No login. No friction.",
    body: "SMS because it already works. You don't need a new habit — you just need Zoe in the habit you already have.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">
            We&apos;re building something we wish existed.
          </h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed">
            Not because it&apos;s a good business idea. Because the gap between Sunday morning and Monday morning is real — and it costs people something.
          </p>
        </div>
      </section>

      {/* The Problem We Saw */}
      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            The Problem We Saw
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-8">
            Good intentions aren&apos;t enough when the world is this loud.
          </h2>
          <div className="prose text-slate-600 font-medium leading-relaxed text-lg max-w-none space-y-6">
            <p>Sunday morning, the sermon lands. You feel it. You mean it. You walk out with every intention of living differently this week.</p>
            <p>Then Monday shows up. The inbox is already full. The commute is already loud. The kids are already asking for something. By Tuesday, you can&apos;t quite remember the passage. By Thursday, the intention is just gone.</p>
            <p>That&apos;s not a spiritual failure. That&apos;s a design problem. And it&apos;s exactly the gap we built Zoe to close.</p>
            <p>The data confirms what anyone in ministry already knows: only 31% of regular churchgoers read the Bible every day. Most people who genuinely want to grow spiritually don&apos;t have a daily structure to act on that desire. The desire is real. The scaffolding isn&apos;t there.</p>
          </div>
        </div>
      </section>

      {/* Why Text Messages */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-8">
            Why Text Messages
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-8">
            The habit is already there.
          </h2>
          <div className="prose text-slate-600 font-medium leading-relaxed text-lg max-w-none space-y-6">
            <p>People check their texts more than 10 times a day. Not because they have to. Because it&apos;s where conversations actually happen — where your spouse sends you something funny, where your friend checks in, where your mom says she&apos;s praying for you.</p>
            <p>That personal, intimate channel is where Zoe lives. Not as an intrusion, but as a natural part of how you already communicate.</p>
            <p>SMS messages are opened at 98%, with most read within three minutes. That&apos;s not a marketing stat. It&apos;s a description of where attention actually lives. Zoe doesn&apos;t build a new habit from scratch — it attaches spiritual practice to one people already have.</p>
            <p>No downloads. No logins. No learning curve. You already know how to reply to a text.</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-[#FCFAF8]">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-10">
            Built by people who believe this stuff matters.
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl tracking-tight">TA</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Tony Allen</h3>
                <p className="text-brand-jade font-semibold text-sm mb-4">Founder, Zoe · Freedomology</p>
                <div className="text-slate-600 font-medium leading-relaxed space-y-4">
                  <p>I never thought I&apos;d build an AI tool. For over a decade, I served as a worship pastor. My whole thing was presence — the kind that can&apos;t be automated, the kind that happens when a room full of broken people encounter a living God.</p>
                  <p>But I kept watching what happened after Sunday. People would leave transformed — or at least moved — and then life would close back over the moment like water over a stone. The transformation didn&apos;t stick, not because people didn&apos;t mean it, but because there was nothing to help them carry it through the week.</p>
                  <p>Zoe is what I wished existed. Not because I&apos;m excited about AI. Because I&apos;m still very much a pastor at heart, and I want to help people hold onto what God is doing in them.</p>
                </div>
                <p className="text-slate-400 text-sm font-medium mt-6">Cleveland, OH · Freedomology.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">
              Our Principles
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1]">
              The values we build by.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.badge} className={`bg-slate-50 rounded-3xl p-8 border border-slate-100`}>
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-5 ${p.badgeColor}`}>
                  {p.badge}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">Come walk with us.</h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is early, and we&apos;re building it carefully. Join the waitlist to be part of the first group to experience it.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
