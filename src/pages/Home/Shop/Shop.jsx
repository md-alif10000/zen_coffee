import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import ProductCard from "./ProductCard";
import "./Shop.css";
import { getProduct } from "../../../redux/actions/productAction";
const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  

  console.log(products);

  return (
    <>
      <Layout footer={true}>
        <div className="shop">
          <div className="banner"></div>

          <div className="container">
            <h2>Choose yourself</h2>
            <Grid container spacing={2}>
              {products?.map((item, index) => (
                <Grid item xs={12} lg={4} md={2} key={index}>
                  <ProductCard item={item} />
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
