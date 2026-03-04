import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "The Way of Jesus: 40 Days Through the Gospels — Zoe",
  description:
    "Walk through the core teachings of Jesus. Forty days walking through the life and teachings of Jesus.",
};

const days = [
  {"day": 1, "passage": "Luke 4:16–21", "theme": "The Mission Statement", "prompt": "Jesus announces his mission. If you had to summarize what God is doing through your life in one sentence, what would it be?"},
  {"day": 2, "passage": "Matthew 4:18–22", "theme": "Follow Me", "prompt": "They dropped their nets immediately. What would you have to drop to truly follow?"},
  {"day": 3, "passage": "Matthew 5:1–12", "theme": "The Beatitudes", "prompt": "Which beatitude describes your current season? Which one challenges you most?"},
  {"day": 4, "passage": "Matthew 5:13–16", "theme": "Salt and Light", "prompt": "Where in your life are you most being 'salt'? Where has your light dimmed?"},
  {"day": 5, "passage": "Matthew 5:38–48", "theme": "Love Your Enemies", "prompt": "Name one person you find it hard to love. What would it cost you to pray for them today?"},
  {"day": 6, "passage": "Matthew 6:5–15", "theme": "How to Pray", "prompt": "Pray the Lord's Prayer slowly. Which line do you rush past? Stop there."},
  {"day": 7, "passage": "Matthew 6:25–34", "theme": "Do Not Worry", "prompt": "What are you worried about right now that you know, deep down, God already has?"},
  {"day": 8, "passage": "Matthew 7:1–5", "theme": "The Plank and the Speck", "prompt": "Who have you been judging? What plank in your own eye might you be missing?"},
  {"day": 9, "passage": "Matthew 7:24–29", "theme": "Build on the Rock", "prompt": "What part of your life is built on sand right now — good intentions with no foundation?"},
  {"day": 10, "passage": "Mark 2:1–12", "theme": "The Paralytic", "prompt": "Who do you know that needs someone to carry them to Jesus? What would that look like practically?"},
  {"day": 11, "passage": "Mark 4:1–20", "theme": "The Sower", "prompt": "What kind of soil is your heart right now? Honest answer."},
  {"day": 12, "passage": "Mark 4:35–41", "theme": "Peace, Be Still", "prompt": "What storm are you in? Do you believe Jesus can calm it — or are you still panicking?"},
  {"day": 13, "passage": "Luke 5:1–11", "theme": "The Miraculous Catch", "prompt": "Peter said 'Depart from me, for I am a sinful man.' When was the last time God's power made you uncomfortable?"},
  {"day": 14, "passage": "Luke 7:36–50", "theme": "The Sinful Woman", "prompt": "Do you relate more to the woman who wept at Jesus' feet or the Pharisee who judged her?"},
  {"day": 15, "passage": "Luke 10:25–37", "theme": "The Good Samaritan", "prompt": "Who have you walked past this week that needed you to stop?"},
  {"day": 16, "passage": "Luke 10:38–42", "theme": "Mary and Martha", "prompt": "Are you more Mary or Martha right now? What would choosing 'the better part' look like today?"},
  {"day": 17, "passage": "Luke 15:11–32", "theme": "The Prodigal Son", "prompt": "Are you the younger son, the older son, or the father in this story right now?"},
  {"day": 18, "passage": "John 3:1–21", "theme": "Born Again", "prompt": "Nicodemus came at night. What question are you afraid to ask God in the daylight?"},
  {"day": 19, "passage": "John 4:1–26", "theme": "Living Water", "prompt": "What broken well do you keep going back to for satisfaction instead of coming to Jesus?"},
  {"day": 20, "passage": "John 6:25–35", "theme": "The Bread of Life", "prompt": "What are you really hungry for? Be specific."},
  {"day": 21, "passage": "John 8:1–11", "theme": "Go and Sin No More", "prompt": "What would it feel like to hear Jesus say 'neither do I condemn you' — and actually believe it?"},
  {"day": 22, "passage": "John 9:1–12", "theme": "The Man Born Blind", "prompt": "What area of your life might you be blind to? Ask God to open your eyes."},
  {"day": 23, "passage": "John 10:1–18", "theme": "The Good Shepherd", "prompt": "Do you recognize Jesus' voice in your life? When was the last time you clearly heard it?"},
  {"day": 24, "passage": "John 11:17–44", "theme": "Lazarus", "prompt": "What dead thing in your life needs Jesus to call it out of the tomb?"},
  {"day": 25, "passage": "Luke 18:9–14", "theme": "The Pharisee and Tax Collector", "prompt": "When you pray, which one do you sound more like?"},
  {"day": 26, "passage": "Luke 19:1–10", "theme": "Zacchaeus", "prompt": "What would you have to climb — swallow your pride, look foolish — to get to Jesus?"},
  {"day": 27, "passage": "Matthew 20:1–16", "theme": "The Workers in the Vineyard", "prompt": "Does God's generosity to others bother you? Be honest."},
  {"day": 28, "passage": "Matthew 25:14–30", "theme": "The Talents", "prompt": "What has God given you that you're burying out of fear?"},
  {"day": 29, "passage": "Matthew 25:31–46", "theme": "The Sheep and the Goats", "prompt": "When did you last feed the hungry, visit the sick, or welcome the stranger?"},
  {"day": 30, "passage": "John 13:1–17", "theme": "Washing Feet", "prompt": "Who could you serve today in a way that costs you something?"},
  {"day": 31, "passage": "John 14:1–7", "theme": "The Way, Truth, and Life", "prompt": "Do you actually believe Jesus is the only way? What does that mean for how you live?"},
  {"day": 32, "passage": "John 15:1–17", "theme": "The Vine and Branches", "prompt": "What in your life needs pruning? What needs to be cut away so something better can grow?"},
  {"day": 33, "passage": "John 17:20–26", "theme": "Jesus Prays for You", "prompt": "Jesus prayed that you would be one with other believers. How are you doing at unity?"},
  {"day": 34, "passage": "Luke 22:39–46", "theme": "Gethsemane", "prompt": "Jesus prayed 'not my will, but yours.' What's the hardest 'your will' you're facing right now?"},
  {"day": 35, "passage": "Mark 15:33–39", "theme": "The Crucifixion", "prompt": "Sit with the cross for a few minutes. Don't rush to Easter. What does his death mean to you — personally?"},
  {"day": 36, "passage": "John 20:1–18", "theme": "The Empty Tomb", "prompt": "Mary didn't recognize the risen Jesus at first. Where might he be showing up in your life unrecognized?"},
  {"day": 37, "passage": "Luke 24:13–35", "theme": "The Road to Emmaus", "prompt": "Their hearts burned within them. When was the last time your heart burned while engaging with Scripture?"},
  {"day": 38, "passage": "John 20:24–29", "theme": "Doubting Thomas", "prompt": "What doubts are you carrying? Jesus doesn't condemn doubt — he meets it."},
  {"day": 39, "passage": "John 21:15–19", "theme": "Feed My Sheep", "prompt": "Jesus asked Peter the same question three times. If Jesus asked 'do you love me?' — what would your honest answer be?"},
  {"day": 40, "passage": "Matthew 28:16–20", "theme": "The Great Commission", "prompt": "You've spent 40 days with Jesus. What are you going to do about it?"}
];

