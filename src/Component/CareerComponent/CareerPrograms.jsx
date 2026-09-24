import React from "react";
import team06 from "../../assets/team 06.b6a931d.png";

const CareerPrograms = () => {
  return (
    <div className="z-80 text-black mb-20 bg-[#F6FCFF] w-full max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 px-6 sm:px-10 lg:px-12">
      <div className="flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="text-center space-y-5 sm:space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Programs
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl max-w-3xl">
            The future depends on what you do today. Connect with us and build
            your career
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-5 pt-8 sm:pt-10 pb-12 sm:pb-16 lg:pb-20 w-full justify-center">
          <img
            className="
              w-full
              sm:w-40
              lg:w-40
              h-[25rem]
              sm:h-[28rem]
              lg:h-[30rem]
              object-cover
              grayscale
              transition-all
              duration-500
              ease-in-out
              hover:sm:w-[30%]
              rounded-md
              hover:grayscale-0

            "
            src={team06}
            alt="Program"
          />

          <img
            className="
              w-full
              sm:w-40
              lg:w-40
              h-[25rem]
              sm:h-[28rem]
              lg:h-[30rem]
              object-cover
              grayscale
              transition-all
              duration-500
              ease-in-out
             hover:sm:w-[30%]
              rounded-md
              hover:grayscale-0
            "
            src={team06}
            alt="Program"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerPrograms;
