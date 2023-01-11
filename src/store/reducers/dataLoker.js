import { SET_DATA_LOKER } from "../actions/dataLoker";

const initialState = {
  dataLoker: [],
};

const dataLoker = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LOKER:
      return {
        ...state,
        dataLoker: action.payload,
      };
    default:
      return state;
  }
};

export default dataLoker;
