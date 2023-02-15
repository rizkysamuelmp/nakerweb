import {
  serviceGetDashboardDataProyek,
  serviceGetFilterDataProyek,
  serviceProyekDetail,
  // serviceRequestDetail,
} from "../../utils/api";
import { setLoading } from "./pageContainer";

export const SET_DASHBOARD_DATA_PROYEK = "DASHBOARD_DATA_PROYEK";
export const SET_ALL_DATA_PROYEK = "SET_ALL_DATA_PROYEK";
export const SET_DETAIL = "SET_DETAIL";

export const setDataDashboard = (payload) => ({
  type: SET_DASHBOARD_DATA_PROYEK,
  payload,
});

export const setAllDataProyek = (payload) => ({
  type: SET_ALL_DATA_PROYEK,
  payload,
});

export const setDetailDataProyek = (payload) => ({
  type: SET_DETAIL,
  payload,
});

export const getDashboardDataProyek = () => async (dispatch) => {
  dispatch(setLoading(true));
  const { status, data } = await serviceGetDashboardDataProyek();
  if (status === 200) {
    dispatch(setDataDashboard(data.data));
    dispatch(setLoading(false));
  }
  dispatch(setLoading(false));
};

export const getFilterDataProyek =
  (gender, kategori, isStatus, pages) => async (dispatch) => {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetFilterDataProyek({
      page: pages,
      limit: 10,
      category: kategori[0],
      city: "",
      type: "",
      status: isStatus[0],
      keyword: "",
    });
    if (status === 200) dispatch(setAllDataProyek(data.data));
    dispatch(setLoading(false));
  };

export const getDetailDataProyek = (id_proyek) => async (dispatch) => {
  const { status, data } = await serviceProyekDetail({
    id_proyek,
  });
  console.log("detail proyek : ", data);
  if (status === 200) dispatch(setDetailDataProyek(data.data));
};
