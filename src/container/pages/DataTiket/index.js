import React, { useState } from "react";
import DataLoker from "./DataLoker";
import DetailDataTiket from "./DetailDataTiket";
import MasalahTiket from "./MasalahTiket";

const DataTiket = () => {
  const [activeStep, setActiveStep] = useState("page");

  return (
    <>
      {activeStep === "page" && <DataLoker setActiveStep={setActiveStep} />}
      {activeStep === "detail" && (
        <DetailDataTiket setActiveStep={setActiveStep} />
      )}
      {activeStep === "masalah" && (
        <MasalahTiket setActiveStep={setActiveStep} />
      )}
      {}
    </>
  );
};

export default DataTiket;
