// Page Data Grup
// --------------------------------------------------------

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Redux
import { shallowEqual, useSelector } from "react-redux";

// Page
import DataGroup from "./DataGroup";
import SemuaGroup from "./SemuaGroup";
import DetailGroup from "./DetailGroup";
import ProfilGroup from "./ProfilGroup";

const Page = () => {
  const [history, setHistory] = useState("");
  const { activeStep } = useSelector((state) => state.dataGroup, shallowEqual);

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && <DataGroup setHistory={setHistory} />}
        {activeStep === "all" && <SemuaGroup setHistory={setHistory} />}
        {activeStep === "detail" && <DetailGroup history={history} />}
        {activeStep === "grup" && <ProfilGroup history={history} />}
      </Container>
    </PageContainer>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export default Page;
