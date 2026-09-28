import React from "react";

const XperienceServices = ({ services }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 lg:gap-y-20 mt-16 sm:mt-20 place-items-center">
          {services?.map((service, index) => (
            <div
              key={index}
              className="w-full p-5 rounded-md max-w-sm flex flex-col justify-center items-center gap-4 text-center bg-white"
            >
              {/* Icon */}
              <div className="text-8xl text-cyan-700 flex items-center justify-center">
                <img src={service?.image} alt="" />
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl font-medium">
                {service?.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XperienceServices;
