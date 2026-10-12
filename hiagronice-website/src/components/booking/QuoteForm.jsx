import { useForm } from "../../hooks/useForm";
import { isRequired, isValidEmail, isValidKenyanPhone } from "../../utils/validators";
import { services } from "../../data/services";
import Button from "../common/Button";

const propertyTypes = ["Residential", "Commercial", "Industrial"];
const frequencies = ["One-time", "Weekly", "Bi-weekly", "Monthly"];

export default function QuoteForm({ defaultService = "" }) {
  const { values, handleChange, status, setStatus } = useForm({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    propertyType: "",
    frequency: "",
    details: "",
  });

  function validate() {
    return (
      isRequired(values.name) &&
      isValidEmail(values.email) &&
      isValidKenyanPhone(values.phone) &&
      isRequired(values.service) &&
      isRequired(values.propertyType)
    );
  }

  const WHATSAPP_NUMBER = "254726911914"; // 0726911914 in international format, no +/spaces

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const selectedService = services.find((s) => s.slug === values.service);

      const message =
        `*New Quote Request*%0A` +
        `Name: ${values.name}%0A` +
        `Email: ${values.email}%0A` +
        `Phone: ${values.phone}%0A` +
        `Service: ${selectedService ? selectedService.title : values.service}%0A` +
        `Property Type: ${values.propertyType}%0A` +
        `Frequency: ${values.frequency || "—"}%0A` +
        `Details: ${values.details || "—"}`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message.split("%0A").map(encodeURIComponent).join("%0A")}`, "_blank");

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand/10 border border-brand text-brand-dark rounded-lg p-6 text-center">
        Thanks! We've received your quote request and will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" value={values.name} onChange={handleChange} />
        <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone Number" name="phone" value={values.phone} onChange={handleChange} placeholder="07XXXXXXXX" />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            name="propertyType"
            value={values.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select property type</option>
            {propertyTypes.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Collection Frequency</label>
          <select
            name="frequency"
            value={values.frequency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select frequency</option>
            {frequencies.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tell us more about your needs</label>
        <textarea
          name="details"
          value={values.details}
          onChange={handleChange}
          rows={4}
          placeholder="E.g. estimated waste volume, number of bins, special waste types..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Please fill in all required fields correctly before submitting.</p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request Quote"}
      </Button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}