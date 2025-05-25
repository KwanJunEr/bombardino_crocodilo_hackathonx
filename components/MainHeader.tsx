import React from 'react'

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Pekan Hooked
                </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="/join" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-green-700 text-white px-4 py-2 rounded shadow-lg">
                Join Platform
                </a>
            </div>
            </div>
        </div>

    </header>
  )
}

export default MainHeader
