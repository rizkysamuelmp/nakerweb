/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// DropDown Component
// --------------------------------------------------------
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import iconDown from "../../assets/icon/icon-down.png";
import InputAdornment from "@mui/material/InputAdornment";
import Colors from "../../helpers/colors";

const DropDown = ({
  imageCheck,
  listDropDown,
  size,
  dropdownValue,
  handleChange,
  placeHolder,
  placeHolderInside,
  backgroundColor,
  width,
}) => {
  return (
    <FormControl
      className="m-dropdown"
      sx={{
        margin: "5px 0",
      }}
    >
      <SelectMUI
        value={dropdownValue}
        onChange={handleChange}
        defaultValue=""
        className={`select-dropdown ${size}`}
        displayEmpty
        IconComponent={null}
        endAdornment={
          <InputAdornment
            position="start"
            className="inputAdorment"
            sx={{
              zIndex: 200,
              cursor: "pointer",
              height: "40px",
              justifyContent: "center",
              width: "67px",
              maxHeight: "56px",
              borderRadius: "0px 5px 5px 0px",
              m: "0px",
              backgroundColor: Colors.primary.dark,
              ".MuiTypography-root": {
                color: "white",
                fontSize: "0.938rem",
                fontWeight: "400",
                lineHeight: "1.124rem",
              },
            }}
          >
            <img src={iconDown} alt="icon-down" />
          </InputAdornment>
        }
        MenuProps={{
          autoFocus: false,
          sx: {
            ".MuiPaper-root": {
              borderRadius: "5px",
              marginTop: "4px",
            },
            ".MuiMenuItem-root": {
              paddingRight: "50px",
              padding: "6px 16px",
            },
            ".Mui-selected": {
              backgroundColor: "gray",
              backgroundImage: `url(${imageCheck})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "98.5%",
              backgroundPositionY: "center",
            },
          },
        }}
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#115AAA",
            legend: {
              width: "inherit !important",
              maxWidth: "inherit !important",
            },
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#115AAA",
          },
          "&.MuiSelect-root": {
            borderRadius: "5px",
          },
          " .MuiSelect-select": {
            color: dropdownValue.length ? "#115AAA" : "gray",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "24px",
          },
          "&.MuiOutlinedInput-root": {
            borderRadius: "5px",
            backgroundColor,
            height: "40px",
            "&.md": {
              width: width,
              padding: "0px",
              borderRadius: "5px",
            },
          },
        }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return placeHolder;
          }
          return listDropDown[selected]?.label || "";
        }}
        inputProps={{
          "aria-label": "Without label",
        }}
      >
        {placeHolderInside && (
          <CustomMenuItem
            style={{
              color: `gray} !important`,
              fontSize: "0.938rem",
              fontWeight: "400",
              lineHeight: "1.124rem",
            }}
            disabled
            value=""
          >
            {placeHolder}
          </CustomMenuItem>
        )}
        {listDropDown.map((item) => (
          <CustomMenuItem key={item.label} value={item.value}>
            <React.Fragment>{item.label}</React.Fragment>
          </CustomMenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
};

DropDown.propTypes = {
  imageCheck: PropTypes.string,
  listDropDown: PropTypes.array,
  size: PropTypes.string,
  handleChange: PropTypes.func,
  dropdownValue: PropTypes.array,
  placeHolder: PropTypes.string,
  placeHolderInside: PropTypes.bool,
  searchPlaceHolderEn: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
};

DropDown.defaultProps = {
  imageCheck: "",
  listDropDown: [
    {
      label: "Teknologi Media, dan Komunikasi",
      subLabel: "Bidang 1",
      value: 0,
    },
    { label: "Kesehatan", subLabel: "Bidang 2", value: 1 },
    { label: "Konstruksi", subLabel: "Bidang 3", value: 2 },
    { label: "Pertanian", subLabel: "Bidang 4", value: 3 },
  ],
  size: "md",
  handleChange: () => {},
  dropdownValue: [],
  placeHolder: "",
  placeHolderInside: true,
  backgroundColor: "transparent",
  width: "255px",
};

const CustomMenuItem = styled(MenuItem)(() => ({
  fontSize: "15px",
  fontWeight: 400,
}));

const SelectMUI = styled(Select)(() => ({
  ".MuiSvgIcon-root": {
    color: "#0061A7",
  },
}));

export default DropDown;
