import { serviceGetCity } from "../../utils/api";
import { SET_CITY } from "../constants/dataPenggunaConstants";
import { setLoading } from "./pageContainer";

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const getCity = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetCity({
      province_id: "11",
    });
    dispatch(setLoading(false));
    console.log(data);

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
      dispatch(setCity(list));
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error : ", e);
  }
};
