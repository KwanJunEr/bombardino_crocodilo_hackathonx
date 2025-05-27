"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Navigation, Fish } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ReactGoogleMap from "@/components/MapComponent";

interface Location {
  latitude: string;
  longitude: string;
  accuracy: number;
  name?: string;
}

const Map = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("beginner");
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const locationError: string = "";
  const isLoadingLocation: boolean = false;

  useEffect(() => {
    setCurrentLocation({
      latitude: "3° 43' 4.19 N",
      longitude: "103° 07' 9.60 E",
      accuracy: 10,
      name: "UMPSA",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Fish className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">FishSpot Mapping</h1>
        </div>
        <p className="text-lg text-gray-600 text-center">
          Discover the best fishing spots near you
        </p>
      </div>

      <div className="px-10">
        {/*Search, Filter, and Location Card*/}
        <Card className="my-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter
            </CardTitle>
            <CardDescription>
              Find the perfect fishing spot for your skill level
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar and Filter Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by location, fish type, or spot name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Difficulty Filter */}
              <div className="w-full sm:w-48">
                <Select
                  value={difficultyFilter}
                  onValueChange={setDifficultyFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="all">All Levels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location Display */}
            {isLoadingLocation && (
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 animate-spin text-blue-600" />
                  <p className="text-sm font-medium text-blue-800">
                    Getting your location...
                  </p>
                </div>
              </div>
            )}

            {currentLocation && !isLoadingLocation && (
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <p className="text-sm font-medium text-green-800">
                    Current Location: {currentLocation.name}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-green-700">
                  <span>
                    <strong>Lat:</strong> {currentLocation.latitude}
                  </span>
                  <span>
                    <strong>Lng:</strong> {currentLocation.longitude}
                  </span>
                  <span>
                    <strong>Accuracy:</strong> ±
                    {Math.round(currentLocation.accuracy)}m
                  </span>
                </div>
              </div>
            )}

            {/* Location Error */}
            {locationError && (
              <Alert>
                <AlertDescription>{locationError}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="">
        <ReactGoogleMap />
      </div>
    </div>
  );
};

export default Map;
