import React from "react";
import Header from "../../../components/Header/Header";
import ProductCard from "./ProductCard";
import "./Shop.css";
const Shop = () => {
  return (
    <>
      <Header />
      <div className="shop">
        <div className="banner"></div>

        <div className="container">
          <h2></h2>
          <div className="products">

              {[1,2,3,4,5,6,7,8,9,10].map((item,index)=><ProductCard key={index} />)}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
