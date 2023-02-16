import { serviceDashboard } from "../../utils/api";
import { setLoading } from "./pageContainer";

export const SET_DATA_DASHBOARD = "SET_DATA_DASHBOARD";
export const SET_ALL_LOKER = "SET_ALL_LOKER";

export const setDataDashboard = (payload) => ({
  type: SET_DATA_DASHBOARD,
  payload,
});

export const setAllLoker = (payload) => ({
  type: SET_ALL_LOKER,
  payload,
});

export const getDataDashboard = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceDashboard();

    if (status === 200) {
      dispatch(setDataDashboard(data.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error : ", e);
  }
};
