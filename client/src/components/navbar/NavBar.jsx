import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../utils/bhlogo.png";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import CartIcon from "../cart/CartIcon";

const NavBar = () => {
  const firstname = localStorage.getItem("firstName");
  const lastname = localStorage.getItem("lastName");

  return (
    <nav className="d-flex justify-content-between align-items-center py3 text-white-50 position-fixed top-0 w-100 ">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <ul className=" flex-row gap-4 align-items-center d-flex mb-0">
        <li className=" text-decoration-none list-unstyled text-white">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-decoration-none list-unstyled text-white">
          <Link to="/properties">Properties</Link>
        </li>
        <li className=" text-decoration-none list-unstyled text-white">
          <Link to="/about">About Us</Link>
        </li>
        <li className=" text-decoration-none list-unstyled text-white">
          <Link to="/blog">Blog</Link>
        </li>
        <li className=" text-decoration-none list-unstyled text-white">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="d-flex gap-4 align-items-center">
        {firstname && lastname !== null ? (
          <>
            <div className="d-flex gap-4 align-items-center">
              <BsPersonCircle className=" text-white fs-4" />
              <p className="mb-0 text-white">
                {firstname} {lastname}
              </p>

              <CartIcon />
            </div>
          </>
        ) : (
          <>
            <Link to="/sign-up">
              <button className="sign-up px-4 py-2 rounded-2 border-1 border-white text-white bg-transparent">
                Sign up
              </button>
            </Link>
            <Link to="/sign-in">
              <button className="login-btn border-0 px-4 py-2 rounded-2 text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
