import { TbArrowNarrowRight } from "react-icons/tb";

const CTA = () => {
  return (
    <section className=" bg-cta bg-cover">
      <div className=" p-x p-y max-container flexCenter text-center text-white flexCenter flex-col gap-10">
        <h1 className="text-h-2 font-first">
          Ready to go?
          <br />
          Give us a quick call
        </h1>
        <button className="flexCenter btn-green gap-2 mt-5">
          Take a Trip <TbArrowNarrowRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default CTA;
