"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Plus,
  Minus,
  Building2,
  Coffee,
  ShoppingBag,
  TreePine,
  Bus,
} from "lucide-react";

const NeighborhoodMapSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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

  const categories = [
    {
      id: "arts",
      icon: Building2,
      title: "ARTS & CULTURE",
      items: [
        "Brooklyn Museum",
        "Brooklyn Public Library",
        "Barclays Center",
        "Brooklyn Academy of Music",
      ],
    },
    {
      id: "cafes",
      icon: Coffee,
      title: "CAFES & BARS",
      items: [
        "Olmsted Restaurant",
        "Chavela's",
        "Blue Bottle Coffee",
        "Weather Up",
      ],
    },
    {
      id: "shopping",
      icon: ShoppingBag,
      title: "SHOPPING",
      items: [
        "Boutique Shops on Vanderbilt",
        "Target Brooklyn",
        "Union Market",
        "Whole Foods Market",
      ],
    },
    {
      id: "parks",
      icon: TreePine,
      title: "PARKS & RECREATION",
      items: [
        "Prospect Park",
        "Brooklyn Botanic Garden",
        "Grand Army Plaza",
        "Herbert Von King Park",
      ],
    },
    {
      id: "transportation",
      icon: Bus,
      title: "TRANSPORTATION",
      items: [
        "Atlantic Av-Barclays Ctr Station",
        "Multiple Subway Lines (2, 3, 4, 5, B, D, N, Q, R)",
        "Bus Routes",
        "Citi Bike Stations",
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#8B9B7E] flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      <div className="w-full lg:w-2/5 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col">
        <div
          className={`mb-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
        >
          <h2
            className="text-3xl lg:text-4xl font-light tracking-wider"
            style={{ letterSpacing: "0.1em" }}
          >
            NEIGHBORHOOD
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-0 flex-1">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className={`border-b border-white/20 transition-all duration-1000 ${isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full cursor-pointer flex items-center justify-between py-5 md:py-4 px-4 text-left hover:bg-white/5 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    <span
                      className="text-sm md:text-[14px] tracking-wider font-light"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {category.title}
                    </span>
                  </div>
                  <div className="transition-transform duration-300">
                    {isExpanded ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="py-4 pl-4 md:pl-6 pr-4 space-y-2">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-white/90 text-xs md:text-[16px] font-light hover:text-white transition-colors duration-300 cursor-pointer"
                        style={{
                          animation: isExpanded
                            ? `slideIn 0.5s ease-out ${idx * 0.1}s both`
                            : "none",
                          letterSpacing: "0.1em",
                        }}
                      >
                        <span className="text-white/60 font-light min-w-[1.5rem]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`lg:block lg:w-3/5 py-1 md:py-12 px-7 mb-6 md:mb-0 relative transition-all duration-1200 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
      >
        <div className="w-full h-[500px] md:h-[500px] relative overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2226872023647!2d-73.98784492472043!3d40.70257097139494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a33e27d5035%3A0x4a01e8a1c6b5c5b5!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        <div
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            animation: isInView ? "bounce 2s ease-in-out infinite" : "none",
          }}
        >
          <div className="relative">
            <div className="bg-[#8B9B7E] rounded-t-full rounded-b-none w-12 h-16 flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 60 60"
                fill="none"
              >
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
              </svg>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default NeighborhoodMapSection;
