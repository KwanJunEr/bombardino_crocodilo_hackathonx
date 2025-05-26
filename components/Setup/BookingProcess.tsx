"use client"

import { useEffect, useState } from "react"
import { Bot, CreditCard, Calendar, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface BookingProcessProps {
  onComplete: () => void
}

export function BookingProcess({ onComplete }: BookingProcessProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const steps = [
    { icon: CreditCard, text: "Processing payment...", duration: 3000 },
    { icon: Calendar, text: "Confirming availability...", duration: 2000 },
    { icon: Bot, text: "AI agent securing your reservation...", duration: 2500 },
    { icon: CheckCircle, text: "Booking confirmed!", duration: 1000 },
  ]

  useEffect(() => {
    if (isComplete) return

    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1)
        setProgress(0)
      } else {
        setIsComplete(true)
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
  }, [currentStep, isComplete])

  const CurrentIcon = steps[currentStep].icon

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{isComplete ? "Booking Complete!" : "Securing Your Booking"}</CardTitle>
        <p className="text-gray-600">
          {isComplete
            ? "Your reservation has been successfully confirmed"
            : "Our AI agent is working to finalize your reservation"}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <CurrentIcon className={`w-10 h-10 ${isComplete ? "text-green-500" : "text-blue-500"}`} />
            </div>
            {!isComplete && (
              <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-blue-200 rounded-full animate-spin border-t-blue-500" />
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{steps[currentStep].text}</h3>
            {!isComplete && <Progress value={progress} className="w-full max-w-md mx-auto" />}
          </div>
        </div>

        {/* AI Agent Messages */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <Bot className="w-6 h-6 text-blue-500 mt-1" />
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm">Contacting Pekan Riverside Resort...</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">2 minutes ago</span>
                </div>
              </div>

              {currentStep >= 1 && (
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Availability confirmed for your dates ✓</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">1 minute ago</span>
                  </div>
                </div>
              )}

              {currentStep >= 2 && (
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Negotiating best rate for your group...</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">30 seconds ago</span>
                  </div>
                </div>
              )}

              {currentStep >= 3 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800">
                    🎉 Reservation secured! Confirmation details sent to your email.
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-600">Just now</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between text-xs text-gray-500">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center ${index <= currentStep ? "text-blue-600" : ""}`}>
              <step.icon className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">{step.text.split("...")[0]}</span>
            </div>
          ))}
        </div>

        {/* Confirm Button */}
        {isComplete && (
          <div className="text-center pt-4">
            <Button onClick={onComplete} size="lg" className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-5 h-5 mr-2" />
              Confirm & View Summary
            </Button>
            <p className="text-xs text-gray-500 mt-2">Click to proceed to your booking summary and trip details</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
