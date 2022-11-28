// Page Data Loker
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataLoker from "./DataLoker";
import SemuaLoker from "./SemuaLoker";
import DetailLoker from "./DetailLoker";
import FormulirLoker from "./FormulirLoker";

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");
  const [history, setHistory] = useState("");

  return (
    <Container>
      {activeStep === "page" && (
        <DataLoker setActiveStep={setActiveStep} setHistory={setHistory} />
      )}
      {activeStep === "all" && (
        <SemuaLoker setActiveStep={setActiveStep} setHistory={setHistory} />
      )}
      {activeStep === "detail" && (
        <DetailLoker setActiveStep={setActiveStep} history={history} />
      )}
      {activeStep === "formulir" && (
        <FormulirLoker setActiveStep={setActiveStep} />
      )}
    </Container>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
