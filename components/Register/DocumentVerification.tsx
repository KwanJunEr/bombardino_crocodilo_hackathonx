"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, FileText, Shield } from "lucide-react"

interface DocumentVerificationStepProps {
  formData: {
    personalId: File | null
    fishingLicense: File | null
  }
  updateFormData: any
  onComplete: () => void
  onPrev: () => void
}

export function DocumentVerificationStep({
  formData,
  updateFormData,
  onComplete,
  onPrev,
}: DocumentVerificationStepProps) {
  const handleFileUpload = (field: "personalId" | "fishingLicense", file: File | null) => {
    updateFormData(field, file)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Shield className="w-16 h-16 mx-auto text-blue-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Document Verification</h3>
        <p className="text-gray-600">
          Upload your documents to complete your profile verification. All files are encrypted and stored securely.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-medium">Personal Identity Document *</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-sm text-gray-600 mb-4">
              Upload your IC/Passport
              <br />
              <span className="text-xs text-gray-500">Supported: PDF, JPG, PNG (Max 5MB)</span>
            </p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload("personalId", e.target.files?.[0] || null)}
              className="hidden"
              id="personal-id"
            />
            <label
              htmlFor="personal-id"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
            >
              <Upload className="w-4 h-4 mr-2" />
              Choose File
            </label>
            {formData.personalId && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 font-medium">✓ {formData.personalId.name}</p>
                <p className="text-xs text-green-600">File uploaded successfully</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-medium">Fishing License (Optional)</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-sm text-gray-600 mb-4">
              Upload your fishing license
              <br />
              <span className="text-xs text-gray-500">Supported: PDF, JPG, PNG (Max 5MB)</span>
            </p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload("fishingLicense", e.target.files?.[0] || null)}
              className="hidden"
              id="fishing-license"
            />
            <label
              htmlFor="fishing-license"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
            >
              <Upload className="w-4 h-4 mr-2" />
              Choose File
            </label>
            {formData.fishingLicense && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 font-medium">✓ {formData.fishingLicense.name}</p>
                <p className="text-xs text-green-600">File uploaded successfully</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Data Protection & Privacy
        </h4>
        <div className="text-sm text-blue-700 space-y-2">
          <p>• Your documents are encrypted using industry-standard security protocols</p>
          <p>• We comply with Malaysian Personal Data Protection Act (PDPA) 2010</p>
          <p>• Documents are used solely for identity verification purposes</p>
          <p>• You can request document deletion at any time through your profile settings</p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} size="lg">
          Previous
        </Button>
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white"
          disabled={!formData.personalId}
        >
          Complete Profile Creation
        </Button>
      </div>
    </motion.div>
  )
}
