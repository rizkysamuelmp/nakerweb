// Page Detail Grup
// --------------------------------------------------------

import React, { useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
// import TextareaAutosize from "@mui/material/TextareaAutosize";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { actionRequest, setActiveStep } from "../../../store/actions/dataGroup";

// Asset
import bannerImage from "../../../assets/img/banner-image.png";
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_grup.svg";
import { ReactComponent as IconUser } from "../../../assets/icon/icon_user.svg";
import Button from "../../../components/Button";
import PopUp from "../../../components/PopUp";
import deleteGroup from "../../../assets/img/group-delete.png";
import groupSuccess from "../../../assets/img/group-success.png";

const DetailGroup = ({ history }) => {
  const dispatch = useDispatch();

  const [poupKonfSetuju, setPopUpKonfSetuju] = useState(false);
  const [poUpSetuju, setPopUpSetuju] = useState(false);
  const [popUpKonfTolak, setPopKonfTolak] = useState(false);
  const [popUpTolak, setPopUpTolak] = useState(false);

  const { user_info, grup_info } = useSelector(
    (state) => state.dataGroup.requestDetail
  );

  return (
    <Container>
      {/* Title */}
      <Title
        title="Data Grup"
        withBack
        onBack={() => {
          if (history === "page") {
            dispatch(setActiveStep("page"));
          } else {
            dispatch(setActiveStep("all"));
          }
        }}
      />

      {/* Banner Image */}
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
            src={grup_info.group_cover}
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
            {/* <p>Grup di buat oleh @{user_info.full_name}</p> */}
          </div>
        </div>
      </RowWrapper>

      {/* Info Grup */}
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
              <p>: {grup_info.group_name}</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Kategori grup</p>
              <p>: {grup_info.category_name}</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Jenis grup</p>
              <p>: {grup_info.group_privacy === "1" ? "Private" : "Publik"}</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ width: "150px" }}>Tanggal dibuat</p>
              <p>: {grup_info.create_at.split(" ", 1)}</p>
            </div>
            <div style={{ display: "flex", fontWeight: 500 }}>
              <p style={{ minWidth: "150px" }}>Deskripsi</p>:
              {/* <TextareaAutosize
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
              /> */}
              {/* <p>{grup_info.group_about}</p> */}
            </div>
          </div>

          <div
            style={{
              // width: "60%",
              display: "flex",
              padding: "20px 20px 0 20px",
              justifyContent: "space-between",
            }}
          >
            {grup_info.group_status === "2" && (
              <>
                <Button onClick={() => setPopUpKonfSetuju(true)}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  >
                    Setujui
                  </p>
                </Button>
                <Button color="#E20000" onClick={() => setPopKonfTolak(true)}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  >
                    Tolak
                  </p>
                </Button>
              </>
            )}
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
            <img
              alt="profile-post"
              src={user_info.foto_profile}
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "100%",
              }}
            />
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
              <p>@{user_info.full_name}</p>
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
              <p>{user_info.full_name}</p>
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
              <p>{user_info.email}</p>
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
                Alamat
              </p>
              <p>{user_info.address}</p>
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
                Nomor HP
              </p>
              <p>{"+" + user_info.phone}</p>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Button
              full
              color="#039C40"
              onClick={() => {
                // dispatch(setActiveStep("grup"));
                console.log("klik");
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                }}
              >
                Tampilkan profile lengkap
              </p>
            </Button>
          </div>
        </ContentWrapper>
      </RowWrapper>
      <RowWrapper></RowWrapper>

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
          dispatch(actionRequest(grup_info.group_id, 1));
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
        onClickAction={() => {
          setPopUpSetuju(false);
        }}
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
          dispatch(actionRequest(grup_info.group_id, 3));
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

export default DetailGroup;
