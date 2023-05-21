import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { isVisible: false, message: "" },
    reducers: {
        setVisible: (state, action) => {
            state.isVisible = true
            state.message = action.payload
        },
        setInvisible: (state) => {
            state.isVisible = false
            state.message = ""
        }
    }
})

export const { setInvisible, setVisible } = uiSlice.actions
export default uiSlice