import { createSlice } from '@reduxjs/toolkit';

export type TSettingsSliceState = {
	isActivatedSound: boolean;
}

const initialState: TSettingsSliceState = {
	isActivatedSound: localStorage.getItem('sound_is_activated') === 'true',
}

const settingsSlice = createSlice({
	name: 'settingsSlice',
	initialState,
	reducers: {
		setActivateSound(state, action) {
			state.isActivatedSound = action.payload;
			localStorage.setItem('sound_is_activated', String(action.payload));
		},
	},
})

export const { setActivateSound } = settingsSlice.actions;
export default settingsSlice.reducer;
