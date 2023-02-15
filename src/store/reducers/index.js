import { combineReducers } from "redux";

import pageContainer from "./pageContainer";
import dataLoker from "./dataLoker";
import dataPengguna from "./dataPengguna";
import dataGroup from "./dataGroup";
import { dataProyek } from "./dataProyek";

export default combineReducers({
  pageContainer: pageContainer,
  dataLoker: dataLoker,
  dataPengguna: dataPengguna,
  dataGroup: dataGroup,
  dataProyek: dataProyek,
});
