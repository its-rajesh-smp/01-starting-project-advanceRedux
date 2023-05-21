import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/cartReducer";
import cartItemReducer from "../Reducer/cartItemReducer";
import uiSlice from "../Reducer/uiReducer";

const store = configureStore({
    reducer: {
        cartReducer: cartReducer.reducer,
        cartItemReducer: cartItemReducer.reducer,
        uiSlice: uiSlice.reducer
    }
})
export default store