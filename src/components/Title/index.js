// Title Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

// Asset
import back from "../../assets/icon/Back.svg";

const Title = ({ title, children, withBack, onBack }) => (
  <Container>
    <ContentWrap>
      {withBack && (
        <Back onClick={onBack}>
          <img
            src={back}
            alt="icon-back"
            width={16}
            heigh={16}
            style={{ marginRight: "5px" }}
          />
          Kembali
        </Back>
      )}
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
    </ContentWrap>
    {children && <div>{children}</div>}
  </Container>
);

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const Back = styled("div")`
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
`;

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  withBack: PropTypes.bool,
  onBack: PropTypes.func,
};

Title.defaultProps = {
  title: "Title",
  children: "",
  withBack: false,
  onBack: () => {},
};

export default Title;
