"use client"

import { useEffect, useState } from "react"
import { Search, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MatchingAnimationProps {
  onComplete: () => void
}

export function MatchingAnimation({ onComplete }: MatchingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    { icon: Search, text: "Searching for compatible anglers...", duration: 2000 },
    { icon: Target, text: "Matching skill levels...", duration: 1500 },
    { icon: Users, text: "Creating your fishing group...", duration: 1500 },
    { icon: CheckCircle, text: "Perfect match found!", duration: 1000 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1)
        setProgress(0)
      } else {
        setTimeout(onComplete, 1000)
      }
    }, steps[currentStep].duration)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (steps[currentStep].duration / 50)
        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [currentStep, onComplete])

  const CurrentIcon = steps[currentStep].icon

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <CurrentIcon className="w-12 h-12 text-blue-500 animate-pulse" />
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-blue-200 rounded-full animate-spin border-t-blue-500" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Finding Your Perfect Match</h2>
            <p className="text-lg text-gray-600">{steps[currentStep].text}</p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-blue-600">150+</div>
              <div className="text-gray-600">Active Anglers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-green-600">98%</div>
              <div className="text-gray-600">Match Success</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-purple-600">4.8★</div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-orange-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
