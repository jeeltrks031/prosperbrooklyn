"use client";
import React, { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

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

  const navigationLinks = [
    { name: "HOMEPAGE", href: "#" },
    { name: "RESIDENCES", href: "#" },
    { name: "AMENITIES", href: "#" },
    { name: "NEIGHBORHOOD", href: "#" },
    { name: "AVAILABILITY", href: "#" },
    { name: "CONTACT", href: "/contact" },
  ];

  const legalLinks = [
    { name: "PRIVACY POLICY", href: "#privacy" },
    { name: "TERMS & CONDITIONS", href: "#terms" },
    { name: "REASONABLE ACCOMMODATION", href: "#accommodation" },
    { name: "FARE ACT", href: "#fare-act" },
  ];

  return (
    <footer
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#3C4A3C]"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <nav className="text-center mb-16">
          <ul className="space-y-1">
            {navigationLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transition-all duration-1000 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <a
                  href={link.href}
                  className="inline-block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light tracking-wide hover:text-white transition-all duration-300 hover:translate-x-2"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative flex items-center justify-center mb-8">
          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              height: "150px",
              backgroundColor: "gray",
              width: "1px",
            }}
          ></div>
        </div>

        <div
          className={`text-center mb-8 md:mb-10 transition-all duration-1000 delay-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-[#fff] text-[13px] tracking-[0.2em] font-normal"
            style={{ fontWeight: "300" }}
          >
            1042 ATLANTIC AVENUE
          </p>
          <p
            className="text-[#fff] text-[13px] tracking-[0.2em] font-light"
            style={{ fontWeight: "300" }}
          >
            BROOKLYN, NY 11238
          </p>
        </div>

        <div
          className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-900 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3C4A3C] transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3C4A3C] transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3C4A3C] transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3C4A3C] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-[13px] text-white/70">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                  style={{ letterSpacing: "0.2em" }}
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="hidden sm:inline text-white/30">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-8 md:mt-10 transition-all duration-1000 delay-1100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-[9px] text-white"
            style={{
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0.2em",
            }}
          >
            OWNER AND LEASING AGENT ARE PLEDGED TO THE LETTER AND SPIRIT OF U.S.
            POLICY FOR THE ACHIEVEMENT OF EQUAL HOUSING OPPORTUNITY <br />{" "}
            THROUGHOUT THE U.S. AND ARE COMMITTED TO AN AFFIRMATIVE ADVERTISING
            AND MARKETING PROGRAM IN WHICH THERE ARE NO BARRIERS TO <br />{" "}
            OBTAINING HOUSING BECAUSE OF RACE, COLOR, CREED, RELIGION, SEX,
            SEXUAL ORIENTATION, MILITARY STATUS, AGE, DISABILITY, ANCESTRY,{" "}
            <br />
            FAMILY STATUS, NATIONAL ORIGIN, OR ANY OTHER GROUNDS PROHIBITED BY
            CITY, STATE, OR FEDERAL LAW.{" "}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.2;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
