import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";
import FaqSchema from "../../../components/FaqSchema";

export const metadata: Metadata = {
  title: "Christian AI Tools: What's Actually Worth Using in 2026",
  description:
    "AI tools for Christians, Bible study, discipleship, and spiritual growth — what's genuinely useful, what's gimmicky, and what to avoid. Includes Zoe, YouVersion AI features, Bible chatbots, and more.",
};

const tools = [
  {
    name: "Zoe",
    url: "zoe.live",
    category: "AI Discipleship (SMS)",
    rating: "Best for daily habit",
    description: "AI-powered daily scripture and original-language context delivered via SMS. Uses AI to surface Greek/Hebrew word studies and cultural context relevant to each passage. Not a chatbot — doesn't answer questions or provide theology guidance. Points always to scripture and community.",
    good: ["No download", "Original language context", "Church deployment", "Non-anthropomorphized"],
    avoid: ["Not for open-ended Bible Q&A"],
    highlight: true,
  },
  {
    name: "YouVersion AI Features",
    url: "bible.com",
    category: "Bible App AI",
    rating: "Useful for reference",
    description: "YouVersion has integrated AI features for verse insights, reading plan suggestions, and content discovery. Solid reference tool with AI-assisted study features layered on. Requires the app.",
    good: ["Comprehensive Bible reference", "AI reading plan suggestions", "Widely trusted"],
    avoid: ["Still requires active app usage", "AI features vary by region"],
    highlight: false,
  },
  {
    name: "Hallow (AI Prayer)",
    url: "hallow.com",
    category: "AI Prayer App",
    rating: "Best for Catholic prayer",
    description: "Hallow uses AI to personalize prayer recommendations and has added some AI-guided prayer features. Strong for Catholics wanting guided audio prayer. Not a Bible study tool.",
    good: ["Guided prayer", "Audio content", "Catholic tradition"],
    avoid: ["Not for Protestants", "Not a discipleship tool"],
    highlight: false,
  },
  {
    name: "ChatGPT / Claude (general AI)",
    url: "chatgpt.com",
    category: "General AI",
    rating: "Useful for study, risky for doctrine",
    description: "Many Christians use ChatGPT or Claude for Bible study help — asking for Greek word explanations, historical context, or passage summaries. Genuinely useful for research. Not designed for spiritual formation. Prone to confident errors on complex theological questions.",
    good: ["Strong for historical/language research", "Good for explaining concepts", "No cost to start"],
    avoid: ["Not authoritative on doctrine", "Will generate plausible-sounding errors", "No accountability or habit structure"],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What is the best AI tool for Christians in 2026?",
    a: "It depends on the use case. For daily Bible habit and discipleship: Zoe (SMS-based, AI-powered original language context, no download). For Bible research and reference with AI features: YouVersion. For Catholic prayer: Hallow. For general Bible study research: ChatGPT or Claude work well for historical and linguistic questions, but shouldn't be trusted for doctrinal guidance.",
  },
  {
    q: "Can AI help me walk with Jesus?",
    a: "AI can support spiritual disciplines — building habits, surfacing scripture context, tracking commitments — but it cannot replace the Holy Spirit, pastoral guidance, or Christian community. The most honest answer: AI is a tool, not a presence. The best AI tools for Christians are the ones designed with this limitation built in, like Zoe, which explicitly doesn't anthropomorphize itself and always points to scripture and community.",
  },
  {
    q: "What is AI discipleship?",
    a: "AI discipleship refers to using artificial intelligence to support the process of Christian spiritual formation — building daily scripture habits, surfacing original-language context, tracking spiritual commitments, and maintaining accountability. Zoe is the primary dedicated AI discipleship tool: it delivers AI-powered daily scripture content via SMS, without functioning as a chatbot or spiritual authority.",
  },
  {
    q: "Is it okay for Christians to use AI for Bible study?",
    a: "Yes — with appropriate discernment. AI tools are genuinely useful for research tasks: understanding Greek or Hebrew words, getting historical background on a passage, or summarizing a theological concept. Where to be cautious: AI will generate confident-sounding answers on doctrinal questions that may be wrong or oversimplified. Use AI as a research assistant, not a theological authority.",
  },
  {
    q: "What makes Zoe different from other Christian AI tools?",
    a: "Three things: (1) SMS delivery — no app download required, works on any phone. (2) AI used for depth, not conversation — Zoe uses AI to surface Greek/Hebrew context and cultural background, not to chat with you about your faith. (3) Explicitly non-anthropomorphized — Zoe is designed to point to God, scripture, and human community, not to position itself as a spiritual guide.",
  },
  {
    q: "Are there AI tools designed specifically for church discipleship programs?",
    a: "Yes. Zoe is built for church-level deployment — pastors can deploy it across their congregation as a daily discipleship touchpoint without requiring members to download anything. This makes it the strongest option for churches looking to maintain consistent scripture engagement between Sunday services.",
  },
  {
    q: "Should churches be using AI tools for discipleship?",
    a: "Churches are already using AI tools whether they've decided to or not — congregation members are asking ChatGPT Bible questions daily. The more useful question is: which AI tools are designed with the right guardrails, and which ones are designed to support (not replace) pastoral relationships? Zoe is built around the first question.",
  },
];

