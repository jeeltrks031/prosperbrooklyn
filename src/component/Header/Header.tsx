"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "RESIDENCES", href: "#residences" },
    { name: "AMENITIES", href: "#amenities" },
    { name: "NEIGHBORHOOD", href: "/neighborhood" },
    { name: "AVAILABILITY", href: "#availability" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        style={{
          animation: "slideDown 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          {/* Left - Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`flex items-center gap-3 cursor-pointer transition-colors duration-300 hover:opacity-70 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-8 h-0.5 bg-current"></span>
              <span className="w-8 h-0.5 bg-current"></span>
              <span className="w-8 h-0.5 bg-current"></span>
            </div>
            <span className="hidden md:inline text-sm tracking-widest font-light">
              MENU
            </span>
          </button>

          {/* Center - Logo */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              animation:
                "fadeScale 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
            }}
          >
            <div
              className={`transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="w-12 h-12 md:w-14 md:h-14"
              >
                {/* Stylized CP monogram */}
                <path
                  d="M20 15C25 12 30 15 30 22C30 29 25 32 20 32V15Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle
                  cx="25"
                  cy="22"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M35 28C35 20 40 15 47 15C50 15 52 16 52 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M35 32C35 35 37 38 40 40C43 42 47 43 50 42"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </a>

          <div className="flex items-center gap-6">
            <a
              href="#login"
              className={`hidden md:inline text-sm tracking-widest font-light transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              RESIDENT LOGIN
            </a>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-700 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, #2C3E2E 0%, #1a2520 100%)",
        }}
      >
        <div className="absolute top-6 left-6 md:left-12">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 cursor-pointer text-white transition-opacity duration-300 hover:opacity-70"
            style={{
              animation: isMenuOpen
                ? "fadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both"
                : "none",
            }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center border border-white rounded-full">
              <X className="w-6 h-6" />
            </div>
            <span className="hidden md:inline text-sm tracking-widest font-light">
              CLOSE
            </span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
            <nav className="">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="overflow-hidden"
                  style={{
                    animation: isMenuOpen
                      ? `slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${
                          0.1 + index * 0.1
                        }s both`
                      : "none",
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white text-4xl font-light tracking-wide py-2 transition-all duration-300 hover:pl-4"
                    style={{
                      fontFamily: "serif",
                    }}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* Address */}
            {/* <div
              className="mt-16 text-white space-y-1"
              style={{
                animation: isMenuOpen
                  ? "fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both"
                  : "none",
              }}
            >
              <p className="text-sm tracking-widest font-light">
                1042 ATLANTIC AVENUE
              </p>
              <p className="text-sm tracking-widest font-light">
                BROOKLYN, NY 11238
              </p>
            </div> */}
          </div>

          <div
            className="flex-1 relative overflow-hidden"
            style={{
              animation: isMenuOpen
                ? "slideInRight 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both"
                : "none",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2C3E2E]/50 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1600&fit=crop"
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <a
          href="#tour"
          onClick={() => setIsMenuOpen(false)}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#98523C] text-white px-4 py-3 text-sm tracking-widest font-light hover:bg-[#a87435] transition-colors duration-300"
          style={{
            writingMode: "vertical-rl",
            animation: isMenuOpen
              ? "slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both"
              : "none",
          }}
        >
          BOOK A TOUR
        </a>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 0.7;
            transform: scale(1);
          }
        }
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
