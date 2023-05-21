import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/cartReducer";
import cartItemReducer from "../Reducer/cartItemReducer";

const store = configureStore({
    reducer: {
        cartReducer: cartReducer.reducer,
        cartItemReducer: cartItemReducer.reducer
    }
})
export default store