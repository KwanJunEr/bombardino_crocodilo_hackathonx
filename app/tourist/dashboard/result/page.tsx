"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { TravelSummaryContent } from "@/components/TravelSummaryContent"

type TripData = {
  startDate: string
  endDate: string
  duration: number
  groupPreference: string
  matchedGroup: {
    guide: {
      name: string
      experience: string
      rating: number
      specialties: string[]
      avatar: string
    }
    members: Array<{
      id: string
      name: string
      level: string
      avatar: string
      location: string
      age: number
      experience: string
      tripsCompleted: number
      rating: number
    }>
  }
  selectedHotel: {
    id: string
    name: string
    price: number
    rating: number
    reviews: number
    image: string
    amenities: string[]
    distance: string
    description: string
  }
  accommodationPreferences: string[]
}

export default function TravelSummaryPage() {
  const router = useRouter()
  const [tripData, setTripData] = useState<TripData | null>(null)

  useEffect(() => {
    // In a real app, you'd get this from URL params, localStorage, or API
    const mockTripData = {
      startDate: "2024-02-15",
      endDate: "2024-02-18",
      duration: 3,
      groupPreference: "group",
      matchedGroup: {
        guide: {
          name: "Captain Ahmad Rahman",
          experience: "15 years",
          rating: 4.9,
          specialties: ["Deep Sea", "River Fishing", "Night Fishing"],
          avatar: "/placeholder.svg?height=80&width=80",
        },
        members: [
          {
            id: "1",
            name: "Sarah Chen",
            level: "Intermediate",
            avatar: "/placeholder.svg?height=60&width=60",
            location: "Kuala Lumpur",
            age: 28,
            experience: "3 years",
            tripsCompleted: 12,
            rating: 4.7,
          },
          {
            id: "2",
            name: "David Kumar",
            level: "Intermediate",
            avatar: "/placeholder.svg?height=60&width=60",
            location: "Selangor",
            age: 35,
            experience: "5 years",
            tripsCompleted: 18,
            rating: 4.8,
          },
          {
            id: "3",
            name: "Lisa Wong",
            level: "Beginner",
            avatar: "/placeholder.svg?height=60&width=60",
            location: "Penang",
            age: 26,
            experience: "1 year",
            tripsCompleted: 4,
            rating: 4.5,
          },
          {
            id: "4",
            name: "You",
            level: "Intermediate",
            avatar: "/placeholder.svg?height=60&width=60",
            location: "Kuala Lumpur",
            age: 30,
            experience: "4 years",
            tripsCompleted: 15,
            rating: 4.6,
          },
        ],
      },
      selectedHotel: {
        id: "1",
        name: "Pekan Riverside Resort",
        price: 180,
        rating: 4.5,
        reviews: 324,
        image: "/placeholder.svg?height=200&width=300",
        amenities: ["wifi", "parking", "restaurant", "fishing-spots"],
        distance: "2.5 km to fishing spots",
        description: "Luxury resort with direct river access and guided fishing tours",
      },
      accommodationPreferences: ["wifi", "fishing-spots", "restaurant"],
    }
    setTripData(mockTripData)
  }, [])

  if (!tripData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your travel summary...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <TravelSummaryContent tripData={tripData} />
    </div>
  )
}
