// Page Data Proyek
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Page
import DataProyek from "./DataProyek";
import InfoProyek from "./InfoProyek";
import SemuaProyek from "./SemuaProyek";
import DetailProyek from "./DetailProyek";

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");
  const [history, setHistory] = useState("home");

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && (
          <DataProyek setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "info" && (
          <InfoProyek setActiveStep={setActiveStep} history={history} />
        )}
        {activeStep === "all" && (
          <SemuaProyek setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "proyek" && (
          <DetailProyek setActiveStep={setActiveStep} />
        )}
      </Container>
    </PageContainer>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
