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
        add: (state, action: PayloadAction<CardProps>)=>{
            state.cartItems.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions

export default cartSlice.reducer