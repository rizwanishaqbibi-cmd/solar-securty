import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export default function Services() {
  const servicesList = [
    {
      title: "Hybrid Solar Systems",
      subtitle: "On-Grid & Hybrid Installations",
      description: "Custom-sized solar installations integrated with hybrid inverters to balance solar power, grid supply, and battery backup.",
      image: "/images/inverter_1.jpg",
      details: [
        "Professional load calculation and roof array mapping",
        "Top-tier hybrid inverters (GoodWe, Huawei, Growatt)",
        "Automated changeover with existing DB boards",
        "On-grid configurations with net metering option"
      ],
      whatsappMsg: "Hi, I am interested in your Hybrid Solar Systems installation.",
    },
    {
      title: "Energy Storage Solutions",
      subtitle: "Lithium & Tubular Batteries",
      description: "High-density backup storage designed to survive deep discharge cycles and power your property during outages.",
      image: "/images/battery_1.jpg",
      details: [
        "Premium Lithium-ion (LiFePO4) storage walls",
        "Heavy-duty deep cycle tubular battery banks",
        "Smart charging profiles on existing inverters",
        "Battery health monitoring and capacity audits"
      ],
      whatsappMsg: "Hi, I am interested in your Battery Energy Storage Solutions.",
    },
    {
      title: "Galvanized Solar Structures",
      subtitle: "Custom Fabricated Brackets",
      description: "Custom GI structures at optimal 33° tilt angle for maximum annual generation, engineered for wind loads.",
      image: "/images/solar_structure_1.jpg",
      details: [
        "Rust-proof hot-dip galvanized iron (GI) sections",
        "High-rise structures to keep roof space usable",
        "Wind load engineering compliance",
        "Flush mounts for sloped roof variants"
      ],
      whatsappMsg: "Hi, I am interested in your Solar Mounting Structures.",
    },
    {
      title: "Smart CCTV Networks",
      subtitle: "HD Video Surveillance",
      description: "Professional camera systems to monitor, record, and secure your boundary with backup-powered recording.",
      image: "/images/cctv_1.jpg",
      details: [
        "IP cameras with color night vision (1080p to 4K)",
        "NVR recording with secure multi-TB storage",
        "Mobile App for real-time remote surveillance",
        "Smart intrusion alarms and motion alerts"
      ],
      whatsappMsg: "Hi, I am interested in your CCTV Camera Security Systems.",
    },
    {
      title: "Net Metering Audits",
      subtitle: "Green Meter Approval Service",
      description: "Complete assistance to register your system for net metering. Sell excess electricity to NEPRA/IESCO.",
      image: "/images/inverter_2.jpg",
      details: [
        "Net metering eligibility assessment",
        "IESCO submission and green meter coordination",
        "Certified engineer test report compilation",
        "NEPRA licensing and activation oversight"
      ],
      whatsappMsg: "Hi, I am interested in your Net Metering Consultation service.",
    },
    {
      title: "Maintenance & Support",
      subtitle: "System Optimization",
      description: "Preventative checks and responsive diagnostics to keep your systems running at 100% capacity.",
      image: "/images/battery_2.jpg",
      details: [
        "Solar array cleaning and isolation testing",
        "Inverter optimization and firmware updates",
        "CCTV lens correction and NVR cleanup",
        "Emergency wiring repairs and grounding checks"
      ],
      whatsappMsg: "Hi, I am interested in your Maintenance and Troubleshooting service.",
    }
  ];

  return (
    <div className="flex flex-col w-full">

      {/* Page Header */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.jpg"
            alt="Smart Solar Services Header"
            className="object-cover w-full h-full opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue-deep opacity-92 z-10" />
        </div>

        <div className="relative z-20 max-w-3xl mx-auto px-4 space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-brand-amber font-semibold text-xs tracking-widest uppercase border border-white/10">
            Our Solutions
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            Our Services
          </h1>
          <div className="section-divider mx-auto" />
          <p className="max-w-lg mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            End-to-end solar energy installations and high-tech security camera networks for your home and business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="glass-panel rounded-2xl overflow-hidden card-lift h-full flex flex-col">
                <div className="relative h-56 w-full img-zoom">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-7 space-y-5 flex-grow">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[10px] text-brand-amber font-bold tracking-wider uppercase mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.details.map((detail, dIndex) => (
                        <li key={dIndex} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                          <svg className="w-4 h-4 text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`https://wa.me/923317383800?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    className="w-full btn-primary py-3.5 text-xs uppercase tracking-wider font-semibold text-center block"
                  >
                    Inquire via WhatsApp
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue-deep" />
        <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">Need a customized solution?</h3>
          <p className="text-slate-200 text-sm max-w-lg mx-auto">
            We engineer packages combining hybrid solar with custom security networks. Tell us your load and space specs.
          </p>
          <Link href="/contact" className="btn-accent px-10 py-4 text-xs font-bold uppercase tracking-widest">
            Request Free Consultation
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
