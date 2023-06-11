import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        setCartGlobal: (state, action) => {
            const newItem = action.payload;
            return [...state, newItem]; // Crear una nueva copia del estado con el nuevo objeto agregado
          },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            console.log(itemId)
            return state.filter(item => item.id !== itemId); // Filtrar el objeto a eliminar
        },
        updateCartItemPrice: (state, action) => {
            const { id, newPrice} = action.payload;                                    
            console.log(id)            
            return state.map((item) => {    
                if (item.id === id) {                    
                    return {
                        ...item,
                        price: newPrice,
                    };
                }                 
                return item; 
            });
          },
    }
})

export const { setCartGlobal, removeFromCart, updateCartItemPrice } = cartSlice.actions
export default cartSlice.reducer