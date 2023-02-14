import { combineReducers } from "redux";
import pageContainer from "./pageContainer";
import dataLoker from "./dataLoker";
import dataPengguna from "./dataPengguna";

export default combineReducers({
  pageContainer: pageContainer,
  dataLoker: dataLoker,
  dataPengguna: dataPengguna,
});
