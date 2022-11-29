import React from "react";
import { styled } from "@mui/material/styles";
import Title from "../../../components/Title";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Summary from "../../../components/Summary";
import PageContainer from "../../../components/PageContainer";

// Assets
import arrowRight from "../../../assets/icon/arrow-right.svg";
import profile from "../../../assets/img/profile.png";
import survey from "../../../assets/icon/survey.svg";

// Dummy Data
import { notification } from "./DataDummy";
import Chart from "../../../components/Chart";

const Dashboard = () => {
  // Data Dummy untuk chart
  const dataChart1 = [
    {
      data: [20, 40, 40],
      backgroundColor: ["#FFBF0B", "#03B74B", "#FE4747"],
      borderColor: ["#FFBF0B", "#03B74B", "#FE4747"],
      borderWidth: 1,
      label: [
        {
          title: "Pengguna Diblokir",
          detail: "10 Pengguna",
          color: "#FFBF0B",
        },
        {
          title: "Penggun Belum verifikasi",
          detail: "150 Pengguna",
          color: "#03B74B",
        },
        {
          title: "Penggun terverifikasi",
          detail: "30 Pengguna",
          color: "#FE4747",
        },
      ],
    },
  ];

  const dataChart2 = [
    {
      data: [20, 40, 40],
      backgroundColor: ["#FF710B", "#03B74B", "#6147FE"],
      borderColor: ["#FF710B", "#03B74B", "#6147FE"],
      borderWidth: 1,
      label: [
        {
          title: "Grup Disetujui",
          detail: "10 Pengguna",
          color: "#FF710B",
        },
        {
          title: "Grup Belum verifikasi",
          detail: "150 Pengguna",
          color: "#03B74B",
        },
        {
          title: "Grup Ditolak",
          detail: "30 Pengguna",
          color: "#6147FE",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <Container>
        {/* Title Page */}
        <Title title="Dashboard" />

        <div style={{ marginTop: "20px" }}>
          {/* Summary */}
          <Summary />

          {/* Grid Container */}
          <GridContainer>
            {/* Chart Component */}
            <ChartComponent>
              <TitleBar>Statistik Data Loker dan Grup</TitleBar>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <Chart data={dataChart1} description="230 Pengguna" />
                <Chart data={dataChart2} description="230 Grup" />
              </div>
            </ChartComponent>

            {/* Notification latest activity*/}
            <LatestActivity>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                {/* Title header latest activity */}
                <TitleBar>Aktivitas Terakhir</TitleBar>

                {/* Button to see other all activity */}
                <SeeOther>
                  <p>Lihat lainnya</p>
                  <img src={arrowRight} alt="" width={"15px"} />
                </SeeOther>
              </div>

              {/* Scroll view for see activity */}
              <ScrollView>
                {notification.map((item, index) => (
                  <List aria-label="contacts" disablePadding key={index}>
                    <ItemCustom>
                      <ContentWrap>
                        <img alt="person-trending" src={profile} />
                        <TextWrapper>
                          <span style={{ fontWeight: "600" }}>{item.name}</span>{" "}
                          <span>{item.text}</span> <span>{item.time}</span>
                        </TextWrapper>
                      </ContentWrap>
                    </ItemCustom>
                  </List>
                ))}
              </ScrollView>
            </LatestActivity>

            {/* List Project */}
            <ListProject>
              <TitleBar>Daftar Project</TitleBar>

              {/* Project Content */}
              <ProjectContent>
                <ProjectSection>
                  <ImageContainer color="#3b9cf1">
                    <img src={survey} alt="" />
                  </ImageContainer>
                  <div>
                    <TotalProject>123 Project</TotalProject>
                    <DescProject>Project Menunggu</DescProject>
                  </div>
                </ProjectSection>
                <ProjectSection>
                  <ImageContainer color="rgba(241, 59, 59, 0.83)">
                    <img src={survey} alt="" />
                  </ImageContainer>
                  <div>
                    <TotalProject>123 Project</TotalProject>
                    <DescProject>Project Ditolak</DescProject>
                  </div>
                </ProjectSection>
                <ProjectSection>
                  <ImageContainer color="rgba(42, 219, 13, 0.83);">
                    <img src={survey} alt="" />
                  </ImageContainer>
                  <div>
                    <TotalProject>123 Project</TotalProject>
                    <DescProject>Project Disetujui</DescProject>
                  </div>
                </ProjectSection>
              </ProjectContent>
            </ListProject>
          </GridContainer>
        </div>
      </Container>
    </PageContainer>
  );
};

// Style
const Container = styled("div")``;

const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "chart activity"
    "listProject activity";
  max-height: 498px;
  grid-gap: 15px;
  margin-top: 15px;
`;

const ChartComponent = styled("div")(() => ({
  gridArea: "chart",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
}));

const LatestActivity = styled("div")(() => ({
  gridArea: "activity",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
  height: "object-fit",
}));

const ListProject = styled("div")(() => ({
  gridArea: "listProject",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  borderRadius: "10px",
}));

const TitleBar = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#000000",
}));

const SeeOther = styled("div")`
  display: flex;
  align-items: center;
  padding: 2px;
  font-weight: 600;
  font-size: 10px;
  line-height: 11px;
  color: #0061a7;
  cursor: pointer;
`;

const ScrollView = styled("div")`
  overflow: scroll;
  height: 92%;
  /* padding: 13px 11px; */
`;

const ItemCustom = styled(ListItemButton)(() => ({
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  padding: "5px 10px",
  gap: "20px",
  alignItems: "center",
}));

const TextWrapper = styled("div")`
  font-weight: 500;
  font-size: 10px;
  line-height: 10.89px;
`;

const ProjectContent = styled("div")`
  display: flex;
  justify-content: space-around;
  margin: 21px 0;
`;

const ProjectSection = styled("div")`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ImageContainer = styled("div")`
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  border-radius: 10px;
`;

const TotalProject = styled("p")`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
`;

const DescProject = styled("p")`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #979494;
`;

export default Dashboard;
