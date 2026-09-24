import React from "react";
import BuildingImageOne from "../../assets/about_overview 01.png";
const Building = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex gap-10 p-20">
          <h1 className=" text-4xl font-bold">
            Building <span className="text-cyan-800">digital products</span> for
            you.
          </h1>
          <p className="max-w-xl text-xl text-gray-500">
            We are one of the finest destinations to build your digital
            products. We take pride in being on the top IT companies in the
            industry. We solve complex challenging problems by building products
            with the latest technological stacks and design them with attention
            to detail. We are here to build and manage your digital footprint.
          </p>
        </div>
      </div>
      <div
        className="bg-gradient-to-r
                from-cyan-200
                via-pink-100
                to-purple-200
                 pb-20"
      >
        <div className="max-w-7xl mx-auto px-10 py-20">
          <div className="flex gap-15">
            <div>
              <img
                className="w-[60rem] rounded-2xl"
                src={BuildingImageOne}
                alt=""
              />
            </div>
            <div className="w-full text-gray-800 space-y-6">
              <h1 className="text-4xl font-bold">
                We are one of the{" "}
                <span className="text-red-700">finest destinations</span> to
                build your digital products.
              </h1>
              <p className="text-lg font-semibold">
                Just like human DNA, there are no two product requirements that
                are the same - we know this. We take each of our clients and
                projects differently. We build only what meets your business
                needs
              </p>
              <div className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full">
                <div
                  className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r
                from-red-500
                via-pink-500
                to-purple-500 rounded-full transition-[width] duration-700 ease-in-out group-hover:w-full"
                />

                <span className="relative z-10 text-xl font-medium pr-12 text-black transition-colors duration-500 group-hover:text-white">
                  Our Culture
                </span>

                <div className="absolute right-0 top-0 bottom-0 w-14 z-10 flex items-center justify-center text-xl text-black transition-colors duration-500 group-hover:text-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 space-x-10">
            <div className="text-center border-r-2 border-gray-600 p-10">
              <h1 className="text-7xl font-bold text-cyan-900">50+</h1>
              <p className="text-xl font-semibold">certification</p>
            </div>
            <div className="text-center border-r-2 border-gray-600 p-10">
              <h1 className="text-7xl font-bold text-cyan-900">1,500+</h1>
              <p className="text-xl font-semibold">completed projects</p>
            </div>
            <div className="text-center border-r-2 border-gray-600 p-10">
              <h1 className="text-7xl font-bold text-cyan-900">20+</h1>
              <p className="text-xl font-semibold">global affiliation</p>
            </div>
            <div className="text-center border-r-2 border-gray-600 p-10">
              <h1 className="text-7xl font-bold text-cyan-900">300+</h1>
              <p className="text-xl font-semibold">happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
