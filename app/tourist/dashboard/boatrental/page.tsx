"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { MapPin, Users, CalendarIcon, Star, Anchor, ArrowLeft, Clock, Shield } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"
import Link from "next/link"

interface Boat {
  id: string
  name: string
  type: string
  capacity: number
  pricePerHour: number
  pricePerDay: number
  rating: number
  reviews: number
  location: string
  image: string
  features: string[]
  description: string
  specifications: {
    length: string
    engine: string
    fuel: string
    speed: string
  }
}

interface RentalDetails {
  boat: Boat
  startDate: Date
  endDate: Date
  duration: string
  totalPrice: number
  guests: number
}

const boats: Boat[] = [
  {
    id: "1",
    name: "Ikan Besar",
    type: "Deep Sea Fishing",
    capacity: 8,
    pricePerHour: 45,
    pricePerDay: 320,
    rating: 4.8,
    reviews: 124,
    location: "Kuala Pahang",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Fish Finder", "Rod Holders", "Live Well", "Ice Box", "Safety Equipment"],
    description:
      "Professional deep sea fishing boat perfect for catching big fish. Equipped with modern fish finding technology and all necessary fishing gear.",
    specifications: {
      length: "32 ft",
      engine: "Twin 200HP",
      fuel: "Petrol",
      speed: "28 knots",
    },
  },
  {
    id: "2",
    name: "Nelayan Jaya",
    type: "Coastal Fishing",
    capacity: 6,
    pricePerHour: 35,
    pricePerDay: 250,
    rating: 4.7,
    reviews: 89,
    location: "Pekan Jetty",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Fishing Rods", "Bait Storage", "Cooler Box", "Shade Cover", "GPS"],
    description:
      "Ideal coastal fishing boat for catching local fish species. Perfect for half-day and full-day fishing trips.",
    specifications: {
      length: "26 ft",
      engine: "Single 150HP",
      fuel: "Petrol",
      speed: "22 knots",
    },
  },
  {
    id: "3",
    name: "Pancing Master",
    type: "Sport Fishing",
    capacity: 10,
    pricePerHour: 55,
    pricePerDay: 400,
    rating: 4.9,
    reviews: 156,
    location: "Sungai Pahang",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Tournament Gear", "Fighting Chair", "Outriggers", "Fish Finder", "Live Bait Tank"],
    description:
      "High-end sport fishing boat for serious anglers. Perfect for tournament fishing and catching trophy fish.",
    specifications: {
      length: "38 ft",
      engine: "Twin 300HP",
      fuel: "Petrol",
      speed: "32 knots",
    },
  },
  {
    id: "4",
    name: "Family Fisher",
    type: "Family Fishing",
    capacity: 8,
    pricePerHour: 25,
    pricePerDay: 180,
    rating: 4.6,
    reviews: 203,
    location: "Pantai Sepat",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Basic Fishing Gear", "Seating Area", "Canopy", "Cooler", "Safety Vests"],
    description: "Perfect family fishing boat for beginners and casual fishing. Safe and comfortable for all ages.",
    specifications: {
      length: "22 ft",
      engine: "Single 115HP",
      fuel: "Petrol",
      speed: "18 knots",
    },
  },
  {
    id: "5",
    name: "Tekong Laut",
    type: "Traditional Fishing",
    capacity: 12,
    pricePerHour: 30,
    pricePerDay: 220,
    rating: 4.5,
    reviews: 167,
    location: "Kampung Pulau Manis",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Traditional Nets", "Multiple Rod Holders", "Large Deck Space", "Fish Storage", "Local Guide"],
    description: "Traditional Malaysian fishing boat experience with local fishing techniques and cultural immersion.",
    specifications: {
      length: "28 ft",
      engine: "Single 140HP",
      fuel: "Diesel",
      speed: "16 knots",
    },
  },
  {
    id: "6",
    name: "Angler Pro",
    type: "Professional Fishing",
    capacity: 6,
    pricePerHour: 65,
    pricePerDay: 480,
    rating: 4.9,
    reviews: 98,
    location: "Nenasi Beach",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Professional Equipment", "Sonar System", "Electric Reels", "Fighting Belts", "Captain Included"],
    description:
      "Top-tier professional fishing boat with experienced captain and premium equipment for serious fishing expeditions.",
    specifications: {
      length: "35 ft",
      engine: "Twin 250HP",
      fuel: "Petrol",
      speed: "30 knots",
    },
  },
]

