import React from "react";
import leader1 from "../../assets/Leadership Team-01.png";
import leader2 from "../../assets/Leadership Team-02.png";

const Leaders = () => {
  const leaders = [
    {
      image: leader1,
      name: "Mir Sharukh Islam",
      role: "Managing Director & CEO",
    },
    {
      image: leader2,
      name: "Zafir Shafiee Chowdhury",
      role: "Chairman & COO",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FD] to-white py-20 sm:py-24 lg:py-20">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#0785c1]/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/*  HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Text */}
          <div className="max-w-4xl">
            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#0785c1]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0785c1]">
                Leadership
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Our <span className="text-[#0785c1]">Leaders</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
              Endeavors of Singularity the dynamic duo, recognized by The Forbes
              Asia as 30 under 30. Brightest in their pack{" "}
              <span className="font-semibold text-gray-900">
                Mir Sharukh Islam
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900">
                Zafir Shafiee Chowdhury
              </span>{" "}
              were acknowledged with various local and global awards in their
              ramble.
            </p>
          </div>

          {/* Chess Icon */}
          <div className="hidden lg:flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl bg-white/70 shadow-xl shadow-cyan-900/5 backdrop-blur-md">
            <i className="fa-solid fa-chess text-6xl text-[#0785c1]" />
          </div>
        </div>

        {/* LEADERS */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-cyan-900/10">
                {/* Image */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="
                    w-full
                    
                    aspect-[4/4]
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Gradient Overlay */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                />

                {/* LinkedIn Button */}
                <a
                  href="#"
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-gray-900
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#0785c1]
                    hover:text-white
                    hover:scale-110
                  "
                >
                  <i className="fa-brands fa-linkedin-in text-lg" />
                </a>
              </div>

              <div className="mt-6 px-2">
                <h2
                  className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-gray-900
                  transition-colors
                  duration-300
                  group-hover:text-[#0785c1]
                "
                >
                  {leader.name}
                </h2>

                <div className="mt-3 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#0785c1]" />

                  <p className="text-sm sm:text-base font-medium text-gray-500">
                    {leader.role}
                  </p>
                  <span className="h-[2px] w-8 bg-[#0785c1]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gray-200" />

          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Leading with vision
          </span>

          <span className="h-px w-16 bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default Leaders;
