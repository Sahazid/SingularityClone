import React from "react";

const CareerIntro = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 lg:space-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            What you can learn from us
          </h1>

          <p className="text-lg sm:text-xl">
            We take pride in being one of the award winning full-service
            experiential marketing agency in Bangladesh
          </p>

          {/* Button */}
          <div className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full">
            <div
              className="
                absolute
                inset-y-0
                right-0
                w-14
                bg-gradient-to-r
                from-red-500
                via-pink-500
                to-purple-500
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
                sm:text-2xl
                font-medium
                pr-12
                text-black
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              Our Culture
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
                text-black
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
            container-slide
            w-full
            lg:w-1/2
            h-[35rem]
            sm:h-[40rem]
            md:h-[45rem]
            lg:h-[52rem]
            space-y-6
            sm:space-y-8
            overflow-y-auto
            flex
            flex-col
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* Card 1 */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
              sm:gap-8
              lg:gap-10
              bg-linear-to-r
              from-cyan-200
              via-pink-100
              to-red-100
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
            "
          >
            <span className="shrink-0 text-3xl sm:text-4xl bg-white text-red-500 p-5 sm:p-7 rounded-full">
              <i className="fa-solid fa-crow"></i>
            </span>

            <div className="space-y-3 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Freedom and Responsibility
              </h1>

              <p className="text-sm sm:text-base">
                Singularity has proven to be a great workplace for employees by
                allowing them to do whatever and however long as they act in
                Singularity’s best interest. Here at Singularity we encourage
                each & everyone to be big risk-takers and trusted to make the
                best decision.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
              sm:gap-8
              lg:gap-10
             bg-linear-to-r
              from-cyan-200
              via-pink-100
              to-red-100
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
            "
          >
            <span className="shrink-0 text-3xl sm:text-4xl bg-white text-red-500 p-5 sm:p-7 rounded-full">
              <i className="fa-solid fa-crow"></i>
            </span>

            <div className="space-y-3 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Freedom and Responsibility
              </h1>

              <p className="text-sm sm:text-base">
                Singularity has proven to be a great workplace for employees by
                allowing them to do whatever and however long as they act in
                Singularity’s best interest. Here at Singularity we encourage
                each & everyone to be big risk-takers and trusted to make the
                best decision.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
              sm:gap-8
              lg:gap-10
              bg-linear-to-r
              from-cyan-200
              via-pink-100
              to-red-100
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
            "
          >
            <span className="shrink-0 text-3xl sm:text-4xl bg-white text-red-500 p-5 sm:p-7 rounded-full">
              <i className="fa-solid fa-crow"></i>
            </span>

            <div className="space-y-3 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Freedom and Responsibility
              </h1>

              <p className="text-sm sm:text-base">
                Singularity has proven to be a great workplace for employees by
                allowing them to do whatever and however long as they act in
                Singularity’s best interest. Here at Singularity we encourage
                each & everyone to be big risk-takers and trusted to make the
                best decision.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
              sm:gap-8
              lg:gap-10
              bg-linear-to-r
              from-cyan-200
              via-pink-100
              to-red-100
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
            "
          >
            <span className="shrink-0 text-3xl sm:text-4xl bg-white text-red-500 p-5 sm:p-7 rounded-full">
              <i className="fa-solid fa-crow"></i>
            </span>

            <div className="space-y-3 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Freedom and Responsibility
              </h1>

              <p className="text-sm sm:text-base">
                Singularity has proven to be a great workplace for employees by
                allowing them to do whatever and however long as they act in
                Singularity’s best interest. Here at Singularity we encourage
                each & everyone to be big risk-takers and trusted to make the
                best decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerIntro;
