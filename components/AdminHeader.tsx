"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

const AdminHeader = () => {
  const [login, setLogin] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className=" px-5">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">
              Pekan Tourism Insights
            </span>
          </div>

          {/*Desktop Navigation*/}
          {login && (
            <nav className="hidden md:flex items-center space-x-10 font-bold ">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">
                Insights
              </a>
              <a className="text-gray-700 hover:text-blue-600 transition-colors">
                Program & Training
              </a>
              <a className="text-gray-700 hover:text-blue-600 transition-colors">
                Help
              </a>
            </nav>
          )}

          {/*Log In */}
          <Link href="/admin/dashboard">
          
          <Button
            variant={"outline"}
            className="border-blue-600 text-blue-600 "
            onClick={() => setLogin(true)}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Log In
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
