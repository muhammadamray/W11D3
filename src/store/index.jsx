import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import produceReducer from "./produce";
const rootReducer = combineReducers({
  produce: produceReducer,
});

function configureStore() {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
  const store = createStore(rootReducer, enhancer);
  return store;
}
export default configureStore;
