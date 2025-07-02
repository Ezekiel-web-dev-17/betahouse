import React from "react";
import "./Properties.css";
import Showcase from "../../components/showcase/Showcase";

const Properties = () => {
  return (
    <div className="">
      <div
        className="w-100 mb-3"
        style={{ height: "120px", background: "#3d9970" }}
      ></div>
      <h2 className="properties ">Our Properties</h2>
      <div className="d-flex flex-column gap-5">
        <Showcase />
      </div>
    </div>
  );
};

export default Properties;
