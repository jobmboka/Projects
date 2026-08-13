import { useSearchParams } from "react-router-dom";
import QuoteForm from "../components/booking/QuoteForm";
import SectionHeading from "../components/common/SectionHeading";

export default function GetQuote() {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading
        eyebrow="Free & No Obligation"
        title="Get a Quote"
        subtitle="Share a few details about your property and we'll send you a tailored quote."
      />
      <QuoteForm defaultService={service} />
    </div>
  );
}
