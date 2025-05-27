"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Fish, Waves } from "lucide-react"

interface CompletionAnimationProps {
  isCompleting: boolean
  isCompleted: boolean
}

export function CompletionAnimation({  isCompleted }: CompletionAnimationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <div className="relative mb-8">
          <motion.div
            animate={{
              rotate: isCompleted ? 0 : 360,
              scale: isCompleted ? 1.2 : 1,
            }}
            transition={{
              duration: isCompleted ? 0.5 : 2,
              repeat: isCompleted ? 0 : Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-24 h-24 mx-auto mb-4"
          >
            {isCompleted ? (
              <CheckCircle className="w-24 h-24 text-green-500" />
            ) : (
              <Fish className="w-24 h-24 text-blue-500" />
            )}
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          >
            <Waves className="w-8 h-8 text-blue-300" />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          {isCompleted ? "Profile Created Successfully!" : "Creating Your Fishing Profile..."}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 mb-8 max-w-md mx-auto"
        >
          {isCompleted
            ? "Welcome to Pekan Hookede! Get ready to explore Malaysia's best fishing spots and connect with fellow anglers. Redirecting to your dashboard..."
            : "Please wait while we set up your account, verify your documents, and prepare your personalized fishing experience."}
        </motion.p>

        {!isCompleted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-64 mx-auto"
          >
            <Progress value={66} className="h-3" />
            <p className="text-sm text-gray-500 mt-2">Setting up your profile...</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
