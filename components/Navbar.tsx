"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

const journeyLinks = [
  { href: "/journeys/book-of-james", label: "Book of James" },
  { href: "/journeys/new-believer", label: "New Believer" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [journeysOpen, setJourneysOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setJourneysOpen(false);
  }, [pathname]);

  const opaque = !isHomePage || scrolled;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        opaque
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "text-2xl font-bold tracking-tighter-editorial transition-colors duration-300",
            opaque ? "text-slate-900" : "text-white"
          )}
        >
          Zoe
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                opaque
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  : "text-white/80 hover:text-white hover:bg-white/10",
                pathname === link.href && (opaque ? "text-slate-900 bg-slate-100" : "text-white bg-white/10")
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Journeys Dropdown */}
          <div className="relative">
            <button
              onClick={() => setJourneysOpen((v) => !v)}
              onBlur={() => setTimeout(() => setJourneysOpen(false), 150)}
              className={clsx(
                "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                opaque
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              Journeys
              <motion.div animate={{ rotate: journeysOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {journeysOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-1"
                >
                  {journeyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/churches"
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
              opaque
                ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                : "text-white/80 hover:text-white hover:bg-white/10"
            )}
          >
            For Churches
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition-all duration-200"
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={clsx(
            "md:hidden p-2 rounded-full transition-all duration-200",
            opaque ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors",
                    pathname === link.href && "bg-slate-50 text-slate-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-slate-100 mt-2 pt-2">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Journeys
                </p>
                {journeyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-slate-100 mt-2 pt-2 flex flex-col gap-2">
                <Link
                  href="/churches"
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  For Churches
                </Link>
                <Link
                  href="/#waitlist"
                  className="mx-4 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-slate-700 transition-all duration-200"
                >
                  Join the Waitlist
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
