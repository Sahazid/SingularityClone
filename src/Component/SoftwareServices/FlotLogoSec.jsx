import React from "react";
import images1 from "../../assets/softwareFloatingimage1.png";
import images2 from "../../assets/floatingReact.png";
import images3 from "../../assets/floatingFigma.png";
import images4 from "../../assets/floatingPixel.png";
import images5 from "../../assets/floatingJS.png";
import images6 from "../../assets/floatingTriangle.png";
import images7 from "../../assets/floatingPython.png";

const FlotLogoSec = () => {
  return (
    <>
      {/* Floating Animation CSS */}
      <style>
        {`
          @keyframes float-diagonal {
            0% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(20px, -20px);
            }

            100% {
              transform: translate(0, 0);
            }
          }

          .floating-diagonal {
            animation: float-diagonal 4s ease-in-out infinite;
          }
        `}
      </style>

      <div
        className="bg-gradient-to-r 
                  from-cyan-200 
                  to-purple-100 pb-20"
      >
        <div className="max-w-7xl mx-auto pb-20">
          {/* Heading */}
          <div className="flex justify-center items-center">
            <h1 className="text-center max-w-3xl text-3xl p-20">
              We use VueJs, React, NuxtJs, Figma, Adobe XD and other{" "}
              <span className="text-red-600">development tools</span> to make
              your product.
            </h1>
          </div>

          {/* Logo Section */}
          <div className="flex flex-col gap-20">
            {/* First Row */}
            <div className="flex justify-between">
              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images1}
                alt=""
              />

              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images2}
                alt=""
              />
            </div>

            {/* Second Row */}
            <div className="flex justify-around">
              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images3}
                alt=""
              />

              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images4}
                alt=""
              />
            </div>

            {/* Third Row */}
            <div className="flex justify-between">
              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images5}
                alt=""
              />

              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images6}
                alt=""
              />

              <img
                className="bg-white px-4 py-4 rounded-full floating-diagonal"
                src={images7}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlotLogoSec;
