import {
  SET_DASHBOARD_DATA_PROYEK,
  SET_ALL_DATA_PROYEK,
  SET_DETAIL,
  SET_ACTIVE_STEP,
} from "../actions/dataProyek";

const initialState = {
  activeStep: "page",
  dashboardProyek: [],
  allData: [],
  detailProyek: [],
};

export const dataProyek = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
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
