import { serviceGetAllGrup, serviceGetDashboardGrup } from "../../utils/api";
import {
  SET_ALL_GRUP,
  SET_DASHBOARD_GRUP,
} from "../constants/dataGrupConstatns";
import { setLoading } from "./pageContainer";

export const setDashboardGrup = (payload) => ({
  type: SET_DASHBOARD_GRUP,
  payload,
});

export const setAllGrup = (payload) => ({
  type: SET_ALL_GRUP,
  payload,
});

export const getDasboardGrup = () => async (dispatch) => {
  dispatch(setLoading(true));
  const { status, data } = await serviceGetDashboardGrup({});
  if (status === 200) {
    dispatch(setDashboardGrup(data.data));
    dispatch(setLoading(false));
  }
};

export const getAllGrup = () => async (dispatch) => {
  dispatch(setLoading(true));
  const { status, data } = await serviceGetAllGrup({
    page: 1,
    limit: 1,
    status: "",
    category: "",
    privacy: "",
  });
  dispatch(setAllGrup(data.data));
  dispatch(setLoading(false));
};
