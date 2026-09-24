import React from "react";
import contactGif from "../../assets/Contact Page.gif";
import "./styles.css";
const Form = () => {
  return (
    <div className="relative z-20 -mt-10 sm:-mt-20 lg:-mt-[10rem] bg-[#DEF3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-25">
        {/* Heading */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Let’s Unlock the Future Together
          </h1>

          <p className="text-base sm:text-lg">We Would Love to Hear From You</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-12 sm:mt-16 lg:mt-20 pb-20 sm:pb-24 lg:pb-30 items-center">
          {/* GIF */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
              src={contactGif}
              alt="Contact us"
            />
          </div>

          {/* Animated Gradient Border */}
          <div
            className="
              w-full sm:w-[90%] md:w-[70%] lg:w-1/2
              rounded-2xl
              p-[2px]
              bg-[linear-gradient(90deg,#ff4d4d,#a855f7,#06b6d4,#ff4d4d)]
              bg-[length:300%_300%]
              animate-[gradientBorder_4s_linear_infinite]
              shadow-xl
            "
          >
            {/* Form Card */}
            <div className="bg-[#EBF8FF] rounded-2xl p-6 sm:p-8 lg:p-10">
              <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                Let's Connect
              </h1>

              <div className="space-y-8">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="What can we call you?"
                    className="
                      border-b border-gray-400
                      outline-none
                      w-full
                      bg-transparent
                      py-2
                      text-base sm:text-lg
                      focus:border-red-500
                      transition duration-300
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="What's your email?"
                    className="
                      border-b border-gray-400
                      outline-none
                      w-full
                      bg-transparent
                      py-2
                      text-base sm:text-lg
                      focus:border-red-500
                      transition duration-300
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <input
                    type="text"
                    name="message"
                    placeholder="How can we help you?"
                    className="
                      border-b border-gray-400
                      outline-none
                      w-full
                      bg-transparent
                      py-2
                      text-base sm:text-lg
                      focus:border-red-500
                      transition duration-300
                    "
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button
                    className="
                      bg-gradient-to-r
                      from-red-500
                      via-pink-500
                      to-purple-500
                      text-white
                      px-8
                      py-3
                      text-lg sm:text-xl
                      font-semibold
                      rounded-full
                      shadow-lg
                      hover:scale-105
                      hover:shadow-xl
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
