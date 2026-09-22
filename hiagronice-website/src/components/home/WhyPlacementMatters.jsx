export default function WhyPlacementMatters() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Hiagronice Services
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight mb-10">
          The Placement of Your Trash Can Matters
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left: icon + description */}
          <div className="flex-1 space-y-6">
            <img
              src="/trashcan.jpg"
              alt="Trash can mascot"
              className="w-48 h-48 object-contain"
            />
            <div className="space-y-6 text-gray-800 text-lg max-w-xl">
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

          {/* Right: mobile-shaped video, pinned far right */}
          <div className="relative w-full max-w-[300px] aspect-[9/16] mx-auto md:mx-0 md:ml-auto shrink-0 rounded-3xl overflow-hidden shadow-lg bg-black">
            <video
              src="/placement.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-10">
              <p className="p-4 text-white text-sm leading-snug">
                Watch how our trucks safely collect from correctly placed bins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}