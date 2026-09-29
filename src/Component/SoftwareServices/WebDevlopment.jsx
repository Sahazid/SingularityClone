import React from "react";
import image1 from "../../assets/slideImage3.png";
import image2 from "../../assets/singularity__dUc1dB1rbu.png";
import image3 from "../../assets/softwareimage3.png";
import image4 from "../../assets/software image4.png";

const WebDevlopment = () => {
  const projects = [
    {
      image: image1,
      title: "Revamping the Digital Identity of Nagad",
    },
    {
      image: image2,
      title: "IDLC Website Revamp",
    },
    {
      image: image3,
      title: "Shanta AML : Brand Website",
    },
    {
      image: image4,
      title: "Harmony by BATB",
    },
  ];

  const ProjectCard = ({ image, title }) => {
    return (
      <div className="group flex flex-col items-center w-full">
        {/* IMAGE */}
        <div
          className="
            relative
            w-full
            aspect-[16/10]
            overflow-hidden
            rounded-2xl
          "
        >
          <img
            src={image}
            alt={title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Hover Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-black/0
              group-hover:bg-black/10
              transition-all
              duration-500
            "
          />
        </div>

        {/* TITLE */}
        <p
          className="
            mt-5
            flex
            items-center
            gap-3
            text-lg
            sm:text-xl
            font-medium
            transition-all
            duration-500
            group-hover:translate-x-2
          "
        >
          <span
            className="
              opacity-0
              -translate-x-3
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all
              duration-500
              flex-shrink-0
            "
          >
            <i className="fa-solid fa-arrow-right-long" />
          </span>

          <span>{title}</span>
        </p>
      </div>
    );
  };

  const ProjectSection = ({ title }) => {
    return (
      <section className="mt-24 sm:mt-32">
        {/* SECTION TITLE */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            tracking-tight
            mb-10
            sm:mb-14
          "
        >
          {title}
        </h1>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-x-8
            lg:gap-x-12
            gap-y-14
            lg:gap-y-20
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`${title}-${index}`}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white">
      <div
        className="
         container
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          pt-16
          sm:pt-20
          lg:pt-28
          pb-20
        "
      >
        {/* WEB DEVELOPMENT  */}

        <section>
          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              tracking-tight
              mb-10
              sm:mb-14
            "
          >
            Web Development
          </h1>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-x-8
              lg:gap-x-12
              gap-y-14
              lg:gap-y-20
            "
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`web-${index}`}
                image={project.image}
                title={project.title}
              />
            ))}
          </div>
        </section>

        {/*MOBILE DEVELOPMENT  */}

        <ProjectSection title="Mobile Development" />

        {/* ECOMMERCE  */}

        <ProjectSection title="Ecommerce" />

        {/* TRADE MARKETING AUTOMATION  */}

        <ProjectSection title="Trade Marketing Automation" />
      </div>
    </div>
  );
};

export default WebDevlopment;
