import React, { useContext } from "react";
import { AppContext } from "../../context/StateContext";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { BsTrash3Fill } from "react-icons/bs";
import { GrShop } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";

import { toast } from "react-toastify";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const { cartItems, onRemove, numToString } = useContext(AppContext);
  const priceCalculator = () => {
    cartItems.map((each) => {
      setSubTotal((prevTotal) => (prevTotal += Number(each.priceNo) / 2));
    });
  };

  const priceOnDelete = (cartItem) => {
    setSubTotal((prevTotal) => (prevTotal -= Number(cartItem.priceNo)));
  };

  useEffect(() => priceCalculator(), []);

  return (
    <div className="cart-page px-sm-5 px-4 my-5 pt-sm-5">
      {cartItems.length >= 1 ? (
        <div>
          <div className="cart gap-4 pt-5 mb-3">
            {cartItems.map((cartItem, i) => (
              <div
                key={i}
                className="cart-card position-relative border border-5 border-success  rounded-4 overflow-hidden d-flex gap-3 align-items-center w-100 ps-sm-3"
              >
                <img src={cartItem.image} width="270px" height="270px" alt="" />
                <button
                  className="trash position-absolute bg-dark-subtle border-0 rounded-circle overflow-visible"
                  onClick={() => {
                    onRemove(cartItem);
                    alert(
                      confirm("Click OK button to delete property from cart.")
                    );
                    priceOnDelete(cartItem);
                    toast.success("Successfully removed property from cart.");
                  }}
                >
                  <BsTrash3Fill className="" />
                </button>
                <div className="text-align-start">
                  <span className=" d-flex gap-0 align-items-start flex-column">
                    <label className=" fs-6 mb-0">Property Name: </label>
                    <h5 className=" fw-semibold mb-2">{cartItem.title}</h5>
                  </span>
                  <span className=" d-flex gap-2">
                    <label className=" fs-6">Price: </label>
                    <h5 className=" fw-semibold mb-0">{cartItem.price}</h5>
                  </span>
                  <span className=" d-flex gap-1">
                    <label className=" fs-6">Location: </label>
                    <h5 className=" fw-semibold mb-0">{cartItem.location}</h5>
                  </span>
                  <span className=" d-flex gap-2">
                    <label className=" fs-6">Number of Bedrooms: </label>
                    <h5 className=" fw-semibold  mb-0">{cartItem.bed}</h5>
                  </span>

                  <span className=" d-flex gap-2">
                    <label className=" fs-6">Number of Bathrooms: </label>
                    <h5 className=" fw-semibold mb-4">{cartItem.bath}</h5>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2 m-auto w-100">
            <label className=" fs-5 fw-bold">Subtotal: </label>
            <h5 className=" fw-semibold mb-0">₦{numToString(subTotal)}</h5>
          </div>
          <Link to="/checkout">
            <button
              className="make py-1 px-4 bg-success text-white mt-3 fs-5 fw-bold rounded-3 border-0"
              style={{ textWrap: "nowrap" }}
            >
              Make Purchase Of All.
            </button>
          </Link>
        </div>
      ) : (
        <div className="empty fw-semibold mt-5 ">
          <div>
            <GrShop className="fs-1" />
            <p className="fs-1 mb-0">Cart is Currently Empty {" : ("}</p>
          </div>
          <Link to="/">
            <button className="continue-btn px-4 py-1 text-white rounded-3 fw-medium fs-6 border-0">
              Continue Browsing Properties.
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
