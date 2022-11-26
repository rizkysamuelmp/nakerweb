import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "../../config/routes";

// Assets
import arrowDown from "../../assets/icon/arrow-down.svg";

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
  return (
    <div
      style={{
        height: "100vh",
        width: "228px",
        display: "flex",
        flexDirection: "column",
        padding: "16px 14px",
      }}
    >
      {AppRoutes.map((item, index) => (
        <LinkWrapper to={item.path} key={index}>
          <p>{item.nameComponent}</p>
          <img
            src={arrowDown}
            style={{ width: "10px", height: "10px" }}
            alt=""
          />
        </LinkWrapper>
      ))}
    </div>
  );
};

export default Sidebar;
