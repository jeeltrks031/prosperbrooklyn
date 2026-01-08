// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Residences", href: "#residences" },
//     { name: "Amenities", href: "#amenities" },
//     { name: "Neighborhood", href: "#neighborhood" },
//     { name: "Availability", href: "#availability" },
//   ];

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-background/95 backdrop-blur-md shadow-sm"
//             : "bg-transparent"
//         }`}
//       >
//         {/* Top Banner */}
//         {/* <div className="bg-primary text-white text-center py-2 px-4">
//           <p className="text-label text-xs">
//             NOW LEASING, SCHEDULE A TOUR AND{" "}
//             <a href="#availability" className="underline hover:no-underline">
//               APPLY NOW
//             </a>
//           </p>
//         </div> */}

//         <nav className="flex items-center justify-between text-white px-6 md:px-12 py-4">
//           <button
//             onClick={() => setIsMenuOpen(true)}
//             className={`flex items-center gap-2 text-label  transition-colors ${
//               isScrolled ? "text-foreground" : "text-primary-foreground"
//             }`}
//           >
//             <Menu className="w-5 h-5" />
//             <span className="hidden md:inline">MENU</span>
//           </button>

//           {/* Logo */}
//           <a href="#" className="absolute left-1/2 -translate-x-1/2">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className={`font-serif text-3xl md:text-4xl italic transition-colors ${
//                 isScrolled ? "text-foreground" : "text-primary-foreground"
//               }`}
//             >
//               P
//             </motion.div>
//           </a>

//           {/* Right Nav */}
//           <div className="flex items-center gap-4">
//             <a
//               href="/"
//               className={`text-label px-4 py-2 border transition-all duration-300 hover:bg-foreground hover:text-background ${
//                 isScrolled
//                   ? "border-foreground text-foreground"
//                   : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
//               }`}
//             >
//               AVAILABILITY
//             </a>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Full Screen Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-[60] bg-primary"
//           >
//             <div className="absolute top-0 right-0 p-6">
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-primary-foreground hover:opacity-70 transition-opacity"
//               >
//                 <X className="w-8 h-8" />
//               </button>
//             </div>

//             <div className="flex flex-col items-center justify-center h-full">
//               {navLinks.map((link, index) => (
//                 <motion.a
//                   key={link.name}
//                   href={link.href}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-headline text-primary-foreground py-4 link-underline"
//                 >
//                   {link.name}
//                 </motion.a>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="mt-12"
//               >
//                 <a
//                   href="#availability"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="btn-outline text-primary-foreground border-primary-foreground"
//                 >
//                   VIEW AVAILABILITY
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;

"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { name: "NEIGHBORHOOD", href: "#neighborhood" },
    { name: "AVAILABILITY", href: "#availability" },
    { name: "CONTACT", href: "#contact" },
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

          {/* Right Side - Image */}
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

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop"
            alt="Luxury Building"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{
              animation: "zoomIn 1.5s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          <div
            className="text-center"
            style={{
              animation:
                "fadeScale 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both",
            }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-6">
              <span className="font-serif italic">P</span>ROSPER
            </h1>
            <div className="flex flex-col items-center gap-1 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              <span>1042</span>
              <span>ATLANTIC</span>
              <span>AVE</span>
            </div>
          </div>
        </div>

        <a
          href="#availability"
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#98523C] text-white px-3 py-2 text-sm tracking-widest font-light hover:bg-[#344237] transition-all duration-300 z-40 hidden md:block"
          style={{
            writingMode: "vertical-rl",
            animation:
              "slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s both",
          }}
        >
          BOOK A TOUR
        </a>
      </section>

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
