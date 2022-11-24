// Chart Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Container = styled("div")(() => ({
  padding: "15px",
  backgroundColor: "white",
  width: "fit-content",
  height: "fit-content",
}));

const WrapperChartLabel = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  height: "150px",
  width: "315px",
}));

const LabelContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
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

const Chart = ({ data, isLoading }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    plugins: {
      datalabels: {
        color: "white",
        formatter: (value) =>
          value === 0 || value === -1 ? null : `${Math.round(value * 1)}%`,
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
              <Doughnut
                options={options}
                plugins={[ChartDataLabels]}
                data={{
                  labels: ["Red", "Blue", "Yellow"],
                  redraw: true,
                  datasets: [
                    {
                      label: "# of Votes",
                      data: [20, 40, 40],
                      backgroundColor: ["#FFBF0B", "#03B74B", "#FE4747"],
                      borderColor: ["#FFBF0B", "#03B74B", "#FE4747"],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </WrapperChart>
            <LabelContainer>A</LabelContainer>
          </React.Fragment>
        )}
      </WrapperChartLabel>
    </Container>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

Chart.defaultProps = {
  data: [],
  isLoading: false,
};

export default Chart;
