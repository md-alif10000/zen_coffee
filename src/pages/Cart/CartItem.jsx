import React from "react";
import "./Cart.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Button, ButtonGroup, Paper, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Zoom } from "react-reveal";
const CartItem = () => {
  return (
    <Zoom>
      <Paper elevation={2} className="cartItem">
        <h3 className="title">ZEN specialty coffee</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <div>
          <Button size="small" className="remove" style={{ color: "red" }}>
            remove
          </Button>
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
    </Zoom>
  );
};

export default CartItem;
