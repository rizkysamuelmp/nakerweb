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
  const [id_user, setId_user] = useState();

  return (
    <PageContainer>
      <Container>
        {activeStep === "home" && (
          <DataPengguna
            setActiveStep={setActiveStep}
            setHistory={setHistory}
            setId_user={setId_user}
          />
        )}
        {activeStep === "all" && (
          <SemuaPengguna
            setActiveStep={setActiveStep}
            setHistory={setHistory}
            setId_user={setId_user}
          />
        )}
        {activeStep === "detail" && (
          <DetailPengguna
            setActiveStep={setActiveStep}
            history={history}
            id_user={id_user}
          />
        )}
      </Container>
    </PageContainer>
  );
};

export default Page;
