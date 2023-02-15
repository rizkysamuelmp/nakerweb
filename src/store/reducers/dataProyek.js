import {
  SET_DASHBOARD_DATA_PROYEK,
  SET_ALL_DATA_PROYEK,
  SET_DETAIL,
} from "../actions/dataPtoyek";

const initialState = {
  dashboardProyek: [],
  allData: [],
  detailProyek: [],
};

export const dataProyek = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA_PROYEK:
      return {
        ...state,
        dashboardProyek: action.payload,
      };
    case SET_ALL_DATA_PROYEK:
      return {
        ...state,
        allData: action.payload,
      };
    case SET_DETAIL:
      return {
        ...state,
        detailProyek: action.payload,
      };
    default:
      return state;
  }
};
