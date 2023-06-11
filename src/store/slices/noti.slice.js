import { createSlice } from "@reduxjs/toolkit";

const notiSlice = createSlice ({
    name: 'noti',
    initialState: false,
    reducers: {
        setNotiGlobal:(state, action) => action.payload
    }
})

export const { setNotiGlobal } = notiSlice.actions
export default notiSlice.reducer
