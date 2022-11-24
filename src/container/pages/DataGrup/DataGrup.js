import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import profilePost from "../../../assets/img/profile-post.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";

// Dummy Data
import { dataContent } from "./DataDummy";
import Button from "../../../components/Button";
import Chart from "../../../components/Chart";

const DataLoker = ({ setActiveStep }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
    },
    {
      title: "Profile",
      width: 60,
      center: true,
      render: () => (
        <img alt="profile-chat" src={profilePost} height={24} width={24} />
      ),
    },
    {
      title: "Nama Grup",
      key: "groupName",
    },
    {
      title: "Jenis Group",
      key: "groupType",
    },
    {
      title: "Pembuat Grup",
      key: "groupCreator",
    },
    {
      title: "Anggota",
      render: (rowData) => (
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          <IconGroup />
          <p>{rowData.member}</p>
        </div>
      ),
    },
    {
      title: "Username",
      key: "username",
    },
    {
      title: "Tanggal Dibuat",
      key: "dateCreated",
    },
    {
      title: "Postingan",
      key: "totalPost",
    },
    {
      title: "Aksi",
      width: 100,
      render: () => (
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

  const dataChart = [
    {
      data: [45, 25, 35],
      backgroundColor: ["#115ABE", "#FFBF0B", "#FA3E3E"],
      borderColor: ["#115ABE", "#FFBF0B", "#FA3E3E"],
      borderWidth: 1,
      label: [
        {
          title: "Aktif",
          color: "#115ABE",
        },
        {
          title: "Menunggu",
          color: "#FFBF0B",
        },
        {
          title: "Ditolak",
          color: "#FA3E3E",
        },
      ],
    },
  ];

  return (
    <Container>
      {/* Title */}
      <Title title="Data Grup" />

      <RowWrapper>
        <ContentWrapper style={{ width: "65%" }}>
          <TitleBar>Total Grup</TitleBar>
        </ContentWrapper>
        <ContentWrapper style={{ width: "35%" }}>
          <TitleBar>Jumlah Status Grup</TitleBar>
          <Chart data={dataChart} description="230 Pengguna" />
        </ContentWrapper>
      </RowWrapper>

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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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

const ContentWrapper = styled("div")(() => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
  height: "267px",
  gap: "15px",
  display: "flex",
  flexDirection: "column",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
}));

const TitleBar = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

export default DataLoker;
