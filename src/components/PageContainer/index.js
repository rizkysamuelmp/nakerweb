import { Menu } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Notification from "../../components/Notification";

const PageContainer = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const isNotif = true;

  return (
    <React.Fragment>
      <Header
        onClick={(event) => setNotification(event.currentTarget)}
        isNotif={isNotif}
      />
      <div style={{ display: "flex", backgroundColor: "F4F7FB" }}>
        <Sidebar activePage={0} />
        <div
          style={{
            padding: "70px 0px 0px 232px",
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

// PageContainer.propTypes = {
//   id: PropTypes.string,
// };

// PageContainer.defaultProps = {
//   id: "",
// };

export default PageContainer;
