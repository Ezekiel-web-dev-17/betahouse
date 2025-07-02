import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./cartIcon.css";
import { AppContext } from "../../context/StateContext.jsx";

const CartIcon = () => {
  const { itemQuantity } = useContext(AppContext);
  return (
    <Link to="/cart" className="text-decoration-none position-relative">
      <BsCart2 className=" text-white fs-3 mb-0 position-relative w-100" />
      <div className="items_no rounded-circle position-absolute text-white">
        {itemQuantity}
      </div>
    </Link>
  );
};

export default CartIcon;
