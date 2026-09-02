const reasons = [
  {
    title: "Reliable Scheduling",
    description: "Consistent collection days you can count on, no missed pickups.",
    icon: <img src="/alarm-clock.png" alt="Reliable Scheduling" className="w-14 h-14" />,
  },
  {
    title: "Trained Professionals",
    description: "Experienced, courteous crews equipped with the right gear for the job.",
    icon: <img src="/professional.png" alt="Trained Professionals" className="w-14 h-14" />,
  },
  {
    title: "Safe Waste Handling",
    description: "Proper disposal and documentation for hazardous and general waste alike.",
    icon: <img src="/trash.png" alt="Safe Waste Handling" className="w-14 h-14" />,
  },
  {
    title: "Affordable Rates",
    description: "Straightforward pricing with no hidden fees, built for Kenyan homes and businesses.",
    icon: <img src="/affordablerates.png" alt="Affordable Rates" className="w-14 h-14" />,
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
              {reason.icon}
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