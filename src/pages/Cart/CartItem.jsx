import React from "react";
import "./Cart.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Button, ButtonGroup, Paper, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const CartItem = () => {
  return (
    <Paper elevation={2} className="cartItem">
      <h3 className="title">ZEN specialty coffee</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      <div>
        <span className="remove">remove</span>{" "}
        <ButtonGroup
          elevation={0}
          color="primary"
          variant="contained"
          aria-label="button group"
        >
          <Button elevation={0} color="secondary">
            <RemoveCircleOutlineIcon />
          </Button>

          <Button elevation={0}>6</Button>
          <Button elevation={0} color="secondary">
            <AddCircleOutlineIcon />
          </Button>
        </ButtonGroup>
      </div>
    </Paper>
  );
};

export default CartItem;
