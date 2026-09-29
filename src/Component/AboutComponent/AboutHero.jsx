import React from "react";
import aboutBgBanner from "../../assets/aboutBanner.jpeg";
import { NavLink } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="text-8xl h-screen mt-20 relative">
      <div className="bg-black/70 w-full h-full absolute top-0">
        <div className="flex flex-col gap-5 justify-center items-center mt-20 lg:mt-50 px-4 sm:px-6 md:px-8">
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              text-white
              font-bold
              text-center
              leading-tight
              md:leading-16
            "
          >
            We are a team of <span className="text-red-600">creators</span> and
            <br />
            <span className="text-blue-500">Innovators</span>
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              max-w-2xl
              text-center
              text-white
              font-semibold
              px-2
            "
          >
            In 2012, we founded Singularity with a simple mission: to innovate &
            create. We’ve since expanded, yet never given up on our mission to
            build products to improve your digital footprint
          </p>

          <div className="flex justify-center pt-2">
            <NavLink to="/contact">
              {" "}
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
                cursor-pointer
              "
              >
                Lets's Talk
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <img
        src={aboutBgBanner}
        alt="Background"
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

      <div></div>
    </div>
  );
};

export default AboutHero;
