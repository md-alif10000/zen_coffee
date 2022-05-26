import { Grid } from "@mui/material";
import React from "react";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import ProductCard from "./ProductCard";
import "./Shop.css";
const Shop = () => {
  return (
    <>
     <Layout footer={true}>
      <div className="shop">
        <div className="banner"></div>

        <div className="container">
          <h2>Choose yourself</h2>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <Grid item xs={12} lg={4} md={2} key={index}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Shop;
