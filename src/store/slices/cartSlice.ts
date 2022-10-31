import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../components/Card";

export interface CartState {
    cartItems: CardProps[]
}

const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
        addItem: (state, action: PayloadAction<CardProps>)=>{
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<CardProps>)=> {
           const modArray = state.cartItems.filter(item => JSON.stringify(item) !== JSON.stringify(action.payload))
           state.cartItems = [...modArray]
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer