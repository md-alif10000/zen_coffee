import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "../utils/backend_api";
import { backend_api } from "../utils/backend_api";

// Add to Cart
export const addItemsToCart = (product, quantity) => async (dispatch, getState) => {
  // const { data } = await axios.get(`${backend_api}/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    // payload: {
    //   product: data.product._id,
    //   name: data.product.name,
    //   price: data.product.price,
    //   image: data.product.images[0].url,
    //   stock: data.product.Stock,
    //   quantity,
    // },
    payload: {
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.Stock,
      color:product.color,
      size:product.size,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
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
