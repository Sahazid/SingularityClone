import React, { useEffect, useState } from "react";
import XperienceHero from "../../Component/Xperience/XperienceHero";
import XperienceServices from "../../Component/Xperience/XperienceServices";
import CircularAnimation from "../../Component/Common/CircularAnimation";
import XperienceWork from "../../Component/Xperience/XperienceWork";
import Stories from "../../Component/Stories/Stories";
import AllPForm from "../../Component/AllpageForm/AllPForm";
import { ClipLoader } from "react-spinners";

const Xperience = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const response = async () => {
    const data = await fetch("/json/xperience.json")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    return data;
  };

  useEffect(() => {
    setTimeout(() => {
      response();
    }, 3000);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <ClipLoader
          color="#06b6d4"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }

  return (
    <div>
      <XperienceHero data={data?.hero} />
      <XperienceServices services={data?.services} />
      <CircularAnimation />
      <XperienceWork Xperiences={data?.Xperiences} />
      <Stories />
      <AllPForm />
    </div>
  );
};

export default Xperience;
