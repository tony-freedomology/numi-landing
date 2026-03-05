import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";
import FaqSchema from "../../../components/FaqSchema";

export const metadata: Metadata = {
  openGraph: {
    images: ["/blog/why-you-keep-quitting-your-bible-app/hero.jpg"],
  },
  title: "Why You Keep Quitting Your Bible App (And What Actually Works)",
  description:
    "71% of apps are abandoned within 90 days. Bible apps are no different. The problem is friction — and the fix is simpler than you think.",
};

const faqs = [
  {
    q: "Why do people stop using Bible apps?",
    a: "The same reason people stop using most apps: friction. You have to remember to open it, find where you left off, ignore notifications from other apps, and stay focused. Bible apps compete with every other app on your phone for attention — and they usually lose.",
  },
  {
    q: "What is the best alternative to a Bible app?",
    a: "SMS-based discipleship tools like Zoe deliver daily scripture directly to your text messages. No app to open, no login, no competing notifications. SMS has a 95%+ open rate compared to ~20% for app push notifications.",
  },
  {
    q: "Does Zoe replace my Bible?",
    a: "No. Zoe sends daily scripture passages with original Greek and Hebrew context to help you build a consistent habit. It works alongside your Bible, your church, and your community — it fills the gap between Sundays.",
  },
  {
    q: "Why is SMS better than an app for Bible reading?",
    a: "SMS removes every point of friction: no download, no login, no competing apps. Text messages have a 95%+ open rate and are typically read within 3 minutes. You already check your texts — Zoe meets you where you already are.",
  },
  {
    q: "Is Zoe free?",
    a: "Yes. Zoe is currently in free beta. Join the waitlist at zoe.live.",
  },
  {
    q: "Can my church use Zoe?",
    a: "Yes. Zoe is built for church deployment. Pastors can roll it out across their congregation — every member with a phone number can receive daily scripture, no smartphone required.",
  },
];

