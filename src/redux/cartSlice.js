import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers:{
        addItems:(state,action)=>{
            console.log(action.payload)
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            const newArray = state.items.filter((data)=>{
                return(
                    data.id !== action.payload
                )
            })
            state.items = newArray;
            //state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
})

export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;