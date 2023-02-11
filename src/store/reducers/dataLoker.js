import {
  SET_ALL_LOKER,
  SET_SECTOR,
  SET_HEADER_TABLE,
  SET_PAGINATION,
  SET_DROPDOWN_SECTOR,
  SET_VALUE_SECTOR,
  SET_DROPDOWN_JOB_TYPE,
  SET_VALUE_JOB_TYPE,
  SET_VALUE_STATUS,
  SET_SEARCH,
  SET_ACTIVE_STEP,
  SET_HEADER_TABLE_HOME,
  SET_LOKER_HOME,
  SET_LOKER,
} from "../actions/dataLoker";

const initialState = {
  loker: {},
  allLoker: [],
  lokerHome: [],
  sector: [],
  headerTableHome: [],
  headerTable: [],
  pagination: {
    page: 1,
    count: 1,
    totalData: 10,
    currentData: 10,
  },
  dropDownSector: [],
  valueSector: [],
  dropDownJobType: [],
  valueJobType: [],
  valueStatus: [],
  search: "",
  activeStep: "page",
};

const dataLoker = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOKER:
      return {
        ...state,
        loker: action.payload,
      };
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_VALUE_STATUS:
      return {
        ...state,
        valueStatus: action.payload,
      };
    case SET_VALUE_JOB_TYPE:
      return {
        ...state,
        valueJobType: action.payload,
      };
    case SET_DROPDOWN_JOB_TYPE:
      return {
        ...state,
        dropDownJobType: action.payload,
      };
    case SET_VALUE_SECTOR:
      return {
        ...state,
        valueSector: action.payload,
      };
    case SET_DROPDOWN_SECTOR:
      return {
        ...state,
        dropDownSector: action.payload,
      };
    case SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case SET_HEADER_TABLE_HOME:
      return {
        ...state,
        headerTableHome: action.payload,
      };
    case SET_HEADER_TABLE:
      return {
        ...state,
        headerTable: action.payload,
      };
    case SET_LOKER_HOME:
      return {
        ...state,
        lokerHome: action.payload,
      };
    case SET_ALL_LOKER:
      return {
        ...state,
        allLoker: action.payload,
      };
    case SET_SECTOR:
      return {
        ...state,
        sector: action.payload,
      };
    default:
      return state;
  }
};

export default dataLoker;
