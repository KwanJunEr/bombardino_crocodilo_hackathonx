"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Camera, Gift, Star, Trophy, Fish, MapPin, Award, Crown, Medal, Target, ArrowLeft, LinkIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"


const FishingCompetition = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const competitionData = {
    title: "Who can Fish The Most Challenge",
    rules:
      "Try to catch as many fish as you can from different fishing spots. Earn Points By Uploading Your Caught Fish.",
    currentUser: {
      rank: 3,
      fishCount: 10,
      points: 360,
      status: "Keep it Up!",
      progress: 67, // Progress towards next level
    },
    spots: [
      { name: "Jeti Nelayan Kg Pasir Panjang", difficulty: "1/5", caught: 6, maxFish: 10 },
      { name: "Jeti Tanjung Agas", difficulty: "2/5", caught: 4, maxFish: 8 },
    ],
  }

  const leaderboardData = [
    { rank: 1, name: "David Kumar", fish: 15, points: 600, avatar: "DK", badge: "🏆" },
    { rank: 2, name: "Sarah Chen", fish: 13, points: 500, avatar: "SC", badge: "🥈" },
    { rank: 3, name: "You", fish: 10, points: 360, avatar: "Y", badge: "🥉" },
    { rank: 4, name: "Lisa Wong", fish: 8, points: 200, avatar: "LW", badge: "" },
  ]

  const CompetitionDetailsPage = () => (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 md:p-6">
      {/* Back to Group Button */}
      <div className="mb-6">
        <Link href={"/tourist/mygroup/AXBTGr"}>
        <Button
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-50 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Group
        </Button>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Fish className="w-12 h-12 text-blue-600 animate-bounce" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Fishing Challenge
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Cast your line and compete with friends!</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
          <Tabs defaultValue="competition" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-blue-50 p-1 rounded-xl">
              <TabsTrigger
                value="competition"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
              >
                <Target className="w-4 h-4 mr-2" />
                Competition
              </TabsTrigger>
              <TabsTrigger
                value="leaderboard"
                onClick={() => setCurrentPage(1)}
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="competition" className="space-y-6">
              {/* Competition Rules */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Award className="w-5 h-5" />
                    Competition Rules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{competitionData.rules}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <Fish className="w-3 h-3 mr-1" />
                      Multiple Spots
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Camera className="w-3 h-3 mr-1" />
                      Photo Upload
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      <Star className="w-3 h-3 mr-1" />
                      Point System
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Current Status - Enhanced */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                      <Crown className="w-10 h-10 text-yellow-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        {competitionData.currentUser.status}
                        <Badge className="bg-white/20 text-white border-white/30">
                          Rank #{competitionData.currentUser.rank}
                        </Badge>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Fish className="w-5 h-5" />
                            <span className="text-sm opacity-90">Fish Caught</span>
                          </div>
                          <p className="text-2xl font-bold">{competitionData.currentUser.fishCount}</p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5" />
                            <span className="text-sm opacity-90">Game Points</span>
                          </div>
                          <p className="text-2xl font-bold">{competitionData.currentUser.points}XP</p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy className="w-5 h-5" />
                            <span className="text-sm opacity-90">Progress</span>
                          </div>
                          <Progress value={competitionData.currentUser.progress} className="mt-2 bg-white/20" />
                          <p className="text-xs mt-1 opacity-75">
                            {competitionData.currentUser.progress}% to next level
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fishing Spots - Enhanced */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Fishing Spots Visited
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {competitionData.spots.map((spot, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">{spot.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Target className="w-4 h-4" />
                                Difficulty: {spot.difficulty}
                              </span>
                              <Progress value={(spot.caught / spot.maxFish) * 100} className="w-20 h-2" />
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                              {spot.caught}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Fish Caught</p>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upload Button - Enhanced */}
              <Link href={"/tourist/mygroup/scan"}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <Camera className="w-6 h-6 mr-3" />
                Upload Your Catch
                <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Button>
              </Link>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )

  const LeaderboardPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 md:p-6">
      {/* Back to Group Button */}
      <div className="mb-6">
        <Button
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-50 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Group
        </Button>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-yellow-500 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Leaderboard
            </h1>
          </div>
          <p className="text-gray-600 text-lg">See who's leading the competition!</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
          <Tabs defaultValue="leaderboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-blue-50 p-1 rounded-xl">
              <TabsTrigger
                value="competition"
                onClick={() => setCurrentPage(0)}
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
              >
                <Target className="w-4 h-4 mr-2" />
                Competition
              </TabsTrigger>
              <TabsTrigger
                value="leaderboard"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="space-y-6">
              {/* Members Ranking - Enhanced */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Medal className="w-6 h-6 text-yellow-500" />
                    Members Ranking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboardData.map((member, index) => (
                      <div
                        key={member.rank}
                        className={`group relative overflow-hidden flex items-center justify-between p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                          member.rank === 1
                            ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg"
                            : member.rank === 2
                              ? "bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 shadow-md"
                              : member.rank === 3
                                ? "bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 shadow-md"
                                : "bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                                member.rank === 1
                                  ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                                  : member.rank === 2
                                    ? "bg-gradient-to-br from-gray-400 to-gray-600"
                                    : member.rank === 3
                                      ? "bg-gradient-to-br from-orange-400 to-orange-600"
                                      : "bg-gradient-to-br from-blue-400 to-blue-600"
                              }`}
                            >
                              {member.rank}
                            </div>
                            {member.badge && <div className="absolute -top-2 -right-2 text-2xl">{member.badge}</div>}
                          </div>

                          <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-lg text-gray-800">{member.name}</p>
                              {member.name === "You" && (
                                <Badge className="bg-blue-100 text-blue-800 text-xs">You</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Fish className="w-4 h-4" />
                                {member.fish} fishes
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">
                            {member.points}XP
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Total Points</p>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Result - Enhanced */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Gift className="w-6 h-6 text-green-500" />
                    Competition Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <Crown className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-green-800 text-lg">Winner Reward</h3>
                      </div>
                      <p className="text-green-700 font-medium">
                        🎉 Top 1 receives a Fishing Rod Purchase Voucher (15% Off)
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Gift className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-blue-800 text-lg">Consolation</h3>
                      </div>
                      <p className="text-blue-700 mb-4">
                        😅 Lisa Wong treats everyone to dinner for coming in last place!
                      </p>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find Restaurant
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )

  const pages = [CompetitionDetailsPage, LeaderboardPage]
  const CurrentPage = pages[currentPage]

  return (
    <div className="w-full">
      <CurrentPage />
    </div>
  )
}

export default FishingCompetition
