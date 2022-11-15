/* eslint-disable no-unused-vars */
// DesignSystem Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import Colors from "../../../helpers/colors";
import Button from "../../../components/Button";
import { ReactComponent as Eye } from "../../../assets/icon/Eye.svg";

const DesignSystem = ({ propsName }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "20px",
        color: Colors.primary[10],
      }}
    >
      <div>
        <h2>Button Contained</h2>
        <Button variant="contained" style={{ textTransform: "unset" }}>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Outlined</h2>
        <Button variant="outlined" style={{ textTransform: "unset" }}>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Full</h2>
        <Button variant="contained" full style={{ textTransform: "unset" }}>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Loading</h2>
        <Button
          variant="contained"
          isLoading
          style={{ textTransform: "unset" }}
        >
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Rounded</h2>
        <Button variant="contained" rounded style={{ textTransform: "unset" }}>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Custom Rounded</h2>
        <Button
          variant="contained"
          borderRadius="5px"
          style={{ textTransform: "unset" }}
        >
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button With Icon</h2>
        <Button
          variant="contained"
          borderRadius="5px"
          style={{ textTransform: "unset" }}
          padding="0px 7px 0px 9px"
        >
          Detail
          <Eye />
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
