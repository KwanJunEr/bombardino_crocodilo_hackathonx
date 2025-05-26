"use client"

import { useState } from "react"
import { Star, Award, Fish, MapPin, Eye, Calendar, Trophy, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import type { TripData } from "@/app/tourist/dashboard/setup/page"

interface MatchFoundStepProps {
  tripData: TripData
  updateTripData: (data: Partial<TripData>) => void
  onNext: () => void
  onPrev: () => void
}

type Member = {
  id: string
  name: string
  level: string
  avatar: string
  location: string
  age: number
  experience: string
  favoriteSpots: string[]
  techniques: string[]
  bio: string
  joinedDate: string
  tripsCompleted: number
  rating: number
  interests: string[]
  equipment: string[]
}

export function MatchFoundStep({ tripData, updateTripData, onNext, onPrev }: MatchFoundStepProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const matchedGroup = {
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
        experience: "Level 2 Angler",
        favoriteSpots: ["Tasik Kenyir", "Pahang River", "Sungai Perak"],
        techniques: ["Fly Fishing", "Spinning", "Trolling"],
        bio: "Passionate angler who loves early morning fishing sessions. Always eager to learn new techniques and share experiences with fellow fishing enthusiasts.",
        joinedDate: "2021-03-15",
        tripsCompleted: 12,
        rating: 4.7,
        interests: ["Photography", "Nature Conservation", "Cooking Fish"],
        equipment: ["Shimano Reel", "Daiwa Rod", "Tackle Box"],
      },
      {
        id: "2",
        name: "David Kumar",
        level: "Intermediate",
        avatar: "/placeholder.svg?height=60&width=60",
        location: "Selangor",
        age: 35,
        experience: "Level 4 Angler",
        favoriteSpots: ["Klang River", "Port Dickson", "Kuala Selangor"],
        techniques: ["Bottom Fishing", "Jigging", "Live Bait"],
        bio: "Weekend warrior who enjoys both freshwater and saltwater fishing. Known for his patience and excellent fish preparation skills.",
        joinedDate: "2019-08-22",
        tripsCompleted: 18,
        rating: 4.8,
        interests: ["Equipment Reviews", "Fish Cooking", "Boat Maintenance"],
        equipment: ["Penn Reel", "St. Croix Rod", "Fish Finder"],
      },
      {
        id: "3",
        name: "Lisa Wong",
        level: "Beginner",
        avatar: "/placeholder.svg?height=60&width=60",
        location: "Penang",
        age: 26,
        experience: "Level 1 Angler",
        favoriteSpots: ["Penang Bridge", "Batu Ferringhi", "Air Itam Dam"],
        techniques: ["Basic Casting", "Float Fishing"],
        bio: "New to fishing but very enthusiastic! Looking forward to learning from experienced anglers and exploring new fishing spots.",
        joinedDate: "2023-05-10",
        tripsCompleted: 4,
        rating: 4.5,
        interests: ["Learning", "Nature Photography", "Travel"],
        equipment: ["Basic Rod Set", "Tackle Box", "Folding Chair"],
      },
      {
        id: "4",
        name: "You",
        level: "Intermediate",
        avatar: "/placeholder.svg?height=60&width=60",
        location: "Kuala Lumpur",
        age: 30,
        experience: "4 years",
        favoriteSpots: ["Various"],
        techniques: ["Multiple"],
        bio: "Your profile - ready for an amazing fishing adventure!",
        joinedDate: "2020-01-01",
        tripsCompleted: 15,
        rating: 4.6,
        interests: ["Fishing", "Adventure", "Meeting New People"],
        equipment: ["Personal Gear"],
      },
    ] as Member[],
  }

  const handleAccept = () => {
    updateTripData({ matchedGroup })
    onNext()
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-blue-100 text-blue-800"
      case "advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-2">🎉 Perfect Match Found!</h2>
        <p className="text-gray-600">We've found the ideal fishing group for your skill level and preferences</p>
      </div>

      {/* Fishing Guide */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            Your Fishing Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={matchedGroup.guide.avatar || "/placeholder.svg"} />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{matchedGroup.guide.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">{matchedGroup.guide.rating}</span>
                <span className="text-gray-600">• {matchedGroup.guide.experience} experience</span>
              </div>
              <div className="flex gap-2 mt-2">
                {matchedGroup.guide.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Group Members */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Fish className="w-5 h-5 text-blue-600" />
            Your Fishing Group (4 Members)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedGroup.members.map((member) => (
              <Card key={member.id} className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-lg truncate">{member.name}</h4>
                        {member.name === "You" && <Badge variant="outline">You</Badge>}
                      </div>
                      <div className="space-y-2">
                        <Badge className={getLevelColor(member.level)} variant="secondary">
                          {member.level}
                        </Badge>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{member.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{member.experience} </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Trophy className="w-3 h-3" />
                            <span>{member.tripsCompleted} trips completed</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{member.rating}/5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        <span>Age {member.age}</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1"
                            onClick={() => setSelectedMember(member)}
                          >
                            <Eye className="w-3 h-3" />
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={member.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  {member.name}
                                  {member.name === "You" && <Badge variant="outline">You</Badge>}
                                </div>
                                <div className="text-sm font-normal text-gray-600">{member.location}</div>
                              </div>
                            </DialogTitle>
                          </DialogHeader>

                          <div className="space-y-6">
                            {/* Basic Info */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-lg font-bold text-blue-600">{member.age}</div>
                                <div className="text-xs text-gray-600">Age</div>
                              </div>
                              <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-lg font-bold text-green-600">{member.experience}</div>
                                <div className="text-xs text-gray-600">Experience</div>
                              </div>
                              <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-lg font-bold text-purple-600">{member.tripsCompleted}</div>
                                <div className="text-xs text-gray-600">Trips</div>
                              </div>
                              <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-lg font-bold text-yellow-600">{member.rating}</div>
                                <div className="text-xs text-gray-600">Rating</div>
                              </div>
                            </div>

                            {/* Bio */}
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Heart className="w-4 h-4 text-red-500" />
                                About
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>

                            <Separator />

                            {/* Fishing Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">Favorite Fishing Spots</h4>
                                <div className="space-y-2">
                                  {member.favoriteSpots.map((spot, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                      <MapPin className="w-3 h-3 text-blue-500" />
                                      <span className="text-sm">{spot}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3">Fishing Techniques</h4>
                                <div className="flex flex-wrap gap-2">
                                  {member.techniques.map((technique, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {technique}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Separator />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">Interests</h4>
                                <div className="flex flex-wrap gap-2">
                                  {member.interests.map((interest, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {interest}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3">Equipment</h4>
                                <div className="space-y-1">
                                  {member.equipment.map((item, index) => (
                                    <div key={index} className="text-sm text-gray-600">
                                      • {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Separator />

                            <div className="text-center text-xs text-gray-500">
                              Member since{" "}
                              {new Date(member.joinedDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                              })}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Group Benefits */}
      <Card className="bg-blue-50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Why this group is perfect for you:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Similar skill levels (Beginner-Intermediate)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Compatible age range (26-35)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>High group rating (4.6+ average)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <div className="space-x-3">
          <Button variant="outline">Find Different Group</Button>
          <Button onClick={handleAccept} className="bg-green-600 hover:bg-green-700">
            Accept This Group
          </Button>
        </div>
      </div>
    </div>
  )
}
