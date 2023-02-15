// Page Data Pengguna
// --------------------------------------------------------

import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageContainer from "../../../components/PageContainer";
import { setActiveStep } from "../../../store/actions/dataPengguna";
import DataPengguna from "./DataPengguna";
import DetailPengguna from "./DetailPengguna";
import SemuaPengguna from "./SemuaPengguna";

const Container = styled("div")``;

const Page = () => {
  // const [activeStep, setActiveStep] = useState("page");
  const [history, setHistory] = useState("");
  const [id_user, setId_user] = useState();

  const { activeStep } = useSelector((state) => state.dataPengguna);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setActiveStep("page"));
  }, [dispatch]);

  return (
    <PageContainer>
      <Container>
        {activeStep === "page" && (
          <DataPengguna
            // setActiveStep={setActiveStep}
            setHistory={setHistory}
            setId_user={setId_user}
          />
        )}
        {activeStep === "all" && (
          <SemuaPengguna
            // setActiveStep={setActiveStep}
            setHistory={setHistory}
            setId_user={setId_user}
          />
        )}
        {activeStep === "detail" && (
          <DetailPengguna
            // setActiveStep={setActiveStep}
            history={history}
            id_user={id_user}
          />
        )}
      </Container>
    </PageContainer>
  );
};

export default Page;
