import Amenities from "@/src/component/Amenities/Amenities";
import AmenitiesShowcase from "@/src/component/AmenitiesShowcase/AmenitiesShowcase";
import Availability from "@/src/component/Availability/Availability";
import Footer from "@/src/component/Footer/Footer";
import Header from "@/src/component/Header/Header";
import HeroSection from "@/src/component/Hero/HeroSection";
import IntroSection from "@/src/component/Intro/IntroSection";
import Neighborhood from "@/src/component/Neighborhood/Neighborhood";
import ResidencesSection from "@/src/component/Resident/Resident";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <IntroSection />
      <ResidencesSection />
      <Amenities />
      <AmenitiesShowcase />
      <Neighborhood />
      <Availability />
      <Footer />
    </>
  );
}
