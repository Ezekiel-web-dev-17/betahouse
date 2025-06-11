import React from "react";
import "./Properties.css";
import Showcase from "../../components/showcase/Showcase";
import Footer from "../../components/footer/Footer";

const Properties = () => {
  return (
    <div className="pt-5">
      <h2 className="properties ">Our Properties</h2>
      <div className="d-flex flex-column gap-5">
        <Showcase />
        <Footer />
      </div>
    </div>
  );
};

export default Properties;
