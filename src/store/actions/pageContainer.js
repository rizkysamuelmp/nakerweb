import { serviceLogin } from "../../utils/api";

export const SET_LOADING = "SET_LOADING";
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_IS_LOGIN = "SET_IS_LOGIN";

export const setIsLogin = (payload) => ({
  type: SET_IS_LOGIN,
  payload,
});

export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const actionLogin = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceLogin({ email, password });
    if (status === 200) {
      dispatch(setLoading(false));
      if (data.status) {
        localStorage.setItem("token", JSON.stringify(data.token));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setMessage(data.message));
      }
    }
  } catch {}
};
