import { createSlice } from "@reduxjs/toolkit";
import { checkObj, getIndex } from "../utils/functions";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers:{
        addItems:(state,action)=>{
            if(checkObj(state.items,action.payload)){
                const index = getIndex(state.items,action.payload);
                state.items[index] = {...state.items[index],totalNumber: state.items[index].totalNumber+1}
            }
            else state.items.push(action.payload);
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