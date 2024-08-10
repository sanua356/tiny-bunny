import { createSlice } from '@reduxjs/toolkit';

import { TAvailableLanguages } from './types';

export type TSettingsSliceState = {
	isActivatedSound: boolean;
	currentLanguage: TAvailableLanguages;
}

const getCurrentLang = () => {
	const savedLang = localStorage.getItem('current_language');
	if (savedLang) {
		return savedLang as TAvailableLanguages;
	}
	let language = window.navigator.language;
	if (language !== 'ru-RU' && language !== 'en-US') {
		language = 'en-US';
	}
	localStorage.setItem('current_language', language);
	return language as TAvailableLanguages;
}

const initialState: TSettingsSliceState = {
	isActivatedSound: localStorage.getItem('sound_is_activated') === 'true',
	currentLanguage: getCurrentLang(),
}

const settingsSlice = createSlice({
	name: 'settingsSlice',
	initialState,
	reducers: {
		setActivateSound(state, action) {
			state.isActivatedSound = action.payload;
			localStorage.setItem('sound_is_activated', String(action.payload));
		},
		changeCurrentLangugage(state, action) {
			state.currentLanguage = action.payload;
			localStorage.setItem('current_language', String(action.payload));
		}
	},
})

export const { setActivateSound, changeCurrentLangugage } = settingsSlice.actions;
export default settingsSlice.reducer;
