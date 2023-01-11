// Page Semua Proyek
// --------------------------------------------------------

import React, { useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import InputAdornment from "@mui/material/InputAdornment";
import InputText from "../../../components/InputText";
import Colors from "../../../utils/helpers/colors";
import Menu from "@mui/material/Menu";
import DropDown from "../../../components/DropDown";

// Asset
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import eye from "../../../assets/icon/Eye.svg";
import profilePost from "../../../assets/img/profile-post.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";

// Dummy Data
import { dataContent } from "./DataDummy";

const SemuaProyek = ({ setActiveStep, setHistory }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 20,
      center: true,
    },
    {
      title: "Profile",
      width: 80,
      center: true,
      render: () => (
        <img alt="profile-chat" src={profilePost} height={24} width={24} />
      ),
    },
    {
      title: "Nama Proyek",
      width: 250,
      key: "projectName",
    },
    {
      title: "Step",
      key: "step",
    },
    {
      title: "Lokasi",
      key: "location",
    },
    {
      title: "Member",
      width: 70,
      render: (rowData) => (
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          <IconGroup />
          <p>{rowData.member}</p>
        </div>
      ),
    },
    {
      title: "Task",
      key: "task",
    },
    {
      title: "Progress",
      key: "progress",
    },
    {
      title: "Tanggal Dibuat",
      key: "dateCreated",
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
            setActiveStep("proyek");
            setHistory("all");
          }}
        >
          Detail
          <img src={eye} alt="eye" />
        </Button>
      ),
      center: true,
    },
  ];

  const [search, setSearch] = useState("");
  const [menuFilter, setMenuFilter] = useState(null);
  const [dropDown, setDropDown] = useState(0);

  return (
    <Container>
      {/* Title */}
      <Title title="Semua Proyek" withBack onBack={() => setActiveStep("page")}>
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
              <p>Pilih jenis proyek :</p>
              <DropDown
                dropdownValue={dropDown}
                handleChange={(e) => setDropDown(e.target.value)}
                listDropDown={[
                  {
                    label: "Publik",
                    value: 0,
                  },
                  { label: "Private", value: 1 },
                ]}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih Kategori proyek :</p>
              <DropDown
                dropdownValue={dropDown}
                handleChange={(e) => setDropDown(e.target.value)}
                listDropDown={[
                  {
                    label: "Planning",
                    value: 0,
                  },
                  { label: "Organizer", value: 1 },
                  { label: "Mentoring", value: 2 },
                ]}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih status proyek :</p>
              <DropDown
                dropdownValue={dropDown}
                handleChange={(e) => setDropDown(e.target.value)}
                listDropDown={[
                  {
                    label: "Aktif",
                    value: 0,
                  },
                  { label: "Tidak Aktif", value: 1 },
                  { label: "Menunggu", value: 2 },
                ]}
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
          <Table headerContent={dataHeader} dataContent={dataContent} />
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

export default SemuaProyek;
