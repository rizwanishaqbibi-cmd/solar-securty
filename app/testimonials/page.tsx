export default function Testimonials() {
  const reviews = [
    {
      author: "Tariq Mahmood",
      location: "Sector F-8, Islamabad",
      text: "We installed a 10kW hybrid solar system with Irfan Ahmad's team. The installation is exceptionally neat, and we now have zero power cuts. Our electricity bills have dropped by almost 80%. Highly recommended!",
      product: "10kW Hybrid Solar Setup",
      rating: 5,
      avatarInitials: "TM"
    },
    {
      author: "Ayesha Khan",
      location: "Operations Manager, I-9 Industrial Area",
      text: "The CCTV surveillance system they designed for our warehouse works flawlessly. The remote mobile view is very responsive, and the battery backup keeps the cameras active even during power outages. Excellent work!",
      product: "16-Camera HD CCTV Network + Backup",
      rating: 5,
      avatarInitials: "AK"
    },
    {
      author: "Dr. Faisal Rahman",
      location: "Sector B-17, Islamabad",
      text: "Outstanding after-sales service. When my hybrid inverter experienced a grid voltage error, their technician came within two hours to check the wiring and optimize the settings. Very professional customer support.",
      product: "Inverter Maintenance & Battery Upgrade",
      rating: 5,
      avatarInitials: "FR"
    }
  ];

  const galleryItems = [
    {
      title: "Residential Solar Array",
      category: "Solar Panels",
      details: "10kW hybrid solar system featuring Longi solar panels on a raised GI structure in B-17, Islamabad.",
      image: "/images/field_1.jpg"
    },
    {
      title: "Smart Inverter & Storage",
      category: "Hybrid Inverters",
      details: "Clean wall mount installation of a GoodWe hybrid inverter paired with matching lithium energy storage.",
      image: "/images/inverter_1.jpg"
    },
    {
      title: "Commercial Security Surveillance",
      category: "CCTV Installation",
      details: "High-definition IP camera installation at a commercial warehouse in I-9, connected to backup batteries.",
      image: "/images/cctv_2.jpg"
    },
    {
      title: "Raised Mount Engineering",
      category: "Structures",
      details: "Heavy-duty hot-dip galvanized frame raised 8 feet off the roof to preserve usable terrace space.",
      image: "/images/solar_structure_1.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/field_2.jpg"
            alt="Smart Solar Testimonials Header Background"
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark opacity-90 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl tracking-tight text-white leading-tight">
            Testimonials & Gallery
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-slate-200">
            Reviews from Our Valued Clients
          </p>
          <div className="w-12 h-1 bg-brand-amber mx-auto rounded" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            See what property owners and business managers across Islamabad say about our custom solar arrays and security solutions.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Customer Reviews</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-xs sm:text-sm">
            Read comments from homeowners and businesses who transitioned to reliable solar backup and CCTV surveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border relative group hover:scale-[1.01]"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-6xl text-slate-200 dark:text-slate-800 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="space-y-6 z-10">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, sIndex) => (
                    <svg key={sIndex} className="w-5 h-5 text-brand-amber fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.author}</h4>
                  <p className="text-xs text-slate-500">{item.location}</p>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-brand-blue dark:text-brand-blue-light uppercase tracking-wider">
                    {item.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Project Showcases</h2>
            <p className="text-slate-550 dark:text-slate-400 max-w-md mx-auto text-xs sm:text-sm">
              Photographs and details of clean structural arrays and active security hubs in B-17, F-8, and I-9 Islamabad sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border hover:scale-[1.01]"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded bg-brand-blue/15 text-brand-blue dark:text-brand-blue-light text-xs font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-605 dark:text-slate-400 leading-relaxed font-light">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
