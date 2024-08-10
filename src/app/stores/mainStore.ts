/* eslint-disable @typescript-eslint/no-explicit-any */
import { settingsReducer } from "@/entites/settings";
import { deskReducer } from "@/pages/game";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const mainReducer = combineReducers({
	"desk": deskReducer as any,
	"sound": settingsReducer as any,
});

export const mainStore = configureStore({
	reducer: mainReducer,
})