import React from "react";
import { styled } from "@mui/material/styles";

// Assets
import back from "../../../assets/icon/Back.svg";
import organization from "../../../assets/icon/Organization.svg";
import business from "../../../assets/icon/Business.svg";

// Data Dummy
import { infoPerusahaan } from "./DataDummy";
import Button from "../../../components/Button";

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
  padding: 27px 35px;
  background: #f4f7fb;
  border-radius: 10px 10px 0px 0px;
  min-height: 70vh;
`;

const InfoCard = styled("div")`
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
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

const WrapperRight = styled("div")``;

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

const DetailLoker = ({ setActiveStep }) => {
  return (
    <Container>
      <HeadContainer>
        <Back onClick={() => setActiveStep("all")}>
          <img src={back} alt="" /> Kembali
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
            <WrapperRight></WrapperRight>
          </Detail>
        </InfoCard>
      </Body>
      <FooterContainer>
        <Button>Setujui</Button>
        <Button color="#FA3E3E">Tolak</Button>
      </FooterContainer>
    </Container>
  );
};

export default DetailLoker;
