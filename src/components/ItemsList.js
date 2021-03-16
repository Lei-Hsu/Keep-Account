import React from "react";
import styled from "styled-components";
import { COLOR, FONT } from "../style/style";

const ListWrapper = styled.div`
  width: 100%;
  height: 60vh;
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
  color: ${COLOR.primary};
  font-weight: bold;
`;
const Title = styled.span`
  color: ${COLOR.normal};
  font-size: ${FONT.md};
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
  return (
    <ListWrapper>
      <List>
        <Item>
          <Kind>飲食</Kind>
          <Title>漢堡</Title>
          <Detail>
            <Spent>$100</Spent>
            <Delete>X</Delete>
          </Detail>
        </Item>
        <Item>
          <Kind>飲食</Kind>
          <Title>漢堡</Title>
          <Detail>
            <Spent>$100</Spent>
            <Delete>X</Delete>
          </Detail>
        </Item>
        <Item>
          <Kind>飲食</Kind>
          <Title>漢堡</Title>
          <Detail>
            <Spent>$100</Spent>
            <Delete>X</Delete>
          </Detail>
        </Item>
        <Item>
          <Kind>飲食</Kind>
          <Title>漢堡</Title>
          <Detail>
            <Spent>$100</Spent>
            <Delete>X</Delete>
          </Detail>
        </Item>
      </List>
    </ListWrapper>
  );
}

export default ItemsList;
