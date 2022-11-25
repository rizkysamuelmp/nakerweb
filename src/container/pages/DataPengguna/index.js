import { styled } from "@mui/material";
import React, { useState } from "react";
import DataPengguna from "./DataPengguna";
import DetailPengguna from "./DetailPengguna";
import SemuaPengguna from "./SemuaPengguna";

const Container = styled("div")``;

const Page = () => {
  const [activeStep, setActiveStep] = useState("detail");

  return (
    <Container>
      {activeStep === "home" && <DataPengguna setActiveStep={setActiveStep} />}
      {activeStep === "all" && <SemuaPengguna />}
      {activeStep === "detail" && <DetailPengguna />}
    </Container>
  );
};

export default Page;
