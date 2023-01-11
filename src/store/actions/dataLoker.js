import { serviceGetAllLoker } from "../../utils/api";
import { setLoading } from "./pageContainer";

export const SET_DATA_LOKER = "SET_DATA_LOKER";

export const setDataLoker = (payload) => ({
  type: SET_DATA_LOKER,
  payload,
});

export const getDataLoker = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await serviceGetAllLoker({
      page: 1,
    });
    dispatch(setLoading(false));
    console.warn("Isi response : ", response);

    if (response.status === 200) {
      // dispatch(setPopup1(true));
    } else {
      // dispatch(
      //   setErrorGlobal({
      //     isError: true,
      //     errorCode: response.data?.errorCode,
      //     message: handleGetErrorMessage(response.data, language),
      //     responseData: response.data,
      //   })
      // );
    }
    return;
  } catch (e) {
    console.warn("Ini Catch Error", e);
  }
};
