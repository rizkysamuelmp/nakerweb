/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
// InputText Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Colors from "../../helpers/colors";

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
        margin: "2.5px 0px",
        width: "100%",
        "& .MuiInputBase-root": {
          fontFamily: "Inter",
          fontWeight: 500,
          borderRadius: "10px",
          borderColor: "rgba(0, 0, 0, 0.25)",
        },
        "& .MuiInputBase-input": {
          padding: endIcon ? "11px 10px 11px 50px" : "11px 10px",
        },
        "& .MuiOutlinedInput-root": {
          "& .Mui-focused": {
            border: "1px solid #0061A7",
          },
          "& .Mui-focused input": {
            "&::placeholder": {
              color: Colors.warning.medium,
            },
          },
          "& fieldset": {
            borderRadius: "10px",
            borderColor: "rgba(0, 0, 0, 0.25)",
          },
          "&:hover fieldset": {
            borderColor: "rgba(0, 0, 0, 0.25)",
          },
          "&.Mui-focused fieldset input": {
            borderColor: "rgba(0, 0, 0, 0.25)",
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
};

export default InputText;