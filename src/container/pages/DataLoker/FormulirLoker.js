import React, { useRef, useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DropDown from "../../../components/DropDown";
import { Avatar, Checkbox, IconButton } from "@mui/material";
import InputText from "../../../components/InputText";

// Assets
import organization from "../../../assets/icon/Organization.svg";
import business from "../../../assets/icon/Business.svg";
import iconCamera from "../../../assets/icon/icon-camera.svg";
import PopUp from "../../../components/PopUp";
import documentWriter from "../../../assets/img/document-writer.png";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

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
  justify-content: center;
  gap: 10px;
`;

const CardBodyLeft = styled("div")`
  display: flex;
  justify-content: center;
  width: 35%;
`;

const ImageWrap = styled("div")(() => ({
  border: "1px dashed #E0E0E0",
  borderRadius: "232px",
  width: "232px",
  height: "232px",
  padding: "20px",
}));

const ImageBackground = styled("div")(() => ({
  borderRadius: "192px",
  width: "192px",
  height: "192px",
  backgroundColor: "#F0F0F0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CardBodyRight = styled("div")`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Line = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FormLabel = styled("label")`
  width: 30%;
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
// const HeadContainer = styled("div")``;

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
  margin-bottom: 5px;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardFooter = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0 31px;
`;

const Agreement = styled("div")`
  display: flex;
  align-items: center;
`;

const AgreementText = styled("p")`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const TextSpan = styled("span")`
  color: #3b9cf1;
  margin: 0 4px;
`;

const StepOne = ({ setActive }) => {
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [kategori, setKategori] = useState("");
  const [namaPic, setNamaPic] = useState("");
  const [email, setEmail] = useState("");
  const [initial, setInitial] = useState({
    testType: "global",
    message: "",
    image: null,
    originalSize: null,
    reducedSize: null,
    files: [],
    image2: null,
    image2ReducedSize: null,
  });

  // ref
  const inputEl = useRef(null);

  // Function
  const onButtonClick = () => {
    inputEl.current.click();
  };

  const onChange = async (event) => {
    const originalFile = event.target.files[0];
    const regex = /^.*base64,/;
  };

  const convertToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  return (
    <Container>
      <Title title="Formulir permintaan publikasi loker" />
      <BodyWrapper>
        {/* Info Perusahaan */}
        <CardWrapper borderRadius="10px 10px 0 0">
          <CardHead>
            <img src={organization} alt="" width="24px" />
            <span>Info Perusahaan</span>
          </CardHead>
          <CardBody>
            <CardBodyLeft>
              <IconButton
                style={{
                  width: "232px",
                  height: "232px",
                }}
                onClick={onButtonClick}
              >
                <ImageWrap>
                  {initial.image ? (
                    <Avatar
                      sx={{
                        height: 192,
                        width: 192,
                      }}
                      alt="avatar2"
                      className="avatar"
                      src={initial.image}
                    />
                  ) : (
                    <ImageBackground>
                      <img alt="icon-camera" src={iconCamera} />
                    </ImageBackground>
                  )}
                </ImageWrap>
                <input
                  type="file"
                  ref={inputEl}
                  accept=".jpg, .png"
                  style={{ visibility: "hidden", display: "none" }}
                  onChange={onChange}
                />
              </IconButton>
            </CardBodyLeft>
            <CardBodyRight>
              <Line>
                <FormLabel>Nama Perusahaan</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tulis nama perusahaan..."
                  value={namaPerusahaan}
                  onChange={(e) => setNamaPerusahaan(e.target.value)}
                  height="30px"
                />
              </Line>
              <Line>
                <FormLabel>Alamat</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tulis alamat..."
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  height="30px"
                />
              </Line>
              <Line>
                <FormLabel>Telepon</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tulis nomor telepon"
                  value={telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                  height="30px"
                />
              </Line>
              <Line>
                <FormLabel>Kategori</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Pilih kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  height="30px"
                />
              </Line>
              <Line>
                <FormLabel>Nama Pic</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Penanggung jawab"
                  value={namaPic}
                  onChange={(e) => setNamaPic(e.target.value)}
                  height="30px"
                />
              </Line>
              <Line>
                <FormLabel>Email</FormLabel>
                <InputText
                  borderRadius="0"
                  placeholder="Tuliskan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  height="30px"
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
              <FooterWrapper>
                <Button onClick={() => setActive("stepTwo")}>
                  Selanjutnya
                </Button>
              </FooterWrapper>
            </CardBodyRight>
          </CardBody>
        </CardWrapper>
      </BodyWrapper>
    </Container>
  );
};

const StepTwo = () => {
  const [deskrisi, setDeskrisi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [kualifikasi, setKualifikasi] = useState("");
  const [dropDown, setDropDown] = useState(0);
  const [kirim, setKirim] = useState(false);

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
                  height: "174px",
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
                height="30px"
              />
            </Wrapper>

            {/* Batas Pendaftaran */}
            <Wrapper>
              <TitleDesc>Batas Pendaftaran</TitleDesc>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InputText height="30px" borderRadius="0" /> -
                <InputText height="30px" borderRadius="0" />
              </div>
            </Wrapper>
          </BodyStepTwo>
          <BodyStepTwo>
            {/* Kualifikasi */}
            <Wrapper>
              <TitleDesc>Kualifikasi</TitleDesc>
              <TextareaAutosize
                // aria-label="minimum height"
                placeholder="Jelaskan secara rinci seperti apa pekerja yang anda ingin kan ....."
                minRows={6}
                style={{
                  resize: "none",
                  marginLeft: "3px",
                  backgroundColor: "rgba(217, 217, 217, 0.2)",
                  border: "1px solid #E5E5E5",
                  padding: "10px",
                  height: "72px",
                }}
                value={kualifikasi}
                onChange={(e) => setKualifikasi(e.target.value)}
              />
            </Wrapper>

            {/* Lokasi */}
            <Wrapper>
              <TitleDesc>Lokasi</TitleDesc>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                }}
              >
                <DropDown
                  dropdownValue={dropDown}
                  handleChange={(e) => setDropDown(e.target.value)}
                  width="100%"
                />
                <DropDown
                  dropdownValue={dropDown}
                  handleChange={(e) => setDropDown(e.target.value)}
                  width="100%"
                />
              </div>
            </Wrapper>

            {/* Gaji */}
            <Wrapper>
              <TitleDesc>Gaji</TitleDesc>
              <div
                style={{
                  display: "flex",
                  width: " 80%",
                  gap: "24px",
                }}
              >
                <InputText borderRadius="0" height="30px" />
                <InputText borderRadius="0" height="30px" />
              </div>
            </Wrapper>

            {/* Jenis */}
            <Wrapper>
              <TitleDesc>Jenis</TitleDesc>
              <InputText borderRadius="0" height="30px" width="50%" />
            </Wrapper>
            <Wrapper>
              <TitleDesc>Benefit</TitleDesc>
              <InputText borderRadius="0" height="30px" />
            </Wrapper>
          </BodyStepTwo>
        </CardBody>
        <CardFooter>
          <Agreement>
            <Checkbox />
            <AgreementText style={{}}>
              Saya menyetujui <TextSpan>syarat</TextSpan> &{" "}
              <TextSpan>ketentuan.</TextSpan>
            </AgreementText>
          </Agreement>

          <Button onClick={() => setKirim(true)}>Kirim</Button>
        </CardFooter>
      </CardWrapper>

      <PopUp
        open={kirim}
        width="350px"
        padding="60px 30px 25px 30px"
        imgSrc={documentWriter}
        onClose={() => setKirim(false)}
        onClickAction={() => setKirim(false)}
        title="Berhasil dikirim"
        info="Formulir anda berhasil dikirim
        dan akan di review."
      />
    </Container>
  );
};

const FormulirLoker = ({ setActive }) => {
  const [activeStep, setActiveStep] = useState("stepOne");

  return (
    <Container>
      {activeStep === "stepOne" && <StepOne setActive={setActiveStep} />}
      {activeStep === "stepTwo" && <StepTwo setActive={setActiveStep} />}
    </Container>
  );
};

export default FormulirLoker;
