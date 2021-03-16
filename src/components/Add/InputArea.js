import React from "react";
import styled from "styled-components";
import { COLOR } from "../../style/style";

const InputWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputItem = styled.input`
  width: 60%;
  height: 50px;
  border: none;
  outline: none;
  text-align: center;
`;
const Category = styled.div`
  width: 60%;
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
const Kind = styled.button`
  width: 23%;
  height: 40px;
  margin: 5px;
  color: ${COLOR.second};
  background: ${COLOR.primary};
  :active {
    background: ${COLOR.danger};
  }
  :hover {
    background: ${COLOR.danger};
  }
  :focus {
    outline: none;
  }
`;
const InputMoneyArea = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputMoney = styled.input`
  width: 40%;
  height: 50px;
  border: none;
  outline: none;
  text-align: center;
`;
const Plus = styled.button`
  width: 10%;
  height: 50px;
`;
const Decrease = styled.button`
  width: 10%;
  height: 50px;
`;

function InputArea() {
  return (
    <InputWrapper>
      <InputItem placeholder="請輸入購買的商品"></InputItem>
      <InputMoneyArea>
        <Decrease>-100</Decrease>
        <InputMoney placeholder="請輸入金額"></InputMoney>
        <Plus>+100</Plus>
      </InputMoneyArea>
      <Category>
        <Kind>飲食</Kind>
        <Kind>交通油錢</Kind>
        <Kind>日常用品</Kind>
        <Kind>娛樂</Kind>
        <Kind>居家</Kind>
        <Kind>學習</Kind>
        <Kind>醫療</Kind>
        <Kind>電話網路</Kind>
        <Kind>水電瓦斯</Kind>
        <Kind>運動健身</Kind>
        <Kind>治裝費</Kind>
      </Category>
    </InputWrapper>
  );
}

export default InputArea;
