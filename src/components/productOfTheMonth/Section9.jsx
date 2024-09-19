import React, { useState } from "react";
import "./section9.css"

import { useTypewriter, Cursor } from "react-simple-typewriter";


import bagImg from "../../assets/img/bag.jpeg";
import bag2Img from "../../assets/img/bag2.png";
import Red1bag from "../../assets/img/Red1.png";
import Red2bag from "../../assets/img/Red2.png";
import backBag from "../../assets/img/backBag.png";


import { Button, ButtonGroup, Link } from "@nextui-org/react";


import UpIcon from "../../assets/Icon/UpIcon";
import DownArrowIcon from "../../assets/Icon/DownArrowIcon";
import FacebookIcon from "../../assets/Icon/FacebookIcon";
import TwitterIcon from "../../assets/Icon/TwitterIcon";
import LinkedinIcon from "../../assets/Icon/LinkedinIcon";
import InstagramIcon from "../../assets/Icon/InstagramIcon";
import LeftIcon from "../../assets/Icon/LeftIcon";
import RightIcon from "../../assets/Icon/RightIcon";

const Section9 = () => {
  const [text] = useTypewriter({
    words: ["THE MONTH"],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const productImages = [bag2Img, Red1bag, Red2bag, backBag];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

    const handleNext = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < productImages.length - 1 ? prevIndex + 1 : 0
        );
        setFade(true);
      }, 300); 
    };
  
    const handlePrevious = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : productImages.length - 1
        );
        setFade(true);
      }, 300);
    };
  return (
    <div className="bg-[#F6F5F5] overflow-hidden pt-[129px] ps-[150px] pe-[150px] pb-[100px] section9_wrapper">
      <div>
        <p
          data-aos="fade-down"
          data-aos-duration="2000"
          className="uppercase monts text-7xl font-semibold text-center section9_title"
        >
          Product of
          <span className="ms-6 outline_text">
            {text}
            <Cursor cursorColor="black" />
          </span>
        </p>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mt-12">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex items-center justify-center flex-row product_img_wrapper"
          >
            <div className="flex items-center justify-center flex-col img_collection order-none">
              <Button
                isIconOnly
                variant="light"
                onClick={handlePrevious}
                className="prev_btn"
              >
                <UpIcon />
              </Button>

              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 mt-3 ${index === 0 ? "mt-5" : ""} ${
                    index === currentIndex
                      ? "border-4 border-blue-500 rounded-xl"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`product_img_${index}`}
                    className={`w-full rounded-lg ${
                      index === currentIndex ? "opacity-100" : "opacity-50"
                    }`}
                  />
                </div>
              ))}

              <Button
                isIconOnly
                variant="light"
                onClick={handleNext}
                className="next_btn"
              >
                <DownArrowIcon />
              </Button>
            </div>

            <div className="flex flex-row order-last responsive_btn">
              <Button
                isIconOnly
                variant="light"
                onClick={handlePrevious}
                className=""
              >
                <LeftIcon />
              </Button>
              <Button
                isIconOnly
                variant="light"
                onClick={handleNext}
                className="ms-3"
              >
                <RightIcon />
              </Button>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="initial_img w-full ms-5"
            >
              <img
                src={productImages[currentIndex]}
                alt={`current_product_img`}
                className={`w-full h-full rounded-2xl transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex justify-center items-center"
          >
            <div>
              <p className="text-[#060606] text-3xl font-semibold	monts leading-10 section9_sub_title">
                Premium Valuetainment Leather Backpack
              </p>
              <p className="text-[#060606CC] text-base	font-normal	leading-6	inter mt-3 pe-3">
                The attention to detail is evident in every aspect of this
                backpack. From the sturdy hardware and reinforced stitching to
                the smooth zippers and luxurious lining, no detail has been
                overlooked.
              </p>

              <p className="text-[#272312] monts text-2xl	font-semibold mt-4 leading-7">
                Price: <span className="ms-3 text-[#EA2127]">$199.95</span>
              </p>
              <div className="flex flex-row items-center mt-8 button_group_wrapper">
                <p className="inter text-[#060606] text-xl font-semibold leading-6 ">
                  Size:
                </p>
                <ButtonGroup
                  radius="none"
                  variant="light"
                  className="ms-4 buttons_group"
                >
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    S
                  </Button>
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    M
                  </Button>
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    L
                  </Button>
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    XL
                  </Button>
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    XXL
                  </Button>
                </ButtonGroup>
              </div>

              <div className="flex flex-col items-start mt-6">
                <p className="inter text-[#060606] text-xl font-semibold leading-6 ">
                  Quantity:
                </p>
                <ButtonGroup radius="none" variant="light" className="mt-3">
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    -
                  </Button>
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    1
                  </Button>
                  <Button className="border border-[#27231280] text-base font-normal inter leading-6	">
                    +
                  </Button>
                </ButtonGroup>
              </div>

              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8 pe-5">
                <Button
                  variant="bordered"
                  className="w-full border border-[#272312] inter text-base text-[#272312] font-medium uppercase"
                >
                  Add to cart
                </Button>
                <Button
                  variant="bordered"
                  className="w-full bg-black border border-[#272312] inter text-base text-[#FFFFFF] font-medium uppercase"
                >
                  Buy it now
                </Button>
              </div>

              <div className="mt-6 flex flex-row">
                <p className="inter text-[#060606] text-xl font-semibold leading-6 ">
                  Share:
                </p>
                <div className="flex flex-row ms-3">
                  <FacebookIcon />
                  <TwitterIcon />
                  <LinkedinIcon />
                  <InstagramIcon />
                </div>
              </div>

              <div>
                <Link
                  href="#"
                  underline="always"
                  className="text-[#060606CC] inter text-base font-medium leading-6 mt-6"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
