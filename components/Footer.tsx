import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Hybrid Solar Systems",
    "Battery Storage",
    "CCTV Security",
    "Net Metering",
    "Maintenance",
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-sm">
                <img
                  src="/logo.png"
                  alt="Smart Solar & Security Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-white text-lg tracking-tight block leading-tight">
                  Smart Solar
                </span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-slate-500">
                  & Security Solutions
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium solar installations, lithium storage, and advanced CCTV security networks in Islamabad & Rawalpindi since 2010.
            </p>
            {/* Social / WhatsApp link */}
            <a
              href="https://wa.me/923317383800"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.356-2.908-6.992-2.91-5.443 0-9.87 4.417-9.873 9.864-.001 1.734.453 3.424 1.316 4.915L1.897 21.03l4.75-1.876z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400 inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-amber/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>B-17, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-brand-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:03317383800" className="hover:text-white transition-colors duration-200">
                  0331-7383800
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-brand-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:smartsolar.security@gmail.com" className="hover:text-white transition-colors duration-200 break-all">
                  smartsolar.security@gmail.com
                </a>
              </li>
            </ul>

            {/* Hours summary */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Working Hours</p>
              <p className="text-sm text-slate-400">Mon–Wed: 9AM – 9PM</p>
              <p className="text-sm text-slate-400">Fri: 9–12PM, 4–9PM</p>
              <p className="text-sm text-slate-400">Sat: 9AM – 6PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Smart Solar & Security Solutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Serving Islamabad & Rawalpindi with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
