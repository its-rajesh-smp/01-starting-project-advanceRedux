import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/cartReducer";

const store = configureStore({
    reducer: {
        cartReducer: cartReducer.reducer
    }
})
export default store