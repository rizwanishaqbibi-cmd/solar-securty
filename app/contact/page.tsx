"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Hybrid Solar Setup",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Hybrid Solar Setup",
        message: ""
      });

      // Auto close message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col w-full">

      {/* Page Header */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/field_4.jpg"
            alt="Smart Solar Contact Header"
            className="object-cover w-full h-full opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue-deep opacity-92 z-10" />
        </div>

        <div className="relative z-20 max-w-3xl mx-auto px-4 space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-brand-amber font-semibold text-xs tracking-widest uppercase border border-white/10">
            Get in Touch
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            Contact Us
          </h1>
          <div className="section-divider mx-auto" />
          <p className="max-w-lg mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            Need a custom layout evaluation or pricing quote? Reach out to Irfan Ahmad&apos;s engineering team.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="glass-panel p-8 rounded-2xl space-y-6">
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h3>
                <ul className="space-y-4 text-sm divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { day: "Mon – Wed", time: "9:00 AM – 9:00 PM", open: true },
                    { day: "Thursday", time: "Closed", open: false },
                    { day: "Friday", time: "9–12 PM, 4–9 PM", open: true },
                    { day: "Saturday", time: "9:00 AM – 6:00 PM", open: true },
                    { day: "Sunday", time: "Closed", open: false },
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between pt-4 first:pt-0">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{item.day}</span>
                      <span className={item.open ? "text-slate-600 dark:text-slate-400" : "text-slate-400 italic"}>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-panel p-8 rounded-2xl space-y-6">
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Visit Us</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  We are located at <strong className="text-slate-700 dark:text-slate-200">B-17, Islamabad, Pakistan</strong>. Visit us to explore our hybrid solar inverters, custom structures, and CCTV solutions.
                </p>

                <div className="space-y-4 pt-2 text-sm">
                  <a
                    href="https://wa.me/923317383800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.356-2.908-6.992-2.91-5.443 0-9.87 4.417-9.873 9.864-.001 1.734.453 3.424 1.316 4.915L1.897 21.03l4.75-1.876z" />
                      </svg>
                    </div>
                    <span>WhatsApp: 0331-7383800</span>
                  </a>

                  <a
                    href="mailto:smartsolar.security@gmail.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-brand-blue dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/8 dark:bg-brand-blue/15 flex items-center justify-center text-brand-blue dark:text-blue-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>smartsolar.security@gmail.com</span>
                  </a>

                  <a
                    href="tel:03317383800"
                    className="flex items-center gap-3 text-slate-600 hover:text-brand-blue dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/8 dark:bg-brand-blue/15 flex items-center justify-center text-brand-blue dark:text-blue-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>0331-738-3800</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal className="lg:col-span-7" delay={150}>
            <div className="glass-panel p-8 sm:p-10 rounded-2xl space-y-7">
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Request a Consultation</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5">
                  Fill in your requirements. Irfan Ahmad&apos;s team will contact you promptly.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 text-sm font-medium animate-fadeIn flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thank you! Your request has been submitted. We will call/WhatsApp you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Mahmood"
                      className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0331-1234567"
                      className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. email@gmail.com"
                      className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Service</label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm transition-all duration-200"
                    >
                      <option value="Hybrid Solar Setup">Hybrid Solar Setup</option>
                      <option value="CCTV Security Network">CCTV Security Network</option>
                      <option value="Battery Backup/Upgrade">Battery Backup/Upgrade</option>
                      <option value="Net Metering Consultation">Net Metering Consultation</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Message *</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your load requirements or number of cameras needed..."
                    className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-accent py-4 text-xs font-bold uppercase tracking-widest text-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
