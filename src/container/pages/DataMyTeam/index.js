// Page Component
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataProyek from "./DataProyek";
import InfoProyek from "./InfoProyek";
import SemuaProyek from "./SemuaProyek";
import DetailProyek from "./DetailProyek";
import LoginQr from "./LoginQr";

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

const Page = () => {
  const [activeStep, setActiveStep] = useState("login");

  return (
    <Container>
      {activeStep === "login" && <LoginQr setActiveStep={setActiveStep} />}
      {activeStep === "page" && <DataProyek setActiveStep={setActiveStep} />}
      {activeStep === "info" && <InfoProyek setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaProyek setActiveStep={setActiveStep} />}
      {activeStep === "proyek" && (
        <DetailProyek setActiveStep={setActiveStep} />
      )}
    </Container>
  );
};

export default Page;
