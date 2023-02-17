import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import InputAdornment from "@mui/material/InputAdornment";
import InputText from "../../../components/InputText";
import Colors from "../../../utils/helpers/colors";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DropDown from "../../../components/DropDown";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getAllGrup,
  getDetailGrup,
  getRequestGrup,
  getSearchGrup,
  setActiveStep,
} from "../../../store/actions/dataGroup";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconExport from "../../../assets/icon/icon-export.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconXls from "../../../assets/icon/icon-xls.png";
import iconPdf from "../../../assets/icon/icon-pdf.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";

const SemuaGroup = ({ setHistory }) => {
  const dispatch = useDispatch();

  const dataHeader = [
    {
      title: "No",
      key: "group_id",
      width: 30,
    },
    {
      title: "Profile",
      width: 60,
      center: true,
      render: (rowData) => (
        <img
          alt="profile-chat"
          src={rowData.group_cover}
          height={24}
          width={24}
        />
      ),
    },
    {
      title: "Nama Grup",
      key: "group_name",
    },
    {
      title: "Jenis Group",
      key: "category_name",
    },
    {
      title: "Pembuat Grup",
      key: "full_name",
    },
    {
      title: "Anggota",
      center: true,
      render: (rowData) => (
        <div style={{ display: "flex", gap: "3px", justifyContent: "center" }}>
          <IconGroup />
          <p>{rowData.total_member}</p>
        </div>
      ),
    },
    {
      title: "Tanggal Dibuat",
      key: "create_at",
      center: true,
      render: (rowData) => <p>{rowData.create_at.split(" ", 1)}</p>,
    },
    {
      title: "Postingan",
      key: "total_post",
      center: true,
      render: (rowData) => <p>{rowData.total_post + " Post"}</p>,
    },
    {
      title: "Status",
      center: true,
      width: 150,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {
            <div
              style={{
                border:
                  rowData.group_status === "1"
                    ? "1px solid #039C40"
                    : rowData.group_status === "2"
                    ? "1px solid #2C4AE9"
                    : rowData.group_status === "3"
                    ? "1px solid #C80707"
                    : "",
                backgroundColor:
                  rowData.group_status === "1"
                    ? "#AEF8AC"
                    : rowData.group_status === "2"
                    ? "rgba(181, 190, 233, 0.29)"
                    : "rgba(245, 150, 150, 0.2)",
                borderRadius: "30px",
                padding: "4px 20px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color:
                  rowData.group_status === "1"
                    ? "#039C40"
                    : rowData.group_status === "2"
                    ? "#2C4AE9"
                    : "#C80707",
              }}
            >
              {rowData.group_status === "1"
                ? "Aktif"
                : rowData.group_status === "2"
                ? "Menunggu"
                : rowData.group_status === "3"
                ? "Ditolak"
                : "Dinonaktifkan"}
            </div>
          }
        </div>
      ),
    },
    {
      title: "Aksi",
      width: 100,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            borderRadius="5px"
            padding="0px 7px 0px 9px"
            onClick={() => {
              // dispatch(setActiveStep("detail"));
              actionHandler(rowData.group_id, rowData.group_status);
            }}
          >
            Detail
            <img src={eye} alt="eye" />
          </Button>
        </div>
      ),
      center: true,
    },
  ];

  // useState
  const [menuExport, setMenuExport] = useState(null);
  const [menuFilter, setMenuFilter] = useState(null);

  // state for filter
  const [category, setCategory] = useState([]);
  const [isStatus, setIsStatus] = useState([]);
  const [privacy, setPrivacy] = useState([]);
  const [page, setPage] = useState(1);

  // state for search form
  const [keyword, setKeyword] = useState("");

  const { allGroup } = useSelector((state) => state.dataGroup, shallowEqual);

  useEffect(() => {
    if (keyword) {
      dispatch(getSearchGrup(keyword, page));
    } else {
      dispatch(getAllGrup(page, isStatus, category, privacy));
    }
  }, [dispatch, page, isStatus, category, privacy, keyword]);

  const actionHandler = (group_id, group_status) => {
    if (group_status === "1" || group_status === "4") {
      dispatch(getDetailGrup(group_id));
    } else {
      dispatch(getRequestGrup(group_id));
    }
    setHistory("all");
  };

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      if (keyword !== "") {
        dispatch(getSearchGrup(keyword, page));
      } else {
        dispatch(getAllGrup());
      }
    }
  };

  // const changePageHandler = (value) => {
  //   if (keyword) {
  //     console.log("kosong");
  //   } else {
  //     console.log("ada isi");
  //   }
  // };

  return (
    <Container>
      {/* Title */}
      <Title
        title="Semua Grup"
        withBack
        onBack={() => dispatch(setActiveStep("page"))}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {/* Pencarian */}
          <InputText
            type="text"
            value={keyword}
            onKeyDown={searchHandler}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="pencarian"
            noPadding
            width="175px"
            borderRadius="5px"
            borderColor="#115AAA"
            iconAdornment={
              <InputAdornment
                position="start"
                className="inputAdorment"
                sx={{
                  zIndex: 200,
                  height: "40px",
                  justifyContent: "center",
                  width: "67px",
                  maxHeight: "56px",
                  borderRadius: "5px 0px 0px 5px",
                  backgroundColor: Colors.primary.hard,
                  ".MuiTypography-root": {
                    color: "white",
                    fontSize: "0.938rem",
                    fontWeight: "400",
                    lineHeight: "1.124rem",
                  },
                }}
              >
                <img
                  src={iconSearch}
                  alt="icon-search"
                  width={24}
                  height={24}
                />
              </InputAdornment>
            }
          />
          {/* Tombol Export */}
          <div
            style={{ display: "flex", gap: "2px" }}
            onClick={(event) => setMenuExport(event.currentTarget)}
          >
            <Button
              padding="8px"
              width="fit-content"
              borderRadius="5px 0px 0px 5px"
            >
              Export
            </Button>
            <Button
              padding="8px"
              width="fit-content"
              borderRadius="0px 5px 5px 0px"
            >
              <img src={iconExport} alt="icon-slider" width={24} height={24} />
            </Button>
          </div>

          {/* List Menu Exoprt */}
          <Menu
            id="menu-appbar"
            anchorEl={menuExport}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              top: "40px",
              left: "10px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#000000",
              "& .MuiPaper-root": {
                borderRadius: "10px",
              },
              "& .MuiList-root": {
                padding: "0px",
              },
            }}
            open={Boolean(menuExport)}
            onClose={() => setMenuExport(null)}
          >
            <MenuItem
              onClick={() => setMenuExport(null)}
              sx={{ padding: "8px 12px 3px 12px" }}
            >
              <img src={iconXls} alt="icon-xls" width={24} height={24} />
              Export Excel
            </MenuItem>
            <div style={{ border: "1px solid #E5E5E5" }} />
            <MenuItem
              onClick={() => setMenuExport(null)}
              sx={{ padding: "3px 12px 8px 12px" }}
            >
              <img src={iconPdf} alt="icon-pdf" width={24} height={24} />
              Export Pdf
            </MenuItem>
          </Menu>

          {/* Tombol Filter */}
          <Button
            padding="8px"
            width="fit-content"
            onClick={(event) => {
              setMenuFilter(event.currentTarget);
            }}
          >
            <img src={iconSlider} alt="icon-slider" width={24} height={24} />
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={menuFilter}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              top: "40px",
              left: "10px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "18px",
              color: "#000000",
              "& .MuiPaper-root": {
                borderRadius: "10px",
              },
              "& .MuiList-root": {
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
            }}
            open={Boolean(menuFilter)}
            onClose={() => setMenuFilter(null)}
          >
            <DropdownWrap>
              <p>Pilih jenis grup :</p>
              <DropDown
                dropdownValue={privacy}
                placeHolder="Pilih Jenis Grup"
                handleChange={(e) => setPrivacy([e.target.value])}
                listDropDown={[
                  {
                    label: "Semua Jenis Grup",
                    value: 0,
                  },
                  {
                    label: "Publik",
                    value: 1,
                  },
                  { label: "Private", value: 2 },
                ]}
              />
            </DropdownWrap>
            <DropdownWrap>
              <p>Pilih Kategori grup :</p>
              <DropDown
                placeHolder="Pilih Kategori Grup"
                dropdownValue={category}
                handleChange={(e) => setCategory([e.target.value])}
                listDropDown={[
                  {
                    label: "Semua Kategori",
                    value: "0",
                  },
                  {
                    label: "Serikat Pekerja",
                    value: "1",
                  },
                  { label: "Perusahaan", value: "2" },
                  { label: "Komunitas", value: "3" },
                ]}
              />
            </DropdownWrap>
            <DropdownWrap>
              <p>Pilih status grup :</p>
              <DropDown
                dropdownValue={isStatus}
                handleChange={(e) => setIsStatus(e.target.value)}
                placeHolder="Pilih Status Grup"
                listDropDown={[
                  {
                    label: "Pilih Semua Status",
                    value: "0",
                  },
                  {
                    label: "Aktif",
                    value: "1",
                  },
                  { label: "Menunggu", value: "2" },
                  { label: "Tidak Aktif", value: "3" },
                  { label: "Dinonaktifkan", value: "4" },
                ]}
              />
            </DropdownWrap>
          </Menu>
        </div>
      </Title>

      {/* Table */}
      <RowWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <Table headerContent={dataHeader} dataContent={allGroup} />
          <Pagination
            count={10}
            currentData={10}
            totalData={100}
            page={page}
            onChange={(e, value) => {
              setPage(value);
              // changePageHandler(value);
            }}
          />
        </div>
      </RowWrapper>
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const DropdownWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

const RowWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  width: "100%",
}));

export default SemuaGroup;
