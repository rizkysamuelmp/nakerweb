import {
  ALL_USERS,
  DASHBOARD_USERS,
  FILTER,
  SET_DROPDOWN_CITY,
  SET_PAGINATION,
  SET_SEARCH,
  SET_VALUE_AGE,
  SET_VALUE_CITY,
  SET_VALUE_GENDER,
  SET_VALUE_STATUS,
} from "../constants/dataPenggunaConstants";

const initialState = {
  dashboardUsers: [],
  filter: false,
  search: false,
  allUsers: [],
  valueGender: [],
  valueAge: [],
  valueCity: [],
  dropDownCity: [],
  valueStatus: [],
  pagination: {
    page: 1,
    count: 1,
    totalData: 10,
    currentData: 10,
  },
};

const dataPenggunaReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_USERS:
      return {
        ...state,
        dashboardUsers: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case SET_VALUE_GENDER:
      return {
        ...state,
        valueGender: action.payload,
      };
    case SET_VALUE_AGE:
      return {
        ...state,
        valueAge: action.payload,
      };
    case SET_VALUE_CITY:
      return {
        ...state,
        valueCity: action.payload,
      };
    case SET_DROPDOWN_CITY:
      return {
        ...state,
        dropDownCity: action.payload,
      };
    case SET_VALUE_STATUS:
      return {
        ...state,
        valueStatus: action.payload,
      };
    case SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    default:
      return state;
  }
};

export default dataPenggunaReducer;
