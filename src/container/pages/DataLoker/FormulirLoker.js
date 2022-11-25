import React, { useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// Assets
import organization from "../../../assets/icon/Organization.svg";
import business from "../../../assets/icon/Business.svg";
import InputText from "../../../components/InputText";

const Container = styled("div")``;

// Style stepOne
const BodyWrapper = styled("div")`
  background: #f4f7fb;
  border-radius: 10px 10px 0px 0px;
`;

const CardWrapper = styled("div")`
  background: #ffffff;
  border-radius: ${(props) => props.borderRadius};
  padding: 22px 11px;
`;

const CardHead = styled("div")`
  display: flex;
  align-items: center;
  gap: 9px;

  /* text style */
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

const CardBody = styled("div")`
  display: flex;
  margin: 38px 31px;
  gap: 10px;
`;

const CardBodyLeft = styled("div")`
  width: 50%;
  background-color: yellow;
`;

const CardBodyRight = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Line = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FormLabel = styled("label")`
  width: 40%;
  text-align: right;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

const DescEmail = styled("span")`
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;
  font-style: italic;
`;

const FooterWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

// Style stepTwo
const HeadContainer = styled("div")``;

const BodyStepTwo = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const TitleDesc = styled("span")`
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

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StepOne = ({ setActive }) => {
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [kategori, setKategori] = useState("");
  const [namaPic, setNamaPic] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Title title="Formulir permintaan publikasi loker" />
      <BodyWrapper>
        {/* Info Perusahaan */}
        <CardWrapper borderRadius="10px 10px 0 0">
          <CardHead>
            <img src={organization} alt="" width="24px" />
            <span>Info Perusahaan</span>
          </CardHead>
          <CardBody>
            <CardBodyLeft></CardBodyLeft>
            <CardBodyRight>
              <Line>
                <FormLabel>Nama Perusahaan</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tulis nama perusahaan..."
                  value={namaPerusahaan}
                  onChange={(e) => setNamaPerusahaan(e.target.value)}
                />
              </Line>
              <Line>
                <FormLabel>Alamat</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tulis alamat..."
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </Line>
              <Line>
                <FormLabel>Telepon</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tulis nomor telepon"
                  value={telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                />
              </Line>
              <Line>
                <FormLabel>Kategori</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Pilih kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                />
              </Line>
              <Line>
                <FormLabel>Nama Pic</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Penanggung jawab"
                  value={namaPic}
                  onChange={(e) => setNamaPic(e.target.value)}
                />
              </Line>
              <Line>
                <FormLabel>Email</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tuliskan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Line>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div style={{ width: "40%" }}></div>
                <DescEmail>
                  Email ini akan dikirimkan notifikasi ketika sesoarang berhasil
                  melamar
                </DescEmail>
              </div>
            </CardBodyRight>
          </CardBody>
        </CardWrapper>
        <FooterWrapper>
          <Button onClick={() => setActive("stepTwo")}>Selanjutnya</Button>
        </FooterWrapper>
      </BodyWrapper>
    </>
  );
};

const StepTwo = () => {
  const [deskrisi, setDeskrisi] = useState("");
  const [posisi, setPosisi] = useState("");

  return (
    <Container>
      <CardWrapper borderRadius="10px">
        <CardHead>
          <img src={business} alt="" width="24px" />
          <span>Info Lowongan</span>
        </CardHead>
        <CardBody>
          <BodyStepTwo>
            {/* Deskrisi Pekerjaan */}
            <Wrapper>
              <TitleDesc>Deskripsi Pekerjaan</TitleDesc>
              <TextareaAutosize
                // aria-label="minimum height"
                placeholder="Jelaskan secara rinci seperti apa pekerja yang anda ingin kan ....."
                minRows={6}
                maxRows={6}
                style={{
                  resize: "none",
                  marginLeft: "3px",
                  backgroundColor: "rgba(217, 217, 217, 0.2)",
                  border: "1px solid #E5E5E5",
                  padding: "10px",
                }}
                value={deskrisi}
                onChange={(e) => setDeskrisi(e.target.value)}
              />
            </Wrapper>

            {/* Posisi */}
            <Wrapper>
              <TitleDesc>Posisi</TitleDesc>
              <InputText
                placeholder="Posisi apa yang anda butuhkan ?"
                borderRadius="0"
                value={posisi}
                onChange={(e) => setPosisi(e.target.value)}
              />
            </Wrapper>

            {/* Batas Pendaftaran */}
            <Wrapper>
              <TitleDesc>Batas Pendaftaran</TitleDesc>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InputText /> - <InputText />
              </div>
            </Wrapper>
          </BodyStepTwo>
          <BodyStepTwo>
            <Wrapper>
              <TitleDesc>Kualifikasi</TitleDesc>
            </Wrapper>
          </BodyStepTwo>
        </CardBody>
      </CardWrapper>
    </Container>
  );
};

const FormulirLoker = () => {
  const [activeStep, setActiveStep] = useState("stepOne");

  return (
    <Container>
      {activeStep === "stepOne" && <StepOne setActive={setActiveStep} />}
      {activeStep === "stepTwo" && <StepTwo setActive={setActiveStep} />}
    </Container>
  );
};

export default FormulirLoker;
