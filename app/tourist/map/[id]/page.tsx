"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Fish, Shield, Lightbulb, TrendingUp } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const tidalData = [
  { time: "00:00", height: 2.1 },
  { time: "03:00", height: 3.8 },
  { time: "06:00", height: 2.3 },
  { time: "09:00", height: 1.2 },
  { time: "12:00", height: 2.9 },
  { time: "15:00", height: 4.1 },
  { time: "18:00", height: 2.7 },
  { time: "21:00", height: 1.5 },
  { time: "24:00", height: 2.1 },
]

const fishTypes = [
  { name: "Barramundi", season: "Year-round", difficulty: "Medium" },
  { name: "Mangrove Jack", season: "Mar-Sep", difficulty: "Hard" },
  { name: "Threadfin Salmon", season: "Apr-Oct", difficulty: "Easy" },
  { name: "Queenfish", season: "Year-round", difficulty: "Medium" },
  { name: "Trevally", season: "May-Nov", difficulty: "Medium" },
  { name: "Flathead", season: "Year-round", difficulty: "Easy" },
]

const safetyTips = [
  "Always wear a life jacket when fishing from boats",
  "Check weather conditions before heading out",
  "Inform someone about your fishing plans and expected return",
  "Carry emergency communication devices",
  "Be aware of tidal changes and strong currents",
  "Use sun protection and stay hydrated",
]

const aiTips = [
  "Fish during incoming tides for better results - the moving water brings baitfish closer to shore",
  "Use live prawns or small fish as bait for barramundi during early morning hours",
  "Target structure areas like fallen trees and rock formations where fish tend to congregate",
  "During high tide, focus on shallow mangrove areas where fish come to feed",
  "Use lighter tackle during low light conditions as fish are less wary",
]

export default function FishingSpotDetails() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-5">
      {/* Header Image */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: "url(/pahang4.jpg?height=320&width=1200)" }}
      >
        <div className="absolute inset-0  bg-opacity-40" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Pahang, Malaysia</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Sungai Pahang Estuary</h1>
        </div>
        <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">
          <Shield className="h-4 w-4 mr-1" />
          Safe Zone
        </Badge>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About This Fishing Spot</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Sungai Pahang Estuary is Malaysia's premier fishing destination, where the mighty Pahang River meets the
              South China Sea. This expansive estuary system offers diverse fishing opportunities with its mix of
              freshwater and saltwater environments. The area is renowned for its abundant fish populations, including
              prized barramundi, mangrove jack, and various trevally species. The estuary's complex network of channels,
              mangrove forests, and shallow flats provides excellent habitat for both predator and prey fish, making it
              an ideal location for anglers of all skill levels.
            </p>
          </CardContent>
        </Card>

        {/* Rating and Catch Limit */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Fishing Spot Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-lg font-semibold">4.8/5</span>
              </div>
              <p className="text-sm text-gray-600">Based on 127 angler reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fish className="h-5 w-5 text-blue-500" />
                Suggested Catch Limit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Barramundi:</span>
                  <span className="font-semibold">5 per day</span>
                </div>
                <div className="flex justify-between">
                  <span>Other species:</span>
                  <span className="font-semibold">10 per day</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Minimum size: 35cm for barramundi</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {safetyTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* AI Generated Fishing Tips */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Lightbulb className="h-5 w-5" />
              AI-Generated Fishing Tips
            </CardTitle>
            <CardDescription className="text-blue-600">
              Personalized recommendations based on local conditions and expert knowledge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {aiTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Types of Fish */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fish className="h-5 w-5 text-orange-500" />
              Types of Fish
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fishTypes.map((fish, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{fish.name}</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Season:</span>
                      <span>{fish.season}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Difficulty:</span>
                      <Badge
                        variant={
                          fish.difficulty === "Easy"
                            ? "default"
                            : fish.difficulty === "Medium"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {fish.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tidal Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Today's Tidal Chart
            </CardTitle>
            <CardDescription>Tide heights in meters - Plan your fishing around tidal movements</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                height: {
                  label: "Tide Height (m)",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tidalData}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="height"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Best Timing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-500" />
              Best Timing for Fishing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Optimal Times</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Dawn</Badge>
                    <span className="text-sm">5:30 AM - 7:30 AM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Dusk</Badge>
                    <span className="text-sm">6:00 PM - 8:00 PM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Night</Badge>
                    <span className="text-sm">9:00 PM - 11:00 PM</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Tidal Conditions</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Incoming tide: Best for barramundi and jacks</li>
                  <li>• High tide: Ideal for mangrove fishing</li>
                  <li>• Outgoing tide: Good for flathead and bream</li>
                  <li>• Low tide: Target deeper channels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Explore More Button */}
        <div className="text-center">
          <Button size="lg" onClick={() => router.push("/tourist/map/recommend")} className="bg-blue-600 hover:bg-blue-700">
            Explore More Places
          </Button>
        </div>
      </div>
    </div>
  )
}
