import React, { useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// Asset
import bannerImage from "../../../assets/img/banner-image.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_grup.svg";
import { ReactComponent as IconUser } from "../../../assets/icon/icon_user.svg";
import profilePost from "../../../assets/img/profile-post.png";
import Button from "../../../components/Button";
import PopUp from "../../../components/PopUp";
import deleteGroup from "../../../assets/img/group-delete.png";
import groupSuccess from "../../../assets/img/group-success.png";

const DetailGrup = ({ setActiveStep }) => {
  const [poupKonfSetuju, setPopUpKonfSetuju] = useState(false);
  const [poUpSetuju, setPopUpSetuju] = useState(false);
  const [popUpKonfTolak, setPopKonfTolak] = useState(false);
  const [popUpTolak, setPopUpTolak] = useState(false);

  return (
    <Container>
      {/* Title */}
      <Title title="Data Grup" />

      <RowWrapper>
        <div
          style={{
            bottom: "0",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#f1f1f1",
            width: "100%",
            position: "relative",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          <img
            src={bannerImage}
            alt="Notebook"
            style={{
              width: "100%",
              verticalAlign: "middle",
              objectFit: "cover",
            }}
            height={205}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              background: "rgba(17, 90, 190, 0.7)",
              color: "#f1f1f1",
              width: "100%",
              padding: "11px 20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "18px",
            }}
          >
            <p>Grup di buat oleh @arifandi</p>
          </div>
        </div>
      </RowWrapper>

      <RowWrapper>
        <ContentWrapper style={{ width: "60%" }}>
          <TitleBar>
            <IconGroup height={24} width={24} />
            Info Grup
          </TitleBar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: "30px",
            }}
          >
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Nama grup</p>
              <p>: Syarikat Indonesia</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Kategori grup</p>
              <p>: Syarikat pekerja</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Jenis grup</p>
              <p>: Publik</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Tanggal dibuat</p>
              <p>: 06 Agustus 2022</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ minWidth: "150px" }}>Deskripsi</p>:
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                style={{
                  width: "100%",
                  marginLeft: "3px",
                  backgroundColor: "rgba(217, 217, 217, 0.2)",
                  border: "1px solid #E5E5E5",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </ContentWrapper>

        <ContentWrapper style={{ width: "40%" }}>
          <TitleBar>
            <IconUser height={24} width={24} />
            Info pembuat grup
          </TitleBar>

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              fontWeight: 500,
            }}
          >
            <img alt="profile-post" src={profilePost} height={70} width={70} />
            <div
              style={{ display: "flex", gap: "4px", flexDirection: "column" }}
            >
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#A1BDE3",
                  fontStyle: "italic",
                }}
              >
                Username
              </p>
              <p>@arifandi</p>
            </div>
          </div>

          <div
            style={{
              marginLeft: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{ display: "flex", gap: "4px", flexDirection: "column" }}
            >
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#A1BDE3",
                  fontStyle: "italic",
                }}
              >
                Nama Lengkap
              </p>
              <p>Muh. Arifandi</p>
            </div>
            <div
              style={{ display: "flex", gap: "4px", flexDirection: "column" }}
            >
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#A1BDE3",
                  fontStyle: "italic",
                }}
              >
                Email
              </p>
              <p>arif76440@gmail.com</p>
            </div>
            <div
              style={{ display: "flex", gap: "4px", flexDirection: "column" }}
            >
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#A1BDE3",
                  fontStyle: "italic",
                }}
              >
                Tanggal bergabung
              </p>
              <p>06 Agustus 2021</p>
            </div>
            <div
              style={{ display: "flex", gap: "4px", flexDirection: "column" }}
            >
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#A1BDE3",
                  fontStyle: "italic",
                }}
              >
                Warga negara
              </p>
              <p>Indonesia</p>
            </div>
          </div>
        </ContentWrapper>
      </RowWrapper>
      <RowWrapper>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={() => setPopUpKonfSetuju(true)}>
            <p
              style={{ fontWeight: 600, fontSize: "18px", lineHeight: "22px" }}
            >
              Setujui
            </p>
          </Button>
          <Button color="#E20000" onClick={() => setPopKonfTolak(true)}>
            <p
              style={{ fontWeight: 600, fontSize: "18px", lineHeight: "22px" }}
            >
              Tolak
            </p>
          </Button>
        </div>
        <div style={{ width: "40%" }}>
          <Button full color="#039C40" onClick={() => setActiveStep("grup")}>
            <p
              style={{ fontWeight: 600, fontSize: "18px", lineHeight: "22px" }}
            >
              Tampilakn profile lengkap
            </p>
          </Button>
        </div>
      </RowWrapper>

      {/* Konfirmasi Persetujuan */}
      <PopUp
        open={poupKonfSetuju}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={groupSuccess}
        type="choice"
        onClose={() => setPopUpKonfSetuju(false)}
        onClickAction={() => {
          setPopUpKonfSetuju(false);
          setPopUpSetuju(true);
        }}
        title="Konfirmasi Persetujuan"
        info="Apakah anda yakin ingin setujui permintaan ini ?"
        buttonWord="Setujui"
      />
      {/* Disetujui */}
      <PopUp
        open={poUpSetuju}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={groupSuccess}
        onClose={() => setPopUpSetuju(false)}
        onClickAction={() => setPopUpSetuju(false)}
        title="Permintaan Disetujui"
        info="Permintaan pembuatan grup berhasil disetujui."
      />
      {/* Konfirmasi Tolak */}
      <PopUp
        open={popUpKonfTolak}
        type="choice"
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={deleteGroup}
        onClose={() => setPopKonfTolak(false)}
        onClickAction={() => {
          setPopKonfTolak(false);
          setPopUpTolak(true);
        }}
        title="Konfirmasi"
        info="Apakah anda yakin inigin hapus grup ini ?"
      />
      {/* Ditolak */}
      <PopUp
        open={popUpTolak}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={deleteGroup}
        onClose={() => setPopUpTolak(false)}
        onClickAction={() => setPopUpTolak(false)}
        title="Berhasil tolak"
        info="Berhasil menolak pembuatan grup."
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

const ContentWrapper = styled("div")(() => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
  minHeight: "267px",
  height: "fit-content",
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
  color: "#115AAA",
  display: "flex",
  gap: "8px",
  alignItems: "center",
}));

export default DetailGrup;
