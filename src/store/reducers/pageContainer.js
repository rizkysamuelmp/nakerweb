import { SET_LOADING } from "../actions/pageContainer";

const initialState = {
  isLoading: 0,
};

const pageContainer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload ? state.isLoading + 1 : state.isLoading - 1,
      };
    default:
      return state;
  }
};

export default pageContainer;