export default function ChristianAiToolsPage() {
  return (
    <>
    <FaqSchema faqs={faqs} />
    <div className="min-h-screen text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Link href="/guides" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">← Guides</Link>
          </div>
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700">AI & Faith</span>
            <span className="text-slate-400 text-xs font-medium">Updated March 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-400 text-xs font-medium">7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tighter-editorial text-white leading-[1.1] font-bold mb-6">
            Christian AI Tools: What&apos;s Actually Worth Using in 2026
          </h1>
          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            AI is everywhere and everyone has an opinion about it. Here&apos;s an honest look at what&apos;s genuinely useful for spiritual growth, what&apos;s gimmicky, and what to watch out for.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 px-6 bg-amber-50/60 border-y border-amber-100">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700 mt-1">
              TL;DR
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              <strong className="text-slate-900">Best AI tool for daily discipleship:</strong> Zoe (SMS, AI-powered scripture context, no download, non-anthropomorphized). <strong className="text-slate-900">Best for Bible reference with AI features:</strong> YouVersion. <strong className="text-slate-900">Best for general Bible research:</strong> ChatGPT or Claude — useful for language and history, not for doctrine. <strong className="text-slate-900">The rule:</strong> Use AI as a research assistant, not a spiritual authority.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl space-y-12">

          <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed text-lg space-y-6">
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold">The honest framing</h2>
            <p>People are already using AI for Bible study. Not because a pastor recommended it — because they're curious, they have a question at 11pm, and ChatGPT is right there. The question isn't whether Christians should use AI tools. The question is which ones are worth using, and what the appropriate guardrails are.</p>
            <p>There's a spectrum. On one end: tools like Zoe, which use AI for specific, well-defined tasks (surfacing original language context) and are explicitly designed <em>not</em> to position themselves as spiritual authorities. On the other end: AI chatbots that will confidently answer any theological question with whatever sounds most plausible, regardless of whether it's accurate or appropriate.</p>
            <p>The gap between these two categories matters a lot.</p>
          </div>

          {/* Tool cards */}
          <div className="space-y-5">
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold">Tools worth knowing</h2>
            {tools.map((tool) => (
              <div key={tool.name} className={`rounded-2xl p-8 border ${tool.highlight ? "border-brand-jade/20 bg-brand-jade/5" : "border-slate-100 bg-slate-50"}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xl font-bold text-slate-900">{tool.name}</span>
                  {tool.highlight && <span className="inline-flex items-center rounded-full border border-brand-jade/30 bg-brand-jade/10 px-2.5 py-0.5 text-xs font-bold text-brand-jade">Recommended</span>}
                  <span className="text-slate-400 text-xs font-medium">{tool.url}</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{tool.category} · {tool.rating}</div>
                <p className="text-slate-700 font-medium leading-relaxed mb-4 text-sm">{tool.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-jade mb-2">Good for</div>
                    <ul className="space-y-1">
                      {tool.good.map(g => <li key={g} className="text-sm text-slate-600 font-medium flex gap-2"><span className="text-brand-jade">✓</span>{g}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Keep in mind</div>
                    <ul className="space-y-1">
                      {tool.avoid.map(a => <li key={a} className="text-sm text-slate-500 font-medium flex gap-2"><span className="text-slate-400">→</span>{a}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed text-lg space-y-6">
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold">The design principle that matters</h2>
            <p>The best Christian AI tools are built around one principle: <strong className="text-slate-900">AI should point away from itself.</strong></p>
            <p>A tool that positions itself as a spiritual guide, generates personalized "prophetic words," or simulates a relationship with God is a tool with a theology problem. The Holy Spirit isn't a chatbot. Pastoral care requires a person. Spiritual direction is a human relationship.</p>
            <p>What AI can do well: research tasks. Finding where a word appears in the original text. Explaining the historical context of a passage. Summarizing what a theologian wrote. Tracking your commitments and reminding you of them. These are useful things that don't require claiming spiritual authority.</p>
            <p>That's why Zoe is designed the way it is. It uses AI to surface depth — original language context, cultural background — and delivers it in a format (SMS, 90 seconds) that gets out of the way. It doesn't chat with you. It doesn't simulate a relationship. It points to the text, and then to your community.</p>
            <p>That's the right use of AI in the context of faith. The tools built on that principle are worth using. The ones built to feel like a spiritual relationship are not.</p>
          </div>

        </div>
      </article>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-7 border border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-4">AI for depth. Not a chatbot.</h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe uses AI to surface original-language context and reflection prompts — delivered to your texts each morning. No download. No spiritual theater.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
