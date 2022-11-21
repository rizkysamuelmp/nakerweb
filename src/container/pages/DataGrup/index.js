// Page Component
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataGrup from "./DataGrup";
import SemuaGrup from "./SemuaGrup";
import DetailGrup from "./DetailGrup";
import ProfilGrup from "./ProfilGrup";

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

const Page = () => {
  const [activeStep, setActiveStep] = useState("detail");

  return (
    <Container>
      {activeStep === "page" && <DataGrup setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaGrup setActiveStep={setActiveStep} />}
      {activeStep === "detail" && <DetailGrup setActiveStep={setActiveStep} />}
      {activeStep === "grup" && <ProfilGrup setActiveStep={setActiveStep} />}
    </Container>
  );
};

export default Page;
