import { useForm } from "../../hooks/useForm";
import { isRequired, isValidEmail, isValidKenyanPhone } from "../../utils/validators";
import { services } from "../../data/services";
import Button from "../common/Button";

export default function BookingForm({ defaultService = "" }) {
  const { values, handleChange, status, setStatus } = useForm({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    date: "",
    address: "",
    notes: "",
  });

  function validate() {
    return (
      isRequired(values.name) &&
      isValidEmail(values.email) &&
      isValidKenyanPhone(values.phone) &&
      isRequired(values.service) &&
      isRequired(values.date) &&
      isRequired(values.address)
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      // TODO: replace with your EmailJS / Formspree / backend endpoint call
      // await sendBooking(values);
      await new Promise((res) => setTimeout(res, 800)); // placeholder
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand/10 border border-brand text-brand-dark rounded-lg p-6 text-center">
        Thanks! Your booking request has been received — we'll confirm shortly.
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
        <Field label="Preferred Date" name="date" type="date" value={values.date} onChange={handleChange} />
        <Field label="Collection Address" name="address" value={values.address} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea
          name="notes"
          value={values.notes}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Please fill in all fields correctly before submitting.</p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Book Collection"}
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
