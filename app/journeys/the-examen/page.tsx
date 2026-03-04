import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "The Examen: 14 Days of Evening Reflection — Zoe",
  description:
    "Build a nightly habit of noticing God. Fourteen days to build the habit of paying attention at the end of each day.",
};

const days = [
  {"day": 1, "passage": "Psalm 139:23–24", "theme": "Search Me", "prompt": "Review your day. What's one moment you felt most alive today? What's one moment you felt most drained?"},
  {"day": 2, "passage": "Psalm 90:12", "theme": "Numbering Your Days", "prompt": "Walk through your day hour by hour. Where did you feel closest to God? Where did you feel furthest away?"},
  {"day": 3, "passage": "Lamentations 3:22–23", "theme": "New Every Morning", "prompt": "What's one thing today that you're grateful for that you almost missed? Thank God for it specifically."},
  {"day": 4, "passage": "Romans 12:1–2", "theme": "Renewed Minds", "prompt": "Where today did you conform to a pattern around you instead of following what you know is true?"},
  {"day": 5, "passage": "Philippians 4:8–9", "theme": "Think on These Things", "prompt": "Name something true, noble, right, pure, lovely, or admirable from your day. Let your mind rest there."},
  {"day": 6, "passage": "Micah 6:8", "theme": "What Does the Lord Require?", "prompt": "Did you act justly today? Love mercy? Walk humbly? Which one came easiest? Which was hardest?"},
  {"day": 7, "passage": "Matthew 11:28–30", "theme": "Come to Me", "prompt": "Where are you carrying weight that isn't yours to carry? Name it. Lay it down — just for tonight."},
  {"day": 8, "passage": "Colossians 3:15–17", "theme": "Let the Peace of Christ Rule", "prompt": "When did you feel peace today? When did you feel anxiety? What was different about those two moments?"},
  {"day": 9, "passage": "Proverbs 3:5–6", "theme": "Trust and Acknowledge", "prompt": "Where did you lean on your own understanding today? Where did you actually trust God?"},
  {"day": 10, "passage": "1 Thessalonians 5:16–18", "theme": "Rejoice, Pray, Give Thanks", "prompt": "Three things: one joy, one prayer, one thanks from today. Name them out loud."},
  {"day": 11, "passage": "James 1:17", "theme": "Every Good Gift", "prompt": "What good gift came from above today? Sometimes the best ones are the ones we didn't notice at the time."},
  {"day": 12, "passage": "Ephesians 5:15–16", "theme": "Making the Most of Time", "prompt": "How did you spend your time today? Where did time feel wasted? Where did it feel full?"},
  {"day": 13, "passage": "2 Corinthians 4:16–18", "theme": "Unseen and Eternal", "prompt": "What temporary thing consumed your attention today? What eternal thing did you almost overlook?"},
  {"day": 14, "passage": "Psalm 103:1–5", "theme": "Forget Not His Benefits", "prompt": "Review not just today, but the past two weeks. What has God been doing in you? What pattern do you see?"}
];

export default function TheExamenPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="relative bg-[#141008] py-32 px-6 pt-40 overflow-hidden">
        <Image src="/images/journeys/examen-reflection.jpg" alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141008]/80 via-[#141008]/40 to-[#141008]/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            14-Day Journey
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">The Examen</h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            The Examen is a 500-year-old prayer practice from Ignatius of Loyola. It's simple: at the end of each day, look back and notice where God showed up — and where you missed it.
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
            {[{label:"Duration",value:"14 Days"},{label:"Practice",value:"5–10 min/evening"},{label:"Style",value:"Guided reflection"}].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold tracking-tighter-editorial text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 font-medium leading-relaxed text-lg space-y-6">
            <p>Ignatius of Loyola called the Examen the most important prayer practice a person could have. The idea is straightforward: before you go to sleep, review your day. Where did you feel most alive? Where did you feel most drained? Where was God present — even if you didn't notice at the time?</p>
            <p>This 14-day journey walks you through the Examen step by step, adding depth each day. By the end, you'll have a nightly practice that takes five minutes and changes how you see everything else. Each evening, Zoe walks you through the reflection and helps you notice patterns you might miss on your own.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">The 14 Days</h2>
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
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is currently in early access. Join the waitlist to be among the first to walk through The Examen with a daily discipleship companion.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
