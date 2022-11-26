// Page Component
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataLoker from "./DataLoker";
import SemuaLoker from "./SemuaLoker";
import DetailLoker from "./DetailLoker";
import FormulirLoker from "./FormulirLoker";

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");

  return (
    <Container>
      {activeStep === "page" && <DataLoker setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaLoker setActiveStep={setActiveStep} />}
      {activeStep === "detail" && <DetailLoker setActiveStep={setActiveStep} />}
      {activeStep === "formulir" && (
        <FormulirLoker setActiveStep={setActiveStep} />
      )}
    </Container>
  );
};

export default Page;
