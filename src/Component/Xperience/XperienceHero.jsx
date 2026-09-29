import React from "react";

const XperienceHero = ({ data }) => {
  const { header, description, image } = data;
  console.log(header.split("|"));
  return (
    <section className="container mx-auto h-screen mt-20">
      <div className="flex flex-col gap-4 md:flex md:justify-center md:gap-4 lg:flex-row lg:justify-center lg:items-center lg:gap-20">
        <div className="flex justify-center items-center">
          <img
            className="max-h-[220px] md:max-h-[295px] lg:max-h-[420px] "
            src={image}
            alt=""
          />
        </div>
        <div className="max-w-2xl space-y-2 md:space-y-1 p-4 md:p-4 lg:p-0">
          <p className="text-md">
            <span className="text-red-500">YOU ASK.</span>{" "}
            <span className="text-cyan-500">WE BUILD.</span>
          </p>
          <h1 className="text-[clamp(24px,1.88vw,36px)] font-bold">{header}</h1>
          <p className="text-base md:text-md">
            Welcome to the world of reality! Where you will experience Virtual,
            Augmented and Mixed reality and an exciting gaming universe with
            Singularity Xperinece.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-8 lg:mt-55 ">
        <div className="border-[1px] w-16 h-16 flex justify-center items-center rounded-full text-3xl mb-3 animate-bounce">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <p className="text-xl">KEEP SCROLLING</p>
      </div>
    </section>
  );
};

export default XperienceHero;
