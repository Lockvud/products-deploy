import React from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <div className="navbar">
      <b className="logo">
      CouirerApp
      </b>

      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default NavBar;
