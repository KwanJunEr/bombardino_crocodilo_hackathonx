import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../ui/badge";
import { MapPin, Fish, Heart } from "lucide-react";

const TourismExperienceSection = () => {
  return (
    <section
      id="tourism"
      className="py-24 px-8 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-white/20 text-white text-lg px-4 py-2">
            Complete Tourism Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            From Arrival to Departure
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the complete fishing tourism journey with our integrated
            platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Plan & Book</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-blue-100 text-lg leading-relaxed">
                Discover fishing spots, book accommodations, arrange
                transportation, and plan your perfect fishing tourism itinerary
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Fish className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Fish & Explore</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-blue-100 text-lg leading-relaxed">
                Experience world-class fishing, learn local techniques,
                participate in conservation, and explore Pekan's natural beauty
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Savor & Share</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-blue-100 text-lg leading-relaxed">
                Enjoy fresh catches at local restaurants, share your
                experiences, and contribute to sustainable fishing tourism
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TourismExperienceSection;
