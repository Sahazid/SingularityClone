import React from "react";
import StudioHero1 from "../../assets/HomeGif3.gif";
const StudioHero = ({ data }) => {
  const { header, title, description, image } = data;
  console.log(header.split("|"));
  return (
    <div className="bg-[#ECF6FF]">
      <section className="container mx-auto mt-20 pb-10">
        <div className="flex flex-col gap-4 md:flex md:justify-center md:gap-4 lg:flex-row lg:justify-between lg:items-center ">
          <div className="max-w-xl space-y-5 p-4 md:p-4 lg:p-0 ">
            <p className="text-md">
              <span className="text-cyan-500">{header.split("|")[0]}</span>
              <span className="text-red-500">{header.split("|")[1]}</span>{" "}
              <span className="text-cyan-500">{header.split("|")[2]}</span>
            </p>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-xl">{description}</p>
          </div>

          <div className="flex justify-center items-center">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-35">
          <div className="border-[1px] w-16 h-16 flex justify-center items-center rounded-full text-3xl mb-3 animate-bounce">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <p className="text-xl">KEEP SCROLLING</p>
        </div>
      </section>
    </div>
  );
};

export default StudioHero;
