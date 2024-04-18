const Slider = () => {
  return (
    <div className="carousel md:mt-12 w-full">
      <div id="slide1" className="carousel-item relative w-full h-auto">
        <img src="slider1.jpg" className="w-full rounded-xl " />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <h1 className="md:text-7xl text-3xl absolute text-center text-white font-bold lg:mt-80">
          Open Doors to Limitless Opportunities with
          <span className="text-[#41B06E]"> Nova</span> Venture
        </h1>
        <p className="absolute md:bottom-20 bottom-2 lg:bottom-96 text-white text-center md:text-2xl text-base md:px-11 lg:px-40">
          Step into a world of boundless possibilities with Nova Venture. Our
          commitment to excellence opens doors to unparalleled opportunities in
          real estate, guiding you toward success and prosperity.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src="slider2.jpg" className="w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <h1 className="md:text-7xl text-3xl absolute text-center text-white font-bold lg:mt-80 lg:px-40">
          Open Doors to Limitless Opportunities with <br />
          <span className="text-[#41B06E]"> Nova</span> Venture
        </h1>
        <p className="absolute md:bottom-20 bottom-2 lg:bottom-96 text-white text-center md:text-2xl text-base md:px-11 lg:px-40">
          Step into a world of boundless possibilities with Nova Venture. Our
          commitment to excellence opens doors to unparalleled opportunities in
          real estate, guiding you toward success and prosperity.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="slider3.jpg" className="w-full rounded-xl " />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <h1 className="md:text-7xl text-3xl absolute text-center text-white font-bold lg:mt-80">
          Open Doors to Limitless Opportunities with
          <span className="text-[#41B06E]"> Nova</span> Venture
        </h1>
        <p className="absolute md:bottom-20 bottom-2 lg:bottom-96 text-white text-center md:text-2xl text-base md:px-11 lg:px-40">
          Step into a world of boundless possibilities with Nova Venture. Our
          commitment to excellence opens doors to unparalleled opportunities in
          real estate, guiding you toward success and prosperity.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
