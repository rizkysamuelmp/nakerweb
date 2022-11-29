// Page Data Pengguna
// --------------------------------------------------------

import { styled } from "@mui/material";
import React, { useState } from "react";
import PageContainer from "../../../components/PageContainer";
import DataPengguna from "./DataPengguna";
import DetailPengguna from "./DetailPengguna";
import SemuaPengguna from "./SemuaPengguna";

const Container = styled("div")``;

const Page = () => {
  const [activeStep, setActiveStep] = useState("home");
  const [history, setHistory] = useState("");

  return (
    <PageContainer>
      <Container>
        {activeStep === "home" && (
          <DataPengguna setActiveStep={setActiveStep} setHistory={setHistory} />
        )}
        {activeStep === "all" && (
          <SemuaPengguna
            setActiveStep={setActiveStep}
            setHistory={setHistory}
          />
        )}
        {activeStep === "detail" && (
          <DetailPengguna setActiveStep={setActiveStep} history={history} />
        )}
      </Container>
    </PageContainer>
  );
};

export default Page;
