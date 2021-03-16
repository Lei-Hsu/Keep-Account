import React from "react";
import styled from "styled-components";
import { COLOR, FONT } from "../../style/style";

const SumWrapper = styled.div`
  width: 100%;
  height: 15vh;
  background: ${COLOR.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TotalMoney = styled.h1`
  padding: 15px;
  font-size: ${FONT.logo};
  color: ${COLOR.second};
`;

function TotalSum() {
  return (
    <SumWrapper>
      <TotalMoney>$0</TotalMoney>
    </SumWrapper>
  );
}

export default TotalSum;
