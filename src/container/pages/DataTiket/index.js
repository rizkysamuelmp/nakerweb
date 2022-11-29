import React, { useState } from "react";
import PageContainer from "../../../components/PageContainer";

import DataLoker from "./DataLoker";
import DetailDataTiket from "./DetailDataTiket";
import MasalahTiket from "./MasalahTiket";

const DataTiket = () => {
  const [activeStep, setActiveStep] = useState("page");

  return (
    <PageContainer>
      <React.Fragment>
        {activeStep === "page" && <DataLoker setActiveStep={setActiveStep} />}
        {activeStep === "detail" && (
          <DetailDataTiket setActiveStep={setActiveStep} />
        )}
        {activeStep === "masalah" && (
          <MasalahTiket setActiveStep={setActiveStep} />
        )}
      </React.Fragment>
    </PageContainer>
  );
};

export default DataTiket;
