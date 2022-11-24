import React, { useState } from "react";
import Button from "../../../components/Button";
import { logo, social } from "../../../assets/img";
import InputText from "../../../components/InputText";
import InputAdornment from "@mui/material/InputAdornment";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import PopUp from "../../../components/PopUp";

// Asset
import { ReactComponent as EyeLookIcon } from "../../../assets/icon/icon-eye-look.svg";
import iconEmail from "../../../assets/icon/icon-email.svg";
import iconPassword from "../../../assets/icon/icon-password.svg";
import LockErrorBlack from "../../../assets/img/lock-error-black.png";
import mailBlue from "../../../assets/img/mail-blue.png";

const Login = () => {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [popUpAuth, setPopUpAuth] = useState(false);
  const [popUpEmail, setPopUpEmail] = useState(false);

  const handleSubmit = () => {
    if (email !== "rizky@gmail.com") {
      setPopUpEmail(true);
    } else {
      setPopUpAuth(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        gap: "75px",
        padding: "80px",
        justifyContent: "space-evenly",
      }}
    >
      <div
        className="form-login"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          width: "400px",
          marginBottom: "80px",
          gap: "10px",
        }}
      >
        <img src={logo} alt="logo" height={250} width={250} />
        <h1
          style={{
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "18px",
          }}
        >
          Masuk
        </h1>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "500",
            lineHeight: "18px",
            letterSpacing: "0.01em",
            color: "#7E7474",
          }}
        >
          Silahkan masukkan email dan kata sandi anda
        </p>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <label
              for="email"
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "18px",
              }}
            >
              Email :
            </label>
            <br />
            <img
              alt="icon-email"
              src={iconEmail}
              style={{
                position: "absolute",
                zIndex: "50",
                padding: "13px 0px 0px 13px",
              }}
            />
            <InputText
              key="email"
              endIcon
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              placeholderStyle={{ color: "#D2D0D0" }}
            />
          </div>
          <div>
            <label
              for="password"
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "18px",
              }}
            >
              Kata sandi :
            </label>
            <br />
            <img
              alt="icon-password"
              src={iconPassword}
              style={{
                position: "absolute",
                zIndex: "50",
                padding: "13px 0px 0px 13px",
              }}
            />
            <InputText
              key="password"
              endIcon
              value={password}
              type={hidePassword ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              iconAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    <EyeLookIcon />
                  </IconButton>
                </InputAdornment>
              }
              placeholderStyle={{ color: "#D2D0D0" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    padding: "0px 8px 0px 8px",
                  }}
                />
              }
              label={
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "18px",
                  }}
                >
                  Ingat Saya
                </p>
              }
            />
            <p
              style={{
                fontWeight: " 700",
                fontSize: " 13px",
                lineHeight: " 18px",
                letterSpacing: " 0.01em",
                color: " #0B85FF",
                cursor: "pointer",
              }}
            >
              Lupa kata sandi
            </p>
          </div>
          <Button
            variant="contained"
            full
            type="submit"
            disabled={email === "" || password === ""}
          >
            Masuk
          </Button>
        </form>
      </div>

      <div
        className="img-right"
        style={{
          width: "60%",
          maxWidth: "672px",
        }}
      >
        <img
          src={social}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </div>

      <PopUp
        open={popUpAuth}
        imgSrc={LockErrorBlack}
        onClose={() => setPopUpAuth(false)}
        title="Autentikasi gagal !"
        info="Email atau kata sandi yang anda masukkan salah"
      />

      <PopUp
        open={popUpEmail}
        imgSrc={mailBlue}
        onClose={() => setPopUpEmail(false)}
        title="Email tidak terdaftar"
        info="Email yang anda masukkan belum terdaftar."
      />
    </div>
  );
};

export default Login;
