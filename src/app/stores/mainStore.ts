/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { settingsReducer } from "entities/settings";
import { deskReducer } from "pages/game";

const mainReducer = combineReducers({
	"desk": deskReducer as any,
	"sound": settingsReducer as any,
});

export const mainStore = configureStore({
	reducer: mainReducer,
})