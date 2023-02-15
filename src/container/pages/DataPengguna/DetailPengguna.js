// Page Detail Pengguna
// --------------------------------------------------------

import React from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { setActiveStep } from "../../../store/actions/dataPengguna";

// Assets
import backroundUser from "../../../assets/img/backgroundUser.png";
import verifiedAccount from "../../../assets/icon/verifiedAccount.svg";
import customer from "../../../assets/icon/customer.svg";
import pencil from "../../../assets/icon/pencil.svg";
import barBlue from "../../../assets/img/bar-blue.png";
import barYellow from "../../../assets/img/bar-yellow.png";
import barRed from "../../../assets/img/bar-red.png";
import barPurple from "../../../assets/img/bar-purple.png";
import barGreen from "../../../assets/img/bar-green.png";
import { ReactComponent as IconBack } from "../../../assets/icon/icon-back.svg";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const DetailPengguna = ({ history }) => {
  const { userDetail } = useSelector(
    (state) => state.dataPengguna,
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <Container>
      <IconButton
        style={{ position: "absolute", zIndex: 100 }}
        onClick={() => {
          if (history === "page") {
            dispatch(setActiveStep("page"));
          } else {
            dispatch(setActiveStep("all"));
          }
        }}
      >
        <IconBack />
      </IconButton>
      <Profile>
        <img width="100%" height="225px" src={backroundUser} alt="" />
        <DetailProfile>
          <img
            src={userDetail.foto_profile}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "100%",
            }}
            alt=""
          />
          <NickName>
            <span>{userDetail.full_name}</span>
            {userDetail.is_verified === "1" && (
              <img src={verifiedAccount} alt="" width="23.91px" />
            )}
          </NickName>
        </DetailProfile>
      </Profile>

      {/* Card Info user */}
      <CardContainer>
        <SumaryWrap>
          <Sumary>
            <img
              alt="adornment-green"
              src={barBlue}
              width="30%"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            />
            <ContentWrap>
              <TitleSummary>{userDetail.follower}</TitleSummary>
              <DetailSummary>Followers</DetailSummary>
            </ContentWrap>
          </Sumary>
          <Sumary>
            <img
              alt="adornment-green"
              src={barYellow}
              width="30%"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            />
            <ContentWrap>
              <TitleSummary>{userDetail.following}</TitleSummary>
              <DetailSummary>Following</DetailSummary>
            </ContentWrap>
          </Sumary>
          <Sumary>
            <img
              alt="adornment-green"
              src={barRed}
              width="30%"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            />
            <ContentWrap>
              <TitleSummary>{userDetail.total_group}</TitleSummary>
              <DetailSummary>Grup</DetailSummary>
            </ContentWrap>
          </Sumary>
          <Sumary>
            <img
              alt="adornment-green"
              src={barPurple}
              width="30%"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            />
            <ContentWrap>
              <TitleSummary>{userDetail.total_proyek}</TitleSummary>
              <DetailSummary>Project</DetailSummary>
            </ContentWrap>
          </Sumary>
          <Sumary>
            <img
              alt="adornment-green"
              src={barGreen}
              width="30%"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            />
            <ContentWrap>
              <TitleSummary>{userDetail.total_post}</TitleSummary>
              <DetailSummary>Postingan</DetailSummary>
            </ContentWrap>
          </Sumary>
        </SumaryWrap>
      </CardContainer>

      <BioData>
        <HeaderBioData>
          <Left>
            <img src={customer} alt="" />
            <LeftText>Data Diri</LeftText>
          </Left>
          <Right>
            <IconButton style={{ width: "30px", height: "30px" }}>
              <img src={pencil} alt="" width="30px" />
            </IconButton>
          </Right>
        </HeaderBioData>
        <DetailBioData>
          <Line>
            <InfoData>Nama Lengkap</InfoData>
            <ValueData>{userDetail.full_name}</ValueData>
          </Line>
          <Line>
            <InfoData>Jenis Kelamin</InfoData>
            <ValueData>
              {userDetail.gender === "0" ? "Pria" : "Wanita"}
            </ValueData>
          </Line>
          <Line>
            <InfoData>Nomor Telepon</InfoData>
            <ValueData>{userDetail.phone}</ValueData>
          </Line>
          <Line>
            <InfoData>Alamat</InfoData>
            <ValueData>{userDetail.address}</ValueData>
          </Line>
          <Line>
            <InfoData>Tangal Lahir</InfoData>
            <ValueData>{userDetail.brith_date}</ValueData>
          </Line>
          <Line>
            <InfoData>Warga Negara</InfoData>
            <ValueData>-</ValueData>
          </Line>
          <Line>
            <InfoData>Email</InfoData>
            <ValueData>{userDetail.email}</ValueData>
          </Line>
        </DetailBioData>
      </BioData>
    </Container>
  );
};

const Container = styled("div")``;

const Profile = styled("div")`
  position: relative;
`;

const DetailProfile = styled("div")`
  display: flex;
  position: absolute;
  bottom: -15%;
  left: 13px;
`;

const NickName = styled("div")`
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  gap: 4px;

  /* text style */
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const CardContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 19px;
  padding: 9px 0 16px 0;
  padding-left: 150px;
`;

const BioData = styled("div")`
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
`;

const HeaderBioData = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Left = styled("div")`
  display: flex;
  align-items: center;
`;

const LeftText = styled("span")`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

const Right = styled("div")`
  background-color: #d9d9d9;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailBioData = styled("div")`
  margin: 19px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Line = styled("div")`
  display: flex;
`;

const InfoData = styled("div")`
  width: 30%;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #8f8b8b;
`;

const ValueData = styled("div")`
  width: 70%;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #444343;
`;

const SumaryWrap = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  width: "100%",
}));

const Sumary = styled("div")(() => ({
  display: "flex",
  backgroundColor: "white",
  borderRadius: "10px",
  justifyContent: "space-between",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  alignItems: "center",
  cursor: "pointer",
  width: "20%",
  height: "fit-content",
  minWidth: "130px",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  gap: "5px",
}));

const TitleSummary = styled("p")(() => ({
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "24px",
}));

const DetailSummary = styled("p")(() => ({
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#888888",
}));

export default DetailPengguna;
