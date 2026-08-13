import { Link } from "react-router-dom";
import { services } from "../../data/services";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

export default function ServicesOverview() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="What We Do"
        title="Our Services"
        subtitle="From daily waste collection to hazardous waste compliance — we've got your surroundings covered."
        center
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.slug}>
            <img src={s.image} alt={s.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.description}</p>
              <Link
                to={`/services/${s.slug}`}
                className="inline-block mt-4 text-brand font-semibold hover:text-brand-dark"
              >
                Learn more →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
