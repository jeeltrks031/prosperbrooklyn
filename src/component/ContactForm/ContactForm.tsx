"use client";
import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbweSMZOSDlky5opDFL3htvgzCJcGFOWhAnOTeWjRyicPG4XOKRTrTbFewCHpUnsr7qa/exec";

const ContactFormSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ip: "",
    project_id: "prosperbrooklyn",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getUserIP = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    } catch {
      return "Unknown";
    }
  };

  const handleSubmit = async () => {
    console.log("🚀 ~ handleSubmit ~ formData:", formData);
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const ip = await getUserIP();

      const form = new FormData();
      form.append("firstName", formData.firstName);
      form.append("lastName", formData.lastName);
      form.append("email", formData.email);
      form.append("mobile", formData.phone);
      form.append("ip", ip);
      form.append("project_id", "prosperbrooklyn");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      alert("Thank you! Your inquiry has been submitted.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        ip: "",
        project_id: "prosperbrooklyn",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

          <div
            className={`relative transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            className={`relative transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

          {/* Submit Button */}
          <div
            className={`flex justify-center pt-3 transition-all duration-1000 delay-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Send } from "lucide-react";

// const GOOGLE_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbxtW1wEwveZCki3GUfepI4ex9oc4yUrsmwG4ajHmPlgNmi5arJYt5w0YGOvddHH8r0y/exec";

// const ContactFormSection = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [isInView, setIsInView] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     unitPreference: "",
//     ip: "",
//     project_id: "prosperbrooklyn",
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsInView(true);
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const getUserIP = async () => {
//     try {
//       const res = await fetch("https://api.ipify.org?format=json");
//       const data = await res.json();
//       return data.ip;
//     } catch {
//       return "Unknown";
//     }
//   };

//   const handleSubmit = async () => {
//     if (!formData.firstName || !formData.lastName || !formData.email) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const ip = await getUserIP();

//       const form = new FormData();
//       form.append("firstName", formData.firstName);
//       form.append("lastName", formData.lastName);
//       form.append("email", formData.email);
//       form.append("mobile", formData.phone);
//       form.append("ip", ip);
//       form.append("project_id", "prosperbrooklyn");

//       await fetch(GOOGLE_SCRIPT_URL, {
//         method: "POST",
//         body: form,
//       });

//       alert("Thank you! Your inquiry has been submitted.");

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         unitPreference: "",
//         ip: "",
//         project_id: "prosperbrooklyn",
//       });
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F1E8]"
//     >
//       <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
//         <div className="space-y-6">
//           <div
//             className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isInView
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-8"
//               }`}
//           >
//             <div>
//               <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
//                 FIRST NAME*
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border-b border-gray-400 py-3"
//               />
//             </div>

//             <div>
//               <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
//                 LAST NAME*
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border-b border-gray-400 py-3"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
//               EMAIL ADDRESS*
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b border-gray-400 py-3"
//             />
//           </div>

//           <div>
//             <label className="block text-xs md:text-sm tracking-[0.2em] text-gray-700 font-light">
//               PHONE
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b border-gray-400 py-3"
//             />
//           </div>

//           <div className="flex justify-center pt-3">
//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="inline-flex items-center gap-3 px-10 py-4 border-2 border-gray-700 text-gray-700 text-xs md:text-sm tracking-[0.2em] font-light hover:bg-gray-700 hover:text-white"
//             >
//               {loading ? "SENDING..." : "SUBMIT INQUIRY"}
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;
