// Page Data Pengguna
// --------------------------------------------------------

import { styled } from "@mui/material";
import React, { useState } from "react";
import DataPengguna from "./DataPengguna";
import DetailPengguna from "./DetailPengguna";
import SemuaPengguna from "./SemuaPengguna";

const Container = styled("div")``;

const Page = () => {
  const [activeStep, setActiveStep] = useState("home");

  return (
    <Container>
      {activeStep === "home" && <DataPengguna setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaPengguna setActiveStep={setActiveStep} />}
      {activeStep === "detail" && (
        <DetailPengguna setActiveStep={setActiveStep} />
      )}
    </Container>
  );
};

export default Page;