type ViewType = "grid" | "summary"

export default function BoatRental() {
  const [currentView, setCurrentView] = useState<ViewType>("grid")
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [rentalDetails, setRentalDetails] = useState<RentalDetails | null>(null)

  // Rental form state
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [duration, setDuration] = useState("4-hours")
  const [guests, setGuests] = useState(2)

  const handleBoatSelect = (boat: Boat) => {
    setSelectedBoat(boat)
    setIsDialogOpen(true)
  }

  const handleRentBoat = () => {
    if (!selectedBoat || !startDate) return

    const calculatedEndDate = endDate || startDate
    let totalPrice = 0

    if (duration === "full-day") {
      totalPrice = selectedBoat.pricePerDay
    } else {
      const hours = Number.parseInt(duration.split("-")[0])
      totalPrice = selectedBoat.pricePerHour * hours
    }

    const rental: RentalDetails = {
      boat: selectedBoat,
      startDate,
      endDate: calculatedEndDate,
      duration,
      totalPrice,
      guests,
    }

    setRentalDetails(rental)
    setIsDialogOpen(false)
    setCurrentView("summary")
  }

  const handleBackToGrid = () => {
    setCurrentView("grid")
    setRentalDetails(null)
  }

  if (currentView === "summary") {
    return <TravelSummary rentalDetails={rentalDetails} onBack={handleBackToGrid} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-7xl mx-auto ">
        <Link href={"/tourist/dashboard/result"}>
        <Button>
            Back To Summary
        </Button>
        </Link>
        
        {/* Header */}
        <div className="text-center mb-8">
       
               
         <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Fishing Boat Rentals</h1> 
          <p className="text-lg text-gray-600">Find the perfect fishing boat for your angling adventure</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="kuala-pahang">Kuala Pahang</SelectItem>
                  <SelectItem value="pekan-jetty">Pekan Jetty</SelectItem>
                  <SelectItem value="sungai-pahang">Sungai Pahang</SelectItem>
                  <SelectItem value="pantai-sepat">Pantai Sepat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="boat-type">Boat Type</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="deep-sea">Deep Sea Fishing</SelectItem>
                  <SelectItem value="coastal">Coastal Fishing</SelectItem>
                  <SelectItem value="sport">Sport Fishing</SelectItem>
                  <SelectItem value="family">Family Fishing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="capacity">Capacity</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Size</SelectItem>
                  <SelectItem value="1-6">1-6 People</SelectItem>
                  <SelectItem value="7-10">7-10 People</SelectItem>
                  <SelectItem value="11+">11+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="price">Price Range</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="0-30">RM0 - RM30/hr</SelectItem>
                  <SelectItem value="30-50">RM30 - RM50/hr</SelectItem>
                  <SelectItem value="50+">RM50+/hr</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Boat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boats.map((boat) => (
            <Card key={boat.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <Image
                  src={boat.image || "/placeholder.svg"}
                  alt={boat.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-white text-gray-900">{boat.type}</Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{boat.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      {boat.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{boat.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">({boat.reviews} reviews)</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Up to {boat.capacity} guests</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {boat.features.slice(0, 3).map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {boat.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{boat.features.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold">RM{boat.pricePerHour}</div>
                    <div className="text-sm text-gray-500">per hour</div>
                  </div>
                  <Button onClick={() => handleBoatSelect(boat)}>View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Boat Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="min-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedBoat && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedBoat.name}</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column - Boat Details */}
                  <div>
                    <Image
                      src={selectedBoat.image || "/placeholder.svg"}
                      alt={selectedBoat.name}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Description</h3>
                        <p className="text-gray-600">{selectedBoat.description}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-2">Features</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedBoat.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-2">Specifications</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Length:</span>
                            <span className="ml-2 font-medium">{selectedBoat.specifications.length}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Engine:</span>
                            <span className="ml-2 font-medium">{selectedBoat.specifications.engine}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Fuel:</span>
                            <span className="ml-2 font-medium">{selectedBoat.specifications.fuel}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Max Speed:</span>
                            <span className="ml-2 font-medium">{selectedBoat.specifications.speed}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Booking Form */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Book Your Rental</h3>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="start-date">Start Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {startDate ? format(startDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Select value={duration} onValueChange={setDuration}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-hours">2 Hours - RM{selectedBoat.pricePerHour * 2}</SelectItem>
                            <SelectItem value="4-hours">4 Hours - RM{selectedBoat.pricePerHour * 4}</SelectItem>
                            <SelectItem value="6-hours">6 Hours - RM{selectedBoat.pricePerHour * 6}</SelectItem>
                            <SelectItem value="8-hours">8 Hours - RM{selectedBoat.pricePerHour * 8}</SelectItem>
                            <SelectItem value="full-day">Full Day - RM{selectedBoat.pricePerDay}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Select value={guests.toString()} onValueChange={(value) => setGuests(Number.parseInt(value))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: selectedBoat.capacity }, (_, i) => i + 1).map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Base Price:</span>
                          <span>
                            RM
                            {duration === "full-day"
                              ? selectedBoat.pricePerDay
                              : selectedBoat.pricePerHour * Number.parseInt(duration.split("-")[0])}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Service Fee:</span>
                          <span>RM20</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total:</span>
                          <span>
                            RM
                            {(duration === "full-day"
                              ? selectedBoat.pricePerDay
                              : selectedBoat.pricePerHour * Number.parseInt(duration.split("-")[0])) + 20}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full" size="lg" onClick={handleRentBoat} disabled={!startDate}>
                        Rent This Boat
                      </Button>

                      <div className="text-xs text-gray-500 text-center">
                        Free cancellation up to 24 hours before your trip
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

// Travel Summary Component
function TravelSummary({ rentalDetails, onBack }: { rentalDetails: RentalDetails | null; onBack: () => void }) {
  if (!rentalDetails) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Boats
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Travel Summary</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Anchor className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600">Booking Confirmed!</h2>
              <p className="text-gray-600">Your boat rental has been successfully booked</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Boat Details */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Boat Details</h3>
              <div className="space-y-4">
                <Image
                  src={rentalDetails.boat.image || "/placeholder.svg"}
                  alt={rentalDetails.boat.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-xl">{rentalDetails.boat.name}</h4>
                  <p className="text-gray-600">{rentalDetails.boat.type}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{rentalDetails.boat.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Up to {rentalDetails.boat.capacity} guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{rentalDetails.boat.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Summary */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Rental Summary</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-sm text-gray-600">
                        {format(rentalDetails.startDate, "EEEE, MMMM do, yyyy")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-gray-600">{rentalDetails.duration.replace("-", " ")}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Guests</div>
                      <div className="text-sm text-gray-600">
                        {rentalDetails.guests} {rentalDetails.guests === 1 ? "person" : "people"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Rental Cost:</span>
                    <span>RM{rentalDetails.totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Service Fee:</span>
                    <span>RM20</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold border-t pt-2">
                    <span>Total Paid:</span>
                    <span>RM{rentalDetails.totalPrice + 20}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Booking Protection</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Your booking is protected with free cancellation up to 24 hours before your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold text-lg mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h4 className="font-medium mb-1">Confirmation Email</h4>
                <p className="text-sm text-gray-600">Check your email for booking details and instructions</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <h4 className="font-medium mb-1">Arrive Early</h4>
                <p className="text-sm text-gray-600">Arrive 30 minutes before your scheduled time</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <h4 className="font-medium mb-1">Enjoy Your Trip</h4>
                <p className="text-sm text-gray-600">Have an amazing time on the water!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
