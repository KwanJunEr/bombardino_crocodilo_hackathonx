"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Star, MapPin, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const touristSpots = [
  {
    id: 1,
    type: "tourist",
    title: "Taman Negara National Park",
    description:
      "One of the world's oldest tropical rainforests, perfect for jungle trekking, canopy walks, and wildlife spotting after a successful fishing trip.",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
    location: "45 minutes from estuary",
  },
  {
    id: 2,
    type: "tourist",
    title: "Kuala Pahang Lighthouse",
    description:
      "Historic lighthouse offering panoramic views of the estuary and South China Sea. Great for sunset photography and learning about maritime history.",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=300",
    location: "15 minutes from estuary",
  },
  {
    id: 3,
    type: "tourist",
    title: "Pahang River Cruise",
    description:
      "Scenic boat cruise along Malaysia's longest river, showcasing mangrove ecosystems, local villages, and diverse wildlife including proboscis monkeys.",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
    location: "20 minutes from estuary",
  },
  {
    id: 4,
    type: "tourist",
    title: "Pekan Royal Museum",
    description:
      "Explore the rich history and culture of Pahang's royal heritage in this beautifully preserved traditional Malay palace.",
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=300",
    location: "30 minutes from estuary",
  },
]

const restaurants = [
  {
    id: 5,
    type: "restaurant",
    title: "Warung Pak Su Seafood",
    description:
      "Authentic local seafood restaurant famous for fresh catch preparations. Try their signature chili crab and grilled fish - perfect for enjoying your own catch!",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
    location: "10 minutes from estuary",
  },
  {
    id: 6,
    type: "restaurant",
    title: "Restoran Floating Pahang",
    description:
      "Unique floating restaurant experience on the river. Specializes in traditional Malay cuisine with stunning water views and fresh river fish dishes.",
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=300",
    location: "25 minutes from estuary",
  },
  {
    id: 7,
    type: "restaurant",
    title: "Kedai Kopi Ah Heng",
    description:
      "Traditional coffee shop serving hearty local breakfast and lunch. Famous for their nasi lemak, kaya toast, and strong local coffee.",
    rating: 4.1,
    image: "/placeholder.svg?height=200&width=300",
    location: "12 minutes from estuary",
  },
  {
    id: 8,
    type: "restaurant",
    title: "Pantai Seafood Village",
    description:
      "Beachfront dining with fresh seafood and beautiful sunset views. Known for their barbecued fish, prawns, and traditional fish curry.",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
    location: "18 minutes from estuary",
  },
]

const allPlaces = [...touristSpots, ...restaurants]

export default function ExplorePlaces() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")

  const filteredPlaces = filter === "all" ? allPlaces : allPlaces.filter((place) => place.type === filter)

  const touristPlaces = filteredPlaces.filter((place) => place.type === "tourist")
  const restaurantPlaces = filteredPlaces.filter((place) => place.type === "restaurant")

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-5">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Fishing Spot
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recommended Tourist Spots to Go After Fishing</h1>
          <p className="text-gray-600">Discover amazing places to visit and dine near Sungai Pahang Estuary</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter */}
        <div className="mb-8">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter places" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Spots</SelectItem>
              <SelectItem value="tourist">Tourist Attractions</SelectItem>
              <SelectItem value="restaurant">Restaurants</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tourist Spots */}
        {(filter === "all" || filter === "tourist") && touristPlaces.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tourist Attractions</h2>
            <div className="space-y-6">
              {touristPlaces.map((place) => (
                <Card key={place.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={place.image || "/placeholder.svg"}
                        alt={place.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{place.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{place.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold">{place.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{place.description}</p>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Separator */}
        {filter === "all" && touristPlaces.length > 0 && restaurantPlaces.length > 0 && <Separator className="my-8" />}

        {/* Restaurants */}
        {(filter === "all" || filter === "restaurant") && restaurantPlaces.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Restaurants & Dining</h2>
            <div className="space-y-6">
              {restaurantPlaces.map((place) => (
                <Card key={place.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={place.image || "/placeholder.svg"}
                        alt={place.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{place.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{place.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold">{place.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{place.description}</p>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No places found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
