import React from "react";
import platBanner from "../../assets/platform-banner.6c51d59.gif";
import platBanner2 from "../../assets/studio-banner.625266a.gif";
import platBanner3 from "../../assets/xperience-banner.0efa800.gif";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto mt-20 md:mt-24 lg:mt-30 px-5 sm:px-8 lg:px-10">
      {/* Software */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-10 lg:py-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[30rem]"
            src={platBanner}
            alt="Software"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Software
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
            We build products that empower automation and digitalization of our
            clients. We unlock the future of technology. Our engineering teams
            are carefully handpicked only to bring your software solutions.
          </p>

          {/* Button */}
          <div
            onClick={() => navigate("/software")}
            className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full self-center lg:self-start"
          >
            <div
              className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r
                  from-red-500
                  via-pink-500
                  to-purple-500 rounded-full transition-all duration-700 ease-in-out group-hover:w-full"
            />

            <span className="relative z-10 text-lg sm:text-xl font-medium pr-12 text-black transition-colors duration-500 group-hover:text-white">
              See more
            </span>

            <div className="absolute right-0 top-0 bottom-0 w-14 z-10 flex items-center justify-center text-lg sm:text-xl text-black transition-colors duration-500 group-hover:text-white">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Studio */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-16 py-10 lg:py-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[30rem]"
            src={platBanner2}
            alt="Studio"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Studio</h1>

          <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
            From lucrative characters to realistic elements our passionate team
            of video editors, animators, 3D asset creators, motion graphics
            designers and creative visualizers empower you to tell great stories
            for your business.
          </p>

          {/* BUtton */}
          <div
            onClick={() => navigate("/studio")}
            className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full self-center lg:self-start"
          >
            <div
              className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r
                  from-red-500
                  via-pink-500
                  to-purple-500
                  rounded-full transition-all duration-700 ease-in-out group-hover:w-full"
            />

            <span className="relative z-10 text-lg sm:text-xl font-medium pr-12 text-black transition-colors duration-500 group-hover:text-white">
              See more
            </span>

            <div className="absolute right-0 top-0 bottom-0 w-14 z-10 flex items-center justify-center text-lg sm:text-xl text-black transition-colors duration-500 group-hover:text-white">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Xperience */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-10 lg:py-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[30rem]"
            src={platBanner3}
            alt="Xperience"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Xperience
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
            We open the world of experience to our clients with several
            simulated realities. Virtual reality, Augmented reality and Mixed
            reality. In singularity, we have mastered this art already to
            provide high-end products to the brands we work with.
          </p>

          {/* Button  */}
          <div
            onClick={() => navigate("/xperience")}
            className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full self-center lg:self-start"
          >
            <div
              className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r
                  from-red-500
                  via-pink-500
                  to-purple-500 rounded-full transition-all duration-700 ease-in-out group-hover:w-full"
            />

            <span className="relative z-10 text-lg sm:text-xl font-medium pr-12 text-black transition-colors duration-500 group-hover:text-white">
              See more
            </span>

            <div className="absolute right-0 top-0 bottom-0 w-14 z-10 flex items-center justify-center text-lg sm:text-xl text-black transition-colors duration-500 group-hover:text-white">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
