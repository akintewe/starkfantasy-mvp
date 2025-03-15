"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, User, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative w-full px-4 py-3">
      {/* Desktop - Balloon style navbar with external logo and user icon */}
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <div className="flex-shrink-0">
          <Image src="/placeholder.svg?height=48&width=48" alt="Logo" width={48} height={48} className="h-12 w-12" />
        </div>

        <div className="bg-slate-900 rounded-full px-12 py-4 flex items-center justify-center space-x-12 shadow-lg">
          {["Home", "About", "Tournaments", "Rules", "Support"].map((item) => (
            <Link key={item} href="#" className="text-white hover:text-slate-200 transition-colors text-sm font-medium">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex-shrink-0">
          <button className="text-white hover:text-slate-200 transition-colors bg-slate-900 p-3 rounded-full">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Tablet - Full width navbar with centered links */}
      <div className="hidden md:flex lg:hidden bg-slate-900 w-full px-6 py-4 items-center justify-between rounded-lg">
        <div className="flex-shrink-0">
          <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="h-10 w-10" />
        </div>

        <div className="flex space-x-8">
          {["Home", "About", "Tournaments", "Rules", "Support"].map((item) => (
            <Link key={item} href="#" className="text-white hover:text-slate-200 transition-colors text-sm font-medium">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex-shrink-0">
          <button className="text-white hover:text-slate-200 transition-colors">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile - Collapsible navbar */}
      <div className="md:hidden bg-slate-900 w-full px-4 py-3 flex items-center justify-between rounded-lg">
        <div className="flex-shrink-0">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="h-8 w-8" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-slate-200 transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button onClick={toggleMenu} className="text-white hover:text-slate-200 transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-slate-900 shadow-lg z-10 transition-all duration-300 ease-in-out mt-2 rounded-lg",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col px-4 py-2 space-y-3">
          {["Home", "About", "Tournaments", "Rules", "Support"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white hover:text-slate-200 py-2 transition-colors text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

