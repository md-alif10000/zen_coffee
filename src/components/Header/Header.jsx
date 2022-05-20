import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link to={"/"} >

            <img src="./images/logo.svg" alt="" />
            </Link>
         
          </div>
        </div>
        <div className="center">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/">About</Link>

          <Link to="/">Contact</Link>
          <Link to="/">Wholesale</Link>
        </div>
        <div className="right">
          <Link to="/" >
            <span className="button primary mx-5">Sign in</span>
          </Link>

          <Link to="/" >
            <span className="button primary mx-5">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
