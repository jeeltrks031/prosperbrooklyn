"use client";

const HeroSection = () => {
  return (
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
        href="/"
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#98523C] text-white px-3 py-2 text-sm tracking-widest font-light hover:bg-[#344237] transition-all duration-300 z-40 hidden md:block"
        style={{
          writingMode: "vertical-rl",
          animation: "slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s both",
        }}
      >
        BOOK A TOUR
      </a>
    </section>
  );
};

export default HeroSection;
