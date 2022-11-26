import { styled } from "@mui/material/styles";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import { dataContent, dataHeader } from "./dataDummy";

// Assets
import adornmentGreen from "../../../assets/img/adornment-green.png";
import adornmentRed from "../../../assets/img/adornment-red.png";
import adornmentBlue from "../../../assets/img/adornment-blue.png";
import adornmentOrange from "../../../assets/img/adornment-orange.png";

const DataLoker = () => {
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

      {/* Pagination */}
      <Pagination count={10} currentData={10} totalData={100} page={2} />
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
