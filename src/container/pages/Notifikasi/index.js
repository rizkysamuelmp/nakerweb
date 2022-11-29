import React, { useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PageContainer from "../../../components/PageContainer";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";

// Asset
import eye from "../../../assets/icon/Eye.svg";

// Dummy Data
import { dataContentAll } from "./DataDummy";

const Notifikasi = ({ setActiveStep }) => {
  const dataHeaderAll = [
    {
      title: "No",
      key: "no",
      width: 30,
    },
    {
      title: "Judul",
      key: "title",
    },
    {
      title: "Jenis",
      key: "type",
    },
    {
      title: "Isi Notifikasi",
      key: "detail",
    },
    {
      title: "Aksi",
      width: 100,
      render: (rowData) => (
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
            Detail
            <img src={eye} alt="eye" />
          </Button>
        </div>
      ),
      center: true,
    },
  ];

  const [popUpAdd, setPopUpAdd] = useState(false);

  return (
    <PageContainer>
      <Container>
        {/* Title */}
        <Title title="Notifikasi">
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Button
              padding="12px"
              width="167px"
              borderRadius="5px"
              onClick={() => {
                setPopUpAdd(true);
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "white",
                }}
              >
                Tambah
              </p>
            </Button>
          </div>
        </Title>

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
            <Table headerContent={dataHeaderAll} dataContent={dataContentAll} />
            <Pagination count={10} currentData={10} totalData={100} page={2} />
          </div>
        </RowWrapper>

        <PopUpDialog
          open={popUpAdd}
          onClose={() => setPopUpAdd(false)}
          aria-labelledby="popup-dialog-title"
        >
          <DialogContentCustom>
            <InputWrap>
              <InpuTitle>Judul Notifikasi</InpuTitle>
              <InputText
                placeholder="Masukan judul notifikasi"
                borderRadius="0px"
                borderColor="#E4E4E4"
                backgroundColor="rgba(217, 217, 217, 0.1)"
                placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
              />
            </InputWrap>
            <InputWrap>
              <InpuTitle>Jenis Notifikasi</InpuTitle>
              <InputText
                placeholder="Pilih jenis notifikasi ex : (Grup, Social mwedia)"
                borderRadius="0px"
                borderColor="#E4E4E4"
                backgroundColor="rgba(217, 217, 217, 0.1)"
                placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
              />
            </InputWrap>
            <InputWrap>
              <InpuTitle>Isi Notifikasi</InpuTitle>
              <InputText
                placeholder="Silahkan isi pesan"
                borderRadius="0px"
                borderColor="#E4E4E4"
                backgroundColor="rgba(217, 217, 217, 0.1)"
                placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
              />
            </InputWrap>
          </DialogContentCustom>

          <DialogActionsCustom>
            <Button
              variant="contained"
              width="217px"
              borderRadius="5px"
              padding="13px"
              onClick={() => setPopUpAdd(false)}
            >
              <ButtonText>Buat notifikasi</ButtonText>
            </Button>
          </DialogActionsCustom>
        </PopUpDialog>
      </Container>
    </PageContainer>
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

const DialogActionsCustom = styled(DialogActions)(() => ({
  padding: "0px",
  display: "flex",
  justifyContent: "end",
}));

const DialogContentCustom = styled(DialogContent)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "50px",
  backgroundColor: "white",
  borderRadius: "10px",
}));

const InputWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
}));

const ButtonText = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#FFFFFF",
}));

const InpuTitle = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  letterSpacing: "0.01em",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#000000",
}));

const PopUpDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "674px",
    borderRadius: "10px",
    height: "fit-content",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#F4F7FB",
  },
}));

export default Notifikasi;
