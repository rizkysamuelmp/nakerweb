import Button from "../../components/Button";
import {
  serviceApproveLoker,
  serviceGetAllLoker,
  serviceGetCategory,
  serviceGetCity,
  serviceGetDataLoker,
  serviceGetDetailLoker,
  serviceGetJobType,
  serviceLokerFilter,
} from "../../utils/api";
import { setLoading } from "./pageContainer";
import eye from "../../assets/icon/Eye.svg";
import moment from "moment";

export const SET_ALL_LOKER = "SET_ALL_LOKER";
export const SET_SECTOR = "SET_SECTOR";
export const SET_HEADER_TABLE = "SET_HEADER_TABLE";
export const SET_PAGINATION = "SET_PAGINATION";
export const SET_DROPDOWN_SECTOR = "SET_DROPDOWN_SECTOR";
export const SET_VALUE_SECTOR = "SET_VALUE_SECTOR";
export const SET_DROPDOWN_JOB_TYPE = "SET_DROPDOWN_JOB_TYPE";
export const SET_VALUE_JOB_TYPE = "SET_VALUE_JOB_TYPE";
export const SET_VALUE_STATUS = "SET_VALUE_STATUS";
export const SET_SEARCH = "SET_SEARCH";
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
export const SET_HEADER_TABLE_HOME = "SET_HEADER_TABLE_HOME";
export const SET_LOKER_HOME = "SET_LOKER_HOME";
export const SET_LOKER = "SET_LOKER";
export const SET_ALL_CITY = "SET_ALL_CITY";
export const VALUE_CITY = "VALUE_CITY";
export const SET_SELECTED_DATA = "SET_SELECTED_DATA";
export const SET_POPUP_STATUS = "SET_POPUP_STATUS";
export const SET_DETAIL_LOKER = "SET_DETAIL_LOKER";

export const setDetailLoker = (payload) => ({
  type: SET_DETAIL_LOKER,
  payload,
});

export const setPopupStatus = (payload) => ({
  type: SET_POPUP_STATUS,
  payload,
});

export const setSelectedData = (payload) => ({
  type: SET_SELECTED_DATA,
  payload,
});

export const setValueCity = (payload) => ({
  type: VALUE_CITY,
  payload,
});

export const setAllCity = (payload) => ({
  type: SET_ALL_CITY,
  payload,
});

export const setLoker = (payload) => ({
  type: SET_LOKER,
  payload,
});

export const setActiveStep = (payload) => ({
  type: SET_ACTIVE_STEP,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const setValueStatus = (payload) => ({
  type: SET_VALUE_STATUS,
  payload,
});

export const setValueJobType = (payload) => ({
  type: SET_VALUE_JOB_TYPE,
  payload,
});

export const setDropDownJobType = (payload) => ({
  type: SET_DROPDOWN_JOB_TYPE,
  payload,
});

export const setAllLoker = (payload) => ({
  type: SET_ALL_LOKER,
  payload,
});

export const setLokerHome = (payload) => ({
  type: SET_LOKER_HOME,
  payload,
});

export const setSector = (payload) => ({
  type: SET_SECTOR,
  payload,
});

export const setHeaderTableHome = (payload) => ({
  type: SET_HEADER_TABLE_HOME,
  payload,
});

export const setHeaderTable = (payload) => ({
  type: SET_HEADER_TABLE,
  payload,
});

export const setPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
});

export const setDropDownSector = (payload) => ({
  type: SET_DROPDOWN_SECTOR,
  payload,
});

export const setValueSector = (payload) => ({
  type: SET_VALUE_SECTOR,
  payload,
});

export const getCategory = () => async (dispatch) => {
  try {
    const { status, data } = await serviceGetCategory();

    if (status === 200) {
      dispatch(setSector(data.data));
      let count = 1;
      let sector = [
        {
          label: "Semua Sektor",
          value: 0,
          sektor_id: "",
        },
      ];
      data.data.forEach((item) => {
        sector.push({
          label: item.name,
          value: count,
          sektor_id: item.sektor_id,
        });
        count = count + 1;
      });
      dispatch(setDropDownSector(sector));
    }
  } catch (e) {
    console.warn("Error : ", e);
  }
};

export const getJobType = () => async (dispatch) => {
  try {
    const { status, data } = await serviceGetJobType();

    if (status === 200) {
      let count = 1;
      let sector = [
        {
          label: "Semua Kategori",
          value: 0,
          id: "",
        },
      ];
      data.data.forEach((item) => {
        sector.push({
          label: item.job_type_name,
          value: count,
          id: item.id,
        });
        count = count + 1;
      });
      dispatch(setDropDownJobType(sector));
    }
  } catch (e) {
    console.warn("Error : ", e);
  }
};

export const getAllCity = () => async (dispatch) => {
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
          label: item.nama,
          value: count,
        });
        count = count + 1;
      });
      dispatch(setAllCity(allCity));
    }
  } catch (e) {
    console.warn("Error : ", e);
  }
};

export const getLoker = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetDataLoker({});
    dispatch(setLoading(false));

    if (status === 200) {
      dispatch(setLoker(data.data));
    }
  } catch {
    dispatch(setLoading(false));
    console.warn("Error");
  }
};

export const getDetailLoker = () => async (dispatch, getState) => {
  const { loker_id } = getState().dataLoker.selectedData;
  let sector = getState().dataLoker.sector;
  if (sector.length === 0) {
    await dispatch(getCategory());
    sector = getState().dataLoker.sector;
  }

  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetDetailLoker({
      loker_id,
    });
    dispatch(setLoading(false));

    if (status === 200) {
      dispatch(
        setDetailLoker({ ...data.data.info_loker, ...data.data.info_pic })
      );
      dispatch(setActiveStep("detail"));
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error", e);
  }
};

