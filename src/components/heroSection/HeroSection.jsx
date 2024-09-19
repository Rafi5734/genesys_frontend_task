import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./heroSection.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

import { Image } from "@nextui-org/react";

import Slider_1_img from "../../assets/img/slider_1.png";
import Slider_2_img from "../../assets/img/slider_2.png";
import Slider_3_img from "../../assets/img/slider_3.jpeg";
import Slider_4_img from "../../assets/img/slider_4.png";
import SectionHead from '../SectionHead';


const HeroSection = () => {

    return (
      <div className="bg-[#EA2127] pt-36 overflow-hidden">
        <SectionHead parallaxValue="future looks brights!" />
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1100: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="ms-20 -mt-20 pb-[61px] my_swiper overflow-hidden"
        >
          <SwiperSlide className="ms-24 slider_wraper">
            <div className="cursor-pointer">
              <Image
                isZoomed
                radius="lg"
                width="100%"
                alt="slider_1_img"
                className="w-full object-cover h-[397px] slider_imgs overflow-hidden"
                src={Slider_1_img}
              />
              <div>
                <p className="text-base	text-white font-medium inter mt-4 ms-2">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-xl	text-[#FFFFFFCC] font-medium inter mt-3 ms-2">
                  $ 34.96 <span className="ms-3 line-through">$ 34.96</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider_wraper">
            <div className="cursor-pointer">
              <Image
                isZoomed
                radius="lg"
                width="100%"
                alt="slider_1_img"
                className="w-full object-cover h-[397px] slider_imgs"
                src={Slider_2_img}
              />
              <div>
                <p className="text-base	text-white font-medium inter mt-4 ms-2">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-xl	text-[#FFFFFFCC] font-medium inter mt-3 ms-2">
                  $ 34.96 <span className="ms-3 line-through">$ 34.96</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider_wraper">
            <div className="cursor-pointer	">
              <Image
                isZoomed
                radius="lg"
                width="100%"
                alt="slider_1_img"
                className="w-full object-cover h-[397px] slider_imgs"
                src={Slider_3_img}
              />
              <div>
                <p className="text-base	text-white font-medium inter mt-4 ms-2">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-xl	text-[#FFFFFFCC] font-medium inter mt-3 ms-2">
                  $ 34.96 <span className="ms-3 line-through">$ 34.96</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider_wraper">
            <div className="cursor-pointer	">
              <Image
                isZoomed
                radius="lg"
                width="100%"
                alt="slider_1_img"
                className="w-full object-cover h-[397px] slider_imgs"
                src={Slider_4_img}
              />
              <div>
                <p className="text-base	text-white font-medium inter mt-4 ms-2">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-xl	text-[#FFFFFFCC] font-medium inter mt-3 ms-2">
                  $ 34.96 <span className="ms-3 line-through">$ 34.96</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider_wraper">
            <div className="cursor-pointer	">
              <Image
                isZoomed
                radius="lg"
                width="100%"
                alt="slider_1_img"
                className="w-full object-cover h-[397px] slider_imgs"
                src={Slider_1_img}
              />
              <div>
                <p className="text-base	text-white font-medium inter mt-4 ms-2">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-xl	text-[#FFFFFFCC] font-medium inter mt-3 ms-2">
                  $ 34.96 <span className="ms-3 line-through">$ 34.96</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider_wraper">
            <div className="cursor-pointer	">
              <Image
                isZoomed
                radius="lg"
                width="100%"
                alt="slider_1_img"
                className="w-full object-cover h-[397px] slider_imgs"
                src={Slider_2_img}
              />
              <div>
                <p className="text-base	text-white font-medium inter mt-4 ms-2">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-xl	text-[#FFFFFFCC] font-medium inter mt-3 ms-2">
                  $ 34.96 <span className="ms-3 line-through">$ 34.96</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default HeroSection;
