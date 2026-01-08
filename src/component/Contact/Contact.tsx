"use client";
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F1E8] py-30"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 400 600"
          fill="none"
          className="absolute -right-20 top-10 w-96 h-auto"
          style={{
            animation: isInView ? "floatSlow 10s ease-in-out infinite" : "none",
          }}
        >
          <path
            d="M150 50C180 100 200 150 210 200C215 225 220 250 220 280C220 320 205 360 180 390C165 410 145 425 125 425C100 425 75 405 60 375C40 330 30 280 45 235C60 180 90 120 130 70C137 60 145 52 150 50Z"
            fill="#8B7355"
            opacity="0.8"
          />
        </svg>

        <svg
          viewBox="0 0 400 600"
          fill="none"
          className="absolute -left-32 bottom-20 w-[500px] h-auto transform"
          style={{
            animation: isInView
              ? "floatSlowReverse 12s ease-in-out infinite"
              : "none",
          }}
        >
          <path
            d="M150 50C180 100 200 150 210 200C215 225 220 250 220 280C220 320 205 360 180 390C165 410 145 425 125 425C100 425 75 405 60 375C40 330 30 280 45 235C60 180 90 120 130 70C137 60 145 52 150 50Z"
            fill="#8B7355"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
        <div
          className={`mb-8 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs md:text-sm tracking-[0.3em] font-light text-gray-600">
            LET'S TALK HOME
          </span>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2
            className="text-4xl lg:text-[50px]"
            style={{
              letterSpacing: "0.05em",
              color: "#344237",
              fontWeight: "300",
            }}
          >
            GET IN TOUCH
          </h2>
        </div>

        <div className="relative flex items-center justify-center mb-8">
          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              height: "100px",
              backgroundColor: "gray",
              width: "1px",
            }}
          ></div>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-gray-700 text-[12px] lg:text-[13px] leading-relaxed max-w-3xl mx-auto"
            style={{
              letterSpacing: "0.05em",
              lineHeight: "23px",
            }}
          >
            THINKING ABOUT MAKING PROSPER YOUR NEXT MOVE?
            <br />
            WE'D LOVE TO SHOW YOU AROUND. GET IN TOUCH
            <br />
            WITH OUR LEASING TEAM TO SCHEDULE A TOUR.
          </p>
        </div>

        <div
          className={`flex flex-row sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:info@prosper.com"
            className="group flex items-center justify-center w-12 h-12 border-1 border-gray-700 rounded-full transition-all duration-300 hover:bg-[#344237] hover:scale-110"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
          </a>

          <a
            href="tel:+1234567890"
            className="group flex items-center justify-center w-12 h-12 border-1 border-gray-700 rounded-full transition-all duration-300 hover:bg-[#344237] hover:scale-110"
            aria-label="Call Us"
          >
            <Phone className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Vertical Book a Tour Button */}
      <a
        href="#tour"
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#9B6B4F] text-white px-3 py-3 text-xs tracking-widest font-light hover:bg-[#8B5A3F] transition-all duration-300 z-40 hidden lg:block shadow-lg"
        style={{
          writingMode: "vertical-rl",
        }}
      >
        BOOK A TOUR
      </a>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(5deg);
          }
        }
        @keyframes floatSlowReverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(30px) rotate(-5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
