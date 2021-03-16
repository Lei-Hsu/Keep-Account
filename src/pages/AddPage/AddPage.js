import React from "react";
import InputArea from "../../components/Add/InputArea";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FooterBtn, ButtonWrapper } from "../../style/button";
import { COLOR } from "../../style/style";

const Cancel = styled(FooterBtn)`
  width: 100%;
  background: ${COLOR.danger};
`;

function AddPage() {
  return (
    <>
      <InputArea />
      <ButtonWrapper>
        <Cancel>
          <Link to="/">取消</Link>
        </Cancel>
      </ButtonWrapper>
    </>
  );
}

export default AddPage;
