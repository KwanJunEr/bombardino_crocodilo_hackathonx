"use client"

import { useState, useEffect } from "react"
import {
  Fish,
  Users,
  MapPin,
  Plus,
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Sunrise,
  Sunset,
  ChevronLeft,
  ChevronRight,
  Bot,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data for fishing activities in Pekan
const fishingActivities = [
  {
    id: 1,
    title: "Pahang River Fishing",
    location: "Pahang River, Pekan",
    difficulty: "Beginner",
    duration: "4-6 hours",
    bestTime: "Early Morning",
    fishTypes: ["Kelah", "Lampam", "Baung"],
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Kuala Pahang Estuary",
    location: "Kuala Pahang, Pekan",
    difficulty: "Intermediate",
    duration: "6-8 hours",
    bestTime: "Dawn & Dusk",
    fishTypes: ["Siakap", "Jenahak", "Kerapu"],
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Tasik Chini Adventure",
    location: "Tasik Chini, Near Pekan",
    difficulty: "Advanced",
    duration: "Full Day",
    bestTime: "All Day",
    fishTypes: ["Toman", "Haruan", "Kelisa"],
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Pekan Jetty Night Fishing",
    location: "Pekan Jetty",
    difficulty: "Beginner",
    duration: "4-5 hours",
    bestTime: "Night",
    fishTypes: ["Kembung", "Selar", "Tamban"],
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
  },
]


// Mock weather data for Malaysia
const currentWeather = {
  location: "Pekan, Pahang, Malaysia",
  temperature: 28,
  condition: "Partly Cloudy",
  humidity: 75,
  windSpeed: 12,
  visibility: 10,
  uvIndex: 6,
  sunrise: "07:15",
  sunset: "19:30",
}

const weatherForecast = [
  { day: "Today", high: 32, low: 24, condition: "Partly Cloudy", icon: "🌤️" },
  { day: "Tomorrow", high: 30, low: 23, condition: "Thunderstorms", icon: "⛈️" },
  { day: "Wednesday", high: 29, low: 22, condition: "Rainy", icon: "🌧️" },
  { day: "Thursday", high: 31, low: 24, condition: "Sunny", icon: "☀️" },
  { day: "Friday", high: 33, low: 25, condition: "Hot", icon: "🌞" },
]

export default function FishingDashboard() {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)

  const nextActivity = () => {
    setCurrentActivityIndex((prev) => (prev + 1) % fishingActivities.length)
  }

  const prevActivity = () => {
    setCurrentActivityIndex((prev) => (prev - 1 + fishingActivities.length) % fishingActivities.length)
  }

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % fishingActivities.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const currentActivity = fishingActivities[currentActivityIndex]

  return (
    <div className="min-h-screen bg-background">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
        <div className="flex items-center gap-2">
          <Fish className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold">FishPekan - Fishing Dashboard</h1>
        </div>
      </header>

      <main className="flex-1 space-y-6 py-6 px-10">
        {/* Keep all the existing main content exactly the same */}
        {/* Weather Section */}

          <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recommended Fishing Activities in Pekan</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={prevActivity}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextActivity}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={currentActivity.image || "/placeholder.svg"}
                  alt={currentActivity.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{currentActivity.title}</h3>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {currentActivity.location}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Difficulty:</span>
                    <Badge variant="outline" className="ml-2">
                      {currentActivity.difficulty}
                    </Badge>
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{currentActivity.duration}</span>
                  </div>
                  <div>
                    <span className="font-medium">Best Time:</span>
                    <span className="ml-2">{currentActivity.bestTime}</span>
                  </div>
                  <div>
                    <span className="font-medium">Rating:</span>
                    <span className="ml-2">⭐ {currentActivity.rating}</span>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Fish Types:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentActivity.fishTypes.map((fish, index) => (
                      <Badge key={index} variant="secondary">
                        {fish}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex gap-2">
                {fishingActivities.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentActivityIndex ? "bg-blue-600" : "bg-gray-300"}`}
                    onClick={() => setCurrentActivityIndex(index)}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Weather */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                Current Weather - {currentWeather.location}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{currentWeather.temperature}°C</div>
                  <div className="text-sm text-muted-foreground">{currentWeather.condition}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <div>
                    <div className="font-medium">{currentWeather.humidity}%</div>
                    <div className="text-sm text-muted-foreground">Humidity</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="font-medium">{currentWeather.windSpeed} km/h</div>
                    <div className="text-sm text-muted-foreground">Wind</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-green-500" />
                  <div>
                    <div className="font-medium">{currentWeather.visibility} km</div>
                    <div className="text-sm text-muted-foreground">Visibility</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Sunrise className="h-4 w-4 text-orange-500" />
                  <span>Sunrise: {currentWeather.sunrise}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Sunset className="h-4 w-4 text-orange-600" />
                  <span>Sunset: {currentWeather.sunset}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weather Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weatherForecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{day.icon}</span>
                      <div>
                        <div className="font-medium">{day.day}</div>
                        <div className="text-sm text-muted-foreground">{day.condition}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{day.high}°</div>
                      <div className="text-sm text-muted-foreground">{day.low}°</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Activities Carousel */}
      
        {/* Fishing Groups and AI Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fishing Groups */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  My Fishing Groups
                </span>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Group
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
               
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-purple-600" />
                AI Fishing Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-800">Best Fishing Conditions</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Based on weather patterns and tidal data, tomorrow morning (6-9 AM) shows optimal conditions for
                    fishing at Kuala Pahang Estuary.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Fish className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-800">Fish Activity Prediction</span>
                  </div>
                  <p className="text-sm text-green-700">
                    High probability of Siakap and Jenahak activity near river mouths due to incoming tide and moderate
                    cloud cover.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span className="font-medium text-orange-800">Location Recommendation</span>
                  </div>
                  <p className="text-sm text-orange-700">
                    Consider exploring the northern section of Pahang River - recent reports show increased fish
                    activity in that area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Travel Buttons */}
        <div className="w-full gap-4">

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Fish className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">From 27th May 2025 to 30th May 2025 is a great time for Fishing in Pekan, Pahang</h3>
                    <p className="text-sm text-muted-foreground">Plan your next fishing adventure now!</p>
                  </div>
                </div>
                <Link href={"/tourist/dashboard/setup"}>
                <Button>
                  Start My Fishing Journey
                  </Button>
                  </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
