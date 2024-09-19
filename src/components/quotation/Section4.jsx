import React from 'react';
import quotesImg from "../../assets/img/quotes.png"
import person from "../../assets/img/person.png"
import "./section4.css"

const Section4 = () => {
    return (
      <div className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] overflow-x-clip	">
        <div className="pt-14 ps-[90px] flex flex-row justify-between section_4_wrapper">
          <div className="">
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              src={quotesImg}
              alt="quotes_img"
              className="w-[221px] h-[221px] quotes_img"
            />
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="ms-16 -mt-16 section_4_titles_wrapper"
            >
              <p className="uppercase font-bold	text-5xl text-white monts text-nowrap section_4_titles">
                Our mission is to enlighten, entertain
              </p>
              <p className="uppercase font-bold	text-5xl text-white monts mt-4 section_4_titles">
                and empower current and future
              </p>
              <p className="uppercase font-bold	text-5xl text-white monts mt-4 section_4_titles">
                leaders around the world.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="me-20 person_img_wrapper"
          >
            <img
              src={person}
              alt="person_img"
              className="w-full -mt-44 person_img"
            />
          </div>
        </div>
      </div>
    );
};

export default Section4;