export default function WayOfJesusPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            40-Day Journey
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tighter-editorial text-white leading-[1.1] font-bold">The Way of Jesus</h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Forty days walking through the life and teachings of Jesus — from his first sermon to his last words. Each day pairs a Gospel passage with an application challenge. Because understanding what Jesus said without doing what he said is the whole problem.
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
            {[{label:"Duration",value:"40 Days"},{label:"Check-ins",value:"3 per day"},{label:"Gospels",value:"40 readings"}].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold tracking-tighter-editorial text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 font-medium leading-relaxed text-lg space-y-6">
            <p>The Gospels are the heartbeat of the Christian faith. Everything else in Scripture points toward or flows from the story of Jesus. But most of us have read these stories so many times that they've lost their edge. We know the parables but don't live them. We admire the Sermon on the Mount but don't practice it.</p>
            <p>This 40-day journey changes that. Each day, Zoe walks you through a key passage from the life and teachings of Jesus — with context you've probably never heard, questions that get uncomfortable, and a daily challenge that puts the teaching into practice. By day 40, you'll have engaged with the core of Jesus' message and tested it against your actual life.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl tracking-tighter-editorial text-slate-900 font-bold mb-10">The 40 Days</h2>
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
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is currently in early access. Join the waitlist to be among the first to walk through The Way of Jesus with a daily discipleship companion.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
