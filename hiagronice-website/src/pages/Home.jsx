import Hero from "../components/home/Hero";
import WhyPlacementMatters from "../components/home/WhyPlacementMatters";
import ServicesOverview from "../components/home/ServicesOverview";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Button from "../components/common/Button";
import FloatingWhatsApp from "../components/common/FloatingWhatsApp";
import AreasWeCover from "../components/home/AreasWeCover";
import OurCommitment from "../components/home/OurCommitment";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <FloatingWhatsApp />
      <Hero />
      <WhyPlacementMatters />
      <ServicesOverview />
      <AreasWeCover />
      <OurCommitment />
      <Testimonials />
      <WhyChooseUs />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2">
          <img
            src="/front-truck.jpg"
            alt="Hiagronice collection truck front view"
            className="w-full h-full object-contain"
          />
          <img
            src="/sidetruck.jpg"
            alt="Hiagronice collection truck side view"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="text-gray-200 mt-3">
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