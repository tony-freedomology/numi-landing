import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 py-12 px-6 border-t border-slate-100 text-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-xl font-bold tracking-tighter-editorial-relaxed text-slate-900">
              Zoe
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              A daily discipleship companion that lives in your texts. No app. No login. Just the questions that matter.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900 text-xs uppercase tracking-widest mb-1">Product</p>
              <Link href="/features" className="font-medium hover:text-slate-900 transition-colors">Features</Link>
              <Link href="/faq" className="font-medium hover:text-slate-900 transition-colors">FAQ</Link>
              <Link href="/#waitlist" className="font-medium hover:text-slate-900 transition-colors">Join The Walk</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900 text-xs uppercase tracking-widest mb-1">Journeys</p>
              <Link href="/journeys/book-of-james" className="font-medium hover:text-slate-900 transition-colors">Book of James</Link>
              <Link href="/journeys/new-believer" className="font-medium hover:text-slate-900 transition-colors">New Believer</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900 text-xs uppercase tracking-widest mb-1">Company</p>
              <Link href="/about" className="font-medium hover:text-slate-900 transition-colors">About</Link>
              <Link href="/churches" className="font-medium hover:text-slate-900 transition-colors">For Churches</Link>
              <Link href="/blog" className="font-medium hover:text-slate-900 transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900 text-xs uppercase tracking-widest mb-1">Legal</p>
              <Link href="/privacy" className="font-medium hover:text-slate-900 transition-colors">Privacy</Link>
              <Link href="/terms" className="font-medium hover:text-slate-900 transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Zoe by Freedomology. All rights reserved.
          </div>
          <div className="text-slate-400">
            Built in Cleveland, OH.
          </div>
        </div>
      </div>
    </footer>
  );
}
