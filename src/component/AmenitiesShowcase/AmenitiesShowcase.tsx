"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const amenitiesList = [
  {
    id: 1,
    name: "FITNESS CENTER",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    name: "MEDIA & GAME ROOM",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    name: "EXPANSIVE ROOFTOP DECK",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop",
  },
  {
    id: 4,
    name: "MOVIE SCREENING ROOM",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop",
  },
  {
    id: 5,
    name: "BUSINESS LOUNGE",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
];

const AmenitiesShowcase = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row h-full">
        <div className="lg:w-full flex px-6">
          <div className="w-full max-w-full lg:max-w-none">
            <div className="space-y-0">
              {amenitiesList.map((amenity, index) => (
                <div
                  key={amenity.id}
                  className={`border-b border-gray-300  transition-all duration-1000 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-8 py-6 text-[30px] cursor-pointer font-light tracking-wide transition-all duration-500 hover:pl-4 group ${
                      activeIndex === index
                        ? "bg-[#344237] text-[#fff]"
                        : "text-gray-600"
                    }`}
                    style={{
                      fontFamily: "serif",
                    }}
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {amenity.name}
                    </span>
                  </button> */}

                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-8 py-4 text-[20px] lg:text-[25px] cursor-pointer font-light tracking-wide transition-all duration-500 hover:pl-4 group ${
                      activeIndex === index
                        ? "bg-[#344237] text-[#fff]"
                        : "text-gray-600"
                    }`}
                    style={{
                      fontFamily: "serif",
                    }}
                  >
                    <div className="flex items-center">
                      {activeIndex === index && (
                        <ArrowRight
                          size={24}
                          className="mr-3 -ml-2"
                          style={{
                            strokeWidth: 1.5,
                            opacity: 1,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      )}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {amenity.name}
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`lg:w-[70%] relative h-[400px] mt-8 mb-8 lg:mt-0 lg:h-screen transition-all duration-1200 delay-300 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {amenitiesList.map((amenity, index) => (
            <div
              key={amenity.id}
              className={`absolute flex items-center justify-center inset-0 transition-opacity duration-700 ${
                activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={amenity.image}
                alt={amenity.name}
                className="w-[80%] lg:w-full h-full object-cover"
                style={{
                  animation:
                    activeIndex === index
                      ? "zoomInSlow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both"
                      : "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes zoomInSlow {
          from {
            transform: scale(1.1);
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
      `}</style>
    </section>
  );
};

export default AmenitiesShowcase;
