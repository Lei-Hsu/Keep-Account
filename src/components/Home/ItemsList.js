import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { COLOR, FONT } from "../../style/style";

import { GlobalContext } from "../../context/GlobalState";

const ListWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  list-style: none;
`;
const Item = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.normal};
`;
const Kind = styled.span`
  width: 25%;
  color: ${COLOR.primary};
  font-weight: bold;
`;
const Title = styled.span`
  width: 25%;
  color: ${COLOR.normal};
  font-size: ${FONT.md};
  text-align: left;
`;
const Detail = styled.div``;
const Spent = styled.span`
  padding: 10px;
`;
const Delete = styled.button`
  outline: none;
  width: 20px;
  height: 25px;
  background: ${COLOR.danger};
  border: none;
  color: #fff;
`;

function ItemsList() {
  const { itemsList, deleteItems } = useContext(GlobalContext);
  useEffect(() => {
    ///更新完畫面再存入LocalStorage 新增的與刪除的一起進行，不用兩次動作
    localStorage.setItem("item", JSON.stringify(itemsList));
  }, [itemsList]);
  return (
    <ListWrapper>
      <List>
        {itemsList.map((items) => {
          return (
            <Item key={items.id}>
              <Kind>{items.category}</Kind>
              <Title>{items.item}</Title>
              <Detail>
                <Spent>${items.price}</Spent>
                <Delete onClick={() => deleteItems(items.id)}>X</Delete>
              </Detail>
            </Item>
          );
        })}
      </List>
    </ListWrapper>
  );
}

export default ItemsList;
