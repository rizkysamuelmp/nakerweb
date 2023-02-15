import {
  serviceDashboardUsers,
  serviceGetAllUsers,
  serviceGetCity,
  serviceGetDetailDataPengguna,
  serviceGetSearchPengguna,
  servicePenggunaFilter,
} from "../../utils/api";
import { capFirstLetter } from "../../utils/helpers";
import { setLoading } from "./pageContainer";

export const ACTIVE_STATE = "ACTIVE_STATE";
export const DETAIL_DATA_PENGGUNA = "DETAIL_DATA_PENGGUNA";
export const STATUS_DETAIL = "STATUS_DETAIL";
export const DASHBOARD_USERS = "DASHBOARD_USERS";
export const ALL_USERS = "ALL_USERS";
export const FILTER = "FILTER";
export const SET_VALUE_GENDER = "SET_VALUE_GENDER";
export const SET_VALUE_AGE = "VALUE_AGE";
export const SET_VALUE_CITY = "VALUE_CITY";
export const SET_DROPDOWN_CITY = "SET_DROPDOWN_CITY";
export const SET_VALUE_STATUS = "SET_VALUE_STATUS";
export const SET_SEARCH = "SET_SEARCH";
export const SET_PAGINATION = "SET_PAGINATION";

export const setActiveStep = (payload) => ({
  type: ACTIVE_STATE,
  payload,
});

export const setDashboardUsers = (payload) => ({
  type: DASHBOARD_USERS,
  payload,
});

export const setAllUsers = (payload) => ({
  type: ALL_USERS,
  payload,
});

export const setDetailDataPengguna = (payload) => ({
  type: DETAIL_DATA_PENGGUNA,
  payload,
});

export const setStatusDetail = (payload) => ({
  type: STATUS_DETAIL,
  payload,
});

export const setFilter = (payload) => ({
  type: FILTER,
  payload,
});

export const setValueGender = (payload) => ({
  type: SET_VALUE_GENDER,
  payload,
});

export const setValueAge = (payload) => ({
  type: SET_VALUE_AGE,
  payload,
});

export const setValueCity = (payload) => ({
  type: SET_VALUE_CITY,
  payload,
});

export const setDropDownCity = (payload) => ({
  type: SET_DROPDOWN_CITY,
  payload,
});

export const setValueStatus = (payload) => ({
  type: SET_VALUE_STATUS,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const setPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
});

export const getDashboardUsers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceDashboardUsers({});
    if (status === 200) {
      dispatch(setDashboardUsers(data.data));
      dispatch(setLoading(false));
    }
  } catch {}
};

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    const { status, data } = await serviceGetAllUsers({
      page: getState().dataPengguna.pagination.page,
      limit: 10,
    });

    if (status === 200) dispatch(setAllUsers(data.data));
  } catch (error) {
    console.warn("error: ", error);
  }
};

export const getDetailDataPengguna = (id_user) => async (dispatch) => {
  dispatch(setLoading(true));
  const { status, data } = await serviceGetDetailDataPengguna({
    id_user,
  });

  dispatch(setLoading(false));
  if (status === 200) {
    dispatch(setDetailDataPengguna(data.data));
    dispatch(setActiveStep("detail"));
  }
};

export const getCity = () => async (dispatch) => {
  try {
    const { status, data } = await serviceGetCity({
      province_id: 0,
    });

    if (status === 200) {
      let count = 1;
      let allCity = [
        {
          kode: 0,
          label: "Semua Kab/Kota",
          value: 0,
        },
      ];
      data.data.forEach((item) => {
        allCity.push({
          ...item,
          label: capFirstLetter(item.nama),
          value: count,
        });
        count = count + 1;
      });
      dispatch(setDropDownCity(allCity));
    }
  } catch (e) {
    console.warn("Error : ", e);
  }
};

export const getPenggunaSearch = (keyword) => async (dispatch, getState) => {
  dispatch(setSearch(true));
  const { pagination } = getState().dataPengguna;
  const { status, data } = await serviceGetSearchPengguna({
    page: pagination.page,
    limit: "10",
    keyword,
  });
  if (status === 200) {
    dispatch(setAllUsers(data.data));
    dispatch(setLoading(false));
  }
};

export const getPenggunaFilter =
  (pages, gender, age, isStatus, valueCity) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    const { dropDownCity } = getState().dataPengguna;

    try {
      const { status, data } = await servicePenggunaFilter({
        page: pages,
        limit: 10,
        gender:
          gender.length === 0 ? "" : gender[0] > 0 ? `${gender[0] - 1}` : "",
        age: age.length === 0 ? "" : age[0] > 0 ? `${age[0] - 1}` : "",
        city: dropDownCity[valueCity[0]]?.kode || "",
        status:
          isStatus.length === 0
            ? ""
            : isStatus[0] > 0
            ? `${isStatus[0] - 1}`
            : "",
      });

      if (dropDownCity.length === 0) dispatch(getCity());
      dispatch(setLoading(false));
      if (status === 200) {
        dispatch(setAllUsers(data.data));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.warn("error: ", error);
    }
  };
