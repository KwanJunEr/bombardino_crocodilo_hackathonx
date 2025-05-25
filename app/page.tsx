"use client";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import FishingSpotSection from "@/components/sections/FishingSpotSection";
import CallToAction from "@/components/sections/CallToAction";
import TourismExperienceSection from "@/components/sections/TourismExperienceSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PekanHookedLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Navigation */}
       <Header/>
      {/* Hero Carousel */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Introduction to Pekan Fishing */}
      <AboutSection />

      {/* Popular Fishing Spots */}
      <FishingSpotSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Tourism Experience Section */}
      <TourismExperienceSection />

      {/* CTA Section */}
      <CallToAction />
      {/* Footer */}
      <Footer/>
    </div>
  );
}
