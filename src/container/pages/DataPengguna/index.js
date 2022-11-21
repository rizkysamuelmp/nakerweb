import { styled } from "@mui/material";
import React, { useState } from "react";
import DataPengguna from "./DataPengguna";
import SemuaPengguna from "./SemuaPengguna";

const Container = styled("div")``;

const Page = () => {
  const [activeStep, setActiveStep] = useState("all");

  return (
    <Container>
      {activeStep === "home" && <DataPengguna setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaPengguna />}
    </Container>
  );
};

export default Page;
