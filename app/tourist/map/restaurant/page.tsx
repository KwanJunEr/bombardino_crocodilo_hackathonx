"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Clock, Users, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function RestaurantPage() {
  const [selectedFish, setSelectedFish] = useState("");
  const router = useRouter();

  const handleBooking = () => {
    router.push("/tourist/map/restaurant/booking");
  };

  const reviews = [
    {
      id: 1,
      name: "Ahmad Rahman",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment:
        "Amazing ikan curry! They cooked my patin perfectly. The spices were incredible.",
      platform: "Google Reviews",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Sarah Lim",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      comment:
        "Great service and the curry was delicious. Will definitely bring my catch here again!",
      platform: "TripAdvisor",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Raj Kumar",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment:
        "Best place to cook your fresh catch. The ikan curry is a must-try!",
      platform: "Yelp",
      date: "2 weeks ago",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Restoran Alif & De Alif Curry House
              </h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>91, Pekan, Pahang</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+013-993 5354</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                {renderStars(4)}
                <span className="ml-2 text-sm font-medium">
                  4.8 (324 reviews)
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Open until 10 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Moderate crowd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let Restaurants Cook Your Hard-Earned Caught Fish
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bring your fresh catch and let our expert chefs transform it into a
            culinary masterpiece. We specialize in traditional and modern fish
            preparations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Fish Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🐟 Recent Caught Fish
                </CardTitle>
                <CardDescription>
                  Select the fish you&apos;d like us to prepare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedFish} onValueChange={setSelectedFish}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your fish" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ikan-patin">
                      Ikan Patin (Asian Catfish)
                    </SelectItem>
                    <SelectItem value="ikan-tenggiri">
                      Ikan Tenggiri (Spanish Mackerel)
                    </SelectItem>
                    <SelectItem value="ikan-kembung">
                      Ikan Kembung (Indian Mackerel)
                    </SelectItem>
                    <SelectItem value="ikan-siakap">
                      Ikan Siakap (Sea Bass)
                    </SelectItem>
                    <SelectItem value="ikan-merah">
                      Ikan Merah (Red Snapper)
                    </SelectItem>
                    <SelectItem value="ikan-bawal">
                      Ikan Bawal (Pomfret)
                    </SelectItem>
                  </SelectContent>
                </Select>

                {selectedFish && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">
                      Great choice!
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      {selectedFish === "ikan-patin" &&
                        "Ikan Patin is perfect for curry preparations with its tender, flaky meat."}
                      {selectedFish === "ikan-tenggiri" &&
                        "Spanish Mackerel has a rich flavor that works wonderfully in spicy dishes."}
                      {selectedFish === "ikan-kembung" &&
                        "Indian Mackerel is excellent for traditional curry recipes."}
                      {selectedFish === "ikan-siakap" &&
                        "Sea Bass has a delicate flavor perfect for aromatic curries."}
                      {selectedFish === "ikan-merah" &&
                        "Red Snapper creates an exceptional curry with its firm texture."}
                      {selectedFish === "ikan-bawal" &&
                        "Pomfret is ideal for rich, coconut-based curry preparations."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Curry Recommendation */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      🍛 Chef&apos;s Special: Ikan Curry
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Our signature dish - highly recommended by customers
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    Chef&apos;s Special
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Image
                      src="/ikancurry.jpg?height=300&width=400"
                      alt="Ikan Curry"
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">{renderStars(5)}</div>
                      <span className="font-semibold text-lg">4.9/5</span>
                      <span className="text-gray-600">(156 reviews)</span>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Our signature ikan curry features your fresh catch
                      simmered in a rich, aromatic blend of coconut milk,
                      lemongrass, galangal, and traditional spices. The curry is
                      slow-cooked to perfection, allowing the fish to absorb all
                      the complex flavors while maintaining its tender texture.
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Coconut Milk Base</Badge>
                        <Badge variant="outline">Traditional Spices</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Lemongrass</Badge>
                        <Badge variant="outline">Galangal</Badge>
                        <Badge variant="outline">Kaffir Lime</Badge>
                      </div>
                    </div>

                    <div className="text-2xl font-bold text-green-600 mb-4">
                      $28.00
                      <span className="text-sm font-normal text-gray-600 ml-2">
                        (cooking fee + ingredients)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Customer Reviews
                  </h3>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                            />
                            <AvatarFallback>
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{review.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {review.platform}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                {review.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-gray-700 text-sm">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="mt-8 text-center">
                  <Button
                    onClick={handleBooking}
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                  >
                    Book This Restaurant
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    Reserve your table and bring your fresh catch!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
