const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};
export default function cartReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case ADD_TO_CART:
      const newState = { ...state };
      const newObj = {
        name: action.item.name,
        id: action.item.id,
        quantity: (newState[action.item.id] || 0) + 1,
      };
      newState[action.item.id] = newObj;
      return newState;
    case REMOVE_FROM_CART:
      const newerState = { ...state };
      delete newerState[action.item.id];
      return newerState;
    default:
      return state;
  }
}
