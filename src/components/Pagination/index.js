// Pagination Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import PaginationMUI from "@mui/material/Pagination";
import Colors from "../../helpers/colors";

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Info = styled("p")(() => ({
  fontSize: "15px",
  color: "black",
  margin: "0px",
}));

const CustomPagination = styled(PaginationMUI)(() => ({
  backgroundColor: "white",
  borderRadius: "10px",
  ".MuiButtonBase-root": {
    color: Colors.primary.hard,
    margin: "0px",
    height: "40px",
  },
  ".Mui-selected": {
    backgroundColor: "transparent!important",
    height: "40px",
    color: "gray",
  },
}));

const WrapperPagination = styled("div")(() => ({}));

const Pagination = ({
  count,
  currentData,
  totalData,
  onChange,
  page,
  language,
  showFirstButton,
  showLastButton,
}) => (
  <Container>
    <Info>
      {language === "id" ? "Menampilkan" : "Show"} {currentData}{" "}
      {language === "id" ? "dari " : "from "}
      {totalData} {language === "id" ? "Baris" : "Row"}
    </Info>
    <WrapperPagination>
      <CustomPagination
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        onChange={onChange}
        count={count}
        page={page}
      />
    </WrapperPagination>
  </Container>
);

Pagination.propTypes = {
  count: PropTypes.number,
  currentData: PropTypes.string,
  totalData: PropTypes.string,
  onChange: PropTypes.func,
  page: PropTypes.number,
  language: PropTypes.string,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
};

Pagination.defaultProps = {
  count: 0,
  currentData: "",
  totalData: "",
  onChange: () => {},
  page: 1,
  language: "id",
  showFirstButton: true,
  showLastButton: true,
};

export default Pagination;
