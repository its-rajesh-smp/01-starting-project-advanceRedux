import { createSlice } from "@reduxjs/toolkit";

const cartItemReducer = createSlice({
    name: "cartItem",
    initialState: { cartItems: [], totalCartCounter: 0 },
    reducers: {
        addToCart: (state, actions) => {
            let isPresent = false
            const newArr = state.cartItems.map((item) => {
                if (item.title === actions.payload.title) {
                    item.quantity++
                    isPresent = true
                }
                return item
            })
            if (isPresent === true) {
                state.cartItems = newArr
            }
            else {
                state.cartItems.push({ ...actions.payload, quantity: 1 })
            }
            state.totalCartCounter++
        },

        deleteFromCart: (state, action) => {
            if (action.payload.quantity === 1) {
                const newArr = state.cartItems.filter((item) => {
                    if (item.title !== action.payload.title) {
                        return true
                    }
                })
                state.cartItems = newArr
            }
            else {
                const newArr = state.cartItems.map((item) => {
                    if (item.title === action.payload.title) {
                        item.quantity--
                    }
                    return item
                })
                state.cartItems = newArr
            }
            state.totalCartCounter--
        }

    }
})


export const { addToCart, deleteFromCart } = cartItemReducer.actions
export default cartItemReducer