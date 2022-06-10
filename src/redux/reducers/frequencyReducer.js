import {
  frequencyConstants,
  GET_CATEGORY_REQUEST,
} from "../constants/conatants";

const initState = {
  frequency: [],
  loading: false,
};
export const frequencyReducer = (state = initState, action) => {
  switch (action.type) {
    case frequencyConstants.GET_FREQUENCY_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        frequency: action.payload,
      });

    default:
      return state;
  }
};
