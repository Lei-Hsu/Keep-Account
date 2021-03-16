import React, { useReducer, createContext } from "react";
import ItemsReducer from "./ItemsReducer";
import { ConstantType } from "./ConstantType";

const initialState = {
  itemsList: [
    {
      id: 1,
      category: "飲食",
      item: "漢堡",
      price: 100,
    },
    {
      id: 2,
      category: "學習",
      item: "買書",
      price: 100,
    },
    {
      id: 3,
      category: "娛樂",
      item: "看電影",
      price: 200,
    },
    {
      id: 4,
      category: "交通油錢",
      item: "加油",
      price: 150,
    },
    {
      id: 5,
      category: "飲食",
      item: "飲料",
      price: 50,
    },
    {
      id: 1,
      category: "飲食",
      item: "漢堡",
      price: 100,
    },
    {
      id: 2,
      category: "學習",
      item: "買書",
      price: 100,
    },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// 添加 Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemsReducer, initialState);
  //dispatch => 刪除動作
  function deleteItems(id) {
    dispatch({
      type: ConstantType.DELETE_ITEMS,
      payload: id,
    });
  }
  //dispatch => 增加動作
  function addItems(item) {
    dispatch({
      type: ConstantType.ADD_ITEMS,
      payload: item,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        itemsList: state.itemsList,
        deleteItems,
        addItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