export const getDataLoker = () => async (dispatch, getState) => {
  const pagination = getState().dataLoker.pagination;
  let sector = getState().dataLoker.sector;
  if (sector.length === 0) {
    await dispatch(getCategory());
    sector = getState().dataLoker.sector;
  }

  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceGetAllLoker({
      page: 1,
    });
    dispatch(setLoading(false));

    if (status === 200) {
      dispatch(setLokerHome(data.data));

      const dataTable = [
        {
          title: "No",
          key: "loker_id",
          width: 30,
        },
        {
          title: "Posisi",
          key: "job_position",
        },
        {
          title: "Perusahaan",
          key: "name",
        },
        {
          title: "Lokasi",
          key: "city",
        },
        {
          title: "Tanggal Buka",
          key: "start_open",
          render: (rowData) => <p>{moment(rowData).format("DD MMMM YYYY")}</p>,
        },
        {
          title: "Sektor",
          key: "sektor",
        },
        {
          title: "Kategori",
          key: "type",
        },
        {
          title: "Status",
          key: "status",
          width: 120,
          render: (rowData) => (
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {rowData.status === "1" ? (
                <div
                  style={{
                    border: "1px solid #039C40",
                    backgroundColor: "#96f5bf",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#039C40",
                    whiteSpace: "nowrap",
                  }}
                >
                  Disetujui
                </div>
              ) : rowData.status === "2" ? (
                <div
                  style={{
                    border: "1px solid #C80707",
                    backgroundColor: "#F5969633",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#C80707",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ditolak
                </div>
              ) : (
                <div
                  style={{
                    border: "1px solid #0061A7",
                    backgroundColor: "#bde2fc",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#0061A7",
                    whiteSpace: "nowrap",
                  }}
                >
                  Menunggu
                </div>
              )}
            </div>
          ),
          center: true,
        },
      ];
      dispatch(setHeaderTableHome(dataTable));

      dispatch(
        setPagination({
          ...pagination,
          count: Math.ceil(data.total / 10),
          totalData: data.total,
          currentData: data.data.length,
        })
      );
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error", e);
  }
};

export const getLokerFilter = () => async (dispatch, getState) => {
  let sector = getState().dataLoker.sector;
  if (sector.length === 0) {
    await dispatch(getCategory());
    sector = getState().dataLoker.sector;
  }

  const {
    pagination,
    valueStatus,
    dropDownJobType,
    valueJobType,
    dropDownSector,
    valueSector,
    search,
    allCity,
    valueCity,
    activeStep,
  } = getState().dataLoker;

  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceLokerFilter({
      page: pagination.page,
      limit: 10,
      sector: dropDownSector[valueSector]?.sektor_id || "",
      job_type: dropDownJobType[valueJobType[0]]?.id || "",
      city: allCity[valueCity[0]]?.kode || "",
      status: valueStatus[0] === 0 ? "" : valueStatus[0] === 1 ? 0 : 1,
      keyword: search,
    });
    dispatch(setLoading(false));

    if (status === 200) {
      dispatch(setAllLoker(data.data));

      const dataTable = [
        {
          title: "No",
          key: "loker_id",
          width: 30,
        },
        {
          title: "Posisi",
          key: "job_position",
        },
        {
          title: "Perusahaan",
          key: "name",
        },
        {
          title: "Lokasi",
          key: "city",
        },
        {
          title: "Tanggal Buka",
          key: "start_open",
          render: (rowData) => <p>{moment(rowData).format("DD MMMM YYYY")}</p>,
        },
        {
          title: "Sektor",
          key: "sektor",
        },
        {
          title: "Kategori",
          key: "type",
        },
        {
          title: "Status",
          key: "status",
          width: 120,
          render: (rowData) => (
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {rowData.status === "1" ? (
                <div
                  style={{
                    border: "1px solid #039C40",
                    backgroundColor: "#96f5bf",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#039C40",
                    whiteSpace: "nowrap",
                  }}
                >
                  Disetujui
                </div>
              ) : rowData.status === "2" ? (
                <div
                  style={{
                    border: "1px solid #C80707",
                    backgroundColor: "#F5969633",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#C80707",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ditolak
                </div>
              ) : (
                <div
                  style={{
                    border: "1px solid #0061A7",
                    backgroundColor: "#bde2fc",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#0061A7",
                    whiteSpace: "nowrap",
                  }}
                >
                  Menunggu
                </div>
              )}
            </div>
          ),
          center: true,
        },
        {
          title: "Aksi",
          key: "action",
          render: (rowData) => (
            <Button
              variant="contained"
              borderRadius="5px"
              padding="0px 7px 0px 9px"
              onClick={() => {
                dispatch(setSelectedData(rowData));
                dispatch(getDetailLoker());
              }}
              style={{ whiteSpace: "nowrap" }}
            >
              Detail
              <img src={eye} alt="eye" />
            </Button>
          ),
          center: true,
        },
      ];
      dispatch(setHeaderTable(dataTable));

      dispatch(
        setPagination({
          ...pagination,
          count: Math.ceil(data.total / 10),
          totalData: data.total,
          currentData: data.data.length,
        })
      );

      if (activeStep === "page") {
        dispatch(setActiveStep("all"));
      }
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error", e);
  }
};

export const executeLoker = (action) => async (dispatch, getState) => {
  const selectData = getState().dataLoker.selectedData;
  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceApproveLoker({
      loker_id: selectData.loker_id,
      status: JSON.stringify(action),
    });
    dispatch(setLoading(false));

    if (status === 200) {
      if (data.message === "Berhasil disetujui") {
        dispatch(setPopupStatus(1));
      } else if (data.message === "Berhasil ditolak") {
        dispatch(setPopupStatus(2));
      }
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error : ", e);
  }
};
