import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";

// Dummy Data
import { dataContent } from "./DataDummy";
import eye from "../../../assets/icon/Eye.svg";
import { ReactComponent as IconThumb } from "../../../assets/icon/icon-thumb.svg";
import { ReactComponent as IconComment } from "../../../assets/icon/icon-comment.svg";
import { ReactComponent as IconShare } from "../../../assets/icon/icon-share.svg";
import profilePost from "../../../assets/img/profile-post.png";
import ChartLine from "../../../components/ChartLine";

const DataPostingan = ({ setActiveStep }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
    },
    {
      title: "Username",
      key: "username",
      width: 100,
    },
    {
      title: "Postingan",
      key: "post",
      width: 300,
    },
    {
      title: "Interaksi",
      center: true,
      render: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p style={{ fontSize: "10px" }}>2500</p>
            <IconThumb />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p style={{ fontSize: "10px" }}>2500</p>
            <IconComment />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p style={{ fontSize: "10px" }}>2500</p>
            <IconShare />
          </div>
        </div>
      ),
    },
    {
      title: "Fitur",
      key: "interaction",
    },
    {
      title: "Tanggal",
      key: "date",
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
            <p style={{ whiteSpace: "nowrap" }}>Detail</p>
            <img src={eye} alt="eye" />
          </Button>
        </div>
      ),
      center: true,
    },
  ];

  const dataSet = [
    {
      label: "Pribadi",
      data: [
        82, 15, 34, 95, 28, 3, 48, 76, 65, 29, 50, 36, 7, 4, 67, 15, 83, 21, 94,
        70, 77, 57, 55, 22, 80, 5, 95, 32, 94, 39,
      ],
      borderColor: "#FC720E",
      backgroundColor: "#FC720E",
      tension: 0.3,
      pointStyle: "rectRounded",
    },
    {
      label: "Publik",
      data: [
        94, 100, 28, 42, 14, 49, 1, 95, 81, 63, 20, 28, 55, 73, 71, 58, 12, 44,
        66, 50, 68, 20, 93, 25, 30, 28, 74, 69, 93, 77,
      ],
      borderColor: "#FF4F79",
      backgroundColor: "#FF4F79",
      tension: 0.3,
      pointStyle: "rectRounded",
      borderDash: [4, 5],
    },
  ];

  const labels = [
    "1 Jul",
    "3 Jul",
    "5 Jul",
    "7 Jul",
    "9 Jul",
    "11 Jul",
    "14 Jul",
    "16 Jul",
    "18 Jul",
    "21 Jul",
  ];

  const chartLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 13,
          },
          autoSkip: true,
          maxTicksLimit: 4,
        },
        position: "right",
      },
      y: {
        position: "right",
      },
    },
  };

  return (
    <Container>
      {/* Title */}
      <Title title="Postingan" />

      {/* Chart */}
      <RowWrapper>
        <ContentWrapper style={{ width: "65%" }}>
          <TitleBar>Pertumbuhan postingan</TitleBar>
          <ChartLine
            datasets={dataSet}
            options={chartLineOptions}
            labels={labels}
          />
        </ContentWrapper>
        <ContentWrapper style={{ width: "35%", gap: "8px" }}>
          <TitleBar>Postingan Terpopler</TitleBar>
          <div
            style={{
              border: "0.5px solid #B9B8B8",
              margin: "0px -15px 0px -15px",
              height: "1px",
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "13px" }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <img
                alt="profile-post"
                src={profilePost}
                height={30}
                width={30}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  A multi-channel network and digital publisher,{" "}
                </p>
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#1A1818",
                    }}
                  >
                    Muh. Arifandi
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconThumb />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconComment />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconShare />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <img
                alt="profile-post"
                src={profilePost}
                height={30}
                width={30}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  A multi-channel network and digital publisher,{" "}
                </p>
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#1A1818",
                    }}
                  >
                    Muh. Arifandi
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconThumb />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconComment />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconShare />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <img
                alt="profile-post"
                src={profilePost}
                height={30}
                width={30}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  A multi-channel network and digital publisher,{" "}
                </p>
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#1A1818",
                    }}
                  >
                    Muh. Arifandi
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconThumb />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconComment />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconShare />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <img
                alt="profile-post"
                src={profilePost}
                height={30}
                width={30}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  A multi-channel network and digital publisher,{" "}
                </p>
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#1A1818",
                    }}
                  >
                    Muh. Arifandi
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconThumb />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconComment />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconShare />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <img
                alt="profile-post"
                src={profilePost}
                height={30}
                width={30}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  A multi-channel network and digital publisher,{" "}
                </p>
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#1A1818",
                    }}
                  >
                    Muh. Arifandi
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconThumb />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconComment />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <IconShare />
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#115ABE",
                      }}
                    >
                      250
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

const ContentWrapper = styled("div")(() => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
  height: "280px",
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

export default DataPostingan;
