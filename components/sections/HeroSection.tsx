import React from 'react'
import {Fish, Anchor, Waves, Calendar} from "lucide-react"
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80 z-10 "></div>

        {/* Floating elements animation */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 animate-bounce delay-1000">
            <Fish className="h-8 w-8 text-blue-300 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-2000">
            <Anchor className="h-6 w-6 text-teal-300 opacity-60" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
            <Waves className="h-10 w-10 text-blue-400 opacity-60" />
          </div>
        </div>

        <div
          className={`relative z-20 text-center text-white px-4 transform transition-all duration-1000 `}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300 animate-pulse">
              Pekan Waters
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience world-class fishing in the pristine waters of Pekan, Pahang. Join us for an unforgettable
            adventure where tradition meets excitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Adventure
            </Button>
           
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
