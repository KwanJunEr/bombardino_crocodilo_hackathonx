"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FishingProfileStepProps {
  formData: {
    fishingExperience: string
    preferredFish: string
    fishingFrequency: string
    howDidYouKnow: string
  }
  updateFormData: any
  onNext: () => void
  onPrev: () => void
}

export function FishingProfileStep({ formData, updateFormData, onNext, onPrev }: FishingProfileStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Fishing Experience</Label>
          <Select
            value={formData.fishingExperience}
            onValueChange={(value) => updateFormData("fishingExperience", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
              <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
              <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
              <SelectItem value="expert">Expert (10+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Preferred Fish Types</Label>
          <Select value={formData.preferredFish} onValueChange={(value) => updateFormData("preferredFish", value)}>
            <SelectTrigger>
              <SelectValue placeholder="What fish do you like to catch?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ikan-patin">Ikan Patin</SelectItem>
              <SelectItem value="ikan-keli">Ikan Keli</SelectItem>
              <SelectItem value="ikan-tilapia">Ikan Tilapia</SelectItem>
              <SelectItem value="ikan-baung">Ikan Baung</SelectItem>
              <SelectItem value="ikan-haruan">Ikan Haruan</SelectItem>
              <SelectItem value="ikan-tenggiri">Ikan Tenggiri</SelectItem>
              <SelectItem value="mixed">Mixed Species</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Fishing Frequency</Label>
          <Select
            value={formData.fishingFrequency}
            onValueChange={(value) => updateFormData("fishingFrequency", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="How often do you go fishing?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
              <SelectItem value="monthly">Once per month</SelectItem>
              <SelectItem value="quarterly">Every 3 months</SelectItem>
              <SelectItem value="occasionally">Occasionally</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>How did you know about Pekan's Fishing?</Label>
          <Select value={formData.howDidYouKnow} onValueChange={(value) => updateFormData("howDidYouKnow", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select how you heard about us" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="friend-referral">Friend Referral</SelectItem>
              <SelectItem value="google-search">Google Search</SelectItem>
              <SelectItem value="fishing-forum">Fishing Forum</SelectItem>
              <SelectItem value="local-community">Local Community</SelectItem>
              <SelectItem value="advertisement">Advertisement</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Why we ask this information:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Help us recommend the best fishing spots for your skill level</li>
          <li>• Connect you with anglers who share similar interests</li>
          <li>• Provide personalized fishing tips and techniques</li>
          <li>• Improve our community and services</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} size="lg">
          Previous
        </Button>
        <Button onClick={onNext} size="lg">
          Next Step
        </Button>
      </div>
    </motion.div>
  )
}
