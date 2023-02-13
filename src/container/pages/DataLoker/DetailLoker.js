// Page Detail Loker
// --------------------------------------------------------

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";
import PopUp from "../../../components/PopUp";

// Assets
import back from "../../../assets/icon/Back.svg";
import organization from "../../../assets/icon/Organization.svg";
import business from "../../../assets/icon/Business.svg";
import iconBusiness from "../../../assets/icon/bussiness-icon.png";
import iconBusinessSuccess from "../../../assets/icon/business-icon-success.png";
import iconBusinessDecline from "../../../assets/icon/business-icon-decline.png";
import { formatAmountDot } from "../../../utils/helpers";

// Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  setActiveStep,
  executeLoker,
  setPopupStatus,
} from "../../../store/actions/dataLoker";

const DetailLoker = ({ history }) => {
  const dispatch = useDispatch();

  const { selectedData, popupStatus } = useSelector(
    (state) => state.dataLoker,
    shallowEqual
  );

  const {
    name,
    city,
    provinice,
    benefit,
    cualified,
    end_open,
    end_salary,
    start_salary,
    job_position,
    job_desc,
    sektor,
    status,
  } = selectedData;

  const [confAccept, setConfAccept] = useState(false);
  const [confDecline, setConfDecline] = useState(false);

  const handleClose = () => {
    dispatch(setPopupStatus(0));
    dispatch(setActiveStep("all"));
  };

  return (
    <Container>
      <HeadContainer>
        <Back
          onClick={() => {
            if (history === "home") {
              dispatch(setActiveStep("page"));
            } else {
              dispatch(setActiveStep("all"));
            }
          }}
        >
          <img
            src={back}
            alt="icon-back"
            height={16}
            width={16}
            style={{ marginRight: "5px" }}
          />
          Kembali
        </Back>
        <RightHead>Detail Loker</RightHead>
      </HeadContainer>
      <Body>
        {/* Info Perusahaan */}
        <InfoCard>
          <InfoHead>
            <img src={organization} alt="" width="24px" />
            <span>Info Perusahaan</span>
          </InfoHead>
          <DetailPerusahaan>
            <Line>
              <Left>
                <TextLeft>Nama Perusahaan :</TextLeft>
                <TextRight> {name}</TextRight>
              </Left>
              <Right>
                <TextLeft>Kategori :</TextLeft>
                <TextRight> {sektor} </TextRight>
              </Right>
            </Line>
            <Line>
              <Left>
                <TextLeft>Alamat :</TextLeft>
                <TextRight> - </TextRight>
              </Left>
              <Right>
                <TextLeft>Nama Pic :</TextLeft>
                <TextRight> - </TextRight>
              </Right>
            </Line>
            <Line>
              <Left>
                <TextLeft>Telepon :</TextLeft>
                <TextRight> - </TextRight>
              </Left>
              <Right>
                <TextLeft>Email :</TextLeft>
                <TextRight> - </TextRight>
              </Right>
            </Line>
          </DetailPerusahaan>
        </InfoCard>

        {/* Info Lowongan */}
        <InfoCard>
          <InfoHead>
            <img src={business} alt="" width="24px" />
            <span>Info Lowongan</span>
          </InfoHead>
          <Detail>
            <WrapperContainer r>
              <Line>
                {/* Deskripsi Lowongan */}
                <Wrapper>
                  <Title>Deskripsi Pekerjaan</Title>
                  <DetailBody>{job_desc}</DetailBody>
                </Wrapper>

                {/* Kualifikasi */}
                <Wrapper>
                  <Title>Kualifikasi</Title>
                  <DetailBody>{cualified}</DetailBody>
                </Wrapper>
              </Line>

              <Line>
                {/* Lokasi Lowogan */}
                <Wrapper>
                  <Title>Lokasi</Title>
                  <DetailBody>
                    <DetailText style={{ textTransform: "capitalize" }}>
                      {city?.toLowerCase()}, {provinice?.toLowerCase()}
                    </DetailText>
                  </DetailBody>
                </Wrapper>
                {/* Gaji */}
                <Wrapper>
                  <Title>Gaji</Title>
                  <DetailBody>
                    <DetailText>
                      Rp{formatAmountDot(start_salary) || "0,00"} - Rp
                      {formatAmountDot(end_salary) || "0,00"}
                    </DetailText>
                  </DetailBody>
                </Wrapper>
              </Line>

              <Line>
                {/* Posisi */}
                <Wrapper>
                  <Title>Posisi</Title>
                  <DetailBody>
                    <DetailText>{job_position}</DetailText>
                  </DetailBody>
                </Wrapper>
                {/* Jenis */}
                <Wrapper>
                  <Title>Jenis</Title>
                  <DetailBody>
                    <DetailText>Full Time</DetailText>
                  </DetailBody>
                </Wrapper>
              </Line>

              <Line>
                {/* Batas Pendaftaran */}
                <Wrapper>
                  <Title>Batas Pendaftaran</Title>
                  <DetailBody>
                    {/* Kualifikasi */}
                    <DetailText>{end_open}</DetailText>
                  </DetailBody>
                </Wrapper>

                {/* Benefit */}
                <Wrapper>
                  <Title>Benefit</Title>
                  <DetailBody>
                    <DetailText>{benefit}</DetailText>
                  </DetailBody>
                </Wrapper>
              </Line>
            </WrapperContainer>
          </Detail>
        </InfoCard>
      </Body>
      {status === "0" && (
        <FooterContainer>
          <Button variant="outlined" onClick={() => setConfDecline(true)}>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "18px",
                letterSpacing: "0.01em",
                color: "#115AAA",
              }}
            >
              Tidak
            </p>
          </Button>
          <Button onClick={() => setConfAccept(true)}>Setujui</Button>
        </FooterContainer>
      )}

      {/* Popup Konfirmasi Setuju Loker */}
      <PopUp
        open={confAccept}
        buttonWord="Setujui"
        type="choice"
        imgSrc={iconBusiness}
        onClose={() => setConfAccept(false)}
        onClickAction={() => {
          setConfAccept(false);
          dispatch(executeLoker(1));
        }}
        title="Apakah anda ingin menyetujui loker ini ?"
      />

      {/* Popup Konfirmasi Tolak Loker */}
      <PopUp
        open={confDecline}
        type="choice"
        buttonWord="Tolak"
        imgSrc={iconBusiness}
        onClose={() => setConfDecline(false)}
        onClickAction={() => {
          setConfDecline(false);
          dispatch(executeLoker(2));
        }}
        title="Apakah anda ingin menolak loker ini ?"
      />

      {/* Popup Permintaan Disetujui */}
      <PopUp
        open={popupStatus === 1 || false}
        buttonWord="OK"
        imgSrc={iconBusinessSuccess}
        onClose={handleClose}
        onClickAction={handleClose}
        title="Loker Berhasil Disetujui"
      />

      {/* Popup Berhasil Ditolak */}
      <PopUp
        open={popupStatus === 2 || false}
        buttonWord="Ok"
        imgSrc={iconBusinessDecline}
        onClose={handleClose}
        onClickAction={handleClose}
        title="Loker Berhasil Ditolak"
      />
    </Container>
  );
};

