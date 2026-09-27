import React from "react";
import SoftwareHero from "../../Component/SoftwareServices/SoftwareHero";
import ServicesSec from "../../Component/SoftwareServices/ServicesSec";
import WebDevlopment from "../../Component/SoftwareServices/WebDevlopment";
import Stories from "../../Component/Stories/Stories";
import AllPForm from "../../Component/AllpageForm/AllPForm";
import FlotLogoSec from "../../Component/SoftwareServices/FlotLogoSec";
const SoftwareService = () => {
  return (
    <div>
      <SoftwareHero />
      <ServicesSec />
      <WebDevlopment />
      <Stories />
      <FlotLogoSec />
      <AllPForm />
    </div>
  );
};

export default SoftwareService;
