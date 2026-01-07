"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPoster from "../../assets/hero-poster.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={heroPoster.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-primary-foreground px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-display text-white mb-4">
            <span className="font-serif italic">P</span>ROSPER
          </h1>
          <div className="flex flex-col items-center gap-1 text-white text-sm md:text-base tracking-[0.3em] uppercase">
            <span>1042</span>
            <span>Atlantic</span>
            <span>Ave</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Book a Tour Button */}
      <motion.a
        href="#availability"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="floating-cta hidden md:flex"
      >
        BOOK A TOUR
      </motion.a>
    </section>
  );
};

export default HeroSection;
