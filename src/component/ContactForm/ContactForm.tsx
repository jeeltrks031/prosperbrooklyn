"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const ContactFormSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    unitPreference: "",
    priceRange: "",
    hearAboutUs: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! Your inquiry has been submitted.");
    // Add your form submission logic here
  };

  const unitOptions = [
    "Studio",
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "No Preference",
  ];

  const priceRanges = [
    "Under $2,000",
    "$2,000 - $3,000",
    "$3,000 - $4,000",
    "$4,000 - $5,000",
    "Above $5,000",
  ];

  const hearAboutUsOptions = [
    "Google Search",
    "Social Media",
    "Friend/Family",
    "Real Estate Agent",
    "Advertisement",
    "Other",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F1E8]"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 400 600"
          fill="none"
          className="absolute left-10 top-20 w-64 h-auto"
          style={{
            animation: isInView ? "floatSlow 8s ease-in-out infinite" : "none",
          }}
        >
          <path
            d="M150 50C180 100 200 150 210 200C215 225 220 250 220 280C220 320 205 360 180 390C165 410 145 425 125 425C100 425 75 405 60 375C40 330 30 280 45 235C60 180 90 120 130 70C137 60 145 52 150 50Z"
            fill="#8B7355"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
        {/* Form */}
        <div className="space-y-6">
          <div
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
                FIRST NAME*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300"
                style={{ letterSpacing: "0.05em" }}
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
                LAST NAME*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300"
                style={{ letterSpacing: "0.05em" }}
              />
            </div>
          </div>

          {/* Email Address */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700  font-light">
              EMAIL ADDRESS*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300"
              style={{ letterSpacing: "0.05em" }}
            />
          </div>

          {/* Phone */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700  font-light">
              PHONE
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300"
              style={{ letterSpacing: "0.05em" }}
            />
          </div>

          {/* Unit Preference */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
              UNIT PREFERENCE
            </label>
            <div className="relative">
              <select
                name="unitPreference"
                value={formData.unitPreference}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                style={{ letterSpacing: "0.05em" }}
              >
                <option value="">Select an option</option>
                {unitOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
            </div>
          </div>

          {/* Price Range */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700  font-light">
              PRICE RANGE
            </label>
            <div className="relative">
              <select
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                style={{ letterSpacing: "0.05em" }}
              >
                <option value="">Select an option</option>
                {priceRanges.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700  font-light">
              HOW DID YOU HEAR ABOUT US?*
            </label>
            <div className="relative">
              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                style={{ letterSpacing: "0.05em" }}
              >
                <option value="">Select an option</option>
                {hearAboutUsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
            </div>
          </div>

          {/* Message */}
          <div
            className={`relative transition-all duration-1000 delay-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700  font-light">
              MESSAGE
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-800 focus:border-gray-700 focus:outline-none transition-colors duration-300 resize-none"
              style={{ letterSpacing: "0.05em" }}
              placeholder="Tell us about your needs..."
            />
          </div>

          {/* Submit Button */}
          <div
            className={`flex justify-center pt-3 transition-all duration-1000 delay-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={handleSubmit}
              className="inline-flex cursor-pointer items-center gap-3 px-10 py-4 border-2 border-gray-700 mb-5 text-gray-700 text-xs md:text-sm tracking-[0.2em] font-light transition-all duration-300 hover:bg-gray-700 hover:text-white group"
            >
              SUBMIT INQUIRY
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
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
      `}</style>
    </section>
  );
};

export default ContactFormSection;
