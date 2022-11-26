import React from "react";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import { dataContent, dataHeader } from "./dataDummy";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";

// Assets
import slider from "../../../assets/icon/Slider.svg";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailDataTiket = () => {
  return (
    <Container>
      {/* Title */}
      <Title title="Detail Data Loker" />
      <Button variant="contained">
        <img src={slider} alt="slider" style={{ width: "50%" }} />
      </Button>

      {/* Table */}
      <Table dataContent={dataContent} headerContent={dataHeader} />

      {/* Pagination */}
      <Pagination count={10} currentData={10} totalData={100} page={2} />
    </Container>
  );
};

export default DetailDataTiket;
