import React, { useEffect, useState } from "react";
import BuildingImageOne from "../../assets/about_overview 01.png";

const Counter = ({ start = 0, end = 100, duration = 2000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return <h1>{count}+</h1>;
};

const Building = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 md:p-10 lg:p-20">
          <h1 className="text-3xl md:text-4xl font-bold lg:w-1/2">
            Building <span className="text-cyan-800">digital products</span> for
            you.
          </h1>

          <p className="max-w-xl text-base md:text-lg lg:text-xl text-gray-500 lg:w-1/2">
            We are one of the finest destinations to build your digital
            products. We take pride in being on the top IT companies in the
            industry. We solve complex challenging problems by building products
            with the latest technological stacks and design them with attention
            to detail. We are here to build and manage your digital footprint.
          </p>
        </div>
      </div>

      {/* Gradient Section */}
      <div
        className="bg-gradient-to-r
        from-cyan-200
        via-pink-100
        to-purple-200
        pb-10 md:pb-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-auto rounded-2xl object-cover"
                src={BuildingImageOne}
                alt=""
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-gray-800 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                We are one of the{" "}
                <span className="text-red-700">finest destinations</span> to
                build your digital products.
              </h1>

              <p className="text-base md:text-lg font-semibold">
                Just like human DNA, there are no two product requirements that
                are the same - we know this. We take each of our clients and
                projects differently. We build only what meets your business
                needs
              </p>

              {/* Button */}
              <div className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full">
                <div
                  className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r
                  from-red-500
                  via-pink-500
                  to-purple-500
                  rounded-full
                  transition-[width]
                  duration-700
                  ease-in-out
                  group-hover:w-full"
                />

                <span
                  className="relative z-10 text-lg md:text-xl font-medium
                  pr-12 text-black
                  transition-colors duration-500
                  group-hover:text-white"
                >
                  Our Culture
                </span>

                <div
                  className="absolute right-0 top-0 bottom-0 w-14 z-10
                  flex items-center justify-center
                  text-lg md:text-xl text-black
                  transition-colors duration-500
                  group-hover:text-white"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Counters */}
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              mt-12 md:mt-20
              gap-y-10
              md:gap-y-0
              md:gap-x-5
              lg:space-x-10
            "
          >
            {/* Certification */}
            <div
              className="
                text-center
                border-r-2
                border-gray-600
                p-5
                md:p-10
              "
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-900">
                <Counter start={0} end={50} duration={2000} />
              </div>

              <p className="text-base md:text-xl font-semibold">
                certification
              </p>
            </div>

            {/* Completed Projects */}
            <div
              className="
                text-center
                lg:border-r-2
                border-gray-600
                pl-5
                md:pr-10
                md:pt-10
              "
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-900">
                <Counter start={0} end={1500} duration={2000} />
              </div>

              <p className="text-base md:text-xl font-semibold">
                completed projects
              </p>
            </div>

            {/* Global Affiliation */}
            <div
              className="
                text-center
                border-r-2
                border-gray-600
                p-5
                md:p-10
              "
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-900">
                <Counter start={0} end={20} duration={2000} />
              </div>

              <p className="text-base md:text-xl font-semibold">
                global affiliation
              </p>
            </div>

            {/* Happy Clients */}
            <div
              className="
                text-center
                p-5
                md:p-10
              "
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-900">
                <Counter start={0} end={300} duration={2000} />
              </div>

              <p className="text-base md:text-xl font-semibold">
                happy clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
