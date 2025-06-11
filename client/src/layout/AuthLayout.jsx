import React from "react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Link to="/">
        <img src="../utils/bhlogo.png" alt="" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
