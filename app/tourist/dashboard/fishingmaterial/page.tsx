"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingCart, MapPin, Phone, Mail, Clock, Plus, Minus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const fishingGearCategories = [
  {
    category: "Rods & Reels",
    items: [
      { name: "Fishing Rod (Medium Action)", price: 89.9, id: "rod-medium" },
      { name: "Spinning Reel", price: 65.5, id: "reel-spinning" },
      { name: "Baitcasting Reel", price: 125.0, id: "reel-baitcast" },
      { name: "Fly Rod", price: 150.0, id: "rod-fly" },
      { name: "Ice Fishing Rod", price: 45.0, id: "rod-ice" },
    ],
  },
  {
    category: "Tackle & Bait",
    items: [
      { name: "Hooks (Various Sizes Pack)", price: 12.9, id: "hooks-pack" },
      { name: "Sinkers/Weights Set", price: 18.5, id: "sinkers-set" },
      { name: "Swivels & Snaps Pack", price: 8.9, id: "swivels-pack" },
      { name: "Bobbers/Floats Set", price: 15.0, id: "bobbers-set" },
      { name: "Live Bait Container", price: 25.0, id: "bait-container" },
      { name: "Artificial Lures Set", price: 35.9, id: "lures-set" },
      { name: "Soft Plastics Pack", price: 22.5, id: "soft-plastics" },
      { name: "Spoons & Spinners Set", price: 28.9, id: "spoons-spinners" },
    ],
  },
  {
    category: "Line & Leaders",
    items: [
      { name: "Monofilament Line (300m)", price: 16.9, id: "mono-line" },
      { name: "Braided Line (150m)", price: 32.5, id: "braided-line" },
      { name: "Fluorocarbon Leader", price: 24.9, id: "fluoro-leader" },
      { name: "Wire Leaders Pack", price: 19.5, id: "wire-leaders" },
      { name: "Line Cutters", price: 12.0, id: "line-cutters" },
    ],
  },
  {
    category: "Storage & Organization",
    items: [
      { name: "Tackle Box (Large)", price: 45.9, id: "tackle-box" },
      { name: "Bait Bucket", price: 18.5, id: "bait-bucket" },
      { name: "Cooler (20L)", price: 85.0, id: "cooler-20l" },
      { name: "Rod Holder", price: 28.9, id: "rod-holder" },
      { name: "Landing Net", price: 35.5, id: "landing-net" },
      { name: "Fish Stringer", price: 8.9, id: "fish-stringer" },
    ],
  },
  {
    category: "Tools & Accessories",
    items: [
      { name: "Fishing Pliers", price: 22.9, id: "pliers" },
      { name: "Hook Remover Tool", price: 9.5, id: "hook-remover" },
      { name: "Fillet Knife", price: 38.9, id: "fillet-knife" },
      { name: "Digital Scale", price: 45.0, id: "digital-scale" },
      { name: "LED Headlamp", price: 28.5, id: "headlamp" },
      { name: "Polarized Sunglasses", price: 55.9, id: "sunglasses" },
      { name: "Fishing Hat", price: 18.9, id: "fishing-hat" },
      { name: "Sunscreen SPF50", price: 12.5, id: "sunscreen" },
    ],
  },
  {
    category: "Safety & Comfort",
    items: [
      { name: "Life Jacket", price: 68.9, id: "life-jacket" },
      { name: "First Aid Kit", price: 25.5, id: "first-aid" },
      { name: "Folding Chair", price: 45.0, id: "folding-chair" },
      { name: "Fishing Umbrella", price: 35.9, id: "umbrella" },
      { name: "Insect Repellent", price: 8.9, id: "repellent" },
      { name: "Waterproof Bag", price: 22.5, id: "waterproof-bag" },
      { name: "Weather Radio", price: 42.9, id: "weather-radio" },
    ],
  },
]

