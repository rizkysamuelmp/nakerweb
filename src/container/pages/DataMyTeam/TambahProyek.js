import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Compressor from "compressorjs";
import InputText from "../../../components/InputText";
import Button from "../../../components/Button";
import ButtonMUI from "@mui/material/Button";

// Asset
import { ReactComponent as IconBack } from "../../../assets/icon/icon-back.svg";
import iconCamera from "../../../assets/icon/icon-camera.svg";

const TambahProyek = ({ setActiveStep }) => {
  const inputEl = useRef(null);

  const [category, setCategory] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [type, setType] = useState(null);

  const listCategory = [
    {
      label: "Mboh",
      value: 0,
    },
    {
      label: "Ben",
      value: 1,
    },
  ];

  const listLokasi = [
    {
      label: "Mboh",
      value: 0,
    },
    {
      label: "Ben",
      value: 1,
    },
  ];

  const handleKategori = (event) => {
    setCategory(event.target.value);
  };

  const handleLokasi = (event) => {
    setLokasi(event.target.value);
  };

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

  const onButtonClick = () => {
    inputEl.current.click();
  };

  const onChange = async (event) => {
    const originalFile = event.target.files[0];
    const regex = /^.*base64,/;

    const convertToBase64 = (blob) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(blob);
      });
    };

    if (originalFile.type.split("/")[0] !== "image") {
      setInitial({
        ...initial,
        message: `The file selected was a not an image type and will not be reduced.`,
      });
    } else {
      new Promise((resolve, reject) => {
        new Compressor(originalFile, {
          quality: 0.8,
          maxWidth: 500,
          maxHeight: 500,
          checkOrientation: false,
          success: resolve,
          error: reject,
        });
      })
        .then((blob) => convertToBase64(blob))
        .then((base64Image) => {
          const decoded = atob(base64Image.replace(regex, ""));
          setInitial({
            image: base64Image,
            originalSize: originalFile.size,
            reducedSize: decoded.length,
          });
        });
    }
  };

  return (
    <Container>
      <TitleWrap>
        <IconButton onClick={() => setActiveStep("page")}>
          <IconBack />
        </IconButton>
        <Title>Buat Proyek Baru</Title>
      </TitleWrap>

      <ContentWrap>
        <IconButton
          style={{ width: "232px", height: "232px" }}
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
        <FormWrap>
          <InputWrap>
            Judul Task
            <InputText
              borderRadius="0px"
              placeholder="Masukan nama task anda"
              borderColor="#E4E4E4"
              placeholderStyle={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
              }}
              height="45px"
            />
          </InputWrap>
          <InputWrap>
            Kategori Task
            {category === "" && (
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#DADCDF",
                  position: "absolute",
                  margin: "36px 0px 0px 12px",
                }}
              >
                Pilih kategori yang tersedia
              </p>
            )}
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={category}
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleKategori}
              sx={{
                height: "45px",
                borderRadius: "0px",
                borderColor: "#E4E4E4",
              }}
            >
              {listCategory.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </InputWrap>
          <InputWrap>
            Jenis task
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <ButtonMUI
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(217, 217, 217, 0.1)",
                  border: `1px solid ${type ? "#115ABE" : "#E4E4E4"}`,
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "black",
                  height: "45px",
                  width: "100%",
                }}
                onClick={() => setType(true)}
              >
                Public
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "16px",
                    backgroundColor: type ? "#115ABE" : "#E8E8E8",
                  }}
                />
              </ButtonMUI>
              <ButtonMUI
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(217, 217, 217, 0.1)",
                  border: `1px solid ${type === false ? "#115ABE" : "#E4E4E4"}`,
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "black",
                  height: "45px",
                  width: "100%",
                }}
                onClick={() => setType(false)}
              >
                Private
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "16px",
                    backgroundColor: type === false ? "#115ABE" : "#E8E8E8",
                  }}
                />
              </ButtonMUI>
            </div>
          </InputWrap>
          <div style={{ display: "flex", gap: "10px", width: "100%" }}>
            <InputWrap style={{ width: "100%" }}>
              Start
              <TextField
                id="date"
                type="date"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    height: "45px",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </InputWrap>
            <InputWrap style={{ width: "100%" }}>
              End
              <TextField
                id="date"
                type="date"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    height: "45px",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </InputWrap>
          </div>
          <InputWrap>
            Pilih Lokasi Anda
            {lokasi === "" && (
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#DADCDF",
                  position: "absolute",
                  margin: "36px 0px 0px 12px",
                }}
              >
                Pilih lokasi task anda
              </p>
            )}
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={lokasi}
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleLokasi}
              sx={{
                height: "45px",
                borderRadius: "0px",
                borderColor: "#E4E4E4",
              }}
            >
              {listLokasi.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </InputWrap>
          <InputWrap>
            Deskripsi Task
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              placeholder="Deskripsikan task anda"
              borderColor="#E4E4E4"
              style={{
                width: "100%",
                marginLeft: "3px",
                border: "1px solid #E5E5E5",
                padding: "10px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
              }}
            />
          </InputWrap>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Saya menyetujui{" "}
                <span style={{ color: "#0B85FF" }}> syarat </span>&
                <span style={{ color: "#0B85FF" }}> ketentuan.</span>
              </p>
            }
          />
          <Button
            full
            borderRadius="5px"
            color="#115ABE"
            padding="10px"
            style={{ fontWeight: 600, fontSize: "16px", lineHeight: "19px" }}
          >
            Buat Project Baru
          </Button>
        </FormWrap>
      </ContentWrap>
    </Container>
  );
};
const CustomMenuItem = styled(MenuItem)(() => ({
  fontSize: "15px",
  fontWeight: 400,
}));

const InputWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  gap: "6px",
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

const FormWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
}));

const ImageWrap = styled("div")(() => ({
  border: "1px dashed #E0E0E0",
  borderRadius: "232px",
  width: "232px",
  height: "232px",
  padding: "20px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const Title = styled("p")(() => ({
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "40px",
}));

const TitleWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ContentWrap = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  borderRadius: "10px",
  backgroundColor: "white",
  padding: "30px",
  margin: "50px 50px 0px 50px",
}));

export default TambahProyek;
