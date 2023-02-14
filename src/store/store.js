import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// initial states here
// const initialState = {
//   userLogin: userInfoFromLocalStorage,
// };

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  // initialState,
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = makeStore;
