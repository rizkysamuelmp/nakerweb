import {
  serviceGetActionlGrup,
  serviceGetAllGrup,
  serviceGetDashboardGrup,
  serviceGetDetailGrup,
  serviceGetRequestDetailGrup,
} from "../../utils/api";
import { setLoading } from "./pageContainer";

export const SET_DASHBOARD_GROUP = "SET_DASHBOARD_GROUP";
export const SET_ALL_GROUP = "ALL_GROUP";
export const SET_REQUEST_DETAIL_GRUP = "SET_REQUEST_DETAIL_GRUP";
export const SET_SEARCH_GROUP = "SET_SEARCH_GROUP";
export const SET_DETAIL_GRUP = "SET_DETAIL_GRUP";
export const SET_APPROVED = "SET_APPROVED";
export const SET_ACTION = "SET_ACTION";
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
export const SET_HISTORY = "SET_HISTORY";

export const setActiveStep = (payload) => ({
  type: SET_ACTIVE_STEP,
  payload,
});

export const setDashboardGrup = (payload) => ({
  type: SET_DASHBOARD_GROUP,
  payload,
});

export const setAllGrup = (payload) => ({
  type: SET_ALL_GROUP,
  payload,
});

export const setDetailGrup = (payload) => ({
  type: SET_DETAIL_GRUP,
  payload,
});

export const setRequestDetailGrup = (payload) => ({
  type: SET_REQUEST_DETAIL_GRUP,
  payload,
});

export const setHistory = (payload) => ({
  type: SET_HISTORY,
  payload,
});

export const getDasboardGroup = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetDashboardGrup({});
    if (status === 200) {
      dispatch(setDashboardGrup(data.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.warn("Error : ", e);
    dispatch(setLoading(false));
  }
};

export const getAllGrup = (page) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetAllGrup({
      page: page,
      limit: 10,
      status: "",
      category: "",
      privacy: "",
    });
    if (status === 200) {
      dispatch(setAllGrup(data.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.warn("Error : ", e);
    dispatch(setLoading(false));
  }
};

export const getDetailGrup = (grup_id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetDetailGrup({
      grup_id,
    });
    dispatch(setLoading(false));
    dispatch(setDetailGrup(data.data));
    if (status === 200) {
      dispatch(setActiveStep("grup"));
    }
  } catch (e) {
    console.warn("Error : ", e);
    dispatch(setLoading(false));
  }
};

export const getRequestGrup = (grup_id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetRequestDetailGrup({
      grup_id,
    });
    dispatch(setLoading(false));
    dispatch(setRequestDetailGrup(data.data));
    if (status === 200) {
      dispatch(setActiveStep("detail"));
    }
  } catch (e) {
    console.warn("Error : ", e);
    dispatch(setLoading(false));
  }
};

export const actionRequest = (grup_id, action) => async (dispatch) => {
  await serviceGetActionlGrup({ grup_id, action });
};
