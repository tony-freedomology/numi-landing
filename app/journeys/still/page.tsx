import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Still: 21 Days of Contemplative Prayer — Zoe",
  description:
    "Learn to be present with God in silence. Twenty-one days of building a contemplative prayer practice.",
};

const days = [
  {"day": 1, "passage": "Psalm 46:10", "theme": "Be Still", "prompt": "Sit in silence for 2 minutes. Don't try to think about anything. Just breathe and be present."},
  {"day": 2, "passage": "1 Kings 19:11–13", "theme": "The Still Small Voice", "prompt": "3 minutes of silence. When thoughts come, let them pass like clouds. You're listening, not performing."},
  {"day": 3, "passage": "Psalm 131:1–3", "theme": "A Calmed Soul", "prompt": "3 minutes of silence. Picture yourself as a child resting in a parent's arms. No agenda."},
  {"day": 4, "passage": "Matthew 6:6", "theme": "The Inner Room", "prompt": "Find your quiet place. 4 minutes of silence. Notice what you feel when the noise stops."},
  {"day": 5, "passage": "Psalm 62:1–2", "theme": "My Soul Waits", "prompt": "5 minutes of silence. Choose one word — peace, Jesus, love — and return to it when you get distracted."},
  {"day": 6, "passage": "Psalm 23:1–3", "theme": "Still Waters", "prompt": "Read the passage slowly, three times. 5 minutes of sitting with whatever phrase stays with you."},
  {"day": 7, "passage": "Exodus 14:14", "theme": "The Lord Will Fight For You", "prompt": "5 minutes. Breathe in 'The Lord will fight for me.' Breathe out whatever you're holding onto."},
  {"day": 8, "passage": "Lamentations 3:25–26", "theme": "Waiting Quietly", "prompt": "6 minutes of centering prayer. Choose a sacred word. When thoughts pull you away, gently return to it."},
  {"day": 9, "passage": "Isaiah 30:15", "theme": "In Quietness and Trust", "prompt": "6 minutes. Let go of the need to hear anything specific. Trust is being present without needing a result."},
  {"day": 10, "passage": "Psalm 27:4", "theme": "One Thing", "prompt": "7 minutes. What is the 'one thing' you want from God? Sit with that question in silence."},
  {"day": 11, "passage": "Mark 1:35", "theme": "A Solitary Place", "prompt": "7 minutes. Jesus got up before dawn to pray alone. What does your solitary place look like?"},
  {"day": 12, "passage": "Psalm 139:1–4", "theme": "Known Completely", "prompt": "8 minutes of being known. You don't need to explain yourself to God. Just sit in the truth that you are fully seen."},
  {"day": 13, "passage": "John 15:4–5", "theme": "Abide", "prompt": "8 minutes. Breathe in 'abide in me.' Breathe out 'I abide in you.' Let the rhythm carry you."},
  {"day": 14, "passage": "Psalm 16:11", "theme": "Fullness of Joy", "prompt": "9 minutes. You're halfway through. Notice how silence feels different now than on day 1."},
  {"day": 15, "passage": "Romans 8:26–27", "theme": "The Spirit Intercedes", "prompt": "9 minutes. You don't need to find the words. The Spirit prays when you can't."},
  {"day": 16, "passage": "Psalm 63:1–4", "theme": "My Soul Thirsts", "prompt": "10 minutes. What are you thirsty for? Name it, then sit with God in that longing."},
  {"day": 17, "passage": "Luke 10:38–42", "theme": "The Better Part", "prompt": "10 minutes. Mary chose to sit at Jesus' feet. Today, you're choosing the same thing."},
  {"day": 18, "passage": "Psalm 42:1–2", "theme": "As the Deer", "prompt": "12 minutes. Let your soul pant for God. No performance. Just honest desire."},
  {"day": 19, "passage": "Habakkuk 2:20", "theme": "Let All the Earth Be Silent", "prompt": "12 minutes. The Lord is in his holy temple. Let all the earth — including the noise in your head — be silent."},
  {"day": 20, "passage": "Psalm 37:7", "theme": "Be Still Before the Lord", "prompt": "15 minutes. You've built something here. This isn't just an exercise anymore — it's a relationship."},
  {"day": 21, "passage": "Psalm 84:1–4", "theme": "Better Is One Day", "prompt": "15 minutes. This is your last guided day, but the practice is yours now. What has shifted in you?"}
];

export default function StillPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            21-Day Journey
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">Still: Contemplative Prayer</h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Most of us talk at God. This journey teaches you to sit with God. Twenty-one days of building a contemplative prayer practice — starting with just two minutes of silence.
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
            {[{label:"Duration",value:"21 Days"},{label:"Practice",value:"2–15 min/day"},{label:"Passages",value:"21 readings"}].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold tracking-tighter-editorial text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 font-medium leading-relaxed text-lg space-y-6">
            <p>We live in a world that's always talking. Notifications, opinions, noise. And most of our prayer life follows the same pattern — we talk, God listens, we move on. But the deepest spiritual traditions across two thousand years of Christianity point to something different: being still enough to listen.</p>
            <p>This journey starts simple. Day one, you'll sit in silence for two minutes. That's it. By day 21, you'll have built a sustainable contemplative prayer practice. Along the way, Zoe introduces you to centering prayer, lectio divina, breath prayer, and the prayer of examen — each one paired with a short scripture passage and a guided reflection.</p>
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
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is currently in early access. Join the waitlist to be among the first to walk through Still with a daily discipleship companion.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
