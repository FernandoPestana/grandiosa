import { createSlice } from "@reduxjs/toolkit";

const productTitleSlice = createSlice ({
    name: 'productTitle',
    initialState: '',
    reducers: {
        setProductTitleGlobal:(state, action) => action.payload
    }
})

export const { setProductTitleGlobal } = productTitleSlice.actions
export default productTitleSlice.reducer
