import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setInvisible, setVisible } from "./uiReducer";

const cartItemReducer = createSlice({
    name: "cartItem",
    initialState: { cartItems: [], totalCartCounter: 0 },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.totalCartCounter = action.payload.totalCartCounter
            state.cartItems = action.payload.cartItems
        }

    }
})


export const { addToCart } = cartItemReducer.actions
export default cartItemReducer




export const addToServer = (clickedItem) => {
    return async (dispatch, getState) => {
        try {
            let prevItem = getState().cartItemReducer.cartItems
            let currentCartItem = [...prevItem]
            let currentTotalCartCounter = getState().cartItemReducer.totalCartCounter + 1

            let isPresent = false
            const newArr = currentCartItem.map((item) => {
                if (item.title === clickedItem.title) {
                    const newItem = { ...item, quantity: item.quantity + 1 }
                    isPresent = true
                    return newItem
                }
                return item
            })
            if (isPresent === true) {
                currentCartItem = newArr
            }
            else {
                currentCartItem.push({ ...clickedItem, quantity: 1 })
            }

            console.log(currentCartItem);

            const { data: cartData } = await axios.put('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', currentCartItem)
            const { data: totalData } = await axios.put('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cartTotal.json', currentTotalCartCounter)

            console.log(cartData);

            dispatch(addToCart({ cartItems: cartData, totalCartCounter: totalData }))
            dispatch(setVisible("DATA SENDED"))

            setTimeout(function () {
                dispatch(setInvisible())
            }, 3000);

        } catch (error) {
            dispatch(setVisible("ERROR"))
            console.log(error);

            setTimeout(function () {
                dispatch(setInvisible())
            }, 3000);
        }
    }
}




export const deleteFromServer = (title, quantity) => {
    return async (dispatch, getState) => {
        try {
            let prevItem = getState().cartItemReducer.cartItems
            let currentCartItem = [...prevItem]
            let currentTotalCartCounter = getState().cartItemReducer.totalCartCounter - 1

            if (quantity === 1) {
                const newArr = currentCartItem.filter((item) => {
                    if (item.title !== title) {
                        return true
                    }
                })
                currentCartItem = newArr

                await axios.delete('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
                if (currentTotalCartCounter === 0) {
                    await axios.delete('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cartTotal.json')
                }
                else {
                    await axios.put('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cartTotal.json', currentTotalCartCounter)
                }

                dispatch(addToCart({ cartItems: newArr, totalCartCounter: currentTotalCartCounter }))

            }
            else {
                const newArr = currentCartItem.map((item) => {
                    if (item.title === title) {
                        const newItem = { ...item, quantity: item.quantity - 1 }
                        return newItem
                    }
                    return item
                })
                currentCartItem = newArr
                const { data: cartData } = await axios.put('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', currentCartItem)
                const { data: totalData } = await axios.put('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cartTotal.json', currentTotalCartCounter)
                dispatch(addToCart({ cartItems: cartData, totalCartCounter: totalData }))
            }
            dispatch(setVisible("DATA SENDED"))

            setTimeout(function () {
                dispatch(setInvisible())
            }, 3000);
        }
        catch (error) {
            dispatch(setVisible("ERROR"))
            console.log(error);

            setTimeout(function () {
                dispatch(setInvisible())
            }, 3000);
        }
    }
}



export const fetchFormServer = () => {
    return async (dispatch, getState) => {
        try {
            const { data: cartData } = await axios.get('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
            const { data: totalData } = await axios.get('https://sharpener-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/cartTotal.json')

            if (cartData === null || totalData === null) {
                return
            }

            dispatch(setVisible("DATA FETCHED"))
            dispatch(addToCart({ cartItems: cartData, totalCartCounter: totalData }))
            setTimeout(function () {
                dispatch(setInvisible())
            }, 3000);

        } catch (error) {
            console.log(error);
            dispatch(setVisible("ERROR"))
            setTimeout(function () {
                dispatch(setInvisible())
            }, 3000);
        }
    }
}