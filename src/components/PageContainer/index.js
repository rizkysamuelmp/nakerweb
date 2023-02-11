import { IconButton, Menu } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Notification from "../../components/Notification";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Asset
import liveChat from "../../assets/icon/live-chat.svg";
import Loader from "../Loader";
import { shallowEqual, useSelector } from "react-redux";

const PageContainer = ({ children }) => {
  let history = useHistory();
  const location = useLocation();

  const isNotif = true;
  const [notification, setNotification] = useState(null);

  const { isLoading } = useSelector(
    ({ pageContainer }) => ({
      isLoading: pageContainer.isLoading,
    }),
    shallowEqual
  );

  return (
    <React.Fragment>
      <Header
        onClick={(event) => setNotification(event.currentTarget)}
        isNotif={isNotif}
      />

      <Loader isLoading={isLoading > 0} />

      {location?.pathname !== "/nakerweb/my-team" && (
        <IconButton
          sx={{
            position: "fixed",
            zIndex: "2000",
            bottom: "50px",
            left: "50px",
            filter: "drop-shadow(0px 0px 10px rgba(0,0,0,.3))",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "13px",
              width: "80px",
              height: "80px",
              alignItems: "center",
            }}
          >
            <img
              alt="live-chat"
              src={liveChat}
              width={65}
              height={65}
              onClick={() => history.push("/nakerweb/live-chat")}
            />
            Live Chat
          </div>
        </IconButton>
      )}
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
