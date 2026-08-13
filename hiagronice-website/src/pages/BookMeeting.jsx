import { useSearchParams } from "react-router-dom";
import BookingForm from "../components/booking/BookingForm";
import SectionHeading from "../components/common/SectionHeading";

export default function BookMeeting() {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading
        eyebrow="Schedule With Us"
        title="Book a Collection"
        subtitle="Tell us what you need and when — we'll confirm your slot shortly."
      />
      <BookingForm defaultService={service} />
    </div>
  );
}
