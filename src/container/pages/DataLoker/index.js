/* eslint-disable react-hooks/exhaustive-deps */
// Page Data Loker
// --------------------------------------------------------

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../components/PageContainer";

// Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Page
import DataLoker from "./DataLoker";
import SemuaLoker from "./SemuaLoker";
import DetailLoker from "./DetailLoker";
import FormulirLoker from "./FormulirLoker";
import { setActiveStep } from "../../../store/actions/dataLoker";

const Page = () => {
  const dispatch = useDispatch();

  const { activeStep } = useSelector((state) => state.dataLoker, shallowEqual);

  const [history, setHistory] = useState("");

  useEffect(() => {
    // Fungsi ini membuat loker kembali ke halaman utama saat menu lain dipilih
    return () => {
      dispatch(setActiveStep("page"));
    };
  }, []);

  // const stringToDateFormat = (dateStr, dateFormat) => {
  //   if (!dateStr) return "";
  //   const date = new Date(dateStr);
  //   if (isValid(date)) {
  //     return format(new Date(dateStr), dateFormat);
  //   } else {
  //     return "";
  //   }
  // };

  // console.warn(
  //   "Isi data : ",
  //   stringToDateFormat("2022-12-21", "dd MMMM yyyy HH:mm:ss")
  // );

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
