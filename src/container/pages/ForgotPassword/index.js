import React, { useState } from "react";
// import logo from "../../../assets/img/logo.png";
// import socialMedia from "../../../assets/img/social.webp";
import Button from "../../../components/Button";
import { logo, social } from "../../../assets/img";

const ForgotPassword = () => {
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
          Lupa Kata sandi
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
          Silahkan masukkan email yang sudah terdaftar
        </p>
        <form action="#" style={{ width: "100%" }}>
          <div style={{ marginBottom: "10px" }}>
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
            <input type="email" style={{ width: "100%" }} /> <br />
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

export default ForgotPassword;
