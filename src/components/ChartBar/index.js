// Chart Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const ChartBar = ({ options, datasets, labels }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <Container>
      <Bar options={options} data={{ labels: labels, datasets: datasets }} />
    </Container>
  );
};

ChartBar.propTypes = {
  options: PropTypes.object,
  datasets: PropTypes.array,
  labels: PropTypes.array,
};

ChartBar.defaultProps = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agustus",
    "September",
    "October",
    "November",
    "December",
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
          usePointStyle: true,
        },
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
            size: 9,
          },
        },
      },
    },
  },
  datasets: [
    {
      label: "Perusahaan",
      data: [9, 2, 2, 7, 1, 10, 0, 0, 2, 0, 0, 8],
      backgroundColor: "#FFBF0B",
      pointStyle: "rectRounded",
    },
    {
      label: "Komunitas",
      data: [9, 5, 0, 2, 4, 4, 5, 0, 6, 5, 6, 4],
      backgroundColor: "#F86C6C",
      pointStyle: "rectRounded",
    },
    {
      label: "Serikat Pekerja",
      data: [2, 6, 4, 4, 10, 4, 7, 1, 8, 2, 2, 4],
      backgroundColor: "#03B74B",
      pointStyle: "rectRounded",
    },
  ],
};

const Container = styled("div")(() => ({
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  display: "flex",
}));

export default ChartBar;
