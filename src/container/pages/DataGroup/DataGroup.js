// Page Data Grup
// --------------------------------------------------------

import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import Chart from "../../../components/Chart";
import ChartBar from "../../../components/ChartBar";
import moment from "moment";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getDasboardGroup,
  setActiveStep,
} from "../../../store/actions/dataGroup";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import profilePost from "../../../assets/img/profile-post.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";
import iconCalendar from "../../../assets/icon/icon-calendar.png";

const initialPieChart = [
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

const DataGroup = ({ setHistory }) => {
  const dispatch = useDispatch();

  const { dashboardGroup } = useSelector((state) => state.dataGroup);

  const [pieChart, setPieChart] = useState(initialPieChart);
  const [datasets, setDataSet] = useState([]);

  const dataHeader = [
    {
      title: "No",
      key: "group_id",
      width: 20,
      center: true,
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
      render: (rowData) => (
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          <IconGroup />
          <p>{rowData.total_member}</p>
        </div>
      ),
      center: true,
    },
    {
      title: "Username",
      key: "full_name",
    },
    {
      title: "Tanggal Dibuat",
      render: (rowData) => <p>{moment(rowData).format("DD MMM YYYY")}</p>,
    },
    {
      title: "Postingan",
      render: (rowData) => <p>{rowData.total_post} Post</p>,
      center: true,
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
              dispatch(setActiveStep("detail"));
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

  useEffect(() => {
    dispatch(getDasboardGroup());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(dashboardGroup).length !== 0) {
      const { Aktif, Menunggu, Tolak } = dashboardGroup.total_grup[0];
      const total = parseInt(Aktif) + parseInt(Menunggu) + parseInt(Tolak);
      const data = [
        (100 / total) * Aktif,
        (100 / total) * Menunggu,
        (100 / total) * Tolak,
      ];
      setPieChart([{ ...initialPieChart[0], data: data }]);

      const mapDataSet = [
        {
          label: "Perusahaan",
          data: dashboardGroup.chart.map((item) => parseInt(item.Perusahaan)),
          backgroundColor: "#FFBF0B",
          pointStyle: "rectRounded",
        },
        {
          label: "Komunitas",
          data: dashboardGroup.chart.map((item) => parseInt(item.Komunitas)),
          backgroundColor: "#F86C6C",
          pointStyle: "rectRounded",
        },
        {
          label: "Serikat Pekerja",
          data: dashboardGroup.chart.map((item) =>
            parseInt(item["Serikat Pekerja"])
          ),
          backgroundColor: "#03B74B",
          pointStyle: "rectRounded",
        },
      ];
      setDataSet(mapDataSet);
    }
  }, [dashboardGroup]);

  return (
    <Container>
      {/* Title */}
      <Title title="Data Grup" />

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
                Total Grup
              </p>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                {dashboardGroup?.total_grup
                  ? dashboardGroup?.total_grup[0]?.total_grup
                  : 0}
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

          {/* Chart Bar */}
          <ChartBar datasets={datasets} />
        </ContentWrapper>

        {/* Chart Donat */}
        <ContentWrapper style={{ width: "35%" }}>
          <TitleBar>Jumlah Status Grup</TitleBar>
          <Chart
            data={pieChart}
            description={
              dashboardGroup?.total_grup
                ? `${dashboardGroup?.total_grup[0]?.total_grup} Grup`
                : "0 Grup"
            }
          />
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
          <Table
            headerContent={dataHeader}
            dataContent={dashboardGroup.list_grup}
          />
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
              onClick={() => dispatch(setActiveStep("all"))}
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

export default DataGroup;
