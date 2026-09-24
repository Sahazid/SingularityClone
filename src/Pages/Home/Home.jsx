import React from "react";
import Hero from "../../Component/Hero/Hero";
import Who from "../../Component/Who/Who";
import Details from "../../Component/Details/Details";
import ClientDetails from "../../Component/ClientDetails/ClientDetails";
import Work from "../../Component/Work/Work";
import Stories from "../../Component/Stories/Stories";
import Achivement from "../../Component/Achivement/Achivement";
import Form from "../../Component/Form/Form";

const Home = () => {
  return (
    <div>
      <Hero />
      <Who />
      <Details />
      <ClientDetails />
      <Work />
      <Stories />
      <Achivement />
      <Form />
    </div>
  );
};

export default Home;
