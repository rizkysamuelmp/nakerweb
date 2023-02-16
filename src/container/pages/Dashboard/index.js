import React, { useEffect, useState } from "react";
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

// Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Dummy Data
import { notification } from "./DataDummy";
import Chart from "../../../components/Chart";
import { getDataDashboard } from "../../../store/actions/dashboard";

const initChartUser = [
  {
    data: [0, 0, 0],
    backgroundColor: ["#FFBF0B", "#03B74B", "#FE4747"],
    borderColor: ["#FFBF0B", "#03B74B", "#FE4747"],
    borderWidth: 1,
    label: [
      {
        title: "Pengguna Diblokir",
        detail: "0 Pengguna",
        color: "#FFBF0B",
      },
      {
        title: "Pengguna Belum verifikasi",
        detail: "0 Pengguna",
        color: "#03B74B",
      },
      {
        title: "Pengguna terverifikasi",
        detail: "0 Pengguna",
        color: "#FE4747",
      },
    ],
  },
];

const initChartGroup = [
  {
    data: [0, 0, 0],
    backgroundColor: ["#6147FE", "#03B74B", "#FF710B"],
    borderColor: ["#6147FE", "#03B74B", "#FF710B"],
    borderWidth: 1,
    label: [
      {
        title: "Grup Belum verifikasi",
        detail: "0 Grup",
        color: "#6147FE",
      },
      {
        title: "Grup Disetujui",
        detail: "0 Grup",
        color: "#03B74B",
      },
      {
        title: "Grup Ditolak",
        detail: "0 Grup",
        color: "#FF710B",
      },
    ],
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();

  const { dataDashboard } = useSelector(
    (state) => state.dashboard,
    shallowEqual
  );

  const [summary, setSummary] = useState();
  const [chartGroup, setChartGroup] = useState(initChartGroup);
  const [chartUser, setChartUser] = useState(initChartUser);

  useEffect(() => {
    dispatch(getDataDashboard());
  }, []);

  useEffect(() => {
    if (Object.keys(dataDashboard).length !== 0) {
      setSummary({
        user: dataDashboard.header.total_users,
        group: dataDashboard.header.total_grup,
        blueCoral: dataDashboard.header.total_loker,
        myTeam: dataDashboard.header.total_proyek,
      });

      const { active, waiting, rejected } = dataDashboard.statistik.chart_grup;
      const totalChart1 =
        parseInt(active) + parseInt(waiting) + parseInt(rejected);
      const dataChart1 = [
        (100 / totalChart1) * waiting,
        (100 / totalChart1) * active,
        (100 / totalChart1) * rejected,
      ];
      setChartGroup([
        {
          ...initChartGroup[0],
          data: dataChart1,
          label: [
            {
              title: "Grup Belum verifikasi",
              detail: `${waiting} Grup`,
              color: "#6147FE",
            },
            {
              title: "Grup Disetujui",
              detail: `${active} Grup`,
              color: "#03B74B",
            },
            {
              title: "Grup Ditolak",
              detail: `${rejected} Grup`,
              color: "#FF710B",
            },
          ],
        },
      ]);

      const { chart_user } = dataDashboard.statistik;
      const totalChart2 =
        parseInt(chart_user.active) +
        parseInt(chart_user.noanctive) +
        parseInt(chart_user.block);
      const dataChart2 = [
        (100 / totalChart2) * chart_user.noanctive,
        (100 / totalChart2) * chart_user.active,
        (100 / totalChart2) * chart_user.block,
      ];
      setChartUser([
        {
          ...initChartUser[0],
          data: dataChart2,
          label: [
            {
              title: "Pengguna Belum Verifikasi",
              detail: `${chart_user.noanctive} Pengguna`,
              color: "#FFBF0B",
            },
            {
              title: "Pengguna Terverifikasi",
              detail: `${chart_user.active} Pengguna`,
              color: "#03B74B",
            },
            {
              title: "Pengguna Diblokir",
              detail: `${chart_user.block} Pengguna`,
              color: "#FE4747",
            },
          ],
        },
      ]);
    }
  }, [dataDashboard]);

  // useEffect(() => {
  // }, []);

  return (
    <PageContainer>
      <Container>
        {/* Title Page */}
        <Title title="Dashboard" />

        <div style={{ marginTop: "20px" }}>
          {/* Summary */}
          <Summary data={summary} />

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
                <Chart
                  data={chartUser}
                  description={`${
                    dataDashboard?.statistik?.chart_user?.total_user || 0
                  } Pengguna`}
                />
                <Chart
                  data={chartGroup}
                  description={`${
                    dataDashboard?.statistik?.chart_grup?.total_grup || 0
                  } Grup`}
                />
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
                    <TotalProject>
                      {dataDashboard?.chart_proyek?.active || 0} Project
                    </TotalProject>
                    <DescProject>Project Menunggu</DescProject>
                  </div>
                </ProjectSection>
                <ProjectSection>
                  <ImageContainer color="rgba(241, 59, 59, 0.83)">
                    <img src={survey} alt="" />
                  </ImageContainer>
                  <div>
                    <TotalProject>
                      {dataDashboard?.chart_proyek?.rejected || 0} Project
                    </TotalProject>
                    <DescProject>Project Ditolak</DescProject>
                  </div>
                </ProjectSection>
                <ProjectSection>
                  <ImageContainer color="rgba(42, 219, 13, 0.83);">
                    <img src={survey} alt="" />
                  </ImageContainer>
                  <div>
                    <TotalProject>
                      {dataDashboard?.chart_proyek?.aproved || 0} Project
                    </TotalProject>
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
