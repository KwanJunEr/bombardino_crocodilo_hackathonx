"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, MapPin, Clock, Shield, AlertTriangle, Phone, Navigation, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Responder {
  id: string
  name: string
  role: string
  level: number
  distance: number
  responseTime: string
  avatar: string
  department: string
}

const mockResponders: Responder[] = [
  {
    id: "1",
    name: "Captain Ahmad",
    role: "Fisherman Guide",
    level: 5,
    distance: 0.8,
    responseTime: "3-5 min",
    avatar: "👨‍✈️",
    department: "Marine Rescue",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Beginner Angler",
    level: 3,
    distance: 1.2,
    responseTime: "5-8 min",
    avatar: "👩‍🦰",
    department: "Pekan Hooked User",
  },
  {
    id: "3",
    name: "Lim Wei Ming",
    role: "Experienced Angler",
    level: 3,
    distance: 2.8,
    responseTime: "15-20 min",
    avatar: "👨‍💼",
    department: "Pekan Hooked User",
  },
  {
    id: "4",
    name: "Pak Cik Abu",
    role: "Angler Hobbyist",
    level: 5,
    distance: 3.2,
    responseTime: "20-25 min",
    avatar: "👨‍🚒",
    department: "Pekan Hooked User",
  },
]

const safetyTips = [
  "Stay calm and conserve energy",
  "Signal for help using bright colors or reflective items",
  "Stay with your vessel if possible",
  "Preserve body heat and stay hydrated",
  "Use emergency whistle in short bursts",
  "Keep emergency contacts readily available",
]

// Unknown profiles for loading animation
const unknownProfiles = [
  {
    color: "bg-gray-400",
    radius: 90,
    duration: 6,
    delay: 0,
  },
  {
    color: "bg-gray-500",
    radius: 120,
    duration: 8,
    delay: 1,
  },
  {
    color: "bg-gray-600",
    radius: 150,
    duration: 10,
    delay: 2,
  },
  {
    color: "bg-gray-400",
    radius: 110,
    duration: 7,
    delay: 3,
  },
  {
    color: "bg-gray-500",
    radius: 180,
    duration: 12,
    delay: 4,
  },
  {
    color: "bg-gray-600",
    radius: 140,
    duration: 9,
    delay: 5,
  },
]

export default function SOSEmergencyPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSafetyTips, setShowSafetyTips] = useState(false)
  const [showResponders, setShowResponders] = useState(false)

  useEffect(() => {
    // Simulate loading and finding matches
    const timer1 = setTimeout(() => {
      setIsLoading(false)
      setShowSafetyTips(true)
    }, 9000)

    const timer2 = setTimeout(() => {
      setShowResponders(true)
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case "Fire Department":
        return <Flame className="h-4 w-4" />
      case "Coast Guard":
        return <Shield className="h-4 w-4" />
      case "Marine Rescue":
        return <Navigation className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case "Fire Department":
        return "bg-red-100 text-red-800"
      case "Coast Guard":
        return "bg-blue-100 text-blue-800"
      case "Marine Rescue":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <h1 className="text-3xl font-bold text-red-600">SOS Emergency</h1>
          </div>
          <p className="text-gray-600">Finding nearby responders to assist you</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16"
            >
              {/* Planet and Orbiting Unknown Profiles */}
              <div className="relative w-96 h-96 mb-8">
                {/* Central Planet */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <AlertTriangle className="h-12 w-12 text-white" />
                </motion.div>

                {/* Orbital Rings */}
                {unknownProfiles.map((profile, i) => (
                  <div
                    key={`ring-${i}`}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-200 rounded-full opacity-20"
                    style={{
                      width: profile.radius * 2,
                      height: profile.radius * 2,
                    }}
                  />
                ))}

                {/* Orbiting Unknown Profile Cards */}
                {unknownProfiles.map((profile, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: profile.duration,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: profile.delay,
                    }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transformOrigin: "0 0",
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: -360,
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        rotate: {
                          duration: profile.duration,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: profile.delay,
                        },
                        opacity: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                        },
                      }}
                      className={`${profile.color} rounded-lg p-3 shadow-lg border-2 border-white min-w-[80px]`}
                      style={{
                        transform: `translate(${profile.radius - 40}px, -30px)`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">
                          <User className="h-6 w-6 text-white mx-auto" />
                        </div>
                        <div className="text-white text-xs font-medium">Scanning...</div>
                        <div className="text-white text-xs opacity-80">Unknown</div>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                          />
                          <span className="text-white text-xs">Searching</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-center"
              >
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Scanning emergency responders...</h2>
                <p className="text-gray-500">Identifying available rescue personnel</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-red-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {!isLoading && (
            <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Safety Tips */}
              <AnimatePresence>
                {showSafetyTips && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-orange-200 bg-orange-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-700">
                          <Shield className="h-5 w-5" />
                          Safety Tips While Waiting
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {safetyTips.map((tip, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 text-sm text-orange-700"
                            >
                              <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                              {tip}
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Responders List */}
              <AnimatePresence>
                {showResponders && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700">
                          <User className="h-5 w-5" />
                         ({mockResponders.length}) Emergency Responders Found  Who Are On Their Way to Assist You
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {mockResponders.map((responder, index) => (
                          <motion.div
                            key={responder.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="text-3xl">{responder.avatar}</div>
                                <div>
                                  <h3 className="font-semibold text-lg">{responder.name}</h3>
                                  <p className="text-gray-600">{responder.role}</p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <Badge
                                      variant="secondary"
                                      className={`flex items-center gap-1 ${getDepartmentColor(responder.department)}`}
                                    >
                                      {getDepartmentIcon(responder.department)}
                                      {responder.department}
                                    </Badge>
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      Level {responder.level}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                      <MapPin className="h-3 w-3" />
                                      {responder.distance} km away
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                      <Clock className="h-3 w-3" />
                                      {responder.responseTime}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <Phone className="h-4 w-4 mr-1" />
                                  Contact
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Emergency Actions */}
              {showResponders && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4 justify-center"
                >
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Emergency Services
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
