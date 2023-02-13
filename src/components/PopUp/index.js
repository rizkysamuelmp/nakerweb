// Popup Component
// --------------------------------------------------------
import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "../Button";
import "../../index.css";

const PopUpDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ImageWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const PopUp = ({
  open,
  onClose,
  onClickAction,
  imgSrc,
  type,
  title,
  info,
  width,
  maxWidth,
  padding,
  buttonWord,
}) => {
  return (
    <PopUpDialog
      open={open}
      onClose={onClose}
      aria-labelledby="popup-dialog-title"
      sx={{
        ".MuiPaper-root": {
          width: width,
          maxWidth: maxWidth,
          borderRadius: "20px",
          height: "fit-content",
          padding: padding,
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        },
      }}
    >
      <DialogContent
        sx={{
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          gap: "40px",
          flexDirection: "column",
          padding: "0px",
        }}
      >
        {imgSrc && (
          <ImageWrapper>
            <img
              src={imgSrc}
              alt="img-popup"
              loading="lazy"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />
          </ImageWrapper>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "18px",
              letterSpacing: "0.01em",
              color: "#000000",
            }}
          >
            {title}
          </p>
          {info && (
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "18px",
                letterSpacing: "0.01em",
                color: "#000000",
              }}
            >
              {info}
            </p>
          )}
        </div>
      </DialogContent>

      {type === "standard" && (
        <DialogActions
          sx={{
            justifyContent: "center",
            textAlign: "center",
            padding: "0px",
          }}
        >
          <Button variant="contained" full onClick={onClickAction}>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "17px",
                lineHeight: "18px",
                letterSpacing: "0.01em",
                color: "#FFFFFF",
              }}
            >
              {buttonWord}
            </p>
          </Button>
        </DialogActions>
      )}

      {type === "choice" && (
        <DialogActions
          sx={{
            justifyContent: "space-between",
            padding: "0px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Button variant="outlined" onClick={onClose} width="112px" full>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "18px",
                letterSpacing: "0.01em",
                color: "#115AAA",
              }}
            >
              Tidak
            </p>
          </Button>
          <Button
            variant="contained"
            onClick={onClickAction}
            width="112px"
            full
          >
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "18px",
                letterSpacing: "0.01em",
                color: "#FFFFFF",
              }}
            >
              Ya
            </p>
          </Button>
        </DialogActions>
      )}
    </PopUpDialog>
  );
};

PopUp.propTypes = {
  imgSrc: PropTypes.string,
  type: PropTypes.oneOf(["standard", "choice", "otp", "others"]),
  onClickAction: PropTypes.func,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  info: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  buttonWord: PropTypes.string,
};
PopUp.defaultProps = {
  imgSrc: "",
  type: "standard",
  onClickAction: () => {},
  title: "",
  info: "",
  width: "480px",
  maxWidth: "480px",
  padding: "30px 20px 20px 20px",
  buttonWord: "OK",
};

export default PopUp;
