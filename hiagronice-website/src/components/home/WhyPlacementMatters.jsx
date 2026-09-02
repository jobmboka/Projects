
export default function WhyPlacementMatters() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Hiagronice Services
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight mb-10">
          The Placement of Your Trash Can Matters
        </h2>
        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
          <div className="flex justify-center md:justify-start">
            <img src="/trashcan.jpg" alt="Trash can mascot" className="w-48 h-48 object-contain" />
          </div>
          <div className="space-y-6 text-gray-800 text-lg">
            <p>
              Placing your bin correctly helps make sure your household
              garbage, recyclables, or yard waste actually get collected on
              schedule.
            </p>
            <p>
              Most of our collection trucks use a mechanical arm that lifts
              and empties bins automatically. This keeps pickups fast and
              efficient, and it helps prevent accidents during collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}