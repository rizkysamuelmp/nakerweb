// Page Data Proyek
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputText from "../../../components/InputText";
import Colors from "../../../utils/helpers/colors";
import Button from "../../../components/Button";
import Menu from "@mui/material/Menu";
import DropDown from "../../../components/DropDown";

// Asset
import profilePost from "../../../assets/img/profile-post.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";
import { ReactComponent as IconPlus } from "../../../assets/icon/icon-plus.svg";
import { ReactComponent as IconSurvey } from "../../../assets/icon/survey.svg";
import profile from "../../../assets/img/profile.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconSlider from "../../../assets/icon/icon-slider.png";
import eye from "../../../assets/icon/Eye.svg";

// Dummy Data
import { dataContent, notification } from "./DataDummy";

const DataProyek = ({ setActiveStep, setHistory }) => {
  const [search, setSearch] = useState("");
  const [menuFilter, setMenuFilter] = useState(null);
  const [dropDown, setDropDown] = useState(0);

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
      width: 150,
    },

    {
      title: "Aksi",
      width: 120,
      render: () => (
        <div style={{ whiteSpace: "nowrap" }}>
          <Button
            variant="contained"
            borderRadius="5px"
            padding="0px 7px 0px 9px"
            onClick={() => {
              setActiveStep("proyek");
              setHistory("home");
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

  return (
    <Container>
      <RowWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "70%",
          }}
        >
          <ContentWrapper>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TitleBar>Daftar Proyek</TitleBar>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: "17px",
                  lineHeight: "21px",
                  color: "#115ABE",
                  gap: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setActiveStep("add")}
              >
                <IconPlus />
                Buat Proyek
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "30px",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: "#3B9CF1",
                    widht: "60px",
                    height: "60px",
                  }}
                >
                  <IconSurvey />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "17px",
                      lineHeight: "21px",
                    }}
                  >
                    123 Project
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: "#979494",
                    }}
                  >
                    Planing
                  </p>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: "#F13B3BD4",
                    widht: "60px",
                    height: "60px",
                  }}
                >
                  <IconSurvey />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "17px",
                      lineHeight: "21px",
                    }}
                  >
                    150 Project
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: "#979494",
                    }}
                  >
                    Organizer
                  </p>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: "#2ADB0DD4",
                    widht: "60px",
                    height: "60px",
                  }}
                >
                  <IconSurvey />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "17px",
                      lineHeight: "21px",
                    }}
                  >
                    200 Project
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: "#979494",
                    }}
                  >
                    Mentoring
                  </p>
                </div>
              </div>
            </div>
          </ContentWrapper>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              overflow: "scroll",
              paddingBottom: "20px",
            }}
          >
            <Table headerContent={dataHeader} dataContent={dataContent} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-20px",
            }}
          >
            <p style={{ color: "#7B87AF" }}>Menampilkan 10 dari 500 baris</p>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "18px",
                color: "#115AAA",
                cursor: "pointer",
              }}
              onClick={() => setActiveStep("all")}
            >
              Lihat Semua
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "30%",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <InputText
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="pencarian"
              noPadding
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
              </DropdownWrap>
              <DropdownWrap>
                <p>Pilih Kategori grup :</p>
                <DropDown
                  dropdownValue={dropDown}
                  handleChange={(e) => setDropDown(e.target.value)}
                  listDropDown={[
                    {
                      label: "Perusahaan",
                      value: 0,
                    },
                    { label: "Organisasi", value: 1 },
                    { label: "Komunitas", value: 2 },
                  ]}
                />
              </DropdownWrap>
              <DropdownWrap>
                <p>Pilih status grup :</p>
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
              </DropdownWrap>
            </Menu>
          </div>

          <TitleBar>Recent Activity</TitleBar>

          <ScrollView>
            {notification.map((item, index) => (
              <List aria-label="contacts" disablePadding key={index}>
                <ItemCustom>
                  <img alt="person-trending" src={profile} />
                  <TextWrapper>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: "18px",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: "16px",
                      }}
                    >
                      {item.text}
                    </p>
                  </TextWrapper>
                </ItemCustom>
              </List>
            ))}
          </ScrollView>
        </div>
      </RowWrapper>
    </Container>
  );
};

const TextWrapper = styled("div")(() => ({
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "12px",
  display: "flex",
  flexDirection: "column",
}));

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

const ContentWrapper = styled("div")(() => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
  gap: "15px",
  display: "flex",
  flexDirection: "column",
  whiteSpace: "nowrap",
}));

const ScrollView = styled("div")(() => ({
  overflow: "scroll",
  height: "538px",
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "10px",
  borderRadius: "10px",
}));

const DropdownWrap = styled("p")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

const TitleBar = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

const ItemCustom = styled(ListItemButton)(() => ({
  padding: 0,
  display: "flex",
  gap: "10px",
}));

export default DataProyek;
