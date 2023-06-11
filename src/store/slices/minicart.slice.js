import { createSlice } from "@reduxjs/toolkit";

const minicartSlice = createSlice ({
    name: 'minicart',
    initialState: false,
    reducers: {
        setMinicartGlobal:(state, action) => action.payload
    }
})

export const { setMinicartGlobal } = minicartSlice.actions
export default minicartSlice.reducer
