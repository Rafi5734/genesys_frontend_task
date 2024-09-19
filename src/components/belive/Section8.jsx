import React from "react";
import "./section8.css";

import section8_logo_img from "../../assets/img/red_logo.png";
import cheese_img from "../../assets/img/cheese.png";
import section8_grid_img from "../../assets/img/section8.png";
import { Parallax } from "react-scroll-parallax";

const Section8 = () => {
  return (
    <div className="bg-gradient-to-r from-[#3B3B3B] to-[#000000] relative w-full h-full overflow-hidden">
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        className="absolute right-0 top-0"
        src={section8_logo_img}
        alt="section8_logo_img"
      />
      <img
        className="absolute right-0 bottom-0"
        src={cheese_img}
        alt="section8_logo_img"
      />
      <div className="pt-[129px] ps-[150px] pe-[150px] pb-[167px] section8_container">
        <Parallax translateX={[-10, 10]} className="relative z-50 ">
          <p className="Act_Of_Rejection font-normal text-[140px] text-[#FFFFFF] ps-[150px] heroSection_title text-nowrap">
            what we believe
          </p>
        </Parallax>
        <div className="grid grid-cols-2 gap-1 section8_wrapper z-0">
          <div className="z-0">
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              src={section8_grid_img}
              alt="section8_img"
              className="rounded-xl z-0 w-full"
            />
          </div>
          <div className="section8_description_section">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="mt-44 section8_description"
            >
              <p className="monts text-3xl text-[#FFFFFF] font-medium">
                Leadership{" "}
                <span className="text-base font-medium text-[#FFFFFFCC]">
                  is vital from the top of corporations to the military to small
                  businesses to parents to students. We all can be leaders.
                </span>
              </p>
              <hr className="h-px my-8 bg-[#FFFFFF80] border-0"></hr>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="mt-12 section8_description"
            >
              <p className="monts text-3xl text-[#FFFFFF] font-medium">
                Entrepreneurs{" "}
                <span className="text-base font-medium text-[#FFFFFFCC]">
                  are heroes who should be respected and celebrated for taking
                  risks, launching products, creating jobs and building
                  companies.
                </span>
              </p>
              <hr className="h-px my-8 bg-[#FFFFFF80] border-0"></hr>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="4000"
              className="mt-12 section8_description"
            >
              <p className="monts text-3xl text-[#FFFFFF] font-medium">
                Capitalism{" "}
                <span className="text-base font-medium text-[#FFFFFFCC]">
                  is a critically important economic system that has advanced
                  society and the quality of life we enjoy today.
                </span>
              </p>
              <hr className="h-px my-8 bg-[#FFFFFF80] border-0"></hr>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="5000"
              className="mt-12 section8_description"
            >
              <p className="monts text-3xl text-[#FFFFFF] font-medium">
                Debate{" "}
                <span className="text-base font-medium text-[#FFFFFFCC]">
                  is welcome and necessary as it can lead to consensus,
                  epiphanies, and expose the truth. When a clash of ideas, often
                  emotionally-charged, evolves into civil debate and objective
                  processing of issues, everyone wins. Free speech is critical
                  to productive debate.
                </span>
              </p>
              <hr className="h-px my-8 bg-[#FFFFFF80] border-0"></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
