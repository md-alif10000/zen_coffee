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
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Slide, Fade } from "react-reveal";
import "./Cart.css";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { frequency } = useSelector((state) => state.frequency);
  const navigate = useNavigate();

  const [purchaseType, setpurchaseType] = useState("");
  const [orderFrequency, setorderFrequency] = useState(null);

  const clickHandler = () => {
    const data = { type: purchaseType };
    if (purchaseType == "") {
      return toast.warn("Please select order type.");
    }
    if (purchaseType == "subscription") {
      if (!orderFrequency) {
        return toast.warn("Please Select frequency");
      }
      data.freequency = orderFrequency;
    }

    localStorage.setItem("orderType", JSON.stringify(data));

    return navigate("/checkout");
  };

  return (
    <Layout footer={true}>
      <div className="cart">
        <div className="container">
          {cartItems.length == 0 && (
            <div className="emptyCart">
              <Typography variant="h4" fontWeight={"bold"}>
                No Coffes Found
              </Typography>
              <Link to="/shop">
                <Button style={{ margin: "20px" }} variant="contained">
                  Visit Shop
                </Button>
              </Link>
            </div>
          )}
          {cartItems.length > 0 && (
            <Fade left cascade>
              <div className="cartItems">
                {cartItems.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
            </Fade>
          )}

          {cartItems.length > 0 && (
            <div className="subTotal">
              <Paper elevation={2} className="subtotalContent">
                <Stack spacing={2}>
                  <FormControl size="small">
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      onChange={(e) => setpurchaseType(e.target.value)}
                    >
                      <FormControlLabel
                        value="one_time"
                        control={<Radio />}
                        label="one time purchase"
                      />
                      <Stack direction="row" spacing={3}>
                        <FormControlLabel
                          value="subscription"
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
                            value={orderFrequency?.name}
                            label="Age"
                            onChange={(e) => setorderFrequency(e.target.value)}
                          >
                            {frequency?.map((fr, index) => (
                              <MenuItem key={index} value={fr._id}>
                                {fr.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                  <Button
                    fullWidth
                    // href="/checkout"
                    disabled={purchaseType == ""}
                    variant="contained"
                    color="primary"
                    onClick={clickHandler}
                  >
                    Checkout
                  </Button>
                </Stack>
              </Paper>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
