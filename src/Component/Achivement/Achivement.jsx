import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";

import trofeeOne from "../../assets/trofee-01.ce2e357.png";
import trofeeTwo from "../../assets/trofee-02.1e46abc.png";
import trofeeThree from "../../assets/trofee-03.36cb68c.png";

const Achivement = () => {
  return (
    <div className="relative w-full">
      {/* Heading */}
      <div className="text-center mt-12 sm:mt-16 lg:mt-20 mb-10 sm:mb-14 lg:mb-20 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[1.3]">
          We have achieved{" "}
          <span className="text-red-500">prestigious awards</span> for
          <br className="hidden sm:block" /> outstanding work
        </h1>
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper !pb-12"
          breakpoints={{
            // Mobile
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            // Tablet
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },

            // Desktop
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {/* Award 1 */}
          <SwiperSlide className="!h-auto">
            <div className="flex flex-col items-center justify-center lg:mt-20">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                <span className="text-red-500">8x</span> Commwards
              </h1>

              <img
                src={trofeeOne}
                alt="Commwards trophy"
                className="w-40 sm:w-48 lg:w-56 h-auto object-contain"
              />
            </div>
          </SwiperSlide>

          {/* Award 2 */}
          <SwiperSlide className="!h-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                <span className="text-red-500">1x</span> National ICT Awards
              </h1>

              <img
                src={trofeeTwo}
                alt="National ICT Awards trophy"
                className="w-40 sm:w-48 lg:w-56 h-auto object-contain"
              />
            </div>
          </SwiperSlide>

          {/* Award 3 */}
          <SwiperSlide className="!h-auto">
            <div className="flex flex-col items-center justify-center lg:mt-20">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                <span className="text-red-500">4x</span> Digital Marketing
                Awards
              </h1>

              <img
                src={trofeeThree}
                alt="Digital Marketing Awards trophy"
                className="w-40 sm:w-48 lg:w-56 h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Achivement;
