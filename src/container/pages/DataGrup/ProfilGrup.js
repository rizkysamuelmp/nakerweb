import React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";

// Asset
import bannerImage from "../../../assets/img/banner-image.png";
import { ReactComponent as IconSuccessCheck } from "../../../assets/icon/icon-success-check.svg";
import iconEdit from "../../../assets/icon/icon-edit.png";
import iconContract from "../../../assets/icon/icon-contract.png";
import iconComment from "../../../assets/icon/icon-comment.png";
import iconThumb from "../../../assets/icon/icon-thumb-fill-blue.png";
import imagePerson from "../../../assets/img/image-person-trending.png";
import iconArrowRight from "../../../assets/icon/icon-arrow-right.png";

const ProfilGrup = ({ setActiveStep }) => {
  const lokerTranding = [
    {
      name: "Android developer",
      detail: "100 Pelamar",
    },
    {
      name: "Android developer",
      detail: "100 Pelamar",
    },
    {
      name: "Android developer",
      detail: "100 Pelamar",
    },
    {
      name: "Android developer",
      detail: "100 Pelamar",
    },
  ];

  return (
    <Container>
      <div
        style={{
          bottom: "0",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#f1f1f1",
          width: "100%",
          position: "relative",
          margin: "0 auto",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <img
          src={bannerImage}
          alt="Notebook"
          style={{
            width: "100%",
            verticalAlign: "middle",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          height={140}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            background: "rgba(17, 90, 190, 0.7)",
            color: "#f1f1f1",
            width: "100%",
            padding: "10px 10px 10px 30px",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: "18px",
            height: "140px",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignSelf: "center",
            }}
          >
            <p
              style={{
                fontWeight: 500,
                fontSize: "30px",
                lineHeight: "36px",
                display: "flex",
                alignItems: "center",
                gap: "13px",
              }}
            >
              Syarikat Pekerja Indonesia
              <IconSuccessCheck height={32} width={32} />
            </p>
            <p
              style={{
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "18px",
              }}
            >
              Grup di buat oleh @arifandi
            </p>
          </div>
          <div>
            <IconButton aria-label="delete">
              <img alt="icon-edit" src={iconEdit} height={32} width={32} />
            </IconButton>
          </div>
        </div>
      </div>

      <RowWrapper>
        <ContentWrapper style={{ width: "35%" }}>
          <BoxWrapper>
            <TitleBar>Jumlah Interaksi</TitleBar>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "11px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F7FB",
                  borderRadius: "5px",
                  padding: "12px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <img
                    alt="icon-contract"
                    src={iconContract}
                    height={24}
                    width={24}
                  />
                  Postingan
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  1000
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#F4F7FB",
                  borderRadius: "5px",
                  padding: "12px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <img
                    alt="icon-contract"
                    src={iconComment}
                    height={24}
                    width={24}
                  />
                  Komentar
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  1000
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#F4F7FB",
                  borderRadius: "5px",
                  padding: "12px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  <img
                    alt="icon-contract"
                    src={iconThumb}
                    height={24}
                    width={24}
                  />
                  Like
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  1000
                </p>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <TitleBar>Postingan terpopuler</TitleBar>

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
          </BoxWrapper>
        </ContentWrapper>
        <ContentWrapper style={{ width: "65%" }}>
          <BoxWrapper style={{ height: "267px" }}>
            <TitleBar>Pertumbuhan Anggota</TitleBar>
          </BoxWrapper>
          <BoxWrapper style={{ height: "231px" }}>
            <TitleBar>Jumlah Anggota</TitleBar>
          </BoxWrapper>
        </ContentWrapper>
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

const ItemCustom = styled(ListItemButton)(() => ({
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
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

const ScrollWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "100%",
  overflowY: "scroll",
  marginRight: "-10px",
}));

const ContentWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  gap: "15px",
}));

const TextWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  justifyContent: "center",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

const BoxWrapper = styled("div")(() => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
  height: "fit-content",
  gap: "15px",
  display: "flex",
  flexDirection: "column",
}));

const TitleBar = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

export default ProfilGrup;
