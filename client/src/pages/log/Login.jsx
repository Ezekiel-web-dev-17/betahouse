import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupbg from "../../utils/signupbg.png";
import line13 from "../../utils/Line 13.svg";
import line16 from "../../utils/Line 16.svg";
import logo from "../../utils/bhlogo.png";
import "./Login.css";
import { ApiContext } from "../../context/AxiosContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const api = useContext(ApiContext);
  const navigate = useNavigate();
  const [logInData, setLoginInData] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    try {
      e.preventDefault();
      const res = await api.post("/sign-in", logInData);
      const { user } = res.data;
      const { firstname, lastname } = user;
      localStorage.clear;
      localStorage.setItem("firstName", firstname);
      localStorage.setItem("lastName", lastname);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setLoginInData({ ...logInData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center align-content-center">
      <div className="login-content d-flex  flex-column align-items-center">
        <form
          action=""
          onSubmit={() => {
            handleSubmit();
            navigate("/");
          }}
          className="signup-form mx-sm-5 my-3 pe-sm-4 text-start d-flex flex-column gap-2"
        >
          <h3 className=" fw-bold fs-3 pe-3 mb-0">
            Welcome Back to BetaHouse!
          </h3>
          <p className="mb-4 fw-medium text-black-75 ">
            Lets get started by filling out the information below
          </p>
          <label htmlFor="">Email</label>
          <input
            className="px-sm-4 py-sm-3 py-2 px-3 fs-6 rounded-3 border-3 border-black border-opacity-25 mb-3"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            autoComplete={logInData.email}
            onChange={handleChange}
            value={logInData.email}
          />
          <label htmlFor="">Password</label>
          <input
            className="px-sm-4 py-sm-3 py-2 px-3 fs-6 rounded-3 border-3 border-black border-opacity-25  mb-3"
            type="password"
            name="password"
            autoComplete="new-password"
            required
            value={logInData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />

          <div className="remember-forgot d-flex justify-content-between align-items-center">
            <div className="checkbox d-flex gap-3 mb-4">
              <input type="checkbox" />
              <p className="mb-0">Remember Me</p>
            </div>
            <div className="checkbox d-flex gap-3 mb-4">
              <Link className=" text-decoration-none text-danger" to="/sign-up">
                <p className="mb-0 text-danger fw-semibold">Forgot Password</p>
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className=" rounded-4 py-sm-3 py-2 border-0 text-white fs-5"
            style={{ backgroundColor: "#3d9970" }}
          >
            Sign in
          </button>
        </form>

        <div className="or d-flex align-items-center justify-content-center gap-3 mb-3">
          <img src={line13} alt="" />
          <p className="mb-0">or</p>
          <img src={line16} alt="" />
        </div>

        <GoogleLogin
          text="signin_with"
          onSuccess={(credentialResponse) => {
            console.log(jwtDecode(credentialResponse.credential));
            navigate("/");
          }}
          onError={() => alert("Login Failed")}
          auto_select={true}
        />

        <p className="new" style={{ placeSelf: "center", fontSize: "18px" }}>
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
          className="w-100 auth-img"
          alt=""
          style={{ marginBlockStart: "-30px", borderRadius: "15px" }}
        />
      </div>
    </div>
  );
};

export default Login;
