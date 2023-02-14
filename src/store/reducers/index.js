import { combineReducers } from "redux";
import pageContainer from "./pageContainer";
import dataLoker from "./dataLoker";
import dataPenggunaReducer from "./dataPenggunaReducer";
import { dataGrupReducers } from "./dataGruopReducers";

export default combineReducers({
  pageContainer: pageContainer,
  dataLoker: dataLoker,
  dataPengguna: dataPenggunaReducer,
  dataGrup: dataGrupReducers,
});
