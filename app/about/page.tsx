import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";

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
    <div className="flex flex-col w-full">

      {/* Page Header */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_header_bg.jpg"
            alt="Smart Solar About Header Background"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue-deep opacity-92 z-10" />
        </div>

        <div className="relative z-20 max-w-3xl mx-auto px-4 space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-brand-amber font-semibold text-xs tracking-widest uppercase border border-white/10">
            Our Story
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            About Us
          </h1>
          <div className="section-divider mx-auto" />
          <p className="max-w-lg mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            Serving Islamabad since 2010. Engineering-focused solar systems and surveillance platforms.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                Leading Energy Independence
              </h2>
              <div className="section-divider" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded by <strong className="font-semibold text-brand-blue dark:text-blue-400">Irfan Ahmad</strong> in 2010, Smart Solar & Security Solutions has delivered premium green energy and advanced surveillance setups. Based in B-17, Islamabad, we specialize in high-performance hybrid systems, deep-cycle battery banks, and HD camera setups.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Over <strong>100 custom installations</strong> completed, earning trust through structural galvanized mounts, clean wiring panels, and reliable system optimization.
            </p>
            <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider font-semibold">
              Get in Touch
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel rounded-2xl p-8 space-y-6">
              <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Why Choose Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "16+", label: "Years Experience" },
                  { val: "100+", label: "Projects Done" },
                  { val: "100%", label: "Galvanized GI" },
                  { val: "24/7", label: "Remote Feeds" },
                ].map((stat, i) => (
                  <div key={i} className="p-5 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-xl space-y-1 text-center">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-blue-400">{stat.val}</span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-surface dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Our Engineering Focus</h2>
            <div className="section-divider mx-auto" />
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
              Premium hardware, clean engineering standards, and robust integration.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="glass-panel p-7 rounded-2xl card-lift h-full space-y-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-brand-blue/8 text-brand-blue dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <ScrollReveal className="text-center space-y-4">
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Our Journey</h2>
          <div className="section-divider mx-auto" />
        </ScrollReveal>

        <div className="relative border-l-2 border-brand-blue/20 ml-4 md:ml-32 space-y-10">
          {milestones.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-blue border-4 border-background" />
                <div className="md:absolute md:-left-36 md:top-1 font-serif font-extrabold text-lg text-brand-blue dark:text-blue-400 w-24">
                  {item.year}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-surface dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Installations in Action</h2>
            <div className="section-divider mx-auto" />
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
              Real mounting systems, galvanized rails, and DB enclosures in Islamabad.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectPhotos.map((photo, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="glass-panel rounded-2xl overflow-hidden card-lift h-full">
                  <div className="relative h-60 w-full img-zoom">
                    <img src={photo.src} alt={photo.alt} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-5 space-y-1">
                    <span className="block text-[10px] font-bold text-brand-amber uppercase tracking-wider">
                      Project #{index + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
