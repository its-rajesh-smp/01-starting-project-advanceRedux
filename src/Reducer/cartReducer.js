import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart",
    initialState: { cartVisible: false },
    reducers: {
        toggleCard: (state) => {
            state.cartVisible = !state.cartVisible
        }
    }
})

export const { toggleCard } = cartReducer.actions
export default cartReducer