import React from "react";

const CoresC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#E8F5FD]">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* LEFT SIDE - STICKY */}
        <div
          className="
            w-full
            lg:w-1/2
            lg:sticky
            lg:top-20
            lg:self-start
            space-y-6
            sm:space-y-8
            lg:space-y-10
          "
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Singularity’s Core Values
          </h1>

          <p className="text-lg sm:text-xl">
            We are one of the finest destinations to build your digital
            products. We take pride in being on the top IT companies in the
            industry.
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

        {/* RIGHT SIDE - NORMAL SCROLL */}
        <div
          className="
            container-slide
            w-full
            lg:w-1/2
            space-y-6
            sm:space-y-8
            flex
            flex-col
          "
        >
          {/* CARD 1 */}
          <div
            className="
              bg-linear-to-r
                    from-[#c9e7fc]  
              to-[#FBF3F6]
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
              flex
              flex-col
              sm:flex-row
              gap-6
              items-start
            "
          >
            <div className="text-4xl bg-white text-orange-700 p-4 rounded-full">
              <i class="fa-brands fa-fediverse"></i>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Collaborative{" "}
              </h2>

              <p className="text-base sm:text-lg">
                We collaborate to delegate maximum value
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-linear-to-r
                from-[#c9e7fc]  
              to-[#FBF3F6]
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
              flex
              flex-col
              sm:flex-row
              gap-6
              items-start
            "
          >
            <div className="text-4xl bg-white text-orange-700 p-4 rounded-full">
              <i class="fa-brands fa-artstation"></i>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Creative{" "}
              </h2>

              <p className="text-base sm:text-lg">
                We believe in the art of imagination
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-linear-to-r
                       from-[#c9e7fc]  
              to-[#FBF3F6]
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
              flex
              flex-col
              sm:flex-row
              gap-6
              items-start
            "
          >
            <div className="text-4xl bg-white text-orange-700 p-4 rounded-full">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Professional{" "}
              </h2>

              <p className="text-base sm:text-lg">
                Professionalism is at the heart of what we do
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="
              bg-linear-to-r
                  from-[#c9e7fc]  
              to-[#FBF3F6]
              px-6
              sm:px-8
              lg:px-10
              py-6
              rounded-md
              flex
              flex-col
              sm:flex-row
              gap-6
              items-start
            "
          >
            <div className="text-4xl bg-white text-orange-700 p-4 rounded-full">
              <i class="fa-solid fa-head-side-virus"></i>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Thoughtful
              </h2>

              <p className="text-base sm:text-lg">
                We adapt for every client and pitch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoresC;
