// Page Detail Proyek
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "../../../components/Table";
import { TextareaAutosize } from "@mui/material";

// Asset
import { ReactComponent as IconArrowRight } from "../../../assets/icon/icon-arrow-right.svg";
import { ReactComponent as IconBarWhite } from "../../../assets/icon/icon-bar-white.svg";
import { ReactComponent as IconBarBlue } from "../../../assets/icon/icon-bar-blue.svg";
import { ReactComponent as IconSuccessCheck } from "../../../assets/icon/icon-success-check.svg";
import { ReactComponent as IconSendChat } from "../../../assets/icon/icon-send-chat.svg";
import eye from "../../../assets/icon/Eye.svg";
import profilePict from "../../../assets/img/profile-chat.png";

// Dummy
import { dataTask } from "./DataDummy";
import InputText from "../../../components/InputText";
import Progress from "../../../components/Progress";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "block", alignItems: "center" }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          mr: 1,
          "& .MuiLinearProgress-bar": {
            backgroundColor: props.colors,
            borderRadius: "2px",
          },
        }}
      >
        <LinearProgress
          variant="determinate"
          style={{
            backgroundColor: "#E5E5E5",
            borderRadius: "2px",
          }}
          {...props}
        />
      </Box>
    </Box>
  );
}

const DetailProyek = ({ setActiveStep }) => {
  const [tabSelect, setTabSelect] = useState(1);

  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 20,
      center: true,
    },
    {
      title: "Judul Task",
      width: 250,
      key: "title",
    },
    {
      title: "Deskripsi",
      width: 250,
      key: "description",
    },
    {
      title: "Petugas",
      key: "officer",
      center: true,
    },
    {
      title: "Status",
      width: 160,
      center: true,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rowData.status === "Sudah Dikerjakan" ? (
            <div
              style={{
                border: "1px solid #039C40",
                backgroundColor: "#AEF8AC",
                borderRadius: "30px",
                padding: "4px 20px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#039C40",
              }}
            >
              {rowData.status}
            </div>
          ) : rowData.status === "Sedang Berjalan" ? (
            <div
              style={{
                border: "1px solid #C80707",
                backgroundColor: "#F5969633",
                borderRadius: "30px",
                padding: "4px 20px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#C80707",
              }}
            >
              {rowData.status}
            </div>
          ) : (
            <div
              style={{
                border: "1px solid #2C4AE9",
                backgroundColor: "#B5BEE94A",
                borderRadius: "30px",
                padding: "4px 20px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#2C4AE9",
              }}
            >
              {rowData.status}
            </div>
          )}
        </div>
      ),
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
          >
            Detail
            <img src={eye} alt="eye" />
          </Button>
        </div>
      ),
      center: true,
    },
  ];

  return (
    <React.Fragment>
      <Title>
        Usaha Studio Foto dan video..
        <IconArrowRight />
        <StatusWrap>Planing</StatusWrap>
      </Title>
      <Container>
        <Tab>
          <div>
            <Button
              borderRadius="0px"
              padding="10px"
              border="1px solid #115ABE"
              color={tabSelect !== 1 ? "white" : "#115ABE"}
              sx={{
                color: `${tabSelect !== 1 && "#115ABE"}`,
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
              }}
              onClick={() => setTabSelect(1)}
            >
              <div style={{ display: "flex", gap: "16px" }}>
                {tabSelect !== 1 ? <IconBarBlue /> : <IconBarWhite />}
                Ringkasan Proyek
              </div>
            </Button>
            <Button
              borderRadius="0px"
              padding="10px"
              border="1px solid #115ABE"
              color={tabSelect !== 2 ? "white" : "#115ABE"}
              sx={{
                color: `${tabSelect !== 2 && "#115ABE"}`,
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
              }}
              onClick={() => setTabSelect(2)}
            >
              <div style={{ display: "flex", gap: "16px" }}>
                {tabSelect !== 2 ? <IconBarBlue /> : <IconBarWhite />}Daftar
                Tugas
              </div>
            </Button>
            <Button
              borderRadius="0px"
              padding="10px"
              border="1px solid #115ABE"
              color={tabSelect !== 3 ? "white" : "#115ABE"}
              sx={{
                color: `${tabSelect !== 3 && "#115ABE"}`,
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
              }}
              onClick={() => setTabSelect(3)}
            >
              <div style={{ display: "flex", gap: "16px" }}>
                {tabSelect !== 3 ? <IconBarBlue /> : <IconBarWhite />}
                Diskusi Diskusi
              </div>
            </Button>
          </div>
        </Tab>

        {tabSelect === 1 ? (
          <div
            style={{
              display: "flex",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              style={{
                width: "55%",
                padding: "10px 40px 10px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "13px",
              }}
            >
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#979696",
                }}
              >
                #Ringkasan
              </p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#434242",
                  }}
                >
                  <div style={{ display: "flex", fontWeight: 500 }}>
                    <p style={{ width: "150px" }}>Pembuat Proyek</p>
                    <p>: Muh Arifandi</p>
                  </div>
                  <div style={{ display: "flex", fontWeight: 500 }}>
                    <p style={{ width: "150px" }}>Step Proyek</p>
                    <p>: Planing</p>
                  </div>
                  <div style={{ display: "flex", fontWeight: 500 }}>
                    <p style={{ width: "150px" }}>Jenis Proyek</p>
                    <p>: Publik</p>
                  </div>
                  <div style={{ display: "flex", fontWeight: 500 }}>
                    <p style={{ width: "150px" }}>Tanggal Mulai</p>
                    <p>: 20 September 2022</p>
                  </div>
                  <div style={{ display: "flex", fontWeight: 500 }}>
                    <p style={{ minWidth: "150px" }}>Tanggal Selesai</p>
                    <p>: 20 September 2023</p>
                  </div>
                  <div style={{ display: "flex", fontWeight: 500 }}>
                    <p style={{ minWidth: "150px" }}>Lokasi Proyek</p>
                    <p>: Yogyakarta</p>
                  </div>
                </div>
                <Progress />
              </div>
              <div style={{ display: "flex", fontWeight: 500 }}>
                <p style={{ minWidth: "150px" }}>Deskripsi Proyek</p>
                <TextareaAutosize
                  aria-label="minimum height"
                  value="Dalam proses Proyek pembangunan dan proyek lainnya yang terdiri dari berbagai langkah yang rumit dan banyak sebuah pengawasan baik kepada stakeholder dan sub-kontraktor merupakan hal yang penting. Dalam pengawasan tersebut, Presentasi yang terbaik dalam menggambarkan tahap / fase terkini dalam proyek yaitu melalui video. Dalam Video proyek, dapat digambarkan secara baik pada tahap dan kendala-kendala yang sedang dihadapi."
                  minRows={10}
                  spellCheck={false}
                  style={{
                    width: "100%",
                    marginLeft: "3px",
                    backgroundColor: "rgba(217, 217, 217, 0.2)",
                    border: "1px solid #E5E5E5",
                    borderRadius: "10px",
                    padding: "10px",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#434242",
                  }}
                />
              </div>
            </div>
            <div style={{ border: "1px solid #F1F1F1" }} />
            <div
              style={{
                width: "45%",
                padding: "40px 14px 10px 13px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  1 / 20 Buka Tugas
                  <IconSuccessCheck height={24} width={24} />
                </div>
                <LinearProgressWithLabel value={25} colors="#115ABE" />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  0 / 30 Waktu Tersisa
                  <IconSuccessCheck height={24} width={24} />
                </div>
                <LinearProgressWithLabel value={7} colors="#219653" />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  200 Anggota
                  <IconSuccessCheck height={24} width={24} />
                </div>
                <LinearProgressWithLabel value={100} colors="#EB5757" />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Planing
                  <IconSuccessCheck height={24} width={24} />
                </div>
                <LinearProgressWithLabel value={100} colors="#2D9CDB" />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Organizer
                  <IconSuccessCheck height={24} width={24} />
                </div>
                <LinearProgressWithLabel value={100} colors="#7B61FF" />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Mentoring
                  <IconSuccessCheck height={24} width={24} />
                </div>
                <LinearProgressWithLabel value={100} colors="#FFCC05" />
              </div>
            </div>
          </div>
        ) : tabSelect === 2 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <Table headerContent={dataHeader} dataContent={dataTask} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#7B87AF" }}>Menampilkan 10 dari 500 baris</p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#115AAA",
                  cursor: "pointer",
                }}
              >
                Lihat Semua
              </p>
            </div>
          </div>
        ) : (
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
                <img
                  alt="profile-chat"
                  src={profilePict}
                  height={40}
                  width={40}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#EDEDED",
                      padding: "6px 12px 10px 8px",
                      borderRadius: "5px",
                      maxWidth: "387px",
                    }}
                  >
                    Saya hanya tinggal 1 task belum terselesaikan karena kemarin
                    ada kendala
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
                <img
                  alt="profile-chat"
                  src={profilePict}
                  height={40}
                  width={40}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#EDEDED",
                      padding: "6px 12px 10px 8px",
                      borderRadius: "5px",
                      maxWidth: "387px",
                    }}
                  >
                    Bagus, Task saya juga sudah selesai semuanya. Untuk yang
                    lain sudah sampai mana?
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
                    Iyap, saya sudah selesai dengan task saya, saya hanya
                    menunggu teman yang lain
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
        )}
      </Container>
    </React.Fragment>
  );
};

const Title = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  padding: "16px",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  margin: "-17px -17px 10px -17px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const Tab = styled("div")(() => ({
  display: "flex",
  backgroundColor: "#FFFFFF",
  boxShadow: "box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);",
  padding: "16px",
}));

const RowWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  width: "100%",
}));

const StatusWrap = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  padding: "4px 20px",
  backgroundColor: "#115ABE",
  borderRadius: "3px",
  color: "white",
  fontWeight: 500,
  fontSize: "13px",
}));

export default DetailProyek;