export default function WhyYouKeepQuittingPage() {
  return (
    <>
    <FaqSchema faqs={faqs} />
    <div className="min-h-screen text-slate-900">
      <section className="bg-gradient-to-b from-[#1a1308] to-[#141008] py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Link href="/blog" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">&larr; Blog</Link>
          </div>
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="inline-flex items-center rounded-full border border-brand-jade/30 bg-brand-jade/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade">Discipleship</span>
            <span className="text-slate-400 text-xs font-medium">March 2026</span>
            <span className="text-slate-600 text-xs">&middot;</span>
            <span className="text-slate-400 text-xs font-medium">8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tighter-editorial text-white leading-[1.1] font-bold mb-6">Why You Keep Quitting Your Bible App (And What Actually Works)</h1>
          <p className="text-xl text-slate-300 font-medium leading-relaxed">71% of apps are abandoned within 90 days. Bible apps are no different. The problem is friction — and the fix is simpler than you think.</p>
        </div>
      </section>

      <article className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">

          {/* TL;DR */}
          <section className="mb-12 py-8 px-6 bg-brand-jade/5 border-y border-brand-jade/10 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-8 rounded bg-brand-jade/20 flex items-center justify-center text-brand-jade font-bold text-sm tracking-wider">TL;DR</div>
              <p className="text-slate-700 font-medium leading-relaxed">
                <strong>Bible apps fail for the same reason most apps fail: friction.</strong> You have to remember to open them, find your place, and stay focused while your phone buzzes with everything else. SMS-based tools like <strong>Zoe</strong> skip all of that — daily scripture arrives in your text messages with original Greek and Hebrew context. No download, no login, 95%+ open rate.
              </p>
            </div>
          </section>

          <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed text-lg space-y-6">

            <p>You&apos;ve done this before. Probably more than once.</p>

            <p>You download a Bible app — maybe YouVersion, maybe something else. Day one, you&apos;re in. You pick a reading plan. You read the passage. You feel good about it. Day two, same thing. Day three, you open the app but get distracted by a text notification halfway through Psalm 23. Day four, you forget entirely. Day seven, the app sends you a push notification that feels vaguely passive-aggressive: &ldquo;We miss you!&rdquo;</p>

            <p>By day fourteen, the app is buried on your third home screen and you&apos;ve mentally filed it under &ldquo;things I should do but don&apos;t.&rdquo;</p>

            <p>Sound familiar? You&apos;re in good company. This happens to millions of Christians every year, and the data backs it up.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The App Abandonment Problem</h2>

            <p>According to industry data, <strong>71% of mobile apps are abandoned within 90 days</strong> of download. Bible apps aren&apos;t immune to this. YouVersion has been downloaded over 500 million times — but daily active usage is a fraction of that number.</p>

            <p>Why? Because Bible apps have to compete with every other app on your phone. Instagram, Gmail, Slack, iMessage, TikTok, your banking app, your kids&apos; school app — they&apos;re all one swipe away. And they all have teams of engineers specifically designing notifications to pull your attention.</p>

            <p>Your Bible app is in a knife fight with some of the most addictive technology ever built. And it&apos;s losing.</p>

            <p>The conventional wisdom says you just need more discipline. Wake up earlier. Put your phone on Do Not Disturb. Use an app blocker. Try harder.</p>

            <p>But discipline is a finite resource. You use it up making decisions all day. By the time most people have the space to sit with Scripture, their willpower tank is empty. The app sits there, right next to the 47 other things demanding attention, and it loses.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The Friction Model</h2>

            <p>In product design, there&apos;s a concept called &ldquo;friction&rdquo; — the number of steps between wanting to do something and actually doing it. Every step you add, you lose people.</p>

            <p>Here&apos;s what the friction looks like for a typical Bible app:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Remember to open the app</li>
              <li>Unlock your phone</li>
              <li>Find the app (which screen is it on?)</li>
              <li>Wait for it to load</li>
              <li>Find your reading plan</li>
              <li>Find where you left off</li>
              <li>Read — while ignoring every other notification</li>
            </ol>

            <p>That&apos;s seven friction points before you read a single verse. Each one is an opportunity to get pulled away.</p>

            <p>Now here&apos;s what it looks like with SMS:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Your phone buzzes</li>
              <li>You read the text</li>
            </ol>

            <p>Two steps. And the first one happens automatically.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">Why SMS Works When Apps Fail</h2>

            <p>Text messages have a <strong>95%+ open rate</strong>. The average text is read within 3 minutes of delivery. Compare that to app push notifications, which have an average open rate around 20% — and that&apos;s being generous.</p>

            <p>The reason is simple: text messages live in a channel you already check dozens of times a day. You don&apos;t have to form a new habit. You don&apos;t have to remember to open anything. Scripture arrives in the same place as your conversations with friends and family.</p>

            <p>There&apos;s a psychological principle at work here too. When something arrives in your messages, your brain processes it differently than an app notification. A notification feels like a demand. A text feels like a conversation. One triggers guilt; the other triggers curiosity.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">What Zoe Does Differently</h2>

            <p><a href="https://zoe.live" className="text-brand-cyan hover:underline">Zoe</a> is an SMS discipleship tool. No app. No download. You get a text message every day with a scripture passage and original-language context — the kind of Greek and Hebrew word studies that used to require a seminary library or a stack of commentaries.</p>

            <p>Here&apos;s what a typical Zoe message looks like: you get a passage from the book you&apos;re reading through, plus a note on a key word in the original language. Maybe the passage uses the word &ldquo;endurance&rdquo; and Zoe surfaces the Greek word <em>hypomone</em> — which doesn&apos;t just mean &ldquo;hang in there.&rdquo; It means &ldquo;remaining under the weight with purpose.&rdquo; That kind of depth changes how you read the verse. And it takes 90 seconds.</p>

            <p>Zoe uses AI in the background to surface that context — but the AI is a research tool, not a conversation partner. Zoe will never try to be your pastor, your counselor, or your friend. It points you to Scripture, to the original languages, and to the people around you. Every time.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The Numbers</h2>

            <p>Some numbers worth knowing:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>71%</strong> of apps abandoned within 90 days</li>
              <li><strong>95%+</strong> SMS open rate</li>
              <li><strong>~20%</strong> app push notification open rate</li>
              <li><strong>3 minutes</strong> — average time to read a text message after delivery</li>
              <li><strong>31%</strong> of churchgoers read the Bible daily (Lifeway Research, 2026)</li>
              <li><strong>90 seconds</strong> — average time to read a Zoe daily message</li>
            </ul>

            <p>The gap between intention and action is a design problem. Christians want to engage with Scripture. The delivery mechanism is what keeps failing them.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">For Pastors: What This Means for Your Church</h2>

            <p>If you lead a church, you already know the discipleship gap is real. You preach on Sunday and hope it sticks through the week. Sometimes it does. Usually it doesn&apos;t.</p>

            <p>Zoe is built for church deployment. Every member with a phone number — including basic phones, no smartphone required — can receive daily scripture. Pastors can deploy Zoe across their congregation without adding another app, another login, or another thing for people to manage.</p>

            <p>The simplest way to think about it: Zoe fills the space between Sundays. Daily, personal, zero friction.</p>

            <hr className="border-slate-200 my-10" />

            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">Getting Started</h2>

            <p>If you&apos;ve tried Bible apps and they didn&apos;t stick, that&apos;s worth paying attention to. The desire was real — the tool just created too much friction.</p>

            <p>Zoe is free and currently in beta. Join the waitlist, pick a book of the Bible, and start getting daily messages with depth you won&apos;t find anywhere else.</p>

            <p>No download. No login. Just Scripture in your texts, every morning.</p>

          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-brand-jade px-8 py-4 text-base font-semibold text-white hover:bg-brand-jade/90 transition-colors"
            >
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">Frequently asked questions</h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
