import React from "react";
import AboutHero from "../../Component/AboutComponent/AboutHero";
import Form from "../../Component/Form/Form";
import AllPForm from "../../Component/AllpageForm/AllPForm";
import Building from "../../Component/AboutComponent/Building";
import Values from "../../Component/AboutComponent/Values";
import CoresC from "../../Component/AboutComponent/CoresC";
import MileStones from "../../Component/AboutComponent/MileStones";
import Leaders from "../../Component/AboutComponent/Leaders";
import Concerns from "../../Component/AboutComponent/Concerns";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Building />
      <CoresC />

      <MileStones />
      <Leaders />
      <Concerns />
      <Values />
      <AllPForm />
    </div>
  );
};

export default About;
