import Button from "../../components/Button";
import {
  serviceGetAllLoker,
  serviceGetCategory,
  serviceGetDataLoker,
  serviceGetJobType,
  serviceLokerFilter,
} from "../../utils/api";
import { setLoading } from "./pageContainer";
import eye from "../../assets/icon/Eye.svg";

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
      let count = 0;
      let sector = [];
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
      let count = 0;
      let sector = [];
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

export const getLoker = () => async (dispatch, getState) => {
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

export const getDataLoker = () => async (dispatch, getState) => {
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
        },
        {
          title: "Sektor",
          key: "level",
          render: (rowData) => (
            <p>{sector.find((item) => item.sektor_id === "1")?.name}</p>
          ),
        },
        {
          title: "Kategori",
          key: "provinice",
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
              {rowData.status === "0" ? (
                <div
                  style={{
                    border: "1px solid #039C40",
                    backgroundColor: "#AEF8AC",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#039C40",
                  }}
                >
                  Aktif
                </div>
              ) : (
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
                  }}
                >
                  Tidak Aktif
                </div>
              )}
            </div>
          ),
          center: true,
        },
      ];
      dispatch(setHeaderTableHome(dataTable));
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
  } = getState().dataLoker;

  try {
    dispatch(setLoading(true));
    const { status, data } = await serviceLokerFilter({
      page: pagination.page,
      limit: 10,
      sector: dropDownSector[valueSector]?.sektor_id || "",
      job_type: dropDownJobType[valueJobType[0]]?.id || "",
      city: "",
      status: valueStatus.length === 0 ? "" : valueStatus[0],
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
        },
        {
          title: "Sektor",
          key: "level",
          render: (rowData) => (
            <p>{sector.find((item) => item.sektor_id === "1")?.name}</p>
          ),
        },
        {
          title: "Kategori",
          key: "provinice",
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
              {rowData.status === "0" ? (
                <div
                  style={{
                    border: "1px solid #039C40",
                    backgroundColor: "#AEF8AC",
                    borderRadius: "30px",
                    padding: "4px 20px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#039C40",
                  }}
                >
                  Aktif
                </div>
              ) : (
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
                  }}
                >
                  Tidak Aktif
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
              onClick={() => dispatch(setActiveStep("detail"))}
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
          count: 3,
          totalData: 30,
          currentData: 10,
        })
      );
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.warn("Error", e);
  }
};
