import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

import { runFireworks } from "./fireWorks";
import "./ordersuccess.css";

const Success = () => {
  useEffect(() => {
    localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
   <Layout>
     <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link to="/shop">
          <Button type="button" width="300px" variant="contained" >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
   </Layout>
  );
};

export default Success;
