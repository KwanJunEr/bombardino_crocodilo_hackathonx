import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Fish } from "lucide-react";
import React from "react";
import Link from "next/link";

const groups = [
  {
    id: "AXBTGr",
    groupName: "Trip Tung Tung Fishing",
    detail: "Fishing and Travelling to Pekan",
    createdAt: "28th May 2025",
    members: 4,
    maxMembers: 4,
    location: "Pekan, Pahang",
    status: "Active",
    nextTrip: "2nd June 2025",
  },
];

const Group = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-start mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-blue-900 tracking-tight">
              List of My Fishing Groups
            </h1>
            <p className="text-blue-600 text-lg">
              Show all current groups and activities
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <Calendar className="w-4 h-4 mr-2" />
            Show Past History
          </Button>
        </div>

        {/* Current Groups Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
              <Fish className="w-6 h-6 text-blue-600" />
              Current Fishing Groups
            </h2>
            <hr className="border-blue-200 border-2" />
          </div>

          {/* Single Group Card - Full Width */}
          <div className="w-full">
            {groups.map((group) => (
              <Card
                key={group.id}
                className="hover:shadow-xl transition-all duration-300 border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-white/90 w-full"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={
                        group.status === "Active" ? "default" : "secondary"
                      }
                      className={
                        group.status === "Active"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    >
                      {group.status}
                    </Badge>
                    <span className="text-xs text-blue-500 font-medium">
                      #{group.id}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-blue-900 leading-tight">
                    {group.groupName}
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    {group.detail}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-blue-700">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">
                      {group.location}
                    </span>
                  </div>

                  {/* Members */}
                  <div className="flex items-center gap-2 text-blue-700">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">
                      {group.members}/{group.maxMembers} members
                    </span>
                    <div className="flex-1 bg-blue-100 rounded-full h-2 ml-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(group.members / group.maxMembers) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Next Trip */}

                  {/* Created Date */}
                  <div className="pt-2 border-t border-blue-100">
                    <span className="text-xs text-blue-500">
                      Created: {group.createdAt}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link href={`/tourist/mygroup/${group.id}`}>
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white w-full"
                      >
                        View Details
                      </Button>{" "}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Group;

