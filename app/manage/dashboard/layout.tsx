import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import ManageFooter from "@/components/ManageFooter";
import ManageHeader from "@/components/ManageHeader";
import SignedManageHeader from "@/components/SignedManageHeader";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pekan Hooked",
  description: "",
  icons:{
    icon: "/fishinglogo.png"
  }
};

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
     <SignedManageHeader/>
      {children}
       <ManageFooter/>
    </div>
  );
}