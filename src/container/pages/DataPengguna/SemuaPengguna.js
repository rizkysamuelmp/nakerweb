// Page Semua Pengguna
// --------------------------------------------------------

import { InputAdornment, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Button from "../../../components/Button";
import DropDown from "../../../components/DropDown";
import InputText from "../../../components/InputText";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import Colors from "../../../helpers/colors";
import { dataContent } from "./dataDummy";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconExport from "../../../assets/icon/icon-export.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconXls from "../../../assets/icon/icon-xls.png";
import iconPdf from "../../../assets/icon/icon-pdf.png";
import profile from "../../../assets/img/profile-post.png";

const SemuaPengguna = ({ setActiveStep, setHistory }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
      center: true,
    },
    {
      title: "Profile",
      key: "profile",
      render: (rowData) => (
        <img
          src={profile}
          alt="profile"
          style={{
            width: "24px",
          }}
        />
      ),
      width: 40,
      center: true,
    },
    {
      title: "Nama Lengkap",
      key: "fullName",
    },
    {
      title: "Jenis Kelamin",
      key: "gender",
      center: true,
    },
    {
      title: "Kota",
      key: "city",
      center: true,
    },
    {
      title: "Telepon",
      key: "numberPhone",
      center: true,
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Sektor",
      key: "sector",
    },
    {
      title: "Usia",
      key: "age",
      width: 50,
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
            setActiveStep("detail");
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

  const [search, setSearch] = useState("");
  const [menuExport, setMenuExport] = useState(null);
  const [menuFilter, setMenuFilter] = useState(null);
  const [dropDown, setDropDown] = useState();

  return (
    <Container>
      <Title
        title="Semua Pengguna"
        withBack
        onBack={() => setActiveStep("home")}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {/* Pencarian */}
          <InputText
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Jenis Kelamin :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Laki-laki",
                    value: 0,
                  },
                  { label: "Perempuan", value: 1 },
                ]}
                placeHolder="Pilih Jenis Kelamin"
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Range Usia :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Usia 12 - 25 tahun",
                    value: 0,
                  },
                  { label: "Usia 26 - 39 tahun", value: 1 },
                  { label: "Usia 40 - 52 tahun", value: 2 },
                  { label: "Usia 53 - 65 tahun", value: 3 },
                ]}
                placeHolder="Pilih Range Usia"
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Sektor :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Pabrik baju",
                    value: 0,
                  },
                  { label: "Pabrik Semen", value: 1 },
                ]}
                placeHolder="Pilih Sektor Perusahaan"
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Kota :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Solo",
                    value: 0,
                  },
                  { label: "Yogyakarta", value: 1 },
                  { label: "Klaten", value: 2 },
                ]}
                placeHolder="Pilih Kota"
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Status :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Aktif",
                    value: 0,
                  },
                  { label: "Tidak Aktif", value: 1 },
                ]}
                placeHolder="Pilih Status Akun"
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
          </Menu>
        </div>
      </Title>
      <Table dataContent={dataContent} headerContent={dataHeader} />
      {/* Pagination */}
      <Pagination count={10} currentData={10} totalData={100} page={2} />
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
