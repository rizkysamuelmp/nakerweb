// Page Profil Grup
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PopUp from "../../../components/PopUp";
import Chart from "../../../components/Chart";
import ChartLine from "../../../components/ChartLine";

// Asset
import bannerImage from "../../../assets/img/banner-image.png";
import { ReactComponent as IconSuccessCheck } from "../../../assets/icon/icon-success-check.svg";
import iconEdit from "../../../assets/icon/icon-edit.png";
import iconContract from "../../../assets/icon/icon-contract.png";
import iconComment from "../../../assets/icon/icon-comment.png";
import iconThumb from "../../../assets/icon/icon-thumb-fill-blue.png";
import imagePerson from "../../../assets/img/image-person-trending.png";
import iconArrowRight from "../../../assets/icon/icon-arrow-right.png";
import groupSuccess from "../../../assets/img/group-success.png";
import { ReactComponent as IconBack } from "../../../assets/icon/icon-back.svg";

// Redux
import { setActiveStep } from "../../../store/actions/dataGroup";
import { useDispatch } from "react-redux";

// Dummy
import { dataChart1, dataChart2, dataChart3, lokerTranding } from "./DataDummy";

const ProfilGroup = () => {
  const dispatch = useDispatch();

  const [menuEdit, setMenuEdit] = useState(null);
  const [popupConfirm, setPopupConfirm] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);

  return (
    <Container>
      <IconButton
        style={{ position: "absolute", zIndex: 100 }}
        onClick={() => dispatch(setActiveStep("detail"))}
      >
        <IconBack />
      </IconButton>

      {/* Banner Image */}
      <BannerWrap>
        <img
          src={bannerImage}
          alt="Notebook"
          style={{
            width: "100%",
            verticalAlign: "middle",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          height={180}
        />
        <InfoBannerWrap>
          <TextBannerWrap>
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
          </TextBannerWrap>
          <div>
            <IconButton
              aria-label="delete"
              onClick={(event) => setMenuEdit(event.currentTarget)}
            >
              <img alt="icon-edit" src={iconEdit} height={32} width={32} />
            </IconButton>
          </div>
          <Menu
            id="menu-appbar"
            anchorEl={menuEdit}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              top: "40px",
              left: "10px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#000000",
              "& .MuiPaper-root": {
                borderRadius: "10px",
              },
              "& .MuiList-root": {
                padding: "0px",
              },
            }}
            open={Boolean(menuEdit)}
            onClose={() => setMenuEdit(null)}
          >
            <MenuItem
              onClick={() => setMenuEdit(null)}
              sx={{ padding: "11px 18px" }}
            >
              Nonaktifkan Grup
            </MenuItem>
            <div style={{ border: "1px solid #E5E5E5" }} />
            <MenuItem
              onClick={() => setPopupConfirm(true)}
              sx={{ padding: "11px 18px" }}
            >
              Hapus Grup
            </MenuItem>
          </Menu>
        </InfoBannerWrap>
      </BannerWrap>

      <RowWrapper>
        <ContentWrapper style={{ width: "35%" }}>
          {/* Jumlah Interaksi */}
          <BoxWrapper>
            <TitleBar>Jumlah Interaksi</TitleBar>
            <InfoWrap>
              <ItemWrap>
                <ImageWrap>
                  <img
                    alt="icon-contract"
                    src={iconContract}
                    height={24}
                    width={24}
                  />
                  Postingan
                </ImageWrap>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  1000
                </p>
              </ItemWrap>
              <ItemWrap>
                <ImageWrap>
                  <img
                    alt="icon-contract"
                    src={iconComment}
                    height={24}
                    width={24}
                  />
                  Komentar
                </ImageWrap>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  1000
                </p>
              </ItemWrap>
              <ItemWrap>
                <ImageWrap>
                  <img
                    alt="icon-contract"
                    src={iconThumb}
                    height={24}
                    width={24}
                  />
                  Like
                </ImageWrap>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  1000
                </p>
              </ItemWrap>
            </InfoWrap>
          </BoxWrapper>

          {/* Postingan Terpopuler */}
          <BoxWrapper>
            <TitleBar>Postingan terpopuler</TitleBar>
            <ScrollWrapper style={{ gap: "5px", paddingRight: "15px" }}>
              {lokerTranding.map((item, index) => (
                <List aria-label="contacts" disablePadding key={index}>
                  <ItemCustom onClick={() => dispatch(setActiveStep("all"))}>
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
          {/* Chart Line Pertumbuhan Anggota */}
          <BoxWrapper style={{ height: "267px" }}>
            <TitleBar>Pertumbuhan Anggota</TitleBar>
            <ChartLine />
          </BoxWrapper>

          {/* Chart Donat Jumlah Anggota */}
          <BoxWrapper>
            <TitleBar>Jumlah Anggota</TitleBar>
            <ChartWrap>
              <Chart
                data={dataChart1}
                description="Total : 100"
                title="Semua"
              />
              <Chart
                data={dataChart2}
                description="Total : 100"
                title="Jenis Kelamin"
              />
              <Chart
                data={dataChart3}
                description="Total : 100"
                title="Rentang Usia"
              />
            </ChartWrap>
          </BoxWrapper>
        </ContentWrapper>
      </RowWrapper>

      {/* Popup Konfirmasi Hapus Grup */}
      <PopUp
        open={popupConfirm}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={groupSuccess}
        type="choice"
        onClose={() => setPopupConfirm(false)}
        onClickAction={() => {
          setPopupConfirm(false);
          setPopupDelete(true);
        }}
        title="Konfirmasi"
        info="Apakah anda yakin inigin hapus grup ini ?"
        buttonWord="Setujui"
      />

      {/* Popup Hapus Grup */}
      <PopUp
        open={popupDelete}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={groupSuccess}
        onClose={() => setPopupDelete(false)}
        onClickAction={() => setPopupDelete(false)}
        title="Berhasil hapus"
        info="Berhasil menghapus grup."
      />

      {/* Popup Berhasil Perbarui */}
      <PopUp
        open={popupUpdate}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={groupSuccess}
        onClose={() => setPopupUpdate(false)}
        onClickAction={() => setPopupUpdate(false)}
        title="Berhasil"
        info="Grup berhasil diperbaharui"
      />
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const ItemWrap = styled("div")(() => ({
  backgroundColor: "#F4F7FB",
  borderRadius: "5px",
  padding: "12px 10px",
  display: "flex",
  justifyContent: "space-between",
}));

const ImageWrap = styled("div")(() => ({
  display: "flex",
  gap: "7px",
  alignItems: "center",
}));

const ChartWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  height: "100%",
  alignItems: "center",
  paddingBottom: "30px",
}));

const RowWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  width: "100%",
}));

const TextBannerWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignSelf: "center",
  marginTop: "40px",
}));

const InfoBannerWrap = styled("div")(() => ({
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
  height: "180px",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "10px",
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

const InfoWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "11px",
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

const BannerWrap = styled("div")(() => ({
  bottom: "0",
  background: "rgba(0, 0, 0, 0.5)",
  color: "#f1f1f1",
  width: "100%",
  position: "relative",
  margin: "0 auto",
  boxSizing: "border-box",
  borderRadius: "10px",
}));

const TitleBar = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

export default ProfilGroup;
