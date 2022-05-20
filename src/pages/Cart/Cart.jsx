import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Cart.css";

import CartItem from "./CartItem";
const Cart = () => {
  return (
    <Layout>
      <div className="cart">
        <div className="container">
          <div className="cartItems">
            {[0,1,2,3,4,5,6].map((item,index)=><CartItem key={index} />)}
          
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
