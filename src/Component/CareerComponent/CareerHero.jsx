import React from "react";
import careerbanner from "../../assets/careerBanner.png";

const CareerHero = () => {
  return (
    <div className="h-screen mt-20 relative">
      <div className="bg-black/70 w-full h-full absolute top-0 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-50">
        <div className="flex flex-col gap-5 mt-24 sm:mt-28 md:mt-36 lg:mt-50 px-2 sm:px-4 md:px-8">
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              text-white
              font-bold
              leading-tight
              md:leading-16
            "
          >
            Build your career <br />
            with us
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              md:text-2xl
              max-w-2xl
              text-white
              font-semibold
            "
          >
            We’re proud to help people discover what they love
          </p>

          <div className="flex pt-2">
            <button
              className="
                bg-gradient-to-r
                from-red-500
                via-pink-500
                to-purple-500
                text-white
                px-7
                sm:px-8
                md:px-10
                py-3
                sm:py-4
                text-base
                sm:text-lg
                md:text-xl
                font-semibold
                rounded-full
                shadow-lg
                hover:scale-105
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              Find A Job
            </button>
          </div>
        </div>
      </div>

      <img
        src={careerbanner}
        alt="Career"
        className="
          absolute
          inset-0
          -z-10
          h-full
          w-full
          object-cover
          object-center
        "
      />
    </div>
  );
};

export default CareerHero;
