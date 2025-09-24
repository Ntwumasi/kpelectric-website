'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-kp-dark border-b border-kp-gray sticky top-0 z-50">
      <div className="section-padding py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/kp-logo.svg"
              alt="KP Electric Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="font-montserrat font-bold text-xl text-white">kP Electric</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-kp-yellow transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-kp-yellow transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-kp-yellow transition-colors">
              Contact
            </Link>
            <a href="tel:978-302-2521" className="btn-primary text-sm">
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-kp-gray pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-kp-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-kp-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-kp-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:978-302-2521" className="btn-primary text-center text-sm">
                Call Now: 978-302-2521
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}