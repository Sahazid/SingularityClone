import React, { useState } from "react";
import homeImage from "../../assets/Homeimage2.png";
import slideImage2 from "../../assets/slideImage@.png";
import slideImage3 from "../../assets/slideImage3.png";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const works = [
    {
      number: "1.",
      title: "Spaces for the virtual events",
      description:
        "Battle of Minds (BOM) is one of the most eminent students competition centered around finding the most brilliant youthful business minds from around the globe. It is an interesting innovative challenge to draw the attention of aspiring minds. Spaces came up with the digital solution to hold this event virtually for the first time.",
      image: homeImage,
    },
    {
      number: "2.",
      title: "Havana: A photorealistic reality",
      description:
        "Project Havana is an immersive virtual interactive 3D video experience designed with state-of-the-art software and applications. In this 360-degree video, our audience was able to watch, listen and interact with the ambiance using a VR headset about a specific place.",
      image: slideImage2,
    },
    {
      number: "3.",
      title: "Revamping the Digital Identity of Nagad",
      description:
        "Nagad is one of the most innovative and promising digital financial services of Bangladesh Post Office that embarked upon a glorious journey on March 26, 2019. Since its inception, Nagad has financially included about 5.5 crore people only in two and half years.",
      image: slideImage3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const currentWork = works[currentSlide];

  return (
    <div className="bg-black mt-30">
      <div className="max-w-7xl mx-auto text-white px-6 py-20">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">Our Work</h1>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentWork.number}
              </h2>

              <h4 className="text-2xl md:text-3xl font-semibold mb-6">
                {currentWork.title}
              </h4>

              <p className="text-base md:text-lg leading-8 text-gray-300 mb-10">
                {currentWork.description}
              </p>

              {/* Collaborate Button */}
              <div
                className="
                  relative
                  inline-flex
                  items-center
                  group
                  cursor-pointer
                  h-14
                  px-4
                  overflow-hidden
                  rounded-full
                "
              >
                <div
                  className="
                    absolute
                    inset-y-0
                    right-0
                    w-14
                    bg-[#AD6BBC]
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
                    font-medium
                    pr-12
                    text-white
                  "
                >
                  Collaborate with us
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
                    text-white
                  "
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              {/* Fixed image area */}
              <div
                className="
                  relative
                  w-full
                  h-[280px]
                  sm:h-[350px]
                  md:h-[400px]
                  lg:h-[450px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={currentWork.image}
                  alt={currentWork.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                    rounded-2xl
                    transition-all
                    duration-700
                    ease-in-out
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-16">
          {/* Progress */}
          <div className="flex items-center gap-3">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    currentSlide === index
                      ? "w-16 bg-[#AD6BBC]"
                      : "w-8 bg-gray-600"
                  }
                `}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            {/* Previous */}
            <button
              onClick={previousSlide}
              className="
                w-12
                h-12
                rounded-full
                border
                border-gray-500
                flex
                items-center
                justify-center
                text-xl
                transition-all
                duration-300
                hover:bg-[#AD6BBC]
                hover:border-[#AD6BBC]
              "
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="
                w-12
                h-12
                rounded-full
                border
                border-gray-500
                flex
                items-center
                justify-center
                text-xl
                transition-all
                duration-300
                hover:bg-[#AD6BBC]
                hover:border-[#AD6BBC]
              "
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
