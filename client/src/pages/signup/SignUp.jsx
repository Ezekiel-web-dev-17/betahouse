import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import googleImg from "../../utils/🦆 icon _google_.png";
import signupbg from "../../utils/signupbg.png";
import line13 from "../../utils/Line 13.svg";
import line16 from "../../utils/Line 16.svg";
import logo from "../../utils/bhlogo.png";

const SignUp = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form
        action=""
        className="signup-form mx-5 my-3 text-start bg-white d-flex flex-column gap-2"
      >
        <h3 className=" fw-bold fs-3 pe-3 mb-0">
          Join our community of home seekers and explore the possibilities that
          await.
        </h3>
        <p className="mb-3 fw-medium text-black-75">
          Lets get started by filling out the information below
        </p>
        <div className="d-flex justify-content-between align-items-center  mb-3">
          <div className="first d-flex flex-column align-items-start gap-2">
            <label htmlFor="">First Name</label>
            <input
              className="px-2 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25"
              type="text"
              required
              placeholder="Enter Name"
            />
          </div>
          <div className="last d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Last Name</label>
            <input
              className="px-2 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25"
              type="text"
              required
              placeholder="Enter Name"
            />
          </div>
        </div>
        <label htmlFor="">Email</label>
        <input
          className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25 mb-3"
          type="email"
          placeholder="Enter your Email"
          autoComplete="@gmail.com"
        />
        <label htmlFor="">Password</label>
        <input
          className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
          type="password"
          autoComplete="new-password"
          required
          placeholder="Enter your Password"
        />
        <label htmlFor="">Confirm password</label>
        <input
          className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
          type="password"
          autoComplete="new-password"
          required
          placeholder="Confirm your password"
        />

        <div className="checkbox d-flex gap-3 mb-4">
          <input type="checkbox" required />
          <p className="mb-0">
            I agree to{" "}
            <span style={{ color: "#3d9970" }}>Terms of Service</span> and
            <span style={{ color: "#3d9970" }}> Privacy Policies</span>
          </p>
        </div>

        <button
          type="submit"
          className=" rounded-4 py-3 border-0 text-white fs-5"
          style={{ backgroundColor: "#3d9970" }}
        >
          Sign up
        </button>
        <div className="or d-flex align-items-center justify-content-center gap-3 my-3">
          <img src={line13} alt="" />
          <p className="mb-0">or</p>
          <img src={line16} alt="" />
        </div>
        <button
          type="submit"
          className="d-flex justify-content-center align-items-center gap-3 rounded-4 py-3 bg-transparent border-2 border-black border-opacity-75 fs-5 mb-4"
        >
          <img src={googleImg} alt="" />
          <p className="mb-0">Continue with Google</p>
        </button>

        <p style={{ color: "#716F6F", placeSelf: "center", fontSize: "18px" }}>
          Already have an account?{" "}
          {
            <Link
              style={{ color: "#3d9970", textDecorationLine: "none" }}
              to="/sign-in"
            >
              Sign in
            </Link>
          }
        </p>
      </form>

      <div className="signbg position-relative">
        <Link to="/">
          <img
            className=" position-absolute"
            style={{ top: "50px", left: "100px" }}
            src={logo}
            alt=""
          />
        </Link>
        <img
          src={signupbg}
          alt=""
          style={{ marginBlockStart: "-30px", borderRadius: "15px" }}
        />
      </div>
    </div>
  );
};

export default SignUp;
