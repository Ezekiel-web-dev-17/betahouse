import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import signupbg from "../../utils/signupbg.png";
import line13 from "../../utils/Line 13.svg";
import line16 from "../../utils/Line 16.svg";
import logo from "../../utils/bhlogo.png";
// import { ApiContext } from "../../context/AxiosContext.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Importing uuid for generating random passwords

const SignUp = () => {
  // const api = useContext(ApiContext);
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      await axios.post(
        "https://betahousebackend2.onrender.com/api/v1/auth/sign-up",
        signUpData
      );
      console.log("Sign-up successful.");
      navigate("/sign-in");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
      console.error("Error during sign-up:", error?.response?.data || error);
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center align-content-center">
      <div className="login-content d-flex align-items-center flex-column">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setError("");
            if (signUpData.password !== signUpData.confirmPassword) {
              setError("Passwords do not match.");
              return;
            }
            handleSubmit();
          }}
          action=""
          className="signup-form mx-sm-5 my-3 pe-sm-4 text-start d-flex flex-column gap-2"
        >
          <h3 className=" fw-bold fs-3 pe-3 mb-0">
            Join our community of home seekers and explore the possibilities
            that await.
          </h3>
          <p className=" text-danger fs-5">{error}</p>
          <p className="mb-3 fw-medium text-black-75">
            Lets get started by filling out the information below
          </p>
          <div className="d-flex flex-sm-row flex-column justify-content-between align-items-sm-start align-items-sm-center  mb-3">
            <div className="first d-flex flex-column align-items-start gap-2">
              <label htmlFor="">First Name</label>
              <input
                className="px-sm-4 py-sm-3 py-2 px-3 fs-6 rounded-3 border-3 border-black border-opacity-25 mb-sm-0 mb-3"
                type="text"
                name="firstname"
                required
                placeholder="Enter Name"
                value={signUpData.firstname}
                autoComplete="firstname"
                onChange={handleChange}
              />
            </div>
            <div className="last d-flex flex-column align-items-start gap-2">
              <label htmlFor="">Last Name</label>
              <input
                className="px-sm-4 py-sm-3 py-2 px-3 fs-6 rounded-3 border-3 border-black border-opacity-25"
                type="text"
                name="lastname"
                required
                placeholder="Enter Name"
                value={signUpData.lastname}
                autoComplete="lastname"
                onChange={handleChange}
              />
            </div>
          </div>
          <label htmlFor="">Email</label>
          <input
            className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25 mb-3"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={signUpData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <label htmlFor="">Password</label>
          <input
            className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
            type="password"
            name="password"
            autoComplete="password"
            required
            placeholder="Enter your Password"
            value={signUpData.password}
            onChange={handleChange}
          />
          <label htmlFor="">Confirm password</label>
          <input
            className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
            type="password"
            name="confirmPassword"
            autoComplete="confirmPassword"
            onChange={handleChange}
            value={signUpData.confirmPassword}
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
        </form>

        <div className="or d-flex align-items-center justify-content-center gap-3 mb-3">
          <img src={line13} alt="" />
          <p className="mb-0 text-black">or</p>
          <img src={line16} alt="" />
        </div>
        <GoogleLogin
          text="signup_with"
          onSuccess={async (credentialResponse) => {
            const userInfo = jwtDecode(credentialResponse.credential);
            const data = {
              firstname: userInfo.given_name,
              lastname: userInfo.family_name,
              email: userInfo.email,
              password: uuidv4(),
            };
            try {
              const res = await axios.post(
                "https://betahousebackend2.onrender.com/api/v1/auth/sign-up",
                data
              );

              console.log(res.data.data.user);

              const { firstname, lastname, email } = res.data.data.user;
              localStorage.clear();
              localStorage.setItem("firstName", firstname);
              localStorage.setItem("lastName", lastname);
              localStorage.setItem("userEmail", email);
              navigate("/");
            } catch (error) {
              if (error.response?.status === 409) {
                setError("User already exists. Please sign in.");
                navigate("/sign-in");
                return;
              }
              setError(
                error.response?.data?.message ||
                  "Something went wrong. Please try again later."
              );
              console.error(
                "Error during sign-up:",
                error?.response?.data || error
              );
            }
          }}
          onError={(e) =>
            setError(
              e?.response?.data?.error || "Login failed. Please try again."
            )
          }
          auto_select={true}
        />

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
      </div>

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
