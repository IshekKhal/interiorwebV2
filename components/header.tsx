"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="#" className="text-xl sm:text-2xl font-bold font-serif text-accent flex-shrink-0">
          <span className="hidden sm:inline"> Company </span>
          <span className="sm:hidden">Company</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="#"
            className="text-xs lg:text-sm font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-xs lg:text-sm font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-xs lg:text-sm font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="text-xs lg:text-sm font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-xs lg:text-sm font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="text-right hidden lg:block">
            <div className="text-xs text-muted-foreground">Phone</div>
            <Link
              href="tel:+971501234567"
              className="text-xs lg:text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              +1 111 111111
            </Link>
          </div>
          <button className="px-4 lg:px-6 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:shadow-lg transition-all hover:gold-glow">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 sm:gap-4">
            <Link href="#" className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base">
              Home
            </Link>
            <Link href="#about" className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base">
              About
            </Link>
            <Link href="#services" className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base">
              Services
            </Link>
            <Link href="#portfolio" className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base">
              Projects
            </Link>
            <Link href="#contact" className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base">
              Contact
            </Link>
            <Link
              href="tel:+971501234567"
              className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base font-medium"
            >
              +1 111 111111
            </Link>
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground font-medium rounded-full mt-2 text-sm sm:text-base">
              Get Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
