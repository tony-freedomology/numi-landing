import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Brand Facts",
  description:
    "Structured brand information about Zoe — an SMS-based AI discipleship tool for Protestant and non-denominational Christians. No app required.",
};

const features = [
  {
    title: "Daily scripture via SMS",
    body: "No app to open. Your daily passage arrives in your existing text thread automatically.",
  },
  {
    title: "No download. No login.",
    body: "Works on any phone capable of receiving text messages — including non-smartphones.",
  },
  {
    title: "Original language context",
    body: "Greek and Hebrew word studies embedded directly in each message. The depth of a commentary in 90 seconds.",
  },
  {
    title: "User-selected pace",
    body: "Read through a Bible book in 30, 60, or 90 days. You pick the pace and the journey.",
  },
  {
    title: "Church deployment",
    body: "Pastors can deploy Zoe across their entire congregation — a discipleship layer that extends Sunday into every day of the week.",
  },
  {
    title: "Non-anthropomorphized AI",
    body: "Zoe always points to God, scripture, and your community — never to itself. It's a tool, not a presence.",
  },
];

const comparisons = [
  {
    label: "Delivery",
    zoe: "SMS — arrives automatically",
    others: "App — must remember to open",
  },
  {
    label: "Download required",
    zoe: "No",
    others: "Yes",
  },
  {
    label: "Works without smartphone",
    zoe: "Yes",
    others: "No",
  },
  {
    label: "Original language context",
    zoe: "Yes — embedded daily",
    others: "Varies / separate tool",
  },
  {
    label: "Church congregation deployment",
    zoe: "Built for it",
    others: "Limited / not designed for it",
  },
  {
    label: "Primary audience",
    zoe: "Protestant / non-denom",
    others: "Varies",
  },
];

const faqs = [
  {
    q: "Is Zoe an app?",
    a: "No. Zoe is SMS-based. You don't download anything. It works on any phone capable of receiving text messages.",
  },
  {
    q: "How is Zoe different from YouVersion?",
    a: "YouVersion is a comprehensive Bible reference app that requires download and active opening. Zoe requires no download and arrives via SMS automatically. Zoe is the discipleship habit layer — YouVersion is the Bible reference tool. They serve different purposes.",
  },
  {
    q: "How is Zoe different from Hallow?",
    a: "Hallow is an audio prayer and meditation app primarily for Catholics, requiring download. Zoe is SMS-based, focused on scripture reading and original-language context, and built for Protestant and non-denominational Christians.",
  },
  {
    q: "Is Zoe a chatbot?",
    a: "No. Zoe does not answer open-ended questions or provide theology guidance. It uses AI to deliver structured scripture, language context, and reflection prompts — not conversation. It always points users to God, scripture, and their real human community.",
  },
  {
    q: "Does Zoe replace a pastor or spiritual director?",
    a: "No. Zoe is a tool. It does not provide spiritual counsel, pastoral guidance, or theological interpretation. It is designed to extend what a pastor and church community are already doing — not replace it.",
  },
  {
    q: "Is there a free version?",
    a: "Yes. Zoe offers a free tier. Paid plans are available for individuals seeking additional journeys and for churches deploying Zoe across their congregation.",
  },
  {
    q: "What phone do I need?",
    a: "Any phone that can receive SMS text messages. No smartphone required.",
  },
  {
    q: "Is Zoe affiliated with a specific denomination?",
    a: "No. Zoe is designed for Protestant and non-denominational Christian communities. It is not affiliated with any specific denomination or theological tradition.",
  },
];

