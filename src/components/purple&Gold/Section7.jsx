import React from "react";
import "./section7.css";
import { Image } from "@nextui-org/react";

import mensShirt from "../../assets/img/mensShirt.jpeg";
import purpleCap from "../../assets/img/purpleCap.jpeg";

const Section7 = () => {
  return (
    <div className="bg-[#ffffff] pt-[101px] ps-[148px] pe-[148px] pb-24 section7_wrapper">
      <div className="flex flex-col section7_titles_wrapper">

        <div className="section7_titles">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="Act_Of_Rejection text-8xl font-normal section7_title bg-gradient-to-r from-black via-[#E0A408] to-black bg-200% bg-left bg-clip-text text-transparent transition-bg-position duration-500 hover:bg-right"
          >
            Future
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="mt-5 Act_Of_Rejection text-8xl font-normal section7_title bg-gradient-to-r from-black via-[#7F1BCD] to-black bg-200% bg-left bg-clip-text text-transparent transition-bg-position duration-500 hover:bg-right"
          >
            Looks
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mt-5 Act_Of_Rejection text-8xl font-normal section7_title bg-gradient-to-r from-black via-[#E0A408] to-black bg-200% bg-left bg-clip-text text-transparent transition-bg-position duration-500 hover:bg-right"
          >
            Bright
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mt-6 section7_subtitle"
        >
          <p className="section7_title2 purple_title uppercase text-5xl italic mt-3 monts font-semibold text-[#7F1BCD]">
            Purple <span className="text-[#272312] font-[275] ms-4">&</span>
          </p>
          <p className="section7_title2 gold_title uppercase text-5xl italic mt-3 monts font-semibold text-[#E0A408]">
            Gold{" "}
            <span className="section7_title2 text-[#E0A408] font-[275] outline_text ms-4">
              Series
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-7 section7_cards_wrapper">
        <div data-aos="fade-top" data-aos-duration="3000" className="w-fit">
          <Image
            isZoomed
            radius="lg"
            alt="slider_1_img"
            className="section7_img w-screen object-cover h-[410px] shadow-[#0000001F]"
            src={mensShirt}
          />
          <div>
            <p className="text-base text-[#060606] font-semibold inter mt-4 ms-2">
              Army Green Active Short Sleeve
            </p>
            <p className="text-xl text-[#060606] font-medium inter mt-3 ms-2">
              $ 34.96{" "}
              <span className="ms-3 text-xl font-medium	 line-through text-[#9B9B9B]">
                $ 34.96
              </span>
            </p>
          </div>
        </div>
        <div data-aos="fade-bottom" data-aos-duration="3000" className="w-fit">
          <Image
            isZoomed
            radius="lg"
            alt="slider_1_img"
            className="section7_img w-screen object-cover h-[410px] shadow-[#0000001F]"
            src={purpleCap}
          />
          <div>
            <p className="text-base text-[#060606] font-semibold inter mt-4 ms-2">
              Army Green Active Short Sleeve
            </p>
            <p className="text-xl text-[#060606] font-medium inter mt-3 ms-2">
              $ 34.96{" "}
              <span className="ms-3 text-xl font-medium	 line-through text-[#9B9B9B]">
                $ 34.96
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
