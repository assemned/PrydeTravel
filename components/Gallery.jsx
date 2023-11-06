const Gallery = () => {
  return (
    <section className=" relative">
      <div className=" md:px-16 px-3 p-y max-container flexCenter gap-12 flex-col">
        <div className="flexCenter text-center flex-col gap-3">
          <p className="text-p-3 font-bold">Trip Gallery</p>
          <h4 className="text-h-2 font-first">Completed Journeys</h4>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-20 text-white max-lg:px-5 max-lg:grid-cols-2 max-lg:grid-rows-3 max-sm:gap-3 max-md:px-0 max-xs:gap-1">
          <div className="flex justify-start items-end relative h-full  rounded-3xl overflow-hidden place-card-container">
            <img
              src="/gallery1.png"
              alt=""
              className="h-full w-full duration-500 place-card-img"
            />
            <div className="absolute p-10 max-md:p-5 flexStart gap-2 flex-col">
              <h6 className="text-h-3 font-first">Eiffel Tower</h6>
              <p className="text-p-4">Paris, 24 Trips</p>
            </div>
          </div>
          <div className="flex justify-start items-end  relative h-full rounded-3xl overflow-hidden place-card-container col-span-2 max-lg:hidden">
            <img
              src="/gallery2.png"
              alt=""
              className="h-full w-full duration-500 place-card-img"
            />
            <div className="absolute p-10 max-md:p-5 flexStart gap-2 flex-col">
              <h6 className="text-h-3 font-first">Pryde mountains</h6>
              <p className="text-p-4">Prydelands, 100 Trips</p>
            </div>
          </div>
          <div className="flex justify-start items-end  relative h-full rounded-3xl overflow-hidden place-card-container">
            <img
              src="/gallery5.png"
              alt=""
              className="h-full w-full duration-500 place-card-img"
            />
            <div className="absolute p-10 max-md:p-5 flexStart gap-2 flex-col">
              <h6 className="text-h-3 font-first">Lao Lading Island</h6>
              <p className="text-p-4">Krabal, 12 Trips</p>
            </div>
          </div>
          <div className="flex justify-start items-end  relative h-full rounded-3xl overflow-hidden place-card-container col-span-2 lg:hidden">
            <img
              src="/gallery2.png"
              alt=""
              className="h-full w-full duration-500 place-card-img"
            />
            <div className="absolute p-10 max-md:p-5 flexStart gap-2 flex-col">
              <h6 className="text-h-3 font-first">Pryde mountains</h6>
              <p className="text-p-4">Prydelands, 100 Trips</p>
            </div>
          </div>
          <div className="flex justify-start items-end  relative h-full rounded-3xl overflow-hidden place-card-container">
            <img
              src="/gallery4.png"
              alt=""
              className="h-full w-full duration-500 place-card-img"
            />
            <div className="absolute p-10 max-md:p-5 flexStart gap-2 flex-col">
              <h6 className="text-h-3 font-first">Ton Kwen Temple</h6>
              <p className="text-p-4">Thailand, 20 Trips</p>
            </div>
          </div>
          <div className="flex justify-start items-end  relative h-full rounded-3xl overflow-hidden place-card-container">
            <img
              src="/gallery1.png"
              alt=""
              className="h-full w-full duration-500 place-card-img"
            />
            <div className="absolute p-10 max-md:p-5 flexStart gap-2 flex-col">
              <h6 className="text-h-3 font-first">Eiffel Tower</h6>
              <p className="text-p-4">Paris, 24 Trips</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-primary-gray self-end absolute bottom-0 w-full h-[60%] -z-10"></div>
    </section>
  );
};

export default Gallery;
