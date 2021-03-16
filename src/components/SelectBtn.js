import React from "react";
import styled from "styled-components";
import { COLOR, FONT } from "../style/style";

const SelectWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 15vh;
`;
const FooterBtn = styled.div`
  width: 50%;
  height: 100%;
  background: ${COLOR.primary};
  font-size: ${FONT.lg};
  color: ${COLOR.second};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const AddItem = styled(FooterBtn)`
  background: ${COLOR.primary};
`;
const Statistics = styled(FooterBtn)`
  background: ${COLOR.danger};
`;

function SelectBtn() {
  return (
    <SelectWrapper>
      <AddItem>新增</AddItem>
      <Statistics>查看統計</Statistics>
    </SelectWrapper>
  );
}

export default SelectBtn;
