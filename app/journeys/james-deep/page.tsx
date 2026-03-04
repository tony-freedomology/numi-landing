import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "James: 10 Days Deep — Zoe",
  description:
    "An intensive single-book study. Faith in action. Wisdom from above.",
};

const days = [
  {"day": 1, "passage": "James 1:1–4", "theme": "Trials as Teachers", "prompt": "What challenge in your life right now might actually be producing something good in you?"},
  {"day": 2, "passage": "James 1:5–8", "theme": "Asking for Wisdom", "prompt": "Where do you most need wisdom today — and are you actually asking for it?"},
  {"day": 3, "passage": "James 1:12–18", "theme": "The Source of Temptation", "prompt": "What desire, if left unchecked, tends to lead you somewhere you don't want to go?"},
  {"day": 4, "passage": "James 1:19–27", "theme": "Hearing and Doing", "prompt": "Is there a truth you know but haven't acted on yet? What's stopping you?"},
  {"day": 5, "passage": "James 2:1–13", "theme": "No Favoritism", "prompt": "Who in your life do you treat as less important because of status, appearance, or wealth?"},
  {"day": 6, "passage": "James 2:14–26", "theme": "Faith and Works", "prompt": "What would someone know about your faith just from watching your actions this week?"},
  {"day": 7, "passage": "James 3:1–12", "theme": "Taming the Tongue", "prompt": "What's something you said recently that you wish you could take back?"},
  {"day": 8, "passage": "James 3:13–4:3", "theme": "Two Kinds of Wisdom", "prompt": "Is the wisdom guiding your decisions right now from God — or from somewhere else?"},
  {"day": 9, "passage": "James 4:4–17", "theme": "Humility Before God", "prompt": "Where are you striving for something God hasn't given you? What would it look like to submit that?"},
  {"day": 10, "passage": "James 5:7–20", "theme": "Patient Endurance", "prompt": "Who in your life needs someone to turn them back toward God right now?"}
];

export default function JamesDeepPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="relative bg-[#141008] py-32 px-6 pt-40 overflow-hidden">
        <Image src="/images/journeys/james-deep.jpg" alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141008]/80 via-[#141008]/40 to-[#141008]/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            10-Day Journey
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">James: 10 Days Deep</h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            James writes to a scattered church — people who claimed faith but lived differently from Monday to Saturday. His letter is less a theology lecture and more a direct conversation: you say you believe. Does your life show it?
          </p>
          <div className="mt-10">
            <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
              Start This Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[{label:"Duration",value:"10 Days"},{label:"Check-ins",value:"3 per day"},{label:"Passages",value:"10 readings"}].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold tracking-tighter-editorial text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 font-medium leading-relaxed text-lg space-y-6">
            <p>This 10-day journey moves through the entire Book of James, one passage per day. Each morning, Zoe delivers the passage with historical context and a question to prime your reading.</p>
            <p>Then the conversation unfolds — Zoe engages with what stood out to you, asks follow-up questions that go deeper, and helps you land on one concrete thing to carry into your day. By day 10, you'll have wrestled with every chapter of James and built a thread of personal reflection that connects across the whole book.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">The 10 Days</h2>
          <div className="flex flex-col gap-4">
            {days.map((d) => (
              <div key={d.day} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{d.day}</span>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    <span className="text-brand-jade font-semibold text-sm">{d.passage}</span>
                    <span className="text-slate-300 text-sm">·</span>
                    <span className="font-bold text-slate-900">{d.theme}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium italic">&ldquo;{d.prompt}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">Begin the journey.</h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is currently in early access. Join the waitlist to be among the first to walk through James with a daily discipleship companion.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
