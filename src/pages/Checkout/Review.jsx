import { Card, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CartItem from "../Cart/CartItem";
import { Fade } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";

const Review = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const vatParcent = 14;
  const vat = subtotal * vatParcent * 0.01;
  const shippingCharge = subtotal > 650 ? 0 : 30;
  const totalPrice = subtotal + vat + shippingCharge;

  const styles = {
    padding: "10px",
  };

  const Card = ({ item }) => {
    return (
      <Grid xl={12} sm={12} xs={12} md={12}>
        <Paper style={styles} elevation={0}>
          <Stack direction={"row"} justifyContent="space-between">
            <Stack>
              <Typography variant="h6"> {item.name} </Typography>
              <Typography variant="subtitle1" fontSize={"13px"}>
                QTY {item.quantity}{" "}
              </Typography>
            </Stack>
            <Typography variant="h6" fontWeight={"500"}>
              {item.quantity * item.price}{" "}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    );
  };

  return (
    <Fade cascade right>
      <div>
        <Grid container spacing={1} marginBottom="10px">
          {cartItems.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Grid>
        <Divider />
        <Divider />

        <Stack
          direction={"row"}
          justifyContent="space-between"
          style={{ padding: "5px" }}
        >
          <Typography variant="h6">Sub Total</Typography>
          <Typography variant="h6">{subtotal}</Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="space-between"
          style={{ padding: "5px" }}
        >
          <Typography variant="h6">Vat ({vatParcent}%)</Typography>
          <Typography variant="h6">{vat}</Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="space-between"
          style={{ padding: "5px" }}
        >
          <Typography variant="h6">Shipping Charge</Typography>
          <Typography variant="h6">{shippingCharge}</Typography>
        </Stack>
        <Divider />
        <Divider />

        <Stack
          direction={"row"}
          justifyContent="space-between"
          style={{ padding: "5px" }}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Grand Total
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            <strong>E£-</strong> {totalPrice}
          </Typography>
        </Stack>
      </div>
    </Fade>
  );
};

export default Review;
