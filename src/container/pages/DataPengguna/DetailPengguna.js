import React from "react";
import { styled } from "@mui/material/styles";

// Assets
import backroundUser from "../../../assets/img/backgroundUser.png";
import profilePhoto from "../../../assets/img/profilePhoto.png";
import verifiedAccount from "../../../assets/icon/verifiedAccount.svg";
import customer from "../../../assets/icon/customer.svg";
import pencil from "../../../assets/icon/pencil.svg";
import shape from "../../../assets/icon/shape1.svg";

const Container = styled("div")``;

const ProfileWrapper = styled("div")``;

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
`;

const Card = styled("div")`
  width: 15%;
  height: 61px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const CardLeft = styled("div")`
  background-image: url();
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
  padding: 5px;
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
  color: #434343;
`;

const ValueData = styled("div")`
  width: 70%;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #444343;
`;

const DetailPengguna = () => {
  return (
    <Container>
      <ProfileWrapper>
        <Profile>
          <img width="100%" height="225px" src={backroundUser} alt="" />
          <DetailProfile>
            <img src={profilePhoto} width="100px" alt="" />
            <NickName>
              <span>Muh. Arifandi</span>
              <img src={verifiedAccount} alt="" width="23.91px" />
            </NickName>
          </DetailProfile>
        </Profile>

        {/* Card Info user */}
        <CardContainer>
          <Card>
            <Left></Left>
            <Right></Right>
          </Card>
          <Card>
            <Left></Left>
            <Right></Right>
          </Card>
          <Card>
            <Left></Left>
            <Right></Right>
          </Card>
          <Card>
            <Left></Left>
            <Right></Right>
          </Card>
          <Card>
            <Left></Left>
            <Right></Right>
          </Card>
        </CardContainer>
        <BioData>
          <HeaderBioData>
            <Left>
              <img src={customer} alt="" />
              <LeftText>Data Diri</LeftText>
            </Left>
            <Right>
              <img src={pencil} alt="" width="30px" />
            </Right>
          </HeaderBioData>
          <DetailBioData>
            <Line>
              <InfoData>Nama Lengkap</InfoData>
              <ValueData>Muh. Arifandi</ValueData>
            </Line>
            <Line>
              <InfoData>Jenis Kelamin</InfoData>
              <ValueData>Laki-Laki</ValueData>
            </Line>
            <Line>
              <InfoData>Nomor Telepon</InfoData>
              <ValueData>085316547777</ValueData>
            </Line>
            <Line>
              <InfoData>Alamat</InfoData>
              <ValueData>
                Nambongan RT O1,/RW 30, Tlogoadi, Kec. Mlati, 55287, Kab Sleman,
                Daerah Istimewa Yogyakarta, Indonesia
              </ValueData>
            </Line>
            <Line>
              <InfoData>Tangal Lahir</InfoData>
              <ValueData>21-10-2022</ValueData>
            </Line>
            <Line>
              <InfoData>Warga Negara</InfoData>
              <ValueData>Indonesia</ValueData>
            </Line>
            <Line>
              <InfoData>Email</InfoData>
              <ValueData>arif76440@gmail.com</ValueData>
            </Line>
          </DetailBioData>
        </BioData>
      </ProfileWrapper>
    </Container>
  );
};

export default DetailPengguna;
