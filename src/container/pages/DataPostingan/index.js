// Page Data Postingan
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Page
import DataPostingan from "./DataPostingan";
import DetailPostingan from "./DetailPostingan";

const Page = () => {
  const [activeStep, setActiveStep] = useState("page");

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && (
          <DataPostingan setActiveStep={setActiveStep} />
        )}
        {activeStep === "detail" && (
          <DetailPostingan setActiveStep={setActiveStep} />
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
