import { Grid } from "@mui/material";
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
          <h2>Choose yourself</h2>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <Grid item xs={8} lg={4} key={index}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Shop;
