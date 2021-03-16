import { ConstantType } from "./ConstantType";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ConstantType.DELETE_ITEMS:
      return {
        ...state,
        itemsList: state.itemsList.filter(
          (items) => items.id !== action.payload
        ),
      };
    case ConstantType.ADD_ITEMS:
      return {
        ...state,
        itemsList: [...state.itemsList, action.payload],
      };
    default:
      return state;
  }
};
