import { combineReducers } from "redux";
import pageContainer from "./pageContainer";
import dataLoker from "./dataLoker";

export default combineReducers({
  pageContainer: pageContainer,
  dataLoker: dataLoker,
});
