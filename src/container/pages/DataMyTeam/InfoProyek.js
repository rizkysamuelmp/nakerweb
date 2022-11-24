import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// Asset
import bannerImage from "../../../assets/img/banner-image.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_grup.svg";
import { ReactComponent as IconUser } from "../../../assets/icon/icon_user.svg";
import profilePost from "../../../assets/img/profile-post.png";
import Button from "../../../components/Button";

const InfoProyek = ({ setActiveStep }) => {
  return (
    <Container>
      {/* Title */}
      <Title title="Data Proyek" />

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
            <p>Proyek di buat oleh @arifandi</p>
          </div>
        </div>
      </RowWrapper>

      <RowWrapper>
        <ContentWrapper style={{ width: "60%" }}>
          <TitleBar>
            <IconGroup height={24} width={24} />
            Info Projek
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
              <p style={{ width: "150px" }}>Nama projek</p>
              <p>: MONITORING PENYALURAN BLT BBM TAHAP 1</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Jenis projek</p>
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
            Info pembuat projek
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
      <RowWrapper style={{ justifyContent: "end" }}>
        <div style={{ width: "40%" }}>
          <Button full color="#039C40" onClick={() => setActiveStep("proyek")}>
            <p
              style={{ fontWeight: 600, fontSize: "18px", lineHeight: "22px" }}
            >
              Tampilkan proyek lengkap
            </p>
          </Button>
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

export default InfoProyek;
