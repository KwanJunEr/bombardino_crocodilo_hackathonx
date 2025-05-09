"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { motion } from "framer-motion";

const AdminHeroSection = () => {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(()=>{
    setIsVisible(true)
  })
  return (
    <section className='relative overflow-hidden'>
        <div className="absolute inset-0 z-0">
          
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-teal-400 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-block p-2 bg-white/30 backdrop-blur-sm rounded-full"
            >
              <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium">
                AI-Powered Tourism Analytics for Pekan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Transform Pekan Tourism with <span className="text-blue-600">Data-Driven</span> Insights
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-700 mb-10"
            >
              Empower government officials and tourist spot owners with AI analytics to enhance visitor experiences and
              boost tourism economy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Access Dashboard
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
    </section>
  )
}

export default AdminHeroSection
