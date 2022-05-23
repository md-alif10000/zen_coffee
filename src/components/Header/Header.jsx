import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Button, Stack } from "@mui/material";

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
          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
          <Link to="/">Wholesale</Link>
        </div>
        <div className="right">
        <Link to={"/cart"} className="cartIcon" >
          <AiOutlineShoppingCart className="icon" />
          </Link>
         
          <Stack spacing={2}  direction="row" >

         

          <Button href="/login" variant="contained" >Login</Button>
          <Button href="/sign-up" variant="contained">Sign UP</Button>

          </Stack>
         

   
        </div>
      </div>
    </div>
  );
};

export default Header;
