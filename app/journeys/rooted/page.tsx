import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Rooted: 30 Days in the Psalms — Zoe",
  description:
    "Daily psalm + contemplative reading practice. Thirty days of praying the Psalms.",
};

const days = [
  {"day": 1, "passage": "Psalm 1", "theme": "Two Paths", "prompt": "What does it mean to be 'planted by streams of water' in your life right now?"},
  {"day": 2, "passage": "Psalm 8", "theme": "What Is Humanity?", "prompt": "When was the last time you looked up at the sky and felt genuinely small?"},
  {"day": 3, "passage": "Psalm 13", "theme": "How Long, O Lord?", "prompt": "What question have you been asking God that still doesn't have an answer?"},
  {"day": 4, "passage": "Psalm 16", "theme": "The Path of Life", "prompt": "What does 'fullness of joy in your presence' actually feel like to you?"},
  {"day": 5, "passage": "Psalm 19", "theme": "The Heavens Declare", "prompt": "Where do you most clearly see God's fingerprint in creation?"},
  {"day": 6, "passage": "Psalm 22", "theme": "Why Have You Forsaken Me?", "prompt": "Have you ever felt utterly abandoned by God? What happened next?"},
  {"day": 7, "passage": "Psalm 23", "theme": "The Lord Is My Shepherd", "prompt": "Which line of this psalm do you most need to hear today? Sit with it for a few minutes."},
  {"day": 8, "passage": "Psalm 27", "theme": "One Thing I Ask", "prompt": "If you could ask God for one thing, what would it be? Not the Sunday school answer — the real one."},
  {"day": 9, "passage": "Psalm 30", "theme": "Weeping to Dancing", "prompt": "What season of mourning in your life eventually gave way to something beautiful?"},
  {"day": 10, "passage": "Psalm 32", "theme": "The Joy of Forgiveness", "prompt": "Is there something you've been carrying that you need to confess? What would it feel like to let it go?"},
  {"day": 11, "passage": "Psalm 34", "theme": "Taste and See", "prompt": "Where have you 'tasted' God's goodness recently — even in a small way?"},
  {"day": 12, "passage": "Psalm 37:1–11", "theme": "Trust and Do Good", "prompt": "What are you fretting about right now? What would it look like to trust God with it — specifically?"},
  {"day": 13, "passage": "Psalm 40:1–5", "theme": "He Lifted Me Up", "prompt": "Tell the story of a time God pulled you out of something. Remember the details."},
  {"day": 14, "passage": "Psalm 42", "theme": "As the Deer", "prompt": "What are you thirsty for right now? Be honest."},
  {"day": 15, "passage": "Psalm 46", "theme": "God Is Our Refuge", "prompt": "What would change in your day if you really believed 'the Lord of hosts is with us'?"},
  {"day": 16, "passage": "Psalm 51", "theme": "Create in Me", "prompt": "Where do you need a clean heart today? Ask God specifically."},
  {"day": 17, "passage": "Psalm 63", "theme": "My Soul Thirsts for You", "prompt": "David wrote this in a desert. What's your desert right now — and can you still praise God there?"},
  {"day": 18, "passage": "Psalm 73", "theme": "Until I Entered the Sanctuary", "prompt": "Have you ever been jealous of someone who doesn't follow God? What shifted your perspective?"},
  {"day": 19, "passage": "Psalm 84", "theme": "Better Is One Day", "prompt": "What does it feel like to be in God's presence for you? Can you describe it?"},
  {"day": 20, "passage": "Psalm 90", "theme": "Teach Us to Number Our Days", "prompt": "How would you live today if you genuinely believed your time was limited?"},
  {"day": 21, "passage": "Psalm 91", "theme": "Under His Wings", "prompt": "What does it mean to make the Most High your dwelling place — in a practical, daily sense?"},
  {"day": 22, "passage": "Psalm 100", "theme": "Enter His Gates", "prompt": "Start today with thanksgiving. Name five specific things. No generics."},
  {"day": 23, "passage": "Psalm 103", "theme": "Forget Not His Benefits", "prompt": "Which of God's benefits do you most take for granted? Healing, forgiveness, redemption, love, compassion?"},
  {"day": 24, "passage": "Psalm 116", "theme": "I Love the Lord", "prompt": "When did God hear your cry? Can you remember the exact moment?"},
  {"day": 25, "passage": "Psalm 119:105–112", "theme": "A Lamp to My Feet", "prompt": "What decision in front of you needs light right now?"},
  {"day": 26, "passage": "Psalm 121", "theme": "I Lift Up My Eyes", "prompt": "Where does your help come from? Not in theory — where did it come from this week?"},
  {"day": 27, "passage": "Psalm 130", "theme": "Out of the Depths", "prompt": "From what depths have you called out to God? What did you learn in the waiting?"},
  {"day": 28, "passage": "Psalm 136:1–9", "theme": "His Love Endures Forever", "prompt": "Write your own version of Psalm 136. List specific things God has done, followed by 'his love endures forever.'"},
  {"day": 29, "passage": "Psalm 139", "theme": "You Know Me", "prompt": "What does it feel like to be completely known — not just your public self, but all of it?"},
  {"day": 30, "passage": "Psalm 150", "theme": "Let Everything Praise", "prompt": "You've been in the Psalms for 30 days. What has changed in how you talk to God?"}
];

export default function RootedPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="relative bg-[#141008] py-32 px-6 pt-40 overflow-hidden">
        <Image src="/images/journeys/rooted-psalms.jpg" alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141008]/80 via-[#141008]/40 to-[#141008]/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            30-Day Journey
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">Rooted: 30 Days in the Psalms</h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            The Psalms are the prayer book of the Bible — raw, honest, and deeply human. This 30-day journey pairs one psalm per day with a contemplative reading practice. Some days you'll sit in praise. Others, you'll wrestle with doubt. That's the point.
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
            {[{label:"Duration",value:"30 Days"},{label:"Check-ins",value:"3 per day"},{label:"Psalms",value:"30 readings"}].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold tracking-tighter-editorial text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 font-medium leading-relaxed text-lg space-y-6">
            <p>For three thousand years, people have prayed the Psalms. They cover everything — joy and grief, praise and rage, confidence and doubt. There's nothing you're feeling right now that the Psalms haven't already put into words.</p>
            <p>This journey takes you through 30 psalms in 30 days, but it's not a speed-read. Each day you'll practice lectio divina — reading slowly, sitting with a phrase, and letting it work on you. Zoe delivers the psalm each morning, walks you through the contemplative reading, and then follows up throughout the day to help you carry it with you. By the end, you won't just know the Psalms better — you'll have a practice for reading Scripture that lasts.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">The 30 Days</h2>
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
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is currently in early access. Join the waitlist to be among the first to walk through Rooted with a daily discipleship companion.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
