// Page Semua Pengguna
// --------------------------------------------------------

import { InputAdornment, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import DropDown from "../../../components/DropDown";
import InputText from "../../../components/InputText";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import Colors from "../../../utils/helpers/colors";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconExport from "../../../assets/icon/icon-export.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconXls from "../../../assets/icon/icon-xls.png";
import iconPdf from "../../../assets/icon/icon-pdf.png";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getDetailDataPengguna,
  getPenggunaFilter,
  getPenggunaSearch,
  setActiveStep,
} from "../../../store/actions/dataPengguna";

const SemuaPengguna = ({ setHistory, setId_user }) => {
  const dataHeader = [
    {
      title: "No",
      key: "id_user",
      width: 30,
      center: true,
    },
    {
      title: "Profile",
      key: "profile",
      render: (rowData) => (
        <>
          {rowData.foto_profile ? (
            <img
              src={rowData.foto_profile}
              alt="profile"
              style={{
                width: "24px",
                height: "24px",
                border: "1px solid rgba(48, 68, 241, 0.87)",
                borderRadius: "100%",
              }}
            />
          ) : (
            "No Image"
          )}
        </>
      ),
      width: 40,
      center: true,
    },
    {
      title: "Nama Lengkap",
      key: "full_name",
    },
    {
      title: "Jenis Kelamin",
      key: "gender",
      center: true,
      render: (rowData) => (
        <p>
          {rowData.gender === "0"
            ? "Pria"
            : rowData.gender === "1"
            ? "Wanita"
            : "-"}
        </p>
      ),
    },
    {
      title: "Kota",
      key: "city",
      center: true,
    },
    {
      title: "Telepon",
      key: "phone",
      center: true,
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Status",
      key: "is_status",
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
          {rowData.is_status === "0" ? (
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
      title: "Usia",
      key: "age",
      width: 50,
      center: true,
      render: (rowData) => (
        <span>{rowData.age ? rowData.age + " Thn" : "-"}</span>
      ),
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
            dispatch(getDetailDataPengguna(rowData.id_user));
            setHistory("all");
          }}
        >
          {rowData.action}
          <img src={eye} alt="eye" />
        </Button>
      ),
      center: true,
    },
  ];

  const [keyword, setKeyword] = useState("");
  const [menuExport, setMenuExport] = useState(null);
  const [menuFilter, setMenuFilter] = useState(null);

  // state for filter
  const [pages, setPages] = useState(1);
  const [gender, setGender] = useState([]);
  const [age, setAge] = useState([]);
  const [valueCity, setValueCity] = useState([]);
  const [isStatus, setIsStatus] = useState([]);

  // state global
  const dispatch = useDispatch();
  const { allUsers, dropDownCity } = useSelector(
    (state) => state.dataPengguna,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getPenggunaFilter(pages, gender, age, isStatus, valueCity));
  }, [dispatch, pages, gender, age, isStatus, valueCity]);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      if (keyword !== "") {
        dispatch(getPenggunaSearch(keyword));
      } else {
        dispatch(getAllUsers());
      }
    }
  };

  return (
    <Container>
      <Title
        title="Semua Pengguna"
        withBack
        onBack={() => dispatch(setActiveStep("page"))}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {/* Pencarian */}
          <InputText
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="pencarian"
            onKeyDown={searchHandler}
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
          {/* Filter */}
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Jenis Kelamin :</p>
              <DropDown
                dropdownValue={gender}
                listDropDown={[
                  {
                    label: "Semua Jenis Kelamin",
                    value: 0,
                  },
                  {
                    label: "Laki-laki",
                    value: 1,
                  },
                  { label: "Perempuan", value: 2 },
                ]}
                placeHolder="Pilih Jenis Kelamin"
                handleChange={(e, value) => {
                  setGender([e.target.value]);
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Range Usia :</p>
              <DropDown
                dropdownValue={age}
                listDropDown={[
                  {
                    label: "< 15 Thn",
                    value: "0",
                  },
                  { label: "15->17 Thn", value: "1" },
                  { label: "18 ->55 Thn", value: "2" },
                  { label: ">56", value: "3" },
                ]}
                placeHolder="Pilih Range Usia"
                handleChange={(e) => {
                  setAge([e.target.value]);
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Kota :</p>
              <DropDown
                dropdownValue={valueCity}
                listDropDown={dropDownCity}
                placeHolder="Pilih Kota"
                handleChange={(e, kode) => {
                  setValueCity([e.target.value]);
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Status :</p>
              <DropDown
                dropdownValue={isStatus}
                listDropDown={[
                  {
                    label: "Semua Status",
                    value: "0",
                  },
                  {
                    label: "Aktif",
                    value: "1",
                  },
                  { label: "Tidak Aktif", value: "2" },
                ]}
                placeHolder="Pilih Status Akun"
                handleChange={(e) => {
                  setIsStatus([e.target.value]);
                }}
              />
            </div>
          </Menu>
        </div>
      </Title>
      <Table dataContent={allUsers} headerContent={dataHeader} />
      {/* Pagination */}
      <Pagination
        count={10}
        currentData={10}
        totalData={100}
        page={pages}
        onChange={(e, value) => {
          setPages(value);
        }}
      />
    </Container>
  );
};

// Style
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SemuaPengguna;
