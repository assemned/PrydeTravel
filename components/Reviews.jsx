"use client";

import { IoIosStar } from "react-icons/io";
import { REVIEWS } from "./constants";
import { useState } from "react";

const Reviews = () => {
  const [client, setClient] = useState(2);

  return (
    <section>
      <div className=" p-x pb-20 pt-40 max-md:pt-28 max-md:pb-10 max-container flexCenter gap-16 flex-col max-md:gap-8">
        {REVIEWS.map((review, index) => {
          if (index === client) {
            return (
              <p className="text-p-3 px-60 max-lg:px-[5%]" key={index}>
                {review.comment}
              </p>
            );
          }
          return null;
        })}

        <div className="flexCenter text-primary-star mb-10 cursor-pointer">
          <IoIosStar size={25} />
          <IoIosStar size={25} />
          <IoIosStar size={25} />
          <IoIosStar size={25} />
          <IoIosStar size={25} />
        </div>
        <div className=" flexCenter gap-10 relative max-sm:gap-4 max-xs:gap-2">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className={`flexCenter flex-col gap-4 duration-500 hover:scale-110 ${
                index === client ? " scale-125 px-5 hover:scale-125" : ""
              }`}
              onClick={() => setClient(index)}>
              <img
                src={review.picture}
                alt="user picture"
                className={` w-[70px] max-sm:w-14 cursor-pointer rounded-full `}
              />
              <p className=" text-p-2 text-center font-semibold font-first cursor-pointer">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
