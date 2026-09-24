import React, { useState } from "react";

import homeImage3 from "../../assets/homeImage3.png";
// import waltonImage from "../../assets/waltonImage.png";
// import anotherImage from "../../assets/anotherImage.png";
import storyImageOne from "../../assets/Romel_IDLC.cadfa2a.png";
import storyImageTwo from "../../assets/Amin khan.f6fa5d2.png";
import companyWaltonLogo from "../../assets/WaltonLogo.png";

const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      image: homeImage3,
      company: "IPDC",
      // finance: "finance happiness",
      person: "Tareq Islam Shuvo",
      position: "Deputy General Manager & Group Chief Marketing Officer, IDLC",
    },

    {
      image: storyImageOne,
      company: "IDLC",
      finance: "finance happiness",
      person: "Jane Alam Romel",
      position: "General Manager & Chief Marketing Officer, WALTON",
    },

    {
      image: storyImageTwo,
      company: "WALTON",
      // finance: "finance happiness",
      person: "Amin Khan",
      position: "Deputy General Manager & Group Chief Marketing Officer",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#DEF3FF] min-h-[200px] pt-14 pb-20 overflow-hidden">
      {/* Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-bold text-black mb-12">
        Success Stories
      </h1>

      {/* SLIDER */}
      <div className="max-w-[1300px] mx-auto px-0 overflow-hidden">
        {/* All Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {stories.map((story, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {/* One Complete Story */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* LEFT IMAGE */}
                <div className="w-full lg:w-[62%]">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full max-w-[770px] rounded-[25px] object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-[38%] mt-8 lg:mt-0 lg:ml-8">
                  {/* Company Logo */}
                  <div className="mb-8">
                    <div className="flex items-center">
                      <div className="w-7 h-7 bg-[#ed1c24] mr-2 relative">
                        <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                      </div>

                      <div>
                        <h2 className="text-4xl font-bold leading-none tracking-tight">
                          {story.company}
                        </h2>

                        <p className="text-[11px] font-medium tracking-wide">
                          Finance
                        </p>
                      </div>
                    </div>

                    <p className="font-serif italic text-sm mt-2">
                      {story.finance}
                    </p>
                  </div>

                  {/* Person */}
                  <div>
                    <h3 className="text-3xl font-bold text-black">
                      {story.person}
                    </h3>

                    <p className="text-base italic text-black mt-1">
                      {story.position}
                    </p>
                  </div>

                  {/* Arrows */}
                  <div className="flex items-center gap-7 mt-10">
                    <button
                      onClick={previousSlide}
                      className="text-5xl font-light leading-none hover:scale-110 transition-transform cursor-pointer"
                      aria-label="Previous story"
                    >
                      ←
                    </button>

                    <button
                      onClick={nextSlide}
                      className="text-5xl font-light leading-none hover:scale-110 transition-transform cursor-pointer"
                      aria-label="Next story"
                    >
                      →
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="flex gap-2 mt-6">
                    {stories.map((_, indicatorIndex) => (
                      <button
                        key={indicatorIndex}
                        onClick={() => setCurrentSlide(indicatorIndex)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === indicatorIndex
                            ? "w-8 bg-black"
                            : "w-2 bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${indicatorIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
