import { createSlice } from "@reduxjs/toolkit";

const subtotalSlice = createSlice ({
    name: 'subtotal',
    initialState: [],
    reducers: {
        setSubTotalGlobal:(state, action) => {
            const newValue = action.payload;
            state.push(newValue);
        },
    }
})

export const { setSubTotalGlobal } = subtotalSlice.actions
export default subtotalSlice.reducer
