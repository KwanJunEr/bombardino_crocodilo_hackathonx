"use client";
import { AccommodationPreferences } from '@/components/Setup/AccomodationPreferences'
import { BookingProcess } from '@/components/Setup/BookingProcess'
import DateDurationStep from '@/components/Setup/DateDurationStep'
import { GroupPreferenceStep } from '@/components/Setup/GroupPreferenceStep'
import { HotelDetails } from '@/components/Setup/HotelDetails'
import { HotelRecommendations } from '@/components/Setup/HotelRecommendation'
import { MatchFoundStep } from '@/components/Setup/MatchFoundStep'
import { MatchingAnimation } from '@/components/Setup/MatchingAnimation'
import { StepIndicator } from '@/components/Setup/StepIndicator'
import React, { useState } from 'react'


export type TripData = {
  startDate: string
  endDate: string
  duration: number
  groupPreference: "solo" | "group" | null
  matchedGroup?: {
    guide: { name: string; experience: string; rating: number }
    members: Array<{ name: string; level: string; avatar: string }>
  }
  accommodationPreferences: string[]
  selectedHotel?: {
    id: string
    name: string
    price: number
    rating: number
    amenities: string[]
  }
}

const TOTAL_STEPS = 8

const Setup = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [tripData, setTripData] = useState<TripData>({
    startDate: "",
    endDate: "",
    duration: 0,
    groupPreference: null,
    accommodationPreferences: [],
    })
    //It increases the step by 1 but makes sure it doesn’t go beyond TOTAL_STEPS.
    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
    const prevStep = () => setCurrentStep((prev)=> Math.max(prev - 1,1))
    const updateTripData = (data: Partial<TripData>) => {
    setTripData((prev) => ({ ...prev, ...data }))
    }

    const renderStep = ()=>{
        switch(currentStep){
            case 1:
        return <DateDurationStep tripData={tripData} updateTripData={updateTripData} onNext={nextStep} />
      case 2:
        return (
          <GroupPreferenceStep
            tripData={tripData}
            updateTripData={updateTripData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 3:
        return <MatchingAnimation onComplete={nextStep} />
      case 4:
        return (
          <MatchFoundStep tripData={tripData} updateTripData={updateTripData} onNext={nextStep} onPrev={prevStep} />
        )
      case 5:
        return (
          <AccommodationPreferences
            tripData={tripData}
            updateTripData={updateTripData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 6:
        return (
          <HotelRecommendations
            tripData={tripData}
            updateTripData={updateTripData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 7:
        return <HotelDetails tripData={tripData} onNext={nextStep} onPrev={prevStep} />
      case 8:
        return <BookingProcess onComplete={nextStep} />
     
      default:
        return null
        }
    }
  return (
    <div className='min-h-screen mx-auto container px-8 py-8'>
      <div className='max-w-4xl mx-auto'>
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        <div className="mt-8">{renderStep()}</div>
      </div>
    </div>
  )
}

export default Setup
