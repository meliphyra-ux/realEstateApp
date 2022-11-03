import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../components/Card";

export interface CartState {
    cartItems: CardProps[],
    totalPrice: number
}

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
        addItem: (state, action: PayloadAction<CardProps>)=>{
            // if(state.cartItems.includes(action.payload))
            state.cartItems.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeItem: (state, action: PayloadAction<CardProps>)=> {
           state.cartItems = [...state.cartItems.filter(item => JSON.stringify(item) !== JSON.stringify(action.payload))]
           state.totalPrice -= action.payload.price
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer