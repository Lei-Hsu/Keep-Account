import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FooterBtn, ButtonWrapper } from "../../style/button";
import { COLOR } from "../../style/style";

const Cancel = styled(FooterBtn)`
  width: 100%;
  background: ${COLOR.danger};
`;

function Statistics() {
  return (
    <>
      <ButtonWrapper>
        <Cancel>
          <Link to="/">返回首頁</Link>
        </Cancel>
      </ButtonWrapper>
    </>
  );
}

export default Statistics;
