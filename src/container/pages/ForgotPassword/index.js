import React, { useState } from "react";
import Button from "../../../components/Button";
import { logo, social } from "../../../assets/img";
import InputText from "../../../components/InputText";
import PopUp from "../../../components/PopUp";
import { Link, useHistory } from "react-router-dom";

// Asset
import iconEmail from "../../../assets/icon/icon-email.svg";
import mailSuccess from "../../../assets/img/mail-success.png";
import { IconButton } from "@mui/material";
import { ReactComponent as IconBack } from "../../../assets/icon/icon-back.svg";

const ForgotPassword = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [popUpEmailSuccess, setPopUpEmailSuccess] = useState(false);

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
      <Link to="/nakerweb/log-in">
        <IconButton style={{ position: "fixed", top: "20px", left: "20px" }}>
          <IconBack />
        </IconButton>
      </Link>
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
          action="#"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
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
          <Button
            variant="contained"
            full
            onClick={() => setPopUpEmailSuccess(true)}
            disabled={email === ""}
          >
            Kirim link verifikasi
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

      {/* Popup Sukses Kirim Email */}
      <PopUp
        open={popUpEmailSuccess}
        imgSrc={mailSuccess}
        onClose={() => setPopUpEmailSuccess(false)}
        onClickAction={() => {
          setPopUpEmailSuccess(false);
          history.push("/nakerweb/log-in");
        }}
        title="Berhasil kirim email"
        info="Link  reset kata sandi  telah dikirim ke email anda."
      />
    </div>
  );
};

export default ForgotPassword;
