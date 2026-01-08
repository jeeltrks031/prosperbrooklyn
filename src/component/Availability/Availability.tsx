"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const Availability = () => {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop"
          alt="Luxury Bathroom"
          className="w-full h-full object-cover"
          style={{
            animation: isInView
              ? "zoomInSlow 1.5s cubic-bezier(0.22, 1, 0.36, 1) both"
              : "none",
          }}
        />
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            animation: isInView
              ? "fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both"
              : "none",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-16 max-w-5xl mx-auto">
        <div
          className={`mb-8 md:mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white text-xs md:text-[15px] tracking-[0.3em] font-light">
            AVAILABILITY
          </span>
        </div>

        <div className="mb-8 md:mb-12">
          <h2
            className={`text-4xl md:text-6xl xl:text-[66px] text-white transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              lineHeight: "60px",
              fontWeight: "300",
            }}
          >
            FIND YOUR
            <br />
            PERFECT FIT
          </h2>
        </div>

        {/* Decorative Line */}
        <div className="relative flex items-center justify-center mb-8 md:mb-12">
          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              height: "150px",
              backgroundColor: "white",
              width: "1px",
            }}
          ></div>
        </div>

        <div
          className={`mb-10 md:mb-14 transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-white text-sm lg:text-[15px] leading-relaxed max-w-3xl mx-auto"
            style={{
              letterSpacing: "0.05em",
              lineHeight: "20px",
              fontWeight: "300",
            }}
          >
            EXPLORE OUR AVAILABLE RESIDENCES AND
            <br className="hidden sm:block" />
            <span className="font-medium">EXPERIENCE</span> THE BEST OF PROSPECT
            HEIGHTS LIVING.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#availability"
            className="inline-flex items-center gap-3 px-8 md:px-8 py-3 md:py-3 border-2 border-white text-white text-xs md:text-sm tracking-[0.2em] font-light transition-all duration-300 hover:bg-white hover:text-gray-900 group"
          >
            VIEW AVAILABILITY
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style jsx>{`
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Availability;
