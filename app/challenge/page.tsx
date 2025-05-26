"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Gift, Star, Trophy } from "lucide-react";
import { useState } from "react";

const compAndLeadPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const competitionData = {
    title: "Who can Fish The Most Challenge",
    rules:
      "Try to catch as many fish as you can from different fishing spots. Earn Points By Uploading Your Caught Fish.",
    currentUser: {
      rank: 3,
      fishCount: 10,
      points: 360,
      status: "Keep it Up!",
    },
    spots: [
      { name: "Jeti Nelayan Kg Pasir Panjang", difficulty: "1/5", caught: 6 },
      { name: "Jeti Tanjung Agas", difficulty: "2/5", caught: 4 },
    ],
  };

  const leaderboardData = [
    { rank: 1, name: "Robert", fish: 15, points: 600, avatar: "R" },
    { rank: 2, name: "Kuhan", fish: 13, points: 500, avatar: "K" },
    { rank: 3, name: "You", fish: 10, points: 360, avatar: "Y" },
    { rank: 4, name: "Aliyah", fish: 8, points: 200, avatar: "AL" },
  ];

  const CompetitionDetailsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {competitionData.title}
          </h1>

          <Tabs defaultValue="competition" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="competition">Competition</TabsTrigger>
              <TabsTrigger
                value="leaderboard"
                onClick={() => setCurrentPage(1)}
              >
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="competition" className="space-y-6">
              {/* Competition Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Competition Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{competitionData.rules}</p>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-3">
                      <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {competitionData.currentUser.status}
                      </h3>
                      <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
                        <div>
                          <p>
                            Number of Fish Collected:{" "}
                            {competitionData.currentUser.fishCount}
                          </p>
                        </div>
                        <div>
                          <p>Rank: #{competitionData.currentUser.rank}</p>
                        </div>
                        <div>
                          <p>
                            Game Points: {competitionData.currentUser.points}XP
                          </p>
                          <p>
                            Current Rank: {competitionData.currentUser.rank}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fishing Spots */}
              <Card>
                <CardHeader>
                  <CardTitle>Fishing Spots Your Group Have Visited:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {competitionData.spots.map((spot, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium">{spot.name}</h4>
                          <p className="text-sm text-gray-600">
                            Difficulty Level: {spot.difficulty}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">
                            {spot.caught} Fish Caught!
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upload Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg">
                <Camera className="w-5 h-5 mr-2" />
                Upload Fish
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );

  // Page 3: Leaderboard
  const LeaderboardPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Who can Fish The Most Challenge
          </h1>

          <Tabs defaultValue="leaderboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                value="competition"
                onClick={() => setCurrentPage(0)}
              >
                Competition
              </TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="space-y-6">
              {/* Members Ranking */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Members Ranking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboardData.map((member) => (
                      <div
                        key={member.rank}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          member.rank === 1
                            ? "bg-yellow-50 border-2 border-yellow-200"
                            : member.rank === 2
                              ? "bg-gray-50 border-2 border-gray-200"
                              : member.rank === 3
                                ? "bg-orange-50 border-2 border-orange-200"
                                : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              member.rank === 1
                                ? "bg-yellow-500"
                                : member.rank === 2
                                  ? "bg-gray-400"
                                  : member.rank === 3
                                    ? "bg-orange-500"
                                    : "bg-blue-500"
                            }`}
                          >
                            {member.rank}
                          </div>
                          <Avatar>
                            <AvatarFallback className="bg-blue-600 text-white">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-600">
                              Caught {member.fish} Fishes
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">
                            Earned {member.points}XP
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Result */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-green-500" />
                    Result
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium">
                      Top 1 and Receive 1 Fishing Rod Purchase Voucher (15% Off)
                    </p>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 mb-3">
                      Aliyah has to belanja all members since she lost
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Go to Restaurant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );

  const pages = [CompetitionDetailsPage, LeaderboardPage];
  const CurrentPage = pages[currentPage];

  return (
    <div className="w-full">
      <CurrentPage />
    </div>
  );
};

export default compAndLeadPage;
