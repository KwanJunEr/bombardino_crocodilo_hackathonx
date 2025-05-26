
"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Trophy, Fish } from "lucide-react";
import { useParams } from "next/navigation";
import CreateChallengeDialog from "@/components/CreateChallengeDialog";
import Link from "next/link";

const groups = [
  {
    id: "AXBTGr",
    name: "Trip Tung Tung Fishing",
    created: "11th May 2025",
    detail: "Fishing and Travelling to Pekan",
    members: [
      {
        id: 1,
        name: "Sarah Chen",
        level: "Pekan Local Fisherman (Guide)",
        avatar: "S",
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
        name: "David Kumar",
        level: "Level 1 Fisher Hobbyist",
        avatar: "DK",
        verified: true,
      },
      {
        id: 4,
        name: "Lisa Wong",
        level: "Level 2 Fisher Hobbyist",
        avatar: "LW",
        verified: false,
      },
    ],
    challenge: {
        id:"challenge-1",
      title: "See who can fish the most amount of fish",
      created: "One Day Ago",
      participants: 4,
    },
  },
];

const MyGroup = () => {
  const params = useParams();
  const groupID = params?.id;
  const groupData = groups.find((g) => g.id === groupID);
  
  if (!groupData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <Fish className="w-16 h-16 mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-red-500 mb-2">Group not found</h2>
          <p className="text-gray-600">The fishing group you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Animated Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-blue-100 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl">
              <Fish className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                My Fishing Group
              </h1>
              <p className="text-gray-600 text-lg">Connect, Compete, and Catch Together</p>
            </div>
          </div>

          {/* Enhanced Group Info Card */}
          <Card className="mb-8 overflow-hidden shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">{groupData.name}</CardTitle>
                  <div className="flex flex-wrap items-center gap-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Created: {groupData.created}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{groupData.detail}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Fish className="w-8 h-8 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20 border-4 border-blue-200 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-2xl font-bold">
                    A
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Abu</h3>
                  <p className="text-blue-600 font-medium">Pekan Local Fisherman (Guide)</p>
                  <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-200">
                    <Trophy className="w-3 h-3 mr-1" />
                    Expert Guide
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Group Members */}
          <Card className="mb-8 shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                Group Members
                <Badge variant="secondary" className="ml-auto bg-blue-100 text-blue-800">
                  {groupData.members.length} Members
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {groupData.members.map((member, index) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-5 bg-gradient-to-r from-white to-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-blue-200">
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-semibold text-gray-800 text-lg">{member.name}</span>
                          {member.verified && (
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                              <span className="mr-1">✓</span>
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-blue-600 font-medium">{member.level}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Challenge Box with Background Image */}
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-orange-50 border-b border-orange-100">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex justify-between flex-row w-full p-2 rounded-lg">
                    <div>
                  <Trophy className="w-5 h-5 text-white" />  
                   Group Challenge Activities
                    </div>
              <div className="py-2">
                    <Button onClick={()=>setIsCreateDialogOpen(true)}>Create New Challenge</Button>
                </div>
                </div>
               
                
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div 
                className="relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '280px'
                }}
              >
                {/* Enhanced overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                
                {/* Content with enhanced visibility */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Fish className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-orange-500/90 text-white hover:bg-orange-600 backdrop-blur-sm">
                        Active Challenge
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">
                      {groupData.challenge.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span className="font-medium drop-shadow-md">
                          Game Created: {groupData.challenge.created}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="font-medium drop-shadow-md">
                          {groupData.challenge.participants} Members Playing
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href={`/tourist/mygroup/${groupID}/${groupData.challenge.id}`}>
                    <Button
                      className="bg-white/90 text-orange-700 hover:bg-white hover:text-orange-800 font-semibold px-6 py-3 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:scale-105"
                    >
                      <Trophy className="w-4 h-4 mr-2" />
                      View Challenge
                    </Button>
                    </Link>
                    
                  </div>
                </div>
                
                {/* Animated fishing elements */}
                <div className="absolute top-4 right-4 opacity-30">
                  <Fish className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <CreateChallengeDialog open={isCreateDialogOpen} 
        onOpenChange={setIsCreateDialogOpen}/>
    </div>
  );
};

export default MyGroup;