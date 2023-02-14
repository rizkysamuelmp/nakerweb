import { Button, styled } from "@mui/material";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AppRoutes from "../../config/routes";
import { setIsLogin } from "../../store/actions/pageContainer";
import { useDispatch } from "react-redux";

// Assets
import logout from "../../assets/icon/icon-logout.png";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(setIsLogin(false));
    history.push("/nakerweb/login");
    localStorage.removeItem("token");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "228px",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        backgroundColor: "white",
        zIndex: 900,
        marginTop: "70px",
      }}
    >
      {AppRoutes.map((item, index) => (
        <Button
          key={index}
          variant="text"
          sx={{
            p: 0,
            textTransform: "unset",
            borderRadius: "0px",
            width: "100%",
            justifyContent: "start",
          }}
        >
          <LinkWrapper
            to={item.path}
            style={{
              backgroundColor:
                location?.pathname === item.path ? "#115AAA" : "white",
              color: location?.pathname === item.path ? "white" : "black",
            }}
          >
            <p>{item.nameComponent}</p>
            {/* <img
            src={location?.pathname === item.path ? arrowDownWhite : arrowDown}
            style={{ width: "10px", height: "10px" }}
            alt=""
          /> */}
          </LinkWrapper>
        </Button>
      ))}
      <Button
        variant="text"
        sx={{
          p: 0,
          textTransform: "unset",
          borderRadius: "0px",
          width: "100%",
          justifyContent: "start",
        }}
        onClick={() => handleLogout()}
      >
        <LogotButton>
          <p>Keluar</p>
          <img alt="logout" src={logout} width={24} height={24} />
        </LogotButton>
      </Button>
    </div>
  );
};

// Style
const LogotButton = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Overpass, san-serif;
  color: #0e0000;
  font-weight: 600;
  font-size: 15px;
  line-height: 19.5px;
  padding: 10px 16px;
  text-decoration: none;
  width: 100%;
`;
const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Overpass, san-serif;
  color: #0e0000;
  font-weight: 600;
  font-size: 15px;
  line-height: 19.5px;
  padding: 10px 16px;
  text-decoration: none;
  width: 100%;
`;

export default Sidebar;
