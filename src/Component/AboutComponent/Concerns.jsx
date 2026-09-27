import React from "react";
import bondstein from "../../assets/Bondstein-Logo.png";
import pencile from "../../assets/brand_pencil (1).png";
import mono from "../../assets/Monochrome.png";

const Concerns = () => {
  return (
    <section className="mb-16 pb-20 sm:mb-20">
      {/* HEADER*/}
      <div className="rounded-lg bg-[#EDF8FE] px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Sister Concerns
          </h1>

          <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl">
            We are a team of highly driven professionals partnering with
            businesses we believe in and creating lasting value for our entity
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mt-16 mb-20 space-y-20 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-32">
          {/*  ONE */}
          <div className="flex flex-col items-center gap-10 md:gap-12 lg:flex-row lg:justify-between lg:gap-16">
            {/* Logo */}
            <div className="flex w-full justify-center lg:w-2/5 lg:justify-start">
              <img
                className="w-full max-w-[15rem] object-contain sm:max-w-[18rem] lg:max-w-[20rem]"
                src={bondstein}
                alt="Bondstein Technologies"
              />
            </div>

            {/* Text */}
            <div className="w-full max-w-2xl space-y-4 text-center lg:w-3/5 lg:text-left">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                Bondstein Technologies ltd.
              </h2>

              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:text-xl">
                Bondstein is an IOT company where we design and fabricate smart
                devices enabled with sensors. Our vision is to empower
                connectivity by using IOT in the era of industry revolution 4.0.
                We are specialized in security and tracking operations
              </p>
            </div>
          </div>

          {/*TWO  */}
          <div className="flex flex-col items-center gap-10 md:gap-12 lg:flex-row-reverse lg:justify-between lg:gap-16">
            {/* Logo */}
            <div className="flex w-full justify-center lg:w-2/5 lg:justify-end">
              <img
                className="w-full max-w-[15rem] object-contain sm:max-w-[18rem] lg:max-w-[20rem]"
                src={pencile}
                alt="Spellbound Leo-Burnett"
              />
            </div>

            {/* Text */}
            <div className="w-full max-w-2xl space-y-4 text-center lg:w-3/5 lg:text-left">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                Spellbound Leo-Burnett
              </h2>

              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:text-xl">
                Spellbound was born with the belief that life of a brand is
                mighty when the brand acts for life. Revolution in ideas is what
                always exists in our minds from the journey we began in 2007. It
                is time for 160 million people of Bangladesh to rise high as
                well as for Spellbound to collaborate globally to engage
                evolution in the advertising industry to transform these human
                behaviors with the power of creativity to build a positive
                Bangladesh and to brand Bangladesh globally.
              </p>
            </div>
          </div>

          {/*  THREE  */}
          <div className="flex flex-col items-center gap-10 md:gap-12 lg:flex-row lg:justify-between lg:gap-16">
            {/* Logo */}
            <div className="flex w-full justify-center lg:w-2/5 lg:justify-start">
              <img
                className="w-full max-w-[15rem] object-contain sm:max-w-[18rem] lg:max-w-[20rem]"
                src={mono}
                alt="Monochrome Limited"
              />
            </div>

            {/* Text */}
            <div className="w-full max-w-3xl space-y-4 text-center lg:text-left">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                Monochrome Limited
              </h2>

              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:text-xl">
                A video production company that brings life to the vision. With
                our dedicated team, we work together to ensure the best possible
                output for our clients. Being a young production company in
                Bangladesh we are optimistic to produce quality contents never
                seen before in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concerns;
