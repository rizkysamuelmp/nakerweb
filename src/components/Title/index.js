// Title Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const Title = ({ title, children }) => (
  <Container>
    <h3
      style={{
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "24px",
        color: "#000000",
      }}
    >
      {title}
    </h3>
    {children && <div>{children}</div>}
  </Container>
);

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Title.defaultProps = {
  title: "Title",
  children: "",
};

export default Title;
