"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Fish,
  MapPin,
  Users,
  Camera,
  ShoppingCart,
  Shield,
  Trophy,
  Hotel,
  Anchor,
  Heart,
  Play,
  ChevronRight,
  Waves,
  Star,
  Globe,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import FishingSpotSection from "@/components/sections/FishingSpotSection";
import CallToAction from "@/components/sections/CallToAction";
import TourismExperienceSection from "@/components/sections/TourismExperienceSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";

export default function PekanHookedLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Navigation */}

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
    </div>
  );
}
