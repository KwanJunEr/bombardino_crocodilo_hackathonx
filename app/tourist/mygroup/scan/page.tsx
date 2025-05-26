"use client"
import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, ArrowLeft, Camera, X, Loader2 } from "lucide-react"
import Image from "next/image"

const Scan = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [classification, setClassification] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Reset previous states
      setClassification(null)
      setError(null)
      setIsLoading(true)

      // Upload to Cloudinary
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "unsigned_preset") // Replace with your actual preset

      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/dwcpvu80s/image/upload", {
          method: "POST",
          body: formData,
        })
        const data = await res.json()
        const uploadedImageUrl = data.secure_url
        console.log("Uploaded image URL:", uploadedImageUrl)

        await classifyFish(uploadedImageUrl)
      } catch (err) {
        console.error("Image upload failed:", err)
        setError("Failed to upload image. Please try again.")
        setIsLoading(false)
      }
    }
  }

  const classifyFish = async (imageUrl: string) => {
    try {
      const response = await fetch(
        "https://serverless.roboflow.com/infer/workflows/ken-9ufm4/classify-and-conditionally-detect",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: "srDkA4gHUsoSDzV9siZ2",
            inputs: {
              image: { type: "url", value: imageUrl },
            },
          }),
        },
      )

      const result = await response.json()
      const output = result.outputs?.[0]?.classification_predictions;
       if (output) {
      const topClass = output.top;
      const confidence = output.confidence;
      const confidencePercentage = (confidence * 100).toFixed(2);

      setClassification({
        topClass,
        confidence: confidencePercentage,
      });
    }

      
      console.log("Roboflow Result:", result)
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to classify:", error)
      setError("Failed to classify fish. Please try again.")
      setIsLoading(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
    setClassification(null)
    setError(null)
    setIsLoading(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleUploadAnother = () => {
    setUploadedImage(null)
    setClassification(null)
    setError(null)
    setIsLoading(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-2xl">
            <CardContent className="p-8">
              {!uploadedImage ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                    isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <Camera className="h-12 w-12 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Fish Photo</h3>
                      <p className="text-gray-600 mb-4">Drag and drop your image here, or click to browse</p>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleUploadClick()
                        }}
                        className="gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Choose Photo
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">Supports JPG, PNG, GIF up to 10MB</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <Image
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded fish"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg object-cover max-h-96"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={handleRemoveImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Great catch! 🎣</h3>
                    <p className="text-gray-600">Your fish photo has been uploaded successfully.</p>
                  </div>

                  {/* Loading State */}
                  {isLoading && (
                    <div className="mt-6 text-center">
                      <div className="flex flex-col items-center gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-3">
                          <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
                          <p className="text-lg font-semibold text-blue-900">Analyzing your fish...</p>
                        </div>
                        <p className="text-sm text-blue-700">
                          Our AI is identifying the species and characteristics. This may take a few moments.
                        </p>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error State */}
                  {error && (
                    <div className="mt-4 text-center">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 font-semibold">Error</p>
                        <p className="text-red-600 text-sm">{error}</p>
                        <Button onClick={() => setError(null)} variant="outline" size="sm" className="mt-2">
                          Try Again
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Classification Result */}
                  {classification && !isLoading && (
                    <div className="mt-6 text-center">
                      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <p className="text-lg font-semibold text-green-900">Classification Complete!</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded border text-left text-sm space-y-1">
  <p>
    <span className="font-medium text-gray-700">Fish Type Detected:</span>{" "}
    <span className="text-gray-900"> Ikan {classification.topClass}</span>
  </p>
  <p>
    <span className="font-medium text-gray-700">Confidence Score:</span>{" "}
    <span className="text-gray-900">{classification.confidence}%</span>
  </p>
</div>
                        
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" />
            Back to Game
          </Button>
          <Button onClick={handleUploadAnother} className="gap-2 w-full sm:w-auto" disabled={isLoading}>
            <Upload className="h-4 w-4" />
            Upload Another Photo
          </Button>
        </div>
      </div>

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInputChange} className="hidden" />
    </div>
  )
}

export default Scan
