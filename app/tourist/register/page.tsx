"use client";
import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  User,
  Eye,
  EyeOff,
  Upload,
  Fish,
  X,
  CheckCircle,
} from "lucide-react";

export default function PekanHookedApp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({
    identity: null,
    license: null,
  });
  const [dragOver, setDragOver] = useState({
    identity: false,
    license: false,
  });

  const identityFileInputRef = useRef(null);
  const licenseFileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
    password: "",
    experience: "",
    fishTypes: "",
    frequency: "",
    knowledge: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // File upload handlers
  const handleFileSelect = (type, file) => {
    if (
      file &&
      (file.type.startsWith("image/") || file.type === "application/pdf")
    ) {
      setUploadedFiles((prev) => ({ ...prev, [type]: file }));
    } else {
      alert("Please upload only image files (JPG, PNG) or PDF documents.");
    }
  };

  const handleDragOver = (e, type) => {
    e.preventDefault();
    setDragOver((prev) => ({ ...prev, [type]: true }));
  };

  const handleDragLeave = (e, type) => {
    e.preventDefault();
    setDragOver((prev) => ({ ...prev, [type]: false }));
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    setDragOver((prev) => ({ ...prev, [type]: false }));
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(type, files[0]);
    }
  };

  const removeFile = (type) => {
    setUploadedFiles((prev) => ({ ...prev, [type]: null }));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Splash Screen
  const SplashScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <Fish className="w-24 h-24 text-teal-300 mb-4" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">PekanHooked</h1>
        <p className="text-blue-100 mb-8 leading-relaxed">
          A gamified, community-driven mobile app that uses AI and fish
          recognition to enhance your fishing tourism experiences in Pekan
        </p>

        <div className="space-y-4">
          <Button
            onClick={nextStep}
            className="w-full bg-white text-blue-700 hover:bg-blue-900 hover:text-white hover:cursor-pointer py-6 text-lg font-semibold rounded-xl shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Sign in With Email
          </Button>

          <div className="text-blue-200 text-sm">
            Don&apos;t have an account yet?
          </div>

          <Button
            onClick={nextStep}
            variant="outline"
            className="w-full border-2 border-white text-blue-700 bg-white hover:bg-blue-900 hover:text-white hover:cursor-pointer py-6 text-lg font-semibold rounded-xl"
          >
            <User className="w-5 h-5 mr-2" />
            Create Your Profile
          </Button>
        </div>
      </div>
    </div>
  );

  // Step 1: Basic Information
  const Step1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <Fish className="w-8 h-8 text-teal-600 mr-2" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              PekanHooked
            </CardTitle>
          </div>
          <CardTitle className="text-xl text-blue-600">
            Get Started now
          </CardTitle>
          <CardDescription>
            Create an account to explore our app
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              placeholder="Alvin"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              placeholder="Alvin@gmail.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={(e) => updateFormData("dob", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => updateFormData("address", e.target.value)}
              placeholder="No.8, Jalan Gembira"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <div className="flex mt-1">
              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                <span className="text-sm">+6</span>
              </div>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="012-4127895"
                className="rounded-l-none"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                placeholder="••••••••"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            onClick={nextStep}
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg rounded-xl mt-6"
          >
            Continue
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-600 hover:underline">Log in</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Step 2: Fishing Profile
  const Step2 = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <Fish className="w-8 h-8 text-teal-600 mr-2" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              PekanHooked
            </CardTitle>
          </div>
          <CardTitle className="text-xl text-blue-600">
            Fishing Profile
          </CardTitle>
          <CardDescription>
            Create an account to explore our app
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium">
              What&apos;s Your Fishing Experience?
            </Label>
            <Select
              value={formData.experience}
              onValueChange={(value) => updateFormData("experience", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Beginner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-base font-medium">
              Which types of fish you like to catch?
            </Label>
            <Select
              value={formData.fishTypes}
              onValueChange={(value) => updateFormData("fishTypes", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Ikan Patin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ikan-patin">Ikan Patin</SelectItem>
                <SelectItem value="ikan-keli">Ikan Keli</SelectItem>
                <SelectItem value="ikan-tilapia">Ikan Tilapia</SelectItem>
                <SelectItem value="ikan-haruan">Ikan Haruan</SelectItem>
                <SelectItem value="all">All Types</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-base font-medium">
              How often do you go fishing?
            </Label>
            <Select
              value={formData.frequency}
              onValueChange={(value) => updateFormData("frequency", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Once per month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Once per month</SelectItem>
                <SelectItem value="occasionally">Occasionally</SelectItem>
                <SelectItem value="rarely">Rarely</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-base font-medium">
              How well do you know Pekan&apos;s fishing?
            </Label>
            <Select
              value={formData.knowledge}
              onValueChange={(value) => updateFormData("knowledge", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Rarely" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="expert">Very Well</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="rarely">Rarely</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={nextStep}
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg rounded-xl mt-8"
          >
            Continue
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-600 hover:underline">Log in</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Step 3: Document Upload
  const Step3 = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <Fish className="w-8 h-8 text-teal-600 mr-2" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              PekanHooked
            </CardTitle>
          </div>
          <CardTitle className="text-xl text-blue-600">
            Document Verification
          </CardTitle>
          <CardDescription>
            Upload Documents to Verify Your Identity
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Identity Document Upload */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Personal Identity/Passport
            </Label>

            {uploadedFiles.identity ? (
              <div className="border-2 border-green-300 rounded-xl p-4 bg-green-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-medium text-gray-800">
                        {uploadedFiles.identity.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatFileSize(uploadedFiles.identity.size)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile("identity")}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                  dragOver.identity
                    ? "border-blue-500 bg-blue-100"
                    : "border-blue-300 bg-blue-50 hover:bg-blue-100"
                }`}
                onDragOver={(e) => handleDragOver(e, "identity")}
                onDragLeave={(e) => handleDragLeave(e, "identity")}
                onDrop={(e) => handleDrop(e, "identity")}
                onClick={() => identityFileInputRef.current?.click()}
              >
                <Upload className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">
                  Drag your file(s) to start uploading
                </p>
                <p className="text-sm text-gray-500 mb-4">OR</p>
                <Button variant="outline" className="bg-white">
                  Browse files
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Supported: JPG, PNG, PDF (Max 10MB)
                </p>
              </div>
            )}

            <input
              ref={identityFileInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileSelect("identity", e.target.files[0])
              }
              className="hidden"
            />
          </div>

          {/* License Document Upload */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Fishing License (Optional)
            </Label>

            {uploadedFiles.license ? (
              <div className="border-2 border-green-300 rounded-xl p-4 bg-green-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-medium text-gray-800">
                        {uploadedFiles.license.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatFileSize(uploadedFiles.license.size)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile("license")}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                  dragOver.license
                    ? "border-blue-500 bg-blue-100"
                    : "border-blue-300 bg-blue-50 hover:bg-blue-100"
                }`}
                onDragOver={(e) => handleDragOver(e, "license")}
                onDragLeave={(e) => handleDragLeave(e, "license")}
                onDrop={(e) => handleDrop(e, "license")}
                onClick={() => licenseFileInputRef.current?.click()}
              >
                <Upload className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">
                  Drag your file(s) to start uploading
                </p>
                <p className="text-sm text-gray-500 mb-4">OR</p>
                <Button variant="outline" className="bg-white">
                  Browse files
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Supported: JPG, PNG, PDF (Max 10MB)
                </p>
              </div>
            )}

            <input
              ref={licenseFileInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileSelect("license", e.target.files[0])
              }
              className="hidden"
            />
          </div>

          <Button
            onClick={() => {
              if (uploadedFiles.identity) {
                alert("Profile creation completed successfully!");
                console.log("Uploaded files:", uploadedFiles);
                console.log("Form data:", formData);
              } else {
                alert("Please upload your identity document to continue.");
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg rounded-xl mt-8"
            disabled={!uploadedFiles.identity}
          >
            Complete Profile Creation
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-600 hover:underline">Log in</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const steps = [SplashScreen, Step1, Step2, Step3];
  const CurrentStepComponent = steps[currentStep];

  return (
    <div className="w-full">
      <CurrentStepComponent />

      {/* Navigation for demo purposes */}
      {currentStep > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white rounded-full px-4 py-2 shadow-lg">
          <Button onClick={prevStep} variant="outline" size="sm">
            Previous
          </Button>
          <span className="flex items-center px-4 text-sm font-medium">
            Step {currentStep} of 3
          </span>
          {currentStep < 3 && (
            <Button onClick={nextStep} size="sm">
              Next
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
