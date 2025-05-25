"use client"

import { Progress } from "@/components/ui/progress"
import { User, Fish, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressIndicatorProps {
  currentStep: number
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Fishing Profile", icon: Fish },
    { number: 3, title: "Verification", icon: FileText },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = step.number <= currentStep
          const isCurrent = step.number === currentStep

          return (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-300",
                    isActive ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 text-gray-400 border-gray-200",
                    isCurrent && "ring-4 ring-blue-100 scale-110",
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    "text-xs font-medium mt-2 transition-colors",
                    isActive ? "text-blue-600" : "text-gray-400",
                  )}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-1 mx-4 rounded transition-colors duration-300",
                    step.number < currentStep ? "bg-blue-500" : "bg-gray-200",
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
      <Progress value={(currentStep / 3) * 100} className="h-2" />
    </div>
  )
}
