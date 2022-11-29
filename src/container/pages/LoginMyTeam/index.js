// Page Login QR
// --------------------------------------------------------

import React from "react";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

// Asset
import ImageSocial from "../../../assets/img/social.webp";
import Logo from "../../../assets/img/logo.png";
import QrCode from "../../../assets/img/qr-code.png";

const LoginMyTeam = () => {
  let history = useHistory();

  return (
    <Container>
      <ContentWrapper>
        <img alt="logo" src={Logo} width="55%" />
        <img
          alt="logo"
          src={QrCode}
          width="55%"
          onClick={() => history.push("/nakerweb/my-team")}
        />
        <p>Silahkan scan untuk masuk</p>
      </ContentWrapper>
      <img
        alt="img-social"
        src={ImageSocial}
        width="52%"
        style={{ height: "fit-content" }}
      />
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "white",
  height: "100vh",
  alignItems: "center",
}));

const ContentWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "21%",
  alignItems: "center",
  textAlign: "center",
}));

export default LoginMyTeam;
