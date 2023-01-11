/* eslint-disable space-before-function-paren */
import axios from "axios";

export const requestInterceptors = async () => {
  await axios.interceptors.request.use(
    (config) => {
      // config.withCredentials = process.env.NODE_ENV !== 'production';
      config.headers["Content-Type"] = "text/plain";
      config.headers["Access-Control-Allow-Headers"] = "Content-Type";
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Methods"] = "POST,GET";
      // config.headers["Access-Control-Allow-Origin"] = "*";
      // config.headers["Access-Control-Allow-Credentials"] = true;

      // const dataUser = JSON.parse(dataUserString);
      // if (dataUser && dataUser.access_token) {
      // config.headers.Authorization = `Bearer ${dataUser.access_token}`;
      // }
      // const accessToken = getLocalStorage("accessToken");
      // if (accessToken) {
      // console.warn(accessToken);
      //   config.headers.Authorization = `Bearer ${accessToken}`;
      // }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};
export const responseInterceptors = async () => {
  await axios.interceptors.response.use(
    (response) => {
      const isHtml =
        response.headers["Content-Type"] === "text/html;charset=utf-8";
      if (isHtml) {
        // Store.dispatch({ type: SET_ERROR_WAF, payload: response });
      }

      // if (
      //   response.data.opstatus === 9001 ||
      //   response.data.opstatus === 8004 ||
      //   response.data.opstatus === 8005
      // ) {
      //   return Store.dispatch({ type: SET_REQUEST_TIME_OUT, payload: true });
      // }

      return response;
    },
    (error) =>
      // handle timeout
      // if (error.code === 'ECONNABORTED') {
      //   console.warn(`A timeout happend on url ${error.config.url}`);
      // }
      // eslint-disable-next-line prefer-promise-reject-errors
      // Promise.reject({ ...error.response });
      {
        // console.warn(error.response, "ini error");
        if (error.response.status === 401) {
          // handleLogoutMiddleware();
          // store.dispatch(setPopUpExpired(true));
          // console.warn("delete access token");
        }
        if (error.response.status === 503 || error.response.status === 502) {
          // store.dispatch(
          //   setPopUpErrorBE({ isError: true, errorCode: error.response.status })
          // );
        }
        return error.response;
      }
  );
};
