import React from "react";
import styled from "styled-components";
import { COLOR } from "../../style/style";
import { FooterBtn, ButtonWrapper } from "../../style/button";
import { Link } from "react-router-dom";

const AddItem = styled(FooterBtn)`
  background: ${COLOR.primary};
`;
const Statistics = styled(FooterBtn)`
  background: ${COLOR.danger};
`;

function SelectBtn() {
  return (
    <ButtonWrapper>
      <AddItem>
        <Link to="/add">新增</Link>
      </AddItem>
      <Statistics>
        <Link to="/statistics">查看統計</Link>
      </Statistics>
    </ButtonWrapper>
  );
}

export default SelectBtn;
