import React from "react";

const StudioWorks = ({ works }) => {
  // console.log(works);

  return (
    <section className="bg-[#ECF6FF]">
      <div className="container mx-auto px-4 py-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-widest">
            Our Works
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
            Some of Our Creative Works
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works?.map((work, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={work?.image}
                  alt={work?.title}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/40
                    transition-all
                    duration-500
                  "
                ></div>

                {/* View Text */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <span className="px-5 py-2 rounded-full bg-white text-gray-900 font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-900">
                  {work?.title}
                </p>

                <div
                  className="
                    mt-3
                    h-1
                    w-0
                    bg-cyan-500
                    rounded-full
                    group-hover:w-16
                    transition-all
                    duration-500
                  "
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioWorks;
