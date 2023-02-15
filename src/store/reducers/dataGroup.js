import {
  SET_DASHBOARD_GROUP,
  SET_ALL_GROUP,
  SET_REQUEST_DETAIL_GROUP,
  SET_ACTIVE_STEP,
} from "../actions/dataGroup";

const initialState = {
  dashboardGroup: {},
  allGroup: [],
  activeStep: "page",
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
    case SET_REQUEST_DETAIL_GROUP:
      return {
        ...state,
        detailGrup: action.payload,
      };
    default:
      return state;
  }
};

export default dataGroup;
