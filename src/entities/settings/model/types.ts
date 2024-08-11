import { Reducer } from "@reduxjs/toolkit";

import { TSettingsSliceState } from "./settings.slice";

export type TSettingsSliceStore = ReturnType<Reducer<{
	sound: TSettingsSliceState;
}>>

export type TAvailableLanguages = 'ru-RU' | 'en-US';