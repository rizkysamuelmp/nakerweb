/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Table Component
// --------------------------------------------------------
import React from "react";
import PropTypes from "prop-types";

const Table = ({ headerContent, dataContent, onClickRow }) => {
  return (
    <div
      style={{
        border: 0,
        backgroundColor: "#115ABE",
        color: "white",
        width: "100%",
        borderRadius: "10px 10px 20px 20px",
        minWidth: "fit-content",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px 20px",
          paddingBottom: "10px !important",
          height: "50px",
          gap: "20px",
        }}
      >
        {headerContent.map((headerItem, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                width: headerItem.width
                  ? headerItem.width
                  : `calc(100% / ${headerContent.length})`,
                display: "flex",
                flexDirection: "column",
                alignItems: headerItem.center ? "center" : "flex-start",
                justifyContent: "center",
                border: "none",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
                minWidth: "fit-content",
              }}
            >
              {headerItem.title}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "15px",
          backgroundColor: "white",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        {dataContent.map((item, dataIindex) => (
          <div
            onClick={() => onClickRow(item)}
            style={{
              color: "black",
              minHeight: 46,
              paddingTop: 0,
              paddingBottom: 0,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "20px",
              padding: "10px 20px",
              backgroundColor: dataIindex % 2 === 1 ? "aliceblue" : "",
            }}
            key={dataIindex}
          >
            {headerContent.map((headerItem, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    overflowWrap: "anywhere",
                    width: headerItem.width
                      ? headerItem.width
                      : `calc(100% / ${headerContent.length})`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: headerItem.center ? "center" : "flex-start",
                    justifyContent: "center",
                    border: "none",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#666262",
                  }}
                >
                  {headerItem?.render
                    ? headerItem?.render(item, dataIindex)
                    : item[headerItem.key] || "-"}
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  headerContent: PropTypes.array,
  dataContent: PropTypes.array,
  onClickRow: PropTypes.func,
};

Table.defaultProps = {
  headerContent: [],
  dataContent: [],
  onClickRow: () => {},
};

export default Table;
