import React from "react";
import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";

export const Home = () => {
  return (
    <div className="w-[90vw]  mx-auto mt-[10vh] flex justify-around items-center">
      <HeroSectionLeft />
      <HeroSectionRight/>
    </div>
  );
};
