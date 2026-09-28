import React from "react";
import heroOne from "../../assets/HeroGif.gif";
import Typewriter from "typewriter-effect";
import { NavLink, Router, useNavigate } from "react-router-dom";
import Button from "../Common/Button";

const icons = [
  {
    title: "Development",
    icon: "fa-solid fa-laptop-code",
  },
  {
    title: "Quality First",
    icon: "fa-regular fa-gem",
  },
  {
    title: "Fast Launch",
    icon: "fa-brands fa-space-awesome",
  },
];
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen  flex items-center relative">
      <div className="container mx-auto flex flex-col gap-4 md:flex md:justify-center md:gap-4 lg:flex-row lg:justify-between lg:items-center pb-0 md:pb-40 lg:pb-0">
        <div className="flex justify-center items-center w-full">
          <img
            src={heroOne}
            className="max-h-[220px] md:max-h-[420px] "
            alt=""
          />
        </div>
        <div className="max-w-2xl space-y-1 md:space-y-5 p-4 md:p-4 lg:p-0">
          <h1 className=" text-[clamp(24px,1.88vw,36px)] font-semibold">
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
          <p className="text-base md:text-lg">
            We are one of the finest destinations to build your digital
            products. We live to push the boundaries, explore the unexplored,
            and drive measurable results for our partners
          </p>

          {/* Colaboration Button  */}
          <Button
            title="Collaborate with us"
            onClick={() => navigate("/contact")}
          />

          <div className="flex gap-3 relative group mt-2">
            {icons.map((item) => {
              return (
                <div className="bg-[#0572B2] px-4 py-4 rounded-lg text-white w-16 flex items-center gap-5 overflow-hidden transition-[width,background-color] duration-700 ease-in-out hover:w-[12rem] hover:bg-red-500">
                  <i className={`${item.icon} text-2xl md:text-3xl`}></i>
                  <span className="text-base font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center ">
        <div className="border-[1px] w-10 md:w-16 aspect-square flex justify-center items-center rounded-full text-xl md:text-3xl  animate-bounce">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <p className=" text-base md:text-xl">KEEP SCROLLING</p>
      </div>
    </section>
  );
};

export default Hero;
