import React, { useContext } from "react";
import styled from "styled-components";
import { COLOR, FONT } from "../../style/style";

import { GlobalContext } from "../../context/GlobalState";

const SumWrapper = styled.div`
  width: 100%;
  height: 130px;
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
  const { itemsList } = useContext(GlobalContext);
  // 計算總金額
  const totalMoney = itemsList
    .map((items) => items.price)
    .reduce((a, b) => a + b, 0);
  return (
    <SumWrapper>
      <TotalMoney>${totalMoney}</TotalMoney>
    </SumWrapper>
  );
}

export default TotalSum;
