import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PopUp from "../../../components/PopUp";
import Chart from "../../../components/Chart";

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

const ProfilGrup = ({ setActiveStep }) => {
  const lokerTranding = [
    {
      name: "Belum Disetujui",
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

  const dataChart1 = [
    {
      data: [20, 40, 40],
      backgroundColor: ["#FFBF0B", "#03B74B", "#FE4747"],
      borderColor: ["#FFBF0B", "#03B74B", "#FE4747"],
      borderWidth: 1,
      label: [
        {
          title: "Belum Disetujui",
          color: "#FFBF0B",
        },
        {
          title: "Aktif",
          color: "#03B74B",
        },
        {
          title: "Ditolak/Diblokir",
          color: "#FE4747",
        },
      ],
    },
  ];

  const dataChart2 = [
    {
      data: [60, 40],
      backgroundColor: ["#FFBF0B", "#FA3E3E"],
      borderColor: ["#FFBF0B", "#FA3E3E"],
      borderWidth: 1,
      label: [
        {
          title: "Laki-Laki",
          color: "#FFBF0B",
        },
        {
          title: "Perempuan",
          color: "#FA3E3E",
        },
      ],
    },
  ];

  const dataChart3 = [
    {
      data: [25, 25, 25, 25],
      backgroundColor: ["#115ABE", "#03B74B", "#FFBF0B", "#FA3E3E"],
      borderColor: ["#115ABE", "#03B74B", "#FFBF0B", "#FA3E3E"],
      borderWidth: 1,
      label: [
        {
          title: "Dewasa",
          color: "#115ABE",
        },
        {
          title: "Muda",
          color: "#03B74B",
        },
        {
          title: "Anak-anak",
          color: "#FFBF0B",
        },
        {
          title: "Pensiun",
          color: "#FA3E3E",
        },
      ],
    },
  ];

  const [menuEdit, setMenuEdit] = useState(null);
  const [popupConfirm, setPopupConfirm] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);

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
              onClick={() => setPopupUpdate(true)}
              sx={{ padding: "11px 18px" }}
            >
              Perbarui Grup
            </MenuItem>
            <div style={{ border: "1px solid #E5E5E5" }} />
            <MenuItem
              onClick={() => setMenuEdit(null)}
              sx={{ padding: "11px 18px" }}
            >
              Nonaktifkan Grup
            </MenuItem>
            <MenuItem
              onClick={() => setPopupConfirm(true)}
              sx={{ padding: "11px 18px" }}
            >
              Hapus Grup
            </MenuItem>
          </Menu>
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
          <BoxWrapper>
            <TitleBar>Jumlah Anggota</TitleBar>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "100%",
                alignItems: "center",
                paddingBottom: "30px",
              }}
            >
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
            </div>
          </BoxWrapper>
        </ContentWrapper>
      </RowWrapper>

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
