"use client";
import React from "react";

const Training = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">
        📈 Training & Recommendations
      </h1>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          🧠 AI-Identified Training Needs
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Museum A needs Mandarin-speaking guides</li>
          <li>Eco Park staff recommended for First Aid refresher</li>
          <li>River Cruise team – Tourist engagement workshop</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          🤝 Potential Local Merchant Partners
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Pak Ali’s Kopitiam</strong> – Near riverfront, highly rated
            by tourists
          </li>
          <li>
            <strong>Batik Handicrafts Gallery</strong> – Popular among
            foreigners, not yet partnered
          </li>
          <li>
            <strong>Durian Delight Truck</strong> – Located near popular Daka
            site
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Training;
