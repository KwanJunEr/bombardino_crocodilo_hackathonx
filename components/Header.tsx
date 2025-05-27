import React from "react";
import Link from "next/link";
import { Fish, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Pekan Hooked
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
          <Link href={"/tourist/auth/sign-in"}>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-green-700 shadow-lg">
              <Globe className="h-4 w-4 mr-2" />
              Join Platform
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
