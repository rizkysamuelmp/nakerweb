/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
// Summary Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

// Asset
import profile from "../../assets/icon/icon-profile.png";
import group from "../../assets/icon/icon-group.png";
import curriculum from "../../assets/icon/icon-curriculum.png";
import project from "../../assets/icon/icon-project.png";

const Summary = ({ data }) => {
  return (
    <Container>
      <Content>
        <ContentWrapper>
          <ImageWrapper color="rgba(255, 122, 0, 0.58)">
            <img alt="profile" src={profile} />
          </ImageWrapper>
          <TextWrapper>
            <Title>Data Pengguna</Title>
            <Info>Total Pengguna</Info>
          </TextWrapper>
        </ContentWrapper>
        <TextValueWrapper>
          <TextValue>{data.user}</TextValue>
        </TextValueWrapper>
      </Content>
      <Content>
        <ContentWrapper>
          <ImageWrapper color="rgba(25, 215, 101, 0.58)">
            <img alt="profile" src={group} />
          </ImageWrapper>
          <TextWrapper>
            <Title>Data Grup</Title>
            <Info>Total Grup</Info>
          </TextWrapper>
        </ContentWrapper>
        <TextValueWrapper>
          <TextValue>{data.group}</TextValue>
        </TextValueWrapper>
      </Content>
      <Content>
        <ContentWrapper>
          <ImageWrapper color="rgba(248, 158, 158, 0.58)">
            <img alt="profile" src={curriculum} />
          </ImageWrapper>
          <TextWrapper>
            <Title>Data Blue Colar</Title>
            <Info>Total Loker</Info>
          </TextWrapper>
        </ContentWrapper>
        <TextValueWrapper>
          <TextValue>{data.blueCoral}</TextValue>
        </TextValueWrapper>
      </Content>
      <Content>
        <ContentWrapper>
          <ImageWrapper color="rgba(5, 0, 255, 0.4)">
            <img alt="profile" src={project} />
          </ImageWrapper>
          <TextWrapper>
            <Title>Data MyTim</Title>
            <Info>Total Project</Info>
          </TextWrapper>
        </ContentWrapper>
        <TextValueWrapper>
          <TextValue>{data.myTeam}</TextValue>
        </TextValueWrapper>
      </Content>
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  gap: "19px",
  justifyContent: "space-between",
}));

const Content = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "5px",
  justifyContent: "space-between",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  width: "25%",
  alignItems: "center",
  cursor: "pointer",
}));

const ContentWrapper = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));

const ImageWrapper = styled("div")(({ color }) => ({
  padding: "8px",
  borderRadius: "12px",
  background: color,
  width: "40px",
  height: "40px",
}));

const TextWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const Title = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "15px",
  lineHeight: "18px",
  color: "#000000",
}));

const Info = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#ACACAC",
}));

const TextValue = styled("p")(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#080911",
}));

const TextValueWrapper = styled("div")(() => ({
  display: "flex",
  alignSelf: "flex-end",
}));

Summary.propTypes = {
  data: PropTypes.object,
};

Summary.defaultProps = {
  data: {
    user: 230,
    group: 230,
    blueCoral: 230,
    myTeam: 230,
  },
};

export default Summary;
