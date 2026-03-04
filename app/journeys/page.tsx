import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Journeys — Zoe",
  description:
    "Explore guided daily reading, prayer, and reflection journeys built to help you walk with Jesus.",
};

const journeys = [
  {
    slug: "james-deep",
    title: "James: 10 Days Deep",
    duration: "10 Days",
    difficulty: "intermediate",
    image: "/images/journeys/james-deep.jpg",
    description: "James writes to a scattered church — people who claimed faith but lived differently from Monday to Saturday. His letter is less a theology lecture and more a direct conversation: you say you believe. Does your life show it?",
  },
  {
    slug: "still",
    title: "Still: 21 Days of Contemplative Prayer",
    duration: "21 Days",
    difficulty: "introductory",
    image: "/images/journeys/still-prayer.jpg",
    description: "Most of us talk at God. This journey teaches you to sit with God. Twenty-one days of building a contemplative prayer practice — starting with just two minutes of silence and gradually deepening into a rhythm that changes how you experience God's presence.",
  },
  {
    slug: "the-examen",
    title: "The Examen: 14 Days of Evening Reflection",
    duration: "14 Days",
    difficulty: "introductory",
    image: "/images/journeys/examen-reflection.jpg",
    description: "The Examen is a 500-year-old prayer practice from Ignatius of Loyola. It's simple: at the end of each day, look back and notice where God showed up — and where you missed it. Fourteen days to build the habit of paying attention.",
  },
  {
    slug: "rooted",
    title: "Rooted: 30 Days in the Psalms",
    duration: "30 Days",
    difficulty: "introductory",
    image: "/images/journeys/rooted-psalms.jpg",
    description: "The Psalms are the prayer book of the Bible — raw, honest, and deeply human. This 30-day journey pairs one psalm per day with a contemplative reading practice. Some days you'll sit in praise. Others, you'll wrestle with doubt. That's the point.",
  },
  {
    slug: "way-of-jesus",
    title: "The Way of Jesus: 40 Days Through the Gospels",
    duration: "40 Days",
    difficulty: "deep",
    image: "/images/journeys/way-of-jesus.jpg",
    description: "Forty days walking through the life and teachings of Jesus — from his first sermon to his last words. Each day pairs a Gospel passage with an application challenge. Because understanding what Jesus said without doing what he said is the whole problem.",
  },
];

export default function JourneysHubPage() {
  return (
    <div className="min-h-screen text-slate-900 bg-[#F8FBFA]">
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-jade mb-8">
            Guided Journeys
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter-editorial text-white leading-[1.1] font-bold">Walk the path.</h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Daily rhythms of reading, prayer, and reflection delivered directly to your phone. Pick a journey and start building a practice that lasts.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeys.map((journey) => (
              <Link 
                href={`/journeys/${journey.slug}`} 
                key={journey.slug}
                className="group flex flex-col rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={journey.image} 
                    alt={journey.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white border border-white/30">
                      {journey.duration}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-900/40 backdrop-blur-md px-3 py-1 text-xs font-semibold capitalize text-white border border-white/20">
                      {journey.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl tracking-tighter-editorial text-slate-900 font-bold mb-3 group-hover:text-brand-jade transition-colors duration-200">
                    {journey.title}
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm flex-grow mb-6 line-clamp-4">
                    {journey.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-brand-jade transition-colors duration-200 mt-auto">
                    View Details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter-editorial text-white font-bold leading-[1.1] mb-6">Your daily companion.</h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">Zoe is currently in early access. Join the waitlist to be among the first to walk through a guided journey with a daily discipleship companion in your texts.</p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-100 transition-all duration-200">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
