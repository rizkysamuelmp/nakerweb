// Page Data Proyek
// --------------------------------------------------------

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Page
import DataProyek from "./DataProyek";
import InfoProyek from "./InfoProyek";
import SemuaProyek from "./SemuaProyek";
import DetailProyek from "./DetailProyek";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep } from "../../../store/actions/dataProyek";

const Page = () => {
  // const [activeStep, setActiveStep] = useState("page");
  const [history, setHistory] = useState("page");

  const dispatch = useDispatch();
  const { activeStep } = useSelector((state) => state.dataProyek);

  useEffect(() => {
    return () => dispatch(setActiveStep("page"));
  }, [dispatch]);

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && <DataProyek setHistory={setHistory} />}
        {activeStep === "info" && <InfoProyek history={history} />}
        {activeStep === "all" && <SemuaProyek setHistory={setHistory} />}
        {activeStep === "proyek" && <DetailProyek history={history} />}
      </Container>
    </PageContainer>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
