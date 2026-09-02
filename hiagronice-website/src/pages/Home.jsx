import Hero from "../components/home/Hero";
import WhyPlacementMatters from "../components/home/WhyPlacementMatters";
import ServicesOverview from "../components/home/ServicesOverview";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyPlacementMatters />
      <ServicesOverview />
      <Testimonials />
      <WhyChooseUs />
      <section className="bg-brand/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900">Ready to get started?</h2>
          <p className="text-gray-600 mt-3">
            Request a quote for your property or book your next collection in minutes.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/quote"><Button variant="outline">Get a Quote</Button></Link>
            <Link to="/book"><Button>Book a Collection</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}