import {
  SET_ALL_GRUP,
  SET_DASHBOARD_GRUP,
  SET_REQUEST_DETAIL_GRUP,
} from "../constants/dataGrupConstatns";

const initialState = {
  dashboardGrup: {},
  allGrup: [],
};

export const dataGrupReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_GRUP:
      return {
        ...state,
        dashboardGrup: action.payload,
      };
    case SET_ALL_GRUP:
      return {
        ...state,
        allGrup: action.payload,
      };
    case SET_REQUEST_DETAIL_GRUP:
      return {
        ...state,
        detailGrup: action.payload,
      };
    default:
      return state;
  }
};
