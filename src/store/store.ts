import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import flatsReducer from "./slices/flatsSlice"


export const store = configureStore({
    reducer:{
        cart: cartReducer,
        flats: flatsReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActionPaths: ['payload'],
                ignoredPaths: ['flats.flatsArray']
            }
        })
    
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch