import React from "react";
import heroOne from "../../assets/HeroGif.gif";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="flex flex-col gap-4 md:flex md:justify-center md:gap-4 lg:flex-row lg:justify-between lg:items-center mt-30">
        <div className="flex justify-center items-center">
          <img src={heroOne} alt="" />
        </div>
        <div className="max-w-2xl space-y-5 p-4 md:p-4 lg:p-0">
          <h1 className="text-4xl font-semibold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'FUTURE STARTS <span style="color: red;">HERE</span>',
                  )
                  .start();
              }}
            />
          </h1>
          <p className="text-xl">
            We are one of the finest destinations to build your digital
            products. We live to push the boundaries, explore the unexplored,
            and drive measurable results for our partners
          </p>

          {/* Colaboration Button  */}
          <div className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full">
            <div className="absolute inset-y-0 right-0 w-14 bg-[#AD6BBC] rounded-full transition-[width] duration-700 ease-in-out group-hover:w-full" />

            <span className="relative z-10 text-xl font-medium pr-12 text-black transition-colors duration-500 group-hover:text-white">
              Collaborate with us
            </span>

            <div className="absolute right-0 top-0 bottom-0 w-14 z-10 flex items-center justify-center text-xl text-black transition-colors duration-500 group-hover:text-white">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="flex gap-3 relative group">
            {/* Card 1 */}
            <div className="bg-[#0572B2] px-4 py-4 rounded-lg text-white w-16 flex items-center gap-5 overflow-hidden transition-[width,background-color] duration-700 ease-in-out hover:w-[12rem] hover:bg-red-500">
              <i className="fa-solid fa-laptop-code text-3xl "></i>
              <span className="text-base font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Development
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0572B2] p-4 rounded-lg text-white w-16 flex items-center gap-5 overflow-hidden transition-[width,background-color] duration-700 ease-in-out hover:w-[12rem] hover:bg-red-500">
              <i className="fa-regular fa-gem text-3xl "></i>
              <span className="text-base font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Quality First
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0572B2] p-4 rounded-lg text-white w-16 flex items-center gap-5 overflow-hidden transition-[width,background-color] duration-700 ease-in-out hover:w-[12rem] hover:bg-red-500">
              <i className="fa-brands fa-space-awesome text-3xl "></i>
              <span className="text-base font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Fast Launch
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-55">
        <div className="border-[1px] w-16 h-16 flex justify-center items-center rounded-full text-3xl mb-3 animate-bounce">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <p className="text-xl">KEEP SCROLLING</p>
      </div>
    </section>
  );
};

export default Hero;
