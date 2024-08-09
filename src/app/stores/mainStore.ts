/* eslint-disable @typescript-eslint/no-explicit-any */
import { deskReducer } from "@/pages/game";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const mainReducer = combineReducers({
	"desk": deskReducer as any,
});

export const mainStore = configureStore({
	reducer: mainReducer,
})