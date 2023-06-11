import { createSlice } from "@reduxjs/toolkit";

const productQuantitySlice = createSlice ({
    name: 'productQuantity',
    initialState: [],
    reducers: {
        setProductQuantityGlobal:(state, action) => {
            const newValue = action.payload;
            state.push(newValue);
        },
        updateQuantity: (state, action) => {
            const { id, quantity} = action.payload;                                    
            return state.map((item) => {   
                console.log(quantity)                           
                if (item.id === id) {                    
                    return {
                        ...item,
                        quantity: quantity
                    };
                }                 
                return item; 
            });
          },
    }
})

export const { setProductQuantityGlobal, updateQuantity } = productQuantitySlice.actions
export default productQuantitySlice.reducer
