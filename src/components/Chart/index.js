// Chart Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Chart = ({ data, isLoading, description, title }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    plugins: {
      datalabels: {
        color: "white",
        formatter: (value) =>
          value === 0 || value === -1 ? null : `${Math.round(value * 1)}%`,
      },
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: { display: false },
    },
  };

  return (
    <Container>
      <WrapperChartLabel>
        {isLoading ? (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        ) : (
          <React.Fragment>
            <WrapperChart>
              {title !== "" && (
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "15px",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </p>
              )}
              <Doughnut
                options={options}
                plugins={[ChartDataLabels]}
                data={{
                  datasets: data,
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "15px",
                  marginTop: "10px",
                }}
              >
                {description}
              </p>
            </WrapperChart>
            <LabelContainer>
              {data[0].label.map((item) => (
                <ContentWrap>
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "2px",
                      backgroundColor: item.color,
                    }}
                  />
                  <TextWrap>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    >
                      {item.title}
                    </p>
                    {item.detail && (
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: "12px",
                          lineHeight: "15px",
                          color: "#B7B7B7",
                        }}
                      >
                        {item.detail}
                      </p>
                    )}
                  </TextWrap>
                </ContentWrap>
              ))}
            </LabelContainer>
          </React.Fragment>
        )}
      </WrapperChartLabel>
    </Container>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
};

Chart.defaultProps = {
  data: [
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
  ],
  isLoading: false,
  description: "230 Pengguna",
  title: "",
};

const ContentWrap = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const TextWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
}));

const Container = styled("div")(() => ({
  padding: "15px",
  backgroundColor: "white",
  width: "100%",
  height: "fit-content",
  justifyContent: "center",
  display: "flex",
}));

const WrapperChartLabel = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  height: "150px",
}));

const LabelContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const WrapperChart = styled("div")(() => ({
  height: "150px",
  width: "150px",
}));

const LoaderWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));

export default Chart;
