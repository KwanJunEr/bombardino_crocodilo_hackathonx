"use client"

import { useState } from "react"
import { Wifi, DollarSign, MapPin, Car, Utensils, Waves, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { TripData } from "@/app/tourist/dashboard/setup/page"

interface AccommodationPreferencesProps {
  tripData: TripData
  updateTripData: (data: Partial<TripData>) => void
  onNext: () => void
  onPrev: () => void
}

const preferenceOptions = [
  { id: "affordable", label: "Affordable pricing", icon: DollarSign },
  { id: "wifi", label: "Free WiFi", icon: Wifi },
  { id: "fishing-spots", label: "Near fishing spots", icon: Waves },
  { id: "parking", label: "Free parking", icon: Car },
  { id: "restaurant", label: "On-site restaurant", icon: Utensils },
  { id: "location", label: "Central location", icon: MapPin },
]

export function AccommodationPreferences({ tripData, updateTripData, onNext, onPrev }: AccommodationPreferencesProps) {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(tripData.accommodationPreferences)
  const [customPreference, setCustomPreference] = useState("")

  const handlePreferenceChange = (preferenceId: string, checked: boolean) => {
    setSelectedPreferences((prev) => (checked ? [...prev, preferenceId] : prev.filter((id) => id !== preferenceId)))
  }

  const addCustomPreference = () => {
    if (customPreference.trim()) {
      setSelectedPreferences((prev) => [...prev, customPreference.trim()])
      setCustomPreference("")
    }
  }

  const handleNext = () => {
    updateTripData({ accommodationPreferences: selectedPreferences })
    onNext()
  }

  const handleSkip = () => {
    updateTripData({ accommodationPreferences: [] })
    onNext()
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Accommodation Preferences</h2>
        <p className="text-gray-600">Tell us what's important to you for your stay</p>
        <p className="text-sm text-gray-500 mt-1">You can skip this step if you prefer to see all options</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are you looking for in accommodation?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {preferenceOptions.map((option) => {
              const IconComponent = option.icon
              return (
                <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <Checkbox
                    id={option.id}
                    checked={selectedPreferences.includes(option.id)}
                    onCheckedChange={(checked) => handlePreferenceChange(option.id, checked as boolean)}
                  />
                  <IconComponent className="w-5 h-5 text-blue-500" />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              )
            })}
          </div>

          <div className="border-t pt-4">
            <Label htmlFor="custom-preference" className="text-sm font-medium">
              Add custom preference
            </Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="custom-preference"
                placeholder="e.g., Pet-friendly, Pool access..."
                value={customPreference}
                onChange={(e) => setCustomPreference(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addCustomPreference()}
              />
              <Button onClick={addCustomPreference} variant="outline">
                Add
              </Button>
            </div>
          </div>

          {selectedPreferences.length > 0 && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Your selected preferences:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPreferences.map((pref) => {
                  const option = preferenceOptions.find((opt) => opt.id === pref)
                  return (
                    <span key={pref} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {option ? option.label : pref}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleSkip} className="flex items-center gap-2">
            <SkipForward className="w-4 h-4" />
            Skip & See All Hotels
          </Button>
          <Button onClick={handleNext}>Find Hotels</Button>
        </div>
      </div>
    </div>
  )
}
