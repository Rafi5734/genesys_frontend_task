import React, { useState } from "react";
import "./styles/fonts.css";
import Loader from "./utils/loader/Loader";
import TopNavbar from "./components/topNavbar/TopNavbar";
import HeroSection from "./components/heroSection/HeroSection";
import BestSelling from "./components/bestSelling/BestSelling";
import Section3 from "./components/signedCollection/Section3";
import Section4 from "./components/quotation/Section4";
import Section5 from "./components/shopCollection/Section5";
import Section6 from "./components/newArrival/Section6";
import Section7 from "./components/purple&Gold/Section7";
import Section8 from "./components/belive/Section8";
import Section9 from "./components/productOfTheMonth/Section9";
import Section10 from "./components/services/Section10";
import Section11 from "./components/footer/Section11";

const App = () => {
   const [isLoading, setIsLoading] = useState(true);

   const handleLoadingComplete = () => {
     setIsLoading(false);
   };
  return (
    <div className="w-full">
      {isLoading ? (
        <>
          <Loader onLoadingComplete={handleLoadingComplete} />
        </>
      ) : (
        <div
          className={`transition-opacity duration-1000 transform ${
            !isLoading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <TopNavbar />
            <HeroSection />
            <BestSelling />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11/>
        </div>
      )}
    </div>
  );
};

export default App;
