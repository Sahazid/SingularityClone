import React from "react";
import AboutHero from "../../Component/AboutComponent/AboutHero";
import Form from "../../Component/Form/Form";
import AllPForm from "../../Component/AllpageForm/AllPForm";
import Building from "../../Component/AboutComponent/Building";
import Values from "../../Component/AboutComponent/Values";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Building />
      <Values />
      <AllPForm />
    </div>
  );
};

export default About;
