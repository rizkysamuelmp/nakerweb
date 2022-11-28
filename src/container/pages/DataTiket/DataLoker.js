import { styled } from "@mui/material/styles";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import Button from "../../../components/Button";

// Assets
import adornmentGreen from "../../../assets/img/adornment-green.png";
import adornmentRed from "../../../assets/img/adornment-red.png";
import adornmentBlue from "../../../assets/img/adornment-blue.png";
import adornmentOrange from "../../../assets/img/adornment-orange.png";
import eye from "../../../assets/icon/Eye.svg";

// Dummy
import { dataContent } from "./dataDummy";

const DataLoker = ({ setActiveStep }) => {
  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
      center: true,
    },
    {
      title: "Judul",
      key: "title",
    },
    {
      title: "Pengirim",
      key: "sender",
    },
    {
      title: "Status",
      key: "status",
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
          {rowData.status === "Aktif" ? (
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
              {rowData.status}
            </div>
          )}
        </div>
      ),
      center: true,
    },
    {
      title: "Tgl kirim",
      key: "deliveryDate",
      center: true,
    },
    {
      title: "Balasan terakhir",
      key: "lastReply",
      center: true,
    },
    {
      title: "Prioritas",
      key: "priority",
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rowData.priority === "Hight" ? (
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
              {rowData.priority}
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
              {rowData.priority}
            </div>
          )}
        </div>
      ),
      center: true,
    },
    {
      title: "Aksi",
      key: "action",
      render: (rowData) => (
        <Button
          variant="contained"
          borderRadius="5px"
          padding="0px 7px 0px 9px"
          onClick={() => setActiveStep("masalah")}
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
      {/* Title */}
      <Title title={"Data Tiket"} />

      {/*Summary */}
      <SumaryWrap>
        <Sumary>
          <img
            alt="adornment-green"
            src={adornmentGreen}
            width="40%"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />
          <ContentWrap>
            <TitleSummary>Selesai</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Tiket</DetailSummary>
              <ValueSummary>260</ValueSummary>
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
            <TitleSummary>Baru</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Tiket</DetailSummary>
              <ValueSummary>260</ValueSummary>
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
            <TitleSummary>Menunggu</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Tiket</DetailSummary>
              <ValueSummary>260</ValueSummary>
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
            <TitleSummary>Sudah Di jawab</TitleSummary>
            <TextWrap>
              <DetailSummary>Total Tiket</DetailSummary>
              <ValueSummary>260</ValueSummary>
            </TextWrap>
          </ContentWrap>
        </Sumary>
      </SumaryWrap>

      {/* Table */}
      <Table dataContent={dataContent} headerContent={dataHeader} />
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
          onClick={() => setActiveStep("detail")}
        >
          Lihat Semua
        </p>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-image: url("../../../assets/icon/gradient1.svg");
`;

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

export default DataLoker;
