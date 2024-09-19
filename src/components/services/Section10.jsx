import React from "react";
import CustomerSupport from "../../assets/Icon/CustomerSupport";
import DeliveryIcon from "../../assets/Icon/DeliveryIcon";
import ExchangeIcon from "../../assets/Icon/ExchangeIcon";
import VerifiedIcon from "../../assets/Icon/VerifiedIcon";
import "./section10.css"

const Section10 = () => {
  return (
    <div className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] overflow-x-clip pt-[129px] ps-[150px] pe-[150px] pb-[100px] section10_wrapper">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-20">
        <div data-aos="fade-right" data-aos-duration="2000">
          <DeliveryIcon />
          <p className="mt-6 monts font-medium text-2xl leading-7 text-[#FFFFFF]">
            Shipping
          </p>
          <p className="mt-4 text-base font-normal	inter leading-6	text-[#FFFFFF]">
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          <ExchangeIcon />
          <p className="mt-6 monts font-medium text-2xl leading-7 text-[#FFFFFF]">
            Return
          </p>
          <p className="mt-4 text-base font-normal	inter leading-6	text-[#FFFFFF]">
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <CustomerSupport />
          <p className="mt-6 monts font-medium text-2xl leading-7 text-[#FFFFFF]">
            Support
          </p>
          <p className="mt-4 text-base font-normal	inter leading-6	text-[#FFFFFF]">
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <VerifiedIcon />
          <p className="mt-6 monts font-medium text-2xl leading-7 text-[#FFFFFF]">
            Payment
          </p>
          <p className="mt-4 text-base font-normal	inter leading-6	text-[#FFFFFF]">
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
