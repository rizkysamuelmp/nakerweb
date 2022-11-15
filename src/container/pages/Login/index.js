import React, { useState } from "react";
// import logo from "../../../assets/img/logo.png";
// import socialMedia from "../../../assets/img/social.webp";
import Button from "../../../components/Button";
import { logo, social } from "../../../assets/img";

const Login = () => {
  // const [input, setInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "75px",
      }}
    >
      <div
        className="form-login"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",

          width: "30%",
        }}
      >
        <img src={logo} alt="logo" style={{}} />
        <h1
          style={{
            margin: "10px 0",
            fontWeight: "700",
          }}
        >
          Masuk
        </h1>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "500",
            lineHeight: "18px",
            marginBottom: "10px",
            letterSpacing: "0.01em",
            color: "#7E7474",
          }}
        >
          Silahkan masukkan email dan kata sandi anda
        </p>
        <form action="#" style={{ width: "100%" }}>
          <label
            for="email"
            style={{ fontWeight: "400", fontSize: "13px", lineHeight: "18px" }}
          >
            Email :
          </label>{" "}
          <br />
          <input type="email" style={{ width: "100%" }} /> <br />
          <label
            for="password"
            style={{ fontWeight: "400", fontSize: "13px", lineHeight: "18px" }}
          >
            Kata sandi :
          </label>
          <br />
          <input type="password" style={{ width: "100%" }} /> <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <div className="checkbox">
              <input
                type="checkbox"
                name="radio"
                id="radio"
                style={{
                  border: "1px solid #D2D0D0",
                  borderRadius: "5px",
                }}
              />
              <span
                style={{
                  fontWeight: " 400",
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginLeft: "11px",
                }}
              >
                Ingat saya
              </span>
            </div>
            <span
              style={{
                fontWeight: " 700",
                fontSize: " 13px",
                lineHeight: " 18px",
                letterSpacing: " 0.01em",
                color: " #0B85FF",
              }}
            >
              Lupa kata sandi
            </span>
          </div>
          <Button variant="contained" full>
            Masuk
          </Button>
        </form>
      </div>
      <div
        className="img-right"
        style={{
          width: "60%",
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
    </div>
  );
};

export default Login;
