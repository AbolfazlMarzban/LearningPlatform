import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart: (state : any, action) =>{
            const itemExists:any = state.find((item:any)=> item._id == action.payload.id)
            if(itemExists){
                itemExists.quantity++
            } else {
                state.push({...action.payload , quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex((item:any) => item._id === action.payload);
            state.splice(index, 1);
          },
    }
})


export const cartReducer = cartSlice.reducer;

export const {addToCart, removeFromCart} = cartSlice.actions;

