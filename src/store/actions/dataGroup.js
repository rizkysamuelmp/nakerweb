import { serviceGetAllGrup, serviceGetDashboardGrup } from "../../utils/api";
import { setLoading } from "./pageContainer";

export const SET_DASHBOARD_GROUP = "SET_DASHBOARD_GROUP";
export const SET_ALL_GROUP = "ALL_GROUP";
export const SET_REQUEST_DETAIL_GROUP = "SET_REQUEST_DETAIL_GROUP";
export const SET_SEARCH_GROUP = "SET_SEARCH_GROUP";
export const SET_GROUP_DETAIL = "SET_GROUP_DETAIL";
export const SET_APPROVED = "SET_APPROVED";
export const SET_ACTION = "SET_ACTION";
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";

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

export const getDasboardGroup = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // const { status, data } = await serviceGetDashboardGrup({});
    const { status, data } = {
      status: 200,
      data: {
        message: "ok",
        status: true,
        data: {
          chart: [
            {
              bulan: "Jan",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Feb",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Mar",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Apr",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Mei",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Jun",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Jul",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Agu",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Sep",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Okt",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Nov",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
            {
              bulan: "Dec",
              "Serikat Pekerja": "0",
              Perusahaan: "0",
              Komunitas: "0",
            },
          ],
          list_grup: [],
          total_grup: [
            {
              Aktif: "0",
              Menunggu: "0",
              Tolak: "0",
              total_grup: "0",
            },
          ],
        },
      },
    };
    if (status === 200) {
      dispatch(setDashboardGrup(data.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.warn("Error : ", e);
    dispatch(setLoading(false));
  }
};

export const getAllGrup = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetAllGrup({
      page: 1,
      limit: 1,
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
