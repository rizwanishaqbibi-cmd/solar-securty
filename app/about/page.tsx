import Link from "next/link";
import Image from "next/image";

export default function About() {
  const milestones = [
    { year: "2010", title: "Company Founded", desc: "Irfan Ahmad established Smart Solar & Security Solutions in Islamabad to address rising power challenges with clean energy and secure homes." },
    { year: "2015", title: "50+ Projects Complete", desc: "Expanded operations across the Islamabad and Rawalpindi metro area, installing early grid-tied systems and safety security networks." },
    { year: "2020", title: "Next-Gen Storage Era", desc: "Integrated lithium battery walls and hybrid smart systems, becoming a key contractor for solar systems and IP surveillance systems." },
    { year: "2026", title: "100+ Systems Installed", desc: "Earning recognition for robust galvanized steel mount structures, official NEPRA net metering certifications, and premium service." }
  ];

  const focusAreas = [
    { title: "Solar Panels", label: "Solar Panels", value: "Tier-1 PV modules (Jinko, Longi, Canadian Solar) ensuring maximum efficiency." },
    { title: "Smart CCTVs", label: "CCTVs", value: "HD night-vision surveillance systems connected to central NVR and remote app streams." },
    { title: "Hybrid Inverters", label: "Hybrid Inverter", value: "Premium smart power managers (GoodWe, Huawei, Growatt) to route power seamlessly." },
    { title: "Batteries", label: "Batteries", value: "LiFePO4 wall mounts and tubular battery banks configured for deep cycle reliability." }
  ];

  const projectPhotos = [
    { src: "/images/field_1.jpg", alt: "Rooftop GI Solar Panel Array Installation", caption: "High-yield solar array setup in B-17, Islamabad" },
    { src: "/images/field_2.jpg", alt: "Ground-mount GI Framework System", caption: "Structural foundation GI system assembly" },
    { src: "/images/field_3.jpg", alt: "Active system test phase in Rawalpindi", caption: "Multi-angle solar structure optimization" },
    { src: "/images/field_4.jpg", alt: "High-grade electrical panel wiring", caption: "Neat DB distribution wiring validation" },
    { src: "/images/field_5.jpg", alt: "Lithium wall storage battery configuration", caption: "Smart lithium battery wall alignment check" }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_header_bg.jpg"
            alt="Smart Solar About Header Background"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark opacity-90 mix-blend-multiply z-10" />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            About Us
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-slate-200">
            SMART SOLAR & SECURITY SOLUTIONS
          </p>
          <div className="w-12 h-1 bg-brand-amber mx-auto rounded" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            Serving the Islamabad metro area since 2010. Providing robust, engineering-focused solar systems and surveillance platforms.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white leading-tight">
              Leading Energy Independence in Pakistan
            </h2>
            <div className="w-12 h-1 bg-brand-blue rounded" />
            <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
              Founded by <strong className="font-semibold text-brand-blue dark:text-brand-blue-light">Irfan Ahmad</strong> in 2010, Smart Solar & Security Solutions has been dedicated to delivering premium green energy and advanced surveillance setups. Based out of B-17, Islamabad, our company specializes in installing high-performance hybrid systems, deep-cycle battery banks, and specialized HD camera setups.
            </p>
            <p className="text-slate-600 dark:text-slate-355 text-sm sm:text-base leading-relaxed">
              We have completed over <strong>100 custom installations</strong>, earning customer trust through structural galvanized mounts, neat wiring panels, and reliable system parameter optimization.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider font-semibold">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Quick Metrics Panel */}
          <div className="glass-panel rounded-2xl p-8 space-y-6 border shadow-sm">
            <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Why Choose Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-brand-blue-light/35 dark:bg-brand-blue/10 rounded-xl space-y-1">
                <span className="block text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">16+</span>
                <span className="block text-xs font-semibold uppercase text-slate-500">Years Experience</span>
              </div>
              <div className="p-4 bg-brand-blue-light/35 dark:bg-brand-blue/10 rounded-xl space-y-1">
                <span className="block text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">100+</span>
                <span className="block text-xs font-semibold uppercase text-slate-500">Projects Complete</span>
              </div>
              <div className="p-4 bg-brand-blue-light/35 dark:bg-brand-blue/10 rounded-xl space-y-1">
                <span className="block text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">100%</span>
                <span className="block text-xs font-semibold uppercase text-slate-500">Galvanized GI</span>
              </div>
              <div className="p-4 bg-brand-blue-light/35 dark:bg-brand-blue/10 rounded-xl space-y-1">
                <span className="block text-3xl font-extrabold text-brand-blue dark:text-brand-blue-light">24/7</span>
                <span className="block text-xs font-semibold uppercase text-slate-500">Remote Feeds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-slate-150/40 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Our Engineering Focus</h2>
            <p className="text-slate-550 dark:text-slate-400 max-w-lg mx-auto text-xs sm:text-sm">
              We focus on premium hardware, clean engineering standards, and robust integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((item, index) => (
              <div key={index} className="glass-panel p-6 rounded-2xl shadow-sm space-y-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="inline-block px-3 py-1 rounded bg-brand-blue/10 text-brand-blue dark:text-brand-blue-light text-xs font-bold uppercase tracking-wider">
                  {item.label}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h2 className="font-serif font-bold text-3xl text-center text-slate-900 dark:text-white">Our Journey</h2>
        <div className="relative border-l-2 border-brand-blue/30 ml-4 md:ml-32 space-y-8">
          {milestones.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-blue border-4 border-slate-50 dark:border-slate-950" />
              <div className="md:absolute md:-left-36 md:top-1 font-serif font-extrabold text-lg text-brand-blue dark:text-brand-blue-light w-24">
                {item.year}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installations In Action Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Installations in Action</h2>
            <p className="text-slate-550 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
              Photographs showcasing actual mounting array systems, galvanized rails, and DB enclosures deployed in Islamabad sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectPhotos.map((photo, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 border"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="block text-[10px] font-bold text-brand-amber uppercase tracking-wider">
                    Project File #{index + 1}
                  </span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
