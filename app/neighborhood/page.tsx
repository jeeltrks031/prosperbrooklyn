import Footer from "@/src/component/Footer/Footer";
import Header from "@/src/component/Header/Header";
import Neighborhood from "@/src/component/Neighborhood/Neighborhood";
import NeighborhoodMapSection from "@/src/component/NeighborhoodMapSection/NeighborhoodMapSection";
import NeighborhoodSectionPage from "@/src/component/NeighborhoodSection/NeighborhoodSection";
import NeighborhoodSoul from "@/src/component/NeighborhoodSoul/NeighborhoodSoul";
import React from "react";

const NeighborhoodPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <NeighborhoodSectionPage />
      <NeighborhoodSoul />
      <NeighborhoodMapSection />
      <Footer />
    </div>
  );
};

export default NeighborhoodPage;
