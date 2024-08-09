/* eslint-disable @typescript-eslint/no-explicit-any */
import { soundReducer } from "@/entites/sound";
import { deskReducer } from "@/pages/game";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const mainReducer = combineReducers({
	"desk": deskReducer as any,
	"sound": soundReducer as any,
});

export const mainStore = configureStore({
	reducer: mainReducer,
})