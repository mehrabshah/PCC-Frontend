import React from "react";
import "./Hero.css";
import { Button } from "flowbite-react";
export const Hero = () => {
  return (
    <>
      <div className="banner-slider">
        <div className="lg:container  mx-auto">
          <div className=" grid md:grid-cols-2  lg:px-28 sm:px-8 mt-16 lg:mt-0">
            <div className="text-center md:text-start mt-16 md:mt-0">
              <span className="text-[#ffffff] font-semibold bg-[#49d8ab] px-4 py-1">WELCOME TO PCC</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold 2xl:pe-16 text-[#ffffff] mt-6">Business loans with no hidden charges</h1>
              <p className=" mt-6 text-[#ffffff]    xl:pe-16 pe-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex mt-6  justify-center md:justify-start">
                <Button className="rounded-sm  text-[#06CA8C] bg-[#ffffff]   hover:bg-[#06CA8C]  hover:text-[#ffffff]">
                  Contact Us
                </Button>
                <Button className="rounded-sm ms-3 text-[#ffffff]  bg-[#06CA8C] / border-2 border-[#ffffff] ">
                  Get Started
                </Button>
              </div>
            </div>
            <img
              src="./images/userside/Hero.jpg"
              className=" h-auto w-[100%]  mt-16 md:mt-0"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
