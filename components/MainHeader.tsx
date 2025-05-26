"use client"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Settings, Fish } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const MainHeader = () => {
  const pathName = usePathname()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-lg">
      <div className="container mx-auto px-10 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href={"/tourist/dashboard"}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Pekan Hooked
            </span>
          </div>
            </Link>
          {/* Navigation Links */}
          <nav className="flex flex-row space-x-8">

             <nav className="flex flex-row space-x-8">
  <p
    onClick={() => router.push("/tourist/mygroup")}
    className={`cursor-pointer relative px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:text-blue-600 ${
      pathName === "/tourist/mygroup" ? "text-blue-600 underline underline-offset-2" : "text-gray-700 hover:text-blue-600"
    }`}
  >
    My Group
  </p>
  <p
    onClick={() => router.push("/tourist/sos")}
    className={`cursor-pointer relative px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:text-blue-600 ${
      pathName === "/tourist/sos" ? "text-blue-600 underline underline-offset-2" : "text-gray-700 hover:text-blue-600"
    }`}
  >
    Emergency SOS
  </p>
  <p
    onClick={() => router.push("/tourist/dashboard/result")}
    className={`cursor-pointer relative px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:text-blue-600 ${
      pathName === "/tourist/dashboard/result" ? "text-blue-600 underline underline-offset-2" : "text-gray-700 hover:text-blue-600"
    }`}
  >
    My Journey
  </p>
  <p
    onClick={() => router.push("/tourist/map")}
    className={`cursor-pointer relative px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:text-blue-600 ${
      pathName === "/tourist/map" ? "text-blue-600 underline underline-offset-2" : "text-gray-700 hover:text-blue-600"
    }`}
  >
    Map
  </p>
</nav>
        
          </nav>

          {/* Profile Section */}
          <div className="hidden md:flex items-center space-x-6 border border-blue-300 rounded-md ">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-3 hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors duration-200 cursor-pointer">
                <Avatar className="w-10 h-10 border-2 border-blue-200 shadow-md">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">John Doe</p>
                  <p className="text-xs text-blue-600 font-medium">Level 1 Angler</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-blue-600">Level 1 Angler</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
