import {
  SET_DASHBOARD_GROUP,
  SET_ALL_GROUP,
  SET_REQUEST_DETAIL_GRUP,
  SET_ACTIVE_STEP,
  SET_DETAIL_GRUP,
  SET_HISTORY,
} from "../actions/dataGroup";

const initialState = {
  dashboardGroup: {},
  allGroup: [],
  activeStep: "page",
  detailGrup: [],
  requestDetail: [],
  setHistory: "",
};

const dataGroup = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case SET_DASHBOARD_GROUP:
      return {
        ...state,
        dashboardGroup: action.payload,
      };
    case SET_ALL_GROUP:
      return {
        ...state,
        allGroup: action.payload,
      };
    case SET_DETAIL_GRUP:
      return {
        ...state,
        detailGrup: action.payload,
      };
    case SET_REQUEST_DETAIL_GRUP:
      return {
        ...state,
        requestDetail: action.payload,
      };
    case SET_HISTORY:
      return {
        ...state,
        setHistory: action.payload,
      };
    default:
      return state;
  }
};

export default dataGroup;
