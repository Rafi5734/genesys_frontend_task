import React from "react";
import "./section11.css"
import footer_logo from "../../assets/img/red_logo_footer.png";
import { Button, Link } from "@nextui-org/react";
import PhoneIcon from "../../assets/Icon/PhoneIcon";
import EmailIcon from "../../assets/Icon/EmailIcon";
import FacebookFooterIcon from "../../assets/Icon/FacebookFooterIcon";
import TwitterFooterIcon from "../../assets/Icon/TwitterFooterIcon";
import LinkedinFooterIcon from "../../assets/Icon/LinkedinFooterIcon";
import InstagramFooterIcon from "../../assets/Icon/InstagramFooterIcon";
import VisaIcon from "../../assets/Icon/VisaIcon";
import ApplePayIcon from "../../assets/Icon/ApplePayIcon";
import AmericanExpressIcon from "../../assets/Icon/AmericanExpressIcon";

const Section11 = () => {
  return (
    <div className="bg-[#000000] overflow-hidden pt-[50px] ps-[150px] pe-[150px] pb-[80px] section9_wrapper relative">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="flex items-center"
      >
        <img src={footer_logo} alt="footer_logo" className="section11_img" />
        <p className="monts text-8xl font-extrabold text-[#FFFFFF] section11_title">
          VTMERCH
        </p>
      </div>

      <hr className="h-px my-8 bg-[#A6A5A380] border-0"></hr>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-28 mt-12 mb-40 section9_grid_wrapper">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="col-span-2"
        >
          <p className="monts text-2xl	font-normal	text-[#FFFFFF] leading-7">
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </p>
          <div className="flex flex-col">
            <Button
              variant="bordered"
              className="inter text-normal font-normal text-white mt-12 border border-[#FFFFFF80]"
            >
              Enter your email
            </Button>
            <Button className="mt-3 bg-[#FFFFFF] inter text-normal font-medium text-[#222222]">
              Subscribe
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-top"
          data-aos-duration="2000"
          className="flex flex-col"
        >
          <p className="inter text-xl text-[#FFFFFF]">Customer Services</p>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-8 font-normal leading-6"
          >
            About us
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Search
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Privacy Policy
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Contact Us
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Terms of Service
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Refund policy
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Track Order
          </Link>
        </div>
        <div
          data-aos="fade-top"
          data-aos-duration="2000"
          className="flex flex-col"
        >
          <p className="inter text-xl text-[#FFFFFF]">Products</p>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-8 font-normal leading-6"
          >
            Featured products
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Bestseller
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            Latest product
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            All collections
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            All products
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex flex-col"
        >
          <p className="inter text-xl text-[#FFFFFF]">Contact Us</p>
          <p className="inter text-[#FFFFFFCC] mt-8 font-normal leading-6">
            Available between 8AM to 8PM. Ready to answer your questions.
          </p>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            <PhoneIcon />
            <span className="ms-3">013456789</span>
          </Link>
          <Link
            href=""
            className="inter text-[#FFFFFFCC] mt-6 font-normal leading-6"
          >
            <EmailIcon />
            <span className="ms-3">store@valuetainment.com</span>
          </Link>
          <div className="flex flex-row mt-4 items-center">
            <FacebookFooterIcon />
            <TwitterFooterIcon />
            <LinkedinFooterIcon />
            <InstagramFooterIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap footer_wrapper">
        <div>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="absolute text-[#FFFFFFCC] inter font-normal text-normal leading-6"
          >
            © 2024 Valuetainment Store. All rights reserved.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex flex-row icons_flex"
        >
          <VisaIcon />
          <ApplePayIcon />
          <AmericanExpressIcon />
          <VisaIcon />
          <ApplePayIcon />
          <AmericanExpressIcon />
        </div>
      </div>
    </div>
  );
};

export default Section11;
