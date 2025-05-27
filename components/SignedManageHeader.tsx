"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BarChart3 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SignedManageHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-8">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart3 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">PekanHooked Manage</span>
        </Link>

        <nav className="flex flex-row space-x-8">
          <p
            onClick={() => router.push("/manage/dashboard")}
            className={`cursor-pointer relative px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:text-blue-600 ${
              pathName === "/manage/dashboard"
                ? "text-blue-600 underline underline-offset-2"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Dashboard
          </p>
          <p
            onClick={() => router.push("/manage/learn")}
            className={`cursor-pointer relative px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:text-blue-600 ${
              pathName === "/manage/learn"
                ? "text-blue-600 underline underline-offset-2"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Train & Learn
          </p>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href={"/manage/sign-in"}>
            <Button size="lg">Log Out</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SignedManageHeader;
