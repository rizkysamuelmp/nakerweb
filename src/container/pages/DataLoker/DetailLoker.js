// Page Detail Loker
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";
import PopUp from "../../../components/PopUp";
import { formatAmountDot, isJSONString } from "../../../utils/helpers";
import Title from "../../../components/Title";

// Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  setActiveStep,
  executeLoker,
  setPopupStatus,
} from "../../../store/actions/dataLoker";

// Assets
import organization from "../../../assets/icon/Organization.svg";
import business from "../../../assets/icon/Business.svg";
import iconBusiness from "../../../assets/icon/bussiness-icon.png";
import iconBusinessSuccess from "../../../assets/icon/business-icon-success.png";
import iconBusinessDecline from "../../../assets/icon/business-icon-decline.png";

const DetailLoker = ({ history }) => {
  const dispatch = useDispatch();

  const { detailLoker, popupStatus } = useSelector(
    (state) => state.dataLoker,
    shallowEqual
  );

  const [confAccept, setConfAccept] = useState(false);
  const [confDecline, setConfDecline] = useState(false);

  const handleClose = () => {
    dispatch(setPopupStatus(0));
    dispatch(setActiveStep("all"));
  };

  return (
    <Container>
      <Title
        title="Detail Loker"
        withBack
        onBack={() => {
          if (history === "home") {
            dispatch(setActiveStep("page"));
          } else {
            dispatch(setActiveStep("all"));
          }
        }}
      />

      {detailLoker !== null && (
        <React.Fragment>
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
                    <TextLeft>Nama Perusahaan </TextLeft>
                    <TextRight>: {detailLoker?.company_name}</TextRight>
                  </Left>
                  <Right>
                    <TextLeft>Kategori </TextLeft>
                    <TextRight>: {detailLoker?.type} </TextRight>
                  </Right>
                </Line>
                <Line>
                  <Left>
                    <TextLeft>Alamat </TextLeft>
                    <TextRight>: {detailLoker?.address}</TextRight>
                  </Left>
                  <Right>
                    <TextLeft>Nama Pic </TextLeft>
                    <TextRight>: {detailLoker?.pic_name}</TextRight>
                  </Right>
                </Line>
                <Line>
                  <Left>
                    <TextLeft>Telepon </TextLeft>
                    <TextRight>: {detailLoker?.phone}</TextRight>
                  </Left>
                  <Right>
                    <TextLeft>Email </TextLeft>
                    <TextRight>: {detailLoker?.email}</TextRight>
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

              <WrapperContainer r>
                <Line>
                  {/* Deskripsi Lowongan */}
                  <Wrapper>
                    <Label>Deskripsi Pekerjaan</Label>
                    {isJSONString(
                      `{"__html":` + `${detailLoker?.job_desc}` + `}`
                    ) ? (
                      <div
                        style={{ padding: "0px 40px" }}
                        dangerouslySetInnerHTML={JSON.parse(
                          `{"__html":` + `${detailLoker?.job_desc}` + `}`
                        )}
                      />
                    ) : (
                      <DetailBody>
                        {`{"__html":` + `${detailLoker?.job_desc}` + `}`}
                      </DetailBody>
                    )}
                  </Wrapper>

                  {/* Kualifikasi */}
                  <Wrapper>
                    <Label>Kualifikasi</Label>
                    {isJSONString(detailLoker?.cualified) ? (
                      <div
                        style={{ padding: "0px 40px" }}
                        dangerouslySetInnerHTML={JSON.parse(
                          detailLoker?.cualified
                        )}
                      />
                    ) : (
                      <DetailBody>{detailLoker?.cualified}</DetailBody>
                    )}
                  </Wrapper>
                </Line>

                <Line>
                  {/* Lokasi Lowogan */}
                  <Wrapper>
                    <Label>Lokasi</Label>
                    <DetailBody>
                      <DetailText style={{ textTransform: "capitalize" }}>
                        {detailLoker?.city?.toLowerCase()},{" "}
                        {detailLoker?.provinice?.toLowerCase()}
                      </DetailText>
                    </DetailBody>
                  </Wrapper>
                  {/* Gaji */}
                  <Wrapper>
                    <Label>Gaji</Label>
                    <DetailBody>
                      <DetailText>
                        Rp
                        {formatAmountDot(detailLoker?.start_salary) || "0,00"} -
                        Rp
                        {formatAmountDot(detailLoker?.end_salary) || "0,00"}
                      </DetailText>
                    </DetailBody>
                  </Wrapper>
                </Line>

                <Line>
                  {/* Posisi */}
                  <Wrapper>
                    <Label>Posisi</Label>
                    <DetailBody>
                      <DetailText>{detailLoker?.job_position}</DetailText>
                    </DetailBody>
                  </Wrapper>
                  {/* Jenis */}
                  <Wrapper>
                    <Label>Jenis</Label>
                    <DetailBody>
                      <DetailText>Full Time</DetailText>
                    </DetailBody>
                  </Wrapper>
                </Line>

                <Line>
                  {/* Batas Pendaftaran */}
                  <Wrapper>
                    <Label>Batas Pendaftaran</Label>
                    <DetailBody>
                      {/* Kualifikasi */}
                      <DetailText>{detailLoker?.end_open}</DetailText>
                    </DetailBody>
                  </Wrapper>

                  {/* Benefit */}
                  <Wrapper>
                    <Label>Benefit</Label>
                    <DetailBody>
                      <DetailText>{detailLoker?.benefit}</DetailText>
                    </DetailBody>
                  </Wrapper>
                </Line>
              </WrapperContainer>
            </InfoCard>
          </Body>
          {detailLoker?.status === "0" && (
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
        </React.Fragment>
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
  padding: 30px;
`;

const InfoHead = styled("div")`
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 30px;
`;

const DetailPerusahaan = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  font-weight: 500;
  line-height: 15px;
  color: #000000;
`;

const TextRight = styled("div")`
  width: 70%;
  font-weight: 500;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const WrapperContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled("h1")`
  font-weight: 600;
  width: fit-content;
  font-size: 17px;
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
  line-height: 15px;
  margin-bottom: 10px;
`;

const Wrapper = styled("div")`
  width: 50%;
  align-self: start;
`;

const FooterContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default DetailLoker;
