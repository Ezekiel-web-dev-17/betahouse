import React from "react";
import { Link } from "react-router-dom";
import googleImg from "../../utils/🦆 icon _google_.png";
import signupbg from "../../utils/signupbg.png";
import line13 from "../../utils/Line 13.svg";
import line16 from "../../utils/Line 16.svg";
import logo from "../../utils/bhlogo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form
        action=""
        className="signup-form mx-5 my-3 pe-4 text-start bg-white d-flex flex-column gap-2"
      >
        <h3 className=" fw-bold fs-3 pe-3 mb-0">Welcome Back to BetaHouse!</h3>
        <p className="mb-4 fw-medium text-black-75 ">
          Lets get started by filling out the information below
        </p>
        <label htmlFor="">Email</label>
        <input
          className="px-4 py-3 fs-6 rounded-3 border-3 border-black border-opacity-25 mb-3"
          type="email"
          placeholder="Enter your Email"
          autoComplete="@gmail.com"
          required
        />
        <label htmlFor="">Password</label>
        <input
          className="px-4 py-3 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
          type="password"
          autoComplete="new-password"
          required
          placeholder="Enter your Password"
        />

        <div className="remember-forgot d-flex justify-content-between align-items-center">
          <div className="checkbox d-flex gap-3 mb-4">
            <input type="checkbox" required />
            <p className="mb-0">Remember Me</p>
          </div>
          <div className="checkbox d-flex gap-3 mb-4">
            <Link className=" text-decoration-none text-danger" to="/sign-up">
              <p className="mb-0">Forgot Password</p>
            </Link>
          </div>
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
          <p
            className="mb-0"
            style={{
              fontFamily: "Outfit",
              fontSize: "22px",
              lineHeight: "100%",
            }}
          >
            Continue with Google
          </p>
        </button>

        <p style={{ color: "#716F6F", placeSelf: "center", fontSize: "18px" }}>
          New User?{" "}
          {
            <Link
              style={{ color: "#3d9970", textDecorationLine: "none" }}
              to="/sign-up"
            >
              Sign Up
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

export default Login;
