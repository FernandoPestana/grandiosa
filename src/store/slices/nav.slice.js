import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice ({
    name: 'nav',
    initialState: false,
    reducers: {
        setNavGlobal:(state, action) => action.payload
    }
})

export const { setNavGlobal } = navSlice.actions
export default navSlice.reducer
