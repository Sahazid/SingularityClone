import React, { useEffect, useState } from "react";
import team01 from "../../assets/team 01.e6b7c0c.png";
import team02 from "../../assets/team 02.aa45761.png";
import team03 from "../../assets/team 03.ac8b5d1.png";
import team04 from "../../assets/team 04.30f070b.png";
import team05 from "../../assets/team 05.c8e9e30.png";
import team06 from "../../assets/team 06.b6a931d.png";
import team07 from "../../assets/team 07.d4e84ec.png";
import aboutTeam from "../../assets/about team.png";
const MileStones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [team02, team01, team03, team04, team05, team07, team06];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full bg-[#E8F5FD] pt-40 pb-40">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold w-[50%]">Our MileStones</h1>
            <p className="text-xl w-full">
              In our journey, we accomplished through empowering. No matter how
              impregnable our path was, we marched ahead. Incorporated ventures
              with possibilities and collaborated partners with reliability.
              Still heading to unlock the future, together.
            </p>
          </div>

          {/* Content -  Right Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-20">
            {/* LEFT SIDE */}
            <div className="relative flex items-center justify-center lg:justify-end pr-0 lg:pr-8">
              {/* Big Year */}
              <span className="text-[100px] sm:text-[130px] lg:text-[145px] font-bold text-gray-200/80 leading-none select-none">
                2012
              </span>

              {/* Timeline Dot + Line */}
              <div className="absolute right-0 lg:right-[-20px] top-1/2 -translate-y-1/2 flex items-center">
                {/* Blue Dot */}
                <div className="w-7 h-7 bg-[#0785c1] rounded-full z-10"></div>

                {/* Dashed Line */}
                <div className="w-32 sm:w-40 lg:w-64 border-t-2 border-dashed border-[#0785c1]"></div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-10 lg:mt-0 lg:pl-8 xl:pl-12">
              <h2 className="text-2xl lg:text-[30px] font-bold text-black mb-3">
                Commencing the voyage.
              </h2>

              <p className="text-gray-600 text-lg lg:text-[23px] leading-[1.5] max-w-[600px]">
                We started this organization in early 2012 to establish a new
                era in marketing communication industry. It was a dream of
                like-minded individuals to redefine conventions by introducing
                experiential marketing in this arena.
              </p>
            </div>
          </div>

          {/* Content -  Left Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-20">
            {/* LEFT SIDE - TEXT */}
            <div className="mt-10 lg:mt-0 lg:pr-8 xl:pr-12 text-right">
              <h2 className="text-xl lg:text-[30px] font-bold text-black mb-3">
                Commencing the voyage.
              </h2>

              <p className="text-gray-600 text-lg lg:text-[23px] leading-[1.5] max-w-[600px] ml-auto">
                We started this organization in early 2012 to establish a new
                era in marketing communication industry. It was a dream of
                like-minded individuals to redefine conventions by introducing
                experiential marketing in this arena.
              </p>
            </div>

            {/* RIGHT SIDE - YEAR */}
            <div className="relative flex items-center justify-center lg:justify-start pl-0 lg:pl-8">
              {/* Big Year */}
              <span className="text-[100px] sm:text-[130px] lg:text-[145px] font-bold text-gray-200/80 leading-none select-none">
                2012
              </span>

              {/* Timeline Dot + Line */}
              <div className="absolute left-0 lg:left-[-20px] top-1/2 -translate-y-1/2 flex items-center">
                {/* Dashed Line */}
                <div className="w-32 sm:w-40 lg:w-64 border-t-2 border-dashed border-[#0785c1]"></div>

                {/* Blue Dot */}
                <div className="w-7 h-7 bg-[#0785c1] rounded-full z-10"></div>
              </div>
            </div>
          </div>

          {/* Content -  Right Side  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-20">
            {/* LEFT SIDE */}
            <div className="relative flex items-center justify-center lg:justify-end pr-0 lg:pr-8">
              {/* Big Year */}
              <span className="text-[100px] sm:text-[130px] lg:text-[145px] font-bold text-gray-200/80 leading-none select-none">
                2012
              </span>

              {/* Timeline Dot + Line */}
              <div className="absolute right-0 lg:right-[-20px] top-1/2 -translate-y-1/2 flex items-center">
                {/* Blue Dot */}
                <div className="w-7 h-7 bg-[#0785c1] rounded-full z-10"></div>

                {/* Dashed Line */}
                <div className="w-32 sm:w-40 lg:w-64 border-t-2 border-dashed border-[#0785c1]"></div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-10 lg:mt-0 lg:pl-8 xl:pl-12">
              <h2 className="text-2xl lg:text-[30px] font-bold text-black mb-3">
                Commencing the voyage.
              </h2>

              <p className="text-gray-600 text-lg lg:text-[23px] leading-[1.5] max-w-[600px]">
                We started this organization in early 2012 to establish a new
                era in marketing communication industry. It was a dream of
                like-minded individuals to redefine conventions by introducing
                experiential marketing in this arena.
              </p>
            </div>
          </div>

          {/* Content -  Left Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-20">
            {/* LEFT SIDE - TEXT */}
            <div className="mt-10 lg:mt-0 lg:pr-8 xl:pr-12 text-right">
              <h2 className="text-xl lg:text-[30px] font-bold text-black mb-3">
                Commencing the voyage.
              </h2>

              <p className="text-gray-600 text-lg lg:text-[23px] leading-[1.5] max-w-[600px] ml-auto">
                We started this organization in early 2012 to establish a new
                era in marketing communication industry. It was a dream of
                like-minded individuals to redefine conventions by introducing
                experiential marketing in this arena.
              </p>
            </div>

            {/* RIGHT SIDE - YEAR */}
            <div className="relative flex items-center justify-center lg:justify-start pl-0 lg:pl-8">
              {/* Big Year */}
              <span className="text-[100px] sm:text-[130px] lg:text-[145px] font-bold text-gray-200/80 leading-none select-none">
                2012
              </span>

              {/* Timeline Dot + Line */}
              <div className="absolute left-0 lg:left-[-20px] top-1/2 -translate-y-1/2 flex items-center">
                {/* Dashed Line */}
                <div className="w-32 sm:w-40 lg:w-64 border-t-2 border-dashed border-[#0785c1]"></div>

                {/* Blue Dot */}
                <div className="w-7 h-7 bg-[#0785c1] rounded-full z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-[#EFF7FF]">
        {/* Mobile / Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 lg:hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Team"
              className="w-full h-[220px] sm:h-[200px] object-cover rounded-lg transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: activeIndex === index ? 1 : 0.25,
              }}
            />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative w-full h-[450px] overflow-hidden">
          {images.map((image, index) => {
            const positions = [
              "left-[11%] top-0 w-[22%] h-[250px]",
              "left-0 top-[175px] w-[18%] h-[250px]",
              "left-[26%] top-[175px] w-[22%] h-[250px]",
              "left-[40%] top-0 w-[27%] h-[250px]",
              "left-[58%] top-[175px] w-[22%] h-[250px]",
              "right-[2%] top-0 w-[18%] h-[250px]",
              "right-0 top-0 w-[10%] h-[450px]",
            ];

            return (
              <img
                key={index}
                src={image}
                alt="Team"
                className={`
            absolute
            ${positions[index]}
            object-cover
            rounded-lg
            transition-opacity
            duration-1000
            ease-in-out
          `}
                style={{
                  opacity: activeIndex === index ? 1 : 0.25,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-white">
        {/* Gradient Section */}
        <div
          className="bg-[#EFF7FF]
                      pb-10 md:pb-20"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  className="w-full h-auto rounded-2xl object-cover"
                  src={aboutTeam}
                  alt=""
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-gray-800 space-y-6 pt-20">
                <h1 className="text-3xl md:text-4xl font-bold">
                  We are a team of{" "}
                  <span className="text-cyan-600">creators</span> and
                  <span className="text-cyan-600"> Innovators</span>
                </h1>

                <p className="text-base md:text-lg font-semibold">
                  Just like human DNA, there are no two product requirements
                  that are the same - we know this. We take each of our clients
                  and projects differently. We build only what meets your
                  business needs
                </p>

                {/* Button */}
                <div className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full">
                  <div
                    className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r
                                from-red-500
                                via-pink-500
                                to-purple-500
                                rounded-full
                                transition-[width]
                                duration-700
                                ease-in-out
                                group-hover:w-full"
                  />

                  <span
                    className="relative z-10 text-lg md:text-xl font-medium
                                pr-12 text-black
                                transition-colors duration-500
                                group-hover:text-white"
                  >
                    Our Culture
                  </span>

                  <div
                    className="absolute right-0 top-0 bottom-0 w-14 z-10
                                flex items-center justify-center
                                text-lg md:text-xl text-black
                                transition-colors duration-500
                                group-hover:text-white"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MileStones;
