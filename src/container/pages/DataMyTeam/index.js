// Page Data My Team
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Page
import DataProyek from "./DataProyek";
import SemuaProyek from "./SemuaProyek";
import DetailProyek from "./DetailProyek";
import TambahProyek from "./TambahProyek";
import SemuaTask from "./SemuaTask";

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");
  const [history, setHistory] = useState("");

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && (
          <DataProyek setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "all" && (
          <SemuaProyek setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "allTask" && (
          <SemuaTask setActiveStep={setActiveStep} />
        )}
        {activeStep === "proyek" && (
          <DetailProyek setActiveStep={setActiveStep} history={history} />
        )}
        {activeStep === "add" && <TambahProyek setActiveStep={setActiveStep} />}
      </Container>
    </PageContainer>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
