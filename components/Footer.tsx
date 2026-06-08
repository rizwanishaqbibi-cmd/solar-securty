import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded overflow-hidden bg-white">
                <img
                  src="/logo.png"
                  alt="Smart Solar & Security Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-serif font-bold text-white text-lg tracking-tight">
                SMART SOLAR & SECURITY
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Providing professional, high-performance solar installations, lithium storage, and advanced CCTV security networks in Pakistan since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>B-17, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:03317383800" className="hover:text-white transition-colors duration-200">
                  0331-7383800
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:smartsolar.security@gmail.com" className="hover:text-white transition-colors duration-200 break-all">
                  smartsolar.security@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Wed</span>
                <span className="text-slate-300">9:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span className="text-slate-500">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-slate-300">9-12 PM, 4-9 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-slate-300">9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-slate-500">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {currentYear} Smart Solar & Security Solutions. All rights reserved.</p>
          <p className="mt-2 text-slate-600">Designed with professionalism and excellence for Islamabad and Rawalpindi areas.</p>
        </div>
      </div>
    </footer>
  );
}
