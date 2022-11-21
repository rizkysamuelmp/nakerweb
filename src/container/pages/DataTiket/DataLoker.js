import { styled } from "@mui/material/styles";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import Title from "../../../components/Title";
import { dataContent, dataHeader } from "./dataDummy";
import Button from "../../../components/Button";

// Assets
import checkedMale from "../../../assets/icon/CheckedMale.svg";
import unCgeckMale from "../../../assets/icon/UnCheckedMale.svg";
import madMan from "../../../assets/icon/MadMan.svg";
import female from "../../../assets/icon/Female.svg";
import gradient1 from "../../../assets/icon/gradient1.svg";

const dataSummary = {
  user: 250,
  group: 230,
  blueCoral: 230,
  myTeam: 230,
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-image: url("../../../assets/icon/gradient1.svg");
`;

const Content = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  backgroundColor: "white",
  // padding: "15px",
  borderRadius: "5px",
  justifyContent: "space-between",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  width: "25%",
  alignItems: "center",
  cursor: "pointer",
}));

const ContentWrapper = styled("div")(({}) => ({
  display: "flex",
  gap: "10px",
}));

const ImageWrapper = styled("div")(({ color }) => ({
  backgroundColor: "red",
  border: "1px solid red",
}));

const TextWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const Info = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#ACACAC",
}));

const TextValue = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#080911",
}));

const TextValueWrapper = styled("div")(() => ({
  display: "flex",
  alignSelf: "flex-end",
}));

const DataLoker = () => {
  return (
    <Container>
      {/* Title */}
      <Title title={"Data Tiket"} />
      <Button variant="contained">sad</Button>

      {/*New Summary */}
      <Content>
        <ContentWrapper>
          <ImageWrapper>
            <img src={checkedMale} alt="male" style={{ width: "100%" }} />
          </ImageWrapper>
          <TextWrapper>
            <Title>Data Grup</Title>
            <Info>Total Grup</Info>
          </TextWrapper>
        </ContentWrapper>
        <TextValueWrapper>
          <TextValue>{200}</TextValue>
        </TextValueWrapper>
      </Content>

      {/* Table */}
      <Table dataContent={dataContent} headerContent={dataHeader} />
      {/* Pagination */}
      <Pagination count={10} currentData={10} totalData={100} page={2} />
    </Container>
  );
};

export default DataLoker;
