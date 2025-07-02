import React, { useContext } from "react";
import { AppContext } from "../../context/StateContext";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { BsTrash3Fill } from "react-icons/bs";

const CartPage = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <div className="px-5 my-5 pt-5">
      {cartItems.length > 0 ? (
        <div>
          <div className="cart gap-4 pt-5 mb-3">
            {cartItems.map((cartItem, i) => (
              <div
                key={i}
                className=" position-relative border border-5 border-success  rounded-3 overflow-hidden d-flex gap-3 align-items-center w-100 ps-3"
              >
                <img src={cartItem.image} width="270px" height="270px" alt="" />
                <BsTrash3Fill
                  className="trash position-absolute bg-dark-subtle p-1 fs-4 rounded-circle overflow-visible"
                  onClick={() =>
                    prompt(
                      "Are you sure you want to delete this property from the cart?"
                    )
                      .trim()
                      .toLowerCase() === "yes"
                      ? alert("left")
                      : alert("Available!!!")
                  }
                />
                <div className="text-align-start">
                  <span className=" d-flex gap-1 align-items-start flex-column">
                    <label className=" fs-6">Property Name: </label>
                    <h5 className=" fw-semibold mb-0 ps-3">{cartItem.title}</h5>
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
          <Link to="/checkout">
            <button
              className=" w-25 py-1 px-4 bg-success text-white mt-3 fs-5 fw-bold rounded-3 border-0"
              style={{ textWrap: "nowrap" }}
            >
              Make Purchase Of All.
            </button>
          </Link>
        </div>
      ) : (
        <p className="fs-2 fw-semibold">Cart is Currently Empty!! {" : ("}</p>
      )}
    </div>
  );
};

export default CartPage;
