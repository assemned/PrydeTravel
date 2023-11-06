"use client";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { PLACES } from "./constants";
import { useRef } from "react";

const Places = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = 325;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = 325;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className="flexCol p-y max-container gap-16 max-sm:gap-8">
        <div className="flex justify-between items-end p-x max-sm:flex-col max-sm:flexCenter max-sm:gap-5 max-sm:text-center">
          <div className="flexCol gap-1">
            <p className="text-p-3 font-bold">Where do you want to go</p>
            <h4 className="text-h-2 font-first">Popular Destinations</h4>
          </div>
          <div className="flexEnd gap-5 h-full">
            <button className="btn-arrow-blue-disabled" onClick={scrollLeft}>
              <BsArrowLeft size={22} />
            </button>
            <button className="btn-arrow-blue" onClick={scrollRight}>
              <BsArrowRight size={22} />
            </button>
          </div>
        </div>
        <div
          className="ml-6 md:ml-14 lg:ml-20 2xl:ml-36 whitespace-nowrap overflow-x-hidden"
          ref={containerRef}>
          {PLACES.map((place, index) => (
            <div
              key={index}
              className=" h-[400px] w-[300px] ml-2 mr-5 relative text-white rounded-2xl shadow-lg cursor-pointer overflow-hidden place-card-container inline-block">
              <img
                src={place.picture}
                alt="Place"
                className=" object-fill w-full h-full duration-500 place-card-img"
              />
              <div className="flex justify-end items-center inset-0 absolute flex-col px-2 py-6 gap-1">
                <h6 className="text-h-3 font-first mb-2">{place.name}</h6>
                <div className="flexCenter gap-2">
                  <img src={place.counrty} alt="Country" className="w-[14px]" />
                  <p className="text-p-4">{place.location}</p>
                </div>
                <p className="text-xs">{place.users}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
