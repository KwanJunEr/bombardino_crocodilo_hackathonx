import React from 'react'
import {  Waves, Fish, Heart} from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'

const AboutSection = () => {
  return (
      <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50 px-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-lg px-4 py-2">
                Fishing Tourism Heritage
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Pekan: Malaysia  Royal Fishing Capital
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nestled in Pahang, Malaysia, Pekan is where the mighty Pahang River meets the South China Sea, creating
                one of Southeast Asia  most diverse fishing ecosystems. As the royal town of Pahang, Pekan has
                preserved centuries-old fishing traditions while embracing modern sustainable tourism.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Waves className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">UNESCO Biosphere Waters</h3>
                    <p className="text-gray-600">
                      Fish in protected waters that are part of the Tasek Bera Biosphere Reserve
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Fish className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rich Biodiversity</h3>
                    <p className="text-gray-600">
                      Home to over 200 fish species including the legendary Malaysian Mahseer (Kelah)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
                    <p className="text-gray-600">
                      Experience traditional Malay fishing techniques passed down through generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-2xl transform rotate-3"></div>
              <Image
                src="/fishyum.jpg?height=600&width=700"
                alt="Pekan fishing heritage"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
