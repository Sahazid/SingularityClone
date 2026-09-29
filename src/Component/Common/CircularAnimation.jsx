import React, { useEffect, useState } from "react";

const items = [
  {
    title: "Research",
    text: "We know each of our customers are trying to solve unique business problems and we research in depth to craft a solution that ensures maximum ROI",
    icon: "⚙",
  },
  {
    title: "Innovate",
    text: "When it comes to creativity, technology and out of the box solution, we stand out to innovate. We aim to set the bar even higher every single time",
    icon: "💡",
  },
  {
    title: "Deliver",
    text: "Our rocketship ensures an experience for our clients that makes them a repeat traveller. Best quality, outstanding execution and result driven - that's how it is.",
    icon: "🚀",
  },
];

const CircularAnimation = () => {
  const [active, setActive] = useState(0);
  const [radius, setRadius] = useState(300);

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setRadius(180);
      } else if (width < 768) {
        setRadius(220);
      } else if (width < 1024) {
        setRadius(260);
      } else {
        setRadius(300);
      }
    };

    updateRadius();

    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#edf6ff]">
      {/* Heading */}
      <div
        className="
          relative
          z-20
          mx-auto
          max-w-3xl
          px-5
          pt-10
          pb-20
          text-center

          sm:pb-16
          md:pb-20
        "
      >
        <h2
          className="
            text-2xl
            font-normal
            leading-tight
            text-black

            sm:text-3xl
            md:text-4xl pb-2
            lg:text-[38px]
          "
        >
          How we build scalable solutions that drive your
          <br className="hidden md:block" />
          business growth
        </h2>
      </div>

      {/* Circular Area */}
      <div
        className="
          relative
          mx-auto
          mt-5
          h-[500px]
          w-full
          max-w-[900px]

          sm:h-[520px]
          md:h-[460px]
          lg:h-[500px]
        "
      >
        {/* Main Circle */}
        <div
          className="
            absolute
            left-1/2
            top-[40px]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            border
            border-[#62afe2]

            sm:h-[650px]
            sm:w-[650px]

            md:h-[780px]
            md:w-[780px]

            lg:h-[900px]
            lg:w-[900px]
          "
        />

        {/* Carousel Items */}
        {items.map((item, index) => {
          const baseAngles = [-90, 30, 150];

          const angle = baseAngles[index] + active * 120;

          const x = Math.cos((angle * Math.PI) / 180) * radius;

          const y = Math.sin((angle * Math.PI) / 180) * radius;

          const isActive = index === active;

          return (
            <div
              key={item?.title}
              className="
                absolute
                left-1/2
                top-[280px]
                z-10
                transition-all
                duration-1000
                ease-in-out

                sm:top-[300px]
                md:top-[325px]
                lg:top-[350px]
              "
              style={{
                transform: `
                  translate(-50%, -50%)
                  translate(${x}px, ${y}px)
                `,
              }}
            >
              {/* Title */}
              <div
                className={`
                  absolute
                  -top-12
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  text-lg
                  transition-all
                  duration-700

                  sm:-top-13
                  sm:text-xl

                  md:-top-14
                  md:text-2xl

                  ${isActive ? "text-[#0878b9]" : "text-gray-500"}
                `}
              >
                {item?.title}
              </div>

              {/* Outer dotted circle */}
              <div
                className={`
                  flex
                  h-[100px]
                  w-[100px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-dashed
                  transition-all
                  duration-700

                  sm:h-[115px]
                  sm:w-[115px]

                  md:h-[130px]
                  md:w-[130px]

                  ${isActive ? "border-red-400" : "border-gray-500"}
                `}
              >
                {/* Inner circle */}
                <div
                  className={`
                    flex
                    h-[75px]
                    w-[75px]
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-700

                    sm:h-[88px]
                    sm:w-[88px]

                    md:h-[100px]
                    md:w-[100px]

                    ${isActive ? "scale-110 bg-white" : "bg-[#e1e1e1]"}
                  `}
                >
                  <span
                    className={`
                      text-3xl
                      transition-all
                      duration-700

                      sm:text-4xl

                      ${isActive ? "text-red-500" : "text-gray-500"}
                    `}
                  >
                    {item.icon}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Center Text */}
        <div
          className="
            absolute
            left-1/2
            top-[260px]
            z-20
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            text-center

            sm:top-[280px]
            sm:w-[300px]

            md:top-[290px]
            md:w-[340px]

            lg:top-[300px]
            lg:w-[380px]
          "
        >
          <p
            className="
              text-xs
              leading-5
              text-black

              sm:text-sm
              sm:leading-6

              md:text-base
            "
          >
            {items[active].text}
          </p>
        </div>

        {/* Left Arrow */}
        <div
          className="
            absolute
            left-[15%]
            top-[60px]
            text-2xl
            text-gray-700
            rotate-15

            sm:left-[18%]
            sm:top-[70px]
            sm:text-3xl

            md:left-[21%]
            md:top-[75px]

            lg:left-[24%]
            lg:top-[80px]
          "
        >
          ↗
        </div>

        {/* Right Arrow */}
        <div
          className="
            absolute
            right-[15%]
            top-[60px]
            text-2xl
            text-gray-700

            sm:right-[18%]
            sm:top-[70px]
            sm:text-3xl

            md:right-[21%]
            md:top-[75px]

            lg:right-[23%]
            lg:top-[80px]
          "
        >
          ↘
        </div>
      </div>

      {/* Bottom Blue Navigation */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          flex
          h-[90px]
          w-full
          items-center
          justify-center
          gap-3
          bg-[#0878b9]

          sm:h-[100px]
          sm:gap-4

          md:h-[115px]
          md:gap-5
        "
      >
        {/* Previous */}
        <button
          onClick={prevSlide}
          className="
            flex
            h-10
            w-12
            items-center
            justify-center
            rounded-md
            text-2xl
            text-white
            transition
            duration-300
            hover:bg-white
            hover:text-[#0878b9]

            sm:h-11
            sm:w-14
            sm:text-3xl
          "
        >
          ←
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="
            flex
            h-10
            w-12
            items-center
            justify-center
            rounded-md
            text-2xl
            text-white
            transition
            duration-300
            hover:bg-white
            hover:text-[#0878b9]

            sm:h-11
            sm:w-14
            sm:text-3xl
          "
        >
          →
        </button>
      </div>
    </section>
  );
};

export default CircularAnimation;
