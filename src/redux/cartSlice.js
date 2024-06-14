import { createSlice } from "@reduxjs/toolkit";
import { checkObj, findObjIndex, getIndex } from "../utils/functions";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalSelectedNumber: 0,
    },
    reducers:{
        addItems:(state,action)=>{
            if(checkObj(state.items,action.payload)){
                const index = getIndex(state.items,action.payload);
                 const number= state.items[index].totalNumber + Math.floor(action.payload.totalNumber)
                //const number = state.items[index].totalNumber +1;
                state.items[index] = {...state.items[index],totalNumber:number,selected: false}
            }
            else state.items.push(action.payload);
        },
        changeTotalItems:(state,action)=>{
            const index = getIndex(state.items,action.payload);
            var beforeVal = state.items[index].totalNumber;
            state.items[index] = {...state.items[index],totalNumber: action.payload.totalNumber}
            var changedValue = state.totalSelectedNumber-beforeVal + Math.floor(state.items[index].totalNumber)
            state.totalSelectedNumber = changedValue
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
        selectItem:(state,action)=>{
            const number = Math.floor(state.totalSelectedNumber) + Math.floor(action.payload);
            state.totalSelectedNumber = number;
        },
        isSelectedItem:(state,action)=>{
            const index = findObjIndex(action.payload.id,state.items)
            state.items[index] = {...state.items[index],selected: true}
        },
        notSelectedItem:(state,action)=>{
            const index = findObjIndex(action.payload.id,state.items)
            state.items[index] = {...state.items[index],selected: false}
        },
        deletedItem:(state,action)=>{
            const number = Math.floor(state.totalSelectedNumber) - Math.floor(action.payload);
            state.totalSelectedNumber = number; 
        },
        changeSelectedCartItems:(state,action)=>{
            const index = findObjIndex(action.payload.id,state.items)
            state.items[index]= {...state.items[index], totalNumber: action.payload.totalNumber}
        }
    },
})

export const {addItems,removeItems,clearCart,selectItem,deletedItem,changeSelectedCartItems,changeTotalItems,isSelectedItem,notSelectedItem} = cartSlice.actions;
export default cartSlice.reducer;