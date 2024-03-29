// Chart Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const ChartLine = ({ datasets, options, labels }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <Container>
      <Line
        options={options}
        data={{
          labels,
          datasets: datasets,
        }}
      />
    </Container>
  );
};

ChartLine.propTypes = {
  datasets: PropTypes.array,
  labels: PropTypes.array,
  options: PropTypes.object,
};

ChartLine.defaultProps = {
  datasets: [
    {
      label: "Dataset 1",
      data: [119, 119, 280, 61, 187, 32, 202, 296, 115, 148],
      borderColor: "#0D5EB9",
      backgroundColor: "#0D5EB9",
    },
  ],
  labels: [
    "1 Jul",
    "3 Jul",
    "5 Jul",
    "7 Jul",
    "9 Jul",
    "11 Jul",
    "14 Jul",
    "16 Jul",
    "18 Jul",
    "21 Jul",
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 13,
          },
          autoSkip: true,
          maxTicksLimit: 4,
        },
        position: "right",
      },
      y: {
        position: "right",
      },
    },
  },
};

const Container = styled("div")(() => ({
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  display: "flex",
}));

export default ChartLine;
