"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 dark:bg-[#080c14]/90 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-brand-blue/15 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Smart Solar & Security Logo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
                Smart Solar & Security
              </span>
              <span className="text-[9px] font-medium tracking-widest uppercase text-slate-400 dark:text-slate-500 hidden sm:block">
                Islamabad • Since 2010
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-brand-blue dark:text-white bg-brand-blue/8 dark:bg-white/8"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-brand-blue dark:bg-brand-amber" />
                )}
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-slate-200 dark:border-slate-700">
              <Link
                href="https://wa.me/923317383800?text=I%20would%20like%20to%20book%20a%20free%20site%20visit"
                target="_blank"
                className="btn-accent px-5 py-2.5 text-xs uppercase tracking-wider font-bold"
              >
                Free Site Visit
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-500 hover:text-brand-blue hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-white/98 dark:bg-[#0d1117]/98 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 animate-slideDown"
          id="mobile-menu"
        >
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-brand-blue bg-brand-blue/8 dark:text-white dark:bg-white/8"
                    : "text-slate-600 hover:text-brand-blue hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="https://wa.me/923317383800?text=I%20would%20like%20to%20book%20a%20free%20site%20visit"
                target="_blank"
                className="w-full btn-accent py-3.5 block text-center text-sm uppercase tracking-wider font-bold"
              >
                Book Free Site Visit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
