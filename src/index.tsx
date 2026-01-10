import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


{/* Price Range */ }
{/* <div
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
          </div> */}

{/* <div
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
          </div> */}

{/* Message */ }
{/* <div
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
          </div> */}

{/* Unit Preference
          <div
            className={`relative transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
          </div> */}