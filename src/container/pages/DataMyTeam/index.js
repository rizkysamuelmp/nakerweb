// Page Component
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

// Page
import DataProyek from "./DataProyek";
import SemuaProyek from "./SemuaProyek";
import DetailProyek from "./DetailProyek";
import LoginQr from "./LoginQr";
import TambahProyek from "./TambahProyek";
import SemuaTask from "./SemuaTask";

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");

  return (
    <Container>
      {activeStep === "login" && <LoginQr setActiveStep={setActiveStep} />}
      {activeStep === "page" && <DataProyek setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaProyek setActiveStep={setActiveStep} />}
      {activeStep === "allTask" && <SemuaTask setActiveStep={setActiveStep} />}
      {activeStep === "proyek" && (
        <DetailProyek setActiveStep={setActiveStep} />
      )}
      {activeStep === "add" && <TambahProyek setActiveStep={setActiveStep} />}
    </Container>
  );
};

export default Page;
