import React from "react";
import logo from "../../utils/bhlogo.png";
import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill, BsFillGeoAltFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="" style={{ backgroundColor: "#035A33" }}>
      <div className="px-5 mx-5 py-5 d-flex gap-5 ">
        <div className="w-50 ms-3 d-flex flex-column g-4 text-white text-start mt-4">
          <img className="pb-4" src={logo} width="180px" alt="" />

          <p className="mb-4 me-5 pe-5">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>

          <div className="contact">
            <span className="d-flex align-items-center gap-2 location mb-3">
              <BsFillGeoAltFill />
              <p className="mb-0">95 Tinubu Estate, Lekki, Lagos</p>
            </span>
            <span className="d-flex align-items-center gap-2 mb-3">
              <BsTelephoneFill />
              <p className="mb-0">+234 675 8935 675</p>
            </span>
            <span className="d-flex align-items-center gap-2 mb-3">
              <GrMail />
              <p className="mb-0">support@rentbetahouse.com</p>
            </span>
          </div>
        </div>
        <div className=" mt-4 w-50 me-3 text-start d-flex justify-content-between ">
          <div className="">
            <h5 className=" fw-semi-bold text-white mb-4">Quick Links</h5>
            <ul className="ps-0 mb-0 d-flex flex-column gap-4">
              <Link className=" text-decoration-none text-white" to="/">
                <li style={{ fontSize: "14px" }} className="list-unstyled">
                  Home
                </li>
              </Link>
              <Link
                className=" text-decoration-none text-white"
                to="properties"
              >
                <li style={{ fontSize: "14px" }} className="list-unstyled">
                  Properties
                </li>
              </Link>
              <Link className=" text-decoration-none text-white" to="about">
                <li style={{ fontSize: "14px" }} className="list-unstyled">
                  About
                </li>
              </Link>
              <Link className=" text-decoration-none text-white" to="contact">
                <li style={{ fontSize: "14px" }} className="list-unstyled">
                  Contact us
                </li>
              </Link>
              <Link className=" text-decoration-none text-white" to="blog">
                <li style={{ fontSize: "14px" }} className="list-unstyled">
                  Blog
                </li>
              </Link>
            </ul>
          </div>
          <div className="more">
            <h5 className="mb-4 fw-semi-bold text-white">More</h5>
            <ul className="ps-0 mb-0 d-flex flex-column gap-4">
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                Agents
              </li>
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                Affordable Houses
              </li>
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                FAQ's
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="mb-4 fw-semi-bold text-white">Popular Search</h5>
            <ul className="ps-0 mb-0 d-flex flex-column gap-4">
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                Apartment for sale
              </li>
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                Apartment for rent
              </li>
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                3 bedroom flat
              </li>
              <li
                style={{ fontSize: "14px" }}
                className="list-unstyled  text-white"
              >
                Bungalow
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{ color: "#6F6F6F" }} />
      <div className="px-5 pt-2 py-4 text-white d-flex justify-content-between mx-5">
        <p className="ms-5">
          Copyright 2023 Betahouse | Designed by Michael.fig
        </p>
        <p className="me-5">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
