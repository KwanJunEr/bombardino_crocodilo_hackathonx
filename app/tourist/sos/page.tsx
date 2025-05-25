"use client";
import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Camera,
  CheckCircle,
  Loader2,
  Phone, 
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link";


interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
  address?: string;
  city?: string;
  country?: string;
}
interface EmergencyData {
  category: string;
  location: LocationData | null;
  timestamp: number;
  status: "idle" | "emergency-triggered";
}

const emergencyCategories = [
  { value: "medical", label: "Medical Emergency", icon: "🏥" },
  { value: "fire", label: "Fire Emergency", icon: "🔥" },
  { value: "police", label: "Police Emergency", icon: "👮" },
  { value: "accident", label: "Traffic Accident", icon: "🚗" },
  { value: "natural", label: "Natural Disaster", icon: "🌪️" },
  { value: "personal", label: "Personal Safety", icon: "⚠️" },
  { value: "other", label: "Other Emergency", icon: "🆘" },
]

const SOSMain = () => {
  const [emergencyData, setEmergencyData] = useState<EmergencyData>({
    category: "",
    location: null,
    timestamp: 0,
    status: "idle",
  });

  const [locationStatus, setLocationStatus] = useState<
    "loading" | "success" | "error" | "denied"
  >("loading");
  const reverseGeocode = async (
    lat: number,
    lon: number
  ): Promise<{ address?: string; city?: string; country?: string }> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      if (data && data.display_name) {
        return {
          address: data.display_name,
          city:
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            "",
          country: data.address?.country || "",
        };
      }
      return {};
    } catch (error) {
      console.error("Reverse geocoding failed", error);
      return {};
    }
  };

  const getLocation = (): Promise<LocationData> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser"));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const locationData: LocationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          };
          // Get address information
          const addressInfo = await reverseGeocode(
            locationData.latitude,
            locationData.longitude
          );

          resolve({
            ...locationData,
            ...addressInfo,
          });
        },
        (error) => {
          let errorMessage = "Unable to retrieve location";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied by user";
              setLocationStatus("denied");
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out";
              break;
          }
          reject(new Error(errorMessage));
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 60000,
        }
      );
    });
  };

  //Get location on Componnent Mount

  useEffect(() => {
    const initializeLocation = async () => {
      try {
        setLocationStatus("loading");
        const location = await getLocation();
        setEmergencyData((prev) => ({ ...prev, location }));
        setLocationStatus("success");
      } catch (err) {
        setLocationStatus("error");
      }
    };
    initializeLocation();
  }, []);

  const retryLocation = () => {
    setLocationStatus("loading");
    const initializeLocation = async () => {
      try {
        const location = await getLocation();
        setEmergencyData((prev) => ({ ...prev, location }));
        setLocationStatus("success");
      } catch (err) {
        setLocationStatus("error");
      }
    };

    initializeLocation();
  };

  const formatLocation = (location: LocationData) => {
    return `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`;
  };

  const getGoogleMapsUrl = (location: LocationData) => {
    return `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
  };

  return (
    <main className="min-h-screen">
      <div className="px-10 py-10 bg-white">
        <div className="flex justify-center flex-col items-center">
          <div className="space-y-2">
            <div className="flex justify-center items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h1 className="text-center font-bold text-red-500 text-3xl">
                {" "}
                Emergency SOS
              </h1>
            </div>
            <p className="text-gray-600 text-center">
              Your Location is Being Detected Automatically and Press SOS Button
              to Request For Help
            </p>
          </div>
        </div>
        <div className="my-4">
          {/*Current Location Status*/}
          <Card className="px-7">
            <CardContent>
              <div className="flex flex-row justify-between my-2">
                <div className="flex flex-row space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Current Location</span>
                </div>

                <div className="flex flex-row space-x-4">
                  <Button className="bg-transparent border border-gray-400 px-5 py-2 w-[50px]">
                    <Camera className="h-5 w-5 text-blue-500" />
                  </Button>
                  <Button className="bg-transparent  border border-gray-400 px-5 py-2 w-[50px]">
                    <Bell className="h-5 w-5 text-blue-500" />
                  </Button>
                </div>
              </div>
              {locationStatus === "loading" && (
                <div className="flex items-center space-x-2 text-blue-600">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Getting your location...</span>
                </div>
              )}

              {locationStatus === "denied" && (
                <div className="space-y-3">
                  <div className="text-orange-600">
                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                    Location access denied
                  </div>
                  <p className="text-sm text-gray-600">
                    Please allow location access to use emergency services
                    effectively.
                  </p>
                  <Button onClick={retryLocation} variant="outline" size="sm">
                    Retry Location Access
                  </Button>
                </div>
              )}

              {locationStatus === "error" && (
                <div className="space-y-3">
                  <div className="text-red-600">
                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                    Failed to get location
                  </div>
                  <Button onClick={retryLocation} variant="outline" size="sm">
                    Try Again
                  </Button>
                </div>
              )}

              {locationStatus === "success" && emergencyData.location && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Location detected</span>
                  </div>

                  {emergencyData.location.address && (
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-sm">Address:</span>
                        <p className="text-sm text-black mt-1">
                          {emergencyData.location.address}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Coordinates:</span>
                      <span className="font-mono">
                        {formatLocation(emergencyData.location)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <span>
                        ±{Math.round(emergencyData.location.accuracy)}m
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Updated:</span>
                      <span>
                        {new Date(
                          emergencyData.location.timestamp
                        ).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      window.open(
                        getGoogleMapsUrl(emergencyData.location!),
                        "_blank"
                      )
                    }
                  >
                    <MapPin className="h-3 w-3 mr-2" />
                    View on Map
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          {/*Emergency Category Selection*/}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-red-50 rounded-2xl shadow-lg border border-red-200 my-5">
            <div className="flex flex-col space-y-4 max-w-md">
              <h1 className="text-2xl font-bold text-red-700">
                Are you in an emergency?
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Press the{" "}
                <span className="font-semibold text-red-600">SOS</span> button —
                your live location will be shared with nearby app users, local
                authorities, and responders to get you the help you need
                quickly.
              </p>
            </div>
            <div className="flex-shrink-0 md:block hidden">
              <Image
                src="/emergency1.png"
                height={200}
                width={200}
                alt="Emergency"
                className="rounded-xl"
              />
            </div>
          </div>

           {/* Emergency Category Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Emergency Category</CardTitle>
            <CardDescription>Select the type of emergency</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={emergencyData.category}
              onValueChange={(value) => setEmergencyData((prev) => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose emergency type" />
              </SelectTrigger>
              <SelectContent>
                {emergencyCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    <div className="flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>


        {/* SOS Button */}
        <div className="text-center">
         
         <Link href={"/tourist/sos/sosresult"}>
            <Button
              onClick={()=>{}}
              className="w-50 h-50 my-4 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white text-xl font-bold shadow-lg transform transition-transform hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center space-y-1">
                <Phone className="h-8 w-8" />
                <span>SOS</span>
                <span>Hold for 3 seconds</span>
              </div>
            </Button>
           </Link>
        </div>
       

        {/* Instructions */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-2">
            <div className="space-y-2 text-sm text-blue-800">
              <h4 className="font-semibold">How it works:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Your location is automatically detected</li>
                <li>Select your emergency category</li>
                <li>Press the SOS button to send alert</li>
                <li>Your exact location and address will be shared</li>
              </ol>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </main>
  );
};

export default SOSMain;
