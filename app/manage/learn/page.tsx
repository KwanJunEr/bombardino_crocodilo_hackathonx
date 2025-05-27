import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Clock,
  Globe,
  GraduationCap,
  Languages,
  Star,
  Users,
  Camera,
  Heart,
  Compass,
  Award,
  TrendingUp,
  Shield,
  BookOpen,
  Target,
} from "lucide-react"

export default function Component() {
  const skills = [
    {
      name: "Customer Service",
      level: "Essential",
      icon: Users,
      description: "Excellent communication and hospitality skills",
    },
    {
      name: "Cultural Knowledge",
      level: "Essential",
      icon: Heart,
      description: "Understanding of local history, culture, and traditions",
    },
    {
      name: "Photography",
      level: "Recommended",
      icon: Camera,
      description: "Capture memorable moments and create visual content",
    },
    {
      name: "First Aid",
      level: "Recommended",
      icon: Shield,
      description: "Basic medical assistance and emergency response",
    },
    {
      name: "Digital Marketing",
      level: "Advanced",
      icon: TrendingUp,
      description: "Online promotion and social media management",
    },
  ]

  const languages = [
    { name: "Local Language", level: "Native", priority: "Essential", speakers: "Local Population" },
    { name: "English", level: "Fluent", priority: "Essential", speakers: "1.5B+" },
    { name: "Mandarin Chinese", level: "Conversational", priority: "High", speakers: "918M+" },
    { name: "Arabic", level: "Basic", priority: "Medium", speakers: "422M+" },
    { name: "Spanish", level: "Basic", priority: "Medium", speakers: "500M+" },
    { name: "Japanese", level: "Basic", priority: "Low", speakers: "125M+" },
  ]

  const certifications = [
    {
      name: "Basic Tourism Certificate",
      level: "Entry Level",
      duration: "3 months",
      requirements: ["Customer service training", "Basic communication skills", "Local knowledge"],
      benefits: ["Entry-level positions", "Foundation knowledge", "Industry recognition"],
      icon: BookOpen,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Professional Tour Guide License",
      level: "Professional",
      duration: "6 months",
      requirements: ["Tourism certificate", "Language proficiency", "First aid certification", "Practical experience"],
      benefits: ["Licensed tour guide", "Higher earning potential", "Professional credibility"],
      icon: Compass,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Tourism Specialist Certification",
      level: "Specialist",
      duration: "9 months",
      requirements: ["Tour guide license", "Specialized training", "Event management", "Photography skills"],
      benefits: ["Specialized roles", "Leadership positions", "Training opportunities"],
      icon: Star,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Advanced Tourism Professional Diploma",
      level: "Expert",
      duration: "12 months",
      requirements: ["Specialist certification", "Digital marketing", "Business management", "Multi-language skills"],
      benefits: ["Senior management", "Consultancy roles", "Business ownership"],
      icon: Award,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 ">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pekan Tourism Professional Training</h1>
              <p className="text-lg text-gray-600">Essential Skills & Certifications for Tourism Industry</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-green-600">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Master Tourism Excellence</h2>
                <p className="text-xl max-w-2xl mx-auto">
                  Develop the essential skills, language abilities, and certifications needed for success in the fishing tourism
                  industry for Pekan, Pahang
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Essential Skills for Tourism Professionals
                </CardTitle>
                <CardDescription>Master these core competencies to excel in the tourism industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          skill.level === "Essential"
                            ? "bg-red-100 text-red-600"
                            : skill.level === "Recommended"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <skill.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <Badge
                            variant={
                              skill.level === "Essential"
                                ? "destructive"
                                : skill.level === "Recommended"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skill Development Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Skills Focus:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Practice active listening with customers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Study local history and cultural significance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Develop storytelling and presentation skills
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Advanced Skills:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Learn basic photography and video editing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Get certified in first aid and CPR
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Master social media marketing tools
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Languages Tab */}
          <TabsContent value="languages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Language Requirements
                </CardTitle>
                <CardDescription>Multilingual skills to serve diverse tourists and visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <div>
                          <h3 className="font-semibold">{language.name}</h3>
                          <p className="text-sm text-gray-600">Target Level: {language.level}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            language.priority === "Essential"
                              ? "destructive"
                              : language.priority === "High"
                                ? "default"
                                : language.priority === "Medium"
                                  ? "secondary"
                                  : "outline"
                          }
                        >
                          {language.priority}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{language.speakers} speakers</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Language Learning Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">For English Proficiency:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Practice tourism-specific vocabulary daily
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Watch travel and tourism content
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Engage in conversation with international visitors
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">For Additional Languages:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Focus on essential phrases and greetings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Learn numbers, directions, and common questions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Use language learning apps consistently
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Essential Tourism Phrases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Greetings & Welcome</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Welcome to our location</li>
                      <li>• How can I help you?</li>
                      <li>• Thank you for visiting</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Directions & Information</h4>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• The restroom is over there</li>
                      <li>• This way to the exit</li>
                      <li>• The tour starts at...</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Emergency & Safety</h4>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• Do you need medical help?</li>
                      <li>• Please follow me</li>
                      <li>• Emergency exit this way</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Professional Certifications
                </CardTitle>
                <CardDescription>Progressive certification pathway for tourism professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${cert.color}`}>
                          <cert.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{cert.name}</h3>
                            <Badge variant="outline">{cert.level}</Badge>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {cert.duration}
                            </span>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                              <ul className="space-y-1">
                                {cert.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="flex items-center gap-2 text-sm">
                                    <Target className="h-3 w-3 text-gray-400" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                              <ul className="space-y-1">
                                {cert.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="h-3 w-3 text-green-600" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certification Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-blue-800">Apply</h4>
                    <p className="text-sm text-blue-600">Submit application with prerequisites</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-green-800">Study</h4>
                    <p className="text-sm text-green-600">Complete required training modules</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-purple-800">Assess</h4>
                    <p className="text-sm text-purple-600">Pass written and practical exams</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      4
                    </div>
                    <h4 className="font-semibold text-orange-800">Certify</h4>
                    <p className="text-sm text-orange-600">Receive official certification</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Certification Journey
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                Begin with the Basic Tourism Certificate and advance through the levels
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
