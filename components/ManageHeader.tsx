"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BarChart3 } from "lucide-react";

const ManageHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-8">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart3 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">PekanHooked Manage</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href={"/manage/sign-in"}>
            <Button size="lg">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ManageHeader;
