/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { logo, social } from "../../../assets/img";
import InputText from "../../../components/InputText";
import InputAdornment from "@mui/material/InputAdornment";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import PopUp from "../../../components/PopUp";
import { Link, useHistory } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../../../store/actions/pageContainer";

// Asset
import { ReactComponent as EyeLookIcon } from "../../../assets/icon/icon-eye-look.svg";
import iconEmail from "../../../assets/icon/icon-email.svg";
import iconPassword from "../../../assets/icon/icon-password.svg";
import LockErrorBlack from "../../../assets/img/lock-error-black.png";
import mailBlue from "../../../assets/img/mail-blue.png";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const dataUser = localStorage.getItem("dataUser");
  const { isLogin, isLoading, message } = useSelector(
    (state) => state.pageContainer,
    shallowEqual
  );

  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [popUpAuth, setPopUpAuth] = useState(false);
  const [popUpEmail, setPopUpEmail] = useState(false);

  useEffect(() => {
    if (isLogin && dataUser) {
      history.push("/nakerweb/dashboard");
    }
    if (!isLogin || !dataUser) {
      history.push("/nakerweb/login");
      localStorage.removeItem("dataUser");
    }
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionLogin(email, password));
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
          marginBottom: "120px",
          gap: "20px",
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
            textAlign: "center",
            color: message ? "#d32f2f" : "#7E7474",
          }}
        >
          {message ? message : "Silahkan masukkan email dan kata sandi anda"}
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
              htmlFor="email"
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
              endIcon
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
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
              endIcon
              value={password}
              error={message === "Nomor atau kata sandi salah."}
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
            <Link
              to="/nakerweb/forgot-password"
              style={{
                textDecoration: "none",
              }}
            >
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
            </Link>
          </div>
          <Button
            variant="contained"
            full
            type="submit"
            isLoading={isLoading}
            disabled={email === "" || password === "" || isLoading}
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
