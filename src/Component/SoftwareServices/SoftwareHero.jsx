import React from "react";
import softwareHero1 from "../../assets/softwareHero1.gif";

const SoftwareHero = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 mt-20">
      <div className="flex flex-col gap-4 md:flex md:justify-center md:gap-4 lg:flex-row lg:justify-between lg:items-center mt-30">
        <div className="flex justify-center items-center">
          <img src={softwareHero1} alt="" />
        </div>
        <div className="max-w-2xl space-y-5 p-4 md:p-4 lg:p-0">
          <p className="text-md">
            <span className="text-red-500">YOU ASK.</span>{" "}
            <span className="text-cyan-500">WE BUILD.</span>
          </p>
          <h1 className="text-4xl font-bold">Software</h1>
          <p className="text-xl">
            Singularity software refers to the pinnacle of technology that we
            pursue with zeal. We create devices that enable our client's
            automation and digitalization
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-35">
        <div className="border-[1px] w-16 h-16 flex justify-center items-center rounded-full text-3xl mb-3 animate-bounce">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <p className="text-xl">KEEP SCROLLING</p>
      </div>
    </section>
  );
};

export default SoftwareHero;
