// Button Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import Colors from "../../helpers/colors";

const Button = ({
  startIcon,
  endIcon,
  style,
  type,
  variant,
  onClick,
  disabled,
  full,
  children,
  color,
  sx,
  isLoading,
  rounded,
  borderRadius,
  padding,
  width,
  ...others
}) => {
  return (
    <ButtonMUI
      type={type}
      onClick={onClick}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      style={style}
      disabled={disabled}
      disableElevation
      sx={{
        display: "inline-block",
        outline: 0,
        textTransform: "unset",
        width: full ? "100%" : width !== "" ? width : "fit-content",
        height: "fit-content",
        backgroundColor: color !== "" ? color : Colors.primary.hard,
        ":hover": {
          bgcolor: color !== "" ? color : Colors.primary.hard,
        },
        padding: padding,
        fontFamily: "Inter",
        minWidth: "unset",
        borderRadius:
          borderRadius !== "" ? borderRadius : rounded ? "50px" : "10px",
        ...sx,
      }}
      {...others}
    >
      {isLoading ? (
        <CircularProgress
          size="1rem"
          color="secondary"
          style={{ display: "flex" }}
        />
      ) : (
        <p
          style={{
            margin: 0,
            display: "flex",
            gap: "4px",
            justifyContent: "center",
          }}
        >
          {children}
        </p>
      )}
    </ButtonMUI>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  variant: PropTypes.string,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  children: PropTypes.node,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.object,
  isLoading: PropTypes.bool,
  rounded: PropTypes.bool,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  type: "button",
  variant: "contained",
  onClick: () => {},
  disabled: false,
  full: false,
  children: "",
  startIcon: "",
  endIcon: "",
  color: "",
  sx: {},
  isLoading: false,
  rounded: false,
  borderRadius: "",
  padding: "13px 38px",
  width: "",
};

export default Button;
