import { services } from "../data/services";
import ServicesOverview from "../components/home/ServicesOverview";
import SectionHeading from "../components/common/SectionHeading";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <SectionHeading
        eyebrow="Hiagronice Garbage Services"
        title="All Our Services"
        subtitle="Tailored waste and property-care solutions for residential, commercial, and industrial clients."
      />
      <ServicesOverview />
    </div>
  );
}
