import {
  SET_LOADING,
  SET_MESSAGE,
  SET_IS_LOGIN,
} from "../actions/pageContainer";

const initialState = {
  isLoading: 0,
  message: "",
  isLogin: false,
};

const pageContainer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
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
