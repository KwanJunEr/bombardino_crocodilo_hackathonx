import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import {
  MapPin,
  Users,
  Camera,
  ShoppingCart,
  Shield,
  Trophy,
  Hotel,
  Anchor,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Connect with Local Anglers",
      description:
        "Join our verified community of fishing enthusiasts and connect with experienced local guides in Pekan",
    },
    {
      icon: Hotel,
      title: "Fishing Tourism Packages",
      description:
        "Discover curated fishing tourism packages with accommodations near the best fishing spots in Pekan",
    },
    {
      icon: ShoppingCart,
      title: "Local Fishing Gear",
      description:
        "Shop for authentic Malaysian fishing equipment and get recommendations from local fishing experts",
    },
    {
      icon: Anchor,
      title: "Traditional Boat Experiences",
      description:
        "Experience traditional Malaysian fishing with authentic boats operated by local fishing families",
    },
    {
      icon: MapPin,
      title: "Interactive Fishing Tourism Map",
      description:
        "Explore detailed maps of Pekan's fishing spots with tide charts, weather forecasts, and local insights",
    },
    {
      icon: Camera,
      title: "Fish Species Recognition",
      description:
        "Learn about local fish species, contribute to conservation, and earn rewards for sustainable fishing",
    },
    {
      icon: Shield,
      title: "Safety & Emergency Support",
      description:
        "Stay safe with our emergency network connecting you with local fishing communities and authorities",
    },
    {
      icon: Trophy,
      title: "Fishing Tournaments & Events",
      description:
        "Participate in local fishing competitions and cultural events celebrating Pekan's fishing heritage",
    },
  ];
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-lg px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Your Complete Fishing Tourism Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need for an unforgettable fishing tourism experience
            in Pekan, all in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
