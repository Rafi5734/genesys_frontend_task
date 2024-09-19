import React from "react";
import section5_img from "../../assets/img/section5_img.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./section5.css";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import DownIcon from "../../assets/Icon/DownIcon";
import bagImg from "../../assets/img/bag.jpeg";
import booksImg from "../../assets/img/books.png";
import capsImg from "../../assets/img/caps.png";
import flaskImg from "../../assets/img/flask.jpeg";
import t_shirt1Img from "../../assets/img/t-shirt1.jpeg";
import t_shirt1Img2 from "../../assets/img/t-shirt2.jpeg";
import Tilt from "react-parallax-tilt";

const Section5 = () => {
  const [text] = useTypewriter({
    words: ["COLLECTION"],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="bg-gradient-to-b from-[#2C2A2A] to-[#000000] section5_wrapper relative h-full">
      <img
        src={section5_img}
        alt="section5_img"
        className="absolute section5_img"
      />
      <div className="pt-[129px] ps-[150px] pe-[150px] section5_wrapper pb-36">
        <div className="grid grid-cols-4 gap-7 w-full	section5_grid_wrapper">
          <div className="flex items-end">
            <div className="w-full overflow-visible bg-transparent border-0 drop-shadow-none	">
              <div className="mb-20">
                <p className="monts font-semibold text-7xl tracking-wide text-[#ffffff] section5_title">
                  SHOP
                </p>
                <p className="mt-1 monts font-semibold text-7xl tracking-wide text-[#ffffff] section5_title">
                  <span className="outline_text_section5">
                    {text}
                    <Cursor cursorColor="white" />
                  </span>
                </p>
                <Button
                  // data-aos="fade-right"
                  // data-aos-duration="3500"
                  className="bg-white text-base font-medium inter mt-12"
                  endContent={<DownIcon />}
                >
                  VIEW ALL
                </Button>
              </div>
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                className="cursor-pointer"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="relative section5_grid_1_wrapper"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00000066] to-[#00000000] z-10 m-0 p-0 section5_grid_1_img"></div>
                  <Image
                    alt="bagImg"
                    className="z-0 h-[531px] w-fit object-cover section5_grid_1_img"
                    src={bagImg}
                  />
                  <p className="absolute z-20 left-5 bottom-2 monts text-[32px] text-white uppercase font-bold">
                    BAG
                  </p>
                </div>
              </Tilt>
            </div>
          </div>

          <div className="flex items-end m-0 p-0 w-full">
            <div className="grid grid-rows-2 gap-7">
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                className="cursor-pointer"
              >
                <Card
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00000066] to-[#00000000] z-10 m-0 p-0 "></div>
                  <Image
                    alt="capsImg"
                    className="z-0 w-screen h-[282px] object-cover"
                    src={capsImg}
                  />
                  <CardFooter className="absolute z-20 left-3 bottom-3 flex-col !items-start w-full">
                    <span className="monts text-[32px] text-white uppercase font-bold">
                      HEAD WEAR
                    </span>
                  </CardFooter>
                </Card>
              </Tilt>

              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                className="cursor-pointer"
              >
                <Card
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="relative w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00000066] to-[#00000000] z-10 m-0 p-0 "></div>
                  <Image
                    alt="capsImg"
                    className="z-0 w-screen h-[282px] object-cover"
                    src={booksImg}
                  />
                  <CardFooter className="absolute z-20 left-3 bottom-3 flex-col !items-start w-full">
                    <span className="monts text-[32px] text-white uppercase font-bold">
                      VALUE BOOKS
                    </span>
                  </CardFooter>
                </Card>
              </Tilt>
            </div>
          </div>

          <div className="flex items-end section5_grid_wrapper_3">
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              className="cursor-pointer"
            >
              <Card
                data-aos="fade-up"
                data-aos-duration="2000"
                className="relative w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000066] to-[#00000000] z-10 m-0 p-0 "></div>
                <Image
                  alt="capsImg"
                  className="z-0 w-full h-[700px] object-cover"
                  src={flaskImg}
                />
                <CardFooter className="absolute z-20 left-3 bottom-3 flex-col !items-start w-full">
                  <p className="monts text-[32px] text-white uppercase font-bold">
                    fLASK
                  </p>
                </CardFooter>
              </Card>
            </Tilt>
          </div>

          <div className="flex items-end">
            <div className="grid grid-rows-2 gap-7 section5_4_grid_wrapper">
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                className="cursor-pointer"
              >
                <Card
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="relative w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00000066] to-[#00000000] z-10 m-0 p-0 "></div>
                  <Image
                    alt="capsImg"
                    className="z-0 w-screen h-[424px] object-cover"
                    src={t_shirt1Img}
                  />
                  <CardFooter className="absolute z-20 left-3 bottom-3 flex-col !items-start w-full">
                    <p className="monts text-[32px] text-white uppercase font-bold">
                      TOPS
                    </p>
                  </CardFooter>
                </Card>
              </Tilt>

              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                className="cursor-pointer"
              >
                <Card
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="relative w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00000066] to-[#00000000] z-10 m-0 p-0 "></div>
                  <Image
                    alt="capsImg"
                    className="z-0 w-screen h-[424px] object-cover"
                    src={t_shirt1Img2}
                  />
                  <CardFooter className="absolute z-20 left-3 bottom-3 flex-col !items-start w-full">
                    <p className="monts text-[32px] text-white uppercase font-bold">
                      TOPS
                    </p>
                  </CardFooter>
                </Card>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
