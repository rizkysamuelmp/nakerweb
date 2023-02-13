import {
  serviceGetAllUsers,
  serviceGetCity,
  serviceGetSearchPengguna,
  servicePenggunaFilter,
} from "../../utils/api";
import {
  ALL_USERS,
  SET_DROPDOWN_CITY,
  SET_PAGINATION,
  SET_VALUE_AGE,
  SET_VALUE_CITY,
  SET_VALUE_GENDER,
  SET_VALUE_STATUS,
  FILTER,
} from "../constants/dataPenggunaConstants";
import { setLoading } from "./pageContainer";

export const setFilter = (payload) => ({
  type: FILTER,
  payload,
});

export const setAllUsers = (payload) => ({
  type: ALL_USERS,
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

export const setPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
});

export const getAllUsers = () => async (dispatch) => {
  try {
    const { status, data } = await serviceGetAllUsers({
      page: 1,
      limit: 10,
    });

    if (status === 200) dispatch(setAllUsers(data.data));
  } catch (error) {
    console.warn("error: ", error);
  }
};

export const getCity = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetCity({
      province_id: "11",
    });
    dispatch(setLoading(false));

    if (status === 200) {
      const list = [];
      let number = 0;
      data.data.forEach((item) => {
        list.push({
          label: item.nama,
          value: number,
          kode: item.kode,
          provinsi_code: item.province,
        });
        number = number + 1;
      });
      dispatch(setDropDownCity(list));
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error : ", e);
  }
};

export const getPenggunaSearch = (keyword) => async (dispatch, getState) => {
  dispatch(setFilter(true));
  const { pagination } = getState().dataPengguna;
  dispatch(setLoading(true));
  try {
    const { status, data } = await serviceGetSearchPengguna({
      page: pagination.page,
      limit: "10",
      keyword,
    });
    console.log(data.data);
    if (status === 200) dispatch(setAllUsers(data.data));
    dispatch(setLoading(false));
  } catch {}
};

export const getPenggunaFilter = () => async (dispatch, getState) => {
  dispatch(setFilter(true));
  const {
    valueGender,
    valueAge,
    // valueCity,
    // dropDownCity,
    valueStatus,
    pagination,
  } = getState().dataPengguna;
  dispatch(setLoading(true));

  try {
    const { status, data } = await servicePenggunaFilter({
      page: pagination.page,
      limit: 10,
      gender: valueGender.length === 0 ? "" : valueGender[0],
      age: valueAge.length === 0 ? "" : valueAge[0],
      city: "",
      // city: dropDownCity[valueCity[0]].kode || "",
      status: valueStatus.length === 0 ? "" : valueStatus[0],
    });
    if (status === 200) {
      dispatch(setLoading(false));
      dispatch(setAllUsers(data.data));
    }
  } catch (error) {
    console.warn("error: ", error);
  }
};
