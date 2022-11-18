import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

// Asset
import imagePerson from "../../../assets/img/image-person-trending.png";
import iconArrowRight from "../../../assets/icon/icon-arrow-right.png";

// Dummy Data
import {
  dataContent,
  dataHeader,
  lokasiTrending,
  lokerTranding,
  sektorTrending,
} from "./DataDummy";

const DataLoker = ({ setActiveStep }) => {
  return (
    <Container>
      {/* Title */}
      <Title title="Data Loker" />

      {/* Chart */}
      <RowWrapper>
        <ContentWrapper style={{ width: "65%" }}>
          <TitleBar>Chart Graph</TitleBar>
        </ContentWrapper>
        <ContentWrapper style={{ width: "35%" }}>
          <TitleBar>Chart Pie</TitleBar>
        </ContentWrapper>
      </RowWrapper>

      <RowWrapper>
        {/* Lokasi trending */}
        <ContentWrapper style={{ width: "37%" }}>
          <TitleBar>Lokasi trending</TitleBar>
          <ScrollWrapper
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              maxWidth: "fit-content",
              height: "fit-content",
              justifyContent: "space-around",
              paddingRight: "15px",
            }}
          >
            {lokasiTrending.map((item, index) => (
              <div key={index}>
                <TextWrapper>
                  <TextName>{item.name}</TextName>
                  <TextDetail>{item.detail}</TextDetail>
                </TextWrapper>
              </div>
            ))}
          </ScrollWrapper>
        </ContentWrapper>

        {/* Sektor trending */}
        <ContentWrapper style={{ width: "18%" }}>
          <TitleBar>Sektor trending</TitleBar>
          <ScrollWrapper>
            {sektorTrending.map((item) => (
              <TextWrapper>
                <TextName>{item.name}</TextName>
                <TextDetail>{item.detail}</TextDetail>
              </TextWrapper>
            ))}
          </ScrollWrapper>
        </ContentWrapper>

        {/* Loker trending */}
        <ContentWrapper style={{ width: "45%" }}>
          <TitleBar>Loker trending</TitleBar>
          <ScrollWrapper style={{ gap: "5px", paddingRight: "15px" }}>
            {lokerTranding.map((item) => (
              <List aria-label="contacts" disablePadding>
                <ItemCustom onClick={() => setActiveStep("all")}>
                  <ContentWrap>
                    <img alt="person-trending" src={imagePerson} />
                    <TextWrapper>
                      <TextName>{item.name}</TextName>
                      <TextDetail>{item.detail}</TextDetail>
                    </TextWrapper>
                  </ContentWrap>
                  <img alt="arrow-right" src={iconArrowRight} />
                </ItemCustom>
              </List>
            ))}
          </ScrollWrapper>
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
  height: "267px",
  gap: "15px",
  display: "flex",
  flexDirection: "column",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
}));

const TextWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  justifyContent: "center",
}));

const ScrollWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "100%",
  overflowY: "scroll",
  marginRight: "-10px",
}));

const TitleBar = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

const ItemCustom = styled(ListItemButton)(() => ({
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

const TextName = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

const TextDetail = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "10px",
  lineHeight: "12px",
  letterSpacing: "0.01em",
  color: "#948F8F",
}));

export default DataLoker;
