import React from "react";
import { logo } from "../../assets/img";
import profile from "../../assets/img/profile.png";

const Header = () => {
  return (
    <div style={{ position: "relative" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "rgba(0, 0, 0, 0.2)",
          padding: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div>
          <img src={logo} alt="" style={{ width: "100px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ width: "10" }}>
            <p style={{}}>Muh. Arifand</p>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "15px",
                color: "#fff",
                backgroundColor: "rgba(48, 68, 241, 0.87)",
                padding: "3px 0",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              Super Admin
            </p>
          </div>
          <img src={profile} alt="" />
          <div></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
