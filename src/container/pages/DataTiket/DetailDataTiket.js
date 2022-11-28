import React from "react";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";

// Assets
import slider from "../../../assets/icon/Slider.svg";
import eye from "../../../assets/icon/Eye.svg";

// Dummy
import * as dataDummy from "./dataDummy";

const DetailDataTiket = ({ setActiveStep }) => {
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
      {/* Title */}
      <Title title="Detail Data Loker" />
      <Button variant="contained">
        <img src={slider} alt="slider" style={{ width: "50%" }} />
      </Button>

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

export default DetailDataTiket;
