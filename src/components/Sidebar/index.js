import React from "react";
import { ReactComponent as Logout } from "../../assets/icon/Logout.svg";

const Sidebar = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "228px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "16px 14px",
      }}
    >
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          color: "#0E0000",
          fontWeightL: "600",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Dashboard
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          color: "#0E0000",
          fontWeightL: "600",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Data Pengguna
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          fontWeightL: "600",
          color: "#0E0000",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Data Grup
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          fontWeightL: "600",
          color: "#0E0000",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Data Loker
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          color: "#0E0000",
          fontWeightL: "600",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Data Proyek
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          color: "#0E0000",
          fontWeightL: "600",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Data Postingan
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          fontWeightL: "600",
          color: "#0E0000",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Data Tiket
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          fontWeightL: "600",
          color: "#0E0000",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Notifikasi
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          fontWeightL: "600",
          color: "#0E0000",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Download Data
      </div>
      <div
        style={{
          fontFamily: "Overpass, san-serif",
          color: "#0E0000",
          fontWeightL: "600",
          fontSize: "15px",
          lineHeight: "19.5px",
          cursor: "pointer",
          padding: "2px 8px",
        }}
      >
        Pengaturan system
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2px 8px",
        }}
      >
        <span style={{ color: "#161515", fontSize: "12px" }}>Keluar</span>
        <Logout style={{}} />
      </div>
    </div>
  );
};

export default Sidebar;
