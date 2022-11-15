/* eslint-disable no-unused-vars */
// DesignSystem Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const DesignSystem = ({ propsName }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "20px",
      }}
    >
      <div>
        <h2>Button</h2>
        <Button variant="contained" style={{ textTransform: "unset" }}>
          Click Me!
        </Button>
      </div>
    </div>
  );
};

DesignSystem.propTypes = {
  propsName: PropTypes.string,
};

DesignSystem.defaultProps = {
  propsName: "",
};

export default DesignSystem;
