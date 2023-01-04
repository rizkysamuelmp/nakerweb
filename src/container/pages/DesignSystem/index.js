/* eslint-disable no-unused-vars */
// DesignSystem Component
// --------------------------------------------------------
import React, { useState } from "react";
import Colors from "../../../utils/helpers/colors";
import Button from "../../../components/Button";
import { ReactComponent as Eye } from "../../../assets/icon/Eye.svg";
import InputText from "../../../components/InputText";
import Notification from "../../../components/Notification";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import PopUp from "../../../components/PopUp";

// Asset
import { ReactComponent as EmailIcon } from "../../../assets/icon/icon-email.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/icon/icon-password.svg";
import { ReactComponent as EyeLookIcon } from "../../../assets/icon/icon-eye-look.svg";
import LockErrorBlack from "../../../assets/img/lock-error-black.png";
import mailBlue from "../../../assets/img/mail-blue.png";
import mailSuccess from "../../../assets/img/mail-success.png";
import groupSuccess from "../../../assets/img/group-success.png";
import Summary from "../../../components/Summary";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";

function DesignSystem() {
  const [input, setInput] = useState("");
  const [hide, setHide] = useState(false);
  const [popUpEmail, setPopUpEmail] = useState(false);
  const [popUpAuth, setPopUpAuth] = useState(false);
  const [popUpEmailSuccess, setPopUpEmailSuccess] = useState(false);
  const [popUpConfirm, setPopUpConfirm] = useState(false);

  const dataSummary = {
    user: 250,
    group: 230,
    blueCoral: 230,
    myTeam: 230,
  };

  const dataHeader = [
    {
      title: "No",
      key: "no",
      width: 30,
    },
    {
      title: "Posisi",
      key: "position",
    },
    {
      title: "Perusahaan",
      key: "company",
    },
    {
      title: "Lokasi",
      key: "location",
    },
    {
      title: "Tanggal Buka",
      key: "openingDate",
    },
    {
      title: "Sektor",
      key: "sector",
    },
    {
      title: "Kategori",
      key: "category",
    },
    {
      title: "Status",
      key: "status",
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span>{rowData.status}</span>
        </div>
      ),
    },
  ];

  const dataContent = [
    {
      no: 1,
      position: "Operator penjahit baju",
      company: "PT. MAJU MUNDUR JAYA",
      location: "Depok",
      openingDate: "20 September 2022",
      sector: "Industri pakaian",
      category: "Part Time",
      status: " Aktif",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#F4F7FB",
      }}
    >
      <div>
        <h2>Table</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Table headerContent={dataHeader} dataContent={dataContent} />
          <Pagination count={10} currentData={10} totalData={100} page={2} />
        </div>
      </div>
      <div>
        <h2>Summary</h2>
        <div>
          <Summary data={dataSummary} />
        </div>
      </div>
      <div>
        <h2>Notification</h2>
        <div>
          <Notification />
        </div>
      </div>
      <div>
        <h2>PopUp Confirm</h2>
        <Button variant="contained" onClick={() => setPopUpConfirm(true)}>
          Open
        </Button>
        <PopUp
          open={popUpConfirm}
          type="choice"
          width="350px"
          padding="60px 30px 25px 30px"
          imgSrc={groupSuccess}
          onClose={() => setPopUpConfirm(false)}
          onClickAction={() => setPopUpConfirm(false)}
          title="Konfirmasi"
          info="Apakah anda yakin inigin hapus grup ini ?"
        />
      </div>
      <div>
        <h2>PopUp Berhasil Kirim Email</h2>
        <Button variant="contained" onClick={() => setPopUpEmailSuccess(true)}>
          Open
        </Button>
        <PopUp
          open={popUpEmailSuccess}
          imgSrc={mailSuccess}
          onClose={() => setPopUpEmailSuccess(false)}
          title="Berhasil kirim email"
          info="Link  reset kata sandi  telah dikirim ke email anda."
        />
      </div>
      <div>
        <h2>PopUp Authentication</h2>
        <Button variant="contained" onClick={() => setPopUpAuth(true)}>
          Open
        </Button>
        <PopUp
          open={popUpAuth}
          imgSrc={LockErrorBlack}
          onClose={() => setPopUpAuth(false)}
          title="Autentikasi gagal !"
          info="Email atau kata sandi yang anda masukkan salah"
        />
      </div>
      <div>
        <h2>PopUp Email</h2>
        <Button variant="contained" onClick={() => setPopUpEmail(true)}>
          Open
        </Button>
        <PopUp
          open={popUpEmail}
          imgSrc={mailBlue}
          onClose={() => setPopUpEmail(false)}
          title="Email tidak terdaftar"
          info="Email yang anda masukkan belum terdaftar."
        />
      </div>
      <div>
        <h2>Input Email</h2>
        <InputText
          key="email"
          endIcon
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Masukkan email"
        />
      </div>
      <div>
        <h2>Input Password</h2>
        <InputText
          key="password"
          endIcon
          value={input}
          type={hide ? "password" : "text"}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Masukkan kata sandi"
          iconAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={() => setHide(!hide)}
              >
                <EyeLookIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <div>
        <h2>Button Contained</h2>
        <Button variant="contained">Click Me!</Button>
      </div>
      <div>
        <h2>Button Full</h2>
        <Button variant="contained" full>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Loading</h2>
        <Button variant="contained" isLoading>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Rounded</h2>
        <Button variant="contained" rounded>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Custom Rounded</h2>
        <Button variant="contained" borderRadius="5px">
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button With Icon</h2>
        <Button
          variant="contained"
          borderRadius="5px"
          padding="0px 7px 0px 9px"
        >
          Detail
          <Eye />
        </Button>
      </div>
      <div>
        <h2>Button Contained</h2>
        <Button variant="contained">Click Me!</Button>
      </div>
      <div>
        <h2>Button Full</h2>
        <Button variant="contained" full>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Loading</h2>
        <Button variant="contained" isLoading>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Rounded</h2>
        <Button variant="contained" rounded>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Custom Rounded</h2>
        <Button variant="contained" borderRadius="5px">
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button With Icon</h2>
        <Button
          variant="contained"
          borderRadius="5px"
          padding="0px 7px 0px 9px"
        >
          Detail
          <Eye />
        </Button>
      </div>
    </div>
  );
}

export default DesignSystem;
