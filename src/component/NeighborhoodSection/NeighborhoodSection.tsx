"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";

const NeighborhoodSectionPage = () => {
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
    <>
      <Header />
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-[#F5F1E8] py-10 md:py-22"
      >
        <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-10 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 300 800"
            fill="none"
            className="absolute left-0 top-10 w-full h-auto"
            style={{
              animation: isInView
                ? "floatLeft 12s ease-in-out infinite"
                : "none",
            }}
          >
            <path
              d="M80 100C100 140 115 180 120 220C123 245 125 270 125 295C125 330 115 365 95 390C85 405 70 415 55 415C35 415 15 400 5 375C-10 340 -15 300 -5 260C5 210 30 160 60 120C65 112 72 105 80 100Z"
              stroke="#8B7355"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />

            <path
              d="M60 350C85 400 105 450 112 500C116 530 118 560 118 590C118 635 105 680 80 710C68 730 50 745 32 745C8 745 -15 725 -28 695C-48 650 -55 600 -42 555C-28 495 0 435 35 385C42 373 52 363 60 350Z"
              stroke="#8B7355"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />

            <path
              d="M100 600C120 645 135 690 140 735C142 760 143 785 143 810C143 850 133 890 113 920C103 940 88 955 73 955C53 955 33 938 23 913C8 873 3 828 13 788C23 738 43 688 73 648C78 640 87 633 100 600Z"
              stroke="#8B7355"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-10 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 300 800"
            fill="none"
            className="absolute right-0 top-20 w-full h-auto"
            style={{
              animation: isInView
                ? "floatRight 14s ease-in-out infinite"
                : "none",
            }}
          >
            <path
              d="M220 120C200 160 185 200 180 240C177 265 175 290 175 315C175 350 185 385 205 410C215 425 230 435 245 435C265 435 285 420 295 395C310 360 315 320 305 280C295 230 270 180 240 140C235 132 228 125 220 120Z"
              stroke="#8B7355"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />

            <path
              d="M240 380C215 425 195 475 188 525C184 555 182 585 182 615C182 660 195 705 220 735C232 755 250 770 268 770C292 770 315 750 328 720C348 675 355 625 342 580C328 520 300 460 265 410C258 398 248 388 240 380Z"
              stroke="#8B7355"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
          <div
            className={`mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="text-xs md:text-sm tracking-[0.3em] font-light text-gray-600">
              NEIGHBORHOOD
            </span>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center mb-12">
            <div
              className={`transition-all duration-1000 delay-200 ${isInView ? "h-32 opacity-100" : "h-0 opacity-0"
                }`}
              style={{
                width: "1px",
                backgroundColor: "#8B7355",
              }}
            ></div>
          </div>

          <div className="space-y-2">
            <h2
              className={`text-4xl md:text-6xl lg:text-6xl font-light transition-all duration-1000 delay-400 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                letterSpacing: "0.08em",
                color: "#344237",
              }}
            >
              PRECISELY
            </h2>
            <h2
              className={`text-4xl md:text-6xl lg:text-6xl transition-all duration-1000 delay-600 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                letterSpacing: "0.08em",
                color: "#344237",
              }}
            >
              WHERE
            </h2>
            <h2
              className={`text-4xl lg:text-6xl font-ligh transition-all duration-1000 delay-800 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                letterSpacing: "0.08em",
              }}
            >
              <span style={{ color: "#344237" }}>YOU </span>
              <span style={{ color: "#98523C" }}>BELONG</span>
            </h2>
          </div>
        </div>


        <div className="mt-12 w-full">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="City neighborhood with archway"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <a
          href="#tour"
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#9B6B4F] text-white px-2 py-2 text-xs md:text-sm tracking-widest font-light hover:bg-[#8B5A3F] transition-all duration-300 z-40 hidden lg:block shadow-lg"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          BOOK A TOUR
        </a>

        <style jsx>{`
          @keyframes floatLeft {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            33% {
              transform: translateY(-20px) translateX(-10px);
            }
            66% {
              transform: translateY(10px) translateX(5px);
            }
          }
          @keyframes floatRight {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            33% {
              transform: translateY(15px) translateX(10px);
            }
            66% {
              transform: translateY(-25px) translateX(-5px);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default NeighborhoodSectionPage;
