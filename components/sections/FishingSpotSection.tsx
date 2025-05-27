import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";

const FishingSpotSection = () => {
  const fishingSpots = [
    {
      name: "Pahang River Estuary",
      description:
        "Famous for Toman and Kelah fishing, where the river meets the South China Sea",
      difficulty: "Beginner Friendly",
      bestTime: "Early Morning",
    },
    {
      name: "Pekan Royal Town Waters",
      description:
        "Historic fishing grounds near the royal palace with diverse freshwater species",
      difficulty: "Intermediate",
      bestTime: "Dawn & Dusk",
    },
    {
      name: "Coastal Mangrove Areas",
      description:
        "Rich ecosystem perfect for saltwater fishing and eco-tourism experiences",
      difficulty: "Advanced",
      bestTime: "High Tide",
    },
  ];
  return (
    <section
      id="fishing-spots"
      className="py-24 bg-gradient-to-r from-blue-50 to-green-50 px-8"
    >
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-lg px-4 py-2">
            Prime Fishing Locations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Discover Pekan's Legendary Fishing Spots
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the royal waters near the palace to the pristine river
            estuaries, each location offers unique fishing experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fishingSpots.map((spot, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/pahang1.jpg?height=200&width=300"
                    alt={spot.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {spot.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {spot.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base mb-4 leading-relaxed">
                  {spot.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      Best: {spot.bestTime}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FishingSpotSection;
