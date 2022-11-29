// Page Data Grup
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Page
import DataGrup from "./DataGrup";
import SemuaGrup from "./SemuaGrup";
import DetailGrup from "./DetailGrup";
import ProfilGrup from "./ProfilGrup";

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");
  const [history, setHistory] = useState("");

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && (
          <DataGrup setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "all" && (
          <SemuaGrup setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "detail" && (
          <DetailGrup setActiveStep={setActiveStep} history={history} />
        )}
        {activeStep === "grup" && <ProfilGrup setActiveStep={setActiveStep} />}
      </Container>
    </PageContainer>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
