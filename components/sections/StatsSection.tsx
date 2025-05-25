import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Fishing Spots Mapped" },
    { number: "1K+", label: "Tourism Visitors" },
    { number: "50+", label: "Partner Accommodations" },
    { number: "50+", label: "Fish Species Documented" },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden px-8">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pekan Fishing Tourism by the Numbers
          </h2>
          <p className="text-blue-100 text-lg">
            Discover why Pekan is Malaysia's premier fishing destination
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
