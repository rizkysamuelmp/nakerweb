import { Menu } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Notification from "../../components/Notification";

const PageContainer = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const isNotif = true;

  return (
    <>
      <Header
        onClick={(event) => setNotification(event.currentTarget)}
        isNotif={isNotif}
      />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ padding: "17px", backgroundColor: "#F4F7FB", width: "100%" }}
        >
          {children}
        </div>
      </div>
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
    </>
  );
};

// PageContainer.propTypes = {
//   id: PropTypes.string,
// };

// PageContainer.defaultProps = {
//   id: "",
// };

export default PageContainer;
