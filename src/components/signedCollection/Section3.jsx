import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import DownIcon from "../../assets/Icon/DownIcon";
import signature from "../../assets/img/pat-signature White_1.png"
import book1 from "../../assets/img/book1.png"
import book2 from "../../assets/img/book2.png"
import "./section3.css"
import Tilt from "react-parallax-tilt";

const Section3 = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111111] pt-[133px] ps-[150px] pe-[150px] pb-[120px] custom_grid_wrapper overflow-hidden">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-10 ">
        <div className="section3_firstPart_wrapper">
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-white monts text-5xl font-medium uppercase section3_title_1"
          >
            Patrick Bet-David{"'"}s{" "}
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="2500"
            className="monts text-5xl font-bold uppercase mt-4 tracking-wide text-[70px] bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] section3_title_2"
          >
            Signed{" "}
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="monts text-5xl font-bold uppercase mt-4 tracking-wide text-[70px] bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] section3_title_2"
          >
            Collection{" "}
          </p>
          <Button
            data-aos="fade-right"
            data-aos-duration="3500"
            className="bg-white text-base font-medium inter mt-12"
            endContent={<DownIcon />}
          >
            SHOP NOW
          </Button>

          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            src={signature}
            alt="signature_img"
            className="w-full mt-6 signature_img"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <Tilt className="w-full book_imgs">
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src={book1}
              style={{
                transform: `rotateY(${rotation}deg)`,
                transition: "transform 0.1s linear",
              }}
              alt="signature_img"
              className="w-full book_imgs"
            />
          </Tilt>
          <Tilt className="w-full book_imgs">
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src={book2}
              style={{
                transform: `rotateY(${rotation}deg)`,
                transition: "transform 0.1s linear",
              }}
              alt="signature_img"
              className="w-full book_imgs"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Section3;
