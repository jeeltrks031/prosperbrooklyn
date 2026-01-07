// "use client";
// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../../hooks/useScrollAnimation";
// import decorativeLeaf from "../../assets/decorative-leaf.png";

// const IntroSection = () => {
//   const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
//   const { ref: textRef, isInView: textInView } = useScrollAnimation({
//     threshold: 0.2,
//   });

//   return (
//     <section className="section-padding relative bg-secondary overflow-hidden">
//       {/* Decorative Leaf */}
//       <motion.img
//         src={decorativeLeaf.src}
//         alt=""
//         className="absolute -top-20 -right-10 w-64 h-auto opacity-30 pointer-events-none"
//         initial={{ opacity: 0, rotate: -20 }}
//         animate={{ opacity: 0.3, rotate: 0 }}
//         transition={{ duration: 1.5 }}
//       />

//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <div ref={titleRef} className="mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             animate={titleInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="text-headline leading-tight"
//           >
//             Studios to spacious
//             <br />
//             <span className="italic">two-bedroom</span> homes.
//           </motion.h2>
//         </div>

//         {/* Subtitle and Description */}
//         <div ref={textRef} className="grid md:grid-cols-2 gap-12 md:gap-20">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={textInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h3 className="text-subheadline mb-6">
//               A home designed for growth, and the art of{" "}
//               <span className="italic font-medium">living well</span>
//             </h3>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={textInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <p className="text-body-serif text-muted-foreground leading-relaxed">
//               At Prosper, home isn't just where you live—it's where you thrive.
//               Located in the heart of Prospect Heights, our residences are
//               designed for comfort, style, and the joy of everyday moments. With
//               thoughtfully crafted spaces, next-level amenities, and a
//               neighborhood full of life, Prosper is where Brooklyn's energy
//               meets modern luxury.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative Leaf Bottom */}
//       <motion.img
//         src={decorativeLeaf.src}
//         alt=""
//         className="absolute -bottom-32 -left-20 w-80 h-auto opacity-20 pointer-events-none rotate-180"
//         style={{ transform: "rotate(180deg) scaleX(-1)" }}
//       />
//     </section>
//   );
// };

// export default IntroSection;

"use client";
import React, { useEffect, useRef, useState } from "react";

const IntroSection = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [titleInView, setTitleInView] = useState(false);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      titleObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative bg-[#F5F1E8] overflow-hidden py-20 md:py-25">
      {/* Decorative Leaf Top Right */}
      <div className="absolute -top-20 -right-10 w-64 h-auto opacity-20 pointer-events-none animate-leaf-float">
        <svg viewBox="0 0 200 300" fill="none" className="w-full h-full">
          <path
            d="M100 10C120 50 140 90 150 130C155 150 160 170 160 190C160 220 145 250 120 270C110 280 95 290 80 290C60 290 40 275 30 250C15 215 10 175 20 140C30 100 50 60 80 30C85 25 92 15 100 10Z"
            fill="#BF843D"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <div ref={titleRef} className="text-center mb-20">
          <h2
            className={`text-4xl leading-tight transition-all duration-1000 ease-out ${
              titleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              fontWeight: "300",
              letterSpacing: "0.02em",
              color: "#344237",
            }}
          >
            A HOME DESIGNED FOR GROWTH, <br />
            AND ART OF{" "}
            <span
              style={{
                color: "#98523C",
                fontStyle: "italic",
                fontWeight: "400",
              }}
            >
              LIVING WELL
            </span>
          </h2>

          {/* Decorative Line */}
          <div
            className={`mx-auto mt-12 transition-all duration-1000 delay-300 ${
              titleInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              height: "1px",
              backgroundColor: "#BF843D",
            }}
          ></div>
        </div>

        {/* Content Grid */}
        <div
          ref={textRef}
          className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto"
        >
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              textInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-gray-700 leading-relaxed text-sm md:text-base"
              style={{
                letterSpacing: "0.8px",
                fontWeight: "400",
              }}
            >
              AT PROSPER, HOME ISN'T JUST WHERE YOU LIVE—IT'S WHERE YOU THRIVE.
              LOCATED <br /> IN THE HEART OF PROSPECT HEIGHTS, OUR RESIDENCES
              ARE DESIGNED FOR <br /> COMFORT, STYLE, AND THE JOY OF EVERYDAY
              MOMENTS. WITH THOUGHTFULLY <br /> CRAFTED SPACES, NEXT-LEVEL
              AMENITIES, AND A NEIGHBORHOOD FULL OF <br /> LIFE, PROSPER IS
              WHERE BROOKLYN'S ENERGY MEETS MODERN LUXURY.
            </p>
          </div>

          {/* Logo or Signature */}
          <div
            className={`text-center transition-all duration-1000 delay-500 ${
              textInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="inline-flex items-center justify-center">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                className="mx-auto"
              >
                {/* Stylized P monogram */}
                <path
                  d="M40 20C40 20 45 15 55 15C65 15 70 20 70 30C70 40 65 45 55 45H40V65M40 20V65"
                  stroke="#BF843D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="55" cy="30" r="8" fill="#BF843D" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Leaf Bottom Left */}
      <div className="absolute -bottom-32 -left-20 w-80 h-auto opacity-15 pointer-events-none animate-leaf-float-reverse">
        <svg
          viewBox="0 0 200 300"
          fill="none"
          className="w-full h-full transform rotate-180 scale-x-[-1]"
        >
          <path
            d="M100 10C120 50 140 90 150 130C155 150 160 170 160 190C160 220 145 250 120 270C110 280 95 290 80 290C60 290 40 275 30 250C15 215 10 175 20 140C30 100 50 60 80 30C85 25 92 15 100 10Z"
            fill="#BF843D"
            opacity="0.3"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes leafFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes leafFloatReverse {
          0%,
          100% {
            transform: translateY(0) rotate(180deg) scaleX(-1);
          }
          50% {
            transform: translateY(20px) rotate(185deg) scaleX(-1);
          }
        }
        .animate-leaf-float {
          animation: leafFloat 6s ease-in-out infinite;
        }
        .animate-leaf-float-reverse {
          animation: leafFloatReverse 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;
