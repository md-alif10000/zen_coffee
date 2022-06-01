import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  MenuItem,
  Select,
  Button,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { Slide, Fade } from "react-reveal";
import "./Cart.css";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Layout footer={true}>
      <div className="cart">
        <div className="container">
          {cartItems.length ==0 &&  <div className="emptyCart">
            <Typography variant="h4" fontWeight={"bold"} >No Coffes Found</Typography>
          <Button href="/shop"  style={{margin:"20px"}} variant="contained">Visit Shop</Button>
          </div> }
          {cartItems.length > 0 &&   <Fade left cascade>
            <div className="cartItems">
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
          </Fade>}

          {cartItems.length > 0 && <div className="subTotal">
            <Paper elevation={2} className="subtotalContent">
              <Stack spacing={2}>
                <FormControl size="small">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="one_time"
                      control={<Radio />}
                      label="one time purchase"
                    />
                    <Stack direction="row" spacing={3}>
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Subscription"
                      />

                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">
                          Frequency
                        </InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <Button href="/checkout" variant="contained" color="primary">
                  {" "}
                  Checkout{" "}
                </Button>
              </Stack>
            </Paper>
          </div>}
        
          
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
