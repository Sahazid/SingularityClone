import React from "react";

import GpLogo from "../../assets/GpLogo.png";
import UniLiver from "../../assets/UniliverLogo.png";
import Walton from "../../assets/WaltonLogo.png";
import Nokia from "../../assets/NokiaLOgo.png";
import Bat from "../../assets/BatLogo.png";
import Bkash from "../../assets/BkashLogo.png";
import Robi from "../../assets/Robilogo.png";
import Berger from "../../assets/BergerLogo.png";
import Nagad from "../../assets/NagadLogo.png";
import Ifad from "../../assets/IfadLogo.png";
import Marico from "../../assets/MAricoLogo.png";
import Nestle from "../../assets/NestleLogo.png";

const ClientDetails = () => {
  const clientLogos = [
    {
      name: "Grameenphone",
      logo: GpLogo,
    },
    {
      name: "Unilever",
      logo: UniLiver,
    },
    {
      name: "Walton",
      logo: Walton,
    },
    {
      name: "Nokia",
      logo: Nokia,
    },
    {
      name: "BAT",
      logo: Bat,
    },
    {
      name: "bKash",
      logo: Bkash,
    },
    {
      name: "Robi",
      logo: Robi,
    },
    {
      name: "Berger",
      logo: Berger,
    },
    {
      name: "Nagad",
      logo: Nagad,
    },
    {
      name: "IFAD",
      logo: Ifad,
    },
    {
      name: "Marico",
      logo: Marico,
    },
    {
      name: "Nestlé",
      logo: Nestle,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-20 px-4">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Our Clients</h1>

        <p className="text-lg md:text-2xl text-gray-500">
          Some of our favourite clients we are working with regularly.
        </p>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-14">
        {clientLogos.map((client) => (
          <div
            key={client.name}
            className="
              group
              h-40
              rounded-2xl
              border border-gray-200
              bg-white
              flex items-center justify-center
              p-8
              cursor-pointer
              grayscale
              transition-all
              duration-500
              hover:grayscale-0
              hover:scale-105
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(0,0,0,0.15)]
            "
          >
            <img
              src={client.logo}
              alt={client.name}
              className="
                max-w-full
                max-h-20
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDetails;
