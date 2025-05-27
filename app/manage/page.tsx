import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  PlayCircle,
} from "lucide-react"
import Image from "next/image"
import ManageHeader from "@/components/ManageHeader"
import ManageFooter from "@/components/ManageFooter"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      
      <ManageHeader/>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24  min-h-screen px-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-4">
                    {"#1 Tourism Management Platform"}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your
                    <span className="text-primary"> Tourism Business</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Complete tourism management solution for tour operators, travel agencies, and hospitality
                    businesses. Manage bookings, customers, inventory, and analytics all in one platform.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-8">
                    <Zap className="mr-2 h-4 w-4" />
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </div>
               
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tourism Management Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ManageFooter/>
        
      </main>

  
    </div>
  )
}
