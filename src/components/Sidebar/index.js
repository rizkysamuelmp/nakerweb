import { styled } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppRoutes from "../../config/routes";

// Assets
import arrowDown from "../../assets/icon/arrow-down.svg";
import arrowDownWhite from "../../assets/icon/icon-arrow-down-white.svg";

// Style
const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Overpass, san-serif;
  color: #0e0000;
  font-weight: 600;
  font-size: 15px;
  line-height: 19.5px;
  cursor: pointer;
  padding: 10px 8px;
  text-decoration: none;
`;

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      style={{
        height: "100vh",
        width: "228px",
        display: "flex",
        flexDirection: "column",
        padding: "16px 14px",
        position: "fixed",
        backgroundColor: "white",
        zIndex: 900,
        marginTop: "70px",
      }}
    >
      {AppRoutes.map((item, index) => (
        <LinkWrapper
          to={item.path}
          key={index}
          style={{
            backgroundColor:
              location?.pathname === item.path ? "#115AAA" : "white",
            color: location?.pathname === item.path ? "white" : "black",
          }}
        >
          <p>{item.nameComponent}</p>
          <img
            src={location?.pathname === item.path ? arrowDownWhite : arrowDown}
            style={{ width: "10px", height: "10px" }}
            alt=""
          />
        </LinkWrapper>
      ))}
    </div>
  );
};

export default Sidebar;
