import { TbArrowNarrowRight } from "react-icons/tb";
import { BiTaxi } from "react-icons/bi";
import { PiBed } from "react-icons/pi";

const Plan = () => {
  return (
    <section>
      <div className="flexCol p-y p-x max-container gap-16 max-md:gap-5">
        <div className="flex justify-between items-end max-md:flex-col max-md:flexCenter max-md:gap-5 max-md:text-center">
          <div className="flexCol gap-1">
            <p className="text-p-3 font-bold">Where do you want to go</p>
            <h4 className="text-h-2 font-first">
              Lets us worry about your plans,
              <br /> Just get packed
            </h4>
          </div>
          <div className="flexEnd gap-5 h-full">
            <button className="flexCenter gap-2 btn-arrow-green">
              Take a Trip <TbArrowNarrowRight size={22} />
            </button>
          </div>
        </div>
        <div className="flexCenter gap-20 max-lg:gap-8 flex-1 max-md:flex-col-reverse max-md:gap-10">
          <img src="/plan.png" alt="Plan" className="flex-1 w-full" />
          <div className="flex-1 flex items-start flex-col gap-16 max-md:gap-8">
            <div className="flexCol gap-3 ">
              <BiTaxi size={40} className=" cursor-pointer" />
              <h6 className="text-h-3 font-first">Rent a car</h6>
              <p className="text-p-3">
                Lorem ipsum dolor sit amet consecteur fin dren
              </p>
              <a
                href="/"
                className=" underline flexRow underline-offset-4 font-bold gap-1 text-p-3 mt-1 duration-300 hover:gap-3">
                Lets Go <TbArrowNarrowRight size={22} />
              </a>
            </div>
            <div className="flexCol gap-3 justify-center">
              <PiBed size={40} className=" cursor-pointer" />
              <h6 className="text-h-3 font-first">Rent a car</h6>
              <p className="text-p-3">
                Lorem ipsum dolor sit amet consecteur fin dren
              </p>
              <a
                href="/"
                className=" underline flexRow underline-offset-4 font-bold gap-1 text-p-3 mt-1 duration-300 hover:gap-3">
                Lets Go <TbArrowNarrowRight size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
