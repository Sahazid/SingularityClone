import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {" "}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {" "}
        {/* Main Footer */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {" "}
          {/* Contact */}{" "}
          <div className="space-y-6">
            {" "}
            <h2 className="text-2xl font-bold"> Contact </h2>{" "}
            <div className="space-y-4 text-gray-400">
              {" "}
              <a
                href="mailto:info@singularitybd.com"
                className="block hover:text-white transition duration-300"
              >
                {" "}
                info@singularitybd.com{" "}
              </a>{" "}
              <a
                href="tel:+8801727654326"
                className="block hover:text-white transition duration-300"
              >
                {" "}
                +880 1727-654326{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* Address */}{" "}
          <div className="space-y-6">
            {" "}
            <h2 className="text-2xl font-bold"> SINGULARITY LIMITED </h2>{" "}
            <p className="text-gray-400 leading-7">
              {" "}
              138/1, Level 4, Tejgaon I/A <br /> Dhaka 1208, Bangladesh{" "}
            </p>{" "}
          </div>{" "}
          {/* Company */}{" "}
          <div className="space-y-6">
            {" "}
            <h2 className="text-2xl font-bold"> Company </h2>{" "}
            <div className="flex flex-col gap-4 text-gray-400">
              {" "}
              <a
                href="https://singularitybd.com/about"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                {" "}
                About{" "}
              </a>{" "}
              <a
                href="https://singularitybd.com/career"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                {" "}
                Career{" "}
              </a>{" "}
              <a
                href="https://singularitybd.com/culture"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                {" "}
                Culture{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* Services */}{" "}
          <div className="space-y-6">
            {" "}
            <h2 className="text-2xl font-bold"> Services </h2>{" "}
            <div className="flex flex-col gap-4 text-gray-400">
              {" "}
              <a
                href="https://singularitybd.com/software"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                {" "}
                Software{" "}
              </a>{" "}
              <a
                href="https://singularitybd.com/studio"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                {" "}
                Studio{" "}
              </a>{" "}
              <a
                href="https://singularitybd.com/xperience"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                {" "}
                Xperience{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom */}{" "}
        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {" "}
          {/* Social Icons */}{" "}
          <div className="flex items-center gap-4">
            {" "}
            {/* Instagram */}{" "}
            <a
              href="https://www.instagram.com/singularitylimited/"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 "
            >
              {" "}
              <i className="fa-brands fa-instagram"></i>{" "}
            </a>{" "}
            {/* YouTube */}{" "}
            <a
              href="https://www.youtube.com/user/StudioSingularity"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 "
            >
              {" "}
              <i className="fa-brands fa-youtube"></i>{" "}
            </a>{" "}
            {/* Facebook */}{" "}
            <a
              href="https://www.facebook.com/singularity.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 "
            >
              {" "}
              <i className="fa-brands fa-facebook-f"></i>{" "}
            </a>{" "}
            {/* LinkedIn */}{" "}
            <a
              href="https://www.linkedin.com/company/singularity-limited/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 "
            >
              {" "}
              <i className="fa-brands fa-linkedin-in"></i>{" "}
            </a>{" "}
          </div>{" "}
          {/* Contact Button */}{" "}
          <a
            href="https://singularitybd.com/contact"
            className=" inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r
                  from-red-500
                  via-pink-500
                  to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 "
          >
            {" "}
            Contact Us <i className="fa-solid fa-arrow-right ml-3"></i>{" "}
          </a>{" "}
        </div>{" "}
        {/* Copyright */}{" "}
        <div className="text-center text-gray-500 text-sm mt-10">
          {" "}
          © {new Date().getFullYear()} Singularity Limited. All rights
          reserved.{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
