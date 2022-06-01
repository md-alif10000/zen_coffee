import React from "react";
import "./Cart.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Button, ButtonGroup, Paper, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Zoom } from "react-reveal";
import { useDispatch } from "react-redux";
import {
  decreaseCart,
  removeItemsFromCart,
} from "../../redux/actions/cartAction";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Zoom>
      <Paper elevation={2} className="cartItem">
        <h3 className="title">{item.name}</h3>
        <p>{item.shortDescription}</p>
        <div>
          <Button
            size="small"
            className="remove"
            style={{ color: "red" }}
            onClick={() => dispatch(removeItemsFromCart(item._id))}
          >
            remove
          </Button>
          <ButtonGroup
            elevation={0}
            color="primary"
            variant="contained"
            aria-label="button group"
          >
            <Button
              elevation={0}
              color="secondary"
              onClick={() => dispatch(decreaseCart(item._id))}
            >
              <RemoveCircleOutlineIcon />
            </Button>

            <Button elevation={0}>{item.quantity}</Button>
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
