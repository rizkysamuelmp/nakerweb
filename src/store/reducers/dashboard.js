import { SET_ALL_LOKER, SET_DATA_DASHBOARD } from "../actions/dashboard";

const initialState = {
  dataDashboard: {},
  allLoker: [],
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DASHBOARD:
      return {
        ...state,
        dataDashboard: action.payload,
      };
    case SET_ALL_LOKER:
      return {
        ...state,
        allLoker: action.payload,
      };
    default:
      return state;
  }
};

export default dashboard;
