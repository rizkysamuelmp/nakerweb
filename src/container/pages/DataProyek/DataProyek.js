// Page Data Proyek
// --------------------------------------------------------

import React, { useEffect } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import Chart from "../../../components/Chart";
import ChartBar from "../../../components/ChartBar";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardDataProyek } from "../../../store/actions/dataPtoyek";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";
import iconCalendar from "../../../assets/icon/icon-calendar.png";

const DataProyek = ({ setActiveStep, setHistory }) => {
  const dataHeader = [
    {
      title: "No",
      key: "id_proyek",
      width: 20,
      center: true,
    },
    {
      title: "Profile",
      key: "profile",
      render: (rowData) => (
        <>
          {rowData.cover ? (
            <img
              src={rowData.cover}
              alt="profile"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "100%",
              }}
            />
          ) : (
            <DefaultImgContainer>
              <DefaultImg>
                {rowData.full_name.slice(0, 1).toUpperCase()}
              </DefaultImg>
            </DefaultImgContainer>
          )}
        </>
      ),
      width: 40,
      center: true,
    },
    {
      title: "Nama Proyek",
      width: 250,
      key: "nama_proyek",
    },
    {
      title: "Jenis Proyek",
      key: "privacy",
      center: true,
      render: (rowData) => (
        <span>{rowData.privacy === "1" ? "Private" : "Public"}</span>
      ),
    },
    {
      title: "Pembuat Proyek",
      key: "full_name",
    },
    {
      title: "Member",
      width: 70,
      center: true,
      render: (rowData) => (
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
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

  const dispatch = useDispatch();
  const { list_proyek } = useSelector(
    (state) => state.dataProyek.dashboardProyek
  );

  useEffect(() => {
    dispatch(getDashboardDataProyek());
  }, [dispatch]);

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
          <Table headerContent={dataHeader} dataContent={list_proyek} />
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

const DefaultImgContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background-color: #00d53b;
  border-radius: 100%;
`;

const DefaultImg = styled("p")`
  color: white;
  text-decoration: none;
  font-size: 13px;
`;

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
