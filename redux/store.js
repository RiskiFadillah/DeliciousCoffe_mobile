import { configureStore } from "@reduxjs/toolkit";
import reducerCart from "./reducerCart";

export default configureStore({
  reducer: {
    cart: reducerCart,
  },
});
