import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";

const dataHeader = [
  {
    title: "No",
    key: "no",
    width: 30,
  },
  {
    title: "Posisi",
    key: "position",
  },
  {
    title: "Perusahaan",
    key: "company",
  },
  {
    title: "Lokasi",
    key: "location",
  },
  {
    title: "Tanggal Buka",
    key: "openingDate",
  },
  {
    title: "Sektor",
    key: "sector",
  },
  {
    title: "Kategori",
    key: "category",
  },
  {
    title: "Status",
    key: "status",
    render: (rowData) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        {rowData.status === "Aktif" ? (
          <div
            style={{
              border: "1px solid #039C40",
              backgroundColor: "#AEF8AC",
              borderRadius: "30px",
              padding: "4px 20px",
            }}
          >
            {rowData.status}
          </div>
        ) : (
          ""
        )}
      </div>
    ),
  },
];

const dataContent = [
  {
    no: 1,
    position: "Operator penjahit baju",
    company: "PT. MAJU MUNDUR JAYA",
    location: "Depok",
    openingDate: "20 September 2022",
    sector: "Industri pakaian",
    category: "Part Time",
    status: "Aktif",
  },
  {
    no: 2,
    position: "Supir 10 Roda",
    company: "PT. USAHA MAKMUR",
    location: "Jakarta Timur",
    openingDate: "21 Oktober 2022",
    sector: "Tambang Nikkel",
    category: "Full time",
    status: "Aktif",
  },
  {
    no: 3,
    position: "Supir Pribadi",
    company: "CV. ABADI JAYA PRATAMA",
    location: "Jakarta Barat",
    openingDate: "29 Agustus 2022",
    sector: "Pabrik Sepatu",
    category: "Freelancer",
    status: "Tidak Aktif",
  },
  {
    no: 3,
    position: "Operator Percetakan",
    company: "UD. USAHAWAN BUMI",
    location: "Jakarta Selatan",
    openingDate: "29 Agustus 2022",
    sector: "Pabrik Elektronik",
    category: "Full time",
    status: "Tidak Aktif",
  },
];

const DataLoker = () => {
  return (
    <Container>
      <Title title="Data Loker" />
      <RowWrapper>
        <ContentWrapper style={{ width: "65%" }}>Chart Graph</ContentWrapper>
        <ContentWrapper style={{ width: "35%" }}>Chart Pie</ContentWrapper>
      </RowWrapper>
      <RowWrapper>
        <ContentWrapper style={{ width: "37%" }}>1</ContentWrapper>
        <ContentWrapper style={{ width: "18%" }}>2</ContentWrapper>
        <ContentWrapper style={{ width: "45%" }}>3</ContentWrapper>
      </RowWrapper>
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
  height: "267px",
}));

export default DataLoker;
