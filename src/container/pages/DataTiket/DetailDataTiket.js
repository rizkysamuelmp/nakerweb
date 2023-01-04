import React, { useState } from "react";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import DropDown from "../../../components/DropDown";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import Colors from "../../../utils/helpers/colors";
import { InputAdornment, Menu } from "@mui/material";

// Assets
import eye from "../../../assets/icon/Eye.svg";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconSlider from "../../../assets/icon/icon-slider.png";

// Dummy
import * as dataDummy from "./dataDummy";
const listDropDown = [
  {
    label: "Teknologi Media, dan Komunikasi",
    subLabel: "Bidang 1",
    value: 0,
  },
  { label: "Kesehatan", subLabel: "Bidang 2", value: 1 },
  { label: "Konstruksi", subLabel: "Bidang 3", value: 2 },
  { label: "Pertanian", subLabel: "Bidang 4", value: 3 },
];

const DetailDataTiket = ({ setActiveStep }) => {
  const [search, setSearch] = useState("");
  const [menuFilter, setMenuFilter] = useState(null);
  const [dropDown, setDropDown] = useState(0);

  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
      center: true,
    },
    {
      title: "Judul",
      key: "title",
    },
    {
      title: "Pengirim",
      key: "sender",
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
      title: "Tgl kirim",
      key: "deliveryDate",
      center: true,
    },
    {
      title: "Balasan terakhir",
      key: "lastReply",
      center: true,
    },
    {
      title: "Prioritas",
      key: "priority",
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rowData.priority === "Hight" ? (
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
              {rowData.priority}
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
              {rowData.priority}
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
          onClick={() => setActiveStep("masalah")}
        >
          {rowData.action}
          <img src={eye} alt="eye" />
        </Button>
      ),
      center: true,
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        {/* Title */}
        <Title title="Detail Data Loker" />

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
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
                <img src={iconSearch} alt="icon-search" />
              </InputAdornment>
            }
          />
          {/* Tombol Filter */}

          {/* Filter */}
          {/* Tombol Filter */}
          <Button
            padding="8px"
            width="fit-content"
            onClick={(event) => {
              setMenuFilter(event.currentTarget);
            }}
          >
            <img src={iconSlider} alt="icon-slider" />
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
              <p>Status :</p>
              <DropDown
                dropdownValue={dropDown}
                handleChange={(e) => setDropDown(e.target.value)}
                listDropDown={listDropDown}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Prioritas :</p>
              <DropDown
                dropdownValue={dropDown}
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
          </Menu>
        </div>
      </HeaderContainer>

      {/* Table */}
      <Table dataContent={dataDummy.dataContent} headerContent={dataHeader} />

      {/* Pagination */}
      <Pagination count={10} currentData={10} totalData={100} page={2} />
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export default DetailDataTiket;
