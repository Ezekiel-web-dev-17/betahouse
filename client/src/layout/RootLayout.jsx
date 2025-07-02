import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import StateContext from "../context/StateContext";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <StateContext>
        <NavBar />
        <Outlet />
        <Footer />
      </StateContext>
    </div>
  );
};

export default RootLayout;
