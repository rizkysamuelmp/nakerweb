import { combineReducers } from "redux";
import pageContainer from "./pageContainer";
import dataLoker from "./dataLoker";
import dataPenggunaReducer from "./dataPenggunaReducer";

export default combineReducers({
  pageContainer: pageContainer,
  dataLoker: dataLoker,
  dataPengguna: dataPenggunaReducer,
});
