const reasons = [
  {
    title: "Reliable Scheduling",
    description: "Consistent collection days you can count on, no missed pickups.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trained Professionals",
    description: "Experienced, courteous crews equipped with the right gear for the job.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-3.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 10-3-6.65" />
      </svg>
    ),
  },
  {
    title: "Safe Waste Handling",
    description: "Proper disposal and documentation for hazardous and general waste alike.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Affordable Rates",
    description: "Straightforward pricing with no hidden fees, built for Kenyan homes and businesses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m9-8a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-dark py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Hiagronice</h2>
          <p className="mt-3 text-brand-light/80">
            The details that make us the waste and cleaning partner homes and businesses trust.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-lg">{reason.title}</h3>
              <p className="text-sm text-brand-light/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}