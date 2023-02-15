import { combineReducers } from "redux";
import pageContainer from "./pageContainer";
import dataLoker from "./dataLoker";
import dataPengguna from "./dataPengguna";
import { dataGrupReducers } from "./dataGruopReducers";
import { dataProyek } from "./dataProyek";

export default combineReducers({
  pageContainer: pageContainer,
  dataLoker: dataLoker,
  dataPengguna: dataPengguna,
  dataGrup: dataGrupReducers,
  dataProyek: dataProyek,
});
