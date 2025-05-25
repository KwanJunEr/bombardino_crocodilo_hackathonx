"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const Challenge = () => {
  const groupData = {
    name: "Trip Tung Tung Fishing",
    created: "11th May 2025",
    detail: "Fishing and Travelling to Pekan",
    members: [
      {
        id: 1,
        name: "Abu",
        level: "Pekan Local Fisherman (Guide)",
        avatar: "A",
        verified: true,
      },
      {
        id: 2,
        name: "You",
        level: "Level 1 Fisher Hobbyist",
        avatar: "Y",
        verified: true,
      },
      {
        id: 3,
        name: "Aliyah",
        level: "Level 1 Fisher Hobbyist",
        avatar: "AL",
        verified: true,
      },
      {
        id: 4,
        name: "Kuhan",
        level: "Level 2 Fisher Hobbyist",
        avatar: "K",
        verified: false,
      },
      {
        id: 5,
        name: "Robert",
        level: "Level 1 Fisher Hobbyist",
        avatar: "R",
        verified: false,
      },
    ],
    challenge: {
      title: "See who can fish the most amount of fish",
      created: "One Day Ago",
      participants: 4,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            My Fishing Group
          </h1>

          {/* Group Info Card */}
          <Card className="mb-6">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-xl">{groupData.name}</CardTitle>
              <div className="flex items-center gap-4 text-blue-100">
                <span>Created: {groupData.created}</span>
                <span>Detail: {groupData.detail}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-blue-600 text-white text-lg">
                    A
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">Abu</h3>
                  <p className="text-gray-600">Pekan Local Fisherman (Guide)</p>
                </div>
                <Button variant="outline" className="ml-auto">
                  Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Group Members */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Group Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {groupData.members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-600 text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{member.name}</span>
                          {member.verified && (
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800"
                            >
                              ✓
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{member.level}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Profile
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Group Challenge Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Group Challenge Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">
                    {groupData.challenge.title}
                  </h3>
                  <p className="text-orange-100 mb-4">
                    Game Created: {groupData.challenge.created}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4" />
                    <span>
                      {groupData.challenge.participants} Members Playing
                    </span>
                  </div>
                  <Button
                    variant="secondary"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
                    View Challenge
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
