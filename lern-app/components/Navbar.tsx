'use client'

import { Search, Bell } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a] border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-900 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          LERN
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex bg-gray-900 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500" />
            <input type="text" placeholder="Search..." className="bg-transparent ml-2 outline-none w-48" />
          </div>
          
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <Bell size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}