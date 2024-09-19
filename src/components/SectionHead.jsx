import React from 'react';
import { Parallax } from "react-scroll-parallax";
import "./sectionHead.css"

const SectionHead = ({ parallaxValue }) => {
  return (
    <div>
      <Parallax translateX={[-10, 10]} className="">
        <p className="Act_Of_Rejection font-normal text-[140px] text-[#FFFFFF66] ps-[150px] heroSection_title text-nowrap">
          {parallaxValue}
        </p>
      </Parallax>
    </div>
  );
};

export default SectionHead;
