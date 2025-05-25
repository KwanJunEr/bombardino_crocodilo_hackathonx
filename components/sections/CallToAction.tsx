import React from 'react'
import { Button } from '../ui/button'
import { Calendar, Globe } from 'lucide-react'

const CallToAction = () => {
  return (
     <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Experience Pekan's Fishing Paradise?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of fishing enthusiasts who have discovered the magic of Pekan's waters. Start planning your
            fishing tourism adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-4 shadow-xl">
              <Globe className="h-6 w-6 mr-3" />
              Join Our Platform
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-blue-600 text-xl px-15 py-4 backdrop-blur-sm"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

  )
}

export default CallToAction
