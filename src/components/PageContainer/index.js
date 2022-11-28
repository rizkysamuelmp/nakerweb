import { IconButton, Menu } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Notification from "../../components/Notification";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Asset
import liveChat from "../../assets/icon/live-chat.svg";

const PageContainer = ({ children }) => {
  let history = useHistory();

  const [notification, setNotification] = useState(null);
  const isNotif = true;

  const location = useLocation();

  return (
    <React.Fragment>
      <Header
        onClick={(event) => setNotification(event.currentTarget)}
        isNotif={isNotif}
      />

      <IconButton
        sx={{
          position: "fixed",
          zIndex: "2000",
          bottom: "50px",
          left: "50px",
          filter: "drop-shadow(0px 0px 10px rgba(0,0,0,.3))",
        }}
      >
        <img
          alt="live-chat"
          src={liveChat}
          width={65}
          height={65}
          onClick={() => history.push("/nakerweb/live-chat")}
        />
      </IconButton>
      <div style={{ display: "flex", backgroundColor: "F4F7FB" }}>
        {location?.pathname !== "/nakerweb/my-team" && (
          <Sidebar activePage={0} />
        )}
        <div
          style={{
            padding: `70px 0px 0px ${
              location?.pathname !== "/nakerweb/my-team" ? "232px" : "0px"
            }`,
            width: "100%",
            backgroundColor: "#F4F7FB",
          }}
        >
          <div
            style={{
              padding: "17px",
              backgroundColor: "#F4F7FB",
              width: "100%",
            }}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Notifikasi */}
      <Menu
        id="menu-notif"
        anchorEl={notification}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          top: "40px",
          left: "10px",
          marginTop: "10px",
          "& .MuiPaper-root": {
            borderRadius: "20px",
          },
          "& .MuiList-root": {
            padding: "0px",
          },
        }}
        open={Boolean(notification)}
        onClose={() => setNotification(null)}
      >
        <Notification />
      </Menu>
    </React.Fragment>
  );
};

export default PageContainer;
