// Page Data Pengguna
// --------------------------------------------------------

import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import Button from "../../../components/Button";

// Asset
import adornmentGreen from "../../../assets/img/adornment-green.png";
import adornmentRed from "../../../assets/img/adornment-red.png";
import adornmentBlue from "../../../assets/img/adornment-blue.png";
import adornmentOrange from "../../../assets/img/adornment-orange.png";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardUsers,
  getDetailDataPengguna,
  setActiveStep,
} from "../../../store/actions/dataPengguna";

const DataPengguna = ({ setHistory, setId_user }) => {
  const dispatch = useDispatch();
  const { dashboardUsers } = useSelector((state) => state.dataPengguna);

  useEffect(() => {
    dispatch(getDashboardUsers());
  }, [dispatch]);

  const dataHeader = [
    {
      title: "No",
      key: "id_user",
      width: 30,
      center: true,
    },
    {
      title: "Profile",
      key: "profile",
      render: (rowData) => (
        <>
          {rowData.foto_profile ? (
            <img
              src={rowData.foto_profile}
              alt="profile"
              style={{
                width: "24px",
                height: "24px",
                border: "1px solid rgba(48, 68, 241, 0.87)",
                borderRadius: "100%",
              }}
            />
          ) : (
            "No Image"
          )}
        </>
      ),
      width: 40,
      center: true,
    },
    {
      title: "Nama Lengkap",
      key: "full_name",
    },
    {
      title: "Jenis Kelamin",
      key: "gender",
      center: true,
      render: (rowData) => (
        <p>
          {rowData.gender === "0"
            ? "Pria"
            : rowData.gender === "1"
            ? "Wanita"
            : "-"}
        </p>
      ),
    },
    {
      title: "Kota",
      key: "city",
      center: true,
    },
    {
      title: "Telepon",
      key: "phone",
      center: true,
    },
    {
      title: "Email",
      key: "email",
      center: true,
    },
    {
      title: "Status",
      key: "is_status",
      width: 120,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rowData.is_status === "0" ? (
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
              Aktif
            </div>
          ) : (
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
              Tidak Aktif
            </div>
          )}
        </div>
      ),
      center: true,
    },
    {
      title: "Usia",
      key: "age",
      center: true,
      width: 50,
      render: (rowData) => <p>{rowData.age ? rowData.age + " Thn" : "-"}</p>,
    },
    {
      title: "Aksi",
      key: "action",
      render: (rowData) => (
        <Button
          variant="contained"
          borderRadius="5px"
          padding="0px 7px 0px 9px"
          onClick={() => {
            dispatch(getDetailDataPengguna(rowData.id_user));
            setHistory("page");
          }}
        >
          {rowData.action}
          <img src={eye} alt="eye" />
        </Button>
      ),
      center: true,
    },
  ];

  return (
    <Container>
      <Title title={"Data Pengguna"} />

      {/* Summary Data */}
      <SumaryWrap>
        <Sumary>
          <img
            alt="adornment-green"
            src={adornmentGreen}
            width="40%"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />
          <ContentWrap>
            <TitleSummary>Aktif</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Aktif</DetailSummary>
              <ValueSummary>{dashboardUsers.total_active}</ValueSummary>
            </TextWrap>
          </ContentWrap>
        </Sumary>
        <Sumary>
          <img
            alt="adornment-green"
            src={adornmentRed}
            width="40%"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />
          <ContentWrap>
            <TitleSummary>Nonaktif</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Nonaktif</DetailSummary>
              <ValueSummary>{dashboardUsers.total_nonactive}</ValueSummary>
            </TextWrap>
          </ContentWrap>
        </Sumary>
        <Sumary>
          <img
            alt="adornment-green"
            src={adornmentBlue}
            width="40%"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />
          <ContentWrap>
            <TitleSummary>Pria</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Pria</DetailSummary>
              <ValueSummary>{dashboardUsers.male}</ValueSummary>
            </TextWrap>
          </ContentWrap>
        </Sumary>
        <Sumary>
          <img
            alt="adornment-green"
            src={adornmentOrange}
            width="40%"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />
          <ContentWrap>
            <TitleSummary>Wanita</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Wanita</DetailSummary>
              <ValueSummary>{dashboardUsers.famale}</ValueSummary>
            </TextWrap>
          </ContentWrap>
        </Sumary>
      </SumaryWrap>

      {/* Tabel */}
      <Table
        dataContent={dashboardUsers.user_list}
        headerContent={dataHeader}
        // onClickRow={actionClickHandler}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#7B87AF" }}>Menampilkan 10 dari 500 baris</p>
        <TextSeeAll onClick={() => dispatch(setActiveStep("all"))}>
          Lihat Semua
        </TextSeeAll>
      </div>
    </Container>
  );
};

const TextSeeAll = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "15px",
  lineHeight: "18px",
  color: "#115AAA",
  cursor: "pointer",
}));

const Container = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  flexDirection: "column",
}));

const SumaryWrap = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

const Sumary = styled("div")(() => ({
  display: "flex",
  backgroundColor: "white",
  borderRadius: "10px",
  justifyContent: "space-between",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  alignItems: "center",
  cursor: "pointer",
  width: "25%",
  height: "fit-content",
  minWidth: "200px",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  gap: "5px",
}));

const TextWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const TitleSummary = styled("p")(() => ({
  fontWeight: 600,
  fontSize: "15px",
  lineHeight: "18px",
}));

const ValueSummary = styled("p")(() => ({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "20px",
  paddingRight: "20px",
}));

const DetailSummary = styled("p")(() => ({
  fontWeight: 600,
  fontSize: "15px",
  lineHeight: "18px",
  color: "#A0A0A0",
}));

export default DataPengguna;
