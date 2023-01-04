/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Button from "../../../components/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DropDown from "../../../components/DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import {
  Avatar,
  Box,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogContent,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import InputText from "../../../components/InputText";
import Compressor from "compressorjs";
import { useHistory } from "react-router-dom";
import {
  serviceGetCategory,
  serviceGetCity,
  serviceGetJobType,
  serviceGetProvince,
  serviceLoker,
} from "../../../utils/api";

// Assets
import organization from "../../../assets/icon/Organization.svg";
import business from "../../../assets/icon/Business.svg";
import iconCamera from "../../../assets/icon/icon-camera.svg";
import PopUp from "../../../components/PopUp";
import documentWriter from "../../../assets/img/document-writer.png";
import { ReactComponent as IconBack } from "../../../assets/icon/icon-back.svg";

// Main Page
const FormulirLoker = () => {
  let history = useHistory();

  const [step, setStep] = useState("1");
  const [loading, setLoading] = useState(false);

  // State DropDown
  const [listKategori, setListKategori] = useState([]);
  const [selectKategori, setSelectKategori] = useState([]);
  const [listProvinsi, setListProvinsi] = useState([]);
  const [selectProvinsi, setSelectProvinsi] = useState([]);
  const [listKota, setListKota] = useState([]);
  const [selectKota, setSelectKota] = useState([]);
  const [listType, setListType] = useState([]);
  const [selectType, setSelectType] = useState([]);

  const [error, setError] = useState(false);
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [namaPic, setNamaPic] = useState("");
  const [email, setEmail] = useState("");
  const [deskrisi, setDeskrisi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [kualifikasi, setKualifikasi] = useState("");
  const [kirim, setKirim] = useState(false);
  const [benefit, setBenefit] = useState("");
  const [minGaji, setMinGaji] = useState("");
  const [maxGaji, setMaxGaji] = useState("");
  const [agree, setAgree] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [logo, setLogo] = useState({
    testType: "global",
    message: "",
    image: null,
    originalSize: null,
    reducedSize: null,
    files: [],
    image2: null,
    image2ReducedSize: null,
  });
  const [banner, setBanner] = useState({
    testType: "global",
    message: "",
    image: null,
    originalSize: null,
    reducedSize: null,
    files: [],
    image2: null,
    image2ReducedSize: null,
  });

  const inputLogo = useRef(null);
  const inputBanner = useRef(null);

  const convertToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  // API Get Category
  async function getKategori() {
    try {
      setLoading(true);
      const response = await serviceGetCategory();
      const list = [];
      let number = 0;
      response.data.data.forEach((item) => {
        list.push({
          label: item.name,
          value: number,
          sektor_id: item.sektor_id,
        });
        number = number + 1;
      });
      setListKategori(list);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  // API Get Provinsi
  async function getProvinsi() {
    try {
      setLoading(true);
      const response = await serviceGetProvince();
      const list = [];
      let number = 0;
      response.data.data.forEach((item) => {
        list.push({
          label: item.nama,
          value: number,
          kode: item.kode,
        });
        number = number + 1;
      });
      setListProvinsi(list);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  // API Get Provinsi
  async function getKota(valueProvinsi) {
    try {
      setLoading(true);
      const response = await serviceGetCity({
        province_id: valueProvinsi,
      });
      const list = [];
      let number = 0;
      response.data.data.forEach((item) => {
        list.push({
          label: item.nama,
          value: number,
          kode: item.kode,
          provinsi_code: item.province,
        });
        number = number + 1;
      });
      setListKota(list);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  async function getType() {
    try {
      setLoading(true);
      const response = await serviceGetJobType();
      const list = [];
      let number = 0;
      response.data.data.forEach((item) => {
        list.push({
          label: item.job_type_name,
          value: number,
          id: item.id,
        });
        number = number + 1;
      });
      setListType(list);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  // API Save Loker
  async function saveLoker() {
    const payload = {
      name: namaPerusahaan,
      address: alamat,
      phone: telepon,
      category: listKategori[selectKategori].label,
      pic_name: namaPic,
      total_employe: 0,
      sector_id: listKategori[selectKategori].sektor_id,
      email: email,
      job_desc: deskrisi,
      job_position: posisi,
      cualified: kualifikasi,
      provinice: listProvinsi[selectProvinsi].kode,
      city: listKota[selectKota].kode,
      start_salary: minGaji,
      end_salary: maxGaji,
      job_type: listType[selectType].id,
      benefit: benefit,
      start_open: moment(startDate).format("YYYY-MM-DD"),
      end_open: moment(endDate).format("YYYY-MM-DD"),
      banner: banner.image,
      logo: logo.image,
    };

    try {
      setLoading(true);
      const response = await serviceLoker(payload);
      if (response.status === 200) {
        setKirim(true);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  useEffect(() => {
    getKategori();
  }, []);

  useEffect(() => {
    if (step === "2" && listProvinsi.length === 0) {
      getProvinsi();
      getType();
    }
  }, [step]);

  const onClickLogo = () => {
    inputLogo.current.click();
  };

  const onClickBanner = () => {
    inputBanner.current.click();
  };

  const handleChangeProvinsi = (data) => {
    setSelectProvinsi([data.target.value]);
    getKota(listProvinsi[data.target.value].kode);
  };

  const onChangeLogo = async (event) => {
    const originalFile = event.target.files[0];
    const regex = /^.*base64,/;

    if (originalFile.type.split("/")[0] !== "image") {
      setLogo({
        ...logo,
        message: `The file selected was a not an image type and will not be reduced.`,
      });
    } else {
      new Promise((resolve, reject) => {
        new Compressor(originalFile, {
          quality: 0.9,
          maxWidth: 1024,
          maxHeight: 1024,
          checkOrientation: false,
          success: resolve,
          error: reject,
        });
      })
        .then((blob) => convertToBase64(blob))
        .then((base64Image) => {
          const decoded = atob(base64Image.replace(regex, ""));
          setLogo({
            image: base64Image,
            originalSize: originalFile.size,
            reducedSize: decoded.length,
          });
        });
    }
  };

  const onChangeBanner = async (event) => {
    const originalFile = event.target.files[0];
    const regex = /^.*base64,/;

    if (originalFile.type.split("/")[0] !== "image") {
      setBanner({
        ...logo,
        message: `The file selected was a not an image type and will not be reduced.`,
      });
    } else {
      new Promise((resolve, reject) => {
        new Compressor(originalFile, {
          quality: 0.9,
          maxWidth: 1024,
          maxHeight: 1024,
          checkOrientation: false,
          success: resolve,
          error: reject,
        });
      })
        .then((blob) => convertToBase64(blob))
        .then((base64Image) => {
          const decoded = atob(base64Image.replace(regex, ""));
          setBanner({
            image: base64Image,
            originalSize: originalFile.size,
            reducedSize: decoded.length,
          });
        });
    }
  };

  const handleClose = () => {
    setKirim(false);
    window.location.reload(false);
  };

  return (
    <Container>
      <Dialog open={loading}>
        <DialogContent>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </DialogContent>
      </Dialog>

      {step === "1" && (
        <React.Fragment>
          <Title title="Formulir Permintaan Publikasi Loker" />

          {/* Info Perusahaan */}
          <CardWrapper borderRadius="10px 10px 0 0">
            <CardHead>
              <img src={organization} alt="" width="24px" />
              <span>Info Perusahaan</span>
            </CardHead>
            <CardBody>
              <CardBodyLeft>
                <FormLabel style={{ textAlign: "center" }}>
                  Logo Perusahaan
                </FormLabel>
                <IconButton
                  style={{
                    width: "232px",
                    height: "232px",
                  }}
                  onClick={onClickLogo}
                >
                  <ImageWrap
                    style={{
                      border: `1px dashed ${
                        logo.image === null && error ? "#FCA1A1" : "#E0E0E0"
                      }`,
                    }}
                  >
                    {logo.image ? (
                      <Avatar
                        sx={{
                          height: 192,
                          width: 192,
                        }}
                        alt="avatar2"
                        className="avatar"
                        src={logo.image}
                      />
                    ) : (
                      <ImageBackground>
                        <img alt="icon-camera" src={iconCamera} />
                      </ImageBackground>
                    )}
                  </ImageWrap>
                  <input
                    type="file"
                    ref={inputLogo}
                    accept=".jpg, .png"
                    style={{ visibility: "hidden", display: "none" }}
                    onChange={onChangeLogo}
                  />
                </IconButton>
              </CardBodyLeft>
              <CardBodyRight>
                <Line>
                  <FormLabel>Nama Perusahaan</FormLabel>
                  <InputText
                    borderRadius="5px"
                    placeholder="Tulis nama perusahaan..."
                    value={namaPerusahaan}
                    name="namePerusahaan"
                    onChange={(e) => {
                      setNamaPerusahaan(e.target.value);
                    }}
                    height="40px"
                    borderColor={
                      error && namaPerusahaan === "" ? "#FCA1A1" : "#E4E4E4"
                    }
                    backgroundColor="rgba(217, 217, 217, 0.1)"
                    placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
                  />
                </Line>
                <Line>
                  <FormLabel>Alamat</FormLabel>
                  <InputText
                    borderRadius="5px"
                    placeholder="Tulis alamat..."
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    height="40px"
                    borderColor={error && alamat === "" ? "#FCA1A1" : "#E4E4E4"}
                    backgroundColor="rgba(217, 217, 217, 0.1)"
                    placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
                  />
                </Line>
                <Line>
                  <FormLabel>Telepon</FormLabel>
                  <InputText
                    borderRadius="5px"
                    placeholder="Tulis nomor telepon"
                    value={telepon}
                    onChange={(e) => setTelepon(e.target.value)}
                    height="40px"
                    borderColor={
                      error && telepon === "" ? "#FCA1A1" : "#E4E4E4"
                    }
                    backgroundColor="rgba(217, 217, 217, 0.1)"
                    placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
                  />
                </Line>
                <Line>
                  <FormLabel>Kategori</FormLabel>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <DropDown
                      dropdownValue={selectKategori}
                      listDropDown={listKategori}
                      handleChange={(data) =>
                        setSelectKategori([data.target.value])
                      }
                      placeHolder="Pilih Kategori"
                      borderRadius="5px"
                      width="100%"
                      borderColor={
                        selectKategori.length === 0 && error
                          ? "#FCA1A1"
                          : "#E4E4E4"
                      }
                    />
                  </div>
                </Line>
                <Line>
                  <FormLabel>Nama PIC</FormLabel>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <InputText
                      borderRadius="5px"
                      placeholder="Penanggung jawab"
                      value={namaPic}
                      onChange={(e) => setNamaPic(e.target.value)}
                      height="40px"
                      type="text"
                      width="100%"
                      borderColor={
                        error && namaPic === "" ? "#FCA1A1" : "#E4E4E4"
                      }
                      backgroundColor="rgba(217, 217, 217, 0.1)"
                      placeholderStyle={{
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    />
                  </div>
                </Line>
                <Line>
                  <FormLabel>Email</FormLabel>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <InputText
                      borderRadius="5px"
                      placeholder="Tuliskan Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      height="40px"
                      width="100%"
                      type="email"
                      borderColor={
                        error && email === "" ? "#FCA1A1" : "#E4E4E4"
                      }
                      backgroundColor="rgba(217, 217, 217, 0.1)"
                      placeholderStyle={{
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    />
                  </div>
                </Line>
                <Line>
                  <FormLabel />
                  <div
                    style={{
                      width: "100%",
                      fontStyle: "italic",
                      fontWeight: " 300",
                      fontSize: " 10px",
                      lineHeight: "10px",
                    }}
                  >
                    Email ini akan dikirimkan notifikasi ketika sesoarang
                    berhasil melamar
                  </div>
                </Line>
              </CardBodyRight>
            </CardBody>

            <FooterWrapper>
              <Button
                onClick={() => {
                  if (
                    namaPerusahaan === "" ||
                    alamat === "" ||
                    telepon === "" ||
                    namaPic === "" ||
                    email === "" ||
                    selectKategori.length === 0 ||
                    logo.image === null
                  ) {
                    setError(true);
                  } else {
                    setStep("2");
                    setError(false);
                  }
                }}
              >
                Selanjutnya
              </Button>
            </FooterWrapper>
          </CardWrapper>
        </React.Fragment>
      )}

      {step === "2" && (
        <React.Fragment>
          <div>
            <IconButton style={{ padding: "0px" }} onClick={() => setStep("1")}>
              <IconBack />
            </IconButton>
          </div>
          <Title title="Formulir Permintaan Publikasi Loker" />
          <CardWrapper borderRadius="10px">
            <CardHead>
              <img src={business} alt="" width="24px" />
              <span>Info Lowongan</span>
            </CardHead>
            <CardBody>
              <BodyStepTwo>
                {/* Deskrisi Pekerjaan */}
                <Wrapper>
                  <TitleDesc>Banner Loker</TitleDesc>

                  <div
                    style={{
                      border: `1px dashed ${
                        banner.image === null && error ? "#FCA1A1" : "#E0E0E0"
                      }`,
                      aspectRatio: "10 / 2",
                      padding: "10px",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                  >
                    {banner.image ? (
                      <Button sx={{ p: 0 }} onClick={onClickBanner}>
                        <Avatar
                          sx={{
                            height: "100%",
                            width: "100%",
                            aspectRatio: "10 / 2",
                          }}
                          style={{
                            borderRadius: "0px",
                          }}
                          alt="avatar2"
                          className="avatar"
                          src={banner.image}
                        />
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F0F0F0",
                          height: "100%",
                          width: "100%",
                        }}
                        onClick={onClickBanner}
                      >
                        <div
                          style={{
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "5px",
                          }}
                        >
                          <img
                            alt="icon-camera"
                            src={iconCamera}
                            height="40"
                            width="40"
                          />
                          <p
                            style={{
                              width: "100%",
                              fontStyle: "italic",
                              fontWeight: " 300",
                              fontSize: " 10px",
                              lineHeight: "10px",
                              color: "rgba(0, 0, 0, 0.25)",
                            }}
                          >
                            Gambar 1024 x 256, max : 1MB
                          </p>
                        </div>
                      </Button>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={inputBanner}
                    accept=".jpg, .png"
                    style={{ visibility: "hidden", display: "none" }}
                    onChange={onChangeBanner}
                  />
                </Wrapper>

                {/* Posisi */}
                <Wrapper>
                  <TitleDesc>Posisi</TitleDesc>
                  <InputText
                    placeholder="Posisi apa yang anda butuhkan ?"
                    borderRadius="5px"
                    value={posisi}
                    onChange={(e) => setPosisi(e.target.value)}
                    height="40px"
                    borderColor={error && posisi === "" ? "#FCA1A1" : "#E4E4E4"}
                    backgroundColor="rgba(217, 217, 217, 0.1)"
                    placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
                  />
                </Wrapper>

                <Wrapper>
                  <TitleDesc>Deskripsi Pekerjaan</TitleDesc>
                  <TextareaAutosize
                    placeholder="Jelaskan secara rinci seperti apa pekerja yang anda ingin kan ....."
                    minRows={6}
                    maxRows={6}
                    style={{
                      resize: "none",
                      background: "rgba(217, 217, 217, 0.1)",
                      border: "1px solid #E5E5E5",
                      borderRadius: "5px",
                      padding: "10px",
                      fontFamily: "inherit",
                      height: "174px",
                      borderColor: `${
                        error && deskrisi === "" ? "#FCA1A1" : "#E4E4E4"
                      }`,
                    }}
                    value={deskrisi}
                    onChange={(e) => setDeskrisi(e.target.value)}
                  />
                </Wrapper>

                {/* Batas Pendaftaran */}
                <Wrapper>
                  <TitleDesc>Batas Pendaftaran</TitleDesc>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        zIndex: 99,
                      }}
                    >
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        customInput={
                          <InputText
                            placeholder="Mulai"
                            borderColor={
                              error && startDate === null
                                ? "#FCA1A1"
                                : "#E4E4E4"
                            }
                            borderRadius="5px"
                            height="40px"
                            width="100%"
                            backgroundColor="rgba(217, 217, 217, 0.1)"
                            placeholderStyle={{
                              fontSize: "12px",
                              lineHeight: "15px",
                            }}
                          />
                        }
                      />
                    </div>
                    -
                    <div
                      style={{
                        width: "100%",
                        zIndex: 99,
                      }}
                    >
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        customInput={
                          <InputText
                            placeholder="Sampai"
                            borderColor={
                              error && endDate === null ? "#FCA1A1" : "#E4E4E4"
                            }
                            borderRadius="5px"
                            height="40px"
                            width="100%"
                            backgroundColor="rgba(217, 217, 217, 0.1)"
                            placeholderStyle={{
                              fontSize: "12px",
                              lineHeight: "15px",
                            }}
                          />
                        }
                      />
                    </div>
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
                      backgroundColor: "rgba(217, 217, 217, 0.1)",
                      fontFamily: "inherit",
                      border: "1px solid #E5E5E5",
                      borderRadius: "5px",
                      padding: "10px",
                      height: "72px",
                      borderColor: `${
                        error && kualifikasi === "" ? "#FCA1A1" : "#E4E4E4"
                      }`,
                    }}
                    borderColor={
                      error && kualifikasi === "" ? "#FCA1A1" : "#E4E4E4"
                    }
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
                      gap: "27px",
                    }}
                  >
                    <DropDown
                      dropdownValue={selectProvinsi}
                      listDropDown={listProvinsi}
                      handleChange={(data) => handleChangeProvinsi(data)}
                      placeHolder="Pilih Provinsi"
                      width="100%"
                      borderColor={
                        selectProvinsi.length === 0 && error
                          ? "#FCA1A1"
                          : "#E4E4E4"
                      }
                    />
                    <DropDown
                      dropdownValue={selectKota}
                      listDropDown={listKota}
                      handleChange={(data) =>
                        setSelectKota([data.target.value])
                      }
                      placeHolder="Pilih Kabupaten/Kota"
                      width="100%"
                      borderColor={
                        selectKota.length === 0 && error ? "#FCA1A1" : "#E4E4E4"
                      }
                    />
                  </div>
                </Wrapper>

                {/* Gaji */}
                <Wrapper>
                  <TitleDesc>Gaji</TitleDesc>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <InputText
                      placeholder="Mulai"
                      value={minGaji}
                      onChange={(e) => setMinGaji(e.target.value)}
                      borderColor={
                        error && minGaji === "" ? "#FCA1A1" : "#E4E4E4"
                      }
                      borderRadius="5px"
                      height="40px"
                      backgroundColor="rgba(217, 217, 217, 0.1)"
                      placeholderStyle={{
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    />
                    -
                    <InputText
                      placeholder="Sampai"
                      value={maxGaji}
                      onChange={(e) => setMaxGaji(e.target.value)}
                      borderColor={
                        error && maxGaji === "" ? "#FCA1A1" : "#E4E4E4"
                      }
                      borderRadius="5px"
                      height="40px"
                      backgroundColor="rgba(217, 217, 217, 0.1)"
                      placeholderStyle={{
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    />
                  </div>
                </Wrapper>

                {/* Jenis */}
                <Wrapper>
                  <TitleDesc>Jenis</TitleDesc>
                  <DropDown
                    placeHolder="Pilih Jenis"
                    dropdownValue={selectType}
                    listDropDown={listType}
                    handleChange={(data) => setSelectType([data.target.value])}
                    width="100%"
                    borderColor={
                      selectType.length === 0 && error ? "#FCA1A1" : "#E4E4E4"
                    }
                  />
                </Wrapper>

                {/* Benefit */}
                <Wrapper>
                  <TitleDesc>Benefit</TitleDesc>
                  <InputText
                    value={benefit}
                    onChange={(e) => setBenefit(e.target.value)}
                    borderRadius="5px"
                    height="40px"
                    borderColor={
                      error && benefit === "" ? "#FCA1A1" : "#E4E4E4"
                    }
                    placeholder="Tuliskan benefit apa saja yang anda berikan ?"
                    backgroundColor="rgba(217, 217, 217, 0.1)"
                    placeholderStyle={{ fontSize: "12px", lineHeight: "15px" }}
                  />
                </Wrapper>

                {/* Syarat Dan Ketentuan */}
                <Wrapper>
                  <Agreement>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                        />
                      }
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
                  </Agreement>
                </Wrapper>
              </BodyStepTwo>
            </CardBody>

            <CardFooter>
              <Button
                onClick={() => {
                  if (
                    banner.image === null ||
                    posisi === "" ||
                    deskrisi === "" ||
                    kualifikasi === "" ||
                    selectProvinsi.length === 0 ||
                    selectKota.length === 0 ||
                    benefit === ""
                  ) {
                    setError(true);
                  } else {
                    saveLoker();
                  }
                }}
                disabled={!agree}
              >
                Kirim
              </Button>
            </CardFooter>
          </CardWrapper>

          <PopUp
            open={kirim}
            width="350px"
            padding="60px 30px 25px 30px"
            imgSrc={documentWriter}
            onClickAction={handleClose}
            onClose={handleClose}
            title="Berhasil"
            info="Formulir anda berhasil dikirim dan akan direview."
          />
        </React.Fragment>
      )}
    </Container>
  );
};

export default FormulirLoker;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

const CardWrapper = styled("div")`
  background: #ffffff;
  border-radius: ${(props) => props.borderRadius};
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
  justify-content: center;
  gap: 50px;
  margin: 30px 0px;
  flex-direction: column;
  align-items: center;
`;

const CardBodyLeft = styled("div")`
  display: flex;
  justify-content: center;
  width: 35%;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ImageWrap = styled("div")(() => ({
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
  gap: 10px;
`;

const Line = styled("div")`
  display: flex;
  align-items: center;
`;

const FormLabel = styled("label")`
  width: 30%;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

const FooterWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

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
  justify-content: end;
`;

const Agreement = styled("div")`
  display: flex;
  align-items: center;
`;
