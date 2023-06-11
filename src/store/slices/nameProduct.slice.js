import { createSlice } from "@reduxjs/toolkit";

const nameProductSlice = createSlice({
    name: 'nameProduct',
    initialState: [],
    reducers: {
        setNameProductGlobal:(state, action) => action.payload
    }
})

export const { setNameProductGlobal } = nameProductSlice.actions
export default nameProductSlice.reducer