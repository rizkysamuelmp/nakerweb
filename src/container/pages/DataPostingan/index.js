// Page Component
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataPostingan from "./DataPostingan";
import DetailPostingan from "./DetailPostingan";

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

const Page = () => {
  const [activeStep, setActiveStep] = useState("detail");

  return (
    <Container>
      {activeStep === "page" && <DataPostingan setActiveStep={setActiveStep} />}
      {activeStep === "detail" && (
        <DetailPostingan setActiveStep={setActiveStep} />
      )}
    </Container>
  );
};

export default Page;
