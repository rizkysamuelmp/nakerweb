// Page Detail Loker
// --------------------------------------------------------

import React, { useState } from "react";
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

// Data Dummy
import { infoPerusahaan } from "./DataDummy";

const DetailLoker = ({ setActiveStep, history }) => {
  const [confAccept, setConfAccept] = useState(false);
  const [accept, setAccept] = useState(false);
  const [confDecline, setConfDecline] = useState(false);
  const [decline, setDecline] = useState(false);

  return (
    <Container>
      <HeadContainer>
        <Back
          onClick={() => {
            if (history === "home") {
              setActiveStep("page");
            } else {
              setActiveStep("all");
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
                <TextRight> {infoPerusahaan.namaPerusahaan}</TextRight>
              </Left>
              <Right>
                <TextLeft>Kategori :</TextLeft>
                <TextRight> {infoPerusahaan.kategori}</TextRight>
              </Right>
            </Line>
            <Line>
              <Left>
                <TextLeft>Alamat :</TextLeft>
                <TextRight> {infoPerusahaan.alamat}</TextRight>
              </Left>
              <Right>
                <TextLeft>Nama Pic :</TextLeft>
                <TextRight> {infoPerusahaan.namaPic}</TextRight>
              </Right>
            </Line>
            <Line>
              <Left>
                <TextLeft>Telepon :</TextLeft>
                <TextRight> {infoPerusahaan.telepon}</TextRight>
              </Left>
              <Right>
                <TextLeft>Email :</TextLeft>
                <TextRight> {infoPerusahaan.email}</TextRight>
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
                  <DetailBody>
                    <DetailText>Tugas & Tanggung Jawab:</DetailText>
                    <DetailText>
                      1. Mengirim sampel, dokumen, dll ke alamat tujuan
                    </DetailText>
                    <DetailText>
                      2. Mengambil pesanan, membeli barang kebutuhan kantor
                    </DetailText>
                    <DetailText>
                      3. Merawat kendaraan operasional kantor
                    </DetailText>
                  </DetailBody>
                </Wrapper>

                {/* Kualifikasi */}
                <Wrapper>
                  <Title>Kualifikasi</Title>
                  <DetailBody>
                    <DetailText>1. Pria, Max 35th</DetailText>
                    <DetailText>2. Memiliki SIM C aktif</DetailText>
                    <DetailText>3. Bersedia lembur jika diperlukan</DetailText>
                    <DetailText>
                      4. Menguasai area Jakarta, Tangerang dan sekitarnya
                    </DetailText>
                    <DetailText>Jenis Pekerjaan: Penuh Waktu</DetailText>
                    <DetailText>Gaji: Dari Rp4.250.000 per bulan</DetailText>
                  </DetailBody>
                </Wrapper>
              </Line>

              <Line>
                {/* Lokasi Lowogan */}
                <Wrapper>
                  <Title>Lokasi</Title>
                  <DetailBody>
                    <DetailText>Kab. Sleman, Yogyakarta</DetailText>
                  </DetailBody>
                </Wrapper>
                {/* Gaji */}
                <Wrapper>
                  <Title>Gaji</Title>
                  <DetailBody>
                    <DetailText>Rp 1.000.000 - Rp 3.500.000</DetailText>
                  </DetailBody>
                </Wrapper>
              </Line>

              <Line>
                {/* Posisi */}
                <Wrapper>
                  <Title>Posisi</Title>
                  <DetailBody>
                    <DetailText>Supir Truck</DetailText>
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
                    <DetailText>07 Agu 2022 s/d 07 Sep 2022</DetailText>
                  </DetailBody>
                </Wrapper>

                {/* Benefit */}
                <Wrapper>
                  <Title>Benefit</Title>
                  <DetailBody>
                    <DetailText>BPJS, Tunjangan, Uang Makan.</DetailText>
                  </DetailBody>
                </Wrapper>
              </Line>
            </WrapperContainer>
          </Detail>
        </InfoCard>
      </Body>
      <FooterContainer>
        <Button onClick={() => setConfAccept(true)}>Setujui</Button>
        <Button color="#FA3E3E" onClick={() => setConfDecline(true)}>
          Tolak
        </Button>
      </FooterContainer>

      {/* Popup Konfirmasi Setuju Loker */}
      <PopUp
        open={confAccept}
        buttonWord="Setujui"
        imgSrc={iconBusiness}
        onClose={() => setConfAccept(false)}
        onClickAction={() => {
          setConfAccept(false);
          setAccept(true);
        }}
        title="Konfirmasi Loker"
        info="Apakah anda ingin menyetujui loker ini ?"
      />

      {/* Popup Permintaan Disetujui */}
      <PopUp
        open={accept}
        buttonWord="Ok"
        imgSrc={iconBusinessSuccess}
        onClose={() => setAccept(false)}
        onClickAction={() => {
          setAccept(false);
        }}
        title="Permintaan Disetujui"
        info="Permintaan publikasi loker berhasil disetujui."
      />

      {/* Popup Konfirmasi Tolak Loker */}
      <PopUp
        open={confDecline}
        buttonWord="Tolak"
        imgSrc={iconBusiness}
        onClose={() => setConfDecline(false)}
        onClickAction={() => {
          setConfDecline(false);
          setDecline(true);
        }}
        title="Konfirmasi Loker"
        info="Apakah anda ingin menolak loker ini ?"
      />

      {/* Popup Berhasil Ditolak */}
      <PopUp
        open={decline}
        buttonWord="Ok"
        imgSrc={iconBusinessDecline}
        onClose={() => setDecline(false)}
        onClickAction={() => {
          setDecline(false);
        }}
        title="Permintaan Ditolak"
        info="Permintaan publikasi loker berhasil ditolak."
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
