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
        <div className="flex flex-col sm:flex-row gap-5 pt-8 sm:pt-10 pb-12 sm:pb-16 lg:pb-20 w-full justify-center items-center">
          {/* Image 1 */}
          <div className="flex justify-center items-center shrink-0">
            <div className="relative group">
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
          group-hover:sm:w-[20rem]
          rounded-md
          group-hover:grayscale-0
        "
                src={team06}
                alt="Program"
              />

              {/* Dark Overlay */}
              <div
                className="
          absolute
          inset-0
          bg-black/0
          group-hover:bg-black/50
          rounded-md
          transition-all
          duration-500
          ease-in-out
          pl-4
          flex
          flex-col
          items-start
          justify-center
          pointer-events-none
        "
              >
                <h1
                  className="
            text-white
            text-xl
            font-semibold
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
                >
                  Singularity Seeds
                </h1>
                <p
                  className="text-white cursor-pointer opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500"
                >
                  Learn More{"  >> "}
                </p>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex justify-center items-center shrink-0">
            <div className="relative group">
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
          group-hover:sm:w-[20rem]
          rounded-md
          group-hover:grayscale-0
        "
                src={team06}
                alt="Program"
              />

              {/* Dark Overlay */}
              <div
                className="
          absolute
          inset-0
          bg-black/0
          group-hover:bg-black/50
          rounded-md
          transition-all
          duration-500
          ease-in-out
          flex
          flex-col
          items-start
          justify-center
          pointer-events-none
          pl-2
        "
              >
                <h1
                  className="
            text-white
            text-md
            font-semibold
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
                >
                  Monthly Employee Recognition Program
                </h1>
                <p
                  className="text-white opacity-0
                  cursor-pointer
                  group-hover:opacity-100
                  transition-opacity
                  duration-500"
                >
                  Learn More {">>"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPrograms;
