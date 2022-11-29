import React from "react";
import { styled } from "@mui/material/styles";
import Title from "../../../components/Title";
import PageContainer from "../../../components/PageContainer";

const PengaturanSistem = () => {
  return (
    <PageContainer>
      <Container>
        {/* Title Page */}
        <Title title="Pengaturan Sistem" />
      </Container>
    </PageContainer>
  );
};

// Style
const Container = styled("div")``;

export default PengaturanSistem;