const pickupLocations = [
  {
    name: "Pekan Fishing Center",
    address: "Jalan Sultan Ahmad, 26600 Pekan, Pahang",
    landmark: "Near Pekan Royal Town",
    hours: "8:00 AM - 6:00 PM",
    phone: "+60 9-422-1234",
  },
  {
    name: "Pahang River Tackle Shop",
    address: "Jalan Tengku Arif Bendahara, 26600 Pekan, Pahang",
    landmark: "Along Pahang River",
    hours: "7:00 AM - 7:00 PM",
    phone: "+60 9-422-5678",
  },
  {
    name: "Pekan Marina Store",
    address: "Jalan Pantai, 26600 Pekan, Pahang",
    landmark: "Near Pekan Jetty",
    hours: "6:00 AM - 8:00 PM",
    phone: "+60 9-422-9012",
  },
  {
    name: "Royal Fishing Supplies",
    address: "Jalan Istana Abu Bakar, 26600 Pekan, Pahang",
    landmark: "Near Sultan Abu Bakar Museum",
    hours: "9:00 AM - 5:00 PM",
    phone: "+60 9-422-3456",
  },
]

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function Component() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [cart, setCart] = useState<CartItem[]>([])
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    notes: "",
  })

  const handleItemCheck = (itemName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }))
  }

  const addToCart = (item: { name: string; price: number; id: string }) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert("Please add items to your cart before placing an order.")
      return
    }
    console.log("Order submitted:", { orderData, cart, total: getCartTotal() })
    alert("Order placed successfully! You will receive a confirmation email with pickup details.")
    setCart([])
    setOrderData({
      name: "",
      email: "",
      phone: "",
      pickupLocation: "",
      pickupDate: "",
      pickupTime: "",
      notes: "",
    })
  }

  const selectedLocation = pickupLocations.find((location) => location.name === orderData.pickupLocation)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-10 py-8">
        {/* Header */}
        <Link href={"/tourist/dashboard/result"}>
        <Button>
            Back To Summary
        </Button>
        </Link>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pekan Fishing Gear Store</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete fishing gear checklist with online ordering. Pick up your gear in Pekan, Pahang when you arrive for
            your fishing adventure.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Serving Pekan, Pahang - The Royal Fishing Town</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gear Catalog */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                  Fishing Gear Catalog
                </CardTitle>
                <CardDescription>
                  Browse our complete fishing gear collection. Check items off your list and add to cart for pickup in
                  Pekan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {fishingGearCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{category.category}</h3>
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3 flex-1">
                            <Checkbox
                              id={`${categoryIndex}-${itemIndex}`}
                              checked={checkedItems[item.name] || false}
                              onCheckedChange={() => handleItemCheck(item.name)}
                            />
                            <div className="flex-1">
                              <Label
                                htmlFor={`${categoryIndex}-${itemIndex}`}
                                className={`text-sm font-medium ${
                                  checkedItems[item.name] ? "line-through text-gray-500" : "text-gray-700"
                                }`}
                              >
                                {item.name}
                              </Label>
                              <p className="text-sm text-gray-500">RM {item.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <Button size="sm" onClick={() => addToCart(item)} className="bg-blue-600 hover:bg-blue-700">
                            Add to Cart
                          </Button>
                        </div>
                      ))}
                    </div>
                    {categoryIndex < fishingGearCategories.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Cart and Order Section */}
          <div className="space-y-6">
            {/* Shopping Cart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Shopping Cart
                  </span>
                  <Badge variant="secondary">{getCartItemCount()} items</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">RM {item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>RM {getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card>
              <CardHeader>
                <CardTitle>Place Order for Pickup</CardTitle>
                <CardDescription>Fill in your details for gear pickup in Pekan, Pahang</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={orderData.name}
                      onChange={(e) => setOrderData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Ahmad bin Abdullah"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={orderData.email}
                      onChange={(e) => setOrderData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="ahmad@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={orderData.phone}
                      onChange={(e) => setOrderData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="012-345-6789"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="pickupLocation">Pickup Location in Pekan</Label>
                    <Select onValueChange={(value) => setOrderData((prev) => ({ ...prev, pickupLocation: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pickup location" />
                      </SelectTrigger>
                      <SelectContent>
                        {pickupLocations.map((location, index) => (
                          <SelectItem key={index} value={location.name}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedLocation && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium">{selectedLocation.name}</p>
                      <p className="text-xs text-gray-600">{selectedLocation.address}</p>
                      <p className="text-xs text-gray-600">📍 {selectedLocation.landmark}</p>
                      <p className="text-xs text-gray-600">🕒 {selectedLocation.hours}</p>
                      <p className="text-xs text-gray-600">📞 {selectedLocation.phone}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pickupDate">Pickup Date</Label>
                      <Input
                        id="pickupDate"
                        type="date"
                        value={orderData.pickupDate}
                        onChange={(e) => setOrderData((prev) => ({ ...prev, pickupDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pickupTime">Preferred Time</Label>
                      <Select onValueChange={(value) => setOrderData((prev) => ({ ...prev, pickupTime: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Special Notes</Label>
                    <Textarea
                      id="notes"
                      value={orderData.notes}
                      onChange={(e) => setOrderData((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Any special requests, fishing location plans, or notes..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Place Order (RM {getCartTotal().toFixed(2)})
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Pickup Locations Info */}
            <Card>
              <CardHeader>
                <CardTitle>Pickup Locations in Pekan</CardTitle>
                <CardDescription>Choose from 4 convenient pickup points in Pekan, Pahang</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pickupLocations.map((location, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">{location.name}</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      <p className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {location.address}
                      </p>
                      <p>📍 {location.landmark}</p>
                      <p className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {location.hours}
                      </p>
                      <p className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {location.phone}
                      </p>
                    </div>
                    {index < pickupLocations.length - 1 && <Separator className="mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Need help with your order?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">+60 9-422-0000 (Main Office)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">orders@pekanfishing.my</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Pekan, Pahang - Royal Fishing Town</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Daily: 6:00 AM - 8:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
