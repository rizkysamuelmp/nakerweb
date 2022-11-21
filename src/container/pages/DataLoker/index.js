// Page Component
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataLoker from "./DataLoker";
import SemuaLoker from "./SemuaLoker";

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

const Page = () => {
  const [activeStep, setActiveStep] = useState("all");

  return (
    <Container>
      {activeStep === "page" && <DataLoker setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaLoker setActiveStep={setActiveStep} />}
    </Container>
  );
};

export default Page;
