// Page Data Proyek
// --------------------------------------------------------

import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import Chart from "../../../components/Chart";
import ChartBar from "../../../components/ChartBar";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import profilePost from "../../../assets/img/profile-post.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";
import iconCalendar from "../../../assets/icon/icon-calendar.png";

// Dummy Data
import { dataContent } from "./DataDummy";

const DataProyek = ({ setActiveStep, setHistory }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 20,
      center: true,
    },
    {
      title: "Profile",
      width: 50,
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
      title: "Jenis Proyek",
      key: "projectType",
    },
    {
      title: "Pembuat Proyek",
      key: "projectCreator",
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
      title: "Tanggal Dibuat",
      key: "dateCreated",
    },
    {
      title: "Status",
      width: 160,
      center: true,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rowData.status === "Sudah Dikerjakan" ? (
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
          ) : rowData.status === "Sedang Berjalan" ? (
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
          ) : (
            <div
              style={{
                border: "1px solid #2C4AE9",
                backgroundColor: "#B5BEE94A",
                borderRadius: "30px",
                padding: "4px 20px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#2C4AE9",
              }}
            >
              {rowData.status}
            </div>
          )}
        </div>
      ),
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
            onClick={() => {
              setActiveStep("info");
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

  const dataChart = [
    {
      data: [40, 25, 35],
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
      <Title title="Data Proyek" />

      <RowWrapper>
        <ContentWrapper style={{ width: "65%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "18px",
                }}
              >
                Total Proyek
              </p>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                150
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "3px",
                backgroundColor: "#DEE5EF",
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
                padding: "4px 6px",
                height: "fit-content",
                borderRadius: "3px",
                alignItems: "center",
              }}
            >
              <img
                alt="img-calendar"
                src={iconCalendar}
                width={18}
                height={18}
              />
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                }}
              >
                2022
              </p>
            </div>
          </div>
          <ChartBar
            datasets={[
              {
                label: "Planing",
                data: [9, 2, 2, 7, 1, 10, 0, 0, 2, 0, 0, 8],
                backgroundColor: "#FFBF0B",
                pointStyle: "rectRounded",
              },
              {
                label: "Organizer",
                data: [9, 5, 0, 2, 4, 4, 5, 0, 6, 5, 6, 4],
                backgroundColor: "#F86C6C",
                pointStyle: "rectRounded",
              },
              {
                label: "Mentoring",
                data: [2, 6, 4, 4, 10, 4, 7, 1, 8, 2, 2, 4],
                backgroundColor: "#03B74B",
                pointStyle: "rectRounded",
              },
            ]}
          />
        </ContentWrapper>
        <ContentWrapper style={{ width: "35%" }}>
          <TitleBar>Jumlah Status Proyek</TitleBar>
          <Chart data={dataChart} description="Total 203" />
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

export default DataProyek;
