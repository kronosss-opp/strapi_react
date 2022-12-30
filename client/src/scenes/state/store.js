import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./index.js";


export const store = configureStore({
  reducer: { cart: cartReducer },
});
