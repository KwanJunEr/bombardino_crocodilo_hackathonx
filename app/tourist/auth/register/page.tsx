"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Fish, FileText } from "lucide-react"
import { PersonalInfoStep } from "@/components/Register/PersonalInfoStep"
import { FishingProfileStep } from "@/components/Register/FishingProfileStep"
import { DocumentVerificationStep } from "@/components/Register/DocumentVerification"
import { CompletionAnimation } from "@/components/Register/CompletionAnimation"
import { ProgressIndicator } from "@/components/Register/ProgressIndicator"

interface FormData {
  // Step 1
  name: string
  email: string
  dateOfBirth: Date | undefined
  address: string
  phone: string
  password: string

  // Step 2
  fishingExperience: string
  preferredFish: string
  fishingFrequency: string
  howDidYouKnow: string

  // Step 3
  personalId: File | null
  fishingLicense: File | null
}

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isCompleting, setIsCompleting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    dateOfBirth: undefined,
    address: "",
    phone: "",
    password: "",
    fishingExperience: "",
    preferredFish: "",
    fishingFrequency: "",
    howDidYouKnow: "",
    personalId: null,
    fishingLicense: null,
  })

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeRegistration = async () => {
    setIsCompleting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsCompleting(false)
    setIsCompleted(true)

    // Redirect to dashboard after animation
    setTimeout(() => {
      window.location.href = "/dashboard"
    }, 4000)
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information"
      case 2:
        return "Fishing Profile"
      case 3:
        return "Document Verification"
      default:
        return ""
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Tell us about yourself to get started with your fishing journey"
      case 2:
        return "Share your fishing preferences and experience to personalize your profile"
      case 3:
        return "Upload required documents to complete your profile verification"
      default:
        return ""
    }
  }

  const getStepIcon = () => {
    switch (currentStep) {
      case 1:
        return User
      case 2:
        return Fish
      case 3:
        return FileText
      default:
        return User
    }
  }

  if (isCompleting || isCompleted) {
    return <CompletionAnimation isCompleting={isCompleting} isCompleted={isCompleted} />
  }

  const StepIcon = getStepIcon()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Join Pekan Hooked</h1>
          <p className="text-xl text-gray-600">Create An Account To Explore Fishing Tourisn in Pekan through  Our Platform </p>
        </div>

        <ProgressIndicator currentStep={currentStep} />

        <Card className="shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <StepIcon className="w-7 h-7 text-blue-500" />
              {getStepTitle()}
            </CardTitle>
            <CardDescription className="text-base">{getStepDescription()}</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <PersonalInfoStep key="step1" formData={formData} updateFormData={updateFormData} onNext={nextStep} />
              )}

              {currentStep === 2 && (
                <FishingProfileStep
                  key="step2"
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}

              {currentStep === 3 && (
                <DocumentVerificationStep
                  key="step3"
                  formData={formData}
                  updateFormData={updateFormData}
                  onComplete={completeRegistration}
                  onPrev={prevStep}
                />
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>By registering, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
