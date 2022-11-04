import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../components/Card";

export interface CartItems extends CardProps {
  counter: number;
}
export interface CartState {
  cartItems: CartItems[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItems>) => {
      const findDuplicate = [
        ...state.cartItems.filter((item) => item._id === action.payload._id),
      ];
      if (findDuplicate.length > 0) {
        let changedItem = state.cartItems.indexOf(findDuplicate[0]);
        state.cartItems[changedItem].counter += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalPrice += action.payload.price;
      console.log(current(state.cartItems));
    },
    removeItem: (state, action: PayloadAction<CartItems>) => {
      state.totalPrice -= action.payload.price * action.payload.counter;
      state.cartItems = [
        ...state.cartItems.filter((item) => item._id !== action.payload._id),
      ];
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
