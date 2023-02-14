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
  SET_ALL_CITY,
  VALUE_CITY,
  SET_SELECTED_DATA,
  SET_POPUP_STATUS,
  SET_DETAIL_LOKER,
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
  valueSector: [0],
  dropDownJobType: [],
  valueJobType: [0],
  valueStatus: [0],
  search: "",
  activeStep: "page",
  allCity: [],
  valueCity: [0],
  selectedData: {},
  popupStatus: 0,
  detailLoker: null,
};

const dataLoker = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_LOKER:
      return {
        ...state,
        detailLoker: action.payload,
      };
    case SET_POPUP_STATUS:
      return {
        ...state,
        popupStatus: action.payload,
      };
    case SET_SELECTED_DATA:
      return {
        ...state,
        selectedData: action.payload,
      };
    case VALUE_CITY:
      return {
        ...state,
        valueCity: action.payload,
      };
    case SET_ALL_CITY:
      return {
        ...state,
        allCity: action.payload,
      };
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
