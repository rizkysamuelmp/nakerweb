// Progress Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Progress = ({ progress }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "16px",
          color: "#474545",
        }}
      >
        Progress Proyek
      </p>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          mt: "5px",
        }}
      >
        {progress === 0 ? (
          <CircularProgress
            variant="determinate"
            value={100}
            thickness={7}
            size={89}
            sx={{
              color: "#F1F1F1",
              height: "100px",
            }}
          />
        ) : (
          <CircularProgress
            variant="determinate"
            value={progress}
            thickness={7}
            size={89}
            sx={{
              color: "#14D431",
              height: "100px",
            }}
          />
        )}
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "#474545",
              lineHeight: "18px",
            }}
          >
            {`${progress}%`}
          </p>
        </Box>
      </Box>
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.number,
};

Progress.defaultProps = {
  progress: 50,
};

export default Progress;
