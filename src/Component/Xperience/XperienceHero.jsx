import React from "react";

const XperienceHero = ({ data }) => {
  const { header, description, image } = data;
  console.log(header.split("|"));
  return (
    <div className="bg-[#ECF6FF]">
      <section className="container mx-auto mt-20 pb-10">
        <div className="flex flex-col gap-4 md:flex md:justify-center md:gap-4 lg:flex-row lg:justify-between lg:items-center ">
          <div className="max-w-xl space-y-5 p-4 md:p-4 lg:p-0 ">
            <p className="text-4xl font-bold">
              <span className="text-cyan-500">{header.split("|")[0]}</span>
              <span className="text-red-500">{header.split("|")[1]}</span>{" "}
              <span className="text-cyan-500">{header.split("|")[2]}</span>
            </p>

            <p className="text-xl">{description}</p>

            <div className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full">
              <div
                className="
                absolute
                inset-y-0
                right-0
                w-14
                bg-gradient-to-r
                from-red-500
                via-pink-500
                to-purple-500
                rounded-full
                transition-[width]
                duration-700
                ease-in-out
                group-hover:w-full
              "
              />

              <span
                className="
                relative
                z-10
                text-xl
                sm:text-2xl
                font-medium
                pr-12
                text-black
                transition-colors
                duration-500
                group-hover:text-white
              "
              >
                See more
              </span>

              <div
                className="
                absolute
                right-0
                top-0
                bottom-0
                w-14
                z-10
                flex
                items-center
                justify-center
                text-xl
                text-black
                transition-colors
                duration-500
                group-hover:text-white
              "
              >
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
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

export default XperienceHero;
