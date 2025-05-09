"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import AIDashboard from "@/components/AIDashboard";

const visitorData = [
  { time: "8AM", visitors: 40 },
  { time: "10AM", visitors: 70 },
  { time: "12PM", visitors: 90 },
  { time: "2PM", visitors: 60 },
  { time: "4PM", visitors: 30 },
];

const nationalityData = [
  { name: "Malaysia", value: 400 },
  { name: "China", value: 300 },
  { name: "Japan", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">
        📊 Government AI Dashboard
      </h1>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">🕓 Foot Traffic by Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visitorData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visitors" stroke="#1c2d5c" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          🌎 Visitor Nationality Breakdown
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={nationalityData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {nationalityData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          🗺️ Popular Areas (Map View)
        </h2>
        <div className="h-[400px] w-full">
          <MapContainer
            center={[3.4985, 103.389]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full rounded-xl"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle center={[3.4985, 103.389]} radius={500} color="blue" />
            <Circle center={[3.505, 103.395]} radius={300} color="red" />
          </MapContainer>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
