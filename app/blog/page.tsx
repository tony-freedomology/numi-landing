import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import blogBg from "../../public/images/blog-bg.webp";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thinking on discipleship, technology, and what it looks like to walk with Jesus in the everyday. From the team at Zoe.",
};

const posts = [
  {
    slug: "why-you-keep-quitting-your-bible-app",
    title: "Why You Keep Quitting Your Bible App (And What Actually Works)",
    description: "71% of apps are abandoned within 90 days. Bible apps are no different. The problem is friction — and the fix is simpler than you think.",
    date: "March 2026",
    readTime: "8 min read",
    badge: "Discipleship",
    badgeColor: "text-brand-jade border-brand-jade/20 bg-brand-jade/5",
    image: "/blog/why-you-keep-quitting-your-bible-app/hero.jpg",
  },
  {
    slug: "what-is-sms-discipleship",
    title: "What Is SMS Discipleship?",
    description: "SMS discipleship is daily spiritual growth that happens through text messages — no app, no login, no friction. Here's why it works when nothing else does.",
    date: "February 2026",
    readTime: "7 min read",
    badge: "Discipleship",
    badgeColor: "text-brand-jade border-brand-jade/20 bg-brand-jade/5",
  },
  {
    slug: "can-ai-help-you-walk-with-jesus",
    title: "Can AI Help You Walk With Jesus?",
    description: "AI can't love you or know God's will — but it can remember your commitments and bring you back. Here's an honest look at AI discipleship tools.",
    date: "February 2026",
    readTime: "8 min read",
    badge: "AI & Faith",
    badgeColor: "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5",
  },
  {
    slug: "equip-the-kingdom-to-use-ai-well",
    title: "What Does It Look Like to Equip the Kingdom to Use AI Well?",
    description: "The church can't afford to sit this one out. Here's a practical framework for how churches and ministries should evaluate, adopt, and shape AI tools faithfully.",
    date: "March 2026",
    readTime: "9 min read",
    badge: "Church & Technology",
    badgeColor: "text-amber-600 border-amber-200 bg-amber-50",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="relative w-full aspect-video overflow-hidden bg-misty-green-950" style={{ marginTop: '72px' }}>
        <Image src={blogBg} alt="Blog Background" fill className="object-cover" priority />

        {/* Subtle Text Backdrop */}
        <div className="absolute inset-0 z-10 md:w-2/3 lg:w-1/2 flex items-center">
          <div className="w-full h-[150%] -ml-[20%] pointer-events-none backdrop-blur-md"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, transparent 100%)'
            }}
          />
        </div>
        <div className="absolute inset-0 z-10 md:w-2/3 lg:w-1/2 flex items-center">
          <div className="w-full h-[150%] -ml-[20%] pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(0,0,0,0.5)_0%,_transparent_100%)]" />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] tracking-tighter-editorial text-white leading-[1.05] font-bold mb-2 lg:mb-4">
              Thinking on discipleship
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl text-white font-medium tracking-tight">
              Tech, faith, and what it looks like to<br />walk with Jesus in the everyday
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#F8FBFA]">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${post.badgeColor}`}>
                    {post.badge}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                  <span className="text-slate-300 text-xs">·</span>
                  <span className="text-slate-400 text-xs font-medium">{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl tracking-tighter-editorial text-slate-900 font-bold leading-snug mb-4 group-hover:text-brand-jade transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">{post.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-brand-jade transition-colors duration-200">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
