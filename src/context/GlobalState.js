import React, { useReducer, createContext } from "react";
import ItemsReducer from "./ItemsReducer";
import { ConstantType } from "./ConstantType";

const item = JSON.parse(localStorage.getItem("item")) || [];
const initialState = {
  itemsList: item,
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
