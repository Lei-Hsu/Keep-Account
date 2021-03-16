import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../style/style";

import { GlobalContext } from "../../context/GlobalState";

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
const Money = styled.span`
  margin-top: 10px;
  color: ${COLOR.danger};
`;
const InputMoneyArea = styled.div`
  width: 100%;
  margin-top: 10px;
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
  const [itemName, setItemName] = useState("");
  const [money, setMoney] = useState(0);
  const { addItems } = useContext(GlobalContext);
  const history = useHistory();
  // 商品名稱
  const handleItemName = (e) => {
    setItemName(e.target.value);
  };
  // 商品價格
  const handleMoneyChange = (e) => {
    setMoney(e.target.value);
  };
  // + - 100的按鈕
  const plusAndDecrease = (num) => {
    setMoney((pre) => eval(pre + num));
  };
  const addItemsAction = (e) => {
    e.preventDefault();
    // 以防使用者沒輸入商品名稱
    if (itemName === "") {
      alert("請輸入商品名稱");
    } else {
      let item = {
        id: 10,
        category: e.target.value,
        item: itemName,
        price: eval(money),
      };
      addItems(item);
      history.push("/");
    }
  };
  return (
    <InputWrapper>
      <InputItem
        onChange={handleItemName}
        placeholder="請輸入購買的商品"
      ></InputItem>
      {eval(money) ? <Money>金額：{money}</Money> : <Money>請輸入金額</Money>}
      <InputMoneyArea>
        <Decrease onClick={() => plusAndDecrease(-100)}>-100</Decrease>
        <InputMoney
          placeholder="請輸入金額"
          onChange={handleMoneyChange}
        ></InputMoney>
        <Plus onClick={() => plusAndDecrease("+100")}>+100</Plus>
      </InputMoneyArea>
      <Category>
        <Kind onClick={(e) => addItemsAction(e)} value="飲食">
          飲食
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="交通油錢">
          交通油錢
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="日常用品">
          日常用品
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="娛樂">
          娛樂
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="居家">
          居家
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="學習">
          學習
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="醫療">
          醫療
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="電話網路">
          電話網路
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="水電瓦斯">
          水電瓦斯
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="運動健身">
          運動健身
        </Kind>
        <Kind onClick={(e) => addItemsAction(e)} value="治裝費">
          治裝費
        </Kind>
      </Category>
    </InputWrapper>
  );
}

export default InputArea;
