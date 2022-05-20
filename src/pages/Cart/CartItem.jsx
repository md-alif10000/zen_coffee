import React from "react";
import "./Cart.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
const CartItem = () => {
  return (
    <div className="cartItem">
      <h3 className="title">ZEN specialty coffee</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      <div>
        <span className="remove">remove</span>{" "}
        <div className="increase_decrease">
          <span>5 </span>{" "}
          <div>
            <BsChevronUp className="increase" />{" "}
            <BsChevronDown className="increase" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
