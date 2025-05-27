"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Users, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
  const router = useRouter()
  const [isBooked, setIsBooked] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    fishType: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsBooked(true)
  }

  const handleBackToMenu = () => {
    router.push("/tourist/map/restaurant")
  }

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your table has been reserved. We'll send you a confirmation email shortly.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-6">
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Time:</strong> {formData.time}
              </p>
              <p>
                <strong>Guests:</strong> {formData.guests}
              </p>
              <p>
                <strong>Fish Type:</strong> {formData.fishType}
              </p>
            </div>
            <Button onClick={handleBackToMenu} className="w-full">
              Back to Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={handleBackToMenu} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Confirm Your Booking</h1>
            <p className="text-gray-600">Ocean's Catch Kitchen</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Reservation Details</CardTitle>
                <CardDescription>Please fill in your details to complete the booking</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="11:30">11:30 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="12:30">12:30 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="13:30">1:30 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="18:30">6:30 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="19:30">7:30 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="20:30">8:30 PM</SelectItem>
                          <SelectItem value="21:00">9:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6 Guests</SelectItem>
                          <SelectItem value="7">7 Guests</SelectItem>
                          <SelectItem value="8">8 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="fishType">Type of Fish You're Bringing *</Label>
                    <Select value={formData.fishType} onValueChange={(value) => handleInputChange("fishType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your fish type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ikan-patin">Ikan Patin (Asian Catfish)</SelectItem>
                        <SelectItem value="ikan-tenggiri">Ikan Tenggiri (Spanish Mackerel)</SelectItem>
                        <SelectItem value="ikan-kembung">Ikan Kembung (Indian Mackerel)</SelectItem>
                        <SelectItem value="ikan-siakap">Ikan Siakap (Sea Bass)</SelectItem>
                        <SelectItem value="ikan-merah">Ikan Merah (Red Snapper)</SelectItem>
                        <SelectItem value="ikan-bawal">Ikan Bawal (Pomfret)</SelectItem>
                        <SelectItem value="other">Other (please specify in special requests)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special dietary requirements, cooking preferences, or other requests..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-sm text-gray-600">
                      {formData.date || "Not selected"} at {formData.time || "Not selected"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Party Size</p>
                    <p className="text-sm text-gray-600">
                      {formData.guests || "Not selected"} {formData.guests === "1" ? "guest" : "guests"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-gray-500">🐟</div>
                  <div>
                    <p className="font-medium">Fish Type</p>
                    <p className="text-sm text-gray-600">
                      {formData.fishType
                        ? formData.fishType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
                        : "Not selected"}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Cooking Fee</span>
                    <span>RM30.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Service Charge</span>
                    <span>RM5.00</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-lg border-t mt-2 pt-2">
                    <span>Total</span>
                    <span>RM120.00</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Please bring your fresh catch. Our chefs will
                    handle the rest!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
