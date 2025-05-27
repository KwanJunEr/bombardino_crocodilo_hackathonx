"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Calendar,
  Users,
  MapPin,
  Star,
  Phone,
  Mail,
  Download,
  Share,
  ArrowLeft,
  Anchor,
  Fish,
  Building2,
  Clock,
  Navigation,
  Utensils,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface TravelSummaryContentProps {
  tripData: any
}

export function TravelSummaryContent({ tripData }: TravelSummaryContentProps) {
  const router = useRouter()
  const [showItinerary, setShowItinerary] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const hotel = tripData.selectedHotel
  const group = tripData.matchedGroup
  const totalNights = tripData.duration - 1
  const totalPrice = hotel ? hotel.price * totalNights + Math.round(hotel.price * totalNights * 0.1) : 0

  // Simulate loading for itinerary
  useEffect(() => {
    const timer = setTimeout(() => {
      const progressTimer = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer)
            setShowItinerary(true)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const suggestedItinerary = [
    {
      time: "06:00 AM",
      activity: "Early Morning Fishing Trip",
      location: "Pahang River - Upstream Section",
      duration: "3 hours",
      description: "Best time for catching freshwater fish. Captain Ahmad will guide you to the prime spots.",
      icon: Fish,
      type: "fishing",
    },
    {
      time: "09:30 AM",
      activity: "Breakfast Break",
      location: "Riverside Café",
      duration: "1 hour",
      description: "Traditional Malaysian breakfast with fresh coffee overlooking the river.",
      icon: Utensils,
      type: "meal",
    },
    {
      time: "11:00 AM",
      activity: "Deep Water Fishing",
      location: "Pahang River - Deep Pool Area",
      duration: "4 hours",
      description: "Target larger fish species in deeper waters. Perfect for intermediate anglers.",
      icon: Fish,
      type: "fishing",
    },
    {
      time: "03:00 PM",
      activity: "Lunch & Rest",
      location: "Pekan Riverside Resort Restaurant",
      duration: "2 hours",
      description: "Enjoy fresh fish lunch and relax at the resort. Share fishing stories with your group.",
      icon: Utensils,
      type: "meal",
    },
    {
      time: "05:00 PM",
      activity: "Sunset Photography",
      location: "Pekan Bridge Viewpoint",
      duration: "1 hour",
      description: "Capture beautiful sunset photos and scenic river views.",
      icon: Camera,
      type: "activity",
    },
    {
      time: "06:30 PM",
      activity: "Evening Fishing Session",
      location: "Sungai Semantan",
      duration: "2.5 hours",
      description: "Night fishing experience with special techniques for nocturnal fish.",
      icon: Fish,
      type: "fishing",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-green-600">🎉 Trip Confirmed!</h1>
              <p className="text-gray-600">Your fishing adventure awaits</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Confirmation #FT-2024-001234</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Trip Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Trip Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{tripData.duration}</div>
                    <div className="text-sm text-gray-600">Days</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{group?.members.length || 1}</div>
                    <div className="text-sm text-gray-600">People</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">3</div>
                    <div className="text-sm text-gray-600">Fishing Spots</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">1</div>
                    <div className="text-sm text-gray-600">Guide</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="my-4">
                <CardContent>
                    <div className="">
                        <h1 className="text-xl font-bold">Further Actions</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2">
                        <Link href={"/tourist/dashboard/boatrental"}>
                      
                  <Button variant="outline" className="flex items-center gap-2">
                    <Anchor className="w-4 h-4" />
                    Boat Rental
                  </Button>
                    </Link>
                     <Link href={"/tourist/dashboard/fishingmaterial"}>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Fish className="w-4 h-4" />
                    Fishing Materials
                  </Button>
                  </Link>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    More Hotels
                  </Button>
                </div>
                </CardContent>
            </Card>
              

            {/* Accommodation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  Your Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <img
                    src={hotel?.image || "/placeholder.svg"}
                    alt={hotel?.name}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{hotel?.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{hotel?.rating}</span>
                      <span className="text-gray-600">({hotel?.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{hotel?.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Jalan Tengku Arif Bendahara, 26600 Pekan, Pahang</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">RM{hotel?.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>

                {/* Action Buttons */}
              
              </CardContent>
            </Card>

            {/* Fishing Group */}
            {group && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Your Fishing Group
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Guide */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Fishing Guide</h4>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>CA</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{group.guide.name}</div>
                        <div className="text-sm text-gray-600">{group.guide.experience} experience</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{group.guide.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Members */}
                  <div>
                    <h4 className="font-medium mb-3">Group Members</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {group.members.map((member: any, index: number) => (
                        <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                          <Avatar className="w-12 h-12 mx-auto mb-2">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-sm font-medium">{member.name}</div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {member.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Suggested Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-blue-500" />
                  Suggested Trip Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showItinerary ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 mb-4">Planning your perfect fishing itinerary...</p>
                    <Progress value={loadingProgress} className="w-full max-w-md mx-auto" />
                    <p className="text-sm text-gray-500 mt-2">{loadingProgress}% Complete</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-blue-800 mb-1">Day 1</h4>
                      <p className="text-sm text-blue-600">
                        Optimized for your group's intermediate skill level and weather conditions
                      </p>
                    </div>

                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                      {suggestedItinerary.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <div key={index} className="relative flex gap-4 pb-6">
                            {/* Timeline dot */}
                            <div
                              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                                item.type === "fishing"
                                  ? "bg-blue-100 text-blue-600"
                                  : item.type === "meal"
                                    ? "bg-orange-100 text-orange-600"
                                    : "bg-purple-100 text-purple-600"
                              }`}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="bg-white border rounded-lg p-4 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    <span>{item.time}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.location}</span>
                                  <span>•</span>
                                  <span>{item.duration}</span>
                                </div>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Pro Tip:</strong> This itinerary is optimized based on local weather patterns, fish
                        activity, and your group's experience level. Times can be adjusted based on your preferences!
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accommodation ({totalNights} nights)</span>
                    <span>RM{hotel ? hotel.price * totalNights : 0}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Taxes & fees</span>
                    <span>RM{hotel ? Math.round(hotel.price * totalNights * 0.1) : 0}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Paid</span>
                  <span className="text-green-600">RM{totalPrice}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">+60 9-422 1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">info@pekanriverside.com</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Itinerary
              </Button>
              <Button className="w-full" variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share with Group
              </Button>
              <Link href={"/tourist/dashboard"}>
              <Button onClick={() => router.push("/")} className="w-full">
                Plan Another Trip
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
