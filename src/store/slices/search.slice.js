import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: false,
    reducers: {
        setSearchGlobal: (state, action) => action.payload
    }
})

export const { setSearchGlobal } = searchSlice.actions
export default searchSlice.reducer