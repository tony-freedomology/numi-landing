import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "New Believer — 21-Day First Steps Journey",
  description:
    "A 21-day guided journey for new believers. Learn to pray, read Scripture, and build the habits that make faith stick — one text message at a time.",
};

const days = [
  { day: 1, theme: "You Are Known", passage: "Psalm 139:1–16", prompt: "How does it feel to know that God has known you fully — before you knew anything about him?" },
  { day: 2, theme: "What It Means to Follow", passage: "Matthew 4:18–22", prompt: "Jesus said 'follow me.' What do you think that actually looks like in your everyday life?" },
  { day: 3, theme: "Born Again", passage: "John 3:1–8", prompt: "What's something in your life that you notice has already started to change since you said yes to Jesus?" },
  { day: 4, theme: "Grace Is Real", passage: "Ephesians 2:1–10", prompt: "In your own words, what is grace? How is it different from earning something?" },
  { day: 5, theme: "Talking to God", passage: "Matthew 6:5–13", prompt: "What's one honest thing you want to say to God today that you haven't said out loud yet?" },
  { day: 6, theme: "Reading the Bible", passage: "Psalm 119:105–112", prompt: "What's your honest relationship with Scripture been so far — exciting, confusing, both?" },
  { day: 7, theme: "The Holy Spirit", passage: "John 14:15–17, 26", prompt: "Have you experienced a moment where you felt led by something other than your own instinct? What was that?" },
  { day: 8, theme: "Sin and Forgiveness", passage: "1 John 1:5–2:2", prompt: "Is there something you're still carrying guilt over, even after becoming a Christian?" },
  { day: 9, theme: "Temptation Is Normal", passage: "1 Corinthians 10:12–13", prompt: "What's a recurring temptation in your life, and what would it look like to take the 'way out' God provides?" },
  { day: 10, theme: "The Church", passage: "Acts 2:42–47", prompt: "What's your relationship with church been like so far? What feels welcoming? What feels confusing?" },
  { day: 11, theme: "Community", passage: "Hebrews 10:24–25", prompt: "Who in your life do you feel like you could be honest about your faith with?" },
  { day: 12, theme: "Faith and Doubt", passage: "Mark 9:24; John 20:24–29", prompt: "What's a doubt or question about faith you've been carrying but haven't felt safe to ask?" },
  { day: 13, theme: "Worship", passage: "Psalm 100", prompt: "What's one specific thing about God that you genuinely feel grateful for today?" },
  { day: 14, theme: "Serving Others", passage: "Mark 10:42–45", prompt: "Is there someone in your life right now who needs something you could give — time, help, attention?" },
  { day: 15, theme: "Identity in Christ", passage: "2 Corinthians 5:17; Galatians 2:20", prompt: "What's one part of your old identity that you're still holding onto — that God might be asking you to let go?" },
  { day: 16, theme: "Baptism", passage: "Romans 6:3–11", prompt: "If you've been baptized, what does that mean to you now? If you haven't, what's keeping you from it?" },
  { day: 17, theme: "The Bible as Story", passage: "Luke 24:27, 44–47", prompt: "How does knowing that Jesus is the center of the whole Bible change how you read it?" },
  { day: 18, theme: "Prayer That Waits", passage: "Psalm 27:13–14", prompt: "What are you waiting for from God right now? How are you doing at waiting?" },
  { day: 19, theme: "Generosity", passage: "2 Corinthians 9:6–8", prompt: "What does generosity look like in your life right now — with money, time, or attention?" },
  { day: 20, theme: "Sharing Your Faith", passage: "1 Peter 3:15–16", prompt: "Is there someone in your life who doesn't know Jesus yet who you'd want to share this with?" },
  { day: 21, theme: "The Long Walk", passage: "Philippians 1:6; Jude 24–25", prompt: "What's one thing you want to carry forward from these 21 days? What does the next step look like for you?" },
];

export default function NewBelieverPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="bg-gradient-to-b from-[#1a1308] to-[#141008] py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-8">
            21-Day Journey
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">First Steps</h1>
          <p className="mt-4 text-lg text-brand-cyan font-semibold tracking-tight">A New Believer Journey</p>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            The first weeks after saying yes to Jesus are some of the most important — and the most vulnerable. This journey gives you a daily companion for those first steps.
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
            {[{label:"Duration",value:"21 Days"},{label:"Check-ins",value:"3 per day"},{label:"Topics",value:"21 foundations"}].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold tracking-tighter-editorial text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 font-medium leading-relaxed text-lg space-y-6">
            <p>New faith is tender. There are a thousand questions, a lot of excitement, and also a lot of uncertainty. What does it even mean to follow Jesus in an ordinary week?</p>
            <p>This 21-day journey is built for exactly that season. Each day covers one foundational topic — from prayer to doubt to baptism to the long walk ahead. Zoe checks in three times a day with the passage, a reflection question, and space to actually think it through.</p>
            <p>No app. No homework. Just a text message that meets you where you are.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">The 21 Days</h2>
          <div className="flex flex-col gap-4">
            {days.map((d) => (
              <div key={d.day} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{d.day}</span>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    <span className="text-brand-cyan font-semibold text-sm">{d.passage}</span>
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
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">Every journey starts somewhere.</h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Join the waitlist and we&apos;ll let you know when this journey is ready to walk with you.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
