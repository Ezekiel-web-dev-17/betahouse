import "./NavBar.css";
import logo from "../../utils/bhlogo.png";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import CartIcon from "../cart/CartIcon";
import { useEffect } from "react";

const NavBar = () => {
  const firstname = localStorage.getItem("firstName");
  const lastname = localStorage.getItem("lastName");
  useEffect(() => {
    const close = document.querySelector("#close");
    const menu = document.querySelector(".menu");
    const main = document.querySelector(".nav-main");
    close.addEventListener("click", () => {
      close.classList.add("d-none");
      menu.classList.remove("d-none");
      main.classList.add("d-none");
    });
    menu.addEventListener("click", () => {
      menu.classList.add("d-none");
      main.classList.remove("d-none");
      close.classList.remove("d-none");
    });
    main.addEventListener("click", () => {
      menu.classList.remove("d-none");
      main.classList.add("d-none");
      close.classList.add("d-none");
    });
  });

  return (
    <nav className="d-flex justify-content-between align-items-center py-sm-3 py-1 text-white-50 position-fixed top-0 w-100 ">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className=" nav-main d-sm-flex gap-sm-5">
        <ul className="links-ul flex-sm-row align-items-center d-flex mb-0">
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

        <div className="cart-user d-flex gap-4 align-items-center">
          {firstname && lastname === null ? (
            <>
              <div className="d-flex gap-4 align-items-center">
                <BsPersonCircle className=" text-white fs-4" />
                <p className="mb-0 text-white me-sm-0 me-4">
                  {firstname} {lastname}
                </p>

                <CartIcon />
              </div>
            </>
          ) : (
            <>
              <Link to="/sign-up">
                <button className="sign-up px-sm-4 px-2 py-1 py-sm-2 rounded-2 border-1 border-white text-white bg-transparent">
                  Sign up
                </button>
              </Link>
              <Link to="/sign-in">
                <button className="login-btn border-0 px-sm-4 px-2 py-1 py-sm-2 rounded-2 text-white">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <AiOutlineCloseCircle
        id="close"
        className="closer1 close d-sm-none position-relative end-0 me-2 mb-0 text-white fs-1"
      />
      <AiOutlineMenu className="menu d-sm-none position-relative end-0 me-2 d-none mb-0 text-white fs-1" />
    </nav>
  );
};

export default NavBar;
