import React from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";

// Asset
import imagePost from "../../../assets/img/img-detail-post.png";
import imageProfile from "../../../assets/img/img-profile.png";
import InputText from "../../../components/InputText";
import Button from "../../../components/Button";
import { ReactComponent as BlueThumb } from "../../../assets/icon/icon-blue-thumb.svg";
import { ReactComponent as ShareGray } from "../../../assets/icon/icon-share-gray.svg";
import profilePict from "../../../assets/img/profile-chat.png";
import { ReactComponent as IconSendChat } from "../../../assets/icon/icon-send-chat.svg";

const DetailPostingan = ({ setActiveStep }) => {
  return (
    <Container>
      {/* Title */}
      <Title title="Postingan" />

      {/* Image & Post */}
      <RowWrapper>
        <ContentWrapper style={{ width: "65%" }}>
          <img
            alt="img-post"
            src={imagePost}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
          />
        </ContentWrapper>
        <ContentWrapper
          style={{
            width: "35%",
            maxHeight: "fit-content",
            height: "fit-content",
            minHeight: "267px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "23px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "15px",
            }}
          >
            <img
              alt="profile-img"
              src={imageProfile}
              height="52px"
              width="52px"
            />
            Denny Suhendro
          </div>
          <div>
            <p
              style={{
                whiteSpace: "pre-wrap",
                maxWidth: "fit-content",
                height: "fit-content",
              }}
            >
              Task untuk membuat tampilan User Interface mobile dalam rang tugas
              kelompok ujian akhir semester. Agar kita bisa lulus bersamaan ,
              diusahakan semua orang membantu dalam pembuatan task ini{" "}
            </p>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button
              full
              borderRadius="50px"
              color="#FAFAFA"
              border="1px solid #EDEDED"
            >
              <BlueThumb />
              <p style={{ color: "black" }}>1890</p>
            </Button>
            <Button
              full
              borderRadius="50px"
              color="#FAFAFA"
              border="1px solid #EDEDED"
            >
              <ShareGray />
              <p style={{ color: "black" }}>1890</p>
            </Button>
          </div>
        </ContentWrapper>
      </RowWrapper>

      <RowWrapper style={{ flexDirection: "column", gap: "0px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            backgroundColor: "#115AD2",
            padding: "15px 35px",
            color: "#FFFFFF",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Ruang Diskusi
        </div>

        <div
          style={{
            minHeight: "280px",
            height: "fit-content",
            backgroundColor: "#FAFAFA",
            padding: "27px 54px",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chat */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "16px",
            }}
          >
            <img alt="profile-chat" src={profilePict} height={40} width={40} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div
                style={{
                  backgroundColor: "#EDEDED",
                  padding: "6px 12px 10px 8px",
                  borderRadius: "5px",
                  maxWidth: "387px",
                }}
              >
                Saya hanya tinggal 1 task belum terselesaikan karena kemarin ada
                kendala
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <p style={{ marginRight: "8px", color: "#B3B3B3" }}>
                  56 menit yang lalu
                </p>
                <p style={{ cursor: "pointer", color: "#656363" }}>Suka</p>
                <p style={{ cursor: "pointer", color: "#656363" }}>Balas</p>
              </div>
              <p style={{ color: "#656363" }}>Lihat 1 balasan sebelumnya</p>
            </div>
          </div>
          {/* Chat */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "16px",
            }}
          >
            <img alt="profile-chat" src={profilePict} height={40} width={40} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div
                style={{
                  backgroundColor: "#EDEDED",
                  padding: "6px 12px 10px 8px",
                  borderRadius: "5px",
                  maxWidth: "387px",
                }}
              >
                Bagus, Task saya juga sudah selesai semuanya. Untuk yang lain
                sudah sampai mana?
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <p style={{ marginRight: "8px", color: "#B3B3B3" }}>
                  3 Jam yang lalu
                </p>
                <p style={{ cursor: "pointer", color: "#656363" }}>Suka</p>
                <p style={{ cursor: "pointer", color: "#656363" }}>Balas</p>
              </div>
            </div>
          </div>

          {/* Chat By Me */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "16px",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  backgroundColor: "#EDEDED",
                  padding: "6px 12px 10px 8px",
                  borderRadius: "5px",
                  maxWidth: "387px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Iyap, saya sudah selesai dengan task saya, saya hanya menunggu
                teman yang lain
                <p
                  style={{
                    fontSize: "10px",
                    color: "#969696",
                    width: "70px",
                    alignSelf: "end",
                  }}
                >
                  19:09 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "12px 54px",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <IconSendChat
            style={{
              marginLeft: "20px",
              position: "absolute",
              zIndex: "50",
              marginTop: "13px",
            }}
          />
          <InputText
            borderRadius="50px"
            placeholder="Berikan masukan pada anggota tim mu"
            endIcon
          />
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

export default DetailPostingan;