const Container = styled("div")``;

const HeadContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Back = styled("div")`
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const RightHead = styled("span")`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 27px 0px;
  background: #f4f7fb;
  border-radius: 10px;
`;

const InfoCard = styled("div")`
  background: #ffffff;
  border-radius: 10px;
  padding: 13px 11px;
`;

const InfoHead = styled("div")`
  display: flex;
  align-items: center;
  gap: 9px;

  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

const DetailPerusahaan = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin: 13px 0;
`;

const Line = styled("div")`
  display: flex;
  align-items: center;
`;

const Left = styled("div")`
  width: 50%;
  gap: 10px;
  display: flex;
`;

const Right = styled("div")`
  width: 50%;
  gap: 10px;
  display: flex;
`;

const TextLeft = styled("div")`
  width: 30%;
  text-align: right;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

const TextRight = styled("div")`
  width: 70%;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const Detail = styled("div")``;

const WrapperContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled("h1")`
  font-weight: 600;
  width: fit-content;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
  border-bottom: 1px solid #d4e3f6;
  margin-bottom: 10px;
`;

const DetailBody = styled("div")`
  padding-left: 10px;
`;

const DetailText = styled("p")`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 10px;
`;

const Wrapper = styled("div")`
  width: 50%;
`;

const FooterContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default DetailLoker;
