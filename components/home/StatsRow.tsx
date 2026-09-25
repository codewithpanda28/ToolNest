const STATS = [
  { value: "500+", label: "Businesses Listed" },
  { value: "1,200+", label: "Tools Available" },
  { value: "50K+", label: "Monthly Visitors" },
];

export function StatsRow() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}