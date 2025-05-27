"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { UtensilsCrossed, Users, Star, MapPin, Calendar, DollarSign, Sparkles, Loader2 } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data
const monthlyCustomers = [
  { month: "Jan", customers: 850, revenue: 32000 },
  { month: "Feb", customers: 920, revenue: 35000 },
  { month: "Mar", customers: 1100, revenue: 42000 },
  { month: "Apr", customers: 1350, revenue: 51000 },
  { month: "May", customers: 1580, revenue: 59000 },
  { month: "Jun", customers: 1720, revenue: 65000 },
]

const diningAreas = [
  { name: "Main Dining", customers: 40, color: "#0088FE" },
  { name: "Private Rooms", customers: 25, color: "#00C49F" },
  { name: "Outdoor Terrace", customers: 20, color: "#FFBB28" },
  { name: "Bar Area", customers: 15, color: "#FF8042" },
]

const reviews = [
  {
    id: 1,
    name: "Ahmad Rahman",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    location: "Main Dining",
    comment:
      "Excellent ikan patin masak tempoyak! The flavors were authentic and reminded me of my grandmother cooking. Service was prompt and friendly.",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-12",
    location: "Private Rooms",
    comment:
      "Great family dinner experience. The gulai tempoyak was delicious and the private room was perfect for our celebration. Highly recommend!",
  },
  {
    id: 3,
    name: "David Lim",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-10",
    location: "Outdoor Terrace",
    comment:
      "Amazing riverside dining experience! The fresh river fish was perfectly cooked and the view of Sungai Pahang was breathtaking. Will definitely return!",
  },
  {
    id: 4,
    name: "Fatimah Ali",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-08",
    location: "Main Dining",
    comment:
      "Authentic Pahang cuisine at its finest. The rendang daging was tender and flavorful. Only minor issue was the waiting time during peak hours.",
  },
  {
    id: 5,
    name: "John Wong",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-05",
    location: "Bar Area",
    comment:
      "Fantastic local dishes! The ikan patin gulai was exceptional. Staff were knowledgeable about local ingredients and cooking methods.",
  },
]

export default function RestaurantDashboard() {
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false)
  const [aiInsights, setAiInsights] = useState("")

  const generateInsights = async () => {
    setIsGeneratingInsights(true)

    // Simulate loading time
    setTimeout(() => {
      const insights = `Based on the customer reviews analysis, here are key insights for your Pekan restaurant:

🌟 CUSTOMER SATISFACTION HIGHLIGHTS:
• Exceptional feedback on signature dishes: Ikan patin masak tempoyak and gulai tempoyak are consistently praised
• Authentic Pahang cuisine is your strongest selling point - customers appreciate traditional flavors
• Riverside location and Sungai Pahang views are major attractions, especially for the outdoor terrace

📈 OPERATIONAL STRENGTHS:
• Service quality is consistently rated highly with "prompt and friendly" staff
• Private rooms are popular for family celebrations and special occasions
• Fresh river fish preparation receives excellent reviews

⚠️ AREAS FOR IMPROVEMENT:
• Peak hour waiting times mentioned in reviews - consider reservation system optimization
• Main dining area could benefit from better crowd management during busy periods

💡 STRATEGIC RECOMMENDATIONS:
1. Market your signature tempoyak dishes more prominently - they're clearly customer favorites
2. Promote the riverside dining experience in marketing materials
3. Consider expanding outdoor terrace capacity given positive feedback
4. Implement better queue management system for peak dining hours
5. Train staff to share more stories about local Pahang culinary traditions

🎯 REVENUE OPPORTUNITIES:
• Develop "Pahang Heritage Menu" featuring traditional dishes
• Create special riverside dinner packages for tourists
• Offer cooking classes for signature tempoyak dishes
• Partner with local tourism boards to attract more visitors to Pekan

The consistent 4-5 star ratings indicate strong customer loyalty and authentic dining experience that sets you apart in Pekan dining scene.`

      setAiInsights(insights)
      setIsGeneratingInsights(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <UtensilsCrossed className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Restoran Sungai Pahang</h1>
                <p className="text-sm text-gray-500">Restaurant Management Dashboard - Pekan, Pahang</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <MapPin className="h-3 w-3 mr-1" />
                Pekan, Pahang
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7,520</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+15.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">RM 65,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+22.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.2</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Customer Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Trends</CardTitle>
                  <CardDescription>Monthly customer count and revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyCustomers}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="customers" stroke="#EA580C" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Popular Dining Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Dining Areas</CardTitle>
                  <CardDescription>Customer distribution by seating area</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={diningAreas}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="customers"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {diningAreas.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Current Diners</p>
                    <p className="text-2xl font-bold text-orange-600">89</p>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Reservations Today</p>
                    <p className="text-2xl font-bold text-green-600">32</p>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Revenue Today</p>
                    <p className="text-2xl font-bold text-purple-600">RM 3,450</p>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyCustomers}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dining Area Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {diningAreas.map((area, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: area.color }} />
                          <span className="font-medium">{area.name}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{area.customers}%</p>
                          <p className="text-sm text-muted-foreground">of total diners</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Customer Reviews</CardTitle>
                <CardDescription>Latest feedback from our valued customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="space-y-3">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{review.location}</span>
                                <Calendar className="h-3 w-3 ml-2" />
                                <span>{review.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      </div>
                      {review.id !== reviews.length && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                  AI-Powered Review Analysis
                </CardTitle>
                <CardDescription>Get intelligent insights based on customer reviews and feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={generateInsights} disabled={isGeneratingInsights} className="w-full">
                  {isGeneratingInsights ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Reviews...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Insights from Reviews
                    </>
                  )}
                </Button>

                {aiInsights && (
                  <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-800">Review Analysis & Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-700 whitespace-pre-wrap">{aiInsights}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {!aiInsights && !isGeneratingInsights && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                    <p>
                      Click "Generate Insights" to get AI-powered analysis of your customer reviews and actionable
                      recommendations for your restaurant.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
