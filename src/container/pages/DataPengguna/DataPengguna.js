import { styled } from "@mui/material/styles";
import React from "react";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import { dataContent, dataHeader } from "./dataDummy";

// style
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DataPengguna = ({ setActiveStep }) => {
  return (
    <Container>
      <Title title={"Data Pengguna"} />
      <Table dataContent={dataContent} headerContent={dataHeader} />
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
    </Container>
  );
};

export default DataPengguna;
