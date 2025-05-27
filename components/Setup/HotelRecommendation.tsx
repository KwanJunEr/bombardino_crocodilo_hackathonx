"use client"

import { Star, MapPin, Wifi, Car, Utensils, Waves, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { TripData } from "@/app/tourist/dashboard/setup/page"
import Image from "next/image"

interface HotelRecommendationsProps {
  tripData: TripData
  updateTripData: (data: Partial<TripData>) => void
  onNext: () => void
  onPrev: () => void
}

const hotels = [
  {
    id: "1",
    name: "Pekan Riverside Resort",
    price: 180,
    rating: 4.5,
    reviews: 324,
    image: "/hotel2.jpg?height=200&width=300",
    amenities: ["wifi", "parking", "restaurant", "fishing-spots"],
    distance: "2.5 km to fishing spots",
    description: "Luxury resort with direct river access and guided fishing tours",
  },
  {
    id: "2",
    name: "Budget Inn Pekan",
    price: 85,
    rating: 4.1,
    reviews: 156,
    image: "/hotel1.jpg?height=200&width=300",
    amenities: ["wifi", "parking", "affordable"],
    distance: "5 km to fishing spots",
    description: "Clean, comfortable accommodation with excellent value for money",
  },
  {
    id: "3",
    name: "Pahang Fishing Lodge",
    price: 220,
    rating: 4.7,
    reviews: 89,
    image: "/hotel3.jpg?height=200&width=300",
    amenities: ["wifi", "restaurant", "fishing-spots", "parking"],
    distance: "Direct access to fishing spots",
    description: "Specialized fishing lodge with equipment rental and local guides",
  },
  {
    id: "4",
    name: "Central Hotel Pekan",
    price: 120,
    rating: 4.2,
    reviews: 203,
    image: "/hotel4.jpg?height=200&width=300",
    amenities: ["wifi", "location", "restaurant"],
    distance: "3 km to fishing spots",
    description: "Modern hotel in the heart of Pekan with easy access to attractions",
  },
]

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  restaurant: Utensils,
  "fishing-spots": Waves,
  affordable: DollarSign,
  location: MapPin,
}

export function HotelRecommendations({ tripData, updateTripData, onNext, onPrev }: HotelRecommendationsProps) {
  const handleSelectHotel = (hotel: (typeof hotels)[0]) => {
    updateTripData({ selectedHotel: hotel })
    onNext()
  }

  const getMatchScore = (hotelAmenities: string[]) => {
    if (tripData.accommodationPreferences.length === 0) return null
    const matches = hotelAmenities.filter((amenity) => tripData.accommodationPreferences.includes(amenity)).length
    return Math.round((matches / tripData.accommodationPreferences.length) * 100)
  }

  const hasPreferences = tripData.accommodationPreferences.length > 0

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          {hasPreferences ? "Recommended Hotels in Pekan, Pahang" : "Hotels in Pekan, Pahang"}
        </h2>
        <p className="text-gray-600">
          {hasPreferences
            ? "Based on your preferences, here are the best options for your stay"
            : "All available hotels for your fishing trip"}
        </p>
      </div>

      {hasPreferences && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Your preferences:</h3>
          <div className="flex flex-wrap gap-2">
            {tripData.accommodationPreferences.map((pref) => (
              <span key={pref} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm capitalize">
                {pref.replace("-", " ")}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotels.map((hotel) => {
          const matchScore = getMatchScore(hotel.amenities)
          return (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="w-full h-48 object-cover" width={300} height={200}/>
                {matchScore && matchScore > 50 && (
                  <Badge className="absolute top-2 right-2 bg-green-500">{matchScore}% Match</Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{hotel.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">RM{hotel.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-gray-600">({hotel.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{hotel.description}</p>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {hotel.distance}
                </div>

                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
                    const isPreferred = hasPreferences && tripData.accommodationPreferences.includes(amenity)
                    return (
                      <div
                        key={amenity}
                        className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                          isPreferred ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {IconComponent && <IconComponent className="w-3 h-3" />}
                        <span className="capitalize">{amenity.replace("-", " ")}</span>
                      </div>
                    )
                  })}
                </div>

                <Button
                  onClick={() => handleSelectHotel(hotel)}
                  className="w-full"
                  variant={matchScore && matchScore > 70 ? "default" : "outline"}
                >
                  View Details & Book
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button variant="outline">Show More Hotels</Button>
      </div>
    </div>
  )
}

