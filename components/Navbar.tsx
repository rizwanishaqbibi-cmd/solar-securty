"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-brand-blue/20 bg-white shadow-sm transition-all duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Smart Solar & Security Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-brand-blue dark:text-white transition-colors duration-300 group-hover:text-brand-blue-dark">
                SMART SOLAR & SECURITY
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-brand-blue bg-brand-blue/10 dark:text-white dark:bg-white/10"
                      : "text-slate-600 hover:text-brand-blue hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/923317383800?text=I%20would%20like%20to%20book%20a%20free%20site%20visit"
                target="_blank"
                className="btn-accent px-4 py-2 text-xs uppercase tracking-wider"
              >
                Free Site Visit
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-brand-blue hover:bg-slate-100 focus:outline-none dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? "block animate-fadeIn" : "hidden"} md:hidden bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-md border-b`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                isActive(link.href)
                  ? "text-brand-blue bg-brand-blue-light dark:text-white dark:bg-brand-blue/30"
                  : "text-slate-600 hover:text-brand-blue hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-3 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="https://wa.me/923317383800?text=I%20would%20like%20to%20book%20a%20free%20site%20visit"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="w-full btn-accent py-3 block text-center text-sm uppercase tracking-wider"
            >
              Free Site Visit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
