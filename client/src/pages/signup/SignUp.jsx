import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../utils/🦆 icon _google_.png";
import signupbg from "../../utils/signupbg.png";
import line13 from "../../utils/Line 13.svg";
import line16 from "../../utils/Line 16.svg";
import logo from "../../utils/bhlogo.png";
import { ApiContext } from "../../context/AxiosContext.jsx";

const SignUp = () => {
  const api = useContext(ApiContext);
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  localStorage.setItem("firstName", null);
  localStorage.setItem("lastName", null);

  const handleSubmit = async () => {
    try {
      e.preventDefault();
      await api.post("/sign-up", signUpData);
      localStorage.setItem("firstName", signUpData.firstname);
      localStorage.setItem("lastName", signUpData.lastname);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center align-content-center">
      <div className="login-content d-flex align-items-center flex-column">
        <form
          onSubmit={() => {
            handleSubmit();
            navigate("/sign-in");
          }}
          action=""
          className="signup-form mx-sm-5 my-3 pe-sm-4 text-start d-flex flex-column gap-2"
        >
          <h3 className=" fw-bold fs-3 pe-3 mb-0">
            Join our community of home seekers and explore the possibilities
            that await.
          </h3>
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
                autoComplete={signUpData.firstname}
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
                autoComplete={signUpData.lastname}
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
            autoComplete={signUpData.email}
          />
          <label htmlFor="">Password</label>
          <input
            className="px-4 py-2 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
            type="password"
            name="password"
            autoComplete={signUpData.password}
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
            autoComplete={signUpData.confirmPassword}
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
        <button
          type="submit"
          className="google d-flex justify-content-center align-items-center gap-3 rounded-4 py-sm-3 py-2  border-2 border-black border-opacity-75 w-75 fs-5 mb-4"
        >
          <img src={googleImg} alt="" />
          <p
            className="mb-0"
            style={{
              textWrap: "nowrap",
              fontFamily: "Outfit",
              fontSize: "22px",
            }}
          >
            Continue with Google
          </p>
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
