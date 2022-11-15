/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
// InputText Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const InputText = ({
  color,
  size,
  id,
  type,
  name,
  value,
  placeholder,
  maxLength,
  autoComplete,
  tabIndex,
  weight,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled,
  spellCheck,
  variant,
  className,
  iconComponents,
  iconEndComponents,
  isPhoneNumber,
  isEndAndornment,
  isTransparentBorder,
  isTextArea,
  isCurrent,
  isBrowse,
  isCurs,
  isSelectDrodpown,
  sx,
  isError,
  dataSelect,
  handleSelect,
  selectedValue,
  ...input
}) => {
  return (
    <TextField
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      autoComplete={autoComplete}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      variant={variant}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      spellCheck={spellCheck}
      sx={{
        padding: "0px",
        margin: "2.5px 0px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderRadius: "10px",
            border: `1px solid ${
              !isTransparentBorder ? "#0061A7" : "transparent"
            }`,
          },
          "&.Mui-focused fieldset": {
            borderRadius: "10px",
            border: `1px solid ${
              !isTransparentBorder ? "#0061A7" : "transparent"
            }`,
          },
          "&.Mui-focused input": {
            "&::placeholder": {
              color: "#0061A7",
            },
          },
        },
        "&.lg": {
          minHeight: "82px",
          ".MuiOutlinedInput-root": {
            minHeight: "82px",
            alignItems: !isTextArea ? "center" : "flex-start",
          },
          ".inputAdorment": {
            minHeight: "82px",
          },
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderRadius: "10px",
          border: `1px solid ${
            !isTransparentBorder ? "#BCC8E7" : "transparent"
          }`,
          legend: {
            width: "inherit !important",
            maxWidth: "inherit !important",
          },
        },
        ".MuiInputBase-input": {
          color: !isError ? "#374062" : "#D14848",
          fontSize: "0.938rem",
          fontWeight: "400",
          lineHeight: "1.124rem",
          "&::placeholder": {
            color: "#BCC8E7",
            fontSize: "0.938rem",
            fontWeight: "400",
            lineHeight: "1.124rem",
          },
        },
        ...sx,
      }}
      InputProps={{
        startAdornment: iconComponents,
        endAdornment: iconEndComponents,
      }}
      {...input}
      inputProps={{
        ...input.inputProps,
        maxLength,
        autocomplete: "new-password",
      }}
    />
  );
};

InputText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  id: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "textarea",
    "masking",
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.oneOf(["on", "off"]),
  tabIndex: PropTypes.string,
  weight: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  spellCheck: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  iconComponents: PropTypes.node,
  iconEndComponents: PropTypes.node,
  isPhoneNumber: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isCurs: PropTypes.bool,
  isBrowse: PropTypes.bool,
  isTransparentBorder: PropTypes.bool,
  isError: PropTypes.bool,
  isEndAndornment: PropTypes.bool,
  sx: PropTypes.object,
  isTextArea: PropTypes.bool,
  isSelectDrodpown: PropTypes.bool,
  handleSelect: PropTypes.func,
  dataSelect: PropTypes.array,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputText.defaultProps = {
  color: "",
  size: "md",
  id: "",
  type: "text",
  name: "",
  value: "",
  placeholder: "",
  maxLength: "",
  autoComplete: "off",
  tabIndex: "-1",
  weight: "",
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  input: {},
  disabled: false,
  spellCheck: false,
  className: "",
  variant: "outlined",
  iconComponents: "",
  iconEndComponents: "",
  isPhoneNumber: false,
  isCurrent: false,
  isCurs: false,
  isBrowse: false,
  isTransparentBorder: false,
  isEndAndornment: false,
  isError: false,
  sx: {},
  isTextArea: false,
  isSelectDrodpown: false,
  handleSelect: () => {},
  dataSelect: [
    { label: "Rp", value: 0 },
    { label: "USD", value: 1 },
    { label: "CNY", value: 2 },
    { label: "SGD", value: 3 },
  ],
  selectedValue: 0,
};

export default InputText;
