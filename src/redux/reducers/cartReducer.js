import {
  ADD_TO_CART,
  DECREASE_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find((i) => i._id === item._id);

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i._id === isItemExist._id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i._id !== action.payload),
      };
    case DECREASE_CART:
      const _item = state.cartItems.find((i) => i._id === action.payload);
      if (_item.quantity == 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => i._id !== action.payload),
        };
      }

      const items = state.cartItems.filter((i) => i._id !== action.payload);
      return {
        ...state,

        cartItems: [...items, { ..._item, quantity: _item.quantity - 1 }],
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};
