"use client"

import { Star, MapPin, Wifi, Car, Utensils, Waves, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { TripData } from "@/app/tourist/dashboard/setup/page"
import Image from "next/image"

interface HotelDetailsProps {
  tripData: TripData
  onNext: () => void
  onPrev: () => void
}

export function HotelDetails({ tripData, onNext, onPrev }: HotelDetailsProps) {
  const hotel = tripData.selectedHotel

  if (!hotel) {
    return <div>No hotel selected</div>
  }

  const totalNights = tripData.duration - 1
  const totalPrice = hotel.price * totalNights

  const amenityDetails = {
    wifi: { icon: Wifi, label: "Free WiFi", description: "High-speed internet throughout the property" },
    parking: { icon: Car, label: "Free Parking", description: "Complimentary parking for all guests" },
    restaurant: { icon: Utensils, label: "Restaurant", description: "On-site dining with local cuisine" },
    "fishing-spots": { icon: Waves, label: "Fishing Access", description: "Direct access to prime fishing locations" },
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">{hotel.name}</h2>
        <p className="text-gray-600">Complete hotel details and booking information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hotel Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-0">
              <Image
                src="/hotel2.jpg?height=300&width=600"
                alt={hotel.name}
                width={600}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium">{hotel.rating}</span>
                    <span className="text-gray-600">(324 reviews)</span>
                  </div>
                  <Badge variant="secondary">Recommended</Badge>
                </div>

                <p className="text-gray-600 mb-4">
                  Experience the perfect blend of comfort and convenience at {hotel.name}. Located in the heart of
                  Pekan, Pahang, our hotel offers easy access to the best fishing spots while providing modern amenities
                  for a comfortable stay.
                </p>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Jalan Tengku Arif Bendahara, 26600 Pekan, Pahang</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Amenities & Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.amenities.map((amenity) => {
                  const detail = amenityDetails[amenity as keyof typeof amenityDetails]
                  if (!detail) return null

                  const IconComponent = detail.icon
                  return (
                    <div key={amenity} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-medium">{detail.label}</div>
                        <div className="text-sm text-gray-600">{detail.description}</div>
                      </div>
                    </div>
                  )
                })}
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
                <span>+60 9-422 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>info@pekanriverside.com</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary */}
        <div className="space-y-6">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>
                    {tripData.startDate} to {tripData.endDate}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {totalNights} nights • {tripData.matchedGroup?.members.length || 1} guests
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>
                    RM{hotel.price} × {totalNights} nights
                  </span>
                  <span>RM{totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Taxes & fees</span>
                  <span>RM{Math.round(totalPrice * 0.1)}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>RM{totalPrice + Math.round(totalPrice * 0.1)}</span>
              </div>

              <Button onClick={onNext} className="w-full" size="lg">
                Book Now
              </Button>

              <p className="text-xs text-gray-600 text-center">Free cancellation until 24 hours before check-in</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back to Hotels
        </Button>
        <Button variant="outline">Compare Hotels</Button>
      </div>
    </div>
  )
}
