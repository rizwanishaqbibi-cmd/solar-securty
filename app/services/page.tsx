import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      title: "Hybrid Solar Systems",
      subtitle: "On-Grid & Hybrid Installations",
      description: "Custom-sized solar installations integrated with hybrid inverters to balance solar power, grid supply, and battery backup. Ideal for reducing your electric bill to near zero while keeping critical appliances powered during blackouts.",
      image: "/images/inverter_1.jpg",
      details: [
        "Professional load calculation and roof array mapping",
        "Top-tier hybrid inverters (GoodWe, Huawei, Growatt, Solis)",
        "Automated changeover integration with existing DB boards",
        "On-grid configurations with net metering option"
      ],
      whatsappMsg: "Hi, I am interested in your Hybrid Solar Systems installation.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Energy Storage Solutions",
      subtitle: "Lithium & Tubular Batteries",
      description: "High-density backup storage configurations designed to survive deep discharge cycles and power your property during night-time hours and utility failures.",
      image: "/images/battery_1.jpg",
      details: [
        "Premium next-gen Lithium-ion (LiFePO4) storage walls",
        "Heavy-duty deep cycle tubular battery banks",
        "Smart charging profiles configuration on existing inverters",
        "Battery health monitoring and capacity audits"
      ],
      whatsappMsg: "Hi, I am interested in your Battery Energy Storage Solutions.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Galvanized Solar Structures",
      subtitle: "Custom Fabricated Brackets",
      description: "Custom GI structures designed to place solar modules at the optimal tilt angle (approx. 33 degrees for Islamabad) to ensure maximum annual generation and withstand raw wind velocities.",
      image: "/images/solar_structure_1.jpg",
      details: [
        "Rust-proof hot-dip galvanized iron (GI) sections",
        "Custom high-rise structures to keep roof space usable",
        "Strict compliance with wind load engineering standards",
        "Flush mounts for sloped tile/tin roof variants"
      ],
      whatsappMsg: "Hi, I am interested in your Customized Solar Mounting Structures.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Smart CCTV Networks",
      subtitle: "HD Video Surveillance",
      description: "Professional camera systems to monitor, record, and secure your residential or commercial boundary. Integrated with backup power to ensure non-stop recording.",
      image: "/images/cctv_1.jpg",
      details: [
        "IP cameras with color night vision (1080p to 4K Ultra-HD)",
        "NVR recording stations with secure multi-TB storage",
        "Mobile App configuration for real-time remote surveillance",
        "Smart intrusion alarms and motion alert notifications"
      ],
      whatsappMsg: "Hi, I am interested in your CCTV Camera Security Systems.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Net Metering Audits",
      subtitle: "Green Meter Approval Service",
      description: "Complete agency assistance to register your system for net metering. Sell your excess generated electricity to NEPRA / IESCO and lower your bill to zero.",
      image: "/images/inverter_2.jpg",
      details: [
        "Detailed net metering eligibility assessment and documentation",
        "IESCO submission, green meter purchasing and installation coordination",
        "Standard-compliant test report compilation by certified engineer",
        "Final NEPRA licensing and activation oversight"
      ],
      whatsappMsg: "Hi, I am interested in your Net Metering Consultation service.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Maintenance & Troubleshooting",
      subtitle: "System Optimization",
      description: "Preventative checks and responsive diagnostics to ensure your active security feeds and solar production lines run at 100% capacity.",
      image: "/images/battery_2.jpg",
      details: [
        "Solar array cleaning and electrical isolation testing",
        "Inverter parameter optimization and firmware updates",
        "CCTV camera lens focus correction and NVR storage cleanup",
        "Emergency wiring repairs and safety grounding check"
      ],
      whatsappMsg: "Hi, I am interested in your Solar/CCTV Maintenance and Troubleshooting service.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.jpg"
            alt="Smart Solar Services Header Background"
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark opacity-90 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            Our Services
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-slate-200">
            List of Services
          </p>
          <div className="w-12 h-1 bg-brand-amber mx-auto rounded" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            Professional, end-to-end solar energy installations and high-tech security camera networks designed to protect your home and secure your financial independence.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[10px] text-brand-amber font-bold tracking-wider uppercase mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-355 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, dIndex) => (
                        <li key={dIndex} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                          <svg className="w-4 h-4 text-brand-blue dark:text-brand-blue-light shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`https://wa.me/923317383800?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  className="w-full btn-primary py-3 text-xs uppercase tracking-wider font-semibold text-center block"
                >
                  Inquire via WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust CTA section */}
      <section className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-850 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Need a customized, hybrid solution?</h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm max-w-xl mx-auto">
            We can engineer packages combining hybrid solar panels with a customized security perimeter network. Tell us your load and space specifications.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
