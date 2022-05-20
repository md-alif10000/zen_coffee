import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="logo">
            <img src="./images/logo.svg" alt="" />
          </div>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/"}>Wholesale</Link>
          </div>
          <div></div>
        </div>
        <div className="bottom">
          <p> Copyright&copy; <strong>ZEN SPECIALITY COFFEE</strong> 2022 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
