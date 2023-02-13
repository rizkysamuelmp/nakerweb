// Pagination Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import PaginationMUI from "@mui/material/Pagination";
import Colors from "../../utils/helpers/colors";

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
  showFirstButton,
  showLastButton,
}) => (
  <Container>
    <Info>
      Menampilkan {currentData} dari {totalData} Baris
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
  currentData: PropTypes.number,
  totalData: PropTypes.number,
  onChange: PropTypes.func,
  page: PropTypes.number,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
};

Pagination.defaultProps = {
  count: 0,
  currentData: 0,
  totalData: 0,
  onChange: () => {},
  page: 1,
  showFirstButton: true,
  showLastButton: true,
};

export default Pagination;
