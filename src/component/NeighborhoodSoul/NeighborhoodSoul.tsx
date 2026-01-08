"use client";

import React from "react";
import { motion } from "framer-motion";

const NeighborhoodSoul = () => {
  return (
    <section className="bg-[#F8F5F0] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-base uppercase tracking-widest text-gray-600 mb-8 font-medium"
          >
            A Neighborhood with Soul
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl lg:text-[40px] font-serif text-[#3C4A3C] leading-tight max-w-6xl mx-auto"
          >
            PROSPECT HEIGHTS IS A NEIGHBORHOOD
            <br />
            WITH SOUL—TREE-LINED STREETS,
            <br />
            BUZZING CAFÉS, AND A PERFECT MIX
            <br />
            OF ENERGY AND EASE. PROSPER PUTS
            <br />
            YOU RIGHT IN THE MIDDLE OF IT ALL.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10"
          >
            <div className="inline-block">
              <span className="text-6xl md:text-7xl lg:text-8xl font-script text-[#BF843D]">
                P
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSoul;
