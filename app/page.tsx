"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Fish,
  MapPin,
  Users,
  Camera,
  ShoppingCart,
  Shield,
  Trophy,
  Hotel,
  Anchor,
  Heart,
  Play,
  ChevronRight,
  Waves,
  Star,
  Globe,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

export default function PekanHookedLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Welcome to Pekan's Premier Fishing Tourism Hub",
      subtitle: "Discover Malaysia's Hidden Fishing Paradise",
      description:
        "Experience world-class fishing in the pristine waters of Pekan, Pahang - where tradition meets modern fishing tourism",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Start Exploring",
    },
    {
      title: "Pekan: Where Rivers Meet the Sea",
      subtitle: "UNESCO Biosphere Reserve Waters",
      description:
        "Fish in the legendary Pahang River and coastal waters, home to over 200 species including the prized Kelah and Toman",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Discover Fishing Spots",
    },
    {
      title: "Complete Fishing Tourism Experience",
      subtitle: "From Planning to Plate",
      description:
        "Book accommodations, rent boats, buy gear, and enjoy fresh catches at local restaurants - all in one platform",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Join Our Community",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Connect with Local Anglers",
      description:
        "Join our verified community of fishing enthusiasts and connect with experienced local guides in Pekan",
    },
    {
      icon: Hotel,
      title: "Fishing Tourism Packages",
      description: "Discover curated fishing tourism packages with accommodations near the best fishing spots in Pekan",
    },
    {
      icon: ShoppingCart,
      title: "Local Fishing Gear",
      description: "Shop for authentic Malaysian fishing equipment and get recommendations from local fishing experts",
    },
    {
      icon: Anchor,
      title: "Traditional Boat Experiences",
      description: "Experience traditional Malaysian fishing with authentic boats operated by local fishing families",
    },
    {
      icon: MapPin,
      title: "Interactive Fishing Tourism Map",
      description:
        "Explore detailed maps of Pekan's fishing spots with tide charts, weather forecasts, and local insights",
    },
    {
      icon: Camera,
      title: "Fish Species Recognition",
      description:
        "Learn about local fish species, contribute to conservation, and earn rewards for sustainable fishing",
    },
    {
      icon: Shield,
      title: "Safety & Emergency Support",
      description: "Stay safe with our emergency network connecting you with local fishing communities and authorities",
    },
    {
      icon: Trophy,
      title: "Fishing Tournaments & Events",
      description: "Participate in local fishing competitions and cultural events celebrating Pekan's fishing heritage",
    },
  ]

  const stats = [
    { number: "500+", label: "Fishing Spots Mapped" },
    { number: "10K+", label: "Tourism Visitors" },
    { number: "50+", label: "Partner Accommodations" },
    { number: "200+", label: "Fish Species Documented" },
  ]

  const fishingSpots = [
    {
      name: "Pahang River Estuary",
      description: "Famous for Toman and Kelah fishing, where the river meets the South China Sea",
      difficulty: "Beginner Friendly",
      bestTime: "Early Morning",
    },
    {
      name: "Pekan Royal Town Waters",
      description: "Historic fishing grounds near the royal palace with diverse freshwater species",
      difficulty: "Intermediate",
      bestTime: "Dawn & Dusk",
    },
    {
      name: "Coastal Mangrove Areas",
      description: "Rich ecosystem perfect for saltwater fishing and eco-tourism experiences",
      difficulty: "Advanced",
      bestTime: "High Tide",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Navigation */}
      

      {/* Hero Carousel */}
      <section className="relative">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative min-h-screen flex items-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 z-10" />
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-80"
                    priority={index === 0}
                  />
                  <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl text-white">
                      <Badge className="mb-6 bg-gradient-to-r from-blue-500/30 to-green-500/30 text-blue-100 border-blue-300 text-lg px-4 py-2">
                        {slide.subtitle}
                      </Badge>
                      <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-white">{slide.title}</h1>
                      <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-green-700 text-lg px-10 py-4 shadow-xl"
                        >
                          <Play className="h-5 w-5 mr-2" />
                          {slide.cta}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-4 backdrop-blur-sm"
                        >
                          Learn More
                          <ChevronRight className="h-5 w-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
          <CarouselNext className="right-6 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pekan Fishing Tourism by the Numbers</h2>
            <p className="text-blue-100 text-lg">Discover why Pekan is Malaysia's premier fishing destination</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction to Pekan Fishing */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-lg px-4 py-2">
                Fishing Tourism Heritage
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Pekan: Malaysia's Royal Fishing Capital
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nestled in Pahang, Malaysia, Pekan is where the mighty Pahang River meets the South China Sea, creating
                one of Southeast Asia's most diverse fishing ecosystems. As the royal town of Pahang, Pekan has
                preserved centuries-old fishing traditions while embracing modern sustainable tourism.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Waves className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">UNESCO Biosphere Waters</h3>
                    <p className="text-gray-600">
                      Fish in protected waters that are part of the Tasek Bera Biosphere Reserve
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Fish className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rich Biodiversity</h3>
                    <p className="text-gray-600">
                      Home to over 200 fish species including the legendary Malaysian Mahseer (Kelah)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
                    <p className="text-gray-600">
                      Experience traditional Malay fishing techniques passed down through generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-2xl transform rotate-3"></div>
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Pekan fishing heritage"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fishing Spots */}
      <section id="fishing-spots" className="py-24 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-lg px-4 py-2">
              Prime Fishing Locations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Discover Pekan's Legendary Fishing Spots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the royal waters near the palace to the pristine river estuaries, each location offers unique fishing
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fishingSpots.map((spot, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg mb-4 relative overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=300" alt={spot.name} fill className="object-cover" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800">{spot.difficulty}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{spot.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4 leading-relaxed">
                    {spot.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Best: {spot.bestTime}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-lg px-4 py-2">
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Your Complete Fishing Tourism Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need for an unforgettable fishing tourism experience in Pekan, all in one comprehensive
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Experience Section */}
      <section
        id="tourism"
        className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/20 text-white text-lg px-4 py-2">Complete Tourism Experience</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">From Arrival to Departure</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Experience the complete fishing tourism journey with our integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Plan & Book</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-blue-100 text-lg leading-relaxed">
                  Discover fishing spots, book accommodations, arrange transportation, and plan your perfect fishing
                  tourism itinerary
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Fish className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Fish & Explore</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-blue-100 text-lg leading-relaxed">
                  Experience world-class fishing, learn local techniques, participate in conservation, and explore
                  Pekan's natural beauty
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Savor & Share</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-blue-100 text-lg leading-relaxed">
                  Enjoy fresh catches at local restaurants, share your experiences, and contribute to sustainable
                  fishing tourism
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Experience Pekan's Fishing Paradise?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of fishing enthusiasts who have discovered the magic of Pekan's waters. Start planning your
            fishing tourism adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-4 shadow-xl">
              <Globe className="h-6 w-6 mr-3" />
              Join Our Platform
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-4 backdrop-blur-sm"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  )
}
