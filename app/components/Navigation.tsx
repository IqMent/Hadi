'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm bg-white/90' 
        : 'bg-green-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'text-green-900 group-hover:text-green-700' 
                : 'text-white group-hover:text-green-100'
            }`}>
              Aram Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-all duration-300 ${
                pathname === "/" 
                  ? isScrolled 
                    ? "text-green-900 font-semibold border-b-2 border-green-900" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
                  : isScrolled 
                    ? "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/summary" 
              className={`transition-all duration-300 ${
                pathname === "/summary" 
                  ? isScrolled 
                    ? "text-green-900 font-semibold border-b-2 border-green-900" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
                  : isScrolled 
                    ? "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
              }`}
            >
              Summary Information
            </Link>
            <Link 
              href="/about" 
              className={`transition-all duration-300 ${
                pathname === "/about" 
                  ? isScrolled 
                    ? "text-green-900 font-semibold border-b-2 border-green-900" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
                  : isScrolled 
                    ? "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/business" 
              className={`transition-all duration-300 ${
                pathname === "/business" 
                  ? isScrolled 
                    ? "text-green-900 font-semibold border-b-2 border-green-900" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
                  : isScrolled 
                    ? "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
              }`}
            >
              Business & Expertise
            </Link>
            <Link 
              href="/projects" 
              className={`transition-all duration-300 ${
                pathname === "/projects" 
                  ? isScrolled 
                    ? "text-green-900 font-semibold border-b-2 border-green-900" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
                  : isScrolled 
                    ? "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contacts" 
              className={`transition-all duration-300 ${
                pathname === "/contacts" 
                  ? isScrolled 
                    ? "text-green-900 font-semibold border-b-2 border-green-900" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
                  : isScrolled 
                    ? "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700" 
                    : "text-white hover:text-green-100 hover:border-b-2 hover:border-green-100"
              }`}
            >
              Contacts
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2 rounded-md hover:bg-gray-100/20 transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white shadow-lg`}
      >
        <div className="px-4 py-2 space-y-2">
          <Link 
            href="/" 
            className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/" ? "bg-green-900 text-white" : "text-gray-900 hover:bg-green-50 hover:text-green-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/summary" 
            className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/summary" ? "bg-green-900 text-white" : "text-gray-900 hover:bg-green-50 hover:text-green-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Summary Information
          </Link>
          <Link 
            href="/about" 
            className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/about" ? "bg-green-900 text-white" : "text-gray-900 hover:bg-green-50 hover:text-green-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/business" 
            className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/business" ? "bg-green-900 text-white" : "text-gray-900 hover:bg-green-50 hover:text-green-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Business & Expertise
          </Link>
          <Link 
            href="/projects" 
            className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/projects" ? "bg-green-900 text-white" : "text-gray-900 hover:bg-green-50 hover:text-green-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/contacts" 
            className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/contacts" ? "bg-green-900 text-white" : "text-gray-900 hover:bg-green-50 hover:text-green-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 