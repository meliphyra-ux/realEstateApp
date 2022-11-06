import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../components/Card";

interface FlatsSlice{
    flatsArray: CardProps[]
    pageCounter: number
}

const initialState: FlatsSlice = {
    flatsArray: [],
    pageCounter: 0,
}

export const flatsSlice = createSlice({
    name: "flatsSlice",
    initialState,
    reducers: {
      addFlats: (state, action: PayloadAction<CardProps[]>) => {
        state.flatsArray = [...action.payload]
        state.pageCounter += 1
      }
    },
  });
  
  export const { addFlats } = flatsSlice.actions;
  
  export default flatsSlice.reducer;
  