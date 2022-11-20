import React, { useState } from "react";
import DataLoker from "./DataLoker";
import DetailDataTiket from "./DetailDataTiket";
import MasalahTiket from "./MasalahTiket";

const DataTiket = () => {
  const [activeStep, setActiveStep] = useState("masalah");

  return (
    <>
      {activeStep === "page" && <DataLoker />}
      {activeStep === "detail" && <DetailDataTiket />}
      {activeStep === "masalah" && <MasalahTiket />}
      {}
    </>
  );
};

export default DataTiket;
