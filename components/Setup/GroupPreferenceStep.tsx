"use client"

import { Users, User, TrendingUp, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { TripData } from "@/app/tourist/dashboard/setup/page"

interface GroupPreferenceStepProps {
  tripData: TripData
  updateTripData: (data: Partial<TripData>) => void
  onNext: () => void
  onPrev: () => void
}

export function GroupPreferenceStep({ tripData, updateTripData, onNext, onPrev }: GroupPreferenceStepProps) {
  const handleSelection = (preference: "solo" | "group") => {
    updateTripData({ groupPreference: preference })
    setTimeout(onNext, 500)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">How do you prefer to fish?</h2>
        <p className="text-gray-600">Choose your fishing style preference</p>
      </div>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-blue-700">Fishing Statistics</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">73%</div>
              <div className="text-sm text-gray-600">Fish in groups</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">27%</div>
              <div className="text-sm text-gray-600">Fish solo</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Solo Option */}
        <Card
          className={`cursor-pointer transition-all hover:shadow-lg ${
            tripData.groupPreference === "solo" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => handleSelection("solo")}
        >
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <User className="w-6 h-6 text-blue-500" />
              Solo Fishing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm">Complete freedom and flexibility</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-500" />
                <span className="text-sm">Peaceful and meditative experience</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm">Focus on personal skill development</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Group Option */}
        <Card
          className={`cursor-pointer transition-all hover:shadow-lg ${
            tripData.groupPreference === "group" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => handleSelection("group")}
        >
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              Group Fishing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <span className="text-sm">Share experiences and learn together</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm">Enhanced safety with companions</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-500" />
                <span className="text-sm">Build lasting friendships</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button onClick={onNext} disabled={!tripData.groupPreference}>
          Continue
        </Button>
      </div>
    </div>
  )
}
