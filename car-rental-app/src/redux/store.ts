import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./features/carSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer:{
        carSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector