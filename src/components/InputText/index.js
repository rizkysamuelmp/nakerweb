/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
// InputText Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const InputText = ({
  id,
  type,
  name,
  value,
  placeholder,
  maxLength,
  autoComplete,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled,
  spellCheck,
  variant,
  isEndAndornment,
  isTransparentBorder,
  isTextArea,
  sx,
  isError,
  iconAdornment,
  endIcon,
  key,
  noPadding,
  width,
  borderRadius,
  borderColor,
  backgroundColor,
  placeholderStyle,
  ...input
}) => {
  return (
    <TextField
      id={id}
      key={key}
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
        input: {
          // color: "#DADCDF",
          ...placeholderStyle,
        },
        backgroundColor: backgroundColor,
        width: width ? width : "100%",
        "& .MuiInputBase-root": {
          fontFamily: "Inter",
          fontWeight: 500,
          borderRadius: borderRadius ? borderRadius : "10px",
          borderColor: borderColor,
          paddingLeft: noPadding && "0px",
        },
        "& .MuiInputBase-input": {
          padding: noPadding
            ? "0px"
            : endIcon
            ? "11px 10px 11px 50px"
            : "11px 10px",
        },
        "& .MuiOutlinedInput-root": {
          "& .Mui-focused": {
            border: `1px solid ${borderColor}`,
          },
          "& fieldset": {
            borderRadius: borderRadius ? borderRadius : "10px",
            borderColor: borderColor,
          },
          "&:hover fieldset": {
            borderColor: borderColor,
          },
          "&.Mui-focused fieldset input": {
            borderColor: borderColor,
          },
        },
        ...sx,
      }}
      InputProps={{
        startAdornment: !endIcon ? iconAdornment : null,
        endAdornment: endIcon ? iconAdornment : null,
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
  key: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.oneOf(["on", "off"]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  spellCheck: PropTypes.bool,
  variant: PropTypes.string,
  iconAdornment: PropTypes.node,
  isTransparentBorder: PropTypes.bool,
  isError: PropTypes.bool,
  isEndAndornment: PropTypes.bool,
  sx: PropTypes.object,
  isTextArea: PropTypes.bool,
  endIcon: PropTypes.bool,
  noPadding: PropTypes.bool,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderStyle: PropTypes.object,
};

InputText.defaultProps = {
  id: "",
  type: "text",
  key: "",
  name: "",
  value: "",
  placeholder: "",
  maxLength: "",
  autoComplete: "off",
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  input: {},
  disabled: false,
  spellCheck: false,
  variant: "outlined",
  isTransparentBorder: false,
  isEndAndornment: false,
  isError: false,
  sx: {},
  isTextArea: false,
  endIcon: false,
  noPadding: false,
  width: "",
  borderRadius: "",
  borderColor: "rgba(0, 0, 0, 0.25)",
  backgroundColor: "white",
  placeholderStyle: {},
};

export default InputText;
