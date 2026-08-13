export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "text-center mb-10" : "mb-10"}>
      {eyebrow && (
        <span className="text-brand font-semibold uppercase tracking-wide text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
