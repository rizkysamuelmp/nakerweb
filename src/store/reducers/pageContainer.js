import { SET_LOADING } from "../actions/pageContainer";

const initialState = {
  isLoading: false,
};

const pageContainer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default pageContainer;
