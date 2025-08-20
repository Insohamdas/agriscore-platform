"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-gradient-to-r from-green-50 via-white to-orange-50 border-b border-green-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex items-center space-x-2 animate-slide-in-up">
            <div className="flex items-center">
              <img
                src="https://ik.imagekit.io/rf5ixezme/agriscore-ezgif.com-crop.png?updatedAt=1755684847768"
                alt="AgriScore logo"
                className="h-40 md:h-40 w-auto animate-bounce-in"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement
                  if (t.src !== window.location.origin + "/placeholder-logo.svg") t.src = "/placeholder-logo.svg"
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center animate-slide-in-up animate-delay-300">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 hover:scale-105 animate-pulse-glow">
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-green-50 to-orange-50 border-t border-green-200 rounded-b-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
