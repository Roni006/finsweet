import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";
import { Outlet } from "react-router";
// import Navber from "../components/Common/Footer/";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