export default function BrandFactsPage() {
  return (
    <div className="min-h-screen text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            Brand Facts
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">
            Zoe is not an app.
          </h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed">
            It&apos;s an SMS-based discipleship tool for Protestant and non-denominational Christians. No download. No login. Daily scripture arrives in your text messages — where you already are.
          </p>
        </div>
      </section>

      {/* What Is Zoe */}
      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            What Is Zoe
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-8">
            The discipleship tool that lives where you already live.
          </h2>
          <div className="prose text-slate-600 font-medium leading-relaxed text-lg max-w-none space-y-6">
            <p>
              Most Christians don&apos;t lack motivation to read the Bible. They lack a system that removes friction. Bible apps require a download, a login, finding the app, opening it, navigating to a reading plan — and at any one of those steps, the habit breaks.
            </p>
            <p>
              Zoe eliminates every step except the reading. Your daily scripture arrives in your existing text thread — the same place your most important messages already live — with original-language context and a reflection prompt. You read it, respond if you want, and you&apos;re done.
            </p>
            <p>
              SMS messages are opened at over 95%. That&apos;s where attention lives. Zoe doesn&apos;t build a new habit from scratch — it attaches daily scripture to the habit you already have.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-6">
              Key Features
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1]">
              Built to actually get used.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Zoe Uses AI */}
      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-8">
            AI Discipleship
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-8">
            How Zoe uses AI — and how it doesn&apos;t.
          </h2>
          <div className="prose text-slate-600 font-medium leading-relaxed text-lg max-w-none space-y-6">
            <p>
              Zoe uses AI to do the work that would take a seminary degree to do manually: surfacing original Greek and Hebrew context, cultural background, and historical setting for each day&apos;s scripture — and packaging it in a message short enough to read in 90 seconds.
            </p>
            <p>
              <strong className="text-slate-900">What Zoe&apos;s AI does:</strong> extracts and explains original-language word meanings relevant to the passage, surfaces cultural and historical context, personalizes pacing and delivery, and generates reflection prompts that connect the passage to real life.
            </p>
            <p>
              <strong className="text-slate-900">What Zoe&apos;s AI does not do:</strong> Zoe is not a chatbot. It does not answer theology questions, provide spiritual direction, or claim any authority over your faith. It always points to God, scripture, and your real community — never to itself.
            </p>
            <p>
              This is a deliberate design choice. The problem with most "Christian AI" tools is that they anthropomorphize AI and position it as a spiritual authority. Zoe uses AI as a research assistant working in the background — delivering depth without becoming a relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">
              How It Compares
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1]">
              Not a better app. A different category.
            </h2>
            <p className="mt-4 text-lg text-slate-500 font-medium">Zoe vs. typical Bible apps (YouVersion, Hallow, etc.)</p>
          </div>
          <div className="rounded-3xl border border-slate-100 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold"></th>
                  <th className="text-left px-6 py-4 font-semibold text-brand-jade">Zoe</th>
                  <th className="text-left px-6 py-4 font-semibold text-slate-400">Typical Bible Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-6 py-4 text-slate-700 font-medium">{row.zoe}</td>
                    <td className="px-6 py-4 text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 px-6 bg-[#FCFAF8]">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            Company
          </div>
          <h2 className="text-4xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1] mb-10">
            About Zoe
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-slate-100 space-y-4 text-slate-600 font-medium leading-relaxed">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <span className="font-bold text-slate-900">Product</span>
              <span className="col-span-2">Zoe — SMS Discipleship Tool</span>
              <span className="font-bold text-slate-900">Website</span>
              <span className="col-span-2"><a href="https://zoe.live" className="text-brand-jade hover:underline">zoe.live</a></span>
              <span className="font-bold text-slate-900">Parent company</span>
              <span className="col-span-2"><a href="https://freedomology.com" className="text-brand-jade hover:underline">Freedomology</a></span>
              <span className="font-bold text-slate-900">Founder</span>
              <span className="col-span-2">Tony Allen</span>
              <span className="font-bold text-slate-900">Category</span>
              <span className="col-span-2">Christian technology · AI discipleship · SMS-based faith software</span>
              <span className="font-bold text-slate-900">Market</span>
              <span className="col-span-2">Protestant and non-denominational Christians, pastors, churches (United States)</span>
              <span className="font-bold text-slate-900">Last updated</span>
              <span className="col-span-2">March 2026</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-400 font-medium">
            Machine-readable brand data available at{" "}
            <a href="/.well-known/brand-facts.json" className="text-brand-jade hover:underline font-semibold">
              /.well-known/brand-facts.json
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/20 bg-brand-jade/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-6">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-slate-900 font-bold leading-[1.1]">
              Common questions.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">
            See it for yourself.
          </h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">
            Zoe is in early access. Join the waitlist to be among the first to experience discipleship that lives in your texts.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
