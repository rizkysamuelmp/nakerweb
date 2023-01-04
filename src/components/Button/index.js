// Button Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import Colors from "../../utils/helpers/colors";

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
  border,
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
        border: border,
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
        <div
          style={{
            margin: 0,
            display: "flex",
            gap: "4px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
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
  border: PropTypes.string,
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
  padding: "10px 28px",
  width: "",
  border: "",
};

export default Button;
