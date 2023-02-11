// Page Data Loker
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Redux
import { shallowEqual, useSelector } from "react-redux";

// Page
import DataLoker from "./DataLoker";
import SemuaLoker from "./SemuaLoker";
import DetailLoker from "./DetailLoker";
import FormulirLoker from "./FormulirLoker";

const Page = () => {
  const { activeStep } = useSelector((state) => state.dataLoker, shallowEqual);

  const [history, setHistory] = useState("");

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && <DataLoker setHistory={setHistory} />}
        {activeStep === "all" && <SemuaLoker setHistory={setHistory} />}
        {activeStep === "detail" && <DetailLoker history={history} />}
        {activeStep === "formulir" && <FormulirLoker />}
      </Container>
    </PageContainer>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
