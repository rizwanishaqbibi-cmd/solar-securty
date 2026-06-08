import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      title: "Hybrid Solar Inverters",
      description: "Intelligent grid-tied & backup power management. Seamlessly routing green power to your appliances.",
      image: "/images/inverter_1.jpg",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Batteries & Storage",
      description: "Next-gen Lithium iron phosphate (LiFePO4) storage walls and tubular battery backups for 24/7 power.",
      image: "/images/battery_1.jpg",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Solar Panels & Structures",
      description: "Premium solar PV modules mounted on heavy-duty, hot-dip galvanized structures designed for Islamabad's weather.",
      image: "/images/solar_structure_1.jpg",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "CCTV Security Systems",
      description: "Smart 4K cameras with night vision and remote mobile streaming. Complete perimeter security and peace of mind.",
      image: "/images/cctv_1.jpg",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  const showcaseProjects = [
    {
      title: "10kW Hybrid Rooftop Array",
      location: "Sector B-17, Islamabad",
      desc: "An elevated hot-dip galvanized GI structure featuring high-yield Longi solar panels. Raised 8 feet off the roof to ensure the terrace space remains fully usable for the family.",
      image: "/images/field_1.jpg",
      badge: "Featured Solar Array"
    },
    {
      title: "Heavy-Duty Structural Framework",
      location: "F-8 / G-11 Sectors, Islamabad",
      desc: "Custom-fabricated structural GI mounting brackets angled at exactly 33 degrees to capture maximum year-round solar irradiance while engineered to withstand high wind velocities.",
      image: "/images/field_3.jpg",
      badge: "GI Mount Installation"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-slate-955 overflow-hidden py-16">
        
        {/* Split-screen background showing Twilight (Security/Night) and Daylight (Solar/Generation) */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          
          {/* Left Side: Twilight & CCTV Night View */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            <img
              src="/images/about_header_bg.jpg"
              alt="Smart Solar & Security Solutions twilight/night operation display"
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute inset-0 bg-slate-950/20" />
            <div className="absolute top-4 left-4 z-10 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-bold text-slate-300 uppercase tracking-widest border border-white/10 shadow-sm">
              🌙 Night Protection & Backup
            </div>
          </div>

          {/* Right Side: Daylight Solar Array Generation View */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden">
            <img
              src="/images/hero_daylight.jpg"
              alt="Smart Solar & Security Solutions daylight generation display"
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute inset-0 bg-slate-950/15" />
            <div className="absolute top-4 right-4 z-10 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-bold text-brand-amber uppercase tracking-widest border border-white/10 shadow-sm">
              ☀️ Day Generation & Charging
            </div>
          </div>

          {/* Subtle bottom fade to blend with the page */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
        </div>

        {/* Hero Content wrapped in a narrower, highly transparent premium Glassmorphism Container */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 w-full">
          <div className="backdrop-blur-lg bg-slate-950/45 border border-white/20 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl space-y-6 max-w-2xl mx-auto text-center">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-amber/15 text-brand-amber font-semibold text-xs tracking-widest uppercase border border-brand-amber/30 animate-pulse">
                Sustainable Power & Complete Protection
              </span>
              <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
                SMART SOLAR & <br className="sm:hidden" /> SECURITY SOLUTIONS
              </h1>
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-slate-200">
                A Full Service Experience
              </p>
            </div>

            <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              We provide tailored solar panel arrays, backup storage units, smart hybrid inverters, and high-definition CCTV security camera systems for homes and businesses in Islamabad and Rawalpindi.
            </p>

            {/* Primary Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link
                href="https://wa.me/923317383800?text=I%20would%20like%20to%20book%20a%20free%20site%20visit"
                target="_blank"
                className="btn-accent w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-bold animate-shimmer"
              >
                Book Free Site Visit
              </Link>
              <Link
                href="https://wa.me/923317383800"
                target="_blank"
                className="btn-primary w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.356-2.908-6.992-2.91-5.443 0-9.87 4.417-9.873 9.864-.001 1.734.453 3.424 1.316 4.915L1.897 21.03l4.75-1.876z"/>
                </svg>
                WhatsApp Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Metrics Bar */}
      <section className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">16+</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Years of Trust</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">100+</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Successful Installs</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">100%</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Galvanized Steel</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">NEPRA</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Net Metering Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Section (Split Grid with Real Solar Image) */}
      <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                A Full Service Experience
              </h2>
              <div className="w-16 h-1 bg-brand-blue rounded" />
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                At <strong className="font-semibold text-brand-blue dark:text-brand-blue-light">Smart Solar & Security Solutions</strong>, our mission is to empower homes and businesses with reliable solar energy and advanced security systems. We provide tailored solutions for every property, combining high-performance hybrid solar inverters, custom solar structures, and CCTV security systems to meet your specific energy and safety needs.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                We believe that every home and business deserves dependable power and complete protection. That’s why we offer a full-service experience, including professional site analysis, custom load engineering, clean physical installation, NEPRA net metering coordination, and ongoing support.
              </p>
              <div className="pt-2">
                <Link href="/about" className="btn-secondary text-xs uppercase tracking-wider font-semibold">
                  Read Our Full Story &rarr;
                </Link>
              </div>
            </div>

            {/* Visual Block showing real solar array panel installation (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border bg-slate-100 dark:bg-slate-900 group">
                <img
                  src="/images/field_5.jpg"
                  alt="Irfan Ahmad team checking battery bank configurations"
                  className="w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">Active Verification</span>
                  <h4 className="text-white font-serif font-bold text-base mt-1">Smart Systems Optimization in Islamabad</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROMINENT SOLAR PANELS SHOWCASE SECTION */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-brand-blue dark:text-brand-blue-light uppercase tracking-widest">Real Systems in Action</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Recent Solar Installations
            </h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto rounded" />
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Take a look at actual solar panels, galvanized steel raised structures, and neat parameter wiring arrays installed across Islamabad sectors by Irfan Ahmad's engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseProjects.map((project, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border group hover:scale-[1.01]"
              >
                <div>
                  <div className="relative h-72 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 rounded-lg bg-white/95 dark:bg-slate-900/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light shadow-sm">
                      {project.badge}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500">
                      📍 {project.location}
                    </span>
                    <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary CTA to Gallery */}
          <div className="text-center">
            <Link href="/testimonials" className="btn-secondary px-8 py-3 text-sm font-bold">
              View Testimonials & Complete Project Gallery &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Core Highlights Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold text-brand-blue dark:text-brand-blue-light uppercase tracking-widest">Our Capabilities</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Our Core Expertise
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
              We design and configure complete hybrid setups using high-quality hardware and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/services" className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold">
              Explore Detailed Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Brands & Quality Standards Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif font-bold text-lg text-slate-400 uppercase tracking-widest">Premium Equipment We Use</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 dark:opacity-40">
            <span className="font-serif font-bold text-xl sm:text-2xl text-slate-600 dark:text-slate-300 tracking-tight">LONGI SOLAR</span>
            <span className="font-serif font-bold text-xl sm:text-2xl text-slate-600 dark:text-slate-300 tracking-tight">GOODWE</span>
            <span className="font-serif font-bold text-xl sm:text-2xl text-slate-600 dark:text-slate-300 tracking-tight">HUAWEI</span>
            <span className="font-serif font-bold text-xl sm:text-2xl text-slate-600 dark:text-slate-300 tracking-tight">HIKVISION</span>
            <span className="font-serif font-bold text-xl sm:text-2xl text-slate-600 dark:text-slate-300 tracking-tight">CANADIAN SOLAR</span>
          </div>
        </div>
      </section>

      {/* 6. Mini Contact CTA section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif font-bold text-3xl">Ready to secure your property?</h2>
          <p className="max-w-xl mx-auto text-slate-200 text-sm sm:text-base">
            Contact Irfan Ahmad today for a custom consultation. We serve residential, commercial, and agricultural projects in Islamabad and Rawalpindi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a href="tel:03317383800" className="btn-accent w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
              Call 0331-7383800
            </a>
            <Link href="/contact" className="w-full sm:w-auto px-6 py-3.5 border border-white/40 rounded-xl hover:bg-white/10 hover:border-white transition-all text-xs font-bold uppercase tracking-wider text-center">
              Request a Call Back
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
