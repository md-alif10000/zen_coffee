import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  DECREASE_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "../utils/backend_api";
import { backend_api } from "../utils/backend_api";

// Add to Cart
export const addItemsToCart = (product) => async (dispatch, getState) => {
  // const { data } = await axios.get(`${backend_api}/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  toast.success("Coffee added to cart");
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};



export const decreaseCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: DECREASE_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
