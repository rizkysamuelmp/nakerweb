import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";

// Dummy Data
import {
  chartLineOptions,
  dataContent,
  dataPost,
  dataSet,
  labels,
} from "./DataDummy";
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

  return (
    <Container>
      {/* Title */}
      <Title title="Postingan" />

      <RowWrapper>
        {/* Chart Line */}
        <ContentWrapper style={{ width: "65%" }}>
          <TitleBar>Pertumbuhan postingan</TitleBar>
          <ChartLine
            datasets={dataSet}
            options={chartLineOptions}
            labels={labels}
          />
        </ContentWrapper>

        {/* Postingan Terpopuler */}
        <ContentWrapper style={{ width: "35%", gap: "8px" }}>
          <TitleBar>Postingan Terpopler</TitleBar>
          <LineWrap />
          <ScrollWrap>
            {dataPost.map((item, index) => (
              <ItemWrap key={index}>
                <img
                  alt="profile-post"
                  src={profilePost}
                  height={30}
                  width={30}
                />
                <InfoContentWrap>
                  <TextTitle>
                    A multi-channel network and digital publisher,
                  </TextTitle>
                  <ContentWrap>
                    <TextName>Muh. Arifandi</TextName>
                    <IconWrap>
                      <IconThumb />
                      <TextTotal>250</TextTotal>
                    </IconWrap>
                    <IconWrap>
                      <IconComment />
                      <TextTotal>250</TextTotal>
                    </IconWrap>
                    <IconWrap>
                      <IconShare />
                      <TextTotal>250</TextTotal>
                    </IconWrap>
                  </ContentWrap>
                </InfoContentWrap>
              </ItemWrap>
            ))}
          </ScrollWrap>
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

const LineWrap = styled("div")(() => ({
  border: "0.5px solid #B9B8B8",
  margin: "0px -15px 0px -15px",
  height: "1px",
}));

const ScrollWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "13px",
}));

const ItemWrap = styled("div")(() => ({
  display: "flex",
  gap: "6px",
}));

const InfoContentWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  gap: "7px",
  alignItems: "center",
}));

const IconWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "3px",
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

const TextTitle = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 300,
  fontSize: "12px",
  lineHeight: "15px",
}));

const TextTotal = styled("p")(() => ({
  fontSize: "10px",
  fontWeight: 600,
  color: "#115ABE",
}));

const TextName = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#1A1818",
}));

export default DataPostingan;
