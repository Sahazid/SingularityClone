import React from "react";
import logo1 from "../../assets/services logo 1.c7e8794.png";
import logo2 from "../../assets/services logo 2.7871515.png";
import logo3 from "../../assets/services logo 3.97202a6.png";
import logo4 from "../../assets/services logo 4.11a5f21.png";
import logo5 from "../../assets/services logo 5.a14afc1.png";
import logo6 from "../../assets/services logo 6.05548aa.png";

const ServicesSec = () => {
  return (
    <section className="w-full mb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}

        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Serivces
        </h1>
        <div className="flex justify-center items-center pt-4">
          {" "}
          <p className=" w-20 h-1 bg-cyan-600 rounded-2xl"></p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 lg:gap-y-16 mt-16 sm:mt-20 place-items-center">
          {/* Service 1 */}
          <div className="w-full max-w-sm flex flex-col justify-center items-center gap-4 text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
              <img src={logo1} alt="Web Services" className="object-contain" />
            </div>

            <h1 className="text-xl sm:text-2xl font-medium">Web Services</h1>

            <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
              We provide solutions that are browser dependent and have complex
              business structures
            </p>
          </div>

          {/* Service 2 */}
          <div className="w-full max-w-sm flex flex-col justify-center items-center gap-4 text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
              <img
                src={logo2}
                alt="Mobile Development"
                className=" object-contain"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-medium">
              Mobile Development
            </h1>

            <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
              Be it Native or Hybrid, we provide mobile development services for
              our customers both android and ios
            </p>
          </div>

          {/* Service 3 */}
          <div className="w-full max-w-sm flex flex-col justify-center items-center gap-4 text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
              <img
                src={logo3}
                alt="Online Self-Banking"
                className=" object-contain"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-medium">
              Online Self-Banking
            </h1>

            <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
              We provide customer friendly online banking solutions for banks
              and financial institutions
            </p>
          </div>

          {/* Service 4 */}
          <div className="w-full max-w-sm flex flex-col justify-center items-center gap-4 text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
              <img
                src={logo4}
                alt="Trade Marketing Automation"
                className=" object-contain"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-medium">
              Trade Marketing Automation
            </h1>

            <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
              Our powerful TMR tool has helped our clients achieve higher ROI by
              capturing the right market pulse at the right time
            </p>
          </div>

          {/* Service 5 */}
          <div className="w-full max-w-sm flex flex-col justify-center items-center gap-4 text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
              <img
                src={logo5}
                alt="Online News Agency"
                className=" object-contain"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-medium">
              Online News Agency
            </h1>

            <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
              Our service has led in increased reader stickiness in popular
              platforms of sharing news
            </p>
          </div>

          {/* Service 6 */}
          <div className="w-full max-w-sm flex flex-col justify-center items-center gap-4 text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
              <img
                src={logo6}
                alt="E-Commerce Platform"
                className=" object-contain"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-medium">
              E-Commerce Platform
            </h1>

            <p className="text-sm sm:text-base leading-6 text-gray-600 max-w-xs">
              We provide wide range of solutions under e-commerce service
              category specially curated for different business sizes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;

// import React from "react";
// import logo1 from "../../assets/services logo 1.c7e8794.png";
// import logo2 from "../../assets/services logo 2.7871515.png";
// import logo3 from "../../assets/services logo 3.97202a6.png";
// import logo4 from "../../assets/services logo 4.11a5f21.png";
// import logo5 from "../../assets/services logo 5.a14afc1.png";
// import logo6 from "../../assets/services logo 6.05548aa.png";

// const ServicesSec = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5FBFF] to-[#EAF7FD] py-16 sm:py-20 lg:py-28">

//       {/* Background Decorations */}
//       <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
//       <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

//         {/* Heading */}
//         <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#0785c1]/10 text-[#0785c1] text-sm font-medium tracking-wider">
//             WHAT WE DO
//           </span>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">
//             Services
//           </h1>

//           <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#0785c1]" />
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

//           {/* One */}
//           <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(7,133,193,0.15)]">

//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

//             <div className="flex justify-center items-center mb-6">
//               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#EDF8FE] flex items-center justify-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
//                 <img
//                   src={logo1}
//                   alt="Web Services"
//                   className="w-20 sm:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </div>

//             <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 group-hover:text-[#0785c1] transition-colors duration-300">
//               Web Services
//             </h1>

//             <p className="mt-4 text-center text-gray-600 leading-7 text-sm sm:text-base">
//               We provide solutions that are browser dependent and have complex
//               business structures.
//             </p>

//             <div className="mt-6 mx-auto w-10 h-1 rounded-full bg-[#0785c1]/30 group-hover:w-16 transition-all duration-500" />
//           </div>

//           {/* Two */}
//           <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(7,133,193,0.15)]">

//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

//             <div className="flex justify-center items-center mb-6">
//               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#EDF8FE] flex items-center justify-center transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110">
//                 <img
//                   src={logo2}
//                   alt="Mobile Development"
//                   className="w-20 sm:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </div>

//             <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 group-hover:text-[#0785c1] transition-colors duration-300">
//               Mobile Development
//             </h1>

//             <p className="mt-4 text-center text-gray-600 leading-7 text-sm sm:text-base">
//               Be it Native or Hybrid, we provide mobile development services
//               for our customers both android and ios.
//             </p>

//             <div className="mt-6 mx-auto w-10 h-1 rounded-full bg-[#0785c1]/30 group-hover:w-16 transition-all duration-500" />
//           </div>

//           {/* Three */}
//           <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(7,133,193,0.15)]">

//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

//             <div className="flex justify-center items-center mb-6">
//               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#EDF8FE] flex items-center justify-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
//                 <img
//                   src={logo3}
//                   alt="Online Self-Banking"
//                   className="w-20 sm:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </div>

//             <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 group-hover:text-[#0785c1] transition-colors duration-300">
//               Online Self-Banking
//             </h1>

//             <p className="mt-4 text-center text-gray-600 leading-7 text-sm sm:text-base">
//               We provide customer friendly online banking solutions for banks
//               and financial institutions.
//             </p>

//             <div className="mt-6 mx-auto w-10 h-1 rounded-full bg-[#0785c1]/30 group-hover:w-16 transition-all duration-500" />
//           </div>

//           {/* Four */}
//           <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(7,133,193,0.15)]">

//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

//             <div className="flex justify-center items-center mb-6">
//               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#EDF8FE] flex items-center justify-center transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110">
//                 <img
//                   src={logo4}
//                   alt="Trade Marketing Automation"
//                   className="w-20 sm:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </div>

//             <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 group-hover:text-[#0785c1] transition-colors duration-300">
//               Trade Marketing Automation
//             </h1>

//             <p className="mt-4 text-center text-gray-600 leading-7 text-sm sm:text-base">
//               Our powerful TMR tool has helped our clients achieve higher ROI
//               by capturing the right market pulse at the right time.
//             </p>

//             <div className="mt-6 mx-auto w-10 h-1 rounded-full bg-[#0785c1]/30 group-hover:w-16 transition-all duration-500" />
//           </div>

//           {/* Five */}
//           <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(7,133,193,0.15)]">

//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

//             <div className="flex justify-center items-center mb-6">
//               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#EDF8FE] flex items-center justify-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
//                 <img
//                   src={logo5}
//                   alt="Online News Agency"
//                   className="w-20 sm:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </div>

//             <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 group-hover:text-[#0785c1] transition-colors duration-300">
//               Online News Agency
//             </h1>

//             <p className="mt-4 text-center text-gray-600 leading-7 text-sm sm:text-base">
//               Our service has led in increased reader stickiness in popular
//               platforms of sharing news.
//             </p>

//             <div className="mt-6 mx-auto w-10 h-1 rounded-full bg-[#0785c1]/30 group-hover:w-16 transition-all duration-500" />
//           </div>

//           {/* Six */}
//           <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(7,133,193,0.15)]">

//             <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

//             <div className="flex justify-center items-center mb-6">
//               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#EDF8FE] flex items-center justify-center transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110">
//                 <img
//                   src={logo6}
//                   alt="E-Commerce Platform"
//                   className="w-20 sm:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//             </div>

//             <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 group-hover:text-[#0785c1] transition-colors duration-300">
//               E-Commerce Platform
//             </h1>

//             <p className="mt-4 text-center text-gray-600 leading-7 text-sm sm:text-base">
//               We provide wide range of solutions under e-commerce service
//               category specially curated for different business sizes.
//             </p>

//             <div className="mt-6 mx-auto w-10 h-1 rounded-full bg-[#0785c1]/30 group-hover:w-16 transition-all duration-500" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSec;
