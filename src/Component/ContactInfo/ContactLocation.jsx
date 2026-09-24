import React from "react";

const ContactLocation = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      {/* Map */}
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.576120298015!2d90.40415197613099!3d23.762490478662155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8820b68650f%3A0x97fed943e315e244!2sRunner%20Group!5e0!3m2!1sen!2sbd!4v1790238244804!5m2!1sen!2sbd"
          className="w-full h-[400px] sm:h-[500px] lg:h-[640px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Location Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-10 md:p-14 lg:p-20 space-y-8 sm:space-y-12 lg:space-y-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Find Us Here
        </h1>

        <p className="text-lg sm:text-xl">
          SINGULARITY LIMITED, 138/1, Level 4, Tejgaon I/A, Dhaka 1208,
          Bangladesh
        </p>

        <p className="text-lg sm:text-xl">
          10:00 AM - 06:00 PM Sunday - Thursday
        </p>
      </div>
    </div>
  );
};

export default ContactLocation;
