import { IconButton } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

// Asset
import { logo } from "../../assets/img";
import profile from "../../assets/img/profile-post.png";
import alarm from "../../assets/icon/icon-alarm.png";
import alarmOn from "../../assets/icon/icon-alarm-notif.png";

const Header = ({ onClick, isNotif }) => {
  return (
    <div style={{ position: "relative" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          height: "70px",
          position: "fixed",
          backgroundColor: "white",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div>
          <img src={logo} alt="" style={{ width: "50px" }} />
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

          {/* Icon Profile */}
          {/* <IconButton onClick={(event) => setMenuProfile(event.currentTarget)}> */}
          <img src={profile} alt="" width={44} height={44} />
          {/* </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menuProfile}
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
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#000000",
              "& .MuiPaper-root": {
                borderRadius: "10px",
              },
              "& .MuiList-root": {
                padding: "0px",
              },
            }}
            open={Boolean(menuProfile)}
            onClose={() => setMenuProfile(null)}
          >
            <MenuItem
              onClick={() => setMenuProfile(null)}
              sx={{ padding: "10px 30px" }}
            >
              Keluar
            </MenuItem>
          </Menu> */}

          {/* Icon Bell */}
          <IconButton onClick={onClick}>
            <img
              alt="icon-alarm"
              src={isNotif ? alarmOn : alarm}
              height={24}
              width={24}
            />
          </IconButton>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
  isNotif: PropTypes.bool,
};

Header.defaultProps = {
  onClick: () => {},
  isNotif: true,
};

export default Header;
