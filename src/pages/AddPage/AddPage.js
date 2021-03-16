import React from "react";
import InputArea from "../../components/Add/InputArea";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FooterBtn, ButtonWrapper } from "../../style/button";
import { COLOR } from "../../style/style";

const AddItem = styled(FooterBtn)``;
const Cancel = styled(FooterBtn)`
  background: ${COLOR.danger};
`;

function AddPage() {
  return (
    <>
      <InputArea />
      <ButtonWrapper>
        <AddItem>
          <Link>新增</Link>
        </AddItem>
        <Cancel>
          <Link to="/">取消</Link>
        </Cancel>
      </ButtonWrapper>
    </>
  );
}

export default AddPage;
