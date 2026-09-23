import React from "react";

const Who = () => {
  return (
    <section className="bg-gray-950 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between text-white p-6 sm:p-12 lg:p-20 gap-12 lg:gap-0">
        {/* Left Section: Stats Grid */}
        <div className="flex flex-col gap-10 border-b-2 lg:border-b-0 lg:border-r-2 border-white pb-10 lg:pb-0 lg:pr-10 w-full lg:w-1/2">
          <div className="flex flex-row gap-10 sm:gap-40 justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center w-1/2 sm:w-auto">
              <h1 className="text-4xl sm:text-6xl font-semibold text-cyan-600">
                10+
              </h1>
              <p className="text-center text-sm sm:text-base">
                years and <br /> going strong
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center w-1/2 sm:w-auto">
              <h1 className="text-4xl sm:text-6xl font-semibold text-cyan-600">
                1,500+
              </h1>
              <p className="text-center text-sm sm:text-base">
                completed <br />
                projects
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 sm:gap-40 justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center w-1/2 sm:w-auto">
              <h1 className="text-4xl sm:text-6xl font-semibold text-cyan-600">
                50+
              </h1>
              <p className="text-center text-sm sm:text-base">certification</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-1/2 sm:w-auto">
              <h1 className="text-4xl sm:text-6xl font-semibold text-cyan-600">
                300+
              </h1>
              <p className="text-center text-sm sm:text-base">happy clients</p>
            </div>
          </div>
        </div>

        {/* Right Section: Heading & Video Action */}
        <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-between gap-8 lg:gap-0 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-2xl sm:text-4xl w-full leading-snug">
            Take a look at <span className="text-cyan-600">who we are</span> and{" "}
            <span className="text-cyan-600">what we do</span> at Singularity.
          </h1>
          <p className="flex flex-col sm:flex-row items-center gap-3 cursor-pointer group">
            <span className="text-5xl sm:text-7xl transition-transform duration-300 group-hover:scale-110">
              <i className="fa-solid fa-circle-play"></i>
            </span>
            <span className="text-lg sm:text-xl font-medium">
              {" "}
              Play the video
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who;
