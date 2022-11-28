// Page Semua Loker
// --------------------------------------------------------

import React, { useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import InputAdornment from "@mui/material/InputAdornment";
import InputText from "../../../components/InputText";
import Colors from "../../../helpers/colors";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DropDown from "../../../components/DropDown";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconExport from "../../../assets/icon/icon-export.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconXls from "../../../assets/icon/icon-xls.png";
import iconPdf from "../../../assets/icon/icon-pdf.png";
import iconPlus from "../../../assets/icon/icon-plus-white.svg";

// Dummy Data
import { dataContentAll } from "./DataDummy";

const SemuaLoker = ({ setActiveStep }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
    },
    {
      title: "Posisi",
      key: "position",
    },
    {
      title: "Perusahaan",
      key: "company",
    },
    {
      title: "Lokasi",
      key: "location",
    },
    {
      title: "Tanggal Buka",
      key: "openingDate",
    },
    {
      title: "Sektor",
      key: "sector",
    },
    {
      title: "Kategori",
      key: "category",
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
          {rowData.status === "Aktif" ? (
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
              {rowData.status}
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
              {rowData.status}
            </div>
          )}
        </div>
      ),
      center: true,
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
            onClick={() => setActiveStep("detail")}
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
  const [search, setSearch] = useState("");
  const [menuExport, setMenuExport] = useState(null);
  const [menuFilter, setMenuFilter] = useState(null);
  const [dropDown, setDropDown] = useState();

  return (
    <Container>
      {/* Title */}
      <Title title="Semua Loker" withBack onBack={() => setActiveStep("page")}>
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
              <img src={iconExport} alt="icon-slider" />
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
              sx={{ padding: "8px 12px 3px 0px" }}
            >
              <img src={iconXls} alt="icon-xls" />
              Export Excel
            </MenuItem>
            <div style={{ border: "1px solid #E5E5E5" }} />
            <MenuItem
              onClick={() => setMenuExport(null)}
              sx={{ padding: "3px 12px 8px 0px" }}
            >
              <img src={iconPdf} alt="icon-pdf" />
              Export Pdf
            </MenuItem>
          </Menu>

          {/* Icon Plus */}
          <Button padding="12px" onClick={() => setActiveStep("formulir")}>
            <img alt="icon-plus" src={iconPlus} width={16} height={16} />
          </Button>

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
              <p>Pilih kategori Loker :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Part Time",
                    value: 0,
                  },
                  {
                    label: "Full Time",
                    value: 0,
                  },
                  {
                    label: "Freelancer",
                    value: 0,
                  },
                ]}
                placeHolder=""
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih lokasi Loker :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Solo",
                    value: 0,
                  },
                  {
                    label: "Yogyakarta",
                    value: 1,
                  },
                ]}
                placeHolder=""
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih Sektor Loker :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Industri pakaian",
                    value: 0,
                  },
                  {
                    label: "Tambang Nikkel",
                    value: 1,
                  },
                ]}
                placeHolder=""
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih status Loker :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Aktif",
                    value: 0,
                  },
                  {
                    label: "Tidak Aktif",
                    value: 1,
                  },
                ]}
                placeHolder=""
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
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
          <Table headerContent={dataHeader} dataContent={dataContentAll} />
          <Pagination count={10} currentData={10} totalData={100} page={2} />
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

const RowWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  width: "100%",
}));

export default SemuaLoker;
