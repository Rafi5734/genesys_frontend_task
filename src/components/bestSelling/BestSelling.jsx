import React from 'react';
import "./bestSelling.css"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

import { Card, Image } from '@nextui-org/react';

import Slider_1_img from "../../assets/img/b1.jpeg";
import Slider_2_img from "../../assets/img/b2.jpeg";
import Slider_3_img from "../../assets/img/b3.jpeg";
import Slider_4_img from "../../assets/img/b4.jpeg";


const BestSelling = () => {
    const [text] = useTypewriter({
      words: ["BEST SELLING PRODUCTS"],
      loop: false,
      onLoopDone: () => console.log(`loop completed after 3 runs.`),
    });
    return (
      <div className="bg-[#F6F5F5] pt-[101px] ps-[148px] pe-[148px] bestSelling_wrapper">
        <p
          data-aos="fade-right"
          data-aos-duration="2500"
          className="monts font-semibold text-7xl tracking-wide text-[#060606] bestSelling_title"
        >
          BUY 1 GET 1 FREE
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="2500"
          className="mt-1 monts font-semibold text-7xl tracking-wide text-[#060606] bestSelling_title"
        >
          ON{" "}
          <span className="outline_text">
            {text}
            <Cursor cursorColor="black" />
          </span>
        </p>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1050: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1416: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="mt-12 pb-[102px] pt-3 ps-2"
          >
            <SwiperSlide className="">
              <Card className="cursor-pointer pt-4 pe-4 pb-6 ps-4">
                <Image
                  isZoomed
                  radius="lg"
                  width="100%"
                  alt="slider_1_img"
                  className="w-full object-cover h-[333px]"
                  src={Slider_1_img}
                />
                <div>
                  <p className="text-base text-[#060606] font-medium inter mt-4 ms-2">
                    Army Green Active Short Sleeve
                  </p>
                  <p className="text-xl	text-[#060606] font-medium inter mt-3 ms-2">
                    $ 34.96{" "}
                    <span className="ms-3 line-through text-[#9B9B9B]">
                      $ 34.96
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="">
              <Card className="cursor-pointer pt-4 pe-4 pb-6 ps-4">
                <Image
                  isZoomed
                  radius="lg"
                  width="100%"
                  alt="slider_1_img"
                  className="w-full object-cover h-[333px]"
                  src={Slider_2_img}
                />
                <div>
                  <p className="text-base text-[#060606] font-medium inter mt-4 ms-2">
                    Army Green Active Short Sleeve
                  </p>
                  <p className="text-xl	text-[#060606] font-medium inter mt-3 ms-2">
                    $ 34.96{" "}
                    <span className="ms-3 line-through text-[#9B9B9B]">
                      $ 34.96
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="">
              <Card className="cursor-pointer pt-4 pe-4 pb-6 ps-4">
                <Image
                  isZoomed
                  radius="lg"
                  width="100%"
                  alt="slider_1_img"
                  className="w-full object-cover h-[333px]"
                  src={Slider_3_img}
                />
                <div>
                  <p className="text-base text-[#060606] font-medium inter mt-4 ms-2">
                    Army Green Active Short Sleeve
                  </p>
                  <p className="text-xl	text-[#060606] font-medium inter mt-3 ms-2">
                    $ 34.96{" "}
                    <span className="ms-3 line-through text-[#9B9B9B]">
                      $ 34.96
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="">
              <Card className="cursor-pointer pt-4 pe-4 pb-6 ps-4">
                <Image
                  isZoomed
                  radius="lg"
                  width="100%"
                  alt="slider_1_img"
                  className="w-full object-cover h-[333px]"
                  src={Slider_4_img}
                />
                <div>
                  <p className="text-base text-[#060606] font-medium inter mt-4 ms-2">
                    Army Green Active Short Sleeve
                  </p>
                  <p className="text-xl	text-[#060606] font-medium inter mt-3 ms-2">
                    $ 34.96{" "}
                    <span className="ms-3 line-through text-[#9B9B9B]">
                      $ 34.96
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="">
              <Card className="cursor-pointer pt-4 pe-4 pb-6 ps-4">
                <Image
                  isZoomed
                  radius="lg"
                  width="100%"
                  alt="slider_1_img"
                  className="w-full object-cover h-[333px]"
                  src={Slider_1_img}
                />
                <div>
                  <p className="text-base text-[#060606] font-medium inter mt-4 ms-2">
                    Army Green Active Short Sleeve
                  </p>
                  <p className="text-xl	text-[#060606] font-medium inter mt-3 ms-2">
                    $ 34.96{" "}
                    <span className="ms-3 line-through text-[#9B9B9B]">
                      $ 34.96
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="">
              <Card className="cursor-pointer pt-4 pe-4 pb-6 ps-4">
                <Image
                  isZoomed
                  radius="lg"
                  width="100%"
                  alt="slider_1_img"
                  className="w-full object-cover h-[333px]"
                  src={Slider_2_img}
                />
                <div>
                  <p className="text-base text-[#060606] font-medium inter mt-4 ms-2">
                    Army Green Active Short Sleeve
                  </p>
                  <p className="text-xl	text-[#060606] font-medium inter mt-3 ms-2">
                    $ 34.96{" "}
                    <span className="ms-3 line-through text-[#9B9B9B]">
                      $ 34.96
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default BestSelling;
