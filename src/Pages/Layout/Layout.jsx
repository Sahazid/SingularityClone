import React from "react";
import Header from "../../Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Form from "../../Component/Form/Form";

const Layout = () => {
  return (
    <div className="bg-[#F7FBFF] flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
