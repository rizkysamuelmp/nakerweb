import { styled } from "@mui/material/styles";
import React from "react";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import { dataContent, dataHeader } from "./dataDummy";

// style
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DataPengguna = () => {
  return (
    <Container>
      <Title title={"Data Pengguna"} />
      <Table dataContent={dataContent} headerContent={dataHeader} />
      {/* Pagination */}
      <Pagination count={10} currentData={10} totalData={100} page={2} />
    </Container>
  );
};

export default DataPengguna;
