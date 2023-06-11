import { createSlice } from "@reduxjs/toolkit";

const productIdSlice = createSlice ({
    name: 'productId',
    initialState: JSON.parse(localStorage.getItem('productId')),
    reducers: {
        setProductIdGlobal: (state, action) => action.payload
    }
})

export const { setProductIdGlobal } = productIdSlice.actions
export default productIdSlice.reducer

