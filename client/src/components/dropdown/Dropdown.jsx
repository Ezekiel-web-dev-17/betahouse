import React from "react";
import icon from "../../utils/Icon (1).svg";
import "./Dropdown.css";

const Dropdown = ({ from, shows, showSort, setShowSort, to }) => {
  return (
    <div className=" d-flex justify-content-between">
      <span className="d-flex">
        <img width="25px" height="25px" src={icon} alt="" />
        <h5 className="ps-2">More Filter</h5>
        <h5 className="ps-4">
          Showing {from} - {to} of 15 results
        </h5>
      </span>
      <span className="d-flex gap-2 align-items-center ">
        <p className="mb-0 fs-5 text-black-50 fw-medium">Sort by:</p>

        <select
          name="sort-options"
          className=" border-0 fw-medium fs-5 ps-2 pe-3 py-1 rounded-3"
          onChange={(e) => {
            const value = e.target.value;
            let sorted = [...showSort]; // clone it first!

            if (value === "Alphabetical") {
              sorted.sort((a, b) => a.title.localeCompare(b.title));
            } else if (value === "Price: High to Low") {
              sorted.sort((a, b) => Number(b.priceNo) - Number(a.priceNo));
            } else if (value === "Price: Low to High") {
              sorted.sort((a, b) => Number(a.priceNo) - Number(b.priceNo));
            } else if (value === "Default") {
              sorted = shows; // this may need to be passed from parent too
            }

            setShowSort(sorted);
          }}
        >
          <option value="Default">Default</option>
          <option value="Alphabetical">Alphabetical</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </span>
    </div>
  );
};

export default Dropdown;
