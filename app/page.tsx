import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";

export default function Home() {
  const services = [
    {
      title: "Hybrid Solar Systems",
      description: "Grid-tied inverters with intelligent backup power management for uninterrupted energy supply.",
      image: "/images/inverter_1.jpg",
      href: "/services",
    },
    {
      title: "Battery Storage",
      description: "Next-gen LiFePO4 lithium walls and deep-cycle tubular battery banks for 24/7 power.",
      image: "/images/battery_1.jpg",
      href: "/services",
    },
    {
      title: "Solar Panels & Structures",
      description: "Premium PV modules on hot-dip galvanized GI structures built for Islamabad's climate.",
      image: "/images/solar_structure_1.jpg",
      href: "/services",
    },
    {
      title: "CCTV Security",
      description: "Smart 4K cameras with night vision, NVR recording, and remote mobile streaming.",
      image: "/images/cctv_1.jpg",
      href: "/services",
    },
  ];

  const projects = [
    {
      title: "10kW Rooftop Solar Array",
      location: "B-17, Islamabad",
      desc: "Elevated hot-dip galvanized GI structure with high-yield Longi panels, raised 8 feet to keep the terrace fully usable.",
      image: "/images/field_1.jpg",
      badge: "Featured Project",
    },
    {
      title: "Heavy-Duty GI Framework",
      location: "F-8 / G-11, Islamabad",
      desc: "Custom-fabricated brackets angled at 33° for maximum year-round irradiance, engineered for high wind loads.",
      image: "/images/field_3.jpg",
      badge: "Engineering Showcase",
    },
  ];

  const brands = ["LONGI", "GOODWE", "HUAWEI", "HIKVISION", "CANADIAN SOLAR"];

  return (
    <div className="flex flex-col w-full">

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Single powerful background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_daylight.jpg"
            alt="Solar panel array in Islamabad at sunrise"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-8 py-20">
          <div className="space-y-5">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-brand-amber font-semibold text-xs tracking-widest uppercase border border-white/10">
              ☀️ Sustainable Power & Complete Protection
            </span>

            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] gradient-text">
              Smart Solar &<br className="hidden sm:block" /> Security Solutions
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-slate-300">
              A Full-Service Experience
            </p>
          </div>

          <p className="max-w-lg mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Tailored solar arrays, hybrid inverters, battery storage, and HD CCTV systems for homes and businesses across Islamabad & Rawalpindi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link
              href="https://wa.me/923317383800?text=I%20would%20like%20to%20book%20a%20free%20site%20visit"
              target="_blank"
              className="btn-accent w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-wider font-bold animate-shimmer"
            >
              Book Free Site Visit
            </Link>
            <Link
              href="/services"
              className="btn-outline-white w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-wider font-bold"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="relative z-20 -mt-8 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-panel rounded-2xl shadow-lg py-8 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AnimatedCounter end={16} suffix="+" label="Years of Trust" />
              <AnimatedCounter end={100} suffix="+" label="Installations" />
              <AnimatedCounter end={100} suffix="%" label="Galvanized Steel" />
              <AnimatedCounter end={24} suffix="/7" label="Power Backup" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT / VALUE PROP ═══════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Text */}
            <ScrollReveal className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-brand-blue dark:text-blue-400 uppercase tracking-widest">
                  Why Choose Us
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                  Engineering Excellence for<br className="hidden sm:block" /> Every Home & Business
                </h2>
                <div className="section-divider" />
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                At <strong className="font-semibold text-brand-blue dark:text-blue-400">Smart Solar & Security Solutions</strong>, we deliver reliable solar energy and advanced security systems. From professional site analysis and custom load engineering to NEPRA net metering coordination — we handle everything.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Every installation uses premium hardware: tier-1 solar panels, hot-dip galvanized structures, smart hybrid inverters, and HD surveillance cameras — all backed by responsive after-sales support.
              </p>
              <div className="pt-3">
                <Link href="/about" className="btn-secondary text-xs uppercase tracking-wider font-semibold">
                  Our Full Story &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal className="lg:col-span-5" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg img-zoom group">
                <img
                  src="/images/field_5.jpg"
                  alt="Team checking battery bank configurations"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-7">
                  <span className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">Active Verification</span>
                  <h4 className="text-white font-serif font-bold text-lg mt-1">Systems Optimization, Islamabad</h4>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════ CORE SERVICES ═══════ */}
      <section className="py-24 bg-surface dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold text-brand-blue dark:text-blue-400 uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Our Core Expertise
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Complete hybrid setups using premium hardware and compliance standards.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Link href={item.href} className="block h-full">
                  <div className="glass-panel rounded-2xl overflow-hidden card-lift h-full flex flex-col">
                    <div className="relative h-52 w-full img-zoom">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 space-y-2 flex-grow">
                      <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-6 pb-5">
                      <span className="text-xs font-semibold text-brand-blue dark:text-blue-400 uppercase tracking-wider inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Learn More
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center pt-4">
            <Link href="/services" className="btn-primary px-10 py-4 text-xs uppercase tracking-widest font-bold">
              View All Services &rarr;
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══════ FEATURED PROJECTS ═══════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold text-brand-blue dark:text-blue-400 uppercase tracking-widest">
              Real Systems in Action
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Recent Installations
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Actual solar arrays and galvanized steel structures deployed across Islamabad.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="glass-panel rounded-2xl overflow-hidden card-lift h-full flex flex-col">
                  <div className="relative h-72 w-full img-zoom">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4 rounded-lg bg-white/95 dark:bg-slate-900/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-blue dark:text-blue-400 shadow-sm backdrop-blur-sm">
                      {project.badge}
                    </div>
                  </div>
                  <div className="p-7 space-y-3 flex-grow">
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center">
            <Link href="/testimonials" className="btn-secondary px-10 py-4 text-sm font-bold">
              View All Projects & Testimonials &rarr;
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══════ TRUSTED BRANDS ═══════ */}
      <section className="py-16 bg-surface dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <ScrollReveal>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
              Premium Equipment We Trust
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="font-serif font-bold text-xl sm:text-2xl text-slate-400 dark:text-slate-500 tracking-tight opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue-deep" />
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/field_2.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
            Ready to Power Your Property?
          </h2>
          <p className="max-w-lg mx-auto text-slate-200 text-sm sm:text-base leading-relaxed">
            Contact Irfan Ahmad today for a custom consultation. We serve residential, commercial, and agricultural projects in Islamabad & Rawalpindi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a href="tel:03317383800" className="btn-accent w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider">
              Call 0331-738-3800
            </a>
            <Link href="/contact" className="btn-outline-white w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider">
              Request a Callback
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
