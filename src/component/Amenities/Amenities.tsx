"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const AmenitiesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative flex items-center overflow-hidden bg-[#F5F1E8] py-13"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        {/* Top Right Leaf */}
        <svg
          viewBox="0 0 400 600"
          fill="none"
          className="absolute -right-20 -top-10 w-80 h-auto"
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
          className="absolute -left-32 -bottom-20 w-96 h-auto transform rotate-45"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-10">
        <div
          className={`mb-8 transition-all text-center lg:text-left duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-xs md:text-sm tracking-[0.3em] font-light text-gray-700">
            OUR AMENITIES
          </span>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-[83px] text-center lg:text-left leading-tight">
            <span
              className={`transition-all duration-1000 delay-100 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                fontWeight: "300",
                color: "#2C2C2C",
                letterSpacing: "0.02em",
              }}
            >
              DESIGNED TO{" "}
            </span>
            <span
              className={` transition-all duration-1000 delay-300 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                fontWeight: "300",
                color: "#9B6B4F",
                letterSpacing: "0.02em",
              }}
            >
              RECHARGE
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div
            className={`transition-all flex flex-col items-center lg:items-start text-center lg:text-left duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p
              className="text-gray-700 text-center lg:text-left leading-relaxed text-sm md:text-base max-w-xl"
              style={{
                letterSpacing: "0.5px",
                lineHeight: "1.5",
              }}
            >
              WHETHER YOU'RE BREAKING A SWEAT IN THE
              <br />
              GYM, GRILLING ON THE ROOFTOP, PLUNGING INTO
              <br />
              SOMETHING REFRESHINGLY COLD, OR GETTING LOST
              <br />
              IN A GAME, PROSPER'S AMENITIES ARE DESIGNED
              <br />
              FOR WORK, PLAY, AND EVERYTHING IN BETWEEN.
            </p>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <a
              href="#amenities"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#A0B5A0] text-gray-700 text-xs md:text-sm tracking-[0.2em] font-light transition-all duration-300 hover:bg-[#A0B5A0] hover:text-white group"
            >
              DISCOVER AMENITIES
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div
          className={`mt-10 transition-all duration-1000 delay-900 ${isInView ? "w-full opacity-10" : "w-0 opacity-0"
            }`}
          style={{
            height: "1px",
            backgroundColor: "gray",
          }}
        ></div>
      </div>

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
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(30px) rotate(50deg);
          }
        }
      `}</style>
    </section>
  );
};

export default AmenitiesSection;
