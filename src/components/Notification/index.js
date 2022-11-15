import React from "react";
import alarm from "../../assets/icon/Alarm.svg";
import profile from "../../assets/img/profile.png";

const Notification = () => {
  const myNotif = [
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: true,
    },
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: false,
    },
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: true,
    },
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: false,
    },
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: true,
    },
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: false,
    },
    {
      img: profile,
      name: "Muh. Arifandi",
      message: "telah membuat grup baru dan memerlukan persetujuan dari admin.",
      time: "50 menit yang lalu",
      read: false,
    },
  ];

  return (
    <div
      style={{
        width: "506px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1959B1",
          padding: "10px",
          display: " flex",
          alignItems: "center",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <img src={alarm} alt="alarm-logo" />
        <span
          style={{
            color: "#fff",
            fontWeight: "500",
            fontSize: "15px",
            marginLeft: "9px",
          }}
        >
          Notifikasi
        </span>
      </div>
      <div>
        {myNotif.map((notif) => (
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "10px",
              backgroundColor: notif.read ? "#fff" : "#D1E4F2",
            }}
          >
            <img src={notif.img} alt="profileImage" />
            <div>
              <span
                style={{
                  fontWeight: "700",
                  marginRight: "5px",
                }}
              >
                {notif.name}
              </span>
              <span style={{ fontWeight: "300" }}>{notif.message}</span>
              <span style={{ fontWeight: "500", marginLeft: "5px" }}>
                {notif.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
