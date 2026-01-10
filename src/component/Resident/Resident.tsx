"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const ResidencesSection = () => {
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
      id="residences"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 400 600"
          fill="none"
          className="absolute -left-20 top-1/4 w-96 h-auto"
          style={{
            animation: isInView ? "floatSlow 8s ease-in-out infinite" : "none",
          }}
        >
          <path
            d="M150 50C180 100 200 150 210 200C215 225 220 250 220 280C220 320 205 360 180 390C165 410 145 425 125 425C100 425 75 405 60 375C40 330 30 280 45 235C60 180 90 120 130 70C137 60 145 52 150 50Z"
            fill="#A0B5A0"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="w-full flex items-center py-16 ">
        <div className="grid lg:grid-cols-2 w-full items-center">
          <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-20">
            <div
              className={`mb-8 text-center transition-all duration-1000 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <span
                className="text-sm tracking-[0.3em] font-light"
                style={{ color: "#A0B5A0" }}
              >
                RESIDENCES
              </span>
            </div>

            <div
              className={`mb-12 transition-all duration-1000 delay-200 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <h2
                className="text-4xl leading-tight mb-2"
                style={{
                  fontWeight: "300",
                  color: "#2C2C2C",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                }}
              >
                LIVE SPACIOUSLY <br /> LIVE BEAUTIFULLY
              </h2>
            </div>

            <div
              className={`mb-12 transition-all ease-in ease-out duration-1000 delay-400 ${isInView ? "w-24 opacity-100" : "w-0 opacity-0"
                }`}
              style={{
                height: "2px",
                backgroundColor: "#A0B5A0",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></div>

            <div
              className={`mb-12 transition-all duration-1000 flex flex-col items-center delay-500 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <p
                className="text-gray-600 leading-relaxed max-w-lg"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                  lineHeight: "1.8",
                  textAlign: "center",
                }}
              >
                BRIGHT, OPEN LAYOUTS. SLEEK, MODERN KITCHENS.
                <br />
                SPA-LIKE BATHROOMS THAT MAKE EVERY MORNING
                <br />
                FEEL LIKE A FRESH START. AT PROSPER, EVERY DETAIL IS
                <br />
                DESIGNED TO MAKE HOME YOUR FAVORITE PLACE TO BE.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all text-center duration-1000 delay-700 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <a
                href="#residences"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 text-sm tracking-[0.2em] font-light transition-all duration-300 hover:bg-[#A0B5A0] hover:text-white group"
                style={{
                  borderColor: "#A0B5A0",
                  color: "#2C2C2C",
                }}
              >
                DISCOVER RESIDENCES
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div
            className={`relative lg:h-screen transition-all duration-1200 delay-300 ${isInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
              }`}
          >
            <div className="relative h-[500px] lg:h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1600&fit=crop"
                alt="Modern Kitchen Interior"
                className="w-full h-full object-cover"
                style={{
                  animation: isInView
                    ? "zoomInSlow 1.5s cubic-bezier(0.22, 1, 0.36, 1) both"
                    : "none",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(3deg);
          }
        }
        @keyframes zoomInSlow {
          from {
            transform: scale(1.15);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default ResidencesSection;
