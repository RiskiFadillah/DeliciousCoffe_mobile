// src/store.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ProductsReducer } from "./reducerProduct";

const rootReducer = combineReducers({
  product: ProductsReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
