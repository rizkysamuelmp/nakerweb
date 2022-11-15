import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, ScopedCssBaseline } from "@mui/material";
import reportWebVitals from "./reportWebVitals";

// Font
// import FuturaMedium from "./assets/fonts/futura-medium-bt.ttf";
// import FuturaBold from "./assets/fonts/futura-bold-font.ttf";
// import FuturaHeavy from "./assets/fonts/futura-light-bt.ttf";
// import FuturaLight from "./assets/fonts/futura-heavy-font.ttf";

// Main Style
import App from "./container/app";

const theme = createTheme({
  typography: {
    fontFamily: ["Futura", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0061A7",
      dark: "#06377B",
    },
    secondary: {
      light: "#D0D0D0",
      main: "#A8A8A8",
      dark: "#808080",
    },
    warning: {
      main: "#FF6F6F",
      light: "#FFE4E4",
    },
    success: {
      main: "#75D37F",
      light: "#E7FFDC",
    },
    info: {
      main: "#66A3FF",
      soft: "EAF2FF",
    },
  },
  components: {
    // MuiScopedCssBaseline: {
    //   styleOverrides: `
    //     @font-face {
    //       font-family: 'Futura';
    //       src: url(${FuturaMedium}) format('truetype');
    //       font-weight: 400;
    //       font-style: normal;
    //     }
    //     @font-face {
    //       font-family: 'Futura';
    //       src: url(${FuturaBold}) format('truetype');
    //       font-weight: 900;
    //       font-style: normal;
    //     }
    //     @font-face {
    //       font-family: 'Futura';
    //       src: url(${FuturaLight}) format('truetype');
    //       font-weight: 300;
    //       font-style: normal;
    //     }
    //     @font-face {
    //       font-family: 'Futura';
    //       src: url(${FuturaHeavy}) format('truetype');
    //       font-weight: 700;
    //       font-style: normal;
    //     }
    //   `,
    // },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
