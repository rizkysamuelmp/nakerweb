import { SET_CITY } from "../constants/dataPenggunaConstants";

const initialState = {
  city: {},
};

const dataPenggunaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default dataPenggunaReducer;
