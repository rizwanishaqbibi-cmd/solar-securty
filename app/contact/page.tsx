"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

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
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/field_4.jpg"
            alt="Smart Solar Contact Header Background"
            className="object-cover w-full h-full opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark opacity-90 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            Contact Us
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-slate-200">
            Hours & Appointments
          </p>
          <div className="w-12 h-1 bg-brand-amber mx-auto rounded" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            Need a custom layout evaluation or pricing quote? Visit our location in B-17 Islamabad or write to Irfan Ahmad's engineering team directly.
          </p>
        </div>
      </section>

      {/* Main Grid Contact Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Hours & Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Hours card */}
            <div className="glass-panel p-8 rounded-2xl shadow-sm border space-y-6">
              <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-blue dark:text-brand-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h3>
              <ul className="space-y-3.5 text-sm divide-y divide-slate-100 dark:divide-slate-800">
                <li className="flex justify-between pt-3 first:pt-0">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Mon - Wed</span>
                  <span className="text-slate-600 dark:text-slate-400">9:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between pt-3">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Thursday</span>
                  <span className="text-slate-500 font-medium italic">Closed</span>
                </li>
                <li className="flex justify-between pt-3">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Friday</span>
                  <span className="text-slate-600 dark:text-slate-400">9:00 AM – 12:00 PM, 4:00 PM – 9:00 PM</span>
                </li>
                <li className="flex justify-between pt-3">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Saturday</span>
                  <span className="text-slate-600 dark:text-slate-400">9:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between pt-3">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Sunday</span>
                  <span className="text-slate-550 font-medium italic">Closed</span>
                </li>
              </ul>
            </div>

            {/* Channels & Location card */}
            <div className="glass-panel p-8 rounded-2xl shadow-sm border space-y-6">
              <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Visit Us</h3>
              <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed">
                We are located at <strong>B-17, Islamabad, Pakistan</strong>. Visit us to explore our hybrid solar inverters, custom solar structures, and CCTV security solutions. We look forward to assisting you with your energy and security needs!
              </p>
              
              <div className="space-y-4 pt-2 text-sm">
                <a
                  href="https://wa.me/923317383800"
                  target="_blank"
                  className="flex items-center gap-3 text-slate-750 hover:text-brand-blue dark:text-slate-300 dark:hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.356-2.908-6.992-2.91-5.443 0-9.87 4.417-9.873 9.864-.001 1.734.453 3.424 1.316 4.915L1.897 21.03l4.75-1.876z"/>
                    </svg>
                  </div>
                  <span>Chat on WhatsApp: 0331-7383800</span>
                </a>

                <a
                  href="mailto:smartsolar.security@gmail.com"
                  className="flex items-center gap-3 text-slate-750 hover:text-brand-blue dark:text-slate-300 dark:hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-blue-light dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue dark:text-brand-blue-light">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>smartsolar.security@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl shadow-sm border space-y-6">
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Request a Consultation</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                  Fill in your requirements below. Irfan Ahmad's engineering team will contact you.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 rounded-xl border border-emerald-200/50 text-sm font-semibold animate-fadeIn">
                  Thank you! Your quote request has been submitted successfully. We will call/WhatsApp you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-750 dark:text-slate-300">Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Mahmood"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-750 dark:text-slate-300">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0331-1234567"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-750 dark:text-slate-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. email@gmail.com"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-750 dark:text-slate-300">Service Required</label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    >
                      <option value="Hybrid Solar Setup">Hybrid Solar Setup</option>
                      <option value="CCTV Security Network">CCTV Security Network</option>
                      <option value="Battery Backup/Upgrade">Battery Backup/Upgrade</option>
                      <option value="Net Metering Consultation">Net Metering Consultation</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-750 dark:text-slate-300">Message / Requirements *</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your load requirement or number of cameras needed..."
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-accent py-4 text-xs font-bold uppercase tracking-widest text-center"
                  >
                    {loading ? "Submitting Request..." : "Submit Inquiry Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
