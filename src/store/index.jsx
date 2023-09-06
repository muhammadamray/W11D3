import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import produceReducer from "./produce";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  produce: produceReducer,
  cart: cartReducer,
});
const preloadedState = {
  cart: {
    items: [{ id: 1, name: "Apple", quantity: 1 }],
  },
};

function configureStore(preloadedState = {}) {
  preloadedState = {
    cart: {
      items: [{ id: 1, name: "Apple", quantity: 1 }],
    },
  };
  return createStore(rootReducer, preloadedState, compose(applyMiddleware()));
}

export default configureStore;
