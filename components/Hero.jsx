"use client";
import { TbArrowNarrowRight } from "react-icons/tb";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { PiShieldCheck } from "react-icons/pi";
import { BsAirplane } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";
import { useState } from "react";

const Hero = () => {
  const [picture, setPicture] = useState(1);

  const nextPicture = () => {
    if (picture < 3) {
      return setPicture(picture + 1);
    }
  };
  const prevPicture = () => {
    if (picture > 1) {
      return setPicture(picture - 1);
    }
  };
  return (
    <section id="hero" className=" bg-primary-yellow">
      <div className="relative">
        <div className="relative bg-gray-700">
          <img
            src={`/hero1.png`}
            alt="Hero"
            className={`object-cover w-full max-lg:min-h-[85vh] max-sm:min-h-[95vh] duration-1000 ${
              picture === 1
                ? "opacity-100 relative"
                : " opacity-0 absolute top-0"
            }`}
          />
          <img
            src={`/hero2.png`}
            alt="Hero"
            className={`object-cover w-full max-lg:min-h-[85vh] max-sm:min-h-[95vh]  duration-1000 ${
              picture === 2
                ? "opacity-100 relative"
                : " opacity-0 absolute top-0"
            }`}
          />
          <img
            src={`/hero3.png`}
            alt="Hero"
            className={`object-cover w-full max-lg:min-h-[85vh] max-sm:min-h-[95vh]  duration-1000 ${
              picture === 3
                ? "opacity-100 relative"
                : " opacity-0 absolute top-0"
            }`}
          />
        </div>
        <div className="flexCol absolute inset-0 p-x pb-20 pt-44 max-md:pt-28 max-container gap-5 max-md:gap-10">
          <div className="w-full text-white flexStart flexCol gap-8">
            <h1 className="text-h-1 font-first ">
              Explore the world with <br /> exciting people
            </h1>
            <p className="text-p-1 ">
              We help people find co travellers and also structure their travel
              plans
            </p>
            <button className="flexCenter btn-green gap-2 mt-5">
              Take a Trip <TbArrowNarrowRight size={22} />
            </button>
          </div>
          <div className="flex justify-end items-center gap-3">
            <button
              className={`btn-arrow ${picture === 1 && "btn-arrow-disabled"}`}
              onClick={prevPicture}>
              <BsArrowLeft size={26} />
            </button>
            <p className="text-p-2 text-white">{picture}/3</p>
            <button
              className={`btn-arrow ${picture === 3 && "btn-arrow-disabled"}`}
              onClick={nextPicture}>
              <BsArrowRight size={26} />
            </button>
          </div>
          <div className=" border-t-2 border-white flexCenter w-full gap-20 text-white pt-5 max-xl:hidden">
            <div className=" flexStart flexCol gap-2">
              <p className=" text-h-4 font-bold font-first">01</p>
              <p className="text-p-2 font-bold">
                Chose a place, activity and time
              </p>
              <p className="text-p-4 ">
                We help people find co travellers and also structure their
                travel plans
              </p>
            </div>
            <div className=" flexStart flexCol gap-2">
              <p className=" text-h-4 font-bold font-first">02</p>
              <p className="text-p-2 font-bold">
                Chose a place, activity and time
              </p>
              <p className="text-p-4 ">
                We help people find co travellers and also structure their
                travel plans
              </p>
            </div>
            <div className=" flexStart flexCol gap-2">
              <p className=" text-h-4 font-bold font-first">03</p>
              <p className="text-p-2 font-bold">
                Chose a place, activity and time
              </p>
              <p className="text-p-4 ">
                We help people find co travellers and also structure their
                travel plans
              </p>
            </div>
          </div>
        </div>
        <img
          src="/slide.png"
          alt="slide"
          className=" absolute -bottom-14 w-full object-cover max-sm:h-20 max-md:-bottom-10"
        />
      </div>
      <div className=" p-x py-32 max-container text-primary-text flexCenter flexRow gap-40 max-lg:gap-10 max-sm:py-16 max-sm:flex-col">
        <div className="flexCol gap-5">
          <PiShieldCheck size={65} className=" cursor-pointer" />
          <h6 className="text-h-4 font-first">Enjoy some flexibility</h6>
          <p className="text-p-4">
            stays with flexible cancelation make it easy to re-book if your
            plans change
          </p>
        </div>
        <div className="flexCol gap-5">
          <BsAirplane size={65} className=" cursor-pointer" />
          <h6 className="text-h-4 font-first">Enjoy some flexibility</h6>
          <p className="text-p-4">
            stays with flexible cancelation make it easy to re-book if your
            plans change
          </p>
        </div>
        <div className="flexCol gap-5">
          <HiAdjustments size={65} className=" cursor-pointer" />
          <h6 className="text-h-4 font-first">Enjoy some flexibility</h6>
          <p className="text-p-4">
            stays with flexible cancelation make it easy to re-book if your
            plans change
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
