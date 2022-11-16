import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ padding: "17px", backgroundColor: "#F4F7FB", width: "100%" }}
        >
          {children}
        </div>
      </div>
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
