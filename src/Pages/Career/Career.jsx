import React from "react";
import CareerHero from "../../Component/CareerComponent/CareerHero";
import AllPForm from "../../Component/AllpageForm/AllPForm";
import CareerIntro from "../../Component/CareerComponent/CareerIntro";
import CareerPrograms from "../../Component/CareerComponent/CareerPrograms";

const Career = () => {
  return (
    <div>
      <CareerHero />
      <CareerIntro />
      <CareerPrograms />
      <AllPForm />
    </div>
  );
};

export default Career;